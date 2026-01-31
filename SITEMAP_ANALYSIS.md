# Sitemap Analysis & Fixes - adorable.se

## Investigation Results

### Current Status
- ✅ **52 pages** in sitemap (all .astro pages except 404)
- ✅ **53 HTML files** generated (52 pages + 404)
- ✅ All indexable pages are included in sitemap
- ✅ 404 page correctly excluded from sitemap
- ✅ Admin CMS page has noindex meta tag

### Issues Found & Fixed

#### 1. robots.txt pointed to wrong sitemap
- **Problem:** `robots.txt` referenced `/sitemap.xml` but Astro generates `/sitemap-index.xml`
- **Fix:** Updated robots.txt to point to correct file
- **Fix:** Added post-build script to create sitemap.xml copy for backwards compatibility

#### 2. Admin page not blocked in robots.txt
- **Problem:** CMS admin page not explicitly disallowed
- **Fix:** Added `Disallow: /admin/` to robots.txt

### Sitemap Structure
```
sitemap-index.xml → points to sitemap-0.xml
sitemap-0.xml → contains all 52 pages
sitemap.xml → copy of sitemap-index.xml (for backwards compatibility)
```

### Pages in Sitemap (52 total)

#### Swedish Pages (40)
- Home + 5 main pages (ai, paid-social, tjanster, om, kontakt, ordlista, artiklar, branscher)
- 27 article pages (artiklar/*)
- 12 industry pages (branscher/*)

#### English Pages (6)
- en/ + 5 pages (about, ai, contact, paid-social, services)

#### Excluded (correctly)
- 404.astro → should not be indexed
- admin/index.html → has noindex meta tag

## Possible Reasons for Ahrefs "4 Missing Pages"

Since all current pages ARE in the sitemap, the issue might be:

1. **Old sitemap URL** - Ahrefs was using the wrong sitemap URL (sitemap.xml) before the fix
2. **Cached old sitemap** - Ahrefs might have cached an old version
3. **Deleted pages** - Pages that existed before but were removed, still in Google's index
4. **URL variations** - Pages with trailing slashes or URL parameters
5. **Staging/preview URLs** - Netlify preview deploys might have been crawled

## Next Steps

1. **Deploy the fixes** - Push and deploy the updated robots.txt and build script
2. **Resubmit sitemap** - Submit sitemap-index.xml to Google Search Console
3. **Wait for re-crawl** - Ahrefs updates based on Google's index, may take days
4. **Check Ahrefs report** - Look at which specific URLs Ahrefs thinks are missing
5. **Verify in GSC** - Check Google Search Console for coverage issues

## Files Modified

- `public/robots.txt` - Updated sitemap URL + added admin disallow
- `package.json` - Added post-build script
- `post-build.js` - Created to copy sitemap-index.xml → sitemap.xml
