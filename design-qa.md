# Adorable — creative redesign QA, 2026-09-04

## Gradient and quieter navigation — 2026-09-05 (preview only)

Following Peter's next request, the homepage header is now omitted completely;
the meeting CTA below the large wordmark remains. Contact pages show only the
small home-link logo in their header. Other subpage headers are unchanged.
These rules apply in Swedish and English and are covered by test-seo.mjs.

The large wordmark now has one continuous violet/blue/teal gradient. A screen-
blended color field follows the existing finite introduction and pointer
interaction. There is no extra animation loop or downloaded asset. Reduced-
motion users receive a static gradient; forced-colors mode removes the overlay.
The white page, normal black text and existing typography remain unchanged.

Fresh Lighthouse runs on the Swedish homepage (mobile and desktop), English
homepage (mobile) and both contact pages (mobile): 100/100/100/100. Reports use
the gradient- prefix under /tmp/adorable-lighthouse-TPhJ4K/; earlier reports are
historical. Build checks passed with 30 pages and 518 internal links/assets.
SEO and both motion test suites passed. Desktop gradient was visually inspected;
the remaining homepage meeting link opens the contact form, whose header has
only the home link. No form was submitted. No publishing or push took place.

Preview remains http://127.0.0.1:4323/.

## Latest iteration — 2026-09-05 (preview only)

Navigation simplified and the pause control removed at Peter's request. Small
header branding now appears only on subpages. The wordmark introduction ends
after 4.2 seconds and uses transforms instead of changing flex layout widths.
Pointer response, reduced-motion support and page transitions remain.

All 25 indexable pages scored 100/100/100/100 in mobile Lighthouse; the Swedish
and English homepages and Swedish AI page also scored 100/100/100/100 on desktop.
The first desktop homepage run scored 99 before the layout-motion fix. Build,
link, SEO/schema, motion and whitespace checks passed. Browser journeys to the
meeting request and the AI-prefilled request passed without sending a form.

See SEO_LIGHTHOUSE_REVIEW_2026-09-05.md for exact scope, raw reports, sources and
remaining production-only checks. Current preview: http://127.0.0.1:4323/.
These changes have NOT been pushed or deployed. Production remains dc9ce0a.
Earlier dated sections below are historical and their pause-button references
do not describe this latest preview.

final result: passed

## Scope and visual truth

- Selected source: `/Users/peter/.codex/generated_images/01a0637d-e2c2-7813-8808-9191068b3940/exec-0ce67ac1-abad-4c6c-81c5-9361c5fef4fb.png`.
- User-approved change: replace the source's red with one vivid non-red accent. Implementation uses electric blue `#253bff`, white and black; neutral grays are used for secondary text and rules.
- Existing Astro project preserved. No new starter, backend, booking integration or production deployment.
- Live typography is the requested interaction, not a raster illustration. The wordmark uses real self-hosted Anton and DM Sans glyphs. The existing small Archivo Black wordmark is preserved. Arrows come from Phosphor's light SVG assets.
- Source and final implementation: 1422 × 1106 pixels; final CSS viewport 1422 × 1106, devicePixelRatio 1, scrollY 0, Swedish homepage, motion paused with its visible keyboard focus state.
- Final browser capture: `/tmp/adorable-design-20260904/kinetic-desktop-verified.png`.
- Final paired full-view comparison: `/tmp/adorable-design-20260904/kinetic-verified-comparison.png`.
- Final paired contact/service detail: `/tmp/adorable-design-20260904/kinetic-verified-detail.png`.
- Source and built screenshots were combined in the same comparison images and opened for review. Earlier captures had a browser zoom/density mismatch; those were normalized for preliminary checks only. The final capture is directly matched at DPR 1 without density correction.

## Comparison history and fixes

