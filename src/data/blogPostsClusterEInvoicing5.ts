import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Blog Posts Cluster — E-Invoicing (Batch 5).
 *
 * Rewritten to the Koray-grade article contract used in Batches 1–4:
 *  - Hero direct-answer <p><strong>… 60–90 words.
 *  - At-a-glance fact-box + on-this-page TOC nav.
 *  - Macro context → micro H2s with fan-out H3 questions.
 *  - Comparative blocks, compliance checklists, error catalogues.
 *  - Authority sources block (≥6 outbound .gov / .gov.uk / .go.ke / iti.gov.br links).
 *  - 5–7 FAQ powering FAQPage schema.
 *  - Related-reading bridges to pillar, sub-source, siblings, glossary.
 *  - Internal links use the /__LANG__/... token rewritten by enhanceLinks.
 *
 * Cluster:
 *  - MTD UK: HowTo + Explainer + Common Errors (3)
 *  - KRA eTIMS Kenya: HowTo + Explainer (2)
 *  - Supporting outer entity: ICP-Brasil A1 certificates (1)
 */
export const eInvoicingClusterPostsBatch5: BlogPost[] = [
  // ============================================================
  // MTD UK — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-mtd-uk',
    title: 'How to Comply with MTD for VAT in the UK: Sign Up, Connect to HMRC, and File Your First Digital Return (2026)',
    excerpt: 'Step-by-step playbook for Making Tax Digital (MTD) for VAT — HMRC sign-up, OAuth to MTD-compatible software, the nine VAT return boxes, the digital-link rule, and how MTD ITSA (April 2026, £50,000) plugs into the same architecture.',
    content: `<p><strong>To comply with MTD for VAT in the UK, a VAT-registered business must sign up its VAT registration for Making Tax Digital in the HMRC Government Gateway, connect MTD-compatible software (such as Invoicemonk) to HMRC via OAuth 2.0, keep the prescribed digital records for every sale and purchase, preserve a continuous "digital link" from source records to the nine VAT return boxes (no manual re-typing), then submit each quarterly return through the HMRC MTD VAT API and store the HMRC correlation ID as proof of filing.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> HM Revenue and Customs (HMRC).</li>
          <li><strong>Mandate:</strong> Making Tax Digital (MTD) for VAT — universal since 1 April 2022; MTD for Income Tax Self Assessment (ITSA) starts 6 April 2026.</li>
          <li><strong>Artefact:</strong> Quarterly VAT return submitted via the HMRC MTD VAT API; HMRC returns a correlation ID receipt.</li>
          <li><strong>Transport:</strong> HMRC MTD VAT API with OAuth 2.0 bearer tokens (18-month refresh).</li>
          <li><strong>Applies to:</strong> Every UK VAT-registered business regardless of turnover; the historic £85,000 threshold was retired.</li>
          <li><strong>Filing cadence:</strong> Quarterly, due one calendar month plus seven days after period end.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against the HMRC MTD VAT guidance and the Income Tax (Digital Obligations) Regulations 2026.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#prereqs">Pre-requisites</a></li>
          <li><a href="#signup">Step 1 — Sign up for MTD for VAT</a></li>
          <li><a href="#oauth">Step 2 — Authorise your software with HMRC</a></li>
          <li><a href="#records">Step 3 — Keep the prescribed digital records</a></li>
          <li><a href="#links">Step 4 — Maintain unbroken digital links</a></li>
          <li><a href="#file">Step 5 — File your first MTD VAT return</a></li>
          <li><a href="#itsa">How MTD ITSA plugs into the same architecture</a></li>
          <li><a href="#checklist">Pre-go-live compliance checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where MTD sits in the global e-invoicing landscape</h2><p class="block-answer" data-answer="true">MTD is a periodic reporting regime, not a clearance regime.</p><p>MTD is a <em>periodic reporting</em> regime, not a clearance regime. HMRC sees the aggregated return at the end of each quarter — not every invoice in real time. That puts it in the same architectural family as the EU's outbound VAT returns and (from 2030) the ViDA Digital Reporting Requirements, and a clear distance from clearance models like <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 in Saudi Arabia</a>, <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN in India</a>, or <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois in Malaysia</a>. For a deeper comparison, see <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models</a>.</p><p>What MTD adds on top of a normal VAT return is the <strong>digital-link rule</strong>: every flow from the underlying record to a figure in the return must be electronic — API, formula, file import. Manual re-typing breaks the chain and is the single biggest audit finding HMRC reports.</p><h2 id="prereqs">What you need before you start</h2><p class="block-answer" data-answer="true">A UK VAT registration number (GB VRN).  A Government Gateway account with administrator access for the VAT registration.</p><ul>
        <li>A UK VAT registration number (GB VRN).</li>
        <li>A Government Gateway account with administrator access for the VAT registration.</li>
        <li>MTD-compatible software listed in the HMRC recognised-software catalogue — Invoicemonk is HMRC-recognised for MTD for VAT.</li>
        <li>Digital records for every sale and purchase that contributes to the return.</li>
        <li>NTP-synchronised clocks on the submitting system — HMRC enforces a tight clock-drift tolerance on OAuth and API calls.</li>
      </ul><h2 id="signup">Step 1 — Sign up for MTD for VAT</h2><h3>Where do I sign up?</h3><p class="block-answer" data-answer="true">Log in to the HMRC Government Gateway and sign up the VAT registration for MTD via the "Sign up for Making Tax Digital for VAT" service.  HMRC sends a confirmation email when the registration is active — usually within 72 hours.</p><p>Log in to the HMRC Government Gateway and sign up the VAT registration for MTD via the "Sign up for Making Tax Digital for VAT" service. HMRC sends a confirmation email when the registration is active — usually within 72 hours.</p><h3>Can I file a non-MTD return for a period that is in MTD?</h3><p class="block-answer" data-answer="true">No.  Once HMRC marks a period as MTD-obligated, the legacy XML portal is closed for that period.</p><p>No. Once HMRC marks a period as MTD-obligated, the legacy XML portal is closed for that period. A duplicate submission is rejected with an "obligation already fulfilled" error. Time your sign-up so the first MTD obligation lines up with the start of a fresh quarter.</p><h2 id="oauth">Step 2 — Authorise your software with HMRC</h2><h3>How does the OAuth flow work?</h3><p class="block-answer" data-answer="true">From inside your invoicing platform, start the HMRC OAuth 2. 0 flow.</p><p>From inside your invoicing platform, start the HMRC OAuth 2.0 flow. You are redirected to HMRC, sign in with the Government Gateway credentials, grant the platform the <code>read:vat</code> and <code>write:vat</code> scopes for the relevant VRN, and are redirected back. HMRC issues an access token and a refresh token; the refresh token is valid for 18 months.</p><h3>What happens when the token expires?</h3><p class="block-answer" data-answer="true">Invoicemonk refreshes the access token automatically.  If a refresh fails (revoked permission, expired registration, gateway credentials reset), the platform raises a banner — clear it before the next obligation deadline.</p><p>Invoicemonk refreshes the access token automatically. If a refresh fails (revoked permission, expired registration, gateway credentials reset), the platform raises a banner — clear it before the next obligation deadline.</p><h2 id="records">Step 3 — Keep the prescribed digital records</h2><p class="block-answer" data-answer="true">HMRC's VAT Notice 700/22 lists the digital records you must keep: business name and address, VAT registration number, the VAT accounting scheme used, the time of supply (tax point), the value of the supply, the rate of VAT charged, and — for purchases — the total input tax.</p><p>HMRC's VAT Notice 700/22 lists the digital records you must keep: business name and address, VAT registration number, the VAT accounting scheme used, the time of supply (tax point), the value of the supply, the rate of VAT charged, and — for purchases — the total input tax. Invoicemonk stores every one of these on every invoice and expense, so the digital-record requirement is met by using the product.</p><h2 id="links">Step 4 — Maintain unbroken digital links</h2><h3>What counts as a "digital link"?</h3><p class="block-answer" data-answer="true">Any transfer that does not involve manual intervention: an API call, a formula reference, a file import/export, a linked spreadsheet cell, a CSV download/upload, or an XML pipeline.  Not permitted: re-typing a figure, copy-and-pasting a number, transcribing a PDF.</p><p>Any transfer that does not involve manual intervention: an API call, a formula reference, a file import/export, a linked spreadsheet cell, a CSV download/upload, or an XML pipeline. <em>Not</em> permitted: re-typing a figure, copy-and-pasting a number, transcribing a PDF.</p><h3>Why does this matter for audit?</h3><p class="block-answer" data-answer="true">The rule applies to every step from the underlying transaction to the nine VAT return boxes.  If HMRC inspects and finds a figure that was retyped, the digital-link rule is broken — that is the most common audit failure.</p><p>The rule applies to every step from the underlying transaction to the nine VAT return boxes. If HMRC inspects and finds a figure that was retyped, the digital-link rule is broken — that is the most common audit failure. Read <a href="/__LANG__/blog/mtd-uk-common-errors">common MTD UK errors</a> for the seven failure modes we see most.</p><h2 id="file">Step 5 — File your first MTD VAT return</h2><p class="block-answer" data-answer="true">Step 5 — File your first MTD VAT return includes: At quarter end, the platform pulls the VAT obligations from the HMRC MTD VAT API.   It calculates the nine box totals (Box 1 through Box 9) directly from the digital records — no manual override.</p><ol>
        <li>At quarter end, the platform pulls the VAT obligations from the HMRC MTD VAT API.</li>
        <li>It calculates the nine box totals (Box 1 through Box 9) directly from the digital records — no manual override.</li>
        <li>You review the boxes and submit. HMRC returns a correlation ID receipt synchronously.</li>
        <li>The receipt is stored in your audit log for the six-year statutory retention period.</li>
      </ol><p>Want the regulatory context first? Read <a href="/__LANG__/blog/mtd-uk-explained">MTD UK explained: scope, digital links, ITSA, and timeline</a>.</p><h2 id="itsa">How MTD ITSA plugs into the same architecture</h2><p class="block-answer" data-answer="true">From 6 April 2026, sole traders and landlords with combined self-employment and property income above £50,000 enter MTD for Income Tax Self Assessment.  The threshold drops to £30,000 from April 2027 and £20,000 from April 2028.</p><p>From 6 April 2026, sole traders and landlords with combined self-employment and property income above £50,000 enter MTD for Income Tax Self Assessment. The threshold drops to £30,000 from April 2027 and £20,000 from April 2028. HMRC's February 2026 press release confirmed 864,000 taxpayers in the first ITSA wave.</p><p>ITSA reuses the MTD architecture — digital records, digital links, MTD-compatible software, HMRC API — but adds quarterly updates plus an end-of-period statement and final declaration. If you already run MTD for VAT cleanly, ITSA is a configuration layer, not a re-build.</p><h2 id="checklist">Pre-go-live compliance checklist</h2><p class="block-answer" data-answer="true">Pre-go-live compliance checklist includes: ☐ VRN signed up for MTD on the Government Gateway; confirmation email received.   ☐ Invoicing platform connected to HMRC via OAuth; refresh-token expiry recorded.</p><ul>
        <li>☐ VRN signed up for MTD on the Government Gateway; confirmation email received.</li>
        <li>☐ Invoicing platform connected to HMRC via OAuth; refresh-token expiry recorded.</li>
        <li>☐ All sales and purchases captured digitally — no offline spreadsheets.</li>
        <li>☐ Every flow into the return uses a digital link; manual journals retired.</li>
        <li>☐ Tax-point logic checked: invoices are categorised by the supply date, not the issue date.</li>
        <li>☐ Calendar trigger set for each quarterly obligation (one month + seven days after quarter end).</li>
        <li>☐ Six-year retention of submitted returns and HMRC correlation IDs configured.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.gov.uk/guidance/sign-up-as-an-individual-for-making-tax-digital-for-income-tax" rel="noopener noreferrer">HMRC — Sign up for Making Tax Digital</a></li>
        <li><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" rel="noopener noreferrer">HMRC — Find out if and when you need to use MTD for Income Tax</a></li>
        <li><a href="https://www.gov.uk/government/news/act-now-864000-sole-traders-and-landlords-face-new-tax-rules-in-two-months" rel="noopener noreferrer">HMRC press release — 864,000 sole traders and landlords (Feb 2026)</a></li>
        <li><a href="https://www.legislation.gov.uk/uksi/2026/336/made" rel="noopener noreferrer">The Income Tax (Digital Obligations) Regulations 2026</a></li>
        <li><a href="https://www.gov.uk/guidance/keep-digital-records-for-making-tax-digital-for-vat" rel="noopener noreferrer">HMRC — Keep digital records for MTD for VAT (Notice 700/22)</a></li>
        <li><a href="https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/vat-api" rel="noopener noreferrer">HMRC Developer Hub — MTD VAT API reference</a></li>
      </ul><h2>TL;DR</h2><p class="block-answer" data-answer="true">Sign the VRN up in the Government Gateway, OAuth your invoicing platform to HMRC, keep every sale and purchase as a digital record, never retype a figure into the return, file quarterly via the API, and store the correlation ID.</p><p>Sign the VRN up in the Government Gateway, OAuth your invoicing platform to HMRC, keep every sale and purchase as a digital record, never retype a figure into the return, file quarterly via the API, and store the correlation ID. The same digital-link discipline is what carries you cleanly into MTD ITSA from April 2026.</p><h2>Related reading</h2><p class="block-answer" data-answer="true">Related reading includes: MTD UK — how Invoicemonk implements MTD for VAT MTD UK explained: scope, digital links, ITSA</p><ul>
        <li><a href="/__LANG__/e-invoicing/mtd-uk">MTD UK — how Invoicemonk implements MTD for VAT</a></li>
        <li><a href="/__LANG__/blog/mtd-uk-explained">MTD UK explained: scope, digital links, ITSA</a></li>
        <li><a href="/__LANG__/blog/mtd-uk-common-errors">Common MTD UK errors and fixes</a></li>
        <li><a href="/__LANG__/blog/clearance-vs-reporting-models">Clearance vs reporting models</a></li>
      </ul><p>Ready to file? <a href="/__LANG__/e-invoicing/mtd-uk">See how Invoicemonk handles MTD for VAT end to end</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with MTD for VAT in the UK, a VAT-registered business must sign up its VAT registration for Making Tax Digital in the HMRC Government Gateway, connect MTD-compatible software (such as Invoicemonk) to HMRC via OAuth 2.0, keep the prescribed digital records for every sale and purchase, preserve a continuous "digital link" from source records to the nine VAT return boxes (no manual re-typing), then submit each quarterly return through the HMRC MTD VAT API and store the HMRC correlation ID as proof of filing.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['MTD', 'UK', 'HMRC', 'VAT', 'ITSA', 'e-invoicing', 'compliance', 'how-to'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-mtd-uk.jpg',
    featuredImageAlt: 'Editorial illustration of United Kingdom\'s e-invoicing compliance workflow for the how to comply with mtd uk guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/mtd-uk',
    semanticKeywords: ['MTD for VAT', 'HMRC MTD API', 'digital links rule', 'MTD signup', 'MTD ITSA April 2026', '£50000 threshold', 'VAT return boxes', 'OAuth HMRC', 'MTD-compatible software', 'correlation ID receipt'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'gb',
    faq: [
      { question: 'Do I need bridging software for MTD for VAT?', answer: 'Only if your underlying records live in a spreadsheet. If you use MTD-recognised invoicing and accounting software like Invoicemonk that calculates the VAT return directly from the digital records, no bridging is needed.' },
      { question: 'How often does the HMRC OAuth token need refreshing?', answer: 'The refresh token is valid for 18 months. Access tokens are refreshed automatically by the platform. If a refresh fails (revoked permission, gateway reset), HMRC returns 401 Unauthorized and the platform prompts re-authorisation.' },
      { question: 'What is the digital-link requirement, exactly?', answer: 'Every data point that feeds the VAT return must move via a digital link — API call, formula reference, file import, linked cell. Manual re-typing or copy-paste breaks the link and is the most common HMRC audit finding.' },
      { question: 'When does MTD ITSA start and who is in scope first?', answer: 'From 6 April 2026 for sole traders and landlords with combined turnover above £50,000. HMRC confirmed 864,000 taxpayers in this first wave. The threshold drops to £30,000 in April 2027 and £20,000 in April 2028 (subject to review).' },
      { question: 'What is the MTD VAT return deadline?', answer: 'One calendar month plus seven days after the end of the VAT period. Missing it accrues a penalty point; at four points (for quarterly filers) a £200 fixed penalty applies.' },
      { question: 'Can I sign up for MTD mid-quarter?', answer: 'Yes, but the first MTD obligation will be the next full VAT period after sign-up. Do not file a legacy return for any period HMRC has already marked as MTD — it will be rejected with "obligation already fulfilled".' },
      { question: 'What happens if HMRC is down on the deadline?', answer: 'Invoicemonk queues the submission and retries with exponential back-off. If HMRC remains unreachable past the deadline, the correlation ID timestamp from the eventual successful submission is the proof of attempted filing, and HMRC publishes service-status notices that cover their downtime.' },
    ],
    relatedTools: [
      { label: 'MTD UK source page', url: '/e-invoicing/mtd-uk', description: 'How Invoicemonk implements MTD for VAT in the UK' },
      { label: 'MTD UK explained', url: '/blog/mtd-uk-explained', description: 'Scope, digital-link rule, ITSA timeline' },
      { label: 'Common MTD UK errors', url: '/blog/mtd-uk-common-errors', description: 'Seven failure modes and the fix for each' },
    ],
  },

  // ============================================================
  // MTD UK — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'mtd-uk-explained',
    title: 'MTD UK Explained: Scope, Digital Links, ITSA, and What Changes Through 2028',
    excerpt: 'A plain-English explainer for Making Tax Digital — what MTD is, who must comply for VAT today, when MTD ITSA arrives for income tax (April 2026, £50,000), what the digital-link rule actually means, and the new VAT penalty rates.',
    content: `<p><strong>MTD (Making Tax Digital) is HMRC's programme requiring UK taxpayers to keep digital records, preserve unbroken digital links from records to return, and submit returns through MTD-compatible software via the HMRC API. MTD for VAT is universal since 1 April 2022 (the £85,000 threshold was retired); MTD for Income Tax Self Assessment (ITSA) starts 6 April 2026 for sole traders and landlords with combined turnover above £50,000, drops to £30,000 from April 2027, and £20,000 from April 2028.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Programme:</strong> Making Tax Digital (MTD) — HMRC's full-stack digitisation of UK tax administration.</li>
          <li><strong>MTD for VAT:</strong> Mandatory for every VAT-registered business since 1 April 2022.</li>
          <li><strong>MTD ITSA — Wave 1:</strong> 6 April 2026, ≥£50,000 combined self-employment + property income (≈864,000 taxpayers per HMRC).</li>
          <li><strong>MTD ITSA — Wave 2:</strong> 6 April 2027, threshold drops to £30,000.</li>
          <li><strong>MTD ITSA — Wave 3:</strong> 6 April 2028, threshold drops to £20,000 (subject to government review).</li>
          <li><strong>Legal hook:</strong> Income Tax (Digital Obligations) Regulations 2026 (SI 2026/336).</li>
          <li><strong>Last reviewed:</strong> 20 November 2026.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what">What MTD actually is</a></li>
          <li><a href="#vat-scope">MTD for VAT — who must comply today</a></li>
          <li><a href="#itsa-scope">MTD ITSA — who and when</a></li>
          <li><a href="#digital-link">The digital-link rule, properly understood</a></li>
          <li><a href="#boxes">The nine VAT return boxes</a></li>
          <li><a href="#penalties">Penalty regime (2025–2026)</a></li>
          <li><a href="#vs">How MTD differs from clearance regimes</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where MTD sits among global mandates</h2><p class="block-answer" data-answer="true">MTD is the UK's bet on reporting over clearance.  HMRC ingests aggregated VAT returns quarterly and (from April 2026) quarterly income-tax updates — rather than every invoice in real time, as ZATCA Phase 2, GST IRN India, MyInvois Malaysia, and NRS / FIRS MBS Nigeria all do.</p><p>MTD is the UK's bet on <em>reporting</em> over <em>clearance</em>. HMRC ingests aggregated VAT returns quarterly and (from April 2026) quarterly income-tax updates — rather than every invoice in real time, as <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a>, <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN India</a>, <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois Malaysia</a>, and <a href="/__LANG__/e-invoicing/firs-mbs-nigeria">NRS / FIRS MBS Nigeria</a> all do. The trade-off: HMRC tolerates less per-invoice ceremony but is uncompromising on digital records and digital links.</p><h2 id="what">What MTD actually is</h2><p class="block-answer" data-answer="true">Three obligations:</p><p>Three obligations:</p><ol>
        <li><strong>Digital records.</strong> Every transaction that feeds the return is captured electronically with the prescribed data items (business identifiers, time of supply, value, VAT rate).</li>
        <li><strong>Digital links.</strong> The chain from source record to submitted figure is electronic end to end — API, formula, file import, linked cell.</li>
        <li><strong>API submission.</strong> The return goes to HMRC via MTD-compatible software using the HMRC MTD API. The legacy XML portal is closed for in-scope taxpayers.</li>
      </ol><h2 id="vat-scope">MTD for VAT — who must comply today</h2><p class="block-answer" data-answer="true">MTD for VAT — who must comply today includes: Every VAT-registered business, regardless of turnover, since 1 April 2022.   The previous £85,000 threshold is gone.</p><ul>
        <li><strong>Every VAT-registered business</strong>, regardless of turnover, since 1 April 2022. The previous £85,000 threshold is gone.</li>
        <li><strong>Voluntary registrants:</strong> in scope on the same terms as compulsorily registered businesses.</li>
        <li><strong>Exempt categories:</strong> very narrow — religious bodies and those who cannot use digital tools for disability, age, or remoteness reasons. HMRC grants exemption only on written application.</li>
        <li><strong>Overseas businesses with a UK VAT registration:</strong> in scope. The MTD obligation tracks the VRN, not the establishment.</li>
      </ul><h2 id="itsa-scope">MTD ITSA — who and when</h2><h3>What is the wave-by-wave timeline?</h3><p class="block-answer" data-answer="true">the wave-by-wave timeline includes: 6 April 2026: sole traders and landlords with combined self-employment and property income above £50,000.   6 April 2027: threshold drops to £30,000.</p><ul>
        <li><strong>6 April 2026:</strong> sole traders and landlords with combined self-employment and property income above £50,000.</li>
        <li><strong>6 April 2027:</strong> threshold drops to £30,000.</li>
        <li><strong>6 April 2028:</strong> threshold drops to £20,000, subject to government review.</li>
        <li><strong>Partnerships and corporate landlords:</strong> separate path, timing under consultation.</li>
      </ul><h3>What does an ITSA-obligated taxpayer have to file?</h3><p class="block-answer" data-answer="true">Quarterly updates of income and expenses for each trade or property business, an end-of-period statement (EOPS), and a final declaration replacing the historic Self Assessment tax return.  All via MTD-compatible software.</p><p>Quarterly updates of income and expenses for each trade or property business, an end-of-period statement (EOPS), and a final declaration replacing the historic Self Assessment tax return. All via MTD-compatible software.</p><h2 id="digital-link">The digital-link rule, properly understood</h2><p class="block-answer" data-answer="true">A "digital link" is any electronic transfer that does not involve manual intervention.  Permitted: API calls, formula references, file import/export, linked spreadsheet cells, automated XML/CSV download-upload, email of an XML file ingested by the recipient's system.</p><p>A "digital link" is any electronic transfer that does not involve manual intervention. <strong>Permitted:</strong> API calls, formula references, file import/export, linked spreadsheet cells, automated XML/CSV download-upload, email of an XML file ingested by the recipient's system. <strong>Not permitted:</strong> manually retyping a number, manually copy-pasting, sending a PDF and having someone transcribe it.</p><p>The rule applies to <em>every</em> step from the underlying transaction to the figure that lands in Box 1–9 of the VAT return (or the quarterly ITSA update). HMRC's published audit findings consistently call this out as the most-failed checkpoint.</p><h2 id="boxes">The nine VAT return boxes</h2><p class="block-answer" data-answer="true">The nine VAT return boxes includes: VAT due on sales and other outputs.   VAT due on acquisitions from EU member states (NI Protocol; mostly zero for GB businesses post-Brexit).</p><ol>
        <li>VAT due on sales and other outputs.</li>
        <li>VAT due on acquisitions from EU member states (NI Protocol; mostly zero for GB businesses post-Brexit).</li>
        <li>Total VAT due (Box 1 + Box 2).</li>
        <li>VAT reclaimed on purchases and other inputs.</li>
        <li>Net VAT to pay HMRC or reclaim from HMRC (Box 3 − Box 4).</li>
        <li>Total value of sales and other outputs excluding VAT.</li>
        <li>Total value of purchases and other inputs excluding VAT.</li>
        <li>Total value of supplies of goods to EU member states (NI Protocol).</li>
        <li>Total value of acquisitions from EU member states (NI Protocol).</li>
      </ol><h2 id="penalties">Penalty regime (2025–2026)</h2><h3>How does the late-submission points system work?</h3><p class="block-answer" data-answer="true">Each missed quarterly return earns a penalty point.  At the threshold (four points for quarterly filers, five for monthly, two for annual) a £200 fixed penalty applies, and every subsequent late return triggers another £200 — until you submit on time for a "good behaviour" period and HMRC resets the points.</p><p>Each missed quarterly return earns a penalty point. At the threshold (four points for quarterly filers, five for monthly, two for annual) a £200 fixed penalty applies, and every subsequent late return triggers another £200 — until you submit on time for a "good behaviour" period and HMRC resets the points.</p><h3>What are the late-payment penalties?</h3><p class="block-answer" data-answer="true">For VAT periods starting on or after 1 April 2025 the regime escalates: nothing in the first 15 days if you pay or arrange a Time-to-Pay; 3% first late-payment penalty if still unpaid after day 15; another 3% at day 30; then a 10% per annum daily second penalty from day 31.</p><p>For VAT periods starting on or after 1 April 2025 the regime escalates: nothing in the first 15 days if you pay or arrange a Time-to-Pay; <strong>3%</strong> first late-payment penalty if still unpaid after day 15; another <strong>3%</strong> at day 30; then a <strong>10% per annum</strong> daily second penalty from day 31. HMRC's July 2025 update increased the day-15 / day-30 rates from the original 2% / 4% schedule.</p><h2 id="vs">How MTD differs from clearance regimes</h2><p class="block-answer" data-answer="true">MTD is reporting, not clearance — invoices are legally valid at issuance, HMRC sees the aggregated data via the quarterly return.  Contrast with the per-invoice clearance loops in clearance vs reporting models and the credential-bound signing flows that drive ZATCA CSID or India's IRN.</p><p>MTD is reporting, not clearance — invoices are legally valid at issuance, HMRC sees the aggregated data via the quarterly return. Contrast with the per-invoice clearance loops in <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models</a> and the credential-bound signing flows that drive <a href="/__LANG__/blog/what-is-csid">ZATCA CSID</a> or India's <a href="/__LANG__/blog/what-is-irn">IRN</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.gov.uk/government/collections/making-tax-digital-for-vat" rel="noopener noreferrer">HMRC — Making Tax Digital for VAT collection</a></li>
        <li><a href="https://www.gov.uk/guidance/find-out-if-and-when-you-need-to-use-making-tax-digital-for-income-tax" rel="noopener noreferrer">HMRC — MTD for Income Tax guidance (updated March 2026)</a></li>
        <li><a href="https://www.legislation.gov.uk/uksi/2026/336/made" rel="noopener noreferrer">SI 2026/336 — The Income Tax (Digital Obligations) Regulations 2026</a></li>
        <li><a href="https://www.gov.uk/government/publications/penalties-for-late-submission/penalties-for-late-submission" rel="noopener noreferrer">HMRC — Penalties for late submission (points regime)</a></li>
        <li><a href="https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late" rel="noopener noreferrer">HMRC — Late VAT payment penalties (2025 rates)</a></li>
        <li><a href="https://www.gov.uk/government/publications/increasing-vat-and-other-taxes-late-payment-penalties-percentage-rate-relating-to-penalty-reform/increase-to-vat-and-other-taxes-late-payment-penalties-percentage-rate-relating-to-penalty-reform" rel="noopener noreferrer">HMRC — Increase to late-payment penalty rates (effective Apr 2025)</a></li>
      </ul><h2>TL;DR</h2><p class="block-answer" data-answer="true">MTD is universal for VAT, expanding into income tax from April 2026 at £50,000 and tightening every year.  The digital-link rule is what makes MTD different from "VAT, but online" — every figure must be traceable electronically from source to return.</p><p>MTD is universal for VAT, expanding into income tax from April 2026 at £50,000 and tightening every year. The digital-link rule is what makes MTD different from "VAT, but online" — every figure must be traceable electronically from source to return. Penalty rates stepped up in April 2025; planning is now cheaper than catch-up.</p><h2>Related reading</h2><p class="block-answer" data-answer="true">Related reading includes: MTD UK — how Invoicemonk implements MTD for VAT How to comply with MTD for VAT — step-by-step</p><ul>
        <li><a href="/__LANG__/e-invoicing/mtd-uk">MTD UK — how Invoicemonk implements MTD for VAT</a></li>
        <li><a href="/__LANG__/blog/how-to-comply-with-mtd-uk">How to comply with MTD for VAT — step-by-step</a></li>
        <li><a href="/__LANG__/blog/mtd-uk-common-errors">Common MTD UK errors and fixes</a></li>
        <li><a href="/__LANG__/blog/clearance-vs-reporting-models">Clearance vs reporting models</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> MTD (Making Tax Digital) is HMRC's programme requiring UK taxpayers to keep digital records, preserve unbroken digital links from records to return, and submit returns through MTD-compatible software via the HMRC API. MTD for VAT is universal since 1 April 2022 (the £85,000 threshold was retired); MTD for Income Tax Self Assessment (ITSA) starts 6 April 2026 for sole traders and landlords with combined turnover above £50,000, drops to £30,000 from April 2027, and £20,000 from April 2028.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['MTD', 'UK', 'HMRC', 'VAT', 'ITSA', 'explainer'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/mtd-uk-explained.jpg',
    featuredImageAlt: 'Editorial illustration of United Kingdom\'s e-invoicing compliance workflow for the mtd uk explained guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/mtd-uk',
    semanticKeywords: ['MTD explained', 'Making Tax Digital', 'MTD ITSA April 2026', 'digital links rule', 'VAT return boxes', 'HMRC penalty points', 'late payment penalties 2025', 'SI 2026/336', '£50000 threshold', 'reporting vs clearance'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'gb',
    faq: [
      { question: 'Is MTD mandatory for all VAT-registered businesses?', answer: 'Yes since 1 April 2022, regardless of turnover. The previous £85,000 threshold no longer applies. Exemption is available only on written application for very narrow categories (religious bodies, certain accessibility cases).' },
      { question: 'When does MTD ITSA start?', answer: '6 April 2026 for sole traders and landlords with combined self-employment and property income above £50,000 — HMRC confirmed 864,000 taxpayers in this first wave. The threshold drops to £30,000 in April 2027 and £20,000 in April 2028, subject to government review.' },
      { question: 'Can I keep my records in a spreadsheet?', answer: 'Yes, but every flow from the spreadsheet to the VAT return must use digital links — formulas, file import, API. Manual retyping breaks the rule. Most businesses move to MTD-recognised software to remove the failure mode.' },
      { question: 'What changed for late-payment penalties in 2025?', answer: 'For VAT periods starting on or after 1 April 2025, the first late-payment penalty rose from 2% to 3% at day 15, the second-stage penalty rose from 4% to 3% at day 30, and a 10% per annum daily second penalty accrues from day 31.' },
      { question: 'What is the legal basis for MTD ITSA?', answer: 'The Income Tax (Digital Obligations) Regulations 2026 (SI 2026/336), made under Schedule A1 to the Taxes Management Act 1970.' },
      { question: 'Does MTD apply to partnerships for income tax?', answer: 'Not in the April 2026 wave. Partnerships and corporate landlords sit on a separate ITSA path still under consultation; HMRC has not confirmed a start date.' },
      { question: 'What if I am voluntarily VAT-registered below the old threshold?', answer: 'You are in MTD on the same terms as a compulsorily registered business — sign up, OAuth your software, submit via API. Deregistering for VAT is the only way out of MTD for VAT.' },
    ],
    relatedTools: [
      { label: 'MTD UK source page', url: '/e-invoicing/mtd-uk', description: 'How Invoicemonk implements MTD for VAT in the UK' },
      { label: 'How to comply with MTD UK', url: '/blog/how-to-comply-with-mtd-uk', description: 'Step-by-step sign-up and submission walkthrough' },
      { label: 'Clearance vs reporting models', url: '/blog/clearance-vs-reporting-models', description: 'Where MTD sits in the global e-invoicing landscape' },
    ],
  },

  // ============================================================
  // MTD UK — Archetype 3 (Common Errors)
  // ============================================================
  {
    slug: 'mtd-uk-common-errors',
    title: 'Common MTD UK Errors and How to Fix Them: OAuth, Digital Links, Box Mismatches, and Late Returns (2026)',
    excerpt: 'The recurring failure modes in MTD for VAT — OAuth disconnections, broken digital links, Box 1 / Box 6 mismatches, missed obligations, error-correction thresholds — and the documented fix for each, mapped to HMRC error codes.',
    content: `<p><strong>The seven recurring failure modes in MTD for VAT are: (1) OAuth token expired or revoked, (2) Box 1 / Box 6 reconciliation mismatch, (3) submission rejected for VRN mismatch, (4) duplicate submission for a period already fulfilled, (5) broken digital link from manual override, (6) missed obligation deadline triggering a penalty point, and (7) cross-period tax-point miscategorisation. For each, the fix runs through re-authorisation, VAT code correction at line level, or filing an error-correction notice — never patching the return manually, which itself breaks the digital-link rule.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Source authority:</strong> HMRC MTD VAT API error codes (Developer Hub) and VAT Notice 700/45 (correcting errors).</li>
          <li><strong>Most common audit finding:</strong> Broken digital link from manual re-typing.</li>
          <li><strong>Most common API rejection:</strong> Obligation already fulfilled (HTTP 403, code <code>BUSINESS_ERROR</code>).</li>
          <li><strong>Error-correction threshold:</strong> Adjust in next return if net error &lt; £10,000 AND &lt; 1% of Box 6; above either, file VAT652.</li>
          <li><strong>OAuth refresh window:</strong> 18 months; access tokens shorter, refreshed automatically.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#error-1">Error 1 — OAuth token expired or revoked</a></li>
          <li><a href="#error-2">Error 2 — Box 1 / Box 6 do not reconcile</a></li>
          <li><a href="#error-3">Error 3 — Submission rejected for VRN mismatch</a></li>
          <li><a href="#error-4">Error 4 — Duplicate submission for a period</a></li>
          <li><a href="#error-5">Error 5 — Broken digital link (manual override)</a></li>
          <li><a href="#error-6">Error 6 — Missed obligation deadline</a></li>
          <li><a href="#error-7">Error 7 — Cross-period tax-point miscategorisation</a></li>
          <li><a href="#triage">Triage flow</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Why most MTD errors look the same up close</h2><p class="block-answer" data-answer="true">An MTD submission failure usually presents as one of three symptoms: HMRC returns an HTTP 4xx with a JSON error code; the boxes refuse to balance; or HMRC silently accepts the submission but an inspector later finds a figure that does not trace back to a digital record.</p><p>An MTD submission failure usually presents as one of three symptoms: HMRC returns an HTTP 4xx with a JSON error code; the boxes refuse to balance; or HMRC silently accepts the submission but an inspector later finds a figure that does not trace back to a digital record. The patterns below cover ~95% of what we see across UK Invoicemonk tenants.</p><h2 id="error-1">Error 1 — OAuth token expired or revoked</h2><p class="block-answer" data-answer="true">Symptom: the platform fails to pull obligations or submit a return; HMRC returns 401 Unauthorized with INVALID_CREDENTIALS.</p><p><strong>Symptom:</strong> the platform fails to pull obligations or submit a return; HMRC returns <code>401 Unauthorized</code> with <code>INVALID_CREDENTIALS</code>.</p><p><strong>Cause:</strong> the OAuth token bound to the VAT registration was revoked from inside the Government Gateway, the user changed their gateway password, or the refresh hit the 18-month boundary without renewal.</p><p><strong>Fix:</strong> re-authorise the platform via the OAuth flow. Invoicemonk surfaces a re-authorisation banner — clear it before the next obligation deadline. After re-auth, retry the obligations call and confirm a fresh access-token timestamp.</p><h2 id="error-2">Error 2 — Box 1 and Box 6 do not reconcile</h2><p class="block-answer" data-answer="true">Symptom: total VAT due (Box 1) does not match the expected VAT rate applied to Box 6 net sales.</p><p><strong>Symptom:</strong> total VAT due (Box 1) does not match the expected VAT rate applied to Box 6 net sales.</p><p><strong>Cause:</strong> usually a line item with a zero-rated or exempt code misclassified as standard rate, a partial-exemption adjustment that bypassed the digital link, or a manual journal posted directly to the VAT control account.</p><p><strong>Fix:</strong> drill into the invoices contributing to Box 6 and check each VAT code. Recategorise wrong lines at source — never patch the difference in the return itself. If the variance is genuine (e.g. mixed-rate supplies), document the calculation in the partial-exemption working paper.</p><h2 id="error-3">Error 3 — Submission rejected: VRN mismatch</h2><p class="block-answer" data-answer="true">Symptom: HMRC returns VRN_INVALID on submission.</p><p><strong>Symptom:</strong> HMRC returns <code>VRN_INVALID</code> on submission.</p><p><strong>Cause:</strong> the OAuth token was authorised against a different VAT registration than the one configured in the platform — common when a finance team manages multiple group VRNs.</p><p><strong>Fix:</strong> confirm the VRN in platform settings matches the VRN used at OAuth time. If they differ, re-authorise against the correct gateway login.</p><h2 id="error-4">Error 4 — Duplicate submission ("obligation already fulfilled")</h2><p class="block-answer" data-answer="true">Symptom: HMRC returns HTTP 403 with BUSINESS_ERROR and a message containing "obligation already fulfilled".</p><p><strong>Symptom:</strong> HMRC returns HTTP 403 with <code>BUSINESS_ERROR</code> and a message containing "obligation already fulfilled".</p><p><strong>Cause:</strong> the return was already filed for that period — often via the legacy HMRC portal before the period was migrated to MTD, or by a second user inside the same tenant.</p><p><strong>Fix:</strong> check the obligations list — HMRC marks fulfilled periods. If a duplicate was created in error and you need to amend, follow Error 8 in VAT Notice 700/45: if the net error sits below £10,000 and below 1% of Box 6, correct in the next return; otherwise file a separate error-correction notice (form VAT652).</p><h2 id="error-5">Error 5 — Broken digital link (manual override)</h2><p class="block-answer" data-answer="true">Symptom: an HMRC inspector finds a difference between the underlying records and the submitted return; or your internal reconciliation produces an unexplained delta.</p><p><strong>Symptom:</strong> an HMRC inspector finds a difference between the underlying records and the submitted return; or your internal reconciliation produces an unexplained delta.</p><p><strong>Cause:</strong> someone retyped a figure between the records and the return, breaking the digital-link rule (the single largest audit finding HMRC publishes).</p><p><strong>Fix:</strong> identify the override, restore the digital link end to end, document the correction in the audit trail. If the override changed the submitted figure materially, file an amended return per the £10,000 / 1% rule above.</p><h2 id="error-6">Error 6 — Missed obligation deadline</h2><p class="block-answer" data-answer="true">Symptom: HMRC issues a late-submission penalty point.</p><p><strong>Symptom:</strong> HMRC issues a late-submission penalty point.</p><p><strong>Cause:</strong> the quarterly return was not submitted by one calendar month + seven days after period end.</p><p><strong>Fix:</strong> submit as soon as possible. Points accumulate; the £200 fixed penalty applies at the threshold (four points for quarterly filers). After a "good behaviour" period of on-time submissions, HMRC resets the points. Set calendar triggers for every obligation date and a separate trigger for the OAuth refresh-token expiry.</p><h2 id="error-7">Error 7 — Cross-period tax-point miscategorisation</h2><p class="block-answer" data-answer="true">Symptom: an invoice issued in one period but with a supply date (tax point) in the previous period distorts the boxes.</p><p><strong>Symptom:</strong> an invoice issued in one period but with a supply date (tax point) in the previous period distorts the boxes.</p><p><strong>Cause:</strong> HMRC uses the tax point — date of supply — to allocate the VAT, which may differ from the invoice issue date.</p><p><strong>Fix:</strong> confirm the tax point on every invoice; Invoicemonk uses tax point by default. If a previous entry used the wrong date, correct at source and reconcile across the affected periods.</p><h2 id="triage">Triage flow</h2><p class="block-answer" data-answer="true">Triage flow includes: Capture the exact HMRC error code from the API response (error.  code and error.</p><ol>
        <li>Capture the exact HMRC error code from the API response (<code>error.code</code> and <code>error.message</code>).</li>
        <li>If 401 → Error 1 (OAuth).</li>
        <li>If 403 with <code>BUSINESS_ERROR</code> → Error 4 (duplicate).</li>
        <li>If 400 with <code>VRN_INVALID</code> → Error 3 (VRN).</li>
        <li>If boxes won't balance → Error 2 (reconciliation) or Error 7 (tax point).</li>
        <li>If submitted but figure is wrong → Error 5 (digital-link audit) — apply the £10,000 / 1% rule.</li>
      </ol><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/vat-api" rel="noopener noreferrer">HMRC Developer Hub — MTD VAT API and error reference</a></li>
        <li><a href="https://www.gov.uk/government/publications/vat-notice-70045-how-to-correct-vat-errors-and-make-adjustments-or-claims" rel="noopener noreferrer">HMRC — VAT Notice 700/45: How to correct VAT errors</a></li>
        <li><a href="https://www.gov.uk/government/publications/penalties-for-late-submission/penalties-for-late-submission" rel="noopener noreferrer">HMRC — Penalties for late submission</a></li>
        <li><a href="https://www.gov.uk/guidance/how-late-payment-penalties-work-if-you-pay-vat-late" rel="noopener noreferrer">HMRC — Late VAT payment penalties (2025 rates)</a></li>
        <li><a href="https://www.gov.uk/guidance/keep-digital-records-for-making-tax-digital-for-vat" rel="noopener noreferrer">HMRC — Keep digital records (Notice 700/22)</a></li>
        <li><a href="https://www.gov.uk/government/publications/agent-update-issue-142/issue-142-of-agent-update" rel="noopener noreferrer">HMRC — Agent Update Issue 142 (current operational guidance)</a></li>
      </ul><h2>TL;DR</h2><p class="block-answer" data-answer="true">OAuth, reconciliation, VRN, duplicate, digital-link, deadline, tax point — seven failure modes, each with a documented fix.  Treat the HMRC error code as the entry point, never patch a submitted return manually, and rely on the £10,000 / 1% threshold to decide between in-return correction and VAT652.</p><p>OAuth, reconciliation, VRN, duplicate, digital-link, deadline, tax point — seven failure modes, each with a documented fix. Treat the HMRC error code as the entry point, never patch a submitted return manually, and rely on the £10,000 / 1% threshold to decide between in-return correction and VAT652.</p><h2>Related reading</h2><p class="block-answer" data-answer="true">Related reading includes: MTD UK — Invoicemonk's MTD VAT implementation How to comply with MTD for VAT — step-by-step</p><ul>
        <li><a href="/__LANG__/e-invoicing/mtd-uk">MTD UK — Invoicemonk's MTD VAT implementation</a></li>
        <li><a href="/__LANG__/blog/how-to-comply-with-mtd-uk">How to comply with MTD for VAT — step-by-step</a></li>
        <li><a href="/__LANG__/blog/mtd-uk-explained">MTD UK explained: scope, digital links, ITSA</a></li>
        <li><a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">Choosing an e-invoicing platform — buyer's checklist</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> The seven recurring failure modes in MTD for VAT are: (1) OAuth token expired or revoked, (2) Box 1 / Box 6 reconciliation mismatch, (3) submission rejected for VRN mismatch, (4) duplicate submission for a period already fulfilled, (5) broken digital link from manual override, (6) missed obligation deadline triggering a penalty point, and (7) cross-period tax-point miscategorisation. For each, the fix runs through re-authorisation, VAT code correction at line level, or filing an error-correction notice — never patching the return manually, which itself breaks the digital-link rule.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['MTD', 'UK', 'HMRC', 'VAT', 'errors', 'troubleshooting'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/mtd-uk-common-errors.jpg',
    featuredImageAlt: 'Editorial illustration of United Kingdom\'s e-invoicing compliance workflow for the mtd uk common errors guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/mtd-uk',
    semanticKeywords: ['MTD errors', 'MTD OAuth INVALID_CREDENTIALS', 'Box 1 Box 6 mismatch', 'MTD penalty points', 'MTD digital-link audit', 'VAT652 error correction', 'VRN_INVALID', 'BUSINESS_ERROR obligation fulfilled', 'tax point', 'VAT Notice 700/45'],
    priority: 'P2',
    lastAudited: '2026-11-20',
    targetCountry: 'gb',
    faq: [
      { question: 'How long do I have to file the MTD VAT return?', answer: 'One calendar month plus seven days after the end of the VAT period. Missing the deadline accrues a penalty point; four points (for quarterly filers) triggers a £200 fixed penalty, with another £200 for each subsequent late return until you serve a "good behaviour" period.' },
      { question: 'Can I amend a submitted MTD return?', answer: 'For small corrections (net error below £10,000 AND below 1% of Box 6), adjust in the next return. Above either threshold, file form VAT652 outside MTD. Never overwrite a submitted box manually — that itself breaks the digital-link rule.' },
      { question: 'What is the most common audit finding?', answer: 'A broken digital link — someone retyped a figure between the records and the return. The fix is to never override calculated boxes; correct the underlying records and let the figure flow through.' },
      { question: 'What does the HMRC "obligation already fulfilled" error mean?', answer: 'HTTP 403 with BUSINESS_ERROR — the period has already been submitted, often via the legacy XML portal before the period migrated to MTD, or by a second user in the same tenant. Check the obligations endpoint; if a genuine amendment is needed, follow VAT Notice 700/45.' },
      { question: 'My OAuth token died on a Sunday — what now?', answer: 'Re-authorise via the platform. HMRC bearer tokens are short-lived but refresh tokens last 18 months; a Sunday failure usually means the gateway password was changed or the permission revoked. Clear the banner Monday morning and confirm a fresh access-token timestamp before the next obligation date.' },
      { question: 'Do I need to file separately for each VAT group member?', answer: 'No — a VAT group files one return under the group representative member\'s VRN. The OAuth grant is against that representative VRN. Mixing up which VRN owns the grant is the most common cause of Error 3 (VRN_INVALID).' },
      { question: 'What happens if I keep accumulating penalty points?', answer: 'After the threshold, every late return incurs a £200 fixed penalty. To reset, submit every return on time for the prescribed "good behaviour" period (24 months for quarterly filers) and keep your records up to date if HMRC requests them.' },
    ],
    relatedTools: [
      { label: 'MTD UK source page', url: '/e-invoicing/mtd-uk', description: 'How Invoicemonk implements MTD for VAT in the UK' },
      { label: 'How to comply with MTD UK', url: '/blog/how-to-comply-with-mtd-uk', description: 'Step-by-step MTD VAT walkthrough' },
      { label: 'Choosing an e-invoicing platform', url: '/blog/choosing-an-e-invoicing-platform-checklist', description: 'Buyer-side checklist including HMRC recognition' },
    ],
  },

  // ============================================================
  // KRA eTIMS Kenya — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-kra-etims-kenya',
    title: 'How to Comply with KRA eTIMS in Kenya: Onboard, Connect, and Issue Your First Control Unit Invoice (2026)',
    excerpt: 'Step-by-step playbook for issuing KRA Electronic Tax Invoice Management System (eTIMS) invoices in Kenya — iTax onboarding, picking the right eTIMS variant (Lite, Online, OSCU, VSCU, Multi-Paypoint), provisioning the signing credential, and printing the Control Unit Invoice Number plus QR.',
    content: `<p><strong>To comply with KRA eTIMS in Kenya, a taxpayer must register on the iTax portal under an active KRA PIN, pick the eTIMS variant that matches operating scale (eTIMS Lite for web entry, eTIMS Online for API integration, OSCU / VSCU for higher-volume sales control, Multi-Paypoint for multi-branch retailers), provision the KRA-onboarded signing credential bound to the PIN, build a signed payload containing seller and buyer KRA PINs plus the 16% VAT breakdown, submit it to the eTIMS API to receive a Control Unit Invoice Number (CU-INV) and QR pointing to KRA's verification endpoint, then print the CU-INV and QR on the buyer PDF — without which the invoice is not legally valid for VAT or income-tax expense deduction.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Kenya Revenue Authority (KRA).</li>
          <li><strong>Mandate:</strong> Electronic Tax Invoice Management System (eTIMS).</li>
          <li><strong>Artefact:</strong> Signed eTIMS payload + Control Unit Invoice Number (CU-INV) + KRA-verification QR.</li>
          <li><strong>Transport:</strong> eTIMS API (Online / OSCU / VSCU variants) or the eTIMS web portal (Lite).</li>
          <li><strong>Applies to:</strong> Every Kenyan business — VAT-registered <em>and</em> non-VAT-registered — under KRA's 2023–2024 phased rollout.</li>
          <li><strong>Tax rate handled:</strong> 16% VAT standard, 8% (select fuel items), 0% zero-rated, plus exempt categories.</li>
          <li><strong>Income-tax linkage:</strong> From 1 January 2026, income-tax returns are validated against eTIMS, withholding, and customs datasets; expenses without an eTIMS invoice are disallowed.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against the KRA eTIMS portal and KPMG Kenya's January 2026 tax alert.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#prereqs">Pre-requisites</a></li>
          <li><a href="#register">Step 1 — Register on iTax for eTIMS</a></li>
          <li><a href="#variant">Step 2 — Pick the right eTIMS variant</a></li>
          <li><a href="#credential">Step 3 — Provision your eTIMS credential</a></li>
          <li><a href="#payload">Step 4 — Map your invoice to the eTIMS schema</a></li>
          <li><a href="#submit">Step 5 — Submit and receive the CU-INV</a></li>
          <li><a href="#print">Step 6 — Print the CU-INV and QR on the buyer PDF</a></li>
          <li><a href="#income-tax">How eTIMS feeds the 2026 income-tax validation</a></li>
          <li><a href="#checklist">Pre-go-live compliance checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where eTIMS sits in the global e-invoicing landscape</h2><p class="block-answer" data-answer="true">eTIMS is a clearance-model regime — sibling to ZATCA Phase 2 in Saudi Arabia, MyInvois in Malaysia, GST IRN in India, and NRS / FIRS MBS in Nigeria.</p><p>eTIMS is a <em>clearance</em>-model regime — sibling to <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 in Saudi Arabia</a>, <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois in Malaysia</a>, <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN in India</a>, and <a href="/__LANG__/e-invoicing/firs-mbs-nigeria">NRS / FIRS MBS in Nigeria</a>. The distinguishing trait is the variant catalogue: KRA recognises that a one-room shop and a national retailer cannot operate the same way, so eTIMS ships in five flavours sharing the same payload contract.</p><h2 id="prereqs">What you need before you start</h2><p class="block-answer" data-answer="true">An active KRA PIN with iTax access.  Clarity on whether you are VAT-registered (16% / 8% / 0%) or non-VAT (still in scope since 1 September 2023).</p><ul>
        <li>An active KRA PIN with iTax access.</li>
        <li>Clarity on whether you are VAT-registered (16% / 8% / 0%) or non-VAT (still in scope since 1 September 2023).</li>
        <li>An invoicing platform that integrates with the KRA eTIMS API for the chosen variant — Invoicemonk integrates with eTIMS Online and VSCU.</li>
        <li>NTP-synchronised clocks on the submitting system.</li>
      </ul><h2 id="register">Step 1 — Register on iTax for eTIMS</h2><h3>Where do I sign up?</h3><p class="block-answer" data-answer="true">Log in to iTax with your KRA PIN, navigate to the eTIMS service, and complete the registration.  KRA binds your PIN to eTIMS so every payload submitted under that PIN is attributable.</p><p>Log in to iTax with your KRA PIN, navigate to the eTIMS service, and complete the registration. KRA binds your PIN to eTIMS so every payload submitted under that PIN is attributable.</p><h3>I am not VAT-registered — am I still in scope?</h3><p class="block-answer" data-answer="true">Yes.  KRA's public notice extended eTIMS to all persons carrying on business from 1 September 2023.</p><p>Yes. KRA's public notice extended eTIMS to all persons carrying on business from 1 September 2023. From 1 January 2024, any expense not supported by an eTIMS invoice is disallowed against income tax. The non-VAT taxpayer journey is the same registration flow, the same variants, and the same CU-INV outcome.</p><h2 id="variant">Step 2 — Pick the right eTIMS variant</h2><h3>How do the variants differ?</h3><p class="block-answer" data-answer="true">eTIMS Lite — web-based, free; best for very-low-volume businesses without an existing invoicing system.  eTIMS Online — API-based, integrates with cloud invoicing software (Invoicemonk uses this).</p><ul>
        <li><strong>eTIMS Lite</strong> — web-based, free; best for very-low-volume businesses without an existing invoicing system.</li>
        <li><strong>eTIMS Online</strong> — API-based, integrates with cloud invoicing software (Invoicemonk uses this).</li>
        <li><strong>OSCU</strong> (Online Sales Control Unit) — KRA-supplied physical device, for businesses with persistent connectivity and a retail point-of-sale.</li>
        <li><strong>VSCU</strong> (Virtual Sales Control Unit) — software equivalent of OSCU for cloud-hosted invoicing, used by mid-volume SaaS and service businesses.</li>
        <li><strong>Multi-Paypoint</strong> — for multi-branch retailers; one Control Unit per branch, with central aggregation back to iTax.</li>
      </ul><h3>Can I run more than one variant?</h3><p class="block-answer" data-answer="true">Yes.  Large operators often run OSCU at till points for B2C and eTIMS Online for B2B back-office invoicing under the same PIN.</p><p>Yes. Large operators often run OSCU at till points for B2C and eTIMS Online for B2B back-office invoicing under the same PIN. Each Control Unit issues its own CU-INV sequence; KRA stitches the data together at the PIN level.</p><h2 id="credential">Step 3 — Provision your eTIMS credential</h2><p class="block-answer" data-answer="true">KRA issues an eTIMS credential bound to your PIN and your selected variant — the credential signs every payload.  Invoicemonk runs the provisioning flow inside the product so the credential stays in your tenant.</p><p>KRA issues an eTIMS credential bound to your PIN and your selected variant — the credential signs every payload. Invoicemonk runs the provisioning flow inside the product so the credential stays in your tenant. For OSCU users, the credential is embedded in the physical device shipped by KRA.</p><h2 id="payload">Step 4 — Map your invoice to the eTIMS schema</h2><p class="block-answer" data-answer="true">Step 4 — Map your invoice to the eTIMS schema includes: Seller and buyer KRA PINs (validated against the KRA registry — invalid PINs reject at submission).   Line items with HS code or KRA classification.</p><ul>
        <li>Seller and buyer KRA PINs (validated against the KRA registry — invalid PINs reject at submission).</li>
        <li>Line items with HS code or KRA classification.</li>
        <li>The Kenyan VAT breakdown: 16% standard, 8% (select items per the VAT Act), 0% zero-rated, or exempt.</li>
        <li>Currency, payment terms, invoice type code (Sale, Credit Note, Debit Note, Refund Note).</li>
        <li>The digital signature bound to the eTIMS credential.</li>
      </ul><h2 id="submit">Step 5 — Submit and receive the CU-INV</h2><p class="block-answer" data-answer="true">Step 5 — Submit and receive the CU-INV includes: The platform builds the eTIMS payload.   It signs the payload with your eTIMS credential.</p><ol>
        <li>The platform builds the eTIMS payload.</li>
        <li>It signs the payload with your eTIMS credential.</li>
        <li>It posts the signed payload to the KRA eTIMS API.</li>
        <li>KRA validates schema, PIN validity, VAT computation, and signature.</li>
        <li>On success KRA returns the <strong>Control Unit Invoice Number (CU-INV)</strong> plus a QR URL resolving to KRA's verification endpoint.</li>
        <li>The platform persists CU-INV and binds it together with the QR to the buyer PDF.</li>
      </ol><h2 id="print">Step 6 — Print the CU-INV and QR on the buyer PDF</h2><p class="block-answer" data-answer="true">Every buyer-facing invoice must carry the CU-INV and the KRA QR.  The QR resolves to the public KRA verification page that confirms the invoice.</p><p>Every buyer-facing invoice must carry the CU-INV and the KRA QR. The QR resolves to the public KRA verification page that confirms the invoice. Without the CU-INV the invoice is not legally valid for the buyer's input VAT and not deductible for income tax — from 1 January 2026 KRA actively validates this at return time.</p><h2 id="income-tax">How eTIMS feeds the 2026 income-tax validation</h2><p class="block-answer" data-answer="true">From 1 January 2026, KRA validates filed income-tax returns against the underlying eTIMS, withholding tax, and customs datasets.</p><p>From 1 January 2026, KRA validates filed income-tax returns against the underlying eTIMS, withholding tax, and customs datasets. Expenses not supported by an eTIMS invoice are systematically disallowed. The implication for sellers: a missing CU-INV is no longer a soft issue — the buyer loses the deduction and will refuse to settle. The implication for buyers: build vendor-onboarding controls that confirm every supplier is eTIMS-active.</p><h2 id="checklist">Pre-go-live compliance checklist</h2><p class="block-answer" data-answer="true">Pre-go-live compliance checklist includes: ☐ KRA PIN active and eTIMS service enabled on iTax.   ☐ eTIMS variant chosen and credential provisioned.</p><ul>
        <li>☐ KRA PIN active and eTIMS service enabled on iTax.</li>
        <li>☐ eTIMS variant chosen and credential provisioned.</li>
        <li>☐ Invoicing platform integrated; sandbox submission returns a valid CU-INV.</li>
        <li>☐ Buyer PIN validation enabled on the platform.</li>
        <li>☐ Buyer PDF template includes the CU-INV and the KRA QR in mandatory positions.</li>
        <li>☐ NTP clock-drift alert configured.</li>
        <li>☐ Retry-and-queue policy in place for KRA downtime.</li>
        <li>☐ Vendor-side onboarding checks confirm suppliers are eTIMS-active.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.kra.go.ke/helping-tax-payers/faqs/learn-about-etims" rel="noopener noreferrer">KRA — Learn about eTIMS (official FAQ)</a></li>
        <li><a href="https://www.kra.go.ke/news-center/public-notices/2077-electronic-tax-invoicing-for-non-vat-registered-persons" rel="noopener noreferrer">KRA public notice — eTIMS for non-VAT-registered persons</a></li>
        <li><a href="https://www.kra.go.ke/images/publications/OSCU_VSCU_Step-by-Step_Guide-on-how-to-sign-up.pdf" rel="noopener noreferrer">KRA — OSCU and VSCU step-by-step sign-up guide (PDF)</a></li>
        <li><a href="https://assets.kpmg.com/content/dam/kpmgsites/ke/pdf/thought_leaderships/tax/2026/eTIMS.pdf.coredownload.inline.pdf" rel="noopener noreferrer">KPMG Kenya — eTIMS and the 2026 shift to data-driven validation</a></li>
        <li><a href="https://itax.kra.go.ke/KRA-Portal/" rel="noopener noreferrer">KRA iTax portal — taxpayer service login</a></li>
        <li><a href="https://etims.kra.go.ke/" rel="noopener noreferrer">KRA eTIMS portal — Control Unit verification</a></li>
      </ul><h2>TL;DR</h2><p class="block-answer" data-answer="true">Register on iTax, pick the eTIMS variant that fits your scale, provision the credential, post signed payloads to the API, print the CU-INV and QR on every buyer PDF.  From January 2026 the CU-INV directly drives income-tax deductibility — there is no longer any operating model where it is optional.</p><p>Register on iTax, pick the eTIMS variant that fits your scale, provision the credential, post signed payloads to the API, print the CU-INV and QR on every buyer PDF. From January 2026 the CU-INV directly drives income-tax deductibility — there is no longer any operating model where it is optional.</p><h2>Related reading</h2><p class="block-answer" data-answer="true">Related reading includes: KRA eTIMS — Invoicemonk's Kenya implementation KRA eTIMS explained: scope, variants, VAT, timeline</p><ul>
        <li><a href="/__LANG__/e-invoicing/kra-etims-kenya">KRA eTIMS — Invoicemonk's Kenya implementation</a></li>
        <li><a href="/__LANG__/blog/kra-etims-kenya-explained">KRA eTIMS explained: scope, variants, VAT, timeline</a></li>
        <li><a href="/__LANG__/blog/clearance-vs-reporting-models">Clearance vs reporting models</a></li>
        <li><a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">Choosing an e-invoicing platform — buyer's checklist</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with KRA eTIMS in Kenya, a taxpayer must register on the iTax portal under an active KRA PIN, pick the eTIMS variant that matches operating scale (eTIMS Lite for web entry, eTIMS Online for API integration, OSCU / VSCU for higher-volume sales control, Multi-Paypoint for multi-branch retailers), provision the KRA-onboarded signing credential bound to the PIN, build a signed payload containing seller and buyer KRA PINs plus the 16% VAT breakdown, submit it to the eTIMS API to receive a Control Unit Invoice Number (CU-INV) and QR pointing to KRA's verification endpoint, then print the CU-INV and QR on the buyer PDF — without which the invoice is not legally valid for VAT or income-tax expense deduction.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['eTIMS', 'Kenya', 'KRA', 'VAT', 'e-invoicing', 'compliance', 'how-to'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-kra-etims-kenya.jpg',
    featuredImageAlt: 'Editorial illustration of Kenya\'s KRA eTIMS device and invoice flow for the how to comply with kra etims kenya guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/kra-etims-kenya',
    semanticKeywords: ['KRA eTIMS', 'Kenya e-invoicing', 'Control Unit Invoice Number', 'CU-INV', 'eTIMS Lite Online OSCU VSCU', 'Multi-Paypoint', 'iTax', 'non-VAT taxpayer eTIMS', 'eTIMS income tax 2026', '16% VAT Kenya'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'ke',
    faq: [
      { question: 'Which eTIMS variant should I pick?', answer: 'eTIMS Online (API) for businesses with their own invoicing system — what Invoicemonk integrates with. eTIMS Lite for very low-volume web entry; OSCU / VSCU for high-volume sales-control flows; Multi-Paypoint for multi-branch retailers. Many operators run more than one variant under the same PIN.' },
      { question: 'Is eTIMS only for VAT-registered businesses?', answer: 'No. KRA extended eTIMS to all persons carrying on business from 1 September 2023, including non-VAT-registered taxpayers. From 1 January 2024 any expense not supported by an eTIMS invoice is disallowed against income tax.' },
      { question: 'What is the Control Unit Invoice Number?', answer: 'The KRA-issued unique identifier returned by eTIMS after the payload clears validation. The CU-INV — together with the embedded QR — is the buyer\'s proof that KRA validated the invoice and is what unlocks input VAT recovery and income-tax deductibility.' },
      { question: 'What changes for income tax from 1 January 2026?', answer: 'KRA now systematically validates income-tax returns against eTIMS, withholding-tax, and customs datasets. Expenses without an eTIMS invoice are auto-disallowed — turning every missing CU-INV into a direct tax cost for the buyer.' },
      { question: 'What happens if KRA is down at issuance time?', answer: 'Invoicemonk queues the payload and retries with back-off. The invoice cannot be legally final without the CU-INV; the seller can issue a proforma to operate the transaction while the cleared version is pending, then send the cleared invoice with CU-INV and QR once KRA responds.' },
      { question: 'Does eTIMS apply to B2C sales?', answer: 'Yes. Both B2B and B2C invoices go through eTIMS and receive a CU-INV. OSCU and Multi-Paypoint were built for retail B2C flow specifically.' },
      { question: 'Can a foreign supplier issue an eTIMS invoice?', answer: 'No — eTIMS scope is the Kenyan taxpayer. For imports of services from foreign suppliers, the Kenyan buyer self-accounts for VAT under KRA reverse-charge guidance; the buyer still records the transaction in their books with supporting documentation but no CU-INV is generated.' },
    ],
    relatedTools: [
      { label: 'KRA eTIMS source page', url: '/e-invoicing/kra-etims-kenya', description: 'How Invoicemonk implements KRA eTIMS for Kenya' },
      { label: 'KRA eTIMS explained', url: '/blog/kra-etims-kenya-explained', description: 'Scope, variants, VAT, 2026 income-tax linkage' },
      { label: 'Choosing an e-invoicing platform', url: '/blog/choosing-an-e-invoicing-platform-checklist', description: 'Buyer-side checklist including KRA eTIMS coverage' },
    ],
  },

  // ============================================================
  // KRA eTIMS Kenya — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'kra-etims-kenya-explained',
    title: 'KRA eTIMS Kenya Explained: Scope, Variants, VAT Handling, and the 2026 Income-Tax Linkage',
    excerpt: 'A plain-English explainer for KRA eTIMS — what the Electronic Tax Invoice Management System is, who must comply (including non-VAT taxpayers), how the eTIMS variants differ, what 16% / 8% / 0% VAT handling looks like, and how 2026 income-tax validation rewires the stakes.',
    content: `<p><strong>KRA eTIMS (Electronic Tax Invoice Management System) is Kenya's national clearance regime: every in-scope invoice is signed with a KRA-onboarded credential, posted to the eTIMS API, assigned a Control Unit Invoice Number, and printed on the buyer PDF together with a KRA-verification QR. Scope has been universal since 1 September 2023, covering VAT-registered and non-VAT-registered taxpayers alike; from 1 January 2024 expenses without an eTIMS invoice are disallowed for income tax, and from 1 January 2026 KRA systematically validates income-tax returns against eTIMS, withholding, and customs data.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Kenya Revenue Authority (KRA).</li>
          <li><strong>Model:</strong> Clearance — every in-scope invoice goes through eTIMS before it is legally valid.</li>
          <li><strong>Scope:</strong> All persons carrying on business in Kenya from 1 September 2023 (VAT and non-VAT).</li>
          <li><strong>Variants:</strong> eTIMS Lite, eTIMS Online (API), OSCU, VSCU, Multi-Paypoint.</li>
          <li><strong>VAT rates:</strong> 16% standard, 8% on select fuel items, 0% zero-rated, exempt categories.</li>
          <li><strong>Income-tax tie-in:</strong> Expense disallowance from 1 January 2024; systematic 2026 cross-validation.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what">What eTIMS actually is</a></li>
          <li><a href="#scope">Who must comply today</a></li>
          <li><a href="#variants">The eTIMS variants compared</a></li>
          <li><a href="#payload">What the payload must contain</a></li>
          <li><a href="#vat">VAT handling — 16% / 8% / 0% / exempt</a></li>
          <li><a href="#consequences">VAT and income-tax consequences of non-compliance</a></li>
          <li><a href="#2026">The 2026 data-driven validation shift</a></li>
          <li><a href="#vs">How eTIMS differs from other clearance regimes</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where eTIMS sits among global mandates</h2><p class="block-answer" data-answer="true">eTIMS is part of the clearance-model wave — alongside ZATCA Phase 2, MyInvois, NRS / FIRS MBS, and GST IRN.</p><p>eTIMS is part of the clearance-model wave — alongside <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a>, <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois</a>, <a href="/__LANG__/e-invoicing/firs-mbs-nigeria">NRS / FIRS MBS</a>, and <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN</a>. Kenya's distinguishing trait is the variant catalogue: a single payload contract surfaced through five operating modes, so a sole trader with a smartphone and a national retailer both have a sanctioned path to the same CU-INV outcome.</p><h2 id="what">What eTIMS actually is</h2><p class="block-answer" data-answer="true">eTIMS sits between seller and buyer as a mandatory validator.  The seller signs the payload with a KRA credential, submits, and only proceeds to the buyer after KRA returns a Control Unit Invoice Number and a QR resolving to KRA's public verification endpoint.</p><p>eTIMS sits between seller and buyer as a mandatory validator. The seller signs the payload with a KRA credential, submits, and only proceeds to the buyer after KRA returns a Control Unit Invoice Number and a QR resolving to KRA's public verification endpoint. Without the CU-INV, the invoice is not legally valid for the buyer's input VAT — and from 1 January 2024, not deductible against income tax.</p><h2 id="scope">Who must comply today</h2><p class="block-answer" data-answer="true">VAT-registered businesses — in scope since the eTIMS rollout opened.  Non-VAT-registered persons — extended scope from 1 September 2023 per KRA public notice.</p><ul>
        <li><strong>VAT-registered businesses</strong> — in scope since the eTIMS rollout opened.</li>
        <li><strong>Non-VAT-registered persons</strong> — extended scope from 1 September 2023 per KRA public notice.</li>
        <li><strong>Sole traders, partnerships, companies, NGOs, cooperatives</strong> — universally in scope.</li>
        <li><strong>Foreign suppliers</strong> — out of direct scope; the Kenyan buyer self-accounts under KRA reverse-charge guidance.</li>
      </ul><h2 id="variants">The eTIMS variants compared</h2><table>
        <thead><tr><th>Variant</th><th>Best for</th><th>Connectivity</th><th>Form factor</th></tr></thead>
        <tbody>
          <tr><td>eTIMS Lite</td><td>Sole traders, very low volume</td><td>Online only</td><td>Web portal</td></tr>
          <tr><td>eTIMS Online</td><td>Cloud invoicing software users</td><td>Online API</td><td>Software API</td></tr>
          <tr><td>OSCU</td><td>Brick-and-mortar retail with persistent connectivity</td><td>Online</td><td>KRA-issued physical device</td></tr>
          <tr><td>VSCU</td><td>Mid-volume cloud retail / service</td><td>Online</td><td>Software-only Control Unit</td></tr>
          <tr><td>Multi-Paypoint</td><td>Multi-branch retailers</td><td>Online per branch</td><td>One Control Unit per branch</td></tr>
        </tbody>
      </table><h2 id="payload">What the payload must contain</h2><p class="block-answer" data-answer="true">Seller and buyer KRA PINs, validated against the KRA registry.  Line items with HS code or KRA classification.</p><ul>
        <li>Seller and buyer KRA PINs, validated against the KRA registry.</li>
        <li>Line items with HS code or KRA classification.</li>
        <li>The VAT breakdown per line and per rate band.</li>
        <li>Currency, payment terms, and invoice type code.</li>
        <li>A digital signature bound to the seller's eTIMS credential.</li>
      </ul><h2 id="vat">VAT handling — 16% / 8% / 0% / exempt</h2><p class="block-answer" data-answer="true">VAT handling — 16% / 8% / 0% / exempt includes: 16% standard — most taxable supplies of goods and services.   8% — applies to certain fuel and energy items under the VAT Act.</p><ul>
        <li><strong>16% standard</strong> — most taxable supplies of goods and services.</li>
        <li><strong>8%</strong> — applies to certain fuel and energy items under the VAT Act.</li>
        <li><strong>0% zero-rated</strong> — exports, certain food and agricultural items per VAT Act Second Schedule.</li>
        <li><strong>Exempt</strong> — health, education, financial services on the exemption schedule.</li>
      </ul><h2 id="consequences">VAT and income-tax consequences of non-compliance</h2><p class="block-answer" data-answer="true">Without a CU-INV, the invoice is not legally valid for the buyer's input VAT recovery.  KRA also disallows the underlying expense for income tax.</p><p>Without a CU-INV, the invoice is not legally valid for the buyer's input VAT recovery. KRA also disallows the underlying expense for income tax. Operationally, buyers refuse to settle non-eTIMS invoices because their finance teams now know the expense will be denied; sellers who cannot issue compliant invoices lose contracts quickly.</p><h2 id="2026">The 2026 data-driven validation shift</h2><p class="block-answer" data-answer="true">From 1 January 2026, KRA systematically validates income-tax returns against the cross-system datasets: eTIMS invoice records, withholding-tax returns, and customs import data.</p><p>From 1 January 2026, KRA systematically validates income-tax returns against the cross-system datasets: eTIMS invoice records, withholding-tax returns, and customs import data. If your declared deductible expenses do not reconcile to eTIMS-supported invoices, KRA disallows them in the system and triggers reassessment. This makes eTIMS coverage on the supplier side a vendor-onboarding requirement, not a back-office hygiene point.</p><h2 id="vs">How eTIMS differs from other clearance regimes</h2><p class="block-answer" data-answer="true">The five-variant catalogue is unique.</p><p>The five-variant catalogue is unique. ZATCA Phase 2 expects every taxpayer to operate through a single signed-XML flow; MyInvois has one API contract with portal fallback; India's IRN is API-only. Kenya recognised early that "one path fits all" excludes a long tail of small operators, so eTIMS shipped with low-overhead variants. The cost is integrator complexity — Invoicemonk's eTIMS layer abstracts the differences. For the broader architectural map, see <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.kra.go.ke/helping-tax-payers/faqs/learn-about-etims" rel="noopener noreferrer">KRA — Learn about eTIMS (official FAQ)</a></li>
        <li><a href="https://www.kra.go.ke/news-center/public-notices/2077-electronic-tax-invoicing-for-non-vat-registered-persons" rel="noopener noreferrer">KRA public notice — eTIMS for non-VAT-registered persons</a></li>
        <li><a href="https://www.kra.go.ke/images/publications/OSCU_VSCU_Step-by-Step_Guide-on-how-to-sign-up.pdf" rel="noopener noreferrer">KRA — OSCU and VSCU sign-up guide (PDF)</a></li>
        <li><a href="https://assets.kpmg.com/content/dam/kpmgsites/ke/pdf/thought_leaderships/tax/2026/eTIMS.pdf.coredownload.inline.pdf" rel="noopener noreferrer">KPMG Kenya tax alert — eTIMS and 2026 income-tax validation</a></li>
        <li><a href="https://etims.kra.go.ke/" rel="noopener noreferrer">KRA eTIMS portal — Control Unit verification</a></li>
        <li><a href="https://www.kra.go.ke/" rel="noopener noreferrer">KRA homepage — notices, regulations, and policy updates</a></li>
      </ul><h2>TL;DR</h2><p class="block-answer" data-answer="true">eTIMS is universal in Kenya, ships in five variants, and from January 2026 directly drives income-tax deductibility through KRA's cross-system validation.  Variants matter for how you operate; the CU-INV outcome is the same — and increasingly non-negotiable.</p><p>eTIMS is universal in Kenya, ships in five variants, and from January 2026 directly drives income-tax deductibility through KRA's cross-system validation. Variants matter for how you operate; the CU-INV outcome is the same — and increasingly non-negotiable.</p><h2>Related reading</h2><p class="block-answer" data-answer="true">Related reading includes: KRA eTIMS — Invoicemonk's Kenya implementation How to comply with KRA eTIMS — step-by-step</p><ul>
        <li><a href="/__LANG__/e-invoicing/kra-etims-kenya">KRA eTIMS — Invoicemonk's Kenya implementation</a></li>
        <li><a href="/__LANG__/blog/how-to-comply-with-kra-etims-kenya">How to comply with KRA eTIMS — step-by-step</a></li>
        <li><a href="/__LANG__/blog/clearance-vs-reporting-models">Clearance vs reporting models</a></li>
        <li><a href="/__LANG__/blog/what-is-csid">What is a CSID? (ZATCA's analogue to the eTIMS credential)</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> KRA eTIMS (Electronic Tax Invoice Management System) is Kenya's national clearance regime: every in-scope invoice is signed with a KRA-onboarded credential, posted to the eTIMS API, assigned a Control Unit Invoice Number, and printed on the buyer PDF together with a KRA-verification QR. Scope has been universal since 1 September 2023, covering VAT-registered and non-VAT-registered taxpayers alike; from 1 January 2024 expenses without an eTIMS invoice are disallowed for income tax, and from 1 January 2026 KRA systematically validates income-tax returns against eTIMS, withholding, and customs data.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['eTIMS', 'Kenya', 'KRA', 'VAT', 'e-invoicing', 'explainer'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/kra-etims-kenya-explained.jpg',
    featuredImageAlt: 'Editorial illustration of Kenya\'s KRA eTIMS device and invoice flow for the kra etims kenya explained guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/kra-etims-kenya',
    semanticKeywords: ['KRA eTIMS explained', 'Kenya e-invoicing scope', 'eTIMS variants comparison', 'OSCU VSCU Multi-Paypoint', 'eTIMS non-VAT taxpayer', '16% VAT Kenya', 'CU-INV', 'eTIMS income tax 2026', 'KRA cross-system validation', 'data-driven tax administration'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'ke',
    faq: [
      { question: 'Is eTIMS mandatory in Kenya?', answer: 'Yes. KRA extended scope to all persons carrying on business from 1 September 2023 — VAT-registered and non-VAT-registered alike. Confirm your status on iTax.' },
      { question: 'Does eTIMS apply to B2C invoices?', answer: 'Yes. The B2C invoice goes through eTIMS and receives a Control Unit Invoice Number just like a B2B invoice. OSCU and Multi-Paypoint were specifically built for retail B2C operating models.' },
      { question: 'What happens if eTIMS is down?', answer: 'Without a Control Unit Invoice Number the invoice is not legally valid for input VAT recovery. Invoicemonk queues the payload and retries until KRA responds; sellers typically issue a proforma to operate the transaction while the cleared version is pending.' },
      { question: 'What is the 2026 income-tax validation change?', answer: 'From 1 January 2026, KRA systematically validates income-tax returns against eTIMS, withholding-tax, and customs datasets. Expenses without an eTIMS invoice are auto-disallowed in the system.' },
      { question: 'Can I run more than one eTIMS variant?', answer: 'Yes — many operators run OSCU at till points for B2C and eTIMS Online for B2B back-office invoicing under the same KRA PIN. KRA stitches the data together at the PIN level.' },
      { question: 'Is there a cost for the eTIMS software?', answer: 'No. KRA provides the eTIMS Lite portal and Online client software free of charge. Costs arise when you integrate eTIMS into a broader invoicing platform or buy POS hardware for OSCU.' },
      { question: 'How is eTIMS different from the older TIMS / ETR regime?', answer: 'TIMS relied on physical ETR devices for VAT-registered traders. eTIMS adds a software layer (Online, VSCU) that extends scope to non-VAT taxpayers and to cloud invoicing software, and provides the API contract that the 2026 income-tax validation builds on.' },
    ],
    relatedTools: [
      { label: 'KRA eTIMS source page', url: '/e-invoicing/kra-etims-kenya', description: 'How Invoicemonk implements KRA eTIMS for Kenya' },
      { label: 'How to comply with KRA eTIMS', url: '/blog/how-to-comply-with-kra-etims-kenya', description: 'Step-by-step onboarding and CU-INV walkthrough' },
      { label: 'Clearance vs reporting models', url: '/blog/clearance-vs-reporting-models', description: 'Where eTIMS sits in the global e-invoicing landscape' },
    ],
  },

  // ============================================================
  // Outer entity — ICP-Brasil A1 certificates
  // ============================================================
  {
    slug: 'icp-brasil-a1-certificates',
    title: 'ICP-Brasil A1 Certificates Explained: Why Brazilian E-Invoicing (NF-e and NFS-e) Depends on Them',
    excerpt: 'An ICP-Brasil A1 certificate is the digital identity Brazilian taxpayers use to sign NF-e and NFS-e invoices. This guide explains A1 vs A3, how an Autoridade Certificadora issues them, how XML-DSig / XAdES signs every payload before SEFAZ, and how to operate annual renewal.',
    content: `<p><strong>An ICP-Brasil A1 certificate is the software-resident digital identity that Brazilian taxpayers use to sign every NF-e (goods) and NFS-e (services) invoice before transmission to SEFAZ. It is issued by an ITI-accredited Autoridade Certificadora, bound to a CNPJ, valid for one year, and loaded into the invoicing platform's key store to sign the canonicalised XML payload using XML-DSig (XAdES profile). Without an active A1 (or the hardware-resident A3 equivalent), SEFAZ rejects every payload and all NF-e / NFS-e issuance stops.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Governance:</strong> ICP-Brasil (Infraestrutura de Chaves Públicas Brasileira), regulated by ITI (Instituto Nacional de Tecnologia da Informação).</li>
          <li><strong>Legal hook:</strong> MP 2.200-2/2001 — establishes ICP-Brasil signatures as legally equivalent to handwritten signatures.</li>
          <li><strong>Format A1:</strong> Software-resident certificate (.pfx / .p12), 1-year validity.</li>
          <li><strong>Format A3:</strong> Hardware-resident certificate (smart card / USB token), up to 3-year validity.</li>
          <li><strong>Bound to:</strong> A specific CNPJ (legal entity).</li>
          <li><strong>Issued by:</strong> ITI-accredited Autoridades Certificadoras (Serasa, Serpro, Soluti, Certisign, AC Safeweb, Valid, others).</li>
          <li><strong>Signing format:</strong> XML-DSig with the Brazilian XAdES profile.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what">What ICP-Brasil is</a></li>
          <li><a href="#a1-a3">A1 vs A3 certificates</a></li>
          <li><a href="#issue">How an A1 certificate is issued</a></li>
          <li><a href="#sign">How an A1 signs an NF-e</a></li>
          <li><a href="#renewal">Renewal and rotation</a></li>
          <li><a href="#beyond">Where else this matters</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where ICP-Brasil sits in the global e-invoicing landscape</h2><p class="block-answer" data-answer="true">The ICP-Brasil A1 certificate is conceptually identical to ZATCA's CSID in Saudi Arabia or the FIRS-issued signing credential in Nigeria: a national-PKI-rooted, taxpayer-bound credential without which the clearance regime rejects the payload.</p><p>The ICP-Brasil A1 certificate is conceptually identical to ZATCA's <a href="/__LANG__/blog/what-is-csid">CSID</a> in Saudi Arabia or the FIRS-issued signing credential in Nigeria: a national-PKI-rooted, taxpayer-bound credential without which the clearance regime rejects the payload. Brazil's distinguishing trait is the depth and age of the AC market (over 20 years of ICP-Brasil-accredited issuers) and the bifurcation into A1 (software) and A3 (hardware) profiles.</p><h2 id="what">What ICP-Brasil is</h2><p class="block-answer" data-answer="true">ICP-Brasil is Brazil's national public-key infrastructure, governed by ITI under MP 2. 200-2/2001.</p><p>ICP-Brasil is Brazil's national public-key infrastructure, governed by ITI under MP 2.200-2/2001. Every digital signature with legal validity in Brazil — for fiscal documents, contracts, notarial acts, government submissions — chains back to an ICP-Brasil root. The Brazilian e-invoicing regimes (<a href="/__LANG__/e-invoicing/sef-brazil">SEFAZ NF-e for goods, NFS-e for services</a>) make the ICP-Brasil signature mandatory at issuance.</p><h2 id="a1-a3">A1 vs A3 certificates</h2><table>
        <thead><tr><th>Attribute</th><th>A1</th><th>A3</th></tr></thead>
        <tbody>
          <tr><td>Storage</td><td>Software file (.pfx / .p12)</td><td>Smart card or USB token</td></tr>
          <tr><td>Validity</td><td>1 year</td><td>Up to 3 years</td></tr>
          <tr><td>Issuance cost</td><td>Lower</td><td>Higher (includes hardware)</td></tr>
          <tr><td>Server-side signing</td><td>Native fit — load into HSM-backed key store</td><td>Awkward — requires PKCS#11 + physical reader</td></tr>
          <tr><td>Best for</td><td>Cloud invoicing platforms, headless integrations</td><td>Manual signing by a named officer</td></tr>
        </tbody>
      </table><p>For SEFAZ NF-e and NFS-e issued through cloud invoicing software, A1 is the standard choice — the certificate is loaded into the platform's HSM-backed key store and used to sign every payload programmatically. A3 makes sense when a named legal officer signs manually (notarial flows, sworn declarations).</p><h2 id="issue">How an A1 certificate is issued</h2><p class="block-answer" data-answer="true">Choose an ITI-accredited Autoridade Certificadora (AC) — Serasa, Serpro, Soluti, AC Certisign, AC Safeweb, Valid, and others on the ITI register.  The AC validates the legal entity's identity in person or via approved videoconference.</p><ol>
        <li>Choose an ITI-accredited Autoridade Certificadora (AC) — Serasa, Serpro, Soluti, AC Certisign, AC Safeweb, Valid, and others on the ITI register.</li>
        <li>The AC validates the legal entity's identity in person or via approved videoconference. The identity check is strict to maintain the chain of trust.</li>
        <li>The AC issues the A1 certificate file bound to the legal entity's CNPJ, with a passphrase.</li>
        <li>The certificate is loaded into the invoicing platform's key store; the passphrase is sealed in a vault.</li>
      </ol><h2 id="sign">How an A1 signs an NF-e</h2><p class="block-answer" data-answer="true">The invoicing platform builds the NF-e XML according to the SEFAZ schema for the relevant state.  The platform canonicalises the XML.</p><ol>
        <li>The invoicing platform builds the NF-e XML according to the SEFAZ schema for the relevant state.</li>
        <li>The platform canonicalises the XML.</li>
        <li>It computes a hash over the canonicalised XML.</li>
        <li>The A1 private key signs the hash using XML-DSig (the Brazilian XAdES profile).</li>
        <li>The signed NF-e is transmitted to the SEFAZ webservice for the issuing state.</li>
        <li>SEFAZ verifies the signature, validates the payload, and returns an authorisation protocol with the <em>chave de acesso</em> — the 44-digit access key that becomes the invoice's national identifier.</li>
      </ol><h2 id="renewal">Renewal and rotation</h2><p class="block-answer" data-answer="true">A1 certificates expire annually.</p><p>A1 certificates expire annually. Operationally:</p><ul>
        <li>Set an expiry alert at least 30 days ahead. Invoicemonk raises a banner on every login as expiry approaches.</li>
        <li>Renew through the same AC (or a different one — your choice). Identity validation is required again at renewal.</li>
        <li>Load the new certificate into the platform before the old one expires; an expired A1 means SEFAZ rejects every payload, blocking all NF-e and NFS-e issuance.</li>
        <li>Archive the expired certificate for the statutory retention period (five years for fiscal documents).</li>
      </ul><h2 id="beyond">Where else this matters</h2><p class="block-answer" data-answer="true">The ICP-Brasil model — a national-PKI-rooted signing credential bound to the taxpayer's identity — parallels the ZATCA CSID in Saudi Arabia, the FIRS Nigeria signing credential, and the LHDN-onboarded certificate in MyInvois Malaysia.</p><p>The ICP-Brasil model — a national-PKI-rooted signing credential bound to the taxpayer's identity — parallels the <a href="/__LANG__/blog/what-is-csid">ZATCA CSID</a> in Saudi Arabia, the FIRS Nigeria signing credential, and the LHDN-onboarded certificate in <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois Malaysia</a>. The signing format (XML-DSig with XAdES profile) is the same family used by ZATCA Phase 2 and the EU EN 16931 standard.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.gov.br/iti/pt-br" rel="noopener noreferrer">ITI — Instituto Nacional de Tecnologia da Informação (ICP-Brasil regulator)</a></li>
        <li><a href="https://www.gov.br/iti/pt-br/assuntos/icp-brasil" rel="noopener noreferrer">ITI — ICP-Brasil official page</a></li>
        <li><a href="https://www.planalto.gov.br/ccivil_03/MPV/Antigas_2001/2200-2.htm" rel="noopener noreferrer">Medida Provisória 2.200-2/2001 — legal basis for ICP-Brasil signatures</a></li>
        <li><a href="https://www.nfe.fazenda.gov.br/portal/principal.aspx" rel="noopener noreferrer">Portal NF-e — SEFAZ NF-e national portal</a></li>
        <li><a href="https://www.gov.br/iti/pt-br/assuntos/icp-brasil/legislacao" rel="noopener noreferrer">ITI — ICP-Brasil legislation and AC list</a></li>
        <li><a href="https://www.w3.org/TR/xmldsig-core1/" rel="noopener noreferrer">W3C — XML Signature Syntax and Processing (XML-DSig spec)</a></li>
      </ul><h2>TL;DR</h2><p class="block-answer" data-answer="true">A1 is the software-resident, CNPJ-bound, AC-issued, 1-year ICP-Brasil certificate that signs every Brazilian e-invoice before SEFAZ.  Without it, nothing ships.</p><p>A1 is the software-resident, CNPJ-bound, AC-issued, 1-year ICP-Brasil certificate that signs every Brazilian e-invoice before SEFAZ. Without it, nothing ships. Renew before expiry, keep the passphrase in a vault, and treat the rotation calendar as critical infrastructure — not as IT housekeeping.</p><h2>Related reading</h2><p class="block-answer" data-answer="true">Related reading includes: SEFAZ Brazil — Invoicemonk's NF-e and NFS-e implementation What is a CSID?</p><ul>
        <li><a href="/__LANG__/e-invoicing/sef-brazil">SEFAZ Brazil — Invoicemonk's NF-e and NFS-e implementation</a></li>
        <li><a href="/__LANG__/blog/what-is-csid">What is a CSID? (ZATCA's analogue)</a></li>
        <li><a href="/__LANG__/blog/clearance-vs-reporting-models">Clearance vs reporting models</a></li>
        <li><a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">Choosing an e-invoicing platform — buyer's checklist</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> An ICP-Brasil A1 certificate is the software-resident digital identity that Brazilian taxpayers use to sign every NF-e (goods) and NFS-e (services) invoice before transmission to SEFAZ. It is issued by an ITI-accredited Autoridade Certificadora, bound to a CNPJ, valid for one year, and loaded into the invoicing platform's key store to sign the canonicalised XML payload using XML-DSig (XAdES profile). Without an active A1 (or the hardware-resident A3 equivalent), SEFAZ rejects every payload and all NF-e / NFS-e issuance stops.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ICP-Brasil', 'NF-e', 'NFS-e', 'Brazil', 'digital certificate', 'glossary'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-11-20',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/icp-brasil-a1-certificates.jpg',
    featuredImageAlt: 'ICP-Brasil A1 certificate provisioning and NF-e signing flow',
    pillarContent: false,
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['ICP-Brasil A1', 'ICP-Brasil A3', 'NF-e digital signature', 'Brazilian PKI', 'Autoridade Certificadora', 'XML-DSig XAdES', 'chave de acesso', 'MP 2200-2', 'CNPJ certificate', 'ITI Brasil'],
    priority: 'P2',
    lastAudited: '2026-11-20',
    faq: [
      { question: 'Which certificate type — A1 or A3?', answer: 'A1 for cloud invoicing platforms (server-side signing). A3 only if your workflow requires a physical smart card or USB token at the point of signing — rare for B2B SaaS invoicing.' },
      { question: 'How long is an A1 certificate valid?', answer: 'One year. Rotate via an ITI-accredited Autoridade Certificadora before expiry — an expired certificate means SEFAZ rejects every payload and all NF-e / NFS-e issuance stops.' },
      { question: 'Can I share one A1 across multiple companies?', answer: 'No. The A1 is bound to a single CNPJ. Each legal entity needs its own certificate, even within a corporate group.' },
      { question: 'What is the legal basis for ICP-Brasil signatures?', answer: 'Medida Provisória 2.200-2/2001 establishes ICP-Brasil digital signatures as legally equivalent to handwritten signatures for all purposes recognised by Brazilian law.' },
      { question: 'Does NFS-e use the same A1 certificate as NF-e?', answer: 'Yes. NFS-e (services) and NF-e (goods) both rely on the same ICP-Brasil A1 bound to the issuing CNPJ. NFS-e is administered municipally and the SEFAZ webservice differs, but the signing credential is the same.' },
      { question: 'What happens at the moment my A1 expires?', answer: 'The next NF-e or NFS-e submission to SEFAZ is rejected with a signature-validation error. Issuance stops until the new A1 is loaded — that is why Invoicemonk surfaces a 30-day pre-expiry banner and recommends a 14-day overlap window.' },
      { question: 'Can I move my A1 between providers?', answer: 'Yes. The A1 file is portable. Export from the source platform\'s key store, import to the destination, and unseal with the original passphrase. The CNPJ binding is unchanged.' },
    ],
    relatedTools: [
      { label: 'SEFAZ Brazil source page', url: '/e-invoicing/sef-brazil', description: 'How Invoicemonk implements SEFAZ NF-e and NFS-e for Brazil' },
      { label: 'What is a CSID?', url: '/blog/what-is-csid', description: 'ZATCA\'s national-PKI analogue to ICP-Brasil' },
      { label: 'Clearance vs reporting models', url: '/blog/clearance-vs-reporting-models', description: 'How the credential layer fits into the global model split' },
    ],
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
eInvoicingClusterPostsBatch5.forEach(post => {
  if (!blogPosts.find(p => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
