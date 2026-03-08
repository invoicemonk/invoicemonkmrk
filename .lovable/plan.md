

# Remaining Untranslated Content -- Full Audit

## Summary

Most pages are properly translated via `useTranslation()`. The remaining untranslated content falls into three categories:

---

## Category A: Hardcoded English in Shared Components (High Priority)

### 1. `MissionVision.tsx` -- About page sub-component
- "Our Mission", "Our Vision", mission text, vision text -- all hardcoded English
- **Fix**: Use `useTranslation('about')` and add `mission.*` / `vision.*` keys to all 5 `about.json` files

### 2. `PressSection.tsx` -- About page sub-component
- "Press & Media", "As Featured In", description text, "Read article" -- all hardcoded English
- **Fix**: Use `useTranslation('about')` and add `press.*` keys to all 5 `about.json` files

### 3. `About.tsx` -- Team member roles
- `role: 'Co-founder & CEO'` and `role: 'Co-founder & Communication President'` are hardcoded English
- **Fix**: Use `t('team.members.0.role')` pattern or keep as proper nouns (roles are borderline -- recommend translating)

---

## Category B: Hardcoded English FAQ Schemas (Medium Priority)

### 4. `Glossary.tsx` -- FAQ schema at top of file
- 4 glossary FAQs hardcoded in English (lines 9-14): "What is an invoice?", etc.
- The rest of the Glossary page is translated via `useTranslation('glossary')`
- **Fix**: Move FAQs to `glossary.json` namespace and use `t('faqs', { returnObjects: true })`

---

## Category C: Tool Pages -- Fully Hardcoded (Low Priority)

### 5. `CheapestInternationalPayments.tsx` -- entire page hardcoded English
### 6. `InternationalPaymentFeeCalculator.tsx` -- entire page hardcoded English
### 7. `PaypalVsWiseFees.tsx` -- entire page hardcoded English
### 8. `Explore.tsx` -- entire page hardcoded English

These are specialized SEO landing pages / internal utility pages. Translating them requires creating new i18n namespaces with significant content.

---

## Category D: SEO Meta Tags (Low Priority)

### 9. `seoConfig.ts` -- English-only SEO titles
- Pages like `/invoicing`, `/expenses`, `/payments` have English-only SEO title templates (e.g., "Invoicing Software for Small Business")
- These appear in `<title>` and `<meta description>` tags
- **Fix**: Move SEO strings to i18n or add locale-aware title functions

### 10. `AuthorPage.tsx` -- hardcoded SEO meta
- `"${author.name} - Author at Invoicemonk"` and `"Articles by ${author.name}"` -- the SEO title is hardcoded English, though the UI labels use `t()`

---

## Recommended Implementation

### Batch 1 (Visible on About page)
1. Translate `MissionVision.tsx` -- add keys to `about.json` (5 languages)
2. Translate `PressSection.tsx` -- add keys to `about.json` (5 languages)
3. Translate team member roles in `About.tsx`

### Batch 2 (Glossary page)
4. Move Glossary FAQ strings to `glossary.json` namespace

### Batch 3 (Tool pages -- defer or implement)
5-8. Create namespaces for the 3 tool pages and Explore page

### Batch 4 (SEO meta -- defer)
9-10. Localize SEO config strings

I recommend implementing Batches 1 and 2 now (high-visibility pages), and deferring Batches 3-4 as lower priority.

