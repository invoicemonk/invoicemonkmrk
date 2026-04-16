

# E-Invoicing Compliance Content Strategy: 14-Country Article Generation

## What We're Building

80+ new blog articles covering e-invoicing compliance for 14 countries, generated via AI with strict fact-checking constraints, then stored as TypeScript data files following the existing `blogPosts` pattern.

The spreadsheet defines:
- **P1 (5 countries):** France (7), Belgium (7), Italy (6), Brazil (8), Spain (7) = **35 articles**
- **P2 (5 countries):** Poland (6), Mexico (7), Colombia (6), Romania (5), Hungary (5) = **29 articles**
- **P3 (4 countries):** Serbia (5), Bulgaria (5), Chile (5), Albania (4) = **19 articles**

**Total: ~83 articles** (14 pillar guides + ~69 cluster articles)

---

## LLM-Optimized Writing Rules (Applied to Every Article)

Based on your confirmed writing framework:

1. **First 40-60 words** must directly answer the searcher's question with specific data: mandate dates, system names, penalty amounts, thresholds, authority names
2. **Question-based H2/H3 subheadings** throughout (e.g., "What is France's PPF/PDP e-invoicing system?", "When does Belgium's PEPPOL mandate take effect?")
3. **Original data points** in every article: official government mandate dates, penalty amounts, registration URLs, tax rates, system acronyms
4. **Markdown structure** with proper heading hierarchy, bullet lists, and tables
5. **Update frequency signal**: every article gets `dateModified` and `lastAudited` fields
6. **Zero hallucination protocol**: each article's prompt will include verified government data from the spreadsheet + web-researched facts, not freeform generation

---

## Execution Architecture

### Phase 1: Data Preparation

Create a structured JSON reference file for each of the 14 countries containing verified data points:
- Country name, code, e-invoice system name (PPF, SDI, KSeF, CFDI, etc.)
- Mandate status and effective dates
- Tax authority name and URL
- Penalty structures
- Tax rates and thresholds
- Registration process URLs

This file will be the single source of truth that AI prompts reference — preventing hallucination.

### Phase 2: AI-Powered Article Generation (via `lovable_ai.py`)

For each country, generate 1 pillar + 4-7 cluster articles using the AI gateway script with:
- A strict system prompt enforcing the LLM writing rules
- Country-specific data injected from the reference file
- Markdown output converted to HTML for the `content` field

Each article will be generated individually to maintain quality, with a batch script orchestrating the process.

### Phase 3: TypeScript Data File Creation

Articles stored as new cluster files following existing conventions:
- `src/data/blogPostsCluster17.ts` — P1 countries (France, Belgium, Italy, Brazil, Spain)
- `src/data/blogPostsCluster18.ts` — P2 countries (Poland, Mexico, Colombia, Romania, Hungary)  
- `src/data/blogPostsCluster19.ts` — P3 countries (Serbia, Bulgaria, Chile, Albania)

Each file registers posts into the global `blogPosts` array using the same pattern as clusters 9-16.

### Phase 4: Country Config Extension

Extend `countryCompliancePosts.ts` with new `CountryConfig` entries for all 14 countries (FR, BE, IT, BR, ES, PL, MX, CO, RO, HU, RS, BG, CL, AL) — system names, tax rates, penalties, authority URLs.

### Phase 5: Sitemap & SEO Integration

- Add new article slugs to the sitemap generator's English-only paths (these are country-specific compliance content)
- Ensure `topicalMap.ts` gets a new "Global E-Invoicing Compliance" pillar definition
- Wire hreflang correctly (English-only for country-specific content per the recent consolidation fix)

---

## Article Structure Template

Each pillar article follows this structure:

```text
Opening paragraph (40-60 words): Direct answer + 3 data points
├── H2: What Is [Country]'s [System Name] E-Invoicing System?
├── H2: Who Must Comply With [System] in 2026?
│   └── Table: business types, thresholds, dates
├── H2: What Are the Key Deadlines for [Country] E-Invoicing?
│   └── Timeline with specific dates
├── H2: How Does [System] Work? (Technical Requirements)
├── H2: What Are the Penalties for Non-Compliance?
│   └── Specific amounts and escalation
├── H2: How to Set Up [System] E-Invoicing (Step-by-Step)
├── H2: Which Software Supports [Country] E-Invoicing?
│   └── Invoicemonk product tie-in
├── H2: Frequently Asked Questions
│   └── 5-7 Q&A pairs with structured data
└── Internal links to cluster articles + product pages
```

Cluster articles follow similar patterns but narrower in scope (e.g., "France PPF vs PDP: Which Platform Do You Need?", "CFDI 4.0 XML Requirements Explained").

---

## Execution Order

Given the volume (~83 articles), I will batch by priority tier:

1. **Batch 1 — P1 pillar articles only** (5 articles: FR, BE, IT, BR, ES) — highest impact, fastest to validate
2. **Batch 2 — P1 cluster articles** (30 articles across 5 countries)
3. **Batch 3 — P2 pillar + clusters** (29 articles)
4. **Batch 4 — P3 pillar + clusters** (19 articles)

Each batch: generate via AI → validate data points → write to TS file → register in blog system → update sitemap.

---

## Files to Create/Modify

| File | Action |
|------|--------|
| `/tmp/einvoicing-country-data.json` | Create — verified reference data for all 14 countries |
| `/tmp/article-generator.py` | Create — batch generation script using `lovable_ai.py` |
| `src/data/blogPostsCluster17.ts` | Create — P1 country articles (FR, BE, IT, BR, ES) |
| `src/data/blogPostsCluster18.ts` | Create — P2 country articles (PL, MX, CO, RO, HU) |
| `src/data/blogPostsCluster19.ts` | Create — P3 country articles (RS, BG, CL, AL) |
| `src/data/countryCompliancePosts.ts` | Modify — add 14 new CountryConfig entries |
| `src/data/topicalMap.ts` | Modify — add e-invoicing compliance pillar |
| `scripts/generate-sitemap.ts` | Modify — include new slugs in English-only paths |

---

## Quality Assurance

- Every generated article will be reviewed for: correct system names, accurate mandate dates, real penalty amounts, working authority URLs
- Articles referencing specific legislation will cite the law/regulation name
- No speculative claims — if data is uncertain, articles will note "as of [date]" with a recommendation to check official sources