1. Initial rendered arrows were solid blocks because quoted SVG data URLs invalidated the CSS mask. Fixed URL quoting with JSON serialization. Browser computed mask and visible arrow shape verified afterward.
2. First paired comparison: display type was too short and service headings too dense. Increased the wordmark stage from 41 to 43 container-width units and glyph size from 48 to 50; changed service headings to the clearer body type family. The resulting composition preserves the source's header, intro, large type, contact rule and two service columns.
3. The period's font metrics initially lifted and squeezed it, then caused clipping. Adjusted its font size, baseline and horizontal offset. The final paired image shows the full round period with no desktop clipping.
4. Removed colored legacy gradients and badges from industry pages, and fixed low-contrast hover/focus styling on dark/blue service heroes.
5. Final full-view and detail comparison found no remaining P0/P1/P2 issues.

## Required fidelity surfaces

- **Typography:** Anton provides the condensed letterforms; width redistribution is intentional motion. Exact letter outlines differ from the generated font. DM Sans headings are slightly wider than the mock's condensed service headings, an accepted readability tradeoff. Main offer and contact copy remain legible and stationary.
- **Spacing/layout:** full-width typographic stage, asymmetric intro and service columns, thin contact rules, no decorative cards. Mobile stacks the services and keeps email and the meeting CTA visible. No horizontal overflow at observed 320, 390 and 1422 px widths.
- **Colors/tokens:** white `#fff`, ink `#080808`, blue `#253bff`. Blue/white contrast is approximately 6.7:1. No beige or red in the redesigned visible core UI. Neutral feedback panels do not introduce a fourth brand color.
- **Assets:** real self-hosted fonts and library SVG arrow masks; no invented client cases, photos or illustrations. Icons are sharp and aligned after the mask fix. Small screen typography remains live and responsive.
- **Copy:** exact short offer retained, empty overlines removed, experience/company history preserved. Articles, article index and glossary removed from the build, navigation, sitemap and AI resource files. Industry routes remain, without the old colored backgrounds.

## Interaction and responsive checks

- Homepage → meeting request opens the contact page.
- Paid-social service link and FAQ expansion work.
- Paid-social CTA preserves `interest=paid-social` in the form.
- Meeting/question radios update the submit label and hide/disable the time input when asking a question.
- Only name and email are required. An invalid email is blocked before submission; no busy or success state was shown. Test fields were cleared.
- No real form submission was sent. Inbox delivery and provider success/error responses were not re-tested; the existing delivery handler was preserved.
- English home and AI service routes render English copy. AI service hero uses the approved blue.
- Browser transforms changed while motion ran and stayed exactly equal across two observations after pause. Pause/resume is a real button with a 44px minimum hit area.
- `node scripts/test-motion.mjs` passed: reduced-motion start, preference changes, pause/resume, single animation loop, hidden tabs. This uses a small DOM/media harness; OS reduced-motion was not changed in the user's browser.
- Scroll reveal and page transitions respect reduced-motion CSS/preferences; navigation does not depend on transition support.
- Browser error log checked on home/contact: no errors returned.
- Mobile screenshots: `/tmp/adorable-design-20260904/kinetic-mobile-320.png`, `/tmp/adorable-design-20260904/kinetic-mobile.png`, `/tmp/adorable-design-20260904/kinetic-contact-mobile.png`, `/tmp/adorable-design-20260904/kinetic-contact-form-mobile.png`.
- Desktop contact: `/tmp/adorable-design-20260904/kinetic-contact-desktop.png`.

## Automated checks

- `npm run build` passed.
- `npm run check:build` passed: 30 public HTML pages, 554 internal links/assets, single H1, descriptions, canonical URLs, valid JSON-LD and no removed article/guide output or links.
- `node scripts/test-motion.mjs` passed.
- `git diff --check` passed.

## Follow-up polish / limits

- P3: the animated wordmark uses a close freely available typeface, not bespoke font artwork. Its optical spacing and tiny period can be refined further after Peter tries the motion.
- No public Google booking URL exists yet; this remains a meeting request, not a confirmed booking.
- Production and the previous Vercel preview are unchanged. Review the local prototype before deciding whether to create a new Vercel preview or publish.

## Implementation checklist

- [x] Approved direction with blue instead of red
- [x] Simplified core pages and removed article/guide routes
- [x] Working motion controls and contact path
- [x] Browser verification and paired visual comparisons
- [x] Responsive, content, build and motion checks
- [ ] Peter's review and separate publication decision

## Motion iteration — 2026-09-04

final result: passed

