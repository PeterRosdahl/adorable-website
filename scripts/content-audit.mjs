import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const articlesDir = join(root, 'src/pages/artiklar');
const articleFiles = existsSync(articlesDir) ? readdirSync(articlesDir).filter((file) => file.endsWith('.astro')) : [];
const errors = [];
const warnings = [];

for (const file of articleFiles) {
  const source = readFileSync(join(articlesDir, file), 'utf8');

  if (!source.includes('datePublished=')) {
    errors.push(`${file}: saknar datePublished`);
  }

  const hasVisibleAuthor = source.includes('Peter Rosdahl') || source.includes('<ArticlePage');
  if (!hasVisibleAuthor) {
    errors.push(`${file}: saknar synlig författare`);
  }

  if (!source.includes('dateModified=')) {
    warnings.push(`${file}: inte markerad som faktagranskad efter publicering`);
  }
}

const publicCopyFiles = [
  'src/pages/index.astro',
  'src/pages/en/index.astro',
  'src/pages/om.astro',
  'src/pages/en/about.astro',
  'src/pages/ai.astro',
  'src/pages/paid-social.astro',
  'src/components/HomePage.astro',
  'src/components/AboutPage.astro',
  'src/components/ContactPage.astro',
  'src/components/OfferPair.astro',
  'src/content/services.ts'
];

const forbiddenClaims = [
  { pattern: /\bPuck\b/, label: 'inaktiv teammedlem Puck' },
  { pattern: /25\s?000.{0,12}50\s?000/s, label: 'publikt workshoppris' },
  { pattern: /annonsbudgetar från 50\s?000/i, label: 'publik minsta annonsbudget' },
  { pattern: /\b10 års erfarenhet\b/i, label: 'felaktigt erfarenhetspåstående' },
  { pattern: /\bover 10 years of experience\b/i, label: 'felaktigt engelskt erfarenhetspåstående' }
];

for (const relativePath of publicCopyFiles) {
  const source = readFileSync(join(root, relativePath), 'utf8');
  for (const claim of forbiddenClaims) {
    if (claim.pattern.test(source)) {
      errors.push(`${relativePath}: innehåller ${claim.label}`);
    }
  }
}

console.log(`Kontrollerade ${articleFiles.length} artiklar och ${publicCopyFiles.length} centrala sidor.`);

if (warnings.length) {
  console.log(`Informationspunkter (${warnings.length}):`);
  warnings.forEach((warning) => console.log(`- ${warning}`));
}

if (errors.length) {
  console.error(`Fel (${errors.length}):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  console.log('Inga blockerande innehållsfel hittades.');
}
