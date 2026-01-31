# Redirect Issues Fix - adorable.se

**Date:** 2026-01-31  
**Issue:** Ahrefs reported 7 3XX redirects and 5 pages with links to redirects

## Root Cause

**Trailing slash inconsistency:**
- Sitemap had URLs WITH trailing slashes (`/ai/`, `/kontakt/`)
- Internal links had NO trailing slashes (`href="/ai"`, `href="/kontakt"`)
- Canonical URLs included trailing slashes in built pages
- This caused Netlify to redirect non-trailing-slash URLs to trailing-slash versions

## Changes Made

### 1. astro.config.mjs
Added `trailingSlash: 'never'` to ensure consistent URL format:
```js
export default defineConfig({
  site: 'https://adorable.se',
  trailingSlash: 'never', // ← NEW: Consistent URLs without trailing slashes
  // ...
});
```

### 2. netlify.toml
Updated redirect destinations to remove trailing slashes:
```toml
# Before:
from = "/ai-transformation/"
to = "/ai/"

# After:
from = "/ai-transformation/"
to = "/ai"
```

## Verification

After rebuild:
- ✅ Sitemap URLs: NO trailing slashes (`/ai`, `/kontakt`)
- ✅ Canonical URLs: NO trailing slashes (`href="https://adorable.se/ai"`)
- ✅ Internal links: Already had NO trailing slashes
- ✅ Homepage canonical: `https://adorable.se/` (root always has trailing slash)

## Intentional Redirects (These should remain)

The following redirects in `netlify.toml` are **intentional** (page renamed from /ai-transformation to /ai):
1. `/ai-transformation` → `/ai` (301)
2. `/ai-transformation/` → `/ai` (301)
3. `/en/ai-transformation` → `/en/ai` (301)
4. `/en/ai-transformation/` → `/en/ai` (301)

**Total:** 4 intentional redirects (down from 7+ reported)

## Expected Result

After deployment:
- Internal links will match canonical URLs exactly (no redirects)
- Sitemap URLs will be consistent
- Ahrefs should only report the 4 intentional redirects for renamed pages
- No more "links to redirects" warnings for internal navigation

## Next Steps

1. Deploy to Netlify
2. Wait for Ahrefs to recrawl (may take a few days)
3. Verify redirect count drops to 4 (only the intentional /ai-transformation redirects)
