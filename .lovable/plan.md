

## Structured Data Schema Audit Results

### Overview
Audited all 14 schema files in `src/components/seo/` for relative URL issues. Found **6 schemas** with hardcoded URLs missing language prefix support—similar to the BreadcrumbSchema issue we fixed.

---

### Issues Found by Severity

#### 🔴 HIGH — Missing Language Prefix (6 files)

| Schema | Issues |
|--------|--------|
| **ArticleSchema** | Author URLs, pillar hub pages, product pages, blog category URLs all hardcoded without `/{lang}/`. Also `inLanguage: "en"` hardcoded. |
| **PersonSchema** | Author page URLs and avatar images hardcoded without `/{lang}/` prefix. |
| **DefinedTermSetSchema** | Glossary URLs (`/glossary#term`) hardcoded without `/{lang}/` prefix. |
| **ServiceSchema** | `terms-of-service` URL hardcoded without `/{lang}/` prefix. |
| **ItemListSchema** | `BlogTopicListSchema` uses hardcoded `baseUrl` for blog filter URLs. |
| **WebSiteSchema** | Search action URL template hardcoded without `/{lang}/` prefix. |

#### ✅ OK — No Issues (8 files)

- **FAQSchema** — Uses passed props only, no URL construction
- **HowToSchema** — Uses passed props only
- **ReviewSchema** — Uses passed props only
- **BreadcrumbSchema** — Already fixed (uses `useParams` for lang)
- **SEOHead** — Generates canonical/hreflang correctly
- **SoftwareApplicationSchema** — Organization-level, language-agnostic
- **OrganizationSchema** — Organization-level, language-agnostic (correct)
- **seoConfig.ts** — Configuration only

---

### Fix Pattern

Use the same approach applied to BreadcrumbSchema:

```tsx
import { useParams } from 'react-router-dom';

const BASE = 'https://invoicemonk.com';

// Inside component:
const { lang } = useParams<{ lang: string }>();
const prefix = lang?.toLowerCase() || 'en';

const normalize = (path: string) => `${BASE}/${prefix}${path}`;
```

---

### Detailed Changes Required

#### 1. ArticleSchema.tsx
- Add `useParams` to get current language
- Update `inLanguage` dynamically based on lang
- Prefix all internal URLs:
  - Author URLs: `/blog/author/{slug}` → `/{lang}/blog/author/{slug}`
  - Pillar hub pages: `pillar.hubPage` → `/{lang}{pillar.hubPage}`
  - Product pages: `pillar.targetProduct` → `/{lang}{pillar.targetProduct}`
  - Blog category URLs: `/blog?category=X` → `/{lang}/blog?category=X`
  - Key topic links: `topic.link` → `/{lang}{topic.link}`

#### 2. PersonSchema.tsx
- Add `useParams` for language prefix
- Update author URLs and mainEntityOfPage

#### 3. DefinedTermSetSchema.tsx
- Add `useParams` for language prefix
- Update all glossary term URLs

#### 4. ServiceSchema.tsx
- Add `useParams` for language prefix
- Update `termsOfService` URL

#### 5. ItemListSchema.tsx (BlogTopicListSchema)
- Add `useParams` for language prefix
- Update blog filter URLs in `BlogTopicListSchema`

#### 6. WebSiteSchema.tsx
- Add `useParams` for language prefix
- Update search action URL template and ReadAction target

---

### Language Code Mapping

Need to map route prefix to ISO language codes for `inLanguage`:

| Route | inLanguage |
|-------|------------|
| `/en/` | `en` |
| `/de/` | `de` |
| `/fr/` | `fr` |
| `/pt/` | `pt-BR` |
| `/es/` | `es` |

---

### Impact

- **~15 URL patterns** need language prefix injection
- **No breaking changes** — all props remain the same
- **GSC benefit** — Eliminates potential "Page outside known hreflang cluster" warnings for schema URLs

