import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

// Inspect the emitted HTML, so these checks also cover no-JavaScript crawlers.
const root = fileURLToPath(new URL('../dist/', import.meta.url));
const origin = 'https://adorable.se';
const pages = new Map();
function collect(directory, prefix = '') {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) collect(path, `${prefix}/${entry.name}`);
    else if (entry.name === 'index.html' && prefix !== '/admin') pages.set(prefix || '/', readFileSync(path, 'utf8'));
  }
}
collect(root);
const clean = text => text.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').replaceAll('&#39;', "'").replaceAll('&quot;', '"').replace(/\s+/g, ' ').trim();
const alternates = html => new Map([...html.matchAll(/<link\b[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"[^>]*>/g)].map(m => [m[1], m[2]]));
const sitemap = readFileSync(join(root, 'sitemap-0.xml'), 'utf8');
const listed = new Set([...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
let faqCount = 0;

for (const [path, html] of pages) {
  const url = `${origin}${path}`;
  const en = path === '/en' || path.startsWith('/en/');
  assert.equal(html.match(/<html\b[^>]*lang="([^"]+)"/)?.[1], en ? 'en' : 'sv', `${path}: document language`);
  assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1], url, `${path}: canonical URL`);
  const nav = html.match(/<nav\b[^>]*class="[^"]*site-nav[^>]*>([\s\S]*?)<\/nav>/)?.[1] || '';
  const isHome = path === '/' || path === '/en';
  const isContact = path === '/kontakt' || path === '/en/contact';
  assert.equal(Boolean(nav), !isHome, `${path}: no empty header on homepage`);
  assert.equal(/class="wordmark"/.test(nav), !isHome, `${path}: small logo only on subpages`);
  assert.equal([...nav.matchAll(/<a\b/g)].length, isHome ? 0 : isContact ? 1 : 2, `${path}: only relevant navigation links`);
  assert.equal(nav.includes(en ? 'Arrange a meeting' : 'Boka ett möte'), !isHome && !isContact, `${path}: meeting link only on other subpages`);
  if (isHome) assert.ok(html.includes('class="meeting-link"'), `${path}: main meeting CTA retained`);
  assert.ok(!/Pausa rörelse|Pause motion|data-motion-toggle/.test(html), `${path}: no standalone navigation pause control`);
  if (isHome) {
    const contactRow = html.match(/<div class="hero-contact">([\s\S]*?)<\/div>/)?.[1] || '';
    assert.match(contactRow, /class="email-link"[\s\S]*class="hero-scroll"[^>]*href="#services"/, `${path}: scroll link follows email inside the contact row`);
    assert.ok(html.includes('class="wordmark-toggle"'), `${path}: continuous animation can be paused on the wordmark`);
    assert.ok(html.includes(en ? 'Pause the Adorable animation' : 'Pausa animationen av Adorable'), `${path}: localized animation control`);
  }
  assert.equal(listed.has(url), !/name="robots" content="[^"]*noindex/.test(html), `${path}: indexability agrees with sitemap`);

  for (const [language, target] of alternates(html)) {
    const targetHtml = pages.get(new URL(target).pathname);
    assert.ok(targetHtml, `${path}: alternate target exists`);
    assert.equal(alternates(targetHtml).get(en ? 'en' : 'sv'), url, `${path}: reciprocal ${language} alternate`);
  }

  const json = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
  const graph = json.find(data => data['@graph'])?.['@graph'];
  assert.ok(graph, `${path}: entity graph exists`);
  const ids = new Set(graph.map(entity => entity['@id']));
  assert.equal(ids.size, graph.length, `${path}: unique entity IDs`);
  const company = graph.find(entity => entity['@type'] === 'Organization');
  const person = graph.find(entity => entity['@type'] === 'Person');
  const page = graph.find(entity => entity['@id'] === `${url}#webpage`);
  assert.equal(company.foundingDate, '2016');
  assert.equal(company.founder['@id'], person['@id']);
  assert.equal(person.name, 'Peter Rosdahl');
  assert.equal(page.inLanguage, en ? 'en' : 'sv');
  assert.equal(page.name, clean(html.match(/<title>(.*?)<\/title>/)?.[1] || ''));
  assert.ok(ids.has(page.about['@id']), `${path}: page subject resolves`);

  if (['/ai', '/paid-social', '/en/ai', '/en/paid-social'].includes(path)) {
    const service = graph.find(entity => entity['@type'] === 'Service');
    const faq = graph.find(entity => entity['@type'] === 'FAQPage');
    assert.equal(service.provider['@id'], company['@id']);
    assert.equal(service.url, url);
    assert.equal(page.mainEntity['@id'], service['@id']);
    assert.equal(faq['@id'], `${url}#faq`);
    const section = html.match(/<section\b[^>]*id="faq"[^>]*>([\s\S]*?)<\/section>/)?.[1] || '';
    const visible = [...section.matchAll(/<details\b[^>]*>[\s\S]*?<summary\b[^>]*>([\s\S]*?)<\/summary>\s*<p\b[^>]*>([\s\S]*?)<\/p>[\s\S]*?<\/details>/g)].map(m => [clean(m[1]), clean(m[2])]);
    const structured = faq.mainEntity.map(question => [question.name, question.acceptedAnswer.text]);
    assert.ok(visible.length > 0, `${path}: visible FAQs exist`);
    assert.deepEqual(structured, visible, `${path}: FAQ data matches readable content exactly`);
    faqCount += visible.length;
  }
}

for (const url of listed) assert.ok(pages.has(new URL(url).pathname), `Sitemap target exists: ${url}`);
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
assert.match(robots, /User-agent: \*\s+Allow: \//);
assert.match(robots, /User-agent: OAI-SearchBot\s+Allow: \//);
assert.match(robots, /Sitemap: https:\/\/adorable.se\/sitemap-index.xml/);
const config = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url)));
assert.equal(config.trailingSlash, false);
assert.deepEqual(config.redirects, [
  { source: '/', has: [{ type: 'host', value: 'www.adorable.se' }], destination: 'https://adorable.se/', permanent: true },
  { source: '/:path*', has: [{ type: 'host', value: 'www.adorable.se' }], destination: 'https://adorable.se/:path*', permanent: true }
]);
console.log(`SEO checks passed: ${pages.size} pages, ${listed.size} sitemap URLs, ${faqCount} synchronized FAQ answers, navigation, entities, language pairs, crawler access and canonical routing configuration.`);
