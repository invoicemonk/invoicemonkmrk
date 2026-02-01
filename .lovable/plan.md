
# Plan: Fix 404 Errors for Legacy URLs from Google Search

## Problem Identified

When users click on old URLs from Google search results like `https://www.invoicemonk.com/features/send-invoices/`, they get a 404 error. This happens because:

1. **Vercel serves the error before React loads** - The server doesn't find a matching file or redirect rule
2. **Trailing slash mismatch** - Google may have indexed URLs with trailing slashes (`/features/send-invoices/`)
3. **React redirects only work client-side** - The current redirects in `App.tsx` only work after the React app loads

---

## Solution

Add **server-side redirects in Vercel** that handle these legacy URLs before the SPA loads. This ensures:
- Immediate redirect (no 404)
- Better SEO (301 permanent redirects pass link equity)
- Both trailing slash and non-trailing slash versions work

---

## Changes Required

### 1. Update vercel.json

Add server-side redirects for all legacy `/features/*` URLs:

| Old URL | New URL | Type |
|---------|---------|------|
| `/features` | `/why-invoicemonk` | 301 |
| `/features/` | `/why-invoicemonk` | 301 |
| `/features/send-invoices` | `/invoicing` | 301 |
| `/features/send-invoices/` | `/invoicing` | 301 |
| `/features/accept-payments` | `/payments` | 301 |
| `/features/accept-payments/` | `/payments` | 301 |
| `/features/estimates` | `/estimates` | 301 |
| `/features/estimates/` | `/estimates` | 301 |
| `/features/business-expense-tracking-app` | `/expenses` | 301 |
| `/features/business-expense-tracking-app/` | `/expenses` | 301 |

### 2. Add SPA Fallback Rule

Ensure all other routes are handled by `index.html` (the React app) with a rewrite rule. This prevents 404s for valid SPA routes.

---

## Files to Modify

| File | Changes |
|------|---------|
| `vercel.json` | Add 10+ redirect rules for legacy URLs, add SPA fallback rewrite |

---

## Technical Implementation

The updated `vercel.json` will include:

```json
{
  "redirects": [
    // Existing blog redirects...
    
    // New feature page redirects (both with and without trailing slash)
    {
      "source": "/features",
      "destination": "/why-invoicemonk",
      "permanent": true
    },
    {
      "source": "/features/",
      "destination": "/why-invoicemonk",
      "permanent": true
    },
    {
      "source": "/features/send-invoices",
      "destination": "/invoicing",
      "permanent": true
    },
    {
      "source": "/features/send-invoices/",
      "destination": "/invoicing",
      "permanent": true
    },
    // ... more redirects
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Expected Results

After deployment:
- ✅ `invoicemonk.com/features/send-invoices` → redirects to `/invoicing`
- ✅ `invoicemonk.com/features/send-invoices/` → redirects to `/invoicing`
- ✅ All other valid routes work correctly
- ✅ Google search clicks work without 404 errors
- ✅ SEO link equity preserved via 301 permanent redirects

---

## Additional Recommendations

1. **Keep React redirects as backup** - The existing React redirects in `App.tsx` can remain as a fallback for edge cases

2. **Monitor 404s** - After deployment, monitor for any other legacy URLs that might need redirects

3. **Update Google Search Console** - Consider requesting a re-crawl of the affected URLs to update Google's index faster
