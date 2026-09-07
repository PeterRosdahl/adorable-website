import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

// Runs the actual form script against controlled DOM/network doubles.
// No requests to Web3Forms are made by this test.
const source = readFileSync(new URL('../src/components/ContactPage.astro', import.meta.url), 'utf8');
const code = stripTypeScriptTypes(source.match(/<script>([\s\S]*?)<\/script>/)[1]);
const html = readFileSync(new URL('../dist/kontakt/index.html', import.meta.url), 'utf8');
const options = id => [...html.match(new RegExp(`<select[^>]*id="${id}"[^>]*>([\\s\\S]*?)<\\/select>`))[1].matchAll(/<option value="([^"]*)"/g)].map(m => ({ value: m[1] }));

function setup({ search = '', en = false, meeting = true, valid = true, honeypot = false, response = 'success', analyticsThrows = false } = {}) {
  const node = (value = '', extra = {}) => ({ value, disabled: false, hidden: false, textContent: '', focus() { this.focused = true; }, ...extra });
  const controls = [
    node('Test Person', {name:'name'}), node('test@example.invalid',{name:'email'}),
    node('unsure',{name:'interest',options:options('contact-interest')}),
    node('',{name:'industry',disabled:true,options:options('contact-industry')}),
    node('Tuesday',{name:'preferred_time'}), node('My question',{name:'message'}),
    node('on',{name:'botcheck',checked:honeypot,type:'checkbox'}),
    node('meeting',{name:'request_type',checked:meeting,type:'radio',addEventListener(){}}),
    node('question',{name:'request_type',checked:!meeting,type:'radio',addEventListener(){}})
  ];
  const [name,email,interest,industry,time,message] = controls;
  const submit=node(), label=node(), error=node('',{hidden:true}), success=node('',{hidden:true}), meetingField=node(), meetingCopy=node(), industryField=node('',{hidden:true});
  const nodes = new Map([['.form-submit',submit],['[data-submit-label]',label],['.form-error',error],['[data-meeting-field]',meetingField],['[data-meeting-copy]',meetingCopy],['#contact-time',time],['#contact-interest',interest],['#contact-industry',industry],['[data-industry-field]',industryField]]);
  let onSubmit, timeout, resetCount=0, resolveRequest;
  const requests=[];
  const form = {
    dataset:{lang:en?'en':'sv'}, action:'https://api.web3forms.com/submit',
    querySelector(selector) { return selector.includes(':checked') ? controls.find(c=>c.type==='radio'&&c.checked) : nodes.get(selector); },
    querySelectorAll(selector) { return selector==='[name="request_type"]' ? controls.filter(c=>c.type==='radio') : controls; },
    reportValidity:()=>valid, addEventListener(event, callback){if(event==='submit')onSubmit=callback;},
    setAttribute(){},removeAttribute(){},reset(){resetCount++;}
  };
  class TestFormData extends Map {
    constructor() { super(controls.filter(c=>!c.disabled && (!['radio','checkbox'].includes(c.type)||c.checked)).map(c=>[c.name,c.value])); }
  }
  vm.runInNewContext(code, {
    document:{querySelector:selector=>selector==='.contact-form'?form:success},
    window:{location:{search},setTimeout:fn=>{timeout=fn;return 1;},clearTimeout:()=>{timeout=null;},umami:{track(){if(analyticsThrows)throw Error('analytics');}}},
    URLSearchParams, FormData:TestFormData, AbortController,
    fetch: async (url, request) => {
      requests.push({url,request});
      assert.equal(submit.disabled,true,'Submit locked while sending');
      assert.ok(controls.every(c=>c.disabled),'Fields stable while sending');
      if(response==='network')throw Error('offline');
      if(response==='pending')await new Promise((resolve,reject)=>{resolveRequest=resolve;request.signal.addEventListener('abort',()=>reject(Error('timeout')));});
      return {ok:response!=='http-error',json:async()=>{if(response==='invalid-json')throw Error('parse');return {success:response!=='rejected'};}};
    }
  });
  return {name,email,interest,industry,time,message,submit,label,error,success,meetingField,industryField,requests,controls,
    send:()=>onSubmit({preventDefault(){}}), expire:()=>timeout?.(), resolve:()=>resolveRequest?.(), resets:()=>resetCount};
}

for(const {value} of options('contact-interest')) {
  const state=setup({search:`?interest=${value}`});
  assert.equal(state.interest.value,value,'Known interest preselected');
  await state.send();
  assert.equal(state.requests[0].request.body.get('interest'),value,'Interest reaches payload');
  assert.equal(state.requests[0].request.body.get('name'),'Test Person');
  assert.equal(state.success.hidden,false);
  assert.match(state.success.textContent,/Ingen tid är bokad ännu/);
  assert.equal(state.resets(),1);
  assert.equal(state.industry.disabled,true,'Unused industry remains disabled');
}
for(const {value} of options('contact-industry').filter(o=>o.value)) {
  const state=setup({search:`?industry=${value}`});
  assert.equal(state.industry.value,value);
  assert.equal(state.industryField.hidden,false);
  await state.send();
  assert.equal(state.requests[0].request.body.get('industry'),value);
}
const unknown=setup({search:'?interest=unknown&industry=%3Cscript%3E'});
assert.equal(unknown.interest.value,'unsure');
assert.equal(unknown.industryField.hidden,true);
const question=setup({meeting:false,en:true});
assert.equal(question.time.disabled,true);
await question.send();
assert.equal(question.requests[0].request.body.has('preferred_time'),false);
assert.match(question.success.textContent,/message has been sent/);
for(const response of ['network','http-error','invalid-json','rejected']) {
  const state=setup({search:'?interest=tiktok-annonsering',response});
  await state.send();
  assert.equal(state.success.hidden,true);
  assert.equal(state.error.hidden,false);
  assert.equal(state.message.value,'My question');
  assert.equal(state.interest.value,'tiktok-annonsering');
  assert.equal(state.resets(),0);
  assert.equal(state.submit.disabled,false);
}
for(const settings of [{valid:false},{honeypot:true}]) {
  const state=setup(settings);await state.send();assert.equal(state.requests.length,0);
}
const pending=setup({response:'pending'});
const first=pending.send();await pending.send();
assert.equal(pending.requests.length,1,'Double submits are blocked');
pending.expire();await first;
assert.equal(pending.error.hidden,false);assert.equal(pending.submit.disabled,false);
const analytics=setup({analyticsThrows:true});await analytics.send();
assert.equal(analytics.success.hidden,false,'Analytics cannot turn success into failure');
console.log('Contact checks passed: every interest and industry, payload, validation, honeypot, double submit, timeout, delivery errors, English and analytics isolation. No email sent.');
