import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { stripTypeScriptTypes } from 'node:module';
import vm from 'node:vm';

const source = readFileSync(new URL('../src/components/KineticWordmark.astro', import.meta.url), 'utf8');
const code = stripTypeScriptTypes(source.match(/<script>([\s\S]*?)<\/script>/)[1]);
assert.doesNotMatch(source, /style\.flexGrow\s*=/, 'Motion must not change layout widths');
assert.match(source, /<button class="wordmark-toggle" type="button" hidden/, 'The wordmark has a native keyboard-operable pause control');
assert.match(source, /data-paused='true'[\s\S]*animation-play-state:paused/, 'Pause also freezes the finite CSS entrance');

async function setup({ reduced = false, hidden = false, finePointer = true } = {}) {
  const frames = new Map();
  let id = 0;
  let now = 0;
  const listeners = new Map();
  const mediaListeners = [];
  const glyphs = Array.from({ length: 9 }, () => ({ offsetWidth: 100, style: { setProperty(key, value) { this[key] = value; } } }));
  const weights = [1.02, .67, 1.36, .73, .83, .9, .47, .88, .32];
  const slots = weights.map((weight, i) => ({
    dataset: { weight }, style: {}, querySelector: () => glyphs[i]
  }));
  const fallback = { hidden: false };
  const kinetic = { hidden: true };
  const toggle = {
    hidden: true,
    dataset: { pauseLabel: 'Pause', playLabel: 'Resume', pauseHint: 'Click to pause', playHint: 'Click to resume' },
    setAttribute(key, value) { this[key] = value; },
    addEventListener(type, callback) { listeners.set(`toggle:${type}`, callback); }
  };
  const stage = {
    clientWidth: 1200,
    style: { setProperty(key, value) { this[key] = value; } },
    setAttribute(key, value) { this[key] = value; },
    querySelectorAll: () => slots,
    querySelector: selector => ({ '.static-type': fallback, '.kinetic-type': kinetic, '.wordmark-toggle': toggle })[selector],
    addEventListener(type, callback) { listeners.set(type, callback); },
    getBoundingClientRect: () => ({ left: 0, width: 1200 })
  };
  const preference = { matches: reduced, addEventListener: (_, cb) => mediaListeners.push(cb) };
  const doc = { hidden, querySelector: () => stage, fonts: { ready: Promise.resolve() },
    addEventListener(type, callback) { listeners.set(type, callback); } };
  let intersection;
  let resize;
  vm.runInNewContext(code, {
    document: doc,
    window: {
      matchMedia: query => query.includes('reduced-motion') ? preference : { matches: finePointer },
      addEventListener(type, callback) { listeners.set(type, callback); }
    },
    requestAnimationFrame: callback => { frames.set(++id, callback); return id; },
    cancelAnimationFrame: frame => frames.delete(frame),
    ResizeObserver: class { constructor(cb) { resize = cb; } observe() { resize(); } },
    IntersectionObserver: class { constructor(cb) { intersection = cb; } observe() { intersection([{ isIntersecting: true }]); } }
  });
  await Promise.resolve();
  await Promise.resolve();
  function step(time) {
    now = time;
    const pending = [...frames.values()];
    frames.clear();
    pending.forEach(callback => callback(time));
    assert.ok(frames.size <= 1, 'Never create duplicate animation loops');
  }
  function advance(duration) {
    const end = now + duration;
    while (now < end) step(now + 16);
  }
  const snapshot = () => ({
    gradient: ['--gradient-x', '--gradient-y', '--gradient-hue'].map(key => stage.style[key]),
    offsets: glyphs.map(glyph => parseFloat(glyph.style['--letter-offset']))
  });
  return { frames, listeners, fallback, kinetic, preference, mediaListeners, doc, stage, toggle, glyphs, step, advance, snapshot, intersection, resize };
}

const reduced = await setup({ reduced: true });
assert.equal(reduced.frames.size, 0);
assert.equal(reduced.kinetic.hidden, false, 'Reduced motion keeps the wordmark visible');
assert.equal(reduced.fallback.hidden, true);
assert.equal(reduced.toggle.hidden, true, 'No inactive pause control is exposed when OS motion is disabled');
assert.ok(reduced.stage.style['--gradient-x'], 'Static gradient is available with reduced motion');
const originalScales = reduced.glyphs.map(glyph => Number(glyph.style['--letter-scale']));
// Height-relative font sizing changes glyph widths even when the viewport width
// is unchanged. ResizeObserver must refit the word without restarting motion.
reduced.glyphs.forEach(glyph => { glyph.offsetWidth *= 2; });
reduced.resize();
reduced.glyphs.forEach((glyph, i) => assert.equal(Number(glyph.style['--letter-scale']), originalScales[i] / 2));
assert.equal(reduced.frames.size, 0, 'Resizing a static wordmark must not start an animation loop');

