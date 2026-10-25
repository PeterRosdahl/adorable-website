import { industries, type Industry } from '../content/industries';
import { industryCopyEn } from '../content/industries.en';
import { findServicePage, servicePages, type DetailPage } from '../content/service-pages';
import { serviceCopyEn } from '../content/service-pages.en';

export type Lang = 'sv' | 'en';

const staticPairs: [string, string][] = [
  ['/', '/en'],
  ['/ai', '/en/ai'],
  ['/paid-social', '/en/paid-social'],
  ['/om', '/en/about'],
  ['/kontakt', '/en/contact'],
  ['/tjanster', '/en/services'],
  ['/branscher', '/en/industries'],
  ['/privacy', '/en/privacy'],
  ['/tos', '/en/terms']
];

for (const page of servicePages) {
  const english = serviceCopyEn[page.slug];
  if (!english) throw new Error(`Missing English service copy: ${page.slug}`);
}
for (const page of industries) {
  const english = industryCopyEn[page.slug];
  if (!english) throw new Error(`Missing English industry copy: ${page.slug}`);
}

const pairs: [string, string][] = [
  ...staticPairs,
  ...servicePages.map(page => [`/${page.slug}`, `/en/${serviceCopyEn[page.slug].slug}`] as [string, string]),
  ...industries.map(page => [`/branscher/${page.slug}`, `/en/industries/${industryCopyEn[page.slug].slug}`] as [string, string])
];

const toEnglish = new Map(pairs);
const toSwedish = new Map(pairs.map(([sv, en]) => [en, sv]));

export const normalizePath = (path: string) => {
  if (!path || path === '/') return '/';
  return path.replace(/\/$/, '') || '/';
};

export const alternatePath = (path: string) => {
  const normalized = normalizePath(path);
  return toEnglish.get(normalized) || toSwedish.get(normalized);
};

export const serviceHref = (svSlug: string, lang: Lang = 'sv') =>
  lang === 'en' ? `/en/${serviceCopyEn[svSlug].slug}` : `/${svSlug}`;

export const industryHref = (svSlug: string, lang: Lang = 'sv') =>
  lang === 'en' ? `/en/industries/${industryCopyEn[svSlug].slug}` : `/branscher/${svSlug}`;

export const industriesIndex = (lang: Lang = 'sv') => lang === 'en' ? '/en/industries' : '/branscher';

export const localizeService = (svSlug: string, lang: Lang = 'sv'): DetailPage => {
  const swedish = findServicePage(svSlug);
  if (!swedish) throw new Error(`Unknown service: ${svSlug}`);
  if (lang === 'sv') return swedish;
  const english = serviceCopyEn[svSlug];
  return { ...english, related: swedish.related };
};

export const localizeIndustry = (svSlug: string, lang: Lang = 'sv'): Industry => {
  const swedish = industries.find(page => page.slug === svSlug);
  if (!swedish) throw new Error(`Unknown industry: ${svSlug}`);
  if (lang === 'sv') return swedish;
  const english = industryCopyEn[svSlug];
  return { ...english, related: swedish.related };
};

export const serviceByPath = (path: string) => {
  const normalized = normalizePath(path);
  const swedish = servicePages.find(page => `/${page.slug}` === normalized);
  if (swedish) return { lang: 'sv' as const, svSlug: swedish.slug, page: swedish };
  const match = servicePages.find(page => `/en/${serviceCopyEn[page.slug].slug}` === normalized);
  if (!match) return undefined;
  return { lang: 'en' as const, svSlug: match.slug, page: localizeService(match.slug, 'en') };
};

export const industryByPath = (path: string) => {
  const normalized = normalizePath(path);
  const swedish = industries.find(page => `/branscher/${page.slug}` === normalized);
  if (swedish) return { lang: 'sv' as const, svSlug: swedish.slug, page: swedish };
  const match = industries.find(page => `/en/industries/${industryCopyEn[page.slug].slug}` === normalized);
  if (!match) return undefined;
  return { lang: 'en' as const, svSlug: match.slug, page: localizeIndustry(match.slug, 'en') };
};