Scope: more motion in the existing approved white/black/blue design. No copy,
routes, forms, dependencies or publishing configuration changed.

- Added staggered, masked letter entrances to service, about, services and contact
  headings. The full heading remains its accessible name. Parent-scoped typography
  is forwarded to the heading component; a contact-heading size regression found
  in the browser was fixed and the 48px mobile heading/26px margin rechecked.
- Wordmark letters enter sequentially; the continuous width wave now travels
  farther with a larger amplitude and stronger pointer response. Its pause button
  also stops the entrance. Browser transforms differed while running, settled after
  the entrance and remained identical across two observations while paused.
- Shared, one-time scroll reveals cover both languages and the core service,
  about and contact pages. Non-interactive content moves; links, form fields and
  clickable containers fade without moving their hit areas. Keyboard focus cancels
  a pending reveal immediately. No content depends on JavaScript to stay visible.
- Native cross-document transitions use a 700ms upward wipe with a separate header
  snapshot. The browser showed the outgoing page snapshot while the new AI route
  and its title entrance were already active, then the finished AI page. No router,
  link interception or navigation delay was added.
- Hover treatments: service typography, arrows and underlines; meeting links;
  footer invitation. FAQ opening has an answer entrance and progressive CSS height
  transitions. Native details open/close behavior is preserved.
- Browser checks: homepage → AI → contact with `interest=ai`; question mode hides
  and disables the suggested time; AI FAQ opens/closes; footer navigation to paid
  social; English AI heading. No form was submitted. Offscreen links were scrolled
  into view before the final click checks to avoid automation's smooth-scroll race.
- No horizontal overflow at observed 320, 390, 804 and 1422 CSS-pixel widths. Visual
  checks used 320/390px mobile and the restored 804px desktop browser. A wide
  viewport override produced a screenshot-density mismatch, so that capture is not
  used for pixel-accuracy claims.
- Final screenshots: `/tmp/adorable-design-20260904/motion-ai-desktop.png`,
  `/tmp/adorable-design-20260904/motion-ai-mobile.png`,
  `/tmp/adorable-design-20260904/motion-ai-320.png`.
- Browser error log: no errors returned on the homepage. Both motion test scripts,
  production build, build/content checks and `git diff --check` passed. The new
  motion harness checks stagger, stable links/forms, keyboard focus, reduced-motion
  start/change, hidden tabs and page-exit cleanup. OS motion preferences were not
  changed in the user's browser; reduced motion is verified through the harness and
  explicit CSS overrides, including view-transition pseudo-elements.
- Still local-only. Neither production nor the old Vercel preview was updated.

