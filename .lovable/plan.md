

# Fix Undersized Titles on Guides, Blog, and About Pages

## Problem

The h1 titles on the **About**, **Blog**, **Guides Index**, and several other pages use Tailwind classes `text-display-sm lg:text-display-md` -- but these classes **do not exist** in the Tailwind config. The config only defines:

- `text-display` (4rem)
- `text-h1` / `text-heading-xl` (3rem)
- `text-heading-lg` (2.25rem)

Since `text-display-sm` and `text-display-md` are undefined, the titles fall back to the browser default (~1rem), making them appear small compared to feature pages like Invoicing (which uses `text-display` at 4rem) or Freelancers (which uses `text-4xl sm:text-5xl lg:text-6xl`).

## Solution

**Option A (recommended):** Add `display-sm` and `display-md` to the Tailwind fontSize config to match the intended responsive scale:
- `display-sm`: 2.25rem (matches `heading-lg` -- good mobile size)
- `display-md`: 3rem (matches `h1` / `heading-xl` -- good desktop size)

This preserves the existing responsive pattern (`text-display-sm lg:text-display-md`) across all 11 files that use it and avoids touching every page.

**Affected pages** (all use `text-display-sm lg:text-display-md`):
- `About.tsx`
- `Blog.tsx`
- `BlogPost.tsx`
- `BlogTopic.tsx`
- `GuidesIndex.tsx`
- `Glossary.tsx`
- `Contact.tsx`
- `Explore.tsx`
- `ApiDocs.tsx`
- `LegalPage.tsx`
- `GuideHero.tsx`

## Changes

**Single file edit -- `tailwind.config.ts`**, add two entries to the `fontSize` section:

```
'display-sm': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
'display-md': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
```

This is a 2-line config change that fixes all 11 pages at once.

