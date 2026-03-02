

# Fix "Alternate page with proper canonical tag" GSC Issues

## Analysis

The ~400 URLs fall into **two categories**:

### Category A: Country-prefixed alternates (99% of the list) — NO FIX NEEDED
URLs like `/ke/blog/...`, `/de/blog/...`, `/fr/blog/...` are **expected behavior**. Your hreflang setup tells Google these are alternates of the `/us/` canonical. Google correctly identifies them as "Alternate page with proper canonical tag." This is working as intended.

### Category B: Trailing-slash non-prefixed URLs (4 URLs) — NEEDS FIX
These four at the bottom of your list are actual issues:
- `invoicemonk.com/terms-of-service/`
- `invoicemonk.com/small-businesses/`
- `invoicemonk.com/contact/`
- `invoicemonk.com/about/`

**Problem**: `vercel.json` redirects `/about` → `/us/about`, but `/about/` (with trailing slash) doesn't match that rule. It falls through to the SPA catch-all rewrite, gets served with a 200 status, and Google indexes it as a duplicate.

## Fix

### 1. Add trailing-slash redirect rule in `vercel.json`

Add a single catch-all rule **before** the existing page-specific redirects that strips trailing slashes at the server level (not client-side):

```json
{
  "source": "/:path((?!.*\\.).*)/",
  "destination": "/:path",
  "permanent": true
}
```

This 301-redirects any path ending in `/` (except root `/`) to the version without, **before** the SPA catch-all fires. The existing page-specific redirects then handle the non-prefixed path normally (`/about` → `/us/about`).

### Files Changed

| File | Change |
|------|--------|
| `vercel.json` | Add 1 trailing-slash redirect rule near the top of the redirects array |

No code changes. One line in `vercel.json`. The ~400 country-prefixed URLs require no action — they're correctly configured hreflang alternates.

