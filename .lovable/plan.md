

# Translate 4 Remaining English-Only Pages

## Scope

4 page components + 2 shared tool sub-components, all currently hardcoded English:

| Page | Strings | Sub-components |
|---|---|---|
| `Explore.tsx` | Hero, tabs, headings, FAQs, SEO | TopicExplorer, ReviewForm, ReviewDisplay, AnalyticsDashboard |
| `InternationalPaymentFeeCalculator.tsx` | Hero, full article, FAQs, CTAs, SEO | PaymentFeeCalculator, PaymentMethodComparison |
| `CheapestInternationalPayments.tsx` | Hero, full article, FAQs, CTAs, SEO | PaymentFeeCalculator |
| `PaypalVsWiseFees.tsx` | Hero, article, comparison table features, FAQs, SEO | PaymentFeeCalculator |

`PaymentFeeCalculator` and `PaymentMethodComparison` are shared across all 3 tool pages and contain ~20 hardcoded labels ("Amount to Send", "Calculate Fees", "Estimated net received", "Best Value", "Create invoice", etc.).

## Approach

Use i18next JSON namespaces (consistent with rest of project). Create 2 new namespaces:

- **`tools.json`** -- covers all 3 tool pages + shared calculator/comparison components
- **`explore.json`** -- covers the Explore page

### New files (10 total)
- `src/i18n/{en,de,fr,es,pt-BR}/tools.json`
- `src/i18n/{en,de,fr,es,pt-BR}/explore.json`

### Component edits (7 files)
1. **`PaymentFeeCalculator.tsx`** -- `useTranslation('tools')` for all labels (amount, currency, calculate, results, disclaimer, CTAs)
2. **`PaymentMethodComparison.tsx`** -- `useTranslation('tools')` for table headers (Method, Est. Fees, FX Spread, Speed, Net Received, Best For)
3. **`InternationalPaymentFeeCalculator.tsx`** -- `useTranslation('tools')` for SEO, hero, article prose, FAQs, related links, CTA
4. **`CheapestInternationalPayments.tsx`** -- same pattern, different content keys
5. **`PaypalVsWiseFees.tsx`** -- same pattern + comparison features array from `t('paypalVsWise.features', { returnObjects: true })`
6. **`Explore.tsx`** -- `useTranslation('explore')` for hero, tabs, headings, FAQs, SEO
7. **`i18n` config** -- register the 2 new namespaces

### Sub-component scope for Explore

TopicExplorer, ReviewForm, ReviewDisplay, and AnalyticsDashboard are internal utility components with many hardcoded strings. These will also use `useTranslation('explore')` for their UI labels (form fields, button text, stat labels, etc.).

## Key structure (tools.json example)

```json
{
  "calculator": {
    "amountToSend": "Amount to Send",
    "sendingCurrency": "Sending Currency",
    "receivingCurrency": "Receiving Currency",
    "senderCountry": "Sender Country",
    "receiverCountry": "Receiver Country",
    "calculateFees": "Calculate Fees",
    "bestValue": "Best Value",
    "netReceived": "Estimated net received",
    "fees": "Fees",
    "fxSpread": "FX spread",
    "speed": "Speed",
    "none": "None",
    "createInvoice": "Create invoice",
    "createFreeInvoice": "Create a Free Invoice",
    "openFreeAccount": "Open a Free Account",
    "disclaimer": "These estimates are based on...",
    "table": {
      "method": "Method",
      "estFees": "Est. Fees",
      "fxSpread": "FX Spread",
      "speed": "Speed",
      "netReceived": "Net Received",
      "bestFor": "Best For"
    }
  },
  "feeCalculator": {
    "seo": { "title": "...", "description": "..." },
    "hero": { "title": "...", "subtitle": "..." },
    "article": { ... },
    "faqs": [ ... ],
    "relatedResources": "Related Resources",
    "faqTitle": "Frequently Asked Questions",
    "cta": { "title": "...", "subtitle": "...", "button": "..." }
  },
  "cheapest": { ... },
  "paypalVsWise": {
    "features": [ { "feature": "Low transfer fees", "wise": true, "paypal": false } ],
    ...
  }
}
```

## Implementation order

1. Create `tools.json` for all 5 languages with calculator + 3 page sections
2. Create `explore.json` for all 5 languages
3. Register namespaces in i18n config
4. Update `PaymentFeeCalculator.tsx` and `PaymentMethodComparison.tsx`
5. Update the 3 tool page components
6. Update `Explore.tsx` and its sub-components (TopicExplorer, ReviewForm, ReviewDisplay, AnalyticsDashboard)

