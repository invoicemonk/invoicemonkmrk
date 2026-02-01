

# Plan: Remove Internal Pillar and Priority Tags from Public-Facing Pages

## Problem

Per your previous agreement, "pillar" and "priority" metadata were intended for internal organizational use only and should be hidden from public-facing article pages and cards. However, these tags are still visible because the removal was never implemented.

## What's Currently Showing (as seen in your screenshots)

| Element | Where | Example |
|---------|-------|---------|
| Pillar badge with topic name | Article cards, Blog page | "Invoicing Mastery" |
| "• Pillar" suffix | Pillar articles | "Invoicing Mastery • Pillar" |
| "Complete Guide" badge | Pillar articles | Red "Complete Guide" badge |
| "Pillar Guide" badge | Featured cards | "Pillar Guide" badge |
| Priority badge | Article pages | "Priority: P1", "Priority: P2" |
| Colored top bar | Article cards | Red/orange indicator strip |

---

## Changes Required

### 1. BlogPost.tsx - Article Page

Remove from the badges section:
- **PillarBadge component** - Replace with simple category badge
- **"Complete Guide" badge** - Remove entirely
- **"Priority: {post.priority}" badge** - Remove entirely
- **Colored pillar indicator bar on hero image** - Remove

Keep:
- Simple category badge (e.g., "Invoicing", "Freelancing")
- Date, read time, author info

### 2. BlogPostCard.tsx - Article Cards

Remove:
- **PillarBadge component usage** - Replace with category badge
- **"Pillar Guide" badge** on featured cards
- **Colored top indicator bar** on cards

Keep:
- Simple category badge
- All other card content (title, excerpt, author, date)

### 3. Remove showPillar Prop Usage

Update these files to stop passing `showPillar`:
- `Blog.tsx` (4 instances)
- `BlogPost.tsx` (related posts section)
- `WaveBlogPreview.tsx`
- `HomeBlogSection.tsx`

### 4. Clean Up Unused Components (Optional)

The `PillarBadge` component can be removed if no longer needed, or kept for internal admin use.

---

## File Changes Summary

| File | Changes |
|------|---------|
| `src/pages/BlogPost.tsx` | Remove pillar badge, priority badge, complete guide badge, colored bar |
| `src/components/blog/BlogPostCard.tsx` | Remove pillar badge, pillar guide badge, colored bar, simplify to category-only |
| `src/pages/Blog.tsx` | Remove `showPillar` prop from BlogPostCard calls |
| `src/components/home/WaveBlogPreview.tsx` | Remove `showPillar` prop |
| `src/components/home/HomeBlogSection.tsx` | Remove `showPillar` prop |

---

## Before vs After

### Article Page Badges

**Before:**
```text
[Invoicing Mastery • Pillar] [Complete Guide] [Priority: P1]
```

**After:**
```text
[Invoicing]
```

### Article Card Badges

**Before:**
```text
[Invoicing Mastery] with colored indicator bar
```

**After:**
```text
[Invoicing]
```

---

## Technical Details

### BlogPost.tsx Changes

Lines 188-206 will change from:
```jsx
<div className="flex flex-wrap justify-center gap-2 mb-4">
  {pillar ? (
    <PillarBadge pillar={pillar} clusterType={clusterType} size="md" />
  ) : (
    <Badge variant="secondary">
      {post.category}
    </Badge>
  )}
  {post.pillarContent && (
    <Badge className="bg-primary text-primary-foreground">
      Complete Guide
    </Badge>
  )}
  {post.priority && (
    <Badge variant="outline" className="text-xs">
      Priority: {post.priority}
    </Badge>
  )}
</div>
```

To:
```jsx
<div className="flex flex-wrap justify-center gap-2 mb-4">
  <Badge variant="secondary">
    {post.category}
  </Badge>
</div>
```

### BlogPostCard.tsx Changes

The conditional pillar badge logic will be replaced with simple category badges only.

---

## What Will Still Work

- Topic-based navigation on the Blog page (pillar cards)
- Related posts from same topic cluster
- Cluster navigation sidebar (internal linking)
- Breadcrumb showing topic path
- SEO schema with topic information (not visible to users)

The pillar/cluster system continues to work for internal organization and SEO - it just won't be visible to readers on public-facing pages.

