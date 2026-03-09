

## SEO Gap Analysis: Koray's Semantic SEO Framework

### What's Implemented Well ✅

| Principle | Implementation |
|-----------|----------------|
| **Topical Authority** | 8 pillars with cluster relationships, `isPartOf` schema linking clusters to hubs |
| **Entity Optimization** | `entityMentions` with Wikipedia `sameAs` on 174+ articles |
| **E-E-A-T Signals** | Author profiles with `knowsAbout`, credentials, social proof |
| **Content Intent** | Query classification system (informational, commercial, transactional) |
| **Semantic Keywords** | Per-article `semanticKeywords` arrays for contextual vectors |
| **Structured Data** | 14 schema components (Article, FAQ, Person, Organization, HowTo, etc.) |
| **Internal Linking** | Auto-linking via `enhanceInternalLinks()` + glossary term injection |
| **Glossary/Entities** | DefinedTermSet schema with 40+ business finance terms |
| **Freshness** | `dateModified` on all articles, sitemap lastmod |
| **Speakable** | SpeakableSpecification on cluster content |
| **llms.txt** | AI/LLM context file for semantic understanding |

---

### Gaps to Address 🔴

#### 1. **Missing `hasPart` on Pillar Pages** (HIGH)
Koray emphasizes bidirectional relationships. Cluster articles link UP via `isPartOf`, but pillar hub pages don't link DOWN via `hasPart`.

**Fix:** Add `hasPart` array to WebPage schema on `/guides/*` pages listing all cluster articles.

---

#### 2. **No Wikipedia `sameAs` on Glossary Terms** (HIGH)
Glossary terms have definitions but lack entity disambiguation via Wikipedia links.

**Fix:** Add `sameAs: 'https://en.wikipedia.org/wiki/...'` to each glossary term for entity clarity.

---

#### 3. **Missing QAPage Schema on Help Articles** (MEDIUM)
Help articles are Q&A-style but only use generic Article schema. Google supports QAPage for FAQ-style help content.

**Fix:** Create `QAPageSchema` component for `/help/*` pages.

---

#### 4. **No VideoObject Schema** (MEDIUM)
If pages embed YouTube or product videos, they lack VideoObject markup for video rich results.

**Fix:** Create `VideoSchema` component; apply to pages with embedded videos.

---

#### 5. **Missing LearningResource Schema on Guides** (MEDIUM)
`/guides/*` pages are educational content but don't signal this semantically.

**Fix:** Add LearningResource schema with `educationalLevel`, `teaches`, and `timeRequired`.

---

#### 6. **No ProAndCon Schema on Comparison Pages** (MEDIUM)
`/compare/*` pages are commercial-intent comparisons but lack structured pros/cons.

**Fix:** Add `Review` schema with `positiveNotes` and `negativeNotes` arrays.

---

#### 7. **Core Web Vitals: LCP Optimization** (MEDIUM)
No `fetchpriority="high"` on hero images, no `<link rel="preload">` for critical assets.

**Fix:** Add `fetchpriority` to above-fold images, preload hero images.

---

#### 8. **Missing SearchAction on Blog/Explore Pages** (LOW)
Blog has search but no SearchAction schema beyond homepage.

**Fix:** Add SearchAction to `/blog` page schema.

---

#### 9. **No ImageObject with Structured Properties** (LOW)
Featured images lack rich ImageObject schema (caption, author, license).

**Fix:** Enhance article images with full ImageObject markup.

---

#### 10. **Aggregated Review Schema Disabled** (LOW)
`SoftwareApplicationSchema` has `hasVerifiedReviews: false`. Once real reviews exist, enable with actual data.

**Fix:** Collect verified reviews → enable `aggregateRating`.

---

### Priority Implementation Order

```text
┌─────────────────────────────────────────────┐
│ PHASE 1 - Schema Completeness (Week 1)      │
├─────────────────────────────────────────────┤
│ 1. hasPart on pillar WebPage schema         │
│ 2. Wikipedia sameAs on glossary terms       │
│ 3. QAPage schema for help articles          │
└─────────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ PHASE 2 - Rich Results (Week 2)             │
├─────────────────────────────────────────────┤
│ 4. LearningResource on /guides/*            │
│ 5. ProAndCon on /compare/*                  │
│ 6. VideoObject (if videos added)            │
└─────────────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ PHASE 3 - Performance (Week 3)              │
├─────────────────────────────────────────────┤
│ 7. fetchpriority + preload for LCP          │
│ 8. ImageObject enhancement                  │
│ 9. SearchAction on /blog                    │
└─────────────────────────────────────────────┘
```

---

### Files to Create/Modify

| File | Change |
|------|--------|
| `src/components/seo/WebPageSchema.tsx` | NEW — hasPart support for pillar hubs |
| `src/data/glossaryTerms.ts` | Add `sameAs` Wikipedia URLs |
| `src/components/seo/QAPageSchema.tsx` | NEW — for help articles |
| `src/components/seo/LearningResourceSchema.tsx` | NEW — for guides |
| `src/components/seo/VideoSchema.tsx` | NEW — for video embeds |
| `src/pages/BlogTopic.tsx` | Add WebPageSchema with hasPart |
| `src/pages/GuidePage.tsx` | Add LearningResourceSchema |
| `src/pages/ComparePage.tsx` | Add Review with pros/cons |

