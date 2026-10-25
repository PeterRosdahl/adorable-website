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
  '/meta-annonsering',
  '/linkedin-annonsering',
  '/tiktok-annonsering',
  '/youtube-annonsering',
  '/snapchat-annonsering',
  '/pinterest-annonsering',
  '/google-ads',
  '/ai-workshop',
  '/ai-automatisering',
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
      if (['/', '/ai', '/tjanster', '/paid-social', '/chatgpt-utbildning', '/ai-strategi', '/ai-policy', '/ai-workshop', '/ai-automatisering'].includes(path)) {
        item.lastmod = '2026-10-25';
      } else if (lastmodByPath.has(path) || path === '/branscher' || path.startsWith('/branscher/')) {
        item.lastmod = '2026-09-07';
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
