// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { alternatePath } from './src/i18n/catalog.ts';

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
const origin = 'https://adorable.se';
const isEnglishPath = (path) => path === '/en' || path.startsWith('/en/');

export default defineConfig({
  site: origin,
  i18n: {
    defaultLocale: 'sv',
    locales: ['sv', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  trailingSlash: 'never', // Consistent URLs without trailing slashes
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [sitemap({
    filter: (page) => !page.endsWith('/tos') && !page.endsWith('/privacy') && !page.endsWith('/terms'),
    serialize(item) {
      const path = new URL(item.url).pathname.replace(/\/$/, '') || '/';
      const other = alternatePath(path);
      if (other) {
        const swedish = isEnglishPath(path) ? other : path;
        const english = isEnglishPath(path) ? path : other;
        const absolute = (value) => new URL(value, origin).href;
        item.links = [
          { lang: 'sv', url: absolute(swedish) },
          { lang: 'en', url: absolute(english) },
          { lang: 'x-default', url: absolute(swedish) }
        ];
      }
      if (isEnglishPath(path) || ['/', '/ai', '/tjanster', '/paid-social', '/chatgpt-utbildning', '/ai-strategi', '/ai-policy', '/ai-workshop', '/ai-automatisering'].includes(path)) {
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
