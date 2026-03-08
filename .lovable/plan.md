

# Fix: BreadcrumbSchema "Invalid URL in field id"

## Problem

Google requires fully qualified absolute URLs in BreadcrumbList structured data. Several pages pass relative paths (e.g., `/`, `/guides`, `/guides/expenses`) which Google rejects.

Additionally, pages that do use absolute URLs (BlogPost, HelpArticle) hardcode `https://invoicemonk.com/blog/...` without the language prefix, so `/es/blog/some-post` emits a breadcrumb pointing to `/blog/some-post` instead of `/es/blog/some-post`.

## Fix

**Single change in `BreadcrumbSchema.tsx`**: Normalize all URLs inside the component. If a URL is relative, prepend `https://invoicemonk.com`. Also use `useParams` to inject the current language prefix for relative paths.

This fixes all 13 calling pages at once without touching any of them.

```tsx
// BreadcrumbSchema.tsx
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const { lang } = useParams<{ lang: string }>();
  const prefix = lang?.toLowerCase() || 'en';

  const normalize = (url: string) => {
    if (url.startsWith('http')) return url;
    const path = url.startsWith('/') ? url : `/${url}`;
    return `${BASE}/${prefix}${path}`;
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": normalize(item.url)
    }))
  };
  // ...
}
```

**Secondary cleanup (optional but recommended)**: Update the pages that already hardcode `https://invoicemonk.com/blog/...` (BlogPost, BlogTopic, HelpArticle) to use relative paths instead, since the component now handles normalization. This ensures the language prefix is always correct.

## Files to edit

| File | Change |
|---|---|
| `src/components/seo/BreadcrumbSchema.tsx` | Add URL normalization with lang prefix |
| `src/pages/BlogPost.tsx` | Change absolute URLs to relative paths (optional cleanup) |
| `src/pages/BlogTopic.tsx` | Same |
| `src/pages/help/HelpArticle.tsx` | Same |

