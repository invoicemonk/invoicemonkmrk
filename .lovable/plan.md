
# Plan: Fix Legacy Category URL 404 Errors

## Problem

Users clicking old WordPress links in Google Search like `https://www.invoicemonk.com/category/small-business/` receive 404 errors because:

1. The old WordPress site used `/category/{slug}/` URL structure for blog categories
2. The new React SPA uses query parameters: `/blog?category=Small Business`
3. No server-side redirects exist for these legacy category URLs

## Solution

Add server-side redirects in `vercel.json` to redirect all legacy `/category/*` URLs to the new blog page with appropriate filters.

---

## Legacy Category URLs to Redirect

Based on the blog content, these WordPress category URLs need redirecting:

| Old WordPress URL | New URL | Notes |
|-------------------|---------|-------|
| `/category/small-business/` | `/blog` | Main category, redirect to blog |
| `/category/small-business` | `/blog` | Without trailing slash |
| `/category/invoicing/` | `/blog` | Invoicing category |
| `/category/invoicing` | `/blog` | Without trailing slash |
| `/category/invoicing-and-billing-tips/` | `/blog` | Alternative slug |
| `/category/invoicing-and-billing-tips` | `/blog` | Without trailing slash |
| `/category/finance/` | `/blog` | Finance category |
| `/category/finance` | `/blog` | Without trailing slash |
| `/category/freelancing/` | `/blog` | Freelancing category |
| `/category/freelancing` | `/blog` | Without trailing slash |

All category pages will redirect to `/blog` since the new blog page has topic browsing built-in and categories are managed via the pillar/cluster system.

---

## Why Redirect to /blog Instead of Filtered Views?

1. The new blog uses a pillar-based topic organization rather than flat categories
2. Query parameter URLs (like `/blog?category=Small Business`) are not ideal for redirects as they may not work consistently
3. The blog page prominently displays topic cards for easy navigation
4. This approach is more maintainable as category names may evolve

---

## File Changes

| File | Changes |
|------|---------|
| `vercel.json` | Add 12+ redirect rules for legacy category URLs |

---

## Technical Implementation

Add these redirects to `vercel.json`:

```json
{
  "source": "/category/small-business",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/small-business/",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/invoicing",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/invoicing/",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/invoicing-and-billing-tips",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/invoicing-and-billing-tips/",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/finance",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/finance/",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/freelancing",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/freelancing/",
  "destination": "/blog",
  "permanent": true
}
```

Additionally, add a catch-all for any other potential category URLs:

```json
{
  "source": "/category/:slug",
  "destination": "/blog",
  "permanent": true
},
{
  "source": "/category/:slug/",
  "destination": "/blog",
  "permanent": true
}
```

---

## Expected Results

After deployment:
- `/category/small-business/` redirects to `/blog` with 301
- `/category/invoicing/` redirects to `/blog` with 301  
- `/category/finance/` redirects to `/blog` with 301
- `/category/freelancing/` redirects to `/blog` with 301
- Any other `/category/*` URLs redirect to `/blog` with 301
- Google search clicks work without 404 errors
- SEO link equity preserved via 301 permanent redirects

---

## Additional Recommendations

1. **Check Google Search Console** for other legacy URLs causing 404s
2. **Consider tag URLs** - If WordPress had `/tag/{slug}/` URLs, those may also need redirects
3. **Author URLs** - If there were `/author/{name}/` URLs, check if redirects are needed
