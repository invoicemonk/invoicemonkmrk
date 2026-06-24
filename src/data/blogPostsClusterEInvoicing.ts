import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';
import { blogPosts } from './blogPosts';


/**
 * Blog Posts Cluster — E-Invoicing (Batch 1: ZATCA Phase 2 + Phase 1).
 *
 * Supportive layer (Koray) under the central pillar /e-invoicing and the
 * sub-central source pages /e-invoicing/zatca-phase-2 and /e-invoicing/zatca-phase-1.
 *
 * Article contract enforced in this batch:
 *  - Hero direct-answer paragraph (40–60 words) for AI Overviews.
 *  - At-a-glance fact box of entity-attribute-value triples.
 *  - Table of contents nav.
 *  - Macro context → micro context (fan-out H3 questions).
 *  - Comparative / differential section.
 *  - Implementation walkthrough / error catalogue / glossary expansion.
 *  - Compliance checklist.
 *  - Authority Sources block (zatca.gov.sa primary).
 *  - Key takeaways block.
 *  - Related reading (pillar, sub-source, siblings, glossary).
 *  - Expanded FAQ (5–7 questions).
 */
export const eInvoicingClusterPosts: BlogPost[] = [
  // ============================================================
  // ZATCA Phase 2 — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-zatca-phase-2',
    title: 'How to Comply with ZATCA Phase 2: Onboarding and Your First Cleared Invoice (2026)',
    excerpt: 'Saudi VAT-registered playbook: request a CSID, generate UBL 2.1 KSA-extension XML, apply XAdES signing, attach the TLV QR, and clear your first invoice through ZATCA Fatoora.',
    content: `<p><strong>To comply with ZATCA Phase 2, a VAT-registered Saudi taxpayer must onboard a compliant Solution Unit on the <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 mandate</a>: generate a CSR, exchange an OTP from the Fatoora portal for a Compliance CSID, pass the four invoice-type compliance checks, promote to a Production CSID, then either clear B2B Standard Tax Invoices in real time or report B2C Simplified Tax Invoices within 24 hours.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Zakat, Tax and Customs Authority (ZATCA)</li>
          <li><strong>Mandate:</strong> Integration Phase (Phase 2) of Fatoorah</li>
          <li><strong>Artefact:</strong> UBL 2.1 XML with KSA extensions + XAdES B-B signature + TLV QR</li>
          <li><strong>Transport:</strong> ZATCA Clearance API (B2B) / Reporting API (B2C, &lt;24 h)</li>
          <li><strong>Applies to:</strong> All VAT-registered persons in KSA, called by wave</li>
          <li><strong>Live since:</strong> 1 January 2023 (Wave 1)</li>
          <li><strong>Last reviewed:</strong> 23 June 2026 against the ZATCA E-Invoice XML Implementation Standard</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#prereqs">Pre-requisites</a></li>
          <li><a href="#onboarding">Onboarding sequence (CSR → Compliance CSID → Production CSID)</a></li>
          <li><a href="#first-invoice">Issuing your first cleared invoice</a></li>
          <li><a href="#archive">Archive and audit</a></li>
          <li><a href="#checklist">Go-live compliance checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where Phase 2 sits in the global e-invoicing landscape</h2><p class="block-answer" data-answer="true">ZATCA Phase 2 is a Continuous Transaction Controls (CTC) regime in the clearance family — the same category as Italy's SdI, Türkiye's e-Fatura, and India's IRP.</p><p>ZATCA Phase 2 is a <em>Continuous Transaction Controls (CTC)</em> regime in the clearance family — the same category as Italy's SdI, Türkiye's e-Fatura, and India's IRP. Invoices flow through a state-operated platform that validates and (for B2B) clears them before they reach the buyer. Mexico's CFDI was the original reference architecture; ZATCA's twist is a hash-chain plus cryptographic stamp at the issuer side, which makes the local invoice the legal original even after clearance.</p><p>This matters because anyone moving from a post-audit jurisdiction (UK, US, most of Europe before 2030) is unprepared for the <em>pre-clearance gate</em>: once Phase 2 is live for your wave, an unpassed B2B invoice is legally not an invoice. Build the sequence below before, not during, the integration window.</p><h2 id="prereqs">What you need before you start</h2><p class="block-answer" data-answer="true">Active Saudi VAT registration (15-digit TIN ending in 03).  Commercial Registration (CRN) and the exact Arabic legal name as printed on your VAT certificate — character-perfect, including diacritics and spaces.</p><ul>
        <li>Active Saudi VAT registration (15-digit TIN ending in <code>03</code>).</li>
        <li>Commercial Registration (CRN) and the exact Arabic legal name as printed on your VAT certificate — character-perfect, including diacritics and spaces.</li>
        <li>Access to your ZATCA Fatoora taxpayer portal account with the role permitted to onboard Solution Units.</li>
        <li>An <a href="/__LANG__/glossary/egs">EGS</a> (E-invoice Generation Solution) capable of UBL 2.1 XML with KSA extensions, XAdES B-B signing, TLV QR encoding, hash chaining, and integration with the ZATCA APIs.</li>
        <li>Server clocks NTP-synchronised to UTC with timezone offset preserved in the XML <code>IssueTime</code> element.</li>
      </ul><h2 id="onboarding">Onboarding sequence end to end</h2><h3>What is a Solution Unit, and how many do I need?</h3><p class="block-answer" data-answer="true">ZATCA issues one Compliance and one Production CSID per Solution Unit, not per legal entity or per branch.  A Solution Unit is one logical EGS instance; in practice that means one CSID per POS device and one CSID per back-office invoicing tenant.</p><p>ZATCA issues one Compliance and one Production CSID <em>per Solution Unit</em>, not per legal entity or per branch. A Solution Unit is one logical EGS instance; in practice that means one CSID per POS device and one CSID per back-office invoicing tenant. Web-based platforms that issue centrally need only one CSID per tenant. Two devices sharing a CSID will collide on the <a href="/__LANG__/glossary/pih">PIH</a> chain and fail clearance.</p><h3>Step 1 — Generate a Certificate Signing Request (CSR)</h3><p>Your EGS generates a CSR containing the VAT number, common name, CRN, business category, country code (<code>SA</code>), and the cryptographic public key (ECC P-256 per the ZATCA spec). The CSR also encodes a Solution Unit serial number — keep it stable; it is the identifier ZATCA matches against the certificate at validation.</p><h3>Step 2 — Request the OTP from the Fatoora portal</h3><p>Log into Fatoora, navigate to <em>Onboard New Solution Unit / Device</em>, and request a one-time password. The OTP is valid for one hour and binds to a single Solution Unit. Each device or tenant needs its own OTP.</p><h3>Step 3 — Exchange OTP + CSR for the Compliance CSID</h3><p>POST OTP and CSR to the ZATCA compliance CSID endpoint. ZATCA returns a Compliance CSID — a short-lived certificate scoped to the sandbox. Persist it; you will use it for steps 4 and 5 only.</p><h3>Step 4 — Pass the compliance checks</h3><p>Submit at least one of each invoice type your EGS supports — Standard Tax Invoice, Simplified Tax Invoice, plus credit and debit notes for each — to the compliance endpoint. The platform's <a href="/__LANG__/glossary/ubl-2-1">UBL 2.1</a> payload, XAdES signature, TLV QR, and hash chain are all validated. Any rejection blocks the production certificate.</p><h3>Step 5 — Promote to the Production CSID</h3><p>Once compliance checks pass, exchange the compliance certificate for a Production CSID via the production CSID API. This is the certificate your live invoices are signed with. The compliance certificate will not work in production; signing with it is the single most common Phase 2 go-live error.</p><h2 id="first-invoice">Issuing your first cleared invoice</h2><p class="block-answer" data-answer="true">Issuing your first cleared invoice includes: Create the invoice as normal in your ERP/POS.   The EGS renders UBL 2.</p><ol>
        <li>Create the invoice as normal in your ERP/POS.</li>
        <li>The EGS renders UBL 2.1 XML with the ZATCA KSA extensions (<code>ProfileID</code> = <code>reporting:1.0</code> for Simplified, <code>standard:1.0</code> for Standard).</li>
        <li>Compute the invoice hash and chain it to the previous invoice's hash (PIH).</li>
        <li>Apply XAdES B-B signing with the Production CSID <em>after</em> canonicalisation.</li>
        <li>Embed the Base64-encoded TLV QR (seller name, VAT number, timestamp, total with VAT, VAT amount, plus tags 6–9 for the cryptographic stamp in Phase 2).</li>
        <li>For Standard Tax Invoices, POST to the ZATCA <em>clearance</em> endpoint and only deliver to the buyer once the cleared response returns. For Simplified Tax Invoices, deliver immediately to the buyer and POST to the <em>reporting</em> endpoint within 24 hours.</li>
      </ol><h2 id="archive">Archive and audit</h2><p class="block-answer" data-answer="true">Every cleared or reported invoice must be retained for six years in tamper-resistant storage.  ZATCA requires the signed XML, the cleared response (or reporting acknowledgement), the QR, and the PDF/A-3 rendering preserved together.</p><p>Every cleared or reported invoice must be retained for six years in tamper-resistant storage. ZATCA requires the signed XML, the cleared response (or reporting acknowledgement), the QR, and the PDF/A-3 rendering preserved together. Cloud object storage with versioning plus object-lock is the standard pattern; on-premise archives must use WORM media.</p><h2>Where it differs from Phase 1</h2><p class="block-answer" data-answer="true">The Phase 1 (Generation Phase) controls — structured payload, sequential numbering, tamper-resistance, TLV QR on Simplified Tax Invoices — remain in force but become preconditions, not the finish line.</p><p>The Phase 1 (Generation Phase) controls — structured payload, sequential numbering, tamper-resistance, TLV QR on Simplified Tax Invoices — remain in force but become preconditions, not the finish line. Phase 2 adds the CSID, the XAdES signature, the hash chain, the cryptographic stamp tags on the QR, and the real-time transport. A full delta is in <a href="/__LANG__/blog/zatca-phase-1-vs-phase-2">ZATCA Phase 1 vs Phase 2</a>.</p><h2 id="checklist">Go-live compliance checklist</h2><p class="block-answer" data-answer="true">Go-live compliance checklist includes: ☐ Production CSID installed; compliance certificate purged from production keystore.   ☐ All four invoice/note types tested end-to-end against the sandbox.</p><ul>
        <li>☐ Production CSID installed; compliance certificate purged from production keystore.</li>
        <li>☐ All four invoice/note types tested end-to-end against the sandbox.</li>
        <li>☐ Hash chain initialised; PIH stored alongside every issued invoice.</li>
        <li>☐ ICV allocated atomically per Solution Unit, no gaps.</li>
        <li>☐ Arabic seller name matches the VAT certificate byte-for-byte.</li>
        <li>☐ Server time NTP-synced; <code>IssueTime</code> emitted in ISO-8601 with offset.</li>
        <li>☐ B2B clearance flow blocks buyer delivery until cleared response received.</li>
        <li>☐ B2C reporting job runs at least every 60 minutes (24-hour SLA with margin).</li>
        <li>☐ 6-year archive policy with object-lock or WORM in place.</li>
      </ul><h2>Common pitfalls (catalogue)</h2><p class="block-answer" data-answer="true">If you hit rejections during compliance checks or in production, the most frequent causes are hash-chain breaks, signing with the compliance certificate in production, time-zone drift, missing Arabic seller name, and CSR fields that do not match the VAT record.</p><p>If you hit rejections during compliance checks or in production, the most frequent causes are hash-chain breaks, signing with the compliance certificate in production, time-zone drift, missing Arabic seller name, and CSR fields that do not match the VAT record. The complete catalogue with fixes is in <a href="/__LANG__/blog/zatca-phase-2-common-errors">ZATCA Phase 2 common errors and how to fix them</a>.</p><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Onboarding is one CSR → one OTP → one Compliance CSID → four compliance submissions → one Production CSID, per Solution Unit.   B2B Standard Tax Invoices are cleared before delivery; B2C Simplified Tax Invoices are reported within 24 hours of delivery.</p><ul>
        <li>Onboarding is one CSR → one OTP → one Compliance CSID → four compliance submissions → one Production CSID, per Solution Unit.</li>
        <li>B2B Standard Tax Invoices are <em>cleared</em> before delivery; B2C Simplified Tax Invoices are <em>reported</em> within 24 hours of delivery.</li>
        <li>The hash chain, the XAdES signature, and the Arabic seller name are the three artefacts that cause most rejections.</li>
        <li>Six-year tamper-resistant archive of XML + QR + PDF/A-3 is a structural requirement, not a tooling preference.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/E-Invoice-specifications.aspx" rel="noopener noreferrer">ZATCA — E-Invoice specifications (XML Implementation Standard, Security Features Standard)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing-Detailed-Technical-Guideline.pdf" rel="noopener noreferrer">ZATCA — E-invoicing Detailed Technical Guidelines (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/How-to-prepare.aspx" rel="noopener noreferrer">ZATCA — How to prepare for Phase 2</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Documents/QRCodeCreation.pdf" rel="noopener noreferrer">ZATCA — TLV QR Code Creation guide (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" rel="noopener noreferrer">ZATCA — Roll-out phases (wave schedule)</a></li>
        <li><a href="https://zatca1.discourse.group/" rel="noopener noreferrer">ZATCA Fatoora Developer Community (official forum)</a></li>
      </ul><h2>Want the mandate context first?</h2><p class="block-answer" data-answer="true">Read ZATCA Phase 2 explained: scope, thresholds, penalties, timeline for the regulatory background, or jump to the upstream Phase 1 baseline in ZATCA Phase 1 explained.</p><p>Read <a href="/__LANG__/blog/zatca-phase-2-explained">ZATCA Phase 2 explained: scope, thresholds, penalties, timeline</a> for the regulatory background, or jump to the upstream Phase 1 baseline in <a href="/__LANG__/blog/zatca-phase-1-explained">ZATCA Phase 1 explained</a>.</p><p>Ready to issue a cleared invoice today? <a href="/__LANG__/e-invoicing/zatca-phase-2">See how Invoicemonk implements ZATCA Phase 2 end to end</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with ZATCA Phase 2, a VAT-registered Saudi taxpayer must onboard a compliant Solution Unit on the <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 mandate</a>: generate a CSR, exchange an OTP from the Fatoora portal for a Compliance CSID, pass the four invoice-type compliance checks, promote to a Production CSID, then either clear B2B Standard Tax Invoices in real time or report B2C Simplified Tax Invoices within 24 hours.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ZATCA', 'Saudi Arabia', 'e-invoicing', 'compliance', 'how-to', 'CSID'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '14 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-zatca-phase-2.jpg',
    featuredImageAlt: 'Editorial illustration of Saudi Arabia\'s e-invoicing compliance workflow for the how to comply with zatca phase 2 guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/zatca-phase-2',
    semanticKeywords: ['ZATCA Phase 2 onboarding', 'CSID Saudi Arabia', 'Fatoora compliance', 'UBL 2.1 ZATCA KSA extensions', 'XAdES signing ZATCA', 'ZATCA clearance API', 'ZATCA reporting API', 'hash chain PIH', 'Solution Unit ZATCA', 'Production CSID promotion'],
    priority: 'P1',
    targetCountry: 'sa',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'How long does ZATCA Phase 2 onboarding take?', answer: 'For most VAT-registered businesses the technical onboarding (CSR, OTP, compliance checks, production CSID) takes under an hour when handled by an integrated platform. The longest delay is usually internal — gathering the exact Arabic legal name and CRN that match your VAT record.' },
      { question: 'Do I need a separate CSID per branch?', answer: 'ZATCA issues a CSID per Solution Unit, not per branch. If you operate multiple physical locations through one centralised invoicing solution, one Production CSID per tenant is sufficient. Independent POS devices that issue Simplified Tax Invoices locally each need their own.' },
      { question: 'What happens if clearance fails for a B2B invoice?', answer: 'A Standard Tax Invoice cannot legally be delivered to the buyer until clearance succeeds. The rejection reason is returned by ZATCA; you fix the issue (usually a hash, signature, or schema problem) and resubmit. The buyer never sees an uncleared document.' },
      { question: 'What is the difference between clearance and reporting?', answer: 'Clearance applies to B2B Standard Tax Invoices: ZATCA validates and cryptographically stamps the invoice in real time before it reaches the buyer. Reporting applies to B2C Simplified Tax Invoices: the invoice is delivered to the buyer immediately and then reported to ZATCA within 24 hours.' },
      { question: 'When does my wave start, and how much notice do I get?', answer: 'ZATCA notifies each wave individually via Fatoora and email with at least six months of integration window before enforcement. Waves are announced on the ZATCA Roll-out phases page based on the prior year\'s VAT-eligible revenue.' },
      { question: 'Can I use the Compliance CSID in production?', answer: 'No. The Compliance CSID is scoped to the sandbox and the four required compliance test invoices. Production invoices signed with it will be rejected. Always promote to the Production CSID after the compliance step passes.' },
      { question: 'How long must Phase 2 invoices be retained?', answer: 'Six years in tamper-resistant storage. The signed XML, the cleared response (or reporting acknowledgement), the QR, and the PDF/A-3 rendering must be preserved together.' },
    ],
    relatedTools: [
      { label: 'ZATCA Phase 2 mandate page', url: '/e-invoicing/zatca-phase-2', description: 'How Invoicemonk implements the Integration Phase' },
      { label: 'ZATCA Phase 2 common errors', url: '/blog/zatca-phase-2-common-errors', description: 'Rejection catalogue with fixes' },
      { label: 'ZATCA Phase 1 vs Phase 2', url: '/blog/zatca-phase-1-vs-phase-2', description: 'Side-by-side migration guide' },
    ],
  },

  // ============================================================
  // ZATCA Phase 2 — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'zatca-phase-2-explained',
    title: 'ZATCA Phase 2 Explained: Scope, Thresholds, Waves, Penalties, Timeline (2026)',
    excerpt: 'Plain-English explainer for the ZATCA Phase 2 Integration Phase: who it applies to, the wave schedule from Wave 1 (SAR 3 bn) to Wave 21 and beyond, what changes vs Phase 1, and the penalty schedule.',
    content: `<p><strong>ZATCA Phase 2 — the Integration Phase of Saudi Arabia's Fatoorah e-invoicing programme — requires every VAT-registered business in KSA to integrate its e-invoicing system with ZATCA's central platform. B2B Standard Tax Invoices are cleared in real time; B2C Simplified Tax Invoices are reported within 24 hours. Rollout is wave-based: Wave 1 began 1 January 2023 for taxpayers with VATable revenue ≥ SAR 3 bn; subsequent waves have stepped down the threshold through 2026.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> ZATCA (Zakat, Tax and Customs Authority)</li>
          <li><strong>Mandate type:</strong> CTC clearance + reporting (UBL 2.1 KSA profile)</li>
          <li><strong>Live since:</strong> 1 January 2023 (Wave 1)</li>
          <li><strong>Rollout:</strong> By wave, six-month notice window per wave</li>
          <li><strong>Scope:</strong> All VAT-registered resident persons in KSA</li>
          <li><strong>Penalties:</strong> SAR 1,000 – SAR 50,000 per breach, escalating</li>
          <li><strong>Last reviewed:</strong> 23 June 2026 against ZATCA Roll-out Phases page</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what">What Phase 2 requires</a></li>
          <li><a href="#waves">Wave schedule and revenue thresholds</a></li>
          <li><a href="#scope">Who is in scope</a></li>
          <li><a href="#diff">What changed from Phase 1</a></li>
          <li><a href="#penalties">Penalty schedule</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Macro context — where Phase 2 fits</h2><p class="block-answer" data-answer="true">Phase 2 puts Saudi Arabia in the CTC clearance camp alongside Italy (SdI), Türkiye (e-Fatura), India (IRP), and most LATAM regimes.</p><p>Phase 2 puts Saudi Arabia in the CTC clearance camp alongside Italy (SdI), Türkiye (e-Fatura), India (IRP), and most LATAM regimes. ZATCA chose UBL 2.1 over its own schema — a deliberate alignment with European invoicing standards that makes ZATCA-cleared invoices structurally closer to Peppol BIS than to neighbouring Gulf systems. The mandate page <a href="/__LANG__/e-invoicing/zatca-phase-2">/e-invoicing/zatca-phase-2</a> implements those primitives in product; this article is the rule-set behind it.</p><h2 id="what">What Phase 2 requires</h2><h3>What artefacts must each invoice carry?</h3><p class="block-answer" data-answer="true">A UBL 2. 1 XML payload with the ZATCA KSA extensions and the correct ProfileID (standard:1.</p><ul>
        <li>A <a href="/__LANG__/glossary/ubl-2-1">UBL 2.1</a> XML payload with the ZATCA KSA extensions and the correct <code>ProfileID</code> (<code>standard:1.0</code> or <code>reporting:1.0</code>).</li>
        <li>An <a href="/__LANG__/glossary/xades">XAdES B-B</a> signature applied after canonicalisation, signed with the Production <a href="/__LANG__/glossary/csid">CSID</a>.</li>
        <li>An invoice hash chained to the previous invoice's hash (PIH).</li>
        <li>A sequential, gap-free Invoice Counter Value (ICV) per Solution Unit.</li>
        <li>A Base64-encoded <a href="/__LANG__/glossary/qr-tax-invoice">TLV QR</a> with nine tags in Phase 2 (the original five plus the cryptographic stamp tags).</li>
        <li>A PDF/A-3 rendering with the XML embedded.</li>
      </ul><h3>How is the invoice transmitted to ZATCA?</h3><p class="block-answer" data-answer="true">Standard Tax Invoices (B2B) use the Clearance API: invoice in, cleared invoice out, only then delivered to the buyer.  Simplified Tax Invoices (B2C) use the Reporting API: invoice delivered to buyer immediately and submitted to ZATCA within 24 hours.</p><p>Standard Tax Invoices (B2B) use the <strong>Clearance API</strong>: invoice in, cleared invoice out, only then delivered to the buyer. Simplified Tax Invoices (B2C) use the <strong>Reporting API</strong>: invoice delivered to buyer immediately and submitted to ZATCA within 24 hours.</p><h2 id="waves">Wave schedule and revenue thresholds</h2><p class="block-answer" data-answer="true">ZATCA does not switch every taxpayer on simultaneously.  Each wave names taxpayers above a VATable-revenue threshold for the prior calendar year, with at least six months of integration notice.</p><p>ZATCA does not switch every taxpayer on simultaneously. Each wave names taxpayers above a VATable-revenue threshold for the prior calendar year, with at least six months of integration notice. The published waves so far:</p><table>
        <thead><tr><th>Wave</th><th>Enforcement</th><th>Threshold (prior-year VATable revenue)</th></tr></thead>
        <tbody>
          <tr><td>Wave 1</td><td>1 Jan 2023</td><td>≥ SAR 3 bn</td></tr>
          <tr><td>Wave 2</td><td>1 Jul 2023</td><td>≥ SAR 500 m</td></tr>
          <tr><td>Wave 3</td><td>1 Oct 2023</td><td>≥ SAR 250 m</td></tr>
          <tr><td>Wave 4</td><td>1 Nov 2023</td><td>≥ SAR 150 m</td></tr>
          <tr><td>Wave 5</td><td>1 Dec 2023</td><td>≥ SAR 100 m</td></tr>
          <tr><td>Wave 6</td><td>1 Jan 2024</td><td>≥ SAR 70 m</td></tr>
          <tr><td>Wave 7</td><td>1 Feb 2024</td><td>≥ SAR 50 m</td></tr>
          <tr><td>Wave 8</td><td>1 Mar 2024</td><td>≥ SAR 40 m</td></tr>
          <tr><td>Wave 9</td><td>1 Jun 2024</td><td>≥ SAR 30 m</td></tr>
          <tr><td>Wave 10</td><td>1 Oct 2024</td><td>≥ SAR 25 m</td></tr>
          <tr><td>Wave 11–14</td><td>Through 2024</td><td>Stepping down to ≥ SAR 15 m, then SAR 10 m</td></tr>
          <tr><td>Wave 15–18</td><td>Through 2025</td><td>Stepping down to ≥ SAR 7 m, then SAR 5 m, SAR 4 m, SAR 3 m</td></tr>
          <tr><td>Wave 19–21+</td><td>2025–2026</td><td>≥ SAR 2.5 m and below; small-business cohorts</td></tr>
        </tbody>
      </table><p>Each wave is published as a news item on the ZATCA site — for example, the Wave 21 criteria notice. Always confirm your wave on Fatoora; the published threshold is the trigger but ZATCA notifies named taxpayers individually.</p><h2 id="scope">Who is in scope, and who is excluded</h2><p class="block-answer" data-answer="true">In scope: all resident VAT-registered persons in KSA, plus any party issuing tax invoices on their behalf.</p><p>In scope: all <em>resident</em> VAT-registered persons in KSA, plus any party issuing tax invoices on their behalf. Out of scope: non-resident sellers without a Saudi VAT registration; B2C cash sales below the simplified-invoice threshold remain in the Simplified Tax Invoice (reporting) flow rather than the Standard (clearance) flow.</p><h2 id="diff">What changed from Phase 1 (Generation)</h2><p class="block-answer" data-answer="true">Phase 1 demanded a structured, tamper-resistant, sequentially-numbered invoice with a TLV QR on B2C documents.</p><p>Phase 1 demanded a structured, tamper-resistant, sequentially-numbered invoice with a TLV QR on B2C documents. Phase 2 keeps all of that and adds: cryptographic signing with a state-issued certificate (CSID), a hash chain across invoices, real-time clearance for B2B, 24-hour reporting for B2C, and cryptographic-stamp QR tags. The full delta is in <a href="/__LANG__/blog/zatca-phase-1-vs-phase-2">ZATCA Phase 1 vs Phase 2</a>.</p><h2 id="penalties">Penalty schedule</h2><p class="block-answer" data-answer="true">The penalty matrix issued under the e-invoicing regulation is escalating (warning on first breach, fine on second, then doubling on repeat).</p><p>The penalty matrix issued under the e-invoicing regulation is escalating (warning on first breach, fine on second, then doubling on repeat). Key bands:</p><ul>
        <li>Failure to issue or store an e-invoice: warning, then up to SAR 50,000.</li>
        <li>Deletion or alteration of an issued invoice: up to SAR 50,000.</li>
        <li>Missing required QR field on a Simplified Tax Invoice: warning to SAR 5,000.</li>
        <li>Failure to notify ZATCA of malfunction of the EGS: warning to SAR 10,000.</li>
        <li>Late clearance (B2B) or late reporting (B2C, &gt;24 h): per-invoice fine, capped per period.</li>
      </ul><h2>Compliance checklist</h2><p class="block-answer" data-answer="true">Compliance checklist includes: ☐ Confirmed wave assignment on Fatoora.   ☐ Production CSID issued per Solution Unit.</p><ul>
        <li>☐ Confirmed wave assignment on Fatoora.</li>
        <li>☐ Production CSID issued per Solution Unit.</li>
        <li>☐ Clearance flow blocks B2B delivery until cleared response received.</li>
        <li>☐ Reporting flow submits B2C within the 24-hour window.</li>
        <li>☐ Six-year archive of XML + QR + PDF/A-3 + cleared response.</li>
        <li>☐ Penalty monitoring dashboard for late reports / failed clearances.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Phase 2 is real-time clearance for B2B, 24-hour reporting for B2C, on a UBL 2.  1 KSA profile.</p><ul>
        <li>Phase 2 is real-time clearance for B2B, 24-hour reporting for B2C, on a UBL 2.1 KSA profile.</li>
        <li>Rollout is wave-based; thresholds have stepped down from SAR 3 bn (Wave 1) to under SAR 3 m (current waves).</li>
        <li>Phase 1 controls are preconditions, not substitutes — Phase 2 adds cryptography and transport.</li>
        <li>Penalties escalate on repeat; the most common breach in practice is missing or malformed QR on Simplified Tax Invoices.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" rel="noopener noreferrer">ZATCA — Roll-out phases</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx" rel="noopener noreferrer">ZATCA — What is e-invoicing?</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing_Detailed__Guideline.pdf" rel="noopener noreferrer">ZATCA — Detailed Guidelines for E-Invoicing v2 (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/E-Invoice-specifications.aspx" rel="noopener noreferrer">ZATCA — E-Invoice specifications</a></li>
        <li><a href="https://zatca.gov.sa/en/MediaCenter/News/Pages/news_1353.aspx" rel="noopener noreferrer">ZATCA — Wave 21 criteria announcement</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Documents/Einvoicing_FAQ_EN.pdf" rel="noopener noreferrer">ZATCA — E-invoicing (Fatoorah) FAQ (PDF)</a></li>
      </ul><h2>Ready to implement?</h2><p class="block-answer" data-answer="true">Follow the onboarding playbook in How to comply with ZATCA Phase 2, debug rejections with ZATCA Phase 2 common errors, and see the product implementation at Invoicemonk — ZATCA Phase 2.</p><p>Follow the onboarding playbook in <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-2">How to comply with ZATCA Phase 2</a>, debug rejections with <a href="/__LANG__/blog/zatca-phase-2-common-errors">ZATCA Phase 2 common errors</a>, and see the product implementation at <a href="/__LANG__/e-invoicing/zatca-phase-2">Invoicemonk — ZATCA Phase 2</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> ZATCA Phase 2 — the Integration Phase of Saudi Arabia's Fatoorah e-invoicing programme — requires every VAT-registered business in KSA to integrate its e-invoicing system with ZATCA's central platform. B2B Standard Tax Invoices are cleared in real time; B2C Simplified Tax Invoices are reported within 24 hours. Rollout is wave-based: Wave 1 began 1 January 2023 for taxpayers with VATable revenue ≥ SAR 3 bn; subsequent waves have stepped down the threshold through 2026.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ZATCA', 'Saudi Arabia', 'e-invoicing', 'explainer', 'Phase 2', 'waves'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/zatca-phase-2-explained.jpg',
    featuredImageAlt: 'Editorial illustration of Saudi Arabia\'s e-invoicing compliance workflow for the zatca phase 2 explained guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/zatca-phase-2',
    semanticKeywords: ['ZATCA Phase 2 scope', 'ZATCA wave schedule', 'Fatoorah Integration Phase', 'Saudi e-invoicing thresholds', 'ZATCA penalties', 'UBL 2.1 KSA profile', 'CTC clearance Saudi Arabia', 'Standard Tax Invoice ZATCA', 'Simplified Tax Invoice 24-hour reporting'],
    priority: 'P1',
    targetCountry: 'sa',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Who has to comply with ZATCA Phase 2?', answer: 'Every resident VAT-registered person in Saudi Arabia, brought in by wave. Non-resident sellers without KSA VAT registration are out of scope. As waves continue, the threshold has stepped down from SAR 3 bn to under SAR 3 m of prior-year VATable revenue.' },
      { question: 'What is the difference between a Standard and Simplified Tax Invoice in Phase 2?', answer: 'Standard Tax Invoices (B2B and B2G) must be cleared by ZATCA in real time before delivery to the buyer. Simplified Tax Invoices (B2C and small-value) are delivered immediately to the buyer and reported to ZATCA within 24 hours.' },
      { question: 'How much notice do I get before my wave goes live?', answer: 'ZATCA gives at least six months between wave announcement and enforcement, plus individual notification through Fatoora to each named taxpayer.' },
      { question: 'What are the penalties for non-compliance?', answer: 'Penalties escalate: warning on first breach, then fines from SAR 1,000 (missing required QR field) up to SAR 50,000 (deletion or alteration of an issued invoice). Repeat breaches double.' },
      { question: 'Does Phase 2 replace Phase 1?', answer: 'For your wave, yes — Phase 2 supersedes Phase 1 once integration goes live for that Solution Unit. Phase 1 controls remain in force for any taxpayer not yet called.' },
      { question: 'Why did ZATCA choose UBL 2.1?', answer: 'UBL 2.1 aligns ZATCA with the European EN 16931 invoicing standard and the Peppol BIS Billing 3.0 profile, which simplifies cross-border invoicing for KSA exporters and gives ZATCA a mature schema with proven validators.' },
    ],
    relatedTools: [
      { label: 'ZATCA Phase 2 mandate page', url: '/e-invoicing/zatca-phase-2', description: 'Product implementation of the Integration Phase' },
      { label: 'How to comply with ZATCA Phase 2', url: '/blog/how-to-comply-with-zatca-phase-2', description: 'Onboarding playbook' },
      { label: 'ZATCA Phase 1 vs Phase 2', url: '/blog/zatca-phase-1-vs-phase-2', description: 'Side-by-side comparison' },
    ],
  },

  // ============================================================
  // ZATCA Phase 2 — Archetype 3 (Errors)
  // ============================================================
  {
    slug: 'zatca-phase-2-common-errors',
    title: 'ZATCA Phase 2 Common Errors and How to Fix Them (2026)',
    excerpt: 'Catalogue of the most common ZATCA Fatoora rejection reasons in 2026 — PIH mismatch, XAdES signature failure, TLV QR length, ICV gaps, schema validation — with the exact fix and source for each.',
    content: `<p><strong>The most common ZATCA Phase 2 rejection reasons in 2026 are PIH (Previous Invoice Hash) mismatch, signing with the Compliance certificate in production, TLV QR length-byte miscalculation on Arabic text, ICV gaps, Arabic seller name not matching the VAT record, and schema validation errors against the UBL 2.1 KSA profile. Each has a deterministic fix below.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> ZATCA</li>
          <li><strong>Validators:</strong> Compliance sandbox + Production Clearance/Reporting APIs</li>
          <li><strong>Spec under test:</strong> UBL 2.1 KSA profile + XAdES B-B + TLV QR + hash chain</li>
          <li><strong>Source of truth:</strong> ZATCA E-Invoice XML Implementation Standard v1.1+</li>
          <li><strong>Last reviewed:</strong> 23 June 2026 against ZATCA Detailed Technical Guidelines</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#err1">1. PIH (hash chain) mismatch</a></li>
          <li><a href="#err2">2. XAdES signature invalid</a></li>
          <li><a href="#err3">3. TLV QR length-byte mismatch</a></li>
          <li><a href="#err4">4. Timestamp skew</a></li>
          <li><a href="#err5">5. Arabic seller name mismatch</a></li>
          <li><a href="#err6">6. Schema validation against KSA profile</a></li>
          <li><a href="#err7">7. ICV gap</a></li>
          <li><a href="#err8">8. Missing or wrong ProfileID</a></li>
          <li><a href="#err9">9. CSR field mismatch on onboarding</a></li>
          <li><a href="#err10">10. UUID reuse across invoices</a></li>
        </ul>
      </nav>

      <h2>Macro context — why rejections happen</h2><p class="block-answer" data-answer="true">ZATCA validates each invoice in two passes.</p><p>ZATCA validates each invoice in two passes. The first is <em>schema</em>: does the XML conform to UBL 2.1 with the KSA extensions? The second is <em>business rule</em>: do the cryptographic, sequencing, and identity fields agree with what ZATCA already has on file? Schema errors are loud and easy to fix; business-rule errors look identical at first glance (same HTTP 400) but root-cause in completely different layers. This catalogue separates them.</p><h2 id="err1">1. PIH (Previous Invoice Hash) mismatch</h2><p class="block-answer" data-answer="true">Symptom: ZATCA returns a business-rule error referencing the previous-invoice-hash field.</p><p><strong>Symptom:</strong> ZATCA returns a business-rule error referencing the previous-invoice-hash field.</p><p><strong>Cause:</strong> the invoice's PIH field does not match the SHA-256 hash of the actual previous cleared invoice. Triggered by parallel issuance from two devices sharing one CSID, by a local void without re-sync, or by replaying an invoice across environments.</p><p><strong>Fix:</strong> re-fetch the last cleared invoice from ZATCA, recompute the chain from that point, resend. Architecturally: enforce one CSID per Solution Unit and serialise issuance per CSID.</p><h2 id="err2">2. XAdES signature invalid</h2><p class="block-answer" data-answer="true">Symptom: signature validation failed.</p><p><strong>Symptom:</strong> <code>signature validation failed</code>.</p><p><strong>Cause:</strong> usually one of (a) signing before canonicalisation, (b) signing with the Compliance CSID in production, or (c) wrong digest algorithm in the SignedInfo block.</p><p><strong>Fix:</strong> apply XAdES B-B <em>after</em> XML canonicalisation, confirm the keystore alias points at the Production CSID, and use SHA-256 for both the reference digest and the signature.</p><h2 id="err3">3. TLV QR length-byte mismatch</h2><p class="block-answer" data-answer="true">Symptom: the QR scans but ZATCA's verifier reports a length-mismatch error.</p><p><strong>Symptom:</strong> the QR scans but ZATCA's verifier reports a length-mismatch error.</p><p><strong>Cause:</strong> a TLV tag's <em>length</em> byte does not equal the UTF-8 byte length of the value. JavaScript's <code>string.length</code> is UTF-16 code units; one Arabic character is typically two UTF-8 bytes.</p><p><strong>Fix:</strong> compute the length on <code>Buffer.byteLength(value, 'utf8')</code> (Node) or equivalent. Verify the encoded QR with ZATCA's reference decoder before going live.</p><h2 id="err4">4. Timestamp skew</h2><p class="block-answer" data-answer="true">Symptom: invoice issue date in the future or too old to clear.</p><p><strong>Symptom:</strong> <code>invoice issue date in the future</code> or <code>too old to clear</code>.</p><p><strong>Cause:</strong> server clock drift, or <code>IssueTime</code> encoded in local time without a timezone offset.</p><p><strong>Fix:</strong> NTP-sync to UTC, always emit <code>IssueTime</code> as ISO-8601 with an explicit <code>+03:00</code> offset for KSA, never local-naive.</p><h2 id="err5">5. Arabic seller name does not match VAT record</h2><p class="block-answer" data-answer="true">Symptom: compliance check fails with a seller-name-mismatch error.</p><p><strong>Symptom:</strong> compliance check fails with a seller-name-mismatch error.</p><p><strong>Cause:</strong> the Arabic legal name on the invoice differs by even one character (extra space, missing diacritic, normalisation form NFC vs NFD) from the name registered against the VAT number at ZATCA.</p><p><strong>Fix:</strong> copy the Arabic name from the VAT certificate verbatim, store NFC-normalised, and treat it as the single source of truth for every invoice and the CSR.</p><h2 id="err6">6. Schema validation: missing KSA extension fields</h2><p class="block-answer" data-answer="true">Symptom: schema validation failed against the UBL 2. 1 KSA profile.</p><p><strong>Symptom:</strong> <code>schema validation failed</code> against the UBL 2.1 KSA profile.</p><p><strong>Cause:</strong> the platform is sending base UBL 2.1 without the ZATCA KSA extensions (additional document references, profile ID, customisation ID).</p><p><strong>Fix:</strong> declare <code>ProfileID</code> as <code>reporting:1.0</code> (Simplified) or <code>standard:1.0</code> (Standard), include the KSA <code>AdditionalDocumentReference</code> blocks (ICV, PIH, QR), and validate against the ZATCA-published XSD before submission.</p><h2 id="err7">7. ICV (Invoice Counter Value) gap</h2><p class="block-answer" data-answer="true">Symptom: ICV must be sequential.</p><p><strong>Symptom:</strong> <code>ICV must be sequential</code>.</p><p><strong>Cause:</strong> the integer ICV (per Solution Unit) skipped a number. ZATCA requires strict sequential numbering with no gaps; database row IDs and any value subject to rollback will leave gaps.</p><p><strong>Fix:</strong> allocate the ICV from a dedicated atomic counter (Postgres sequence, Redis <code>INCR</code>, or a transactional row-lock) committed only when the invoice is finalised.</p><h2 id="err8">8. Missing or wrong ProfileID</h2><p class="block-answer" data-answer="true">Symptom: invalid ProfileID for invoice type.</p><p><strong>Symptom:</strong> <code>invalid ProfileID for invoice type</code>.</p><p><strong>Cause:</strong> the document declares <code>standard:1.0</code> but the routing flag indicates a B2C transaction, or vice versa.</p><p><strong>Fix:</strong> derive ProfileID strictly from invoice type — never from user input. Standard Tax Invoices and their notes use <code>standard:1.0</code>; Simplified Tax Invoices and their notes use <code>reporting:1.0</code>.</p><h2 id="err9">9. CSR field mismatch on onboarding</h2><p class="block-answer" data-answer="true">Symptom: onboarding fails at the Compliance CSID exchange step.</p><p><strong>Symptom:</strong> onboarding fails at the Compliance CSID exchange step.</p><p><strong>Cause:</strong> the CSR's Common Name, Organisation Identifier (CRN), or Business Category does not match what ZATCA has on file for the VAT number.</p><p><strong>Fix:</strong> fetch the canonical values from the VAT certificate, regenerate the CSR with those values exactly, and try again. There is no override.</p><h2 id="err10">10. UUID reuse across invoices</h2><p class="block-answer" data-answer="true">Symptom: duplicate invoice UUID.</p><p><strong>Symptom:</strong> <code>duplicate invoice UUID</code>.</p><p><strong>Cause:</strong> the UBL <code>UUID</code> element was re-emitted from a cached template instead of regenerated.</p><p><strong>Fix:</strong> generate a fresh v4 UUID per invoice at the moment of finalisation, never at template build time.</p><h2>How to debug a rejection methodically</h2><p class="block-answer" data-answer="true">Capture the full ZATCA response body, not just the HTTP status — the error array contains both code and human-readable category.  Re-validate the XML against the ZATCA-published XSD locally before resubmitting.</p><ol>
        <li>Capture the full ZATCA response body, not just the HTTP status — the error array contains both code and human-readable category.</li>
        <li>Re-validate the XML against the ZATCA-published XSD locally before resubmitting.</li>
        <li>Decode the TLV QR with ZATCA's reference tool to confirm tag/length/value integrity.</li>
        <li>Verify the signing certificate chain ends at the ZATCA root, not the Compliance test chain.</li>
        <li>If PIH errors persist, dump the last-cleared invoice from ZATCA and recompute the chain locally — never trust your local cache as the source of truth.</li>
      </ol><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Schema errors and business-rule errors look identical at HTTP level; separate them before debugging.   The hash chain (PIH) and the production certificate (CSID) cause more production rejections than any other pair of fields.</p><ul>
        <li>Schema errors and business-rule errors look identical at HTTP level; separate them before debugging.</li>
        <li>The hash chain (PIH) and the production certificate (CSID) cause more production rejections than any other pair of fields.</li>
        <li>Arabic-text length and normalisation issues are silent killers — always validate the QR with ZATCA's decoder before go-live.</li>
        <li>The ZATCA Fatoora Developer Community on Discourse is the fastest place to confirm a non-obvious error.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/E-Invoice-specifications.aspx" rel="noopener noreferrer">ZATCA — E-Invoice specifications</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Documents/QRCodeCreation.pdf" rel="noopener noreferrer">ZATCA — TLV QR Code Creation guide (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing-Detailed-Technical-Guideline.pdf" rel="noopener noreferrer">ZATCA — E-invoicing Detailed Technical Guidelines (PDF)</a></li>
        <li><a href="https://zatca1.discourse.group/" rel="noopener noreferrer">ZATCA Fatoora Developer Community</a></li>
        <li><a href="https://zatca1.discourse.group/t/understanding-of-pih-and-icv/8376" rel="noopener noreferrer">Developer Community — Understanding PIH and ICV</a></li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">The mandate context is in ZATCA Phase 2 explained, the implementation flow that avoids most of these errors is in How to comply with ZATCA Phase 2, and the migration baseline is ZATCA Phase 1 vs Phase 2.  The mandate page is /e-invoicing/zatca-phase-2.</p><p>The mandate context is in <a href="/__LANG__/blog/zatca-phase-2-explained">ZATCA Phase 2 explained</a>, the implementation flow that avoids most of these errors is in <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-2">How to comply with ZATCA Phase 2</a>, and the migration baseline is <a href="/__LANG__/blog/zatca-phase-1-vs-phase-2">ZATCA Phase 1 vs Phase 2</a>. The mandate page is <a href="/__LANG__/e-invoicing/zatca-phase-2">/e-invoicing/zatca-phase-2</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> The most common ZATCA Phase 2 rejection reasons in 2026 are PIH (Previous Invoice Hash) mismatch, signing with the Compliance certificate in production, TLV QR length-byte miscalculation on Arabic text, ICV gaps, Arabic seller name not matching the VAT record, and schema validation errors against the UBL 2.1 KSA profile. Each has a deterministic fix below.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ZATCA', 'Saudi Arabia', 'e-invoicing', 'troubleshooting', 'errors'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/zatca-phase-2-common-errors.jpg',
    featuredImageAlt: 'Editorial illustration of Saudi Arabia\'s e-invoicing compliance workflow for the zatca phase 2 common errors guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/zatca-phase-2',
    semanticKeywords: ['ZATCA rejection reasons', 'Fatoora errors', 'PIH mismatch', 'XAdES signature ZATCA', 'TLV QR Arabic', 'ICV gap', 'KSA UBL profile errors', 'ZATCA UUID duplicate', 'ZATCA CSR rejection', 'Compliance vs Production CSID'],
    priority: 'P2',
    targetCountry: 'sa',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Why does ZATCA reject my invoice with PIH mismatch?', answer: 'The Previous Invoice Hash you sent does not match the hash of the actual last cleared invoice. Usually caused by parallel issuance from two devices sharing one CSID, or by an invoice being voided locally without re-syncing with ZATCA. Re-fetch the last cleared invoice from ZATCA and recompute the chain.' },
      { question: 'My XAdES signature passes in sandbox but fails in production. Why?', answer: 'Almost always because the platform is still signing with the Compliance CSID instead of the Production CSID. The compliance certificate works only against the sandbox; production invoices must be signed with the production certificate exchanged after compliance checks pass.' },
      { question: 'How do I get the Arabic seller name to match my VAT record?', answer: 'Copy it verbatim from your VAT registration certificate including any spaces or diacritics, store it NFC-normalised, and use that exact string everywhere — invoice, CSR, and profile metadata. Even a one-character difference will fail ZATCA validation.' },
      { question: 'What causes ICV gaps in production?', answer: 'Using a value that can roll back: database row IDs, application counters reset on deploy, or counters incremented before the transaction commits. Use a dedicated atomic counter (Postgres sequence, Redis INCR) committed alongside the invoice.' },
      { question: 'How do I verify the TLV QR before submission?', answer: 'Decode it with ZATCA\'s reference QR decoder and check that each tag\'s length byte equals the UTF-8 byte length of its value. Length-byte miscalculation on Arabic seller names is the most common QR error.' },
      { question: 'Where can I ask ZATCA developers about a specific error?', answer: 'The ZATCA Fatoora Developer Community on Discourse (zatca1.discourse.group) is the official forum where ZATCA engineers answer integration questions and confirm spec interpretations.' },
    ],
    relatedTools: [
      { label: 'ZATCA Phase 2 mandate page', url: '/e-invoicing/zatca-phase-2', description: 'Product implementation that avoids these errors' },
      { label: 'ZATCA Phase 2 onboarding', url: '/blog/how-to-comply-with-zatca-phase-2', description: 'The flow that produces valid invoices first time' },
      { label: 'ZATCA Phase 2 explained', url: '/blog/zatca-phase-2-explained', description: 'Rule-set behind the validations' },
    ],
  },

  // ============================================================
  // ZATCA Phase 1 — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-zatca-phase-1',
    title: 'How to Comply with ZATCA Phase 1: Generation Phase Setup (2026)',
    excerpt: 'Practical setup guide for the ZATCA Phase 1 Generation Phase: structured tamper-resistant invoices, sequential numbering, TLV QR for B2C Simplified Tax Invoices, immutable storage — and a Phase 2-ready foundation.',
    content: `<p><strong>To comply with ZATCA Phase 1, every VAT-registered Saudi taxpayer must issue invoices from a compliant <a href="/__LANG__/e-invoicing/zatca-phase-1">Phase 1 EGS</a>: structured XML payload, tamper-resistant storage, sequential numbering with no gaps, immutable record retention for six years, and a Base64-encoded TLV QR on every Simplified Tax Invoice (B2C). Phase 1 has no portal submission and no signing certificate — those are Phase 2.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> ZATCA</li>
          <li><strong>Mandate:</strong> Generation Phase (Phase 1) of Fatoorah</li>
          <li><strong>Artefact:</strong> Structured electronic invoice + TLV QR (Simplified only)</li>
          <li><strong>Transport:</strong> None (no portal submission until Phase 2)</li>
          <li><strong>Applies to:</strong> All VAT-registered resident persons in KSA</li>
          <li><strong>Live since:</strong> 4 December 2021</li>
          <li><strong>Last reviewed:</strong> 23 June 2026 against the ZATCA Simplified Guide (Phase 1)</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#requires">What Phase 1 requires</a></li>
          <li><a href="#steps">Implementation steps</a></li>
          <li><a href="#qr">The TLV QR for Simplified Tax Invoices</a></li>
          <li><a href="#future">Build Phase 2-ready from day one</a></li>
          <li><a href="#checklist">Compliance checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Macro context — why Phase 1 exists</h2><p class="block-answer" data-answer="true">Phase 1 is the foundational layer ZATCA put under every VAT-registered business so that Phase 2 (the CTC clearance layer) could be rolled out wave-by-wave without anyone still issuing handwritten invoices.</p><p>Phase 1 is the foundational layer ZATCA put under every VAT-registered business so that Phase 2 (the CTC clearance layer) could be rolled out wave-by-wave without anyone still issuing handwritten invoices. Functionally it is a "structured-invoice mandate without transport" — closer to France's pre-2026 e-invoicing prep than to a clearance regime. The rules are simpler than Phase 2 but the controls are real, and the penalty schedule is shared with Phase 2.</p><h2 id="requires">What Phase 1 requires</h2><p class="block-answer" data-answer="true">Invoices generated in a structured electronic format (XML, or a system that stores the structured payload alongside a PDF/A-3 rendering).  Handwritten and editable spreadsheet "invoices" are non-compliant.</p><ul>
        <li>Invoices generated in a <strong>structured electronic format</strong> (XML, or a system that stores the structured payload alongside a PDF/A-3 rendering). Handwritten and editable spreadsheet "invoices" are non-compliant.</li>
        <li>The system must be <strong>tamper-resistant</strong>: issued invoices cannot be edited or deleted; corrections happen through linked credit and debit notes.</li>
        <li><strong>Sequential numbering</strong> per Solution Unit, no gaps.</li>
        <li>A <a href="/__LANG__/glossary/qr-tax-invoice">TLV QR</a> on every <strong>Simplified Tax Invoice (B2C)</strong> containing the five mandatory tags.</li>
        <li>Records retained for <strong>six years</strong> in immutable storage.</li>
      </ul><h2 id="steps">Implementation steps</h2><h3>Step 1 — Lock down sequential numbering</h3><p>Allocate the invoice number atomically when the invoice is finalised. Do not derive it from a database row ID, do not allow user-entered numbers, and never skip a number — gaps are an audit red flag and the most common Phase 1 finding in ZATCA inspections.</p><h3>Step 2 — Make issued invoices immutable</h3><p>Once issued, the record (XML payload, totals, line items, timestamp) must be append-only. Corrections happen through linked credit and debit notes that reference the original invoice's UUID. Both documents stay in the audit trail.</p><h3>Step 3 — Generate the TLV QR for B2C invoices</h3><p>For every Simplified Tax Invoice, embed the Base64-encoded TLV QR in both the PDF and (where supported) the XML. Specification below.</p><h3>Step 4 — Store the hash chain even though Phase 1 does not require it</h3><p>Phase 1 does not enforce a previous-invoice-hash (PIH) chain, but Phase 2 does. Compute and persist it from day one so that on your Phase 2 wave you are not retro-fitting the chain onto historical records.</p><h3>Step 5 — Retain in immutable storage</h3><p>The XML, the PDF/A-3 rendering, and the QR must be retained for six years in storage that prevents deletion or alteration. Cloud object storage with versioning plus object-lock is the standard pattern; on-premise archives must use WORM (write-once-read-many) media.</p><h2 id="qr">The TLV QR — the only piece of cryptography in Phase 1</h2><p class="block-answer" data-answer="true">The Simplified Tax Invoice QR uses TLV (Tag-Length-Value) encoding, base64-wrapped.</p><p>The Simplified Tax Invoice QR uses TLV (Tag-Length-Value) encoding, base64-wrapped. Phase 1 requires five tags:</p><ol>
        <li><strong>Tag 1</strong> — Seller name (UTF-8).</li>
        <li><strong>Tag 2</strong> — VAT registration number (15 digits, ends in <code>03</code>).</li>
        <li><strong>Tag 3</strong> — Invoice timestamp (ISO-8601 with timezone, e.g. <code>2026-06-23T10:15:00+03:00</code>).</li>
        <li><strong>Tag 4</strong> — Invoice total <em>including</em> VAT.</li>
        <li><strong>Tag 5</strong> — VAT amount.</li>
      </ol><p>The length byte must be computed on the UTF-8 byte array, not on string length — a frequent bug with Arabic seller names where one character is typically two bytes.</p><h2 id="future">Build Phase 2-ready from day one</h2><p class="block-answer" data-answer="true">When ZATCA calls your wave for the Integration Phase, you typically have six months to integrate.  The transition is dramatically easier from a well-configured Phase 1 setup.</p><p>When ZATCA calls your wave for the Integration Phase, you typically have six months to integrate. The transition is dramatically easier from a well-configured Phase 1 setup. Two non-required but high-leverage additions:</p><ul>
        <li><strong>Compute and persist the PIH chain in Phase 1.</strong> Phase 2 needs it; retrofitting it across historical invoices is painful.</li>
        <li><strong>Use UBL 2.1 as the structured payload now.</strong> Even if you render only PDF in Phase 1, persist the UBL XML alongside — Phase 2 mandates exactly that schema.</li>
      </ul><p>For the full delta, see <a href="/__LANG__/blog/zatca-phase-1-vs-phase-2">ZATCA Phase 1 vs Phase 2</a>; the Phase 2 implementation guide is <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-2">here</a>.</p><h2 id="checklist">Compliance checklist</h2><p class="block-answer" data-answer="true">Compliance checklist includes: ☐ Invoices issued from a structured-format system (UBL 2.  1 recommended).</p><ul>
        <li>☐ Invoices issued from a structured-format system (UBL 2.1 recommended).</li>
        <li>☐ Sequential numbering, allocated atomically, no gaps.</li>
        <li>☐ Tamper-resistance: issued invoices cannot be edited or deleted, only reversed via credit notes.</li>
        <li>☐ TLV QR on every Simplified Tax Invoice, length bytes computed on UTF-8.</li>
        <li>☐ Six-year archive in object-locked / WORM storage.</li>
        <li>☐ PIH chain optional-but-stored (Phase 2-ready).</li>
        <li>☐ UBL 2.1 XML persisted alongside the PDF (Phase 2-ready).</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Phase 1 is about structure, sequence, immutability, and a five-tag QR — not signing or transport.   The penalty schedule is shared with Phase 2; missing QR on a B2C invoice still triggers fines.</p><ul>
        <li>Phase 1 is about structure, sequence, immutability, and a five-tag QR — not signing or transport.</li>
        <li>The penalty schedule is shared with Phase 2; missing QR on a B2C invoice still triggers fines.</li>
        <li>Doing Phase 1 properly (UBL 2.1 + PIH chain stored) cuts Phase 2 onboarding from weeks to days.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing_Simplified%20GL.pdf" rel="noopener noreferrer">ZATCA — Phase 1 Simplified Guide (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Documents/QRCodeCreation.pdf" rel="noopener noreferrer">ZATCA — TLV QR Code Creation guide (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" rel="noopener noreferrer">ZATCA — Roll-out phases</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Documents/Einvoicing_FAQ_EN.pdf" rel="noopener noreferrer">ZATCA — E-invoicing FAQ (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/Simplified-technical-guide.aspx" rel="noopener noreferrer">ZATCA — Simplified Technical Guide</a></li>
      </ul><p>Want a system that already enforces all of the above and migrates you to Phase 2 in place? <a href="/__LANG__/e-invoicing/zatca-phase-1">See Invoicemonk for ZATCA Phase 1</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with ZATCA Phase 1, every VAT-registered Saudi taxpayer must issue invoices from a compliant <a href="/__LANG__/e-invoicing/zatca-phase-1">Phase 1 EGS</a>: structured XML payload, tamper-resistant storage, sequential numbering with no gaps, immutable record retention for six years, and a Base64-encoded TLV QR on every Simplified Tax Invoice (B2C). Phase 1 has no portal submission and no signing certificate — those are Phase 2.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ZATCA', 'Saudi Arabia', 'e-invoicing', 'how-to', 'Phase 1', 'Generation Phase'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-zatca-phase-1.jpg',
    featuredImageAlt: 'Editorial illustration of Saudi Arabia\'s e-invoicing compliance workflow for the how to comply with zatca phase 1 guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/zatca-phase-1',
    semanticKeywords: ['ZATCA Phase 1 setup', 'Generation Phase Saudi', 'tamper-resistant invoice', 'TLV QR Simplified Tax Invoice', 'ZATCA sequential numbering', 'Phase 1 to Phase 2 migration', 'Saudi e-invoicing 2021', 'immutable invoice storage', 'ZATCA EGS Phase 1'],
    priority: 'P2',
    targetCountry: 'sa',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Does ZATCA Phase 1 require a digital signature?', answer: 'No. Phase 1 (Generation Phase) requires structured, tamper-resistant invoices with a TLV QR on Simplified Tax Invoices, but does not require XAdES signing or a CSID. Those are introduced in Phase 2 (Integration Phase).' },
      { question: 'Do I need to send Phase 1 invoices to ZATCA?', answer: 'No — Phase 1 has no portal submission. You generate, archive, and present on request. Real-time clearance and 24-hour reporting begin in Phase 2.' },
      { question: 'Can I edit a Phase 1 invoice after it is issued?', answer: 'No. ZATCA prohibits edits or deletions in both phases. Issue a linked credit note to reverse the original, then issue a fresh invoice for the correct amount.' },
      { question: 'Do Phase 1 B2B invoices need a QR code?', answer: 'No. Only Simplified Tax Invoices (B2C) require a QR in Phase 1. Standard Tax Invoices (B2B) gain the QR requirement in Phase 2.' },
      { question: 'How long must Phase 1 invoices be retained?', answer: 'Six years, in storage that prevents deletion or alteration. Object-locked cloud storage or WORM media are the accepted patterns.' },
      { question: 'Is UBL 2.1 mandatory in Phase 1?', answer: 'No — Phase 1 mandates a structured electronic format, not a specific schema. UBL 2.1 is strongly recommended because Phase 2 mandates exactly that profile, so it is the lowest-risk choice.' },
    ],
    relatedTools: [
      { label: 'ZATCA Phase 1 mandate page', url: '/e-invoicing/zatca-phase-1', description: 'How Invoicemonk implements the Generation Phase' },
      { label: 'ZATCA Phase 1 explained', url: '/blog/zatca-phase-1-explained', description: 'Rule-set behind the setup' },
      { label: 'ZATCA Phase 1 vs Phase 2', url: '/blog/zatca-phase-1-vs-phase-2', description: 'What changes on your wave' },
    ],
  },

  // ============================================================
  // ZATCA Phase 1 — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'zatca-phase-1-explained',
    title: 'ZATCA Phase 1 Explained: The Saudi Generation Phase (2026)',
    excerpt: 'Plain-English explainer for the ZATCA Phase 1 Generation Phase: what it requires, who it applies to, when it went live, what it does not require, and how it sets up Phase 2 integration.',
    content: `<p><strong>ZATCA Phase 1 — the Generation Phase of Saudi Arabia's Fatoorah programme — has been in force since 4 December 2021. It requires every VAT-registered resident to issue invoices from a structured, tamper-resistant electronic system with sequential numbering and (for B2C) a TLV QR. It does not require cryptographic signing, certificates, or real-time submission to ZATCA — those are Phase 2.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> ZATCA</li>
          <li><strong>Mandate:</strong> Generation Phase (Phase 1) of Fatoorah</li>
          <li><strong>Live since:</strong> 4 December 2021</li>
          <li><strong>Scope:</strong> All VAT-registered resident persons in KSA</li>
          <li><strong>Transport:</strong> None — no portal submission</li>
          <li><strong>Successor:</strong> Phase 2 (Integration), wave-based from 1 January 2023</li>
          <li><strong>Last reviewed:</strong> 23 June 2026 against ZATCA Phase 1 Simplified Guide</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#requires">What Phase 1 requires</a></li>
          <li><a href="#notrequires">What Phase 1 does not require</a></li>
          <li><a href="#scope">Who is in scope</a></li>
          <li><a href="#why">Why Phase 1 exists</a></li>
          <li><a href="#penalties">Penalties</a></li>
          <li><a href="#takeover">When Phase 2 takes over</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Macro context — Phase 1 is a structured-invoice mandate without transport</h2><p class="block-answer" data-answer="true">Globally, e-invoicing mandates fall into two macro categories: structured-invoice mandates (require a specific format and controls, no transport — e.</p><p>Globally, e-invoicing mandates fall into two macro categories: <em>structured-invoice mandates</em> (require a specific format and controls, no transport — e.g. France pre-2026, Australia, UK MTD's structured-record requirement) and <em>CTC clearance/reporting mandates</em> (add a state-operated transport — e.g. Italy SdI, India IRP, ZATCA Phase 2). Phase 1 is the former. ZATCA used it as the prerequisite layer for Phase 2: get every VAT-registered business onto a compliant electronic system first, then add the cryptographic and transport layer.</p><h2 id="requires">What Phase 1 requires</h2><p class="block-answer" data-answer="true">Every VAT-registered business in Saudi Arabia must:</p><p>Every VAT-registered business in Saudi Arabia must:</p><ul>
        <li>Generate invoices in a <strong>structured electronic format</strong> using a compliant system. Handwritten invoices and editable spreadsheets are non-compliant.</li>
        <li>Operate a <strong>tamper-resistant</strong> system — once an invoice is issued, it cannot be edited or deleted, only reversed via credit notes.</li>
        <li>Allocate <strong>sequential invoice numbers</strong> with no gaps.</li>
        <li>Embed a <strong>QR code</strong> on Simplified Tax Invoices (B2C), with seller name, VAT number, timestamp, total with VAT, and VAT amount encoded as Base64 TLV.</li>
        <li>Retain records in <strong>immutable storage for six years</strong>.</li>
      </ul><h2 id="notrequires">What Phase 1 does <em>not</em> require</h2><p class="block-answer" data-answer="true">No CSID or XAdES signature (introduced in Phase 2).  No real-time submission to ZATCA (no clearance, no 24-hour reporting).</p><ul>
        <li>No CSID or XAdES signature (introduced in Phase 2).</li>
        <li>No real-time submission to ZATCA (no clearance, no 24-hour reporting).</li>
        <li>No invoice hash chain (recommended for forward compatibility, but not enforced).</li>
        <li>No QR on Standard Tax Invoices (B2B) — that becomes mandatory in Phase 2.</li>
      </ul><h2 id="scope">Who is in scope?</h2><p class="block-answer" data-answer="true">All resident VAT-registered persons in Saudi Arabia, plus any party issuing tax invoices on their behalf.  Non-resident sellers without a Saudi VAT registration are out of scope.</p><p>All <em>resident</em> VAT-registered persons in Saudi Arabia, plus any party issuing tax invoices on their behalf. Non-resident sellers without a Saudi VAT registration are out of scope. Once your wave is called for the Phase 2 Integration Phase, the Phase 2 rules supersede Phase 1 for that Solution Unit, but the Phase 1 controls remain preconditions.</p><h2 id="why">Why Phase 1 exists</h2><p class="block-answer" data-answer="true">Phase 1 is the baseline that made Phase 2 possible.</p><p>Phase 1 is the baseline that made Phase 2 possible. It forced every VAT-registered business onto a compliant electronic system, which in turn made the rollout of cryptographic signing and real-time clearance technically feasible. If a business skipped Phase 1 controls, Phase 2 onboarding becomes painful — there is no compliant payload to sign, no sequential numbering to chain, and no immutable archive to point at during an audit.</p><h2 id="penalties">Penalties</h2><p class="block-answer" data-answer="true">The penalty schedule under the e-invoicing regulation applies in both phases.</p><p>The penalty schedule under the e-invoicing regulation applies in both phases. Common Phase 1 fines:</p><ul>
        <li><strong>Missing QR on a B2C Simplified Tax Invoice:</strong> warning, then SAR 1,000 – SAR 5,000.</li>
        <li><strong>Editable system that cannot prove immutability:</strong> warning, then SAR 5,000 – SAR 10,000.</li>
        <li><strong>Deletion or alteration of an issued invoice:</strong> up to SAR 50,000.</li>
        <li><strong>Failure to retain records for six years:</strong> up to SAR 50,000.</li>
      </ul><p>The most common Phase 1 breach in ZATCA field inspections is editable spreadsheet "systems" that cannot prove tamper-resistance.</p><h2 id="takeover">When does Phase 2 take over?</h2><p class="block-answer" data-answer="true">ZATCA notifies each taxpayer wave individually with a six-month integration window.  The wave criteria have stepped down from prior-year VATable revenue ≥ SAR 3 bn (Wave 1, January 2023) to small businesses with revenue around SAR 2.</p><p>ZATCA notifies each taxpayer wave individually with a six-month integration window. The wave criteria have stepped down from prior-year VATable revenue ≥ SAR 3 bn (Wave 1, January 2023) to small businesses with revenue around SAR 2.5 m by 2026; the remainder are being onboarded through 2026. The phase comparison — and the migration playbook — is in <a href="/__LANG__/blog/zatca-phase-1-vs-phase-2">ZATCA Phase 1 vs Phase 2</a>.</p><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Phase 1 is a structured-invoice mandate without transport — structure, sequence, immutability, B2C QR.   Live since 4 December 2021 and still in force for any wave not yet integrated.</p><ul>
        <li>Phase 1 is a structured-invoice mandate without transport — structure, sequence, immutability, B2C QR.</li>
        <li>Live since 4 December 2021 and still in force for any wave not yet integrated.</li>
        <li>Penalties are shared with Phase 2; missing QR on B2C is the most-fined breach.</li>
        <li>Phase 1 done correctly turns Phase 2 onboarding into a configuration step, not a project.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing_Simplified%20GL.pdf" rel="noopener noreferrer">ZATCA — Phase 1 Simplified Guide (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Documents/Einvoicing_FAQ_EN.pdf" rel="noopener noreferrer">ZATCA — E-invoicing FAQ (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/What-is-e-invoicing.aspx" rel="noopener noreferrer">ZATCA — What is e-invoicing?</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" rel="noopener noreferrer">ZATCA — Roll-out phases</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/Simplified-technical-guide.aspx" rel="noopener noreferrer">ZATCA — Simplified Technical Guide</a></li>
      </ul><p>Ready to implement Phase 1 properly? Read the <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-1">Phase 1 setup playbook</a>, or compare with the next stage in <a href="/__LANG__/blog/zatca-phase-1-vs-phase-2">ZATCA Phase 1 vs Phase 2</a>. The product implementation is at <a href="/__LANG__/e-invoicing/zatca-phase-1">/e-invoicing/zatca-phase-1</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> ZATCA Phase 1 — the Generation Phase of Saudi Arabia's Fatoorah programme — has been in force since 4 December 2021. It requires every VAT-registered resident to issue invoices from a structured, tamper-resistant electronic system with sequential numbering and (for B2C) a TLV QR. It does not require cryptographic signing, certificates, or real-time submission to ZATCA — those are Phase 2.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ZATCA', 'Saudi Arabia', 'Phase 1', 'explainer', 'Generation Phase'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/zatca-phase-1-explained.jpg',
    featuredImageAlt: 'Editorial illustration of Saudi Arabia\'s e-invoicing compliance workflow for the zatca phase 1 explained guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/zatca-phase-1',
    semanticKeywords: ['ZATCA Phase 1', 'Generation Phase Saudi Arabia', 'Fatoorah Phase 1', 'Saudi e-invoicing 2021', 'tamper-resistant invoice ZATCA', 'Phase 1 vs Phase 2', 'B2C QR Saudi Arabia', 'structured electronic invoice KSA', 'Phase 1 scope', 'Phase 1 penalties'],
    priority: 'P2',
    targetCountry: 'sa',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'When did ZATCA Phase 1 go live?', answer: 'ZATCA Phase 1 (the Generation Phase) went live on 4 December 2021 and applied to all VAT-registered businesses in Saudi Arabia from that date.' },
      { question: 'Is ZATCA Phase 1 still in force?', answer: 'Yes, for any VAT-registered taxpayer whose wave has not yet been called for the Phase 2 Integration Phase. Once your wave is integrated, Phase 2 rules supersede Phase 1 for that Solution Unit, but Phase 1 controls remain preconditions.' },
      { question: 'Do Phase 1 B2B invoices need a QR code?', answer: 'No. Only Simplified Tax Invoices (B2C) require a QR in Phase 1. Standard Tax Invoices (B2B) gain the QR requirement in Phase 2.' },
      { question: 'Does Phase 1 require a specific XML schema?', answer: 'No, Phase 1 only mandates a structured electronic format. UBL 2.1 is strongly recommended because Phase 2 mandates exactly that profile, making the eventual migration trivial.' },
      { question: 'What are the most common Phase 1 inspection findings?', answer: 'Editable spreadsheet "systems" that cannot prove immutability, missing QR on B2C invoices, gaps in sequential numbering, and incomplete six-year archives.' },
      { question: 'Are non-residents subject to Phase 1?', answer: 'No. Phase 1 applies only to resident VAT-registered persons in KSA. Non-resident sellers without a Saudi VAT registration are out of scope for both phases.' },
    ],
    relatedTools: [
      { label: 'ZATCA Phase 1 mandate page', url: '/e-invoicing/zatca-phase-1', description: 'How Invoicemonk implements the Generation Phase' },
      { label: 'How to comply with ZATCA Phase 1', url: '/blog/how-to-comply-with-zatca-phase-1', description: 'Setup playbook' },
      { label: 'ZATCA Phase 1 vs Phase 2', url: '/blog/zatca-phase-1-vs-phase-2', description: 'Side-by-side comparison' },
    ],
  },

  // ============================================================
  // ZATCA — Archetype 3 (Comparison: Phase 1 vs Phase 2)
  // ============================================================
  {
    slug: 'zatca-phase-1-vs-phase-2',
    title: 'ZATCA Phase 1 vs Phase 2: What Changes When You Integrate (2026)',
    excerpt: 'Side-by-side comparison of the Saudi Generation Phase and Integration Phase — rules, artefacts, transport, certificates, QR tags, retention, penalties, and the migration playbook for your wave.',
    content: `<p><strong>The Saudi Fatoorah programme has two phases. Phase 1 (Generation, since December 2021) requires structured, tamper-resistant invoices and a five-tag TLV QR on B2C documents. Phase 2 (Integration, since January 2023, wave-based) adds a state-issued CSID, XAdES B-B signing, a SHA-256 hash chain, real-time clearance for B2B Standard Tax Invoices, 24-hour reporting for B2C Simplified Tax Invoices, and four extra QR tags for the cryptographic stamp.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> ZATCA — both phases</li>
          <li><strong>Phase 1:</strong> Generation, structured invoice + B2C QR, no transport</li>
          <li><strong>Phase 2:</strong> Integration, UBL 2.1 KSA + XAdES + hash chain + clearance/reporting</li>
          <li><strong>Migration trigger:</strong> ZATCA wave notification (six-month window)</li>
          <li><strong>Common base:</strong> sequential numbering, immutability, six-year archive, penalty schedule</li>
          <li><strong>Last reviewed:</strong> 23 June 2026 against ZATCA Roll-out Phases page</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#sbs">Side-by-side comparison</a></li>
          <li><a href="#qr">How the QR changes</a></li>
          <li><a href="#flow">How the issuance flow changes</a></li>
          <li><a href="#migration">Migration playbook</a></li>
          <li><a href="#checklist">Pre-Phase-2 checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Macro context — same regulator, two layers</h2><p class="block-answer" data-answer="true">ZATCA designed the two phases to be additive, not substitutive.</p><p>ZATCA designed the two phases to be additive, not substitutive. Phase 1 controls (structure, sequence, immutability, B2C QR, six-year archive) remain in force throughout — Phase 2 adds the cryptographic and transport layer on top. A taxpayer that built Phase 1 sloppily (editable spreadsheets, gappy numbering, no UBL payload) faces a real project for Phase 2; one that built Phase 1 correctly faces a configuration step.</p><h2 id="sbs">Side-by-side comparison</h2><table>
        <thead>
          <tr><th>Aspect</th><th>Phase 1 — Generation</th><th>Phase 2 — Integration</th></tr>
        </thead>
        <tbody>
          <tr><td>Live since</td><td>4 December 2021</td><td>1 January 2023 (Wave 1)</td></tr>
          <tr><td>Rollout</td><td>All VAT-registered, simultaneously</td><td>Wave-based, six-month notice</td></tr>
          <tr><td>Structured payload</td><td>Required (schema unspecified)</td><td>Required (UBL 2.1 KSA profile)</td></tr>
          <tr><td>Tamper-resistance</td><td>Required</td><td>Required</td></tr>
          <tr><td>Sequential numbering</td><td>Required (invoice number)</td><td>Required (ICV per Solution Unit, no gaps)</td></tr>
          <tr><td>Hash chain (PIH)</td><td>Not required (recommended)</td><td>Required — SHA-256 chained per Solution Unit</td></tr>
          <tr><td>Signing certificate</td><td>None</td><td>CSID issued by ZATCA per Solution Unit</td></tr>
          <tr><td>Cryptographic signature</td><td>None</td><td>XAdES B-B applied after canonicalisation</td></tr>
          <tr><td>QR on Simplified (B2C)</td><td>Required — 5 TLV tags</td><td>Required — 9 TLV tags (adds crypto-stamp)</td></tr>
          <tr><td>QR on Standard (B2B)</td><td>Not required</td><td>Required</td></tr>
          <tr><td>Transport to ZATCA</td><td>None (offline)</td><td>Clearance (B2B real-time) / Reporting (B2C &lt;24 h)</td></tr>
          <tr><td>Buyer delivery (B2B)</td><td>Direct from seller</td><td>Only after ZATCA clearance returns</td></tr>
          <tr><td>Archive</td><td>6 years, immutable</td><td>6 years, immutable (+ cleared response)</td></tr>
          <tr><td>Penalty schedule</td><td>Shared</td><td>Shared</td></tr>
        </tbody>
      </table><h2 id="qr">How the QR changes between phases</h2><p class="block-answer" data-answer="true">Phase 1 QR has five tags: seller name, VAT number, timestamp, total with VAT, VAT amount.  Phase 2 adds four more: invoice hash, cryptographic stamp, public key, and (for Standard Tax Invoices) the signature of the public key.</p><p>Phase 1 QR has five tags: seller name, VAT number, timestamp, total with VAT, VAT amount. Phase 2 adds four more: invoice hash, cryptographic stamp, public key, and (for Standard Tax Invoices) the signature of the public key. The same Base64-TLV encoding, but length-byte calculation on UTF-8 still trips up implementations on Arabic seller names — see <a href="/__LANG__/blog/zatca-phase-2-common-errors">ZATCA Phase 2 common errors</a> for the catalogue.</p><h2 id="flow">How the issuance flow changes</h2><h3>Phase 1 issuance flow</h3><ol>
        <li>Sales event in ERP/POS.</li>
        <li>EGS allocates the sequential invoice number atomically.</li>
        <li>EGS renders structured payload (UBL 2.1 recommended) + PDF/A-3 + (B2C) TLV QR.</li>
        <li>EGS persists invoice in immutable storage.</li>
        <li>EGS delivers to buyer directly.</li>
      </ol><h3>Phase 2 issuance flow</h3><ol>
        <li>Sales event in ERP/POS.</li>
        <li>EGS allocates ICV atomically per Solution Unit.</li>
        <li>EGS renders UBL 2.1 KSA-extension XML; computes invoice hash; chains to previous (PIH).</li>
        <li>EGS applies XAdES B-B signature with Production CSID after canonicalisation.</li>
        <li>EGS embeds 9-tag TLV QR (Phase 1 tags + crypto stamp).</li>
        <li><strong>Standard (B2B):</strong> POST to Clearance API → receive cleared invoice → deliver to buyer.</li>
        <li><strong>Simplified (B2C):</strong> deliver to buyer immediately → POST to Reporting API within 24 hours.</li>
        <li>EGS persists invoice + cleared response in immutable storage.</li>
      </ol><h2 id="migration">Migration playbook (Phase 1 → Phase 2)</h2><p class="block-answer" data-answer="true">Migration playbook (Phase 1 → Phase 2) includes: Confirm wave on Fatoora.   The official notification names you and starts the six-month clock.</p><ol>
        <li><strong>Confirm wave on Fatoora.</strong> The official notification names you and starts the six-month clock.</li>
        <li><strong>Onboard the Solution Unit.</strong> Generate CSR → request OTP → exchange for Compliance CSID → pass compliance checks → promote to Production CSID. Full flow in <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-2">How to comply with ZATCA Phase 2</a>.</li>
        <li><strong>Upgrade the payload.</strong> If you persisted UBL 2.1 in Phase 1, add the KSA extensions and the ProfileID; if not, schema-migrate the issuance pipeline now.</li>
        <li><strong>Initialise the hash chain.</strong> If you stored PIH in Phase 1, the chain continues. If not, the chain starts fresh from the first cleared invoice under the new CSID.</li>
        <li><strong>Switch transport.</strong> Wire the Clearance API for B2B and the Reporting API for B2C; gate B2B buyer delivery on cleared response.</li>
        <li><strong>Extend the QR.</strong> Add the four crypto-stamp tags to Simplified, and add the QR to Standard.</li>
        <li><strong>Update the archive.</strong> Store the cleared response (or reporting acknowledgement) alongside the XML and PDF/A-3.</li>
      </ol><h2 id="checklist">Pre-Phase-2 checklist (run during your six-month window)</h2><p class="block-answer" data-answer="true">Pre-Phase-2 checklist (run during your six-month window) includes: ☐ UBL 2.  1 KSA-extension XML produced for every invoice.</p><ul>
        <li>☐ UBL 2.1 KSA-extension XML produced for every invoice.</li>
        <li>☐ Production CSID installed per Solution Unit.</li>
        <li>☐ Compliance certificate purged from production keystore.</li>
        <li>☐ All four invoice/note types tested end-to-end against the sandbox.</li>
        <li>☐ Hash chain (PIH) live; ICV gap-free.</li>
        <li>☐ B2B buyer delivery gated on cleared response.</li>
        <li>☐ B2C reporting job runs at least every 60 minutes.</li>
        <li>☐ 9-tag QR generated and verified with ZATCA's decoder.</li>
        <li>☐ Six-year archive policy extended to include cleared responses.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Phase 2 is additive: every Phase 1 control remains, and the cryptography + transport layer is bolted on top.   The QR grows from 5 to 9 tags; B2B invoices gain a QR for the first time.</p><ul>
        <li>Phase 2 is additive: every Phase 1 control remains, and the cryptography + transport layer is bolted on top.</li>
        <li>The QR grows from 5 to 9 tags; B2B invoices gain a QR for the first time.</li>
        <li>B2B is now <em>cleared</em> before delivery; B2C is <em>reported</em> within 24 hours.</li>
        <li>The migration is a project if Phase 1 was sloppy and a configuration step if Phase 1 was done right.</li>
      </ul><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/Roll-out-phases.aspx" rel="noopener noreferrer">ZATCA — Roll-out phases</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing_Detailed__Guideline.pdf" rel="noopener noreferrer">ZATCA — Detailed Guidelines for E-Invoicing v2 (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing-Detailed-Technical-Guideline.pdf" rel="noopener noreferrer">ZATCA — Detailed Technical Guidelines (PDF)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/E-Invoice-specifications.aspx" rel="noopener noreferrer">ZATCA — E-Invoice specifications</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/PreparingYourBusiness/Phase2/Pages/How-to-prepare.aspx" rel="noopener noreferrer">ZATCA — How to prepare for Phase 2</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Documents/Einvoicing_FAQ_EN.pdf" rel="noopener noreferrer">ZATCA — E-invoicing FAQ (PDF)</a></li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Implementation guides: How to comply with Phase 1 and How to comply with Phase 2.  Rule-set explainers: Phase 1 explained and Phase 2 explained.</p><p>Implementation guides: <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-1">How to comply with Phase 1</a> and <a href="/__LANG__/blog/how-to-comply-with-zatca-phase-2">How to comply with Phase 2</a>. Rule-set explainers: <a href="/__LANG__/blog/zatca-phase-1-explained">Phase 1 explained</a> and <a href="/__LANG__/blog/zatca-phase-2-explained">Phase 2 explained</a>. Debugging: <a href="/__LANG__/blog/zatca-phase-2-common-errors">Common errors</a>. Product pages: <a href="/__LANG__/e-invoicing/zatca-phase-1">/e-invoicing/zatca-phase-1</a> and <a href="/__LANG__/e-invoicing/zatca-phase-2">/e-invoicing/zatca-phase-2</a>.</p><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> The Saudi Fatoorah programme has two phases. Phase 1 (Generation, since December 2021) requires structured, tamper-resistant invoices and a five-tag TLV QR on B2C documents. Phase 2 (Integration, since January 2023, wave-based) adds a state-issued CSID, XAdES B-B signing, a SHA-256 hash chain, real-time clearance for B2B Standard Tax Invoices, 24-hour reporting for B2C Simplified Tax Invoices, and four extra QR tags for the cryptographic stamp.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['ZATCA', 'Saudi Arabia', 'comparison', 'Phase 1', 'Phase 2', 'migration'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/zatca-phase-1-vs-phase-2.jpg',
    featuredImageAlt: 'Editorial illustration of Saudi Arabia\'s e-invoicing compliance workflow for the zatca phase 1 vs phase 2 guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/zatca-phase-2',
    semanticKeywords: ['ZATCA Phase 1 vs Phase 2', 'Generation vs Integration Phase', 'Fatoorah migration', 'ZATCA wave preparation', 'Phase 2 onboarding from Phase 1', 'TLV QR 5 vs 9 tags', 'ZATCA clearance vs reporting', 'Saudi e-invoicing migration', 'Phase 1 to Phase 2 checklist'],
    priority: 'P1',
    targetCountry: 'sa',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'What is the single biggest change between Phase 1 and Phase 2?', answer: 'Real-time transport. Phase 1 has no submission to ZATCA at all; Phase 2 requires B2B Standard Tax Invoices to be cleared by ZATCA before delivery and B2C Simplified Tax Invoices to be reported within 24 hours.' },
      { question: 'Does Phase 1 stop applying once I move to Phase 2?', answer: 'No — Phase 1 controls (structure, sequential numbering, tamper-resistance, immutable six-year archive) remain in force. Phase 2 adds the cryptographic and transport layer on top.' },
      { question: 'How many TLV QR tags do I need in each phase?', answer: 'Phase 1 requires 5 tags (seller name, VAT number, timestamp, total with VAT, VAT amount) on Simplified Tax Invoices only. Phase 2 requires 9 tags (the original 5 plus invoice hash, cryptographic stamp, public key, signature of public key) on both Simplified and Standard Tax Invoices.' },
      { question: 'Do I need a CSID in Phase 1?', answer: 'No. CSIDs (Cryptographic Stamp Identifiers) are issued by ZATCA only for Phase 2. In Phase 1 there is no signing certificate and no submission, so there is nothing to authenticate.' },
      { question: 'How long is my Phase 2 integration window once my wave is called?', answer: 'ZATCA gives a minimum of six months between wave announcement and enforcement. Use that window to onboard Solution Units, upgrade the payload to UBL 2.1 KSA-extension, initialise the hash chain, switch to the Clearance/Reporting APIs, and extend the QR.' },
      { question: 'Can I run Phase 1 and Phase 2 in parallel across different Solution Units?', answer: 'Yes — until your wave is enforced, your existing Phase 1 setup remains valid for any Solution Unit not yet onboarded. Once a Solution Unit has a Production CSID, every invoice from it must be Phase 2-compliant.' },
    ],
    relatedTools: [
      { label: 'ZATCA Phase 1 mandate page', url: '/e-invoicing/zatca-phase-1', description: 'Generation Phase implementation' },
      { label: 'ZATCA Phase 2 mandate page', url: '/e-invoicing/zatca-phase-2', description: 'Integration Phase implementation' },
      { label: 'How to comply with ZATCA Phase 2', url: '/blog/how-to-comply-with-zatca-phase-2', description: 'Onboarding playbook for the migration' },
    ],
  },
];

// Register batch 1 posts in the global blog posts array so they're
// discoverable via getBlogPostBySlug, BlogPost route, and Related Guides rails.
eInvoicingClusterPosts.forEach((post) => {
  if (!blogPosts.find((p) => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
