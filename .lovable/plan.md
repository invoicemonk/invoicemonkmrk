

# Fix: Soft 404 — 105 Affected URLs

## Root Cause

These URLs return HTTP 200 (because the SPA always serves `index.html`) but render content that Google recognizes as a 404 page. Google classifies this as a "soft 404." The URLs fall into distinct categories:

### Category Breakdown

| Category | Count | Example | Current behavior |
|---|---|---|---|
| `/tag/*` URLs (legacy WordPress) | ~30 | `/tag/bitcoin`, `/tag/freelance/` | Hits SPA catch-all → renders NotFound with 200 |
| `/author/*` URLs (legacy) | ~2 | `/author/olayinka` | Same — renders NotFound with 200 |
| Legacy blog slugs (no `/blog/` prefix) | ~10 | `/savings-and-investment-on-alat-how-it-works/`, `/lucrative-business-ideas-in-nigeria/` | Same |
| Legacy country-prefix corridors | ~40 | `/ng/receive-usd-in-nigeria-cost` | 301 → `/en/receive-usd-in-nigeria-cost` (already handled, will clear) |
| No-prefix corridors | ~3 | `/receive-eur-in-nigeria-cost`, `/receive-gbp-in-us-cost` | Hits SPA catch-all → renders NotFound with 200 |
| Misc junk | ~5 | `/trainini`, `/index.html`, `/training/...`, `/blog/<a href=` | Same |
| No-prefix blog posts | ~5 | `/blog/best-personal-finance-blogs`, `/blog/international-payment-fees-guide` | Missing redirect to `/en/blog/...` |

## Fix: Add server-side redirects in `vercel.json`

The only real fix for soft 404s on an SPA is to add server-level redirects so Google gets a 301 instead of a 200. URLs that are truly dead should return 410 (Gone), but Vercel redirects don't support that — so we redirect to the closest relevant page.

### Changes to `vercel.json`

Add these redirect rules (before the SPA catch-all rewrite):

```json
// Tag pages → blog listing
{ "source": "/tag/:slug*", "destination": "/en/blog", "statusCode": 301 }

// Author pages → about page
{ "source": "/author/:slug*", "destination": "/en/about", "statusCode": 301 }

// No-prefix blog paths → language-prefixed blog
{ "source": "/blog/:path*", "destination": "/en/blog/:path*", "statusCode": 301 }

// No-prefix corridor pages → language-prefixed corridors
{ "source": "/receive-:currency-in-:destination-cost", "destination": "/en/receive-:currency-in-:destination-cost", "statusCode": 301 }

// Legacy WordPress blog posts → blog listing (content no longer exists)
{ "source": "/savings-and-investment-on-alat-how-it-works*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/lucrative-business-ideas-in-nigeria*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/invoicemonk-free-online-invoice-accounting-platform-nigeria*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/invoicemonk-template-how-to-create-a-perfect-invoice-template-that-gets-paid-faster*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/small-business-marketing-101-a-guide-to-growth*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/the-importance-of-invoicing-timely-and-how-to-do-it-efficiently*", "destination": "/en/blog", "statusCode": 301 }
{ "source": "/top-freelance-websites-in-nigeria*", "destination": "/en/blog", "statusCode": 301 }

// Misc junk
{ "source": "/training/:path*", "destination": "/en", "statusCode": 301 }
{ "source": "/trainini", "destination": "/en", "statusCode": 301 }
{ "source": "/index.html", "destination": "/en", "statusCode": 301 }
```

### Files to edit

| File | Change |
|---|---|
| `vercel.json` | Add ~15 redirect rules for `/tag/*`, `/author/*`, `/blog/*`, legacy slugs, no-prefix corridors, and misc junk URLs |

### What about the legacy country-prefix corridors?

URLs like `/ng/receive-usd-in-nigeria-cost` are already covered by existing `"/ng/:path*" → "/en/:path*"` redirects. Google is just slow to re-crawl them. These will resolve on their own.

### Expected impact

- All 105 soft-404 URLs will return 301 instead of 200 + NotFound content
- Google will follow the redirects and either index the destination or drop the URL from reports
- Count should drop to ~0 over 2-4 weeks

