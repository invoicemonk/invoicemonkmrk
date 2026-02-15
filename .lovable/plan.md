

# Rebrand Invoicemonk: Red to Clarity Teal

## Overview
Replace all red branding with a teal-based "financial clarity" design system across the entire marketing website. The new palette centers on **Clarity Teal (#0F766E)** with slate headings, generous spacing, and a calm, trust-forward aesthetic.

---

## Phase 1: Design Token System

### `src/index.css` -- Full CSS variable overhaul

Replace all red-based HSL values with the new teal palette:

| Token | Old (Red) | New (Teal) |
|-------|-----------|------------|
| `--primary` | `0 100% 42%` | `170 82% 26%` (#0F766E) |
| `--primary-foreground` | `0 0% 100%` | `0 0% 100%` (no change) |
| `--accent-orange` | `0 100% 42%` | `170 82% 26%` (same as primary -- unified) |
| `--accent-orange-foreground` | `0 0% 100%` | `0 0% 100%` |
| `--ring` | `0 100% 42%` | `170 82% 26%` |
| `--heading` | `0 0% 0%` | `222 47% 11%` (#0F172A) |
| `--body` | `0 0% 25%` | `215 16% 47%` (#64748B) |
| `--caption` | `0 0% 45%` | `215 20% 65%` (#94A3B8) |
| `--border` | `0 0% 90%` | `214 32% 91%` (#E2E8F0) |
| `--input` | `0 0% 90%` | `214 32% 91%` |
| `--muted` | `0 0% 96%` | `210 40% 98%` (#F8FAFC) |
| `--muted-foreground` | `0 0% 45%` | `215 16% 47%` |
| `--secondary` | `0 0% 96%` | `210 40% 96%` (#F1F5F9) |
| `--wave-blue` | `0 100% 42%` | `170 82% 26%` |
| `--wave-blue-light` | `0 10% 97%` | `166 76% 97%` (#F0FDFA) |
| `--wave-orange` | `0 100% 42%` | `170 82% 26%` |
| `--wave-cream` | `0 0% 100%` | `0 0% 100%` |
| `--hero-gradient-start` | `0 0% 100%` | `0 0% 100%` |
| `--hero-gradient-end` | `0 0% 98%` | `166 76% 97%` (#F0FDFA) |
| All sidebar tokens | red-based | teal-based equivalents |

Also update the dark mode section with darker teal variants (`170 82% 35%` for primary).

Add a new custom property for the soft teal background:
```
--primary-soft: 166 76% 97%;
```

### `tailwind.config.ts`

Add `"primary-soft"` color mapping referencing the new CSS variable so sections can use `bg-primary-soft` for the alternating teal-tint backgrounds.

---

## Phase 2: Logo Update

### Note on logo
The current logo is a PNG (`src/assets/invoicemonk-logo.png`). Since we cannot generate a new teal logo image, the plan is:
- The logo PNG file will need to be replaced manually by the user with a teal version
- As an interim step, we can apply a CSS filter to shift the hue from red to teal on the logo `<img>` tags in Navbar and Footer

---

## Phase 3: Homepage Sections

### `src/components/home/HeroSection.tsx`
- Remove the large blur orbs (`bg-primary/5` and `bg-wave-orange/5`) -- replace with a single very subtle `bg-primary-soft` gradient for calm spaciousness
- Stars in the Google rating badge: change `fill-wave-orange` / `text-wave-orange` to `fill-amber-400` / `text-amber-400` (gold stars are universal, not brand-colored)
- Remove the serif italic accent on the headline accent word -- use `text-primary font-semibold` instead (calmer, less decorative)
- The CTA button already uses `bg-accent-orange` which will become teal via token change
- Floating cards already use `bg-primary/10` which will auto-update

### `src/components/home/WaveProductTabs.tsx`
- The floating "Free to start!" badge: change from `bg-accent-orange` to `bg-primary` (auto-updates via tokens)
- Active tab styling already uses `bg-primary` -- will auto-update
- No other changes needed; check marks and icons use `text-primary` which auto-updates

### `src/components/home/WaveFeatureBenefits.tsx`
- Decorative corner elements: `bg-accent-orange/10` becomes `bg-primary/10` (replace class name)
- Serif italic accents in heading: keep but now renders in teal (auto-update)

### `src/components/home/WaveTestimonials.tsx`
- Section background: change from `bg-card` to `bg-primary-soft` (soft teal tint -- section alternation pattern)
- Highlighted quote text uses `text-primary` -- auto-updates to teal
- No other changes needed

### `src/components/home/WavePersonaSection.tsx`
- Full-width `bg-primary` section -- will auto-update to teal
- All colors within are `primary-foreground` based -- will work automatically

### `src/components/home/FAQSection.tsx`
- Section background `bg-muted/30` -- will be fine with new muted value
- Serif italic "Questions" in `text-primary` -- auto-updates

### `src/components/home/HomeBlogSection.tsx`
- Serif italic "Blog" in `text-primary` -- auto-updates
- No other changes needed

### `src/components/home/WaveCTASection.tsx`
- Background `bg-foreground` (dark) -- keep as is, this is the dark authority CTA
- `bg-accent-orange` CTA button -- auto-updates to teal via tokens
- Check icons `text-primary` -- auto-updates

---

## Phase 4: Pricing Page

### `src/pages/Pricing.tsx`
- Hero gradient: change `bg-gradient-to-b from-background to-accent/30` to `from-background to-primary-soft`
- Annual savings text: currently `text-wave-orange` -- change to `text-primary font-semibold`
- Popular plan badge: `bg-accent-orange` -- auto-updates to teal
- Popular plan CTA: `bg-accent-orange` -- auto-updates
- Recommended plan card: add `bg-primary-soft` background tint for the popular plan
- Bottom CTA section: `bg-primary` -- auto-updates to teal
- FAQ section heading serif italic `text-primary` -- auto-updates

### `src/components/pricing/FeatureComparisonTable.tsx`
- Heading serif italic `text-primary` -- auto-updates
- No other changes needed

---

## Phase 5: Footer Redesign

### `src/components/layout/Footer.tsx`
- Change background from `bg-card border-t border-border` to `bg-[#0F172A]` (dark authority layer -- using the heading color)
- All text: white/white-muted variants
- Link hover: `hover:text-primary` stays (will be teal now)
- Social icons: `text-white/60 hover:text-primary`
- Bottom bar: `border-white/10` instead of `border-border`
- Badge colors for "Available": keep `bg-green-100 text-green-700` (green is fine)
- "Soon" badges: `bg-white/10 text-white/60`

---

## Phase 6: Shared Components

### `src/components/shared/PageHero.tsx`
- All `text-primary` and `bg-primary` references auto-update via tokens
- No code changes needed

### `src/components/ui/button.tsx`
- Default variant uses `bg-primary` -- auto-updates
- No changes needed

### `src/components/home/WhyInvoicemonkSection.tsx` (referenced in context)
- Icon backgrounds `bg-primary/10`, icon colors `text-primary` -- all auto-update
- Hover border `hover:border-primary/20` -- auto-updates

### `src/components/home/CTASection.tsx`
- `bg-gradient-to-br from-primary to-primary/80` -- auto-updates to teal gradient
- White CTA `text-primary` -- auto-updates

---

## Phase 7: Product / Feature Pages

All product pages (Invoicing, Expenses, Payments, Accounting, Estimates, Receipts, Client Management, Compliance, Contractors, Consultants, Freelancers, Small Businesses) use `bg-primary`, `text-primary`, `bg-primary/10` patterns -- these all auto-update through the CSS variable change. 

Specific fixes needed:
- Any page with `bg-primary` full-section CTA blocks (Contractors, etc.) -- auto-updates
- Contact page icon backgrounds `bg-primary/10` -- auto-updates

---

## Phase 8: Section Background Alternation

Apply the alternating white / soft-teal pattern to homepage sections:

| Section | Current BG | New BG |
|---------|-----------|--------|
| Hero | gradient | `from-background to-primary-soft` |
| Products (WaveProductTabs) | `bg-background` | `bg-background` (white) |
| Benefits (WaveFeatureBenefits) | `bg-background` | `bg-primary-soft` |
| Testimonials | `bg-card` | `bg-background` (white) |
| Personas | `bg-primary` | `bg-primary` (teal -- keep) |
| Blog | `bg-background` | `bg-primary-soft` |
| FAQ | `bg-muted/30` | `bg-background` (white) |
| CTA | `bg-foreground` | `bg-foreground` (dark -- keep) |

---

## Files Modified Summary

| File | Changes |
|------|---------|
| `src/index.css` | Complete CSS variable palette swap (red to teal) |
| `tailwind.config.ts` | Add `primary-soft` color token |
| `src/components/layout/Footer.tsx` | Dark authority background, white text |
| `src/components/layout/Navbar.tsx` | Add CSS filter on logo for interim teal tint |
| `src/components/home/HeroSection.tsx` | Calmer background, gold stars, remove loud orbs |
| `src/components/home/WaveFeatureBenefits.tsx` | Fix decorative element class, apply `bg-primary-soft` |
| `src/components/home/WaveTestimonials.tsx` | Apply `bg-primary-soft` background |
| `src/components/home/HomeBlogSection.tsx` | Apply `bg-primary-soft` background |
| `src/components/home/FAQSection.tsx` | Change to `bg-background` |
| `src/pages/Pricing.tsx` | Soft teal hero gradient, recommended plan tint, annual text color |

No new dependencies. All changes use existing Tailwind utilities and CSS custom properties.

---

## What Auto-Updates (No Code Changes Needed)

Because the rebrand is token-driven, these update automatically:
- All `text-primary`, `bg-primary`, `bg-primary/10`, `border-primary` throughout 30+ files
- All `accent-orange` references (mapped to same teal tokens)
- All `wave-blue`, `wave-orange` references
- Button component default styles
- PageHero component
- Blog components
- All product pages
- Compliance page
- Why Invoicemonk page
- About page

