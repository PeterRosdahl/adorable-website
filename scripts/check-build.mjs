import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const errors = [];
const files = [];
function walk(directory) {
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) walk(path);
    else if (entry.name.endsWith('.html')) files.push(path);
  }
}
walk(root);

let links = 0;
let pages = 0;
for (const file of files) {
  const name = relative(root, file);
  if (name.startsWith('admin/')) continue;
  pages++;
  const html = readFileSync(file, 'utf8');
  const route = name === 'index.html' ? '/' : `/${name.replace(/\/index\.html$/, '')}`;
  const h1Count = [...html.matchAll(/<h1(?:\s|>)/g)].length;
  if (h1Count !== 1) errors.push(`${route}: expected one H1, found ${h1Count}`);
  if (!/<meta\s+name="description"\s+content="[^"]+"/.test(html)) errors.push(`${route}: missing description`);
  if (!/<link\s+rel="canonical"\s+href="https:\/\/adorable\.se(?:\/|\")/.test(html)) errors.push(`${route}: missing canonical URL`);

  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch { errors.push(`${route}: invalid structured data`); }
  }
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const url = new URL(match[1].replaceAll('&amp;', '&'), `https://adorable.se${route}`);
    if (!['adorable.se', 'www.adorable.se'].includes(url.hostname)) continue;
    // Astro emits its special 404 route as 404.html, with a /404 canonical.
    if (name === '404.html' && url.pathname === '/404') continue;
    const target = join(root, decodeURIComponent(url.pathname));
    if (!existsSync(target) && !existsSync(join(target, 'index.html'))) errors.push(`${route}: missing target ${url.pathname}`);
    links++;
  }
}

if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Build check passed: ${pages} public HTML pages, ${links} internal links/assets, H1s, descriptions, canonical URLs and valid JSON-LD.`);
}
