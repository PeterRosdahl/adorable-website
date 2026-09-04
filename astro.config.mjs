// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

const lastmodByPath = new Set([
  '/',
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
]);

// https://astro.build/config
export default defineConfig({
  site: 'https://adorable.se',
  trailingSlash: 'never', // Consistent URLs without trailing slashes
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/tos') && !page.endsWith('/privacy') && !page.endsWith('/terms'),
    serialize(item) {
      const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
      if (lastmodByPath.has(path)) {
        item.lastmod = '2026-09-04';
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
