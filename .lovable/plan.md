

# Compliance Positioning Refinement

## Context
The three compliance sections (GlobalComplianceSection, EcommercePositioningSection, ComplianceTrustSection) were planned previously but never implemented. This plan creates them with the refined copy, updates all locale files to remove government authority badges, and refines existing components.

---

## Changes

### 1. Update All 5 Locale Files -- Remove Authority Badges

Replace the `badge` field in all locale hero content with a globally neutral statement.

| File | Old `badge` | New `badge` |
|------|------------|-------------|
| `en-US.ts` | "IRS-ready invoicing" | "Structured for Jurisdiction-Aware Invoicing" |
| `en-NG.ts` | "NRS-compliant invoicing" | "Structured for Jurisdiction-Aware Invoicing" |
| `en-GB.ts` | "HMRC-compliant invoicing" | "Structured for Jurisdiction-Aware Invoicing" |
| `en-CA.ts` | "CRA-compliant invoicing" | "Structured for Jurisdiction-Aware Invoicing" |
| `en-AU.ts` | "ATO-ready invoicing" | "Structured for Jurisdiction-Aware Invoicing" |

Also update `subheadline` across all locales to the compliance-forward version:
- "Create country-aware invoices, track revenue, and stay compliant across borders."

Update `cta` to "Start Compliant Invoicing" and `secondaryCta` to "See How It Adapts" across all locales.

The `compliance.authority` field remains (used elsewhere for SEO) but the hero badge no longer references it.

### 2. Update HeroSection.tsx

- Change the floating compliance card text from `{compliance.authority}-Compliant` to `"Jurisdiction-Aware"` (removes government authority reference from the visual)
- Change secondary CTA icon from `Play` to `Globe` and anchor from `#products` to `#compliance`

### 3. Create GlobalComplianceSection.tsx (New File)

`src/components/home/GlobalComplianceSection.tsx`

Structure:
- `<section id="compliance">` -- ensures hero anchor works
- Eyebrow label at top: "WHY GENERIC INVOICING FAILS" (uppercase, small, muted)
- Below eyebrow: "Most invoicing tools are generic. Compliance isn't."
- Main heading: "Built for Multi-Country Compliance"
- Two-column layout:
  - **Left**: Six bullet points with teal check icons (30+ jurisdictions, country-aware tax labels, tax schema versioning, immutable audit trail, snapshot-based invoice integrity, retention locking and verification IDs)
  - Tagline: "Your invoices adapt to your country -- automatically. No generic templates. No guessing tax fields."
  - **Right**: Interactive card with country selector cycling through 4 countries (UK, Canada, UAE, Australia), showing tax label (VAT/GST/IVA), currency badge, and compliance badge updating on selection
- Microcopy footer (two lines, small text):
  - "Tax enforcement varies by jurisdiction. Invoicemonk adapts labels and structure based on your selected country."
  - "Field labels and structure adapt automatically. Tax rate configuration remains user-controlled."
- Background: `bg-background` (white)

### 4. Create EcommercePositioningSection.tsx (New File)

`src/components/home/EcommercePositioningSection.tsx`

- Background: `bg-primary-soft`
- Heading: "Built for E-Commerce and Digital Sellers"
- Subheading: "Built for founders selling across borders."
- Five bullet points with teal check icons:
  - Multi-currency accounts (no FX distortion)
  - Clean PDF invoices for global customers
  - Payment method snapshotting
  - Revenue tracking by client and period
  - Audit logs for platform payouts
- Tagline: "Perfect for Shopify, WooCommerce, and global sellers."

### 5. Create ComplianceTrustSection.tsx (New File)

`src/components/home/ComplianceTrustSection.tsx`

- Background: `bg-background` (white)
- Heading: "Compliance You Can Prove."
- Five trust indicator cards in responsive grid:
  - Immutable invoice records
  - Snapshot-based PDF generation
  - Versioned tax schemas
  - Audit trail access (Pro plan)
  - Public verification links
- Each card: white bg, subtle border, thin-line Lucide icon, label, short description, hover shadow

### 6. Update Index.tsx -- Add New Sections

New homepage flow:
```
Hero
-> GlobalComplianceSection (NEW)
-> EcommercePositioningSection (NEW)
-> WaveProductTabs
-> WaveFeatureBenefits
-> ComplianceTrustSection (NEW)
-> WaveTestimonials
-> WavePersonaSection
-> HomeBlogSection
-> FAQSection
-> WaveCTASection
```

### 7. Update WaveCTASection.tsx

- Change CTA button text from "Start Free Today" to "Start Compliant Invoicing"
- Change subtitle from current text to: "Join businesses worldwide building compliant, country-aware financial records."

---

## Files Summary

| File | Action |
|------|--------|
| `src/locales/en-US.ts` | Update badge, subheadline, cta, secondaryCta |
| `src/locales/en-NG.ts` | Update badge, subheadline, cta, secondaryCta |
| `src/locales/en-GB.ts` | Update badge, subheadline, cta, secondaryCta |
| `src/locales/en-CA.ts` | Update badge, subheadline, cta, secondaryCta |
| `src/locales/en-AU.ts` | Update badge, subheadline, cta, secondaryCta |
| `src/components/home/HeroSection.tsx` | Remove authority ref from floating card, update secondary CTA icon/anchor |
| `src/components/home/GlobalComplianceSection.tsx` | New file |
| `src/components/home/EcommercePositioningSection.tsx` | New file |
| `src/components/home/ComplianceTrustSection.tsx` | New file |
| `src/pages/Index.tsx` | Import and add 3 new sections |
| `src/components/home/WaveCTASection.tsx` | Update CTA text and subtitle |

No new dependencies. Uses existing design tokens, Lucide icons, framer-motion, and AnimatedSection.