const normal = await setup();
assert.equal(normal.frames.size, 1, 'Only one animation loop runs');
assert.equal(normal.toggle.hidden, false);
normal.advance(6500);
const idle = normal.snapshot();
normal.advance(6500);
assert.equal(normal.frames.size, 1, 'Ambient motion continues after the old 4.2-second introduction');
assert.notDeepEqual(normal.snapshot().offsets, idle.offsets, 'Letters move without pointer events');
assert.notDeepEqual(normal.snapshot().gradient, idle.gradient, 'Gradient position and hue evolve independently');
const maxOffset = snapshot => Math.max(...snapshot.offsets.map(Math.abs));
assert.ok(maxOffset(normal.snapshot()) < 35, 'Ambient displacement stays below 3% of the 1200px stage');
normal.listeners.get('pointermove')({ clientX: 1050 });
normal.advance(1600);
assert.ok(maxOffset(normal.snapshot()) > maxOffset(idle) * 2, 'Hover is much stronger than ambient motion');
const hovered = normal.snapshot();
normal.advance(2500);
assert.notDeepEqual(normal.snapshot().gradient, hovered.gradient, 'The gradient also changes under a stationary pointer');
normal.listeners.get('pointerleave')();
normal.advance(3500);
assert.ok(maxOffset(normal.snapshot()) < 35, 'Leaving the wordmark returns smoothly to the quiet wave');

normal.listeners.get('toggle:click')();
const paused = normal.snapshot();
assert.equal(normal.frames.size, 0);
assert.equal(normal.toggle['aria-label'], 'Resume');
assert.equal(normal.stage['data-paused'], 'true');
normal.listeners.get('pointermove')({ clientX: 300 });
normal.listeners.get('pointerleave')();
normal.doc.hidden = true;
normal.listeners.get('visibilitychange')();
normal.doc.hidden = false;
normal.listeners.get('visibilitychange')();
normal.intersection([{ isIntersecting: false }]);
normal.intersection([{ isIntersecting: true }]);
assert.equal(normal.frames.size, 0, 'Pause survives hover, tab visibility and scrolling away/back');
assert.deepEqual(normal.snapshot(), paused, 'Pause freezes both letters and gradient');
normal.listeners.get('toggle:click')();
assert.equal(normal.toggle['aria-label'], 'Pause');
normal.advance(1000);
assert.notDeepEqual(normal.snapshot(), paused, 'Explicit resume restarts both effects');

const hidden = await setup({ hidden: true });
assert.equal(hidden.frames.size, 0, 'Hidden tabs do not animate');
hidden.doc.hidden = false;
hidden.listeners.get('visibilitychange')();
assert.equal(hidden.frames.size, 1);
hidden.advance(1000);
hidden.doc.hidden = true;
hidden.listeners.get('visibilitychange')();
const beforeResume = hidden.snapshot();
assert.equal(hidden.frames.size, 0);
hidden.doc.hidden = false;
hidden.listeners.get('visibilitychange')();
hidden.step(60000);
assert.deepEqual(hidden.snapshot(), beforeResume, 'Returning after a long absence does not jump the motion clock');
hidden.advance(1000);
assert.notDeepEqual(hidden.snapshot(), beforeResume);

const changed = await setup();
changed.advance(2000);
changed.preference.matches = true;
changed.mediaListeners.forEach(callback => callback());
assert.equal(changed.frames.size, 0, 'Preference changes cancel motion immediately');
assert.ok(changed.snapshot().offsets.every(value => Math.abs(value) < .001));
changed.listeners.get('pointermove')({ clientX: 800 });
assert.equal(changed.frames.size, 0, 'Reduced motion also suppresses pointer motion');

const offscreen = await setup();
offscreen.advance(1000);
offscreen.intersection([{ isIntersecting: false }]);
assert.equal(offscreen.frames.size, 0, 'Offscreen animation stops');
offscreen.intersection([{ isIntersecting: true }]);
assert.equal(offscreen.frames.size, 1);
offscreen.listeners.get('pagehide')();
assert.equal(offscreen.frames.size, 0, 'Page exit cancels pending frames');
offscreen.listeners.get('pageshow')();
assert.equal(offscreen.frames.size, 1, 'Back/forward cache restoration can resume the visible animation');

const touch = await setup({ finePointer: false });
const touchControl = await setup({ finePointer: false });
touch.listeners.get('pointermove')({ clientX: 1050 });
touch.advance(2000);
touchControl.advance(2000);
assert.deepEqual(touch.snapshot(), touchControl.snapshot(), 'Touch scrolling never amplifies the motion');
console.log('Motion checks passed: subtle ambient wave, stronger hover, changing gradient, pause/resume, resize, reduced motion, touch and visibility lifecycle.');
