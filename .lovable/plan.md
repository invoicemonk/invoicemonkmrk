
# Plan: Align Accounting, Estimates, and Client Management Pages with Design System

## Overview
The Accounting, Estimates, and Client Management pages are using an older, simpler design pattern while the other product pages (Expenses, Invoicing, Payments, Receipts) follow a more sophisticated "Wave" design system. This plan aligns all pages to match the established design language.

---

## Design Inconsistencies Identified

### Current "Wave" Design Pattern (Expenses, Invoicing, Payments, Receipts)

| Element | Pattern |
|---------|---------|
| Hero Layout | Split 2-column grid with content left, product mockup right |
| Badge Style | Colored background with icon (`bg-wave-orange/10 text-wave-orange`) |
| Product Icon | Large icon with colored background (`bg-primary/10`) |
| Headline Accent | Serif italic text in primary color |
| Button Style | Rounded-full with shadows, taller (`h-14`), orange CTA |
| Background | Decorative blur orb effect |
| Feature Banner | Uses `WaveFeatureBanner` component |
| Feature Cards | Hover animations (`whileHover={{ y: -4 }}`), colored icons |
| CTA Section | Full-width primary background with serif italic text |

### Outdated Design (Accounting, Estimates)

| Element | Current Issue |
|---------|---------------|
| Hero Layout | Centered single-column, no product mockup |
| Badge Style | Plain muted colors (`bg-muted text-muted-foreground`) |
| Product Icon | Muted styling instead of branded colors |
| Headline Accent | Uses `text-muted-foreground` instead of primary |
| Button Style | Smaller buttons (`h-12`), no shadows |
| Background | No decorative elements |
| Feature Banner | Missing entirely |
| Feature Cards | No hover animations, muted icon colors |
| CTA Section | Plain background, no styling |

### Client Management Issues

| Element | Current Issue |
|---------|---------------|
| Hero Layout | No product mockup, different gradient |
| No Animations | Missing framer-motion animations |
| Card Style | Using shadcn Card instead of Wave pattern |
| Different Section Spacing | Using `py-16` instead of `py-20` |
| No Feature Banner | Missing the signature Wave banner |
| Icon Styling | Plain icon containers |

---

## Changes Required

### 1. Accounting.tsx

**Add missing elements:**
- Background blur orb decoration
- Split 2-column hero layout with product mockup
- WaveFeatureBanner component
- Styled "Coming Soon" badge with orange color
- Product icon with primary color styling
- Serif italic headline accent
- Taller buttons with shadows
- Hover animations on feature cards
- Styled CTA section with primary background

**Product Mockup Concept:**
Display a financial dashboard showing:
- Chart of accounts preview
- Balance sheet snippet
- P&L summary widget

### 2. Estimates.tsx

**Add missing elements:**
- Background blur orb decoration
- Split 2-column hero layout with product mockup
- WaveFeatureBanner component
- Styled "Coming Soon" badge with orange color
- Product icon with primary color styling
- Serif italic headline accent
- Taller buttons with shadows
- Hover animations on feature cards
- Styled CTA section with primary background

**Product Mockup Concept:**
Display an estimate card showing:
- Estimate number and client name
- Line items preview
- Approval status badge
- "Convert to Invoice" action hint

### 3. ClientManagement.tsx

**Full redesign to match Wave pattern:**
- Add framer-motion animations throughout
- Split 2-column hero with product mockup
- WaveFeatureBanner component
- Replace Card components with Wave-styled cards
- Add hover animations on feature items
- Update section spacing to match (`py-20 lg:py-32`)
- Use serif italic headline accents
- Primary-colored CTA section

**Product Mockup Concept:**
Display a client list/detail showing:
- Client profile cards
- Invoice count and total
- Payment status indicators
- Quick action buttons

---

## File Changes Summary

| File | Changes |
|------|---------|
| `src/pages/Accounting.tsx` | Major rewrite - add Wave design elements |
| `src/pages/Estimates.tsx` | Major rewrite - add Wave design elements |
| `src/pages/features/ClientManagement.tsx` | Major rewrite - add Wave design elements |

---

## Technical Implementation Details

### Shared Pattern for Hero Section

```text
<section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
  <!-- Background blur orb -->
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
  </div>
  
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left: Content -->
      <!-- Right: Product Mockup (hidden on mobile) -->
    </div>
  </div>
</section>
```

### Badge Styling Update

```text
Before:  bg-muted text-muted-foreground
After:   bg-wave-orange/10 text-wave-orange
```

### Icon Container Update

```text
Before:  bg-muted ... text-muted-foreground
After:   bg-primary/10 ... text-primary
```

### Headline Accent Update

```text
Before:  <span className="text-muted-foreground">Made Simple</span>
After:   <span className="font-serif italic text-primary">made simple</span>
```

### Button Updates

```text
Before:  h-12 text-body
After:   h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group
```

### Feature Card Hover Animation

```text
Before:  className="bg-background rounded-2xl p-6 border border-border text-center"
After:   
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-background rounded-2xl p-6 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all text-center"
  >
```

### CTA Section Update

```text
Before:  py-20 bg-background
After:   py-20 lg:py-32 bg-primary text-primary-foreground
```

---

## Banner Features to Add

**Accounting:**
- Double-entry bookkeeping
- Financial statements
- Tax-ready reports
- Multi-entity support

**Estimates:**
- Professional quotes
- One-click approval
- Convert to invoice
- Expiration tracking

**Client Management:**
- Unlimited clients
- Complete history
- Quick search
- Payment tracking

---

## Expected Visual Result

After implementation, all three pages will have:
- Consistent gradient backgrounds with decorative blur
- Split-column hero with interactive product mockups
- Branded "Coming Soon" / status badges
- Animated feature banners
- Hover effects on all interactive elements
- Full-width colored CTA sections
- Serif italic headline accents
- Consistent spacing and typography
