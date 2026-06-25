## Goal
Scale down oversized headings on mobile without touching every page that uses them.

## Problem
- `text-display` = 4rem (64px), `text-display-md` = 3rem (48px), `text-display-sm` = 2.25rem (36px) are defined as fixed sizes in `tailwind.config.ts`. None scale down on narrow viewports.
- Hero H1 (`text-display`) and section headings sitewide (`text-display-md` / `text-display-sm`) are used in 20+ pages, so per-page responsive overrides would be sprawling and easy to miss.

## Approach
Make the three display tokens fluid using `clamp()` so they shrink on mobile and grow back on desktop — one edit, fixes every consumer.

### Change
**`tailwind.config.ts`** (fontSize block, lines ~81–83):

```ts
'display':     ['clamp(2.25rem, 6vw + 1rem, 4rem)',    { lineHeight: '1.1',  letterSpacing: '-0.02em', fontWeight: '700' }],
'display-md':  ['clamp(1.875rem, 4.5vw + 0.75rem, 3rem)', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
'display-sm':  ['clamp(1.625rem, 3vw + 0.75rem, 2.25rem)', { lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '700' }],
```

Resulting sizes:
- `text-display`: ~36px at 360px viewport → 64px at ≥1280px (hero H1)
- `text-display-md`: ~30px mobile → 48px desktop (page H1s on most sub-pages)
- `text-display-sm`: ~26px mobile → 36px desktop (section H2s)

## Out of scope
- No changes to body text, badges, sub-headlines, or per-page markup.
- No new breakpoint overrides — `clamp()` handles the full range.