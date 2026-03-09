

## Fix: 404 for `/es/blog/international-payment-fees-guide`

### Root Cause
The URL `/es/blog/international-payment-fees-guide` results in a 404 because:
1. The actual blog post slug is `international-payment-fees-explained` (not `international-payment-fees-guide`)
2. There's no redirect in place for this legacy/mistyped slug

The Spanish translation exists in `blogPostsCluster3.es.ts` with slug `international-payment-fees-explained`.

---

### Fix: Add Vercel 301 Redirect

Add a redirect in `vercel.json` that preserves the language prefix:

```json
{
  "source": "/:lang/blog/international-payment-fees-guide",
  "destination": "/:lang/blog/international-payment-fees-explained",
  "permanent": true
}
```

This handles all languages (`/es/`, `/en/`, `/de/`, etc.) with a single rule.

---

### Bulk Legacy Slugs Audit

I'll scan the codebase for other potential slug mismatches. Common patterns to check:
- Similar internal links referencing non-existent slugs
- Any hardcoded blog links that don't match actual slugs

**Immediate findings from search:**
- `contentIntents.ts` references `understanding-international-payment-fees` in nextSteps — this slug doesn't exist either

**Proposed additions to vercel.json:**
```json
{
  "source": "/:lang/blog/understanding-international-payment-fees",
  "destination": "/:lang/blog/international-payment-fees-explained",
  "permanent": true
}
```

---

### Implementation Steps

1. **vercel.json** — Add two legacy blog slug redirects:
   - `international-payment-fees-guide` → `international-payment-fees-explained`
   - `understanding-international-payment-fees` → `international-payment-fees-explained`

2. **contentIntents.ts** — Fix the internal reference to use the correct slug

---

### Technical Details

| File | Change |
|------|--------|
| `vercel.json` | Add 2 redirect rules with `:lang` wildcard |
| `src/data/contentIntents.ts` | Update `nextSteps` array to use correct slug |

