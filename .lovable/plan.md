

# Fix: Duplicate FAQPage Schema + Structured Data Crawl Errors

## Problem Summary

The Google Search Console report shows **3 distinct issues**:

1. **"Duplicate field FAQPage"** — escalating from 2 to 8 affected items since March 3rd
2. **Affected URLs** are legacy country-prefixed paths (`/us/payments`, `/us/expenses`, `/ke/estimates`, `/us/receipts`) that redirect via vercel.json but Google still crawls and validates structured data on the redirect source
3. **Root cause**: Product pages (Payments, Expenses, Estimates, Receipts, Accounting) render **two separate `<script type="application/ld+json">` blocks** with `@type: FAQPage` — one from the explicit `<FAQSchema>` call in the page component, and another from inside the `<WaveProductFAQ>` child component

## Affected Pages

These 5 product pages have the duplicate pattern:

| Page | Explicit `FAQSchema` (seoFaqs) | Embedded in `WaveProductFAQ` |
|---|---|---|
| `Payments.tsx` | Line 47 | Line 320 |
| `Expenses.tsx` | Line 77 | Line 293 |
| `Estimates.tsx` | Line 49 | Line 173 |
| `Receipts.tsx` | Line 47 | Line 197 |
| `Accounting.tsx` | Line 52 | Line 309 |

Each page injects ~10 SEO-optimized FAQs at the top AND the `WaveProductFAQ` component injects its own (different) FAQ items as a second FAQPage schema. Google treats this as a duplicate structured data error.

## Fix Plan

### 1. Remove FAQSchema from inside WaveProductFAQ component

Edit `src/components/home/WaveProductFAQ.tsx` to remove the `<FAQSchema>` call (line 31). This component is a **UI display component** — the structured data responsibility should stay at the page level only.

### 2. Merge all FAQ items into the single page-level FAQSchema

For each of the 5 product pages, combine `seoFaqs` and the display `faqItems` into one unified array passed to a single `<FAQSchema>`:

```tsx
// Before (two separate schemas):
<FAQSchema items={seoFaqs} />          {/* Schema 1 */}
<WaveProductFAQ faqs={faqItems} />     {/* Schema 2 hidden inside */}

// After (one merged schema):
<FAQSchema items={[...seoFaqs, ...faqItems]} />
<WaveProductFAQ faqs={faqItems} />     {/* No more schema inside */}
```

### 3. Apply the same fix to GuideFAQ component

`src/components/guides/GuideFAQ.tsx` also embeds `FAQSchema` inside a display component. Remove it there too since the guide pages should handle schema at the page level. Verify guide pages already have a page-level FAQSchema or add one if missing.

### Files to Edit

- `src/components/home/WaveProductFAQ.tsx` — remove `FAQSchema` import and usage
- `src/components/guides/GuideFAQ.tsx` — remove `FAQSchema` import and usage
- `src/pages/Payments.tsx` — merge faqItems into existing FAQSchema
- `src/pages/Expenses.tsx` — merge faqItems into existing FAQSchema
- `src/pages/Estimates.tsx` — merge faqItems into existing FAQSchema
- `src/pages/Receipts.tsx` — merge faqItems into existing FAQSchema
- `src/pages/Accounting.tsx` — merge faqItems into existing FAQSchema
- Verify guide pages (e.g. `src/pages/guides/`) have page-level FAQSchema

This fix eliminates the duplicate FAQPage structured data. The legacy URL crawling (`/us/`, `/ke/`) is already handled by the vercel.json 301 redirects — once the structured data is valid on the destination pages, the GSC errors will clear after recrawling.

