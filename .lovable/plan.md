

# Homepage Translation Plan

## Problem
The homepage has 10 section components, but only `HeroSection` is fully translated. The remaining 9 sections contain hardcoded English strings that display identically across `/de/`, `/fr/`, `/es/`, and `/pt/` routes.

## Sections Requiring Translation

| Section | Hardcoded Strings |
|---------|------------------|
| **GlobalComplianceSection** | Heading, eyebrow, feature labels, footer copy |
| **CompliancePositioningSection** | Heading, subtitle, feature labels, footer |
| **WaveProductTabs** | Section heading, 7 product names/descriptions/features, CTAs |
| **WaveFeatureBenefits** | Section heading, 3 benefit titles + descriptions |
| **ComplianceTrustSection** | Heading, 8 trust item labels + descriptions |
| **WaveTestimonials** | "Testimonials" label, "Loved by" heading |
| **WavePersonaSection** | Heading, subtitle, 4 persona titles + descriptions |
| **HomeBlogSection** | Heading, subtitle, CTA button text |
| **FAQSection** | Heading, subtitle |
| **WaveCTASection** | Heading, subtitle, CTA button, 3 trust badges |

## Approach

Create a new i18next namespace `home` with JSON files for all 5 languages (`src/i18n/{en,de,fr,es,pt}/home.json`). This keeps the translations in the established i18next pattern used by other product pages (pricing, invoicing, etc.).

Each component will use `useTranslation('home')` and replace hardcoded strings with `t()` calls. Data arrays (products, benefits, trust items, personas, features) will be built using `t()` inside the component or via `useMemo`.

## Implementation Batches

Due to the volume of content (~200+ translatable strings across 10 sections), this will be done in 2 batches:

**Batch A** -- Create `home.json` for EN + DE + FR + ES + PT covering:
- GlobalComplianceSection
- CompliancePositioningSection
- ComplianceTrustSection
- WaveFeatureBenefits
- WaveCTASection

**Batch B** -- Extend `home.json` for remaining sections:
- WaveProductTabs (largest -- 7 products with 4 features each)
- WavePersonaSection
- HomeBlogSection
- FAQSection (heading only)
- WaveTestimonials (heading only)

Then update each component to consume the translations via `useTranslation('home')`.

