

# Fix WaveBlogPreview to Show Translated Blog Posts

## Problem
`WaveBlogPreview` is used on 7 feature/product pages (Invoicing, Expenses, Estimates, Receipts, Payments, Accounting, ClientManagement). It imports English-only `blogPosts` and `getPostsForPillar` from `@/data/blogPosts`, so blog cards always show English titles/excerpts regardless of language. It also has a hardcoded "Browse all Invoicemonk articles" link label.

## Fix
Update `WaveBlogPreview.tsx` to:

1. Use `useTranslation` + `getLangPrefix` to get the current language
2. Replace `blogPosts` fallback with `getTranslatedBlogPosts(lang)`
3. Replace `getPostsForPillar(pillarId)` with a language-aware equivalent that filters translated posts by pillar cluster slugs (using `getClusterPostsForPillar` + `getTranslatedBlogPosts`)
4. Add a `t()` call for the "Browse all Invoicemonk articles" text (add key `home.blogPreview.browseAll` to all 5 `home.json` files)

This is a single-component fix since all 7 pages consume `WaveBlogPreview` — updating the component once fixes all of them.

### Translation keys to add (in each `home.json`):
- `blogPreview.browseAll`: "Browse all Invoicemonk articles" / "Alle Invoicemonk-Artikel durchsuchen" / "Parcourir tous les articles Invoicemonk" / "Ver todos los artículos de Invoicemonk" / "Ver todos os artigos do Invoicemonk"

