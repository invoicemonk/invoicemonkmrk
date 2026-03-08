

# Page Translation Batch Plan

## Approach per batch

For each page: (1) extract all hardcoded strings into a namespace JSON file (`src/i18n/en/<page>.json`), (2) create DE/FR/PT/ES translations, (3) update the TSX to use `useTranslation('<page>')` with `t()` calls.

Each batch creates **5 new JSON files** (en + 4 languages) and modifies **1-3 TSX files**. Batches are sized to stay under ~800 lines of TSX to avoid truncation.

---

## Page Inventory (by line count)

| Page | Lines | Category |
|------|-------|----------|
| Invoicing | 466 | Product |
| Accounting | 424 | Product |
| Payments | 417 | Product |
| Receipts | 413 | Product |
| ClientManagement | 391 | Feature |
| Freelancers | 381 | Audience |
| Estimates | 380 | Audience |
| Consultants | 388 | Audience |
| Contractors | 388 | Audience |
| Agencies | 359 | Audience |
| Accountants | 359 | Audience |
| Ecommerce | 359 | Audience |
| Expenses | 356 | Product |
| Contact | 358 | Company |
| SmallBusinesses | 337 | Audience |
| Photographers | 278 | Audience |
| Lawyers | 278 | Audience |
| Creatives | 278 | Audience |
| Developer | 268 | Audience |
| Pricing | 234 | Company |
| WhyInvoicemonk | 224 | Company |
| RecurringBilling | 217 | Use-case |
| MilestoneBilling | 218 | Use-case |
| FreeInvoiceGenerator | 200 | Tool |
| RetainerBilling | 195 | Use-case |
| BestInvoicingSoftware | 184 | Compare |
| InvoicemonkVsFreshbooks | 178 | Compare |
| InvoicemonkVsQuickbooks | 178 | Compare |
| MultiCurrencyInvoicing | 172 | Compare |
| InvoicemonkVsWave | 170 | Compare |
| InvoicemonkVsZoho | 168 | Compare |
| About | 173 | Company |
| Compliance | 101 | Company |
| Index | 56 | Home |

---

## Batches

### Batch 1: Homepage + Compliance + About (330 lines)
- `Index.tsx` (56) — wrapper page, minimal strings
- `Compliance.tsx` (101) — 8 features + 7 FAQs
- `About.tsx` (173) — mission, team, press

**Namespaces**: `index.json`, `compliance.json`, `about.json`
**New files**: 15 (3 namespaces x 5 languages)

---

### Batch 2: Pricing + WhyInvoicemonk + FreeInvoiceGenerator (658 lines)
- `Pricing.tsx` (234) — plan names, FAQs, toggle labels
- `WhyInvoicemonk.tsx` (224) — benefits, differentiators
- `FreeInvoiceGenerator.tsx` (200) — steps, features, CTAs

**Namespaces**: `pricing.json`, `whyInvoicemonk.json`, `freeInvoiceGenerator.json`
**New files**: 15

---

### Batch 3: Invoicing (466 lines)
- `Invoicing.tsx` (466) — largest page, many features/tabs/FAQs

**Namespaces**: `invoicing.json`
**New files**: 5

---

### Batch 4: Expenses + Contact (714 lines)
- `Expenses.tsx` (356)
- `Contact.tsx` (358)

**Namespaces**: `expenses.json`, `contact.json`
**New files**: 10

---

### Batch 5: Payments (417 lines)
- `Payments.tsx` (417)

**Namespaces**: `payments.json`
**New files**: 5

---

### Batch 6: Accounting (424 lines)
- `Accounting.tsx` (424)

**Namespaces**: `accounting.json`
**New files**: 5

---

### Batch 7: Estimates + Receipts (793 lines)
- `Estimates.tsx` (380)
- `Receipts.tsx` (413)

**Namespaces**: `estimates.json`, `receipts.json`
**New files**: 10

---

### Batch 8: ClientManagement (391 lines)
- `ClientManagement.tsx` (391)

**Namespaces**: `clientManagement.json`
**New files**: 5

---

### Batch 9: Freelancers + Photographers (659 lines)
- `Freelancers.tsx` (381)
- `Photographers.tsx` (278)

**Namespaces**: `freelancers.json`, `photographers.json`
**New files**: 10

---

### Batch 10: Consultants + Creatives (666 lines)
- `Consultants.tsx` (388)
- `Creatives.tsx` (278)

**Namespaces**: `consultants.json`, `creatives.json`
**New files**: 10

---

### Batch 11: Contractors + Developer (656 lines)
- `Contractors.tsx` (388)
- `Developer.tsx` (268)

**Namespaces**: `contractors.json`, `developer.json`
**New files**: 10

---

### Batch 12: Agencies + Lawyers (637 lines)
- `Agencies.tsx` (359)
- `Lawyers.tsx` (278)

**Namespaces**: `agencies.json`, `lawyers.json`
**New files**: 10

---

### Batch 13: SmallBusinesses + Accountants (696 lines)
- `SmallBusinesses.tsx` (337)
- `Accountants.tsx` (359)

**Namespaces**: `smallBusinesses.json`, `accountants.json`
**New files**: 10

---

### Batch 14: Ecommerce (359 lines)
- `Ecommerce.tsx` (359)

**Namespaces**: `ecommerce.json`
**New files**: 5

---

### Batch 15: All 5 Comparison pages (878 lines)
- `BestInvoicingSoftware.tsx` (184)
- `InvoicemonkVsFreshbooks.tsx` (178)
- `InvoicemonkVsQuickbooks.tsx` (178)
- `InvoicemonkVsWave.tsx` (170)
- `InvoicemonkVsZoho.tsx` (168)

These share a similar structure so can be batched together.
**Namespaces**: `compareBest.json`, `compareFreshbooks.json`, `compareQuickbooks.json`, `compareWave.json`, `compareZoho.json`
**New files**: 25

---

### Batch 16: All 4 Use-case pages (802 lines)
- `RecurringBilling.tsx` (217)
- `MilestoneBilling.tsx` (218)
- `RetainerBilling.tsx` (195)
- `MultiCurrencyInvoicing.tsx` (172)

**Namespaces**: `recurringBilling.json`, `milestoneBilling.json`, `retainerBilling.json`, `multiCurrencyInvoicing.json`
**New files**: 20

---

## Summary

| Batch | Pages | Total TSX lines | New JSON files |
|-------|-------|----------------|---------------|
| 1 | Index, Compliance, About | 330 | 15 |
| 2 | Pricing, WhyInvoicemonk, FreeInvoiceGenerator | 658 | 15 |
| 3 | Invoicing | 466 | 5 |
| 4 | Expenses, Contact | 714 | 10 |
| 5 | Payments | 417 | 5 |
| 6 | Accounting | 424 | 5 |
| 7 | Estimates, Receipts | 793 | 10 |
| 8 | ClientManagement | 391 | 5 |
| 9 | Freelancers, Photographers | 659 | 10 |
| 10 | Consultants, Creatives | 666 | 10 |
| 11 | Contractors, Developer | 656 | 10 |
| 12 | Agencies, Lawyers | 637 | 10 |
| 13 | SmallBusinesses, Accountants | 696 | 10 |
| 14 | Ecommerce | 359 | 5 |
| 15 | 5 Comparison pages | 878 | 25 |
| 16 | 4 Use-case pages | 802 | 20 |
| **Total** | **34 pages** | **~9,546** | **170 JSON files** |

Each batch = one implementation message. Total: 16 batches. Excludes blog (150+ posts), guides (8 pages), help center, legal pages, and glossary -- those would be separate follow-up phases.

