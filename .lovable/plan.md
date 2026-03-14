

# Publish Country-Specific Compliance Articles for 6 New European Markets

## Overview

Add Romania (ANAF), Hungary (NAV), Serbia (SEF), Poland (KAS), Italy (SDI), and Bulgaria (NRA) to the existing country compliance content generator. This produces **30 new English blog posts** (5 templates x 6 countries) plus **120 translated posts** across DE/FR/PT/ES — **150 new articles total**.

Each country gets these 5 article types (matching existing pattern):
1. Tax-Compliant Invoice in [Country]
2. VAT Invoice Format in [Country]
3. Freelancer VAT Registration in [Country]
4. Invoice [Country] Clients from Abroad
5. Freelancer Tax Mistakes in [Country]

## Country Data to Add

| Code | Name | Authority | Tax Type | Rate | Currency | Threshold | E-Invoicing |
|------|------|-----------|----------|------|----------|-----------|-------------|
| `ro` | Romania | ANAF | VAT | 19% (std), 9%, 5% | RON (lei) | RON 300,000 | Mandatory e-Factura (RO e-Invoice) |
| `hu` | Hungary | NAV | VAT (ÁFA) | 27% (std), 18%, 5% | HUF (Ft) | HUF 12M | Mandatory Online Számla real-time reporting >HUF 100K |
| `rs` | Serbia | SEF | VAT (PDV) | 20% (std), 10% | RSD (din.) | RSD 8M | Mandatory SEF e-invoicing B2B/B2G |
| `pl` | Poland | KAS | VAT | 23% (std), 8%, 5% | PLN (zł) | PLN 200,000 | KSeF mandatory structured e-invoicing |
| `it` | Italy | AdE/SDI | IVA | 22% (std), 10%, 5%, 4% | EUR (€) | €65,000 (forfettario) | Mandatory FatturaPA/SDI for all invoices |
| `bg` | Bulgaria | NRA | VAT (ДДС) | 20% (std), 9% | BGN (лв.) | BGN 100,000 | EN 16931 + SAF-T; strict 10-digit sequential numbering |

## Implementation Steps

### 1. `src/data/countryCompliancePosts.ts` — Add 6 countries to English generator
Add 6 new `CountryConfig` entries with accurate regulatory data (tax IDs, thresholds, penalties, e-invoicing context, filing frequencies, payment methods). The existing `generateAllCountryPosts()` loop automatically generates all 5 templates per country.

### 2. `src/data/countryCompliancePosts.de.ts` — Add 6 countries with German translations
Translated country names, demonyms, filing frequencies, penalties, e-invoicing context, and payment methods.

### 3. `src/data/countryCompliancePosts.fr.ts` — Add 6 countries with French translations
Same pattern with French-localized fields.

### 4. `src/data/countryCompliancePosts.pt.ts` — Add 6 countries with Portuguese translations
Same pattern with Portuguese-localized fields.

### 5. `src/data/countryCompliancePosts.es.ts` — Add 6 countries with Spanish translations
Same pattern with Spanish-localized fields.

### 6. `src/data/topicalMap.ts` — Register all 30 new slugs
Add new slugs to the appropriate pillars:
- **tax-compliance** pillar: `tax-compliant-invoice-{ro,hu,rs,pl,it,bg}`, `vat-invoice-format-{ro,hu,rs,pl,it,bg}`, `freelancer-vat-registration-{ro,hu,rs,pl,it,bg}`, `freelancer-tax-mistakes-{ro,hu,rs,pl,it,bg}`
- **getting-paid** pillar: `invoice-clients-in-{ro,hu,rs,pl,it,bg}`

### 7. `src/data/contentIntents.ts` — Add intent mappings for new slugs
Register content intents for the 30 new articles following existing patterns.

## Key Data Points per Country

**Romania (ANAF)**
- Tax ID: CUI/CIF (Cod Unic de Înregistrare)
- Filing: monthly by 25th
- Record keeping: 10 years
- Penalties: 0.06%/day late payment; RON 1,000–5,000 non-registration
- Payment methods: bank transfer, card, PayU Romania

**Hungary (NAV)**
- Tax ID: Adószám (Tax Number)
- Filing: monthly (>HUF 50M), quarterly, or annually
- Record keeping: 8 years
- Penalties: up to 50% of tax shortfall; HUF 500,000 for reporting violations
- Payment methods: bank transfer, Barion, SimplePay, card

**Serbia (SEF)**
- Tax ID: PIB (Poreski Identifikacioni Broj)
- Filing: monthly by 15th
- Record keeping: 10 years
- Penalties: RSD 100,000–2,000,000 for non-compliance
- Payment methods: bank transfer, IPS (Instant Payment Serbia), card

**Poland (KAS)**
- Tax ID: NIP (Numer Identyfikacji Podatkowej)
- Filing: monthly by 25th (JPK_VAT)
- Record keeping: 5 years
- Penalties: up to 30% of VAT discrepancy; criminal liability for tax fraud
- Payment methods: BLIK, bank transfer, card, PayU, Przelewy24

**Italy (AdE/SDI)**
- Tax ID: Partita IVA
- Filing: monthly or quarterly; annual declaration
- Record keeping: 10 years
- Penalties: 120%–240% of underpaid VAT; €250–€2,000 for missing invoices
- Payment methods: bank transfer (bonifico), PagoPA, card, Satispay

**Bulgaria (NRA)**
- Tax ID: ЕИК/БУЛСТАТ (EIK/BULSTAT)
- Filing: monthly by 14th
- Record keeping: 5 years (10 for immovables)
- Penalties: BGN 500–10,000 for non-registration; 0.03%/day late payment
- Payment methods: bank transfer, ePay.bg, card

## Files Modified

| File | Change |
|------|--------|
| `src/data/countryCompliancePosts.ts` | Add 6 CountryConfig entries |
| `src/data/countryCompliancePosts.de.ts` | Add 6 German-localized entries |
| `src/data/countryCompliancePosts.fr.ts` | Add 6 French-localized entries |
| `src/data/countryCompliancePosts.pt.ts` | Add 6 Portuguese-localized entries |
| `src/data/countryCompliancePosts.es.ts` | Add 6 Spanish-localized entries |
| `src/data/topicalMap.ts` | Register 30 new slugs in pillars |
| `src/data/contentIntents.ts` | Add intent mappings for 30 new slugs |

## Output

- 30 new English articles
- 30 German, 30 French, 30 Portuguese, 30 Spanish translations
- **150 new indexed pages** targeting European compliance search queries
- All articles auto-inherit existing SEO infrastructure (ArticleSchema, BreadcrumbSchema, hreflang, entity mentions, FAQ schema)