Implementation references: [cross-document view transitions](https://developer.chrome.com/docs/web-platform/view-transitions/cross-document)
and [intrinsic height transitions](https://developer.chrome.com/docs/css-ui/animate-to-height-auto).

## Viewport-height homepage preview — 2026-09-05

- User request: keep the meeting link and email just above the first fold, with a
  clear invitation to scroll. No production publication requested for this change.
- The hero uses a viewport-height grid. The wordmark absorbs the available height
  using height-relative font sizing; contact copy remains in normal document flow.
  Intrinsic minimum height permits scrolling rather than clipping on exceptionally
  short screens or enlarged text. Swedish and English homepages share the behavior.
- Added a native `#services` link, labelled “Scrolla vidare” / “Scroll to explore”.
  Its arrow nudges twice, then stops. Reduced-motion CSS disables the animation.
  The target can receive focus; pressing Enter then Tab reaches the first service.
- Fresh browser geometry, CSS pixels (no horizontal overflow in these cases):

  | Viewport | Contact row bottom | Scroll cue bottom |
  | --- | --- | --- |
  | 320 × 568 | 512 | 560 |
  | 390 × 844 | 788 | 836 |
  | 844 × 390 | 334 | 382 |
  | 1440 × 900 | 844 | 892 |
  | Restored preview, 785 × 761 | 706 | 754 |

- Inspected fresh mobile, landscape, wide and restored-preview screenshots. The
  existing browser zoom produces a screenshot-density mismatch with viewport
  overrides; numeric fold assertions use DOM geometry, not those screenshot pixels.
  Physical mobile Safari/browser-toolbar behavior has not been tested.
- Native scroll navigation moved focus to `services`; its content began 124px
  from the top after scroll. No form submissions. No browser console errors.
- Build, content/build link checks, SEO checks and both motion suites passed.
  Added regression coverage for refitting glyph widths when height-relative font
  size changes, without restarting reduced-motion animation.
- Lighthouse on the local production build: **100/100/100/100** for both mobile
  and desktop (performance/accessibility/best practices/SEO). CLS 0 and TBT 0ms;
  LCP 1.6s mobile / 0.3s desktop. These are local results, not a new live-site audit.
  Reports: `/tmp/adorable-lighthouse-TPhJ4K/fold-home-mobile.report.json` and
  `/tmp/adorable-lighthouse-TPhJ4K/fold-home-desktop.report.json`.
- Preview remains at `http://127.0.0.1:4323/`, restored to the user's normal viewport.
  Production and GitHub have not been changed.

Sizing reference: [MDN container and viewport length units](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/length).

## Ambient wordmark and evolving gradient preview — 2026-09-05

- Replaces the former finite-only introduction with a continuous, low-amplitude
  wave. Hover retains the stronger existing response, easing back to the quiet wave
  on pointer leave. No viewport geometry, copy, links or form handling changed.
- One animation clock drives glyph transforms, gradient position and a slow hue
  shift within violet/blue/teal. The gradient continues changing under a stationary
  pointer. Ambient style updates are limited to approximately 30fps.
- The wordmark itself is a transparent native pause/resume button, with localized
  accessible names and a mouse tooltip. No separate menu control was added. Enter,
  Space and a click all work. Pausing freezes glyphs, colors and the CSS entrance;
  the choice survives scrolling offscreen and switching tabs within the page.
- Browser verification: independently sampled letter positions and all three
  gradient variables changed without pointer input; keyboard pause froze both;
  Space resumed them. Native pointer movement over the wordmark produced an ~80px
  maximum displacement at 785px viewport width, versus ~9–11px in ambient samples.
  The English control was visible with its translated accessible name.
- Mobile 390 × 844: contact row bottom 788px, scroll cue bottom 836px. Desktop
  785 × 762: contact bottom 706px, cue bottom 754px. Fresh screenshots inspected;
  normal viewport and Swedish homepage restored. No browser console errors.
- Expanded motion tests cover ongoing idle movement, stronger hover, independently
  changing gradient, pause/resume, height refitting, reduced motion, touch input,
  hidden/offscreen suspension and page lifecycle. Build, content/build checks, SEO
  checks, both motion suites and `git diff --check` passed.
- Fresh local Lighthouse: **100/100/100/100** on mobile and desktop. CLS 0, TBT 0ms;
  LCP 1.4s mobile / 0.3s desktop. Reports are
  `/tmp/adorable-lighthouse-TPhJ4K/ambient-home-mobile.report.json` and
  `/tmp/adorable-lighthouse-TPhJ4K/ambient-home-desktop.report.json`.
- These are automated scores, not a claim of complete WCAG conformance. OS reduced
  motion was covered by the harness and CSS, without changing the user's settings.
  Physical mobile Safari was not tested. Not committed, pushed or published.

Pause rationale: [W3C on continuous motion and pause mechanisms](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html).

## Inline scroll cue — 2026-09-05

- Moved the scroll link into the contact row, after the email, and removed the
  row's bottom border. Desktop has all three links on one line; mobile places the
  meeting link above the email and right-aligned scroll link. All targets remain
  at least 44px high, above the first fold, with safe-area-aware bottom padding.
- Browser checks: at 785 × 761 the email and scroll link share y698–742 with no
  bottom border; at 320 × 568 they share y506–550. At a zoomed 266 × 473 viewport,
  scroll text wraps within its column, retaining 12px separation from the email
  instead of overlapping. No horizontal overflow in these cases.
- Shared Swedish/English markup and an emitted-HTML regression check preserve
  the email → scroll ordering. Build, link/metadata checks and motion tests passed.
  Ambient motion is unchanged. Local preview only; nothing pushed or published.
