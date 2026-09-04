import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/components/SiteMotion.astro', import.meta.url), 'utf8');
const code = stripTypeScriptTypes(source.match(/<script>([\s\S]*?)<\/script>/)[1]);

function setup({ reduced = false, hidden = false } = {}) {
  const listeners = new Map();
  const animations = [];
  class Node {}
  class Element extends Node {
    constructor(selector) { super(); this.selector = selector; }
    matches(selectors) { return selectors.split(',').map(x => x.trim()).includes(this.selector); }
    contains(element) { return this === element || this.child === element; }
    animate(keyframes, options) {
      const events = new Map();
      const animation = {
        effect: { target: this }, keyframes, options, cancelled: false,
        addEventListener: (event, callback) => events.set(event, callback),
        cancel() { this.cancelled = true; events.get('cancel')?.(); },
        finish() { events.get('finish')?.(); }
      };
      animations.push(animation);
      return animation;
    }
  }
  const targets = ['.page-hero .lead', '.deliverable', '.contact-panel'].map(selector => new Element(selector));
  const media = { matches: reduced, addEventListener: (_, cb) => listeners.set('reduce', cb) };
  const document = { hidden, activeElement: null, querySelectorAll: () => targets,
    addEventListener: (event, cb) => listeners.set(event, cb) };
  let observer;
  vm.runInNewContext(code, {
    Element, Node, document,
    window: { matchMedia: () => media, addEventListener: (event, cb) => listeners.set(event, cb) },
    IntersectionObserver: class {
      constructor(callback) { this.callback = callback; this.observed = new Set(); observer = this; }
      observe(target) { this.observed.add(target); }
      unobserve(target) { this.observed.delete(target); }
      disconnect() { this.observed.clear(); }
    }
  });
  const enter = (items = targets) => observer.callback(items.map(target => ({ target, isIntersecting: true })));
  return { targets, animations, document, listeners, media, observer, enter };
}

const normal = setup();
assert.equal(normal.animations.length, 0, 'Offscreen content is not animated or hidden');
normal.enter();
assert.equal(normal.animations.length, 3);
assert.equal(normal.observer.observed.size, 0, 'Reveals only run once');
assert.equal(normal.animations[0].options.delay, 180, 'Copy follows the title');
assert.equal(normal.animations[1].keyframes[0].transform, 'translateX(-36px)');
assert.equal(normal.animations[2].keyframes[0].transform, 'none', 'Form fields stay in place');
assert.ok(normal.animations.every(a => a.options.fill === 'backwards'), 'No persistent hidden state');
normal.listeners.get('focusin')({ target: normal.targets[2] });
assert.equal(normal.animations[2].cancelled, true, 'Keyboard focus immediately reveals a control');
assert.equal(normal.animations[0].cancelled, false, 'Unrelated motion is unaffected by focus');
normal.animations[0].finish();
normal.document.hidden = true;
normal.listeners.get('visibilitychange')();
assert.equal(normal.animations[1].cancelled, true, 'Hidden tabs stop pending reveals');
assert.equal(normal.animations[0].cancelled, false, 'Finished animations leave the active set');

const reduceAtStart = setup({ reduced: true });
reduceAtStart.enter();
assert.equal(reduceAtStart.animations.length, 0);
const reduceLive = setup();
reduceLive.enter([reduceLive.targets[0]]);
reduceLive.media.matches = true;
reduceLive.listeners.get('reduce')();
assert.equal(reduceLive.observer.observed.size, 0);
assert.equal(reduceLive.animations[0].cancelled, true);

const hidden = setup({ hidden: true });
hidden.enter();
assert.equal(hidden.animations.length, 0);
const focused = setup();
focused.document.activeElement = focused.targets[0];
focused.enter([focused.targets[0]]);
assert.equal(focused.animations.length, 0, 'Focused content never becomes hidden');
const link = setup();
link.targets[0].selector = 'a';
link.enter([link.targets[0]]);
assert.equal(link.animations[0].keyframes[0].transform, 'none', 'A link does not move away from a click');
const leaving = setup();
leaving.enter();
leaving.listeners.get('pagehide')();
assert.ok(leaving.animations.every(a => a.cancelled), 'Leaving a page clears all pending motion');

const css = readFileSync(new URL('../src/styles/site.css', import.meta.url), 'utf8');
assert.match(css, /prefers-reduced-motion:reduce[\s\S]*::view-transition-group\(\*\)/,
  'Reduced motion must also disable native view transitions');
console.log('Site motion checks passed: reveals, stagger, stable forms, focus, reduced motion and lifecycle cleanup.');
