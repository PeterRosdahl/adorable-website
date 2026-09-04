import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/components/KineticWordmark.astro', import.meta.url), 'utf8');
const code = stripTypeScriptTypes(source.match(/<script>([\s\S]*?)<\/script>/)[1]);

async function setup({ reduced = false, hidden = false } = {}) {
  const frames = new Map();
  let id = 0;
  const listeners = new Map();
  const mediaListeners = [];
  const glyphs = Array.from({ length: 9 }, () => ({ offsetWidth: 100, style: { setProperty() {} } }));
  const slots = [1.02, .67, 1.36, .73, .83, .9, .47, .88, .32].map((weight, i) => ({
    dataset: { weight }, style: {}, querySelector: () => glyphs[i]
  }));
  const control = {
    hidden: true, dataset: { play: 'Start', pause: 'Pause' }, attrs: {},
    setAttribute(key, value) { this.attrs[key] = value; },
    addEventListener(type, callback) { listeners.set('control:' + type, callback); }
  };
  const fallback = { hidden: false };
  const kinetic = { hidden: true };
  const stage = {
    clientWidth: 1200,
    querySelectorAll: () => slots,
    querySelector: selector => selector === '.motion-control' ? control : selector === '.static-type' ? fallback : kinetic,
    addEventListener(type, callback) { listeners.set(type, callback); },
    getBoundingClientRect: () => ({ left: 0, width: 1200 })
  };
  const preference = { matches: reduced, addEventListener: (_, callback) => mediaListeners.push(callback) };
  const doc = {
    hidden, querySelector: () => stage, fonts: { ready: Promise.resolve() },
    addEventListener(type, callback) { listeners.set(type, callback); }
  };
  const context = vm.createContext({
    document: doc,
    window: { matchMedia: query => query.includes('reduced-motion') ? preference : { matches: true } },
    requestAnimationFrame: callback => { frames.set(++id, callback); return id; },
    cancelAnimationFrame: frame => frames.delete(frame),
    ResizeObserver: class { constructor(callback) { this.callback = callback; } observe() { this.callback(); } },
    IntersectionObserver: class { constructor(callback) { this.callback = callback; } observe() { this.callback([{ isIntersecting: true }]); } }
  });
  vm.runInContext(code, context);
  await Promise.resolve();
  await Promise.resolve();
  return { frames, listeners, control, fallback, kinetic, preference, mediaListeners, doc };
}

const reduced = await setup({ reduced: true });
assert.equal(reduced.frames.size, 0, 'Reduced motion must not schedule animation');
assert.equal(reduced.control.hidden, true);
assert.equal(reduced.kinetic.hidden, false, 'The wordmark remains visible');
assert.equal(reduced.fallback.hidden, true);

const normal = await setup();
assert.equal(normal.frames.size, 1, 'Only one animation loop should run');
normal.listeners.get('control:click')();
assert.equal(normal.frames.size, 0, 'Pause cancels the loop');
assert.equal(normal.control.attrs['aria-pressed'], 'true');
normal.listeners.get('control:click')();
assert.equal(normal.frames.size, 1, 'Resume restarts one loop');
normal.doc.hidden = true;
normal.listeners.get('visibilitychange')();
assert.equal(normal.frames.size, 0, 'Hidden tabs do not animate');
normal.doc.hidden = false;
normal.listeners.get('visibilitychange')();
assert.equal(normal.frames.size, 1);
normal.preference.matches = true;
normal.mediaListeners.forEach(callback => callback());
assert.equal(normal.frames.size, 0, 'A live reduced-motion change cancels animation');
assert.equal(normal.control.hidden, true);

const hidden = await setup({ hidden: true });
assert.equal(hidden.frames.size, 0, 'An initially hidden tab does not animate');
console.log('Motion checks passed: reduced motion, pause/resume, one loop, hidden tabs and preference changes.');
