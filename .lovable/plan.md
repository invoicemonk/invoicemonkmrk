

# Plan: Implement Country-Tailored Localization System

## Overview
Build a complete localization system that tailors content, currency formatting, and compliance messaging for 5 supported countries: Nigeria (NG), United States (US), Canada (CA), United Kingdom (GB), and Australia (AU).

---

## Phase 1: Locale System Infrastructure

### 1.1 Create Locale Types
**File:** `src/locales/types.ts`

Define TypeScript interfaces for:
- `LocaleCurrency` - currency code, symbol, position (before/after)
- `LocaleHeroContent` - badge text, headline, subheadline, CTAs
- `LocaleComplianceContent` - tax authority name (FIRS, IRS, etc.), compliance message
- `LocalePricing` - tier prices in local currency
- `LocaleConfig` - complete locale configuration

### 1.2 Create Locale Configuration Files
Create 5 locale files with country-specific content:

| File | Country | Currency | Tax Authority |
|------|---------|----------|---------------|
| `en-NG.ts` | Nigeria | ₦ (NGN) | FIRS |
| `en-US.ts` | United States | $ (USD) | IRS |
| `en-CA.ts` | Canada | C$ (CAD) | CRA |
| `en-GB.ts` | United Kingdom | £ (GBP) | HMRC |
| `en-AU.ts` | Australia | A$ (AUD) | ATO |

Each file includes:
- Localized hero headlines (e.g., "FIRS-compliant invoicing" for Nigeria)
- Currency formatting preferences
- Sample pricing in local currency
- Payment gateway references (Paystack for NG, Stripe for others)

### 1.3 Create Index File
**File:** `src/locales/index.ts`

- Export all locales
- Helper functions: `getLocale()`, `formatCurrency()`, `formatPrice()`
- List of supported countries with default (US)

---

## Phase 2: Context & State Management

### 2.1 Create Locale Context
**File:** `src/contexts/LocaleContext.tsx`

```text
┌─────────────────────────────────────────┐
│           LocaleProvider                │
├─────────────────────────────────────────┤
│ • currentCountry: SupportedCountry      │
│ • locale: LocaleConfig                  │
│ • setCountry: (country) => void         │
│ • formatCurrency: (amount) => string    │
└─────────────────────────────────────────┘
```

Features:
- Persist country selection in localStorage
- Provide locale data to all components
- Currency formatting utility

### 2.2 Create useLocale Hook
**File:** `src/hooks/useLocale.ts`

Simple hook to consume LocaleContext with error handling.

---

## Phase 3: Country Selector Component

### 3.1 Create CountrySelector Component
**File:** `src/components/CountrySelector.tsx`

Features:
- Dropdown showing flag emoji + country name
- Smooth selection with visual feedback
- Persists to localStorage on change
- Integrates with shadcn/ui dropdown

---

## Phase 4: Update Hero Section

### 4.1 Update HeroSection.tsx

Replace hardcoded values with locale-aware content:

| Current | After Localization |
|---------|-------------------|
| `$1,200` | `formatCurrency(1200, locale)` |
| "Now with AI-powered insights" | `locale.content.hero.badge` |
| Static headline | Dynamic with compliance authority |

### 4.2 Update FloatingInvoiceCard.tsx

- Pass locale via props or context
- Format all currency amounts using `formatCurrency()`
- Display country-appropriate currency symbols

### 4.3 Add Compliance Badge

Add a new badge showing tax authority compliance:
- Nigeria: "FIRS Compliant"
- US: "IRS Ready"
- UK: "HMRC Compliant"
- etc.

---

## Phase 5: Wire Up App

### 5.1 Update App.tsx

Wrap the app with `LocaleProvider`:

```text
<QueryClientProvider>
  <LocaleProvider>
    <TooltipProvider>
      ... routes ...
    </TooltipProvider>
  </LocaleProvider>
</QueryClientProvider>
```

### 5.2 Add Country Selector to Navigation

Place the CountrySelector in the navbar for easy access.

---

## File Creation Summary

| File | Type | Purpose |
|------|------|---------|
| `src/locales/types.ts` | New | TypeScript interfaces |
| `src/locales/en-NG.ts` | New | Nigeria locale |
| `src/locales/en-US.ts` | New | US locale |
| `src/locales/en-CA.ts` | New | Canada locale |
| `src/locales/en-GB.ts` | New | UK locale |
| `src/locales/en-AU.ts` | New | Australia locale |
| `src/locales/index.ts` | New | Exports & utilities |
| `src/contexts/LocaleContext.tsx` | New | Context provider |
| `src/hooks/useLocale.ts` | New | Consumer hook |
| `src/components/CountrySelector.tsx` | New | Selector UI |
| `src/components/hero/HeroSection.tsx` | Modify | Use locale |
| `src/components/hero/FloatingInvoiceCard.tsx` | Modify | Use locale |
| `src/App.tsx` | Modify | Add provider |

---

## Technical Details

### Currency Formatting Logic

```text
formatCurrency(4200, locale):
  NG → ₦4,200
  US → $4,200
  CA → C$4,200
  GB → £4,200
  AU → A$4,200
```

### Country Detection (Optional Enhancement)

Could auto-detect country from:
1. Browser `navigator.language`
2. IP geolocation (requires API)
3. Default to US if undetected

### LocalStorage Key

`invoicemonk_country` - stores selected country code (e.g., "NG")

---

## Example Locale Data (Nigeria)

```text
{
  code: "en-NG",
  country: "Nigeria",
  countryCode: "NG",
  flag: "🇳🇬",
  currency: {
    code: "NGN",
    symbol: "₦",
    position: "before"
  },
  content: {
    hero: {
      badge: "FIRS-Compliant Invoicing",
      headline: "Get paid faster with",
      headlineAccent: "compliant invoicing",
      subheadline: "Create FIRS-ready invoices...",
      cta: "Start free trial",
      ...
    },
    compliance: {
      authority: "FIRS",
      message: "Fully compliant with Nigerian tax regulations"
    },
    paymentGateway: "Paystack"
  },
  pricing: {
    starter: 5000,
    pro: 15000,
    business: 45000
  }
}
```

---

## Testing Checklist

After implementation, verify:
- [ ] Country selector changes currency display
- [ ] Hero section shows correct currency symbols
- [ ] FloatingInvoiceCard amounts update
- [ ] Compliance badge shows correct authority
- [ ] Selection persists after page refresh
- [ ] All 5 countries display correctly

