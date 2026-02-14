

# Fix Non-Indexable Pages (Canonical Issue)

## The Problem

Every page on the site is being flagged as **non-indexable** because they all have their canonical URL pointing to `https://invoicemonk.com/` (the homepage) instead of their own URL. This means search engines think every page is a duplicate of the homepage and won't index them.

**Root cause**: The file `index.html` (line 10) has a hardcoded canonical tag:
```
<link rel="canonical" href="https://invoicemonk.com/" />
```

Since this is a Single Page Application, every page serves the same `index.html` first. Crawlers that don't fully execute JavaScript (including many SEO audit tools and some search engine crawlers) see this hardcoded homepage canonical on every page.

---

## The Fix

### 1. Remove hardcoded canonical from `index.html`

Remove line 10 (`<link rel="canonical" href="https://invoicemonk.com/" />`). The React app (via `react-helmet-async`) will set the correct canonical dynamically for each page.

### 2. Update `SEOHead.tsx` to auto-generate canonical from current route

Currently, if no `canonical` prop is passed, it defaults to `https://invoicemonk.com`. Change this so it automatically builds the canonical from the current URL path using `useLocation()` from React Router:

```
const location = useLocation();
const fullCanonical = canonical || `${baseUrl}${location.pathname}`;
```

This ensures every page gets its own correct canonical URL, even if the page component doesn't explicitly pass one.

### 3. Verify existing `canonical` props still work

Pages that already pass an explicit `canonical` prop (like `/pricing`, `/blog`, etc.) will continue to work as before -- the explicit prop takes priority.

---

## Files Modified

| File | Change |
|------|--------|
| `index.html` | Remove hardcoded `<link rel="canonical">` tag (line 10) |
| `src/components/seo/SEOHead.tsx` | Import `useLocation`, auto-generate canonical from current route path when not explicitly provided |

---

## Impact

- All 100+ pages listed in the audit will get their own correct canonical URL
- Search engines will be able to index each page individually
- No changes needed to any page components -- the fix is centralized
- Existing explicit canonical props are preserved

