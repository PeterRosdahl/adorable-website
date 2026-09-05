import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/components/KineticWordmark.astro', import.meta.url), 'utf8');
const code = stripTypeScriptTypes(source.match(/<script>([\s\S]*?)<\/script>/)[1]);
assert.doesNotMatch(source, /motion-control|<button/, 'No pause button remains');
assert.doesNotMatch(source, /style\.flexGrow\s*=/, 'Motion must not change layout widths');

async function setup({ reduced = false, hidden = false } = {}) {
  const frames = new Map();
  let id = 0;
  const listeners = new Map();
  const mediaListeners = [];
  const glyphs = Array.from({ length: 9 }, () => ({ offsetWidth: 100, style: { setProperty(key, value) { this[key] = value; } } }));
  const weights = [1.02, .67, 1.36, .73, .83, .9, .47, .88, .32];
  const slots = weights.map((weight, i) => ({
    dataset: { weight }, style: {}, querySelector: () => glyphs[i]
  }));
  const fallback = { hidden: false };
  const kinetic = { hidden: true };
  const stage = {
    clientWidth: 1200,
    style: { setProperty(key, value) { this[key] = value; } },
    querySelectorAll: () => slots,
    querySelector: selector => selector === '.static-type' ? fallback : kinetic,
    addEventListener(type, callback) { listeners.set(type, callback); },
    getBoundingClientRect: () => ({ left: 0, width: 1200 })
  };
  const preference = { matches: reduced, addEventListener: (_, cb) => mediaListeners.push(cb) };
  const doc = { hidden, querySelector: () => stage, fonts: { ready: Promise.resolve() },
    addEventListener(type, callback) { listeners.set(type, callback); } };
  let intersection;
  vm.runInNewContext(code, {
    document: doc,
    window: { matchMedia: query => query.includes('reduced-motion') ? preference : { matches: true } },
    requestAnimationFrame: callback => { frames.set(++id, callback); return id; },
    cancelAnimationFrame: frame => frames.delete(frame),
    ResizeObserver: class { constructor(cb) { this.cb = cb; } observe() { this.cb(); } },
    IntersectionObserver: class { constructor(cb) { intersection = cb; } observe() { intersection([{ isIntersecting: true }]); } }
  });
  await Promise.resolve();
  await Promise.resolve();
  function step(time) {
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach(callback => callback(time));
  }
  function settle(start, limit = 5000) {
    let time = start;
    while (frames.size && time < start + limit) { step(time); time += 16; }
    assert.equal(frames.size, 0, 'Animation must settle and stop scheduling frames');
    return time - start;
  }
  return { frames, listeners, fallback, kinetic, preference, mediaListeners, doc, stage, slots, glyphs, weights, step, settle, intersection };
}

const reduced = await setup({ reduced: true });
assert.equal(reduced.frames.size, 0);
assert.equal(reduced.kinetic.hidden, false, 'Reduced motion keeps the wordmark visible');
assert.equal(reduced.fallback.hidden, true);
assert.ok(reduced.stage.style['--gradient-x'], 'Static gradient is available with reduced motion');

const normal = await setup();
assert.equal(normal.frames.size, 1, 'Only one animation loop runs');
assert.ok(normal.settle(16) <= 4300, 'Automatic motion ends before five seconds');
assert.ok(normal.glyphs.every(glyph => Math.abs(parseFloat(glyph.style['--letter-offset'])) < .001));
normal.listeners.get('pointermove')({ clientX: 1050 });
assert.equal(normal.frames.size, 1, 'A pointer movement starts an interactive response');
const restingGradient = normal.stage.style['--gradient-x'];
normal.settle(6000);
assert.notEqual(normal.stage.style['--gradient-x'], restingGradient, 'The gradient follows the same interactive motion');
assert.ok(normal.glyphs.some(glyph => Math.abs(parseFloat(glyph.style['--letter-offset'])) > 1), 'Pointer response visibly moves glyphs');
normal.listeners.get('pointerleave')();
normal.settle(9000);
assert.ok(normal.glyphs.every(glyph => Math.abs(parseFloat(glyph.style['--letter-offset'])) < .001));
normal.listeners.get('visibilitychange')();
assert.equal(normal.frames.size, 0, 'An ended introduction never restarts by itself');

const hidden = await setup({ hidden: true });
assert.equal(hidden.frames.size, 0, 'Hidden tabs do not animate');
hidden.doc.hidden = false;
hidden.listeners.get('visibilitychange')();
assert.equal(hidden.frames.size, 1);
hidden.step(16);
hidden.doc.hidden = true;
hidden.listeners.get('visibilitychange')();
assert.equal(hidden.frames.size, 0);
hidden.doc.hidden = false;
hidden.listeners.get('visibilitychange')();
assert.equal(hidden.frames.size, 0, 'Hiding a running introduction ends it');

const changed = await setup();
changed.step(16);
changed.preference.matches = true;
changed.mediaListeners.forEach(callback => callback());
assert.equal(changed.frames.size, 0, 'Preference changes cancel motion immediately');
changed.listeners.get('pointermove')({ clientX: 800 });
assert.equal(changed.frames.size, 0, 'Reduced motion also suppresses pointer motion');

const offscreen = await setup();
offscreen.step(16);
offscreen.intersection([{ isIntersecting: false }]);
assert.equal(offscreen.frames.size, 0, 'Offscreen animation stops');
console.log('Motion checks passed: finite introduction, idle pointer response, reduced motion and hidden/offscreen states.');
