// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const lastmodByPath = new Set([
  '/',
  '/artiklar',
  '/ai',
  '/paid-social',
  '/om',
  '/kontakt',
  '/en',
  '/en/ai',
  '/en/paid-social',
  '/en/about',
  '/en/contact',
  '/tjanster',
  '/en/services',
  '/artiklar/chatgpt-vs-claude-vs-gemini',
  '/artiklar/attribution-i-en-cookieless-varld',
  '/artiklar/ai-och-gdpr-vad-du-maste-veta',
  '/artiklar/ai-policy-vad-foretag-behover-tanka-pa',
  '/artiklar/budgetera-for-paid-social',
  '/artiklar/linkedin-ads-for-b2b-komplett-guide',
  '/artiklar/5-meta-ads-misstag',
  '/artiklar/optimera-roas-utan-att-sanka-volym',
  '/artiklar/meta-advantage-plus-shopping',
  '/artiklar/creative-testing-hitta-annonser-som-konverterar',
  '/artiklar/retargeting-strategier-som-fungerar',
  '/artiklar/skalera-meta-ads-utan-att-forstora-roas',
  '/artiklar/automatiserad-budgivning-lat-ai-optimera',
  '/artiklar/ai-for-smaforetag-konkreta-anvandningsfall',
  '/artiklar/bygg-en-ai-strategi-som-fungerar',
  '/artiklar/vanliga-misstag-nar-foretag-implementerar-ai',
  '/artiklar/prompt-engineering-for-marknadsforsare',
  '/artiklar/ai-verktyg-for-social-media-managers',
  '/artiklar/5-satt-ai-kan-automatisera-marknadsföring',
  '/artiklar/ai-genererade-annonser-basta-praxis',
  '/artiklar/anvand-ai-for-att-analysera-annonsdata',
  '/artiklar/framtidens-marknadsforsare-manniska-plus-ai',
  '/artiklar/mat-roi-pa-ai-investeringar',
  '/artiklar/personalisering-i-stor-skala-med-ai',
  '/artiklar/sa-kommer-du-igang-med-ai-pa-foretaget'
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://adorable.se',
  trailingSlash: 'never', // Consistent URLs without trailing slashes
  compressHTML: true,
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/tos') && !page.endsWith('/privacy') && !page.endsWith('/terms'),
    serialize(item) {
      const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
      if (lastmodByPath.has(path)) {
        item.lastmod = path.startsWith('/artiklar/') ? '2026-09-02' : '2026-09-04';
      }
      return item;
    }
  })],
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
