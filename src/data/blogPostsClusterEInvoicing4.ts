import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Blog Posts Cluster — E-Invoicing (Batch 4).
 *
 * - MyInvois Malaysia cluster: HowTo + Explainer (2)
 * - GST IRN India cluster: HowTo + Explainer (2)
 * - Outer-entity supporting articles: QR codes on tax invoices (TLV/JWT/URL),
 *   Real-time invoice reporting / CTC (2)
 *
 * Rewritten to the full Koray-grade semantic SEO contract (Batch 4):
 *  - Hero direct-answer paragraph (AI-overview ready, <p><strong>).
 *  - At-a-glance fact box (entity-attribute-value triples).
 *  - Table of contents with anchors to every H2.
 *  - Macro/micro context, fan-out PAA H2/H3 questions.
 *  - Comparative tables and entity glossaries.
 *  - Authority citations (hasil.gov.my, einvoice.hasil.gov.my, gst.gov.in,
 *    einv-apisandbox.nic.in, cbic.gov.in, zatca.gov.sa, ec.europa.eu).
 *  - Compliance checklists, error catalogues, walkthroughs.
 *  - Expanded FAQ blocks (5–7 questions) powering FAQPage schema.
 *  - Related-reading bridges to pillar, sub-source, siblings, glossary.
 *  - Internal links use the /__LANG__/... token rewritten by enhanceLinks.
 */
export const eInvoicingClusterPostsBatch4: BlogPost[] = [
  // ============================================================
  // MyInvois Malaysia — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-myinvois-malaysia',
    title: 'How to Comply with MyInvois in Malaysia: Onboard with LHDN and Issue Your First UUID-Stamped Invoice (2026)',
    excerpt: 'Step-by-step playbook for issuing LHDN MyInvois e-invoices in Malaysia — onboarding, UBL 2.1 / JSON payload, UUID issuance, 72-hour rejection window, and the Phase 4 / Phase 5 small-taxpayer rollout deferred to 2026.',
    content: `<p><strong>To comply with MyInvois in Malaysia, an in-scope taxpayer must register on the LHDN MyInvois portal at einvoice.hasil.gov.my, provision an LHDN-onboarded digital certificate bound to its TIN, build a UBL 2.1 (XML) or JSON payload in the MyInvois profile with seller and buyer TINs plus the 8% SST breakdown, submit it to the MyInvois API to receive a UUID and embedded QR, then render the UUID and QR on the buyer PDF — observing the 72-hour rejection window before the cleared invoice becomes final.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Inland Revenue Board of Malaysia (Lembaga Hasil Dalam Negeri, LHDN / IRBM).</li>
          <li><strong>Mandate:</strong> MyInvois e-Invoicing, the national continuous transaction control (CTC) clearance regime.</li>
          <li><strong>Artefact:</strong> Signed UBL 2.1 (XML) or JSON payload + LHDN UUID + embedded QR.</li>
          <li><strong>Transport:</strong> MyInvois REST API (production) or MyInvois Portal (low-volume direct entry).</li>
          <li><strong>Applies to:</strong> Resident taxpayers in the active rollout wave (Phase 1 from 1 Aug 2024; Phase 4 RM1m–RM5m deferred to 1 Jan 2026; Phase 5 below RM1m on the published LHDN timeline).</li>
          <li><strong>Tax rate handled:</strong> 8% Sales and Service Tax (SST) for taxable services; SST-exempt and zero-rated flows supported.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against the LHDN MyInvois Portal and the LHDN e-Invoice General FAQs (May 2026 update).</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#prereqs">Pre-requisites</a></li>
          <li><a href="#register">Step 1 — Register on the MyInvois portal</a></li>
          <li><a href="#certificate">Step 2 — Provision your digital certificate</a></li>
          <li><a href="#payload">Step 3 — Map your invoice to the MyInvois schema</a></li>
          <li><a href="#submit">Step 4 — Submit to the MyInvois API</a></li>
          <li><a href="#window">Step 5 — Manage the 72-hour rejection window</a></li>
          <li><a href="#buyer">Step 6 — Present the UUID and QR to the buyer</a></li>
          <li><a href="#errors">Common validation errors and how to fix them</a></li>
          <li><a href="#checklist">Pre-go-live compliance checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where MyInvois sits in the global e-invoicing landscape</h2><p class="block-answer" data-answer="true">MyInvois is a clearance-model continuous transaction control regime — the same architectural family as ZATCA Phase 2 in Saudi Arabia, GST IRN in India, and NRS / FIRS MBS in Nigeria.</p><p>MyInvois is a <em>clearance</em>-model continuous transaction control regime — the same architectural family as <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 in Saudi Arabia</a>, <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN in India</a>, and <a href="/__LANG__/e-invoicing/firs-mbs-nigeria">NRS / FIRS MBS in Nigeria</a>. The seller submits a structured payload, the regulator validates it, and the invoice only becomes legally valid once an <a href="/__LANG__/glossary/uuid">LHDN UUID</a> is returned. The distinguishing trait of MyInvois is the post-clearance 72-hour rejection window — no other major mandate gives buyer and seller a defined cancellation slot after clearance.</p><p>If you operate across ASEAN, you are now juggling MyInvois, the Philippines BIR CAS, Vietnam's GDT system, and (from 2030) the EU ViDA Digital Reporting Requirements. The architectures rhyme, but the artefacts diverge. Build a single canonical invoice in your platform and let the integration layer emit the per-jurisdiction payload — MyInvois UBL 2.1 here, INV-01 JSON for India, UBL with TLV QR for ZATCA.</p><h2 id="prereqs">What you need before you start</h2><p class="block-answer" data-answer="true">An active SSM business registration with a Tax Identification Number (TIN) issued by LHDN.</p><ul>
        <li>An active <strong>SSM business registration</strong> with a Tax Identification Number (TIN) issued by LHDN.</li>
        <li>Confirmation that your business is in the current LHDN rollout wave — Phase 1 (turnover &gt; RM100m) live since 1 Aug 2024, Phase 2 (RM25m–RM100m) live since 1 Jan 2025, Phase 3 (RM5m–RM25m) live from 1 Jul 2025, Phase 4 (RM1m–RM5m) deferred by LHDN to 1 Jan 2026, Phase 5 (below RM1m) per the published LHDN timeline.</li>
        <li>SST registration if you supply taxable services; the SST registration number is mandatory on the payload for SST-registered sellers.</li>
        <li>An invoicing platform that can emit UBL 2.1 or JSON in the MyInvois profile and call the MyInvois API with a valid digital certificate.</li>
        <li>NTP-synchronised server clocks — the MyInvois API rejects payloads whose issue timestamp drifts beyond the tolerated window.</li>
      </ul><h2 id="register">Step 1 — Register on the MyInvois portal</h2><h3>Who has to register — the taxpayer or the software vendor?</h3><p class="block-answer" data-answer="true">The taxpayer registers as the Taxpayer on the MyInvois Portal; the software vendor is not a substitute.  The taxpayer-side registration binds the TIN to the MyInvois Portal so every payload submitted under that TIN is attributable.</p><p>The taxpayer registers as the <em>Taxpayer</em> on the MyInvois Portal; the software vendor is not a substitute. The taxpayer-side registration binds the TIN to the MyInvois Portal so every payload submitted under that TIN is attributable. Tax agents can be authorised as <em>Representatives</em> via the portal's role management, but the TIN ownership remains with the taxpayer.</p><h3>What information do I need to register?</h3><p class="block-answer" data-answer="true">TIN, registered company name, SST registration number (if applicable), business address, the email used for portal correspondence, and the principal officer details.  The portal then unlocks the API enrolment flow and the digital certificate request.</p><p>TIN, registered company name, SST registration number (if applicable), business address, the email used for portal correspondence, and the principal officer details. The portal then unlocks the API enrolment flow and the digital certificate request.</p><h2 id="certificate">Step 2 — Provision your digital certificate</h2><h3>How is the certificate issued?</h3><p class="block-answer" data-answer="true">LHDN requires every submitted payload to be signed with a certificate issued by an LHDN-approved Certificate Authority (CA).</p><p>LHDN requires every submitted payload to be signed with a certificate issued by an LHDN-approved Certificate Authority (CA). Your invoicing platform generates a Certificate Signing Request (CSR) bound to your TIN; you submit the CSR to the chosen LHDN-listed CA (such as MSC Trustgate, Pos Digicert or Telekom Applied Business); the CA returns the X.509 certificate, which is then registered on the MyInvois Portal. The private key never leaves your tenant. Invoicemonk runs the CSR + CA + portal-registration sequence inside the product so you never handle key material.</p><h3>Does each branch need its own certificate?</h3><p class="block-answer" data-answer="true">No.  The MyInvois certificate is bound to the TIN, not to a device or branch.</p><p>No. The MyInvois certificate is bound to the TIN, not to a device or branch. A single certificate signs every outgoing payload. Large operators sometimes provision per-branch certificates for audit segregation, but it is not a regulatory requirement.</p><h2 id="payload">Step 3 — Map your invoice to the MyInvois schema</h2><p class="block-answer" data-answer="true">The MyInvois payload follows UBL 2. 1 (XML) or JSON in the LHDN profile.</p><p>The MyInvois payload follows UBL 2.1 (XML) or JSON in the LHDN profile. The mandatory blocks are:</p><ul>
        <li><strong>Header:</strong> document type code (Invoice, Credit Note, Debit Note, Refund Note, Self-billed Invoice), invoice number (seller-controlled), issue date and time (UTC + Kuala Lumpur offset), currency.</li>
        <li><strong>Parties:</strong> seller TIN, seller name, seller SST registration number (where applicable); buyer TIN, buyer name, buyer SST registration number (B2B) or a generic identifier for B2C consolidated invoices.</li>
        <li><strong>Line items:</strong> LHDN classification code, item description, quantity, unit price, line subtotal, applicable SST rate (8% for taxable services, 0% for SST-exempt or zero-rated).</li>
        <li><strong>Tax summary:</strong> SST breakdown per rate, total taxable amount, total tax amount.</li>
        <li><strong>Totals:</strong> total excluding tax, total including tax, payable amount.</li>
        <li><strong>Payment terms and reference data:</strong> payment mode, due date, currency code, FX rate for foreign-currency invoices.</li>
        <li><strong>Signature block:</strong> XAdES enveloped signature using the LHDN-onboarded certificate, computed over the canonicalised payload.</li>
      </ul><h2 id="submit">Step 4 — Submit to the MyInvois API and receive the UUID</h2><p class="block-answer" data-answer="true">Step 4 — Submit to the MyInvois API and receive the UUID includes: The platform builds the UBL 2.  1 or JSON payload.</p><ol>
        <li>The platform builds the UBL 2.1 or JSON payload.</li>
        <li>The payload is canonicalised and signed with the LHDN certificate.</li>
        <li>The signed payload is POSTed to the MyInvois API submission endpoint.</li>
        <li>MyInvois validates schema, TINs, SST computation, and signature.</li>
        <li>On success the API returns the LHDN-issued <strong>UUID</strong>, the validation date-time, and the embedded QR URL synchronously.</li>
        <li>The platform persists the UUID, the validation receipt, and binds the UUID + QR to the buyer PDF.</li>
      </ol><h2 id="window">Step 5 — Manage the 72-hour rejection window</h2><p class="block-answer" data-answer="true">After UUID issuance, both seller and buyer have a 72-hour window to cancel or reject the invoice via the MyInvois API or Portal.</p><p>After UUID issuance, both seller and buyer have a 72-hour window to cancel or reject the invoice via the MyInvois API or Portal. Within the window:</p><ul>
        <li><strong>Seller cancellation:</strong> the seller can cancel its own cleared invoice (e.g. wrong buyer, wrong line items) without issuing a credit note.</li>
        <li><strong>Buyer rejection:</strong> the buyer can reject a cleared invoice — the seller must then re-issue or cancel.</li>
      </ul><p>After 72 hours the invoice is final — corrections must be made through a credit note that gets its own UUID and references the original. Surface the window timer in your dashboard or finance teams will miss it; Invoicemonk shows the countdown on the invoice timeline.</p><h2 id="buyer">Step 6 — Present the UUID and QR on the buyer-facing invoice</h2><p class="block-answer" data-answer="true">Every buyer-facing invoice must display the LHDN UUID and the embedded QR.</p><p>Every buyer-facing invoice must display the LHDN UUID and the embedded QR. The QR resolves to LHDN's public verification endpoint that confirms the UUID, the seller, the buyer, the totals, and the validation date-time. The buyer's accounts payable system uses the QR to verify the invoice before posting; without it, the invoice is not legally valid for SST recovery and the buyer is likely to block payment.</p><h2 id="errors">Common validation errors and how to fix them</h2><p class="block-answer" data-answer="true">Common validation errors and how to fix them includes: TIN not found — seller or buyer TIN failed the LHDN registry lookup.   Confirm the TIN format (10 digits for individuals, 12 for entities) and re-check the registration.</p><ul>
        <li><strong>TIN not found</strong> — seller or buyer TIN failed the LHDN registry lookup. Confirm the TIN format (10 digits for individuals, 12 for entities) and re-check the registration.</li>
        <li><strong>SST registration mismatch</strong> — declared SST registration number does not match the LHDN SST registry for the TIN. Update the registration on the portal before resubmitting.</li>
        <li><strong>Classification code invalid</strong> — line item carries a code outside the LHDN MyInvois classification list. Map to the closest valid code (the LHDN classification list is published as part of the SDK).</li>
        <li><strong>Tax amount mismatch</strong> — line-level SST does not equal the applied rate × taxable amount. Recompute at the line level and resign.</li>
        <li><strong>Signature failure</strong> — the XAdES signature does not validate against the certificate on file. Usually a canonicalisation drift; re-canonicalise (XML C14N for UBL) and resign.</li>
        <li><strong>Duplicate invoice number</strong> — the seller invoice number was already submitted under the same TIN. Use a unique sequence per seller.</li>
        <li><strong>Timestamp out of tolerance</strong> — issue date-time drifted from the MyInvois clock. Re-sync NTP and resubmit.</li>
      </ul><h2 id="checklist">Pre-go-live compliance checklist</h2><p class="block-answer" data-answer="true">Pre-go-live compliance checklist includes: ☐ Taxpayer registered on the MyInvois Portal and TIN bound to the platform.   ☐ LHDN-approved CA chosen; certificate issued from CSR and registered on the portal.</p><ul>
        <li>☐ Taxpayer registered on the MyInvois Portal and TIN bound to the platform.</li>
        <li>☐ LHDN-approved CA chosen; certificate issued from CSR and registered on the portal.</li>
        <li>☐ UBL 2.1 or JSON payload validates against the MyInvois SDK schema in sandbox.</li>
        <li>☐ Seller and buyer TINs resolve against the LHDN TIN registry.</li>
        <li>☐ SST 8% computation matches LHDN expectation on every taxable line.</li>
        <li>☐ Classification codes mapped against the LHDN classification list.</li>
        <li>☐ NTP synchronisation in place; issue timestamps in UTC + Kuala Lumpur offset.</li>
        <li>☐ UUID and QR rendered on the buyer PDF in the prescribed format.</li>
        <li>☐ 72-hour rejection window timer surfaced in the invoice dashboard.</li>
        <li>☐ Credit-note and self-billed-invoice flows tested end to end.</li>
        <li>☐ Consolidated B2C monthly submission tested (if applicable).</li>
        <li>☐ Archive policy proven for the seven-year LHDN retention period.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: MyInvois is clearance with a twist — every invoice needs a UUID, and the 72-hour rejection window is unique to Malaysia.   One certificate per TIN, not per device.</p><ul>
        <li>MyInvois is clearance with a twist — every invoice needs a UUID, and the 72-hour rejection window is unique to Malaysia.</li>
        <li>One certificate per TIN, not per device.</li>
        <li>TIN and SST registration are validated synchronously on every submission; pre-validate buyer data at onboarding.</li>
        <li>B2C is handled by monthly consolidated e-invoices; B2B is per-transaction clearance.</li>
        <li>The Phase 4 (RM1m–RM5m) wave was deferred to 1 January 2026 — confirm your wave on the LHDN portal before assuming you are out of scope.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Start at the e-invoicing pillar, then the MyInvois Malaysia mandate page.  For the regulatory context, read MyInvois Malaysia explained.</p><p>Start at the <a href="/__LANG__/e-invoicing">e-invoicing pillar</a>, then the <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois Malaysia mandate page</a>. For the regulatory context, read <a href="/__LANG__/blog/myinvois-malaysia-explained">MyInvois Malaysia explained</a>. The original 2024 launch context lives in <a href="/__LANG__/blog/myinvois-malaysia-explained">e-invoicing in Malaysia with MyInvois</a>. To compare across regimes, read <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models</a>. For the artefact details, see <a href="/__LANG__/blog/qr-codes-on-tax-invoices">QR codes on tax invoices</a> and <a href="/__LANG__/blog/real-time-invoice-reporting">real-time invoice reporting</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.hasil.gov.my/en/e-invoice/" rel="noopener noreferrer">LHDN — e-Invoice landing page</a></li>
        <li><a href="https://www.hasil.gov.my/en/e-invoice/implementation-of-e-invoicing-in-malaysia/e-invoice-implementation-timeline/" rel="noopener noreferrer">LHDN — e-Invoice Implementation Timeline (phases 1–5)</a></li>
        <li><a href="https://www.hasil.gov.my/media/0xqitc2t/lhdnm-e-invoice-general-faqs.pdf" rel="noopener noreferrer">LHDN — e-Invoice General FAQs (updated May 2026)</a></li>
        <li><a href="https://www.bernama.com/en/news.php/general/news.php?id=2431266" rel="noopener noreferrer">BERNAMA — Phase 4 deferral to 1 January 2026 for RM1m–RM5m taxpayers</a></li>
        <li><a href="https://sdk.myinvois.hasil.gov.my/" rel="noopener noreferrer">MyInvois Developer SDK — UBL 2.1 schema, classification list, API reference</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with MyInvois in Malaysia, an in-scope taxpayer must register on the LHDN MyInvois portal at einvoice.hasil.gov.my, provision an LHDN-onboarded digital certificate bound to its TIN, build a UBL 2.1 (XML) or JSON payload in the MyInvois profile with seller and buyer TINs plus the 8% SST breakdown, submit it to the MyInvois API to receive a UUID and embedded QR, then render the UUID and QR on the buyer PDF — observing the 72-hour rejection window before the cleared invoice becomes final.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['MyInvois', 'Malaysia', 'LHDN', 'e-invoicing', 'compliance', 'how-to', 'UUID', 'SST'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-myinvois-malaysia.jpg',
    featuredImageAlt: 'Editorial illustration of Malaysia\'s e-invoicing compliance workflow for the how to comply with myinvois malaysia guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/myinvois-malaysia',
    semanticKeywords: ['MyInvois Malaysia', 'LHDN UUID', 'UBL 2.1 Malaysia', 'MyInvois 72-hour window', 'SST 8% e-invoice', 'MyInvois API onboarding', 'einvoice.hasil.gov.my', 'LHDN certificate', 'Phase 4 deferral', 'MyInvois SDK', 'XAdES Malaysia'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'my',
    faq: [
      { question: 'What is the 72-hour rejection window in MyInvois?', answer: 'After LHDN issues the UUID, both seller and buyer have 72 hours to cancel or reject the invoice via the MyInvois Portal or API. The seller can self-cancel and re-issue; the buyer can reject. After 72 hours the invoice is final and corrections require a credit note that gets its own UUID and references the original.' },
      { question: 'Do I need a separate LHDN certificate per branch?', answer: 'No. The MyInvois certificate is bound to the TIN, not to a device or branch. A single certificate signs every payload from your tenant. Large operators sometimes provision per-branch certificates for internal audit segregation, but LHDN does not require it.' },
      { question: 'Is MyInvois live for all taxpayers today?', answer: 'Not yet. Phase 1 (turnover above RM100m) went live on 1 August 2024; Phase 2 (RM25m–RM100m) on 1 January 2025; Phase 3 (RM5m–RM25m) on 1 July 2025. LHDN deferred Phase 4 (RM1m–RM5m) to 1 January 2026, and Phase 5 (below RM1m) follows on the published LHDN timeline. Confirm your wave on einvoice.hasil.gov.my.' },
      { question: 'How are B2C invoices handled under MyInvois?', answer: 'B2C invoices can be reported as a monthly consolidated e-invoice rather than per transaction. The seller still issues normal receipts to consumers and submits one consolidated MyInvois document for the month. If a consumer requests a full e-invoice, the seller must issue one — and lose the consolidation benefit for that line.' },
      { question: 'Which Certificate Authorities does LHDN approve?', answer: 'LHDN publishes the approved CA list on the MyInvois Portal. As of late 2026 the list includes MSC Trustgate, Pos Digicert, and Telekom Applied Business. The certificate is X.509 issued from a CSR generated inside your platform; the private key stays in your tenant.' },
      { question: 'Does MyInvois apply to foreign suppliers selling into Malaysia?', answer: 'Foreign suppliers are not directly in scope of MyInvois. The Malaysian buyer self-accounts under LHDN guidance. For a Malaysian seller invoicing a foreign buyer, use a generic foreign-buyer identifier per the MyInvois SDK rather than fabricating a Malaysian TIN.' },
      { question: 'What happens if the MyInvois API is down?', answer: 'Without a UUID the invoice is not legally valid. Invoicemonk queues the payload, retries against the MyInvois API with backoff, and surfaces clearance status on the invoice timeline. LHDN publishes an SLA and incident notices on the portal; a documented incident does not exempt the seller from the eventual clearance obligation.' },
    ],
    relatedTools: [
      { label: 'MyInvois source page', url: '/e-invoicing/myinvois-malaysia', description: 'How Invoicemonk implements MyInvois for Malaysia' },
      { label: 'QR codes on tax invoices', url: '/blog/qr-codes-on-tax-invoices', description: 'How the MyInvois QR compares to ZATCA TLV and India signed JWT' },
      { label: 'Clearance vs reporting models', url: '/blog/clearance-vs-reporting-models', description: 'Where MyInvois sits in the clearance family' },
    ],
  },

  // ============================================================
  // MyInvois Malaysia — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'myinvois-malaysia-explained',
    title: 'MyInvois Malaysia Explained: Scope, Rollout Waves, SST Handling, and the 2026 Phase 4 Deferral',
    excerpt: 'A plain-English explainer for LHDN MyInvois — what it is, who must comply, the five-phase rollout schedule, how 8% SST is handled, the 72-hour rejection window, and what changes through 2026.',
    content: `<p><strong>MyInvois is the LHDN e-invoicing clearance platform that validates and assigns a UUID to every in-scope Malaysian B2B invoice before it is legally valid. Phase 1 (turnover above RM100m) went live on 1 August 2024 and the rollout extends down through five phases — with Phase 4 (RM1m–RM5m) deferred to 1 January 2026 and Phase 5 (below RM1m) following on the LHDN timeline. The mandate covers UBL 2.1 / JSON payloads, 8% SST handling, a 72-hour post-clearance rejection window, monthly consolidated B2C submissions, and a verification QR that the buyer scans to confirm validation.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Inland Revenue Board of Malaysia (LHDN / IRBM).</li>
          <li><strong>Mandate name:</strong> MyInvois e-Invoicing — Malaysia's national CTC clearance regime.</li>
          <li><strong>Artefact:</strong> UBL 2.1 / JSON payload + LHDN UUID + verification QR on the buyer PDF.</li>
          <li><strong>Transport:</strong> MyInvois REST API or MyInvois Portal direct entry.</li>
          <li><strong>Live since:</strong> 1 August 2024 (Phase 1, turnover &gt; RM100m).</li>
          <li><strong>Next milestone:</strong> Phase 4 onboarding (RM1m–RM5m) on 1 January 2026 after LHDN's June 2025 deferral.</li>
          <li><strong>Tax rate handled:</strong> 8% SST (taxable services), with SST-exempt and zero-rated flows supported.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against the LHDN e-Invoice timeline and the May 2026 LHDN FAQ.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what-is">What MyInvois actually is</a></li>
          <li><a href="#scope">Who must comply today</a></li>
          <li><a href="#payload">What the payload must contain</a></li>
          <li><a href="#window">The 72-hour rejection window</a></li>
          <li><a href="#b2c">B2C consolidated invoices and self-billing</a></li>
          <li><a href="#penalties">Penalties and operational consequences</a></li>
          <li><a href="#vs-other">How MyInvois compares to ZATCA, GST IRN, and FIRS MBS</a></li>
          <li><a href="#timeline">Rollout timeline and what changes through 2026</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2 id="what-is">What MyInvois actually is</h2><p class="block-answer" data-answer="true">MyInvois is a clearance / validation platform — every in-scope invoice is transmitted to LHDN in UBL 2.</p><p>MyInvois is a clearance / validation platform — every in-scope invoice is transmitted to LHDN in UBL 2.1 (XML) or JSON, signed with an LHDN-onboarded digital certificate, and assigned a unique <a href="/__LANG__/glossary/uuid">UUID</a> that must be printed on the buyer PDF together with a QR resolving to LHDN's public verification endpoint. Until the UUID is issued, the invoice is not legally valid for SST recovery and the buyer's AP system is likely to block payment.</p><p>The mandate covers six document types: <em>Invoice</em>, <em>Credit Note</em>, <em>Debit Note</em>, <em>Refund Note</em>, <em>Self-billed Invoice</em>, and the monthly <em>Consolidated e-Invoice</em> for B2C.</p><h2 id="scope">Who must comply today</h2><h3>Phase 1 — large taxpayers</h3><p>Annual turnover above RM100 million: in scope from <strong>1 August 2024</strong>. This wave covered roughly 5,000 of the largest Malaysian businesses and set the pattern for everything that followed.</p><h3>Phase 2 — mid-tier taxpayers</h3><p>Annual turnover between RM25 million and RM100 million: in scope from <strong>1 January 2025</strong>.</p><h3>Phase 3 — RM5m to RM25m</h3><p>In scope from <strong>1 July 2025</strong>. By the end of Phase 3, MyInvois covers all of Malaysia's mid-market by turnover.</p><h3>Phase 4 — RM1m to RM5m (deferred to 2026)</h3><p>Originally scheduled for 1 July 2025, this wave was <strong>deferred by LHDN to 1 January 2026</strong> in a 5 June 2025 BERNAMA statement to give SMEs additional preparation time. Implementation is mandatory from that date.</p><h3>Phase 5 — below RM1m</h3><p>The smallest taxpayers follow on the LHDN published timeline. LHDN has signalled a phased onboarding through 2026, with confirmation expected on the official timeline page. Micro-businesses with turnover below the LHDN-defined floor may remain out of scope; check the MyInvois portal for the latest threshold.</p><h3>Foreign suppliers</h3><p>Foreign suppliers selling into Malaysia are not directly in scope. The Malaysian buyer self-accounts under LHDN guidance (reverse charge for imported taxable services). Malaysian sellers invoicing foreign buyers use a generic foreign-buyer identifier per the MyInvois SDK.</p><h2 id="payload">What the payload must contain</h2><p class="block-answer" data-answer="true">Seller and buyer TINs (mandatory) and SST registration numbers (where applicable).  Document type code per the LHDN list (Invoice, Credit Note, Debit Note, Refund Note, Self-billed Invoice, Consolidated).</p><ul>
        <li>Seller and buyer TINs (mandatory) and SST registration numbers (where applicable).</li>
        <li>Document type code per the LHDN list (Invoice, Credit Note, Debit Note, Refund Note, Self-billed Invoice, Consolidated).</li>
        <li>Line items with the LHDN classification code, item description, quantity, unit price, and line totals.</li>
        <li>SST breakdown — 8% for taxable services, 0% for zero-rated, exempt where applicable.</li>
        <li>Currency, FX rate (for non-MYR invoices), payment terms, and the issue date-time in UTC + Kuala Lumpur offset.</li>
        <li>XAdES digital signature bound to the seller's LHDN-onboarded certificate.</li>
      </ul><h2 id="window">The 72-hour rejection window</h2><p class="block-answer" data-answer="true">MyInvois is unusual among clearance regimes in giving both seller and buyer a defined post-clearance cancellation slot.</p><p>MyInvois is unusual among clearance regimes in giving both seller and buyer a defined post-clearance cancellation slot. Within 72 hours of UUID issuance:</p><ul>
        <li>The <strong>seller</strong> can cancel its own cleared invoice (e.g. wrong buyer, wrong totals) without issuing a credit note.</li>
        <li>The <strong>buyer</strong> can reject the cleared invoice via the MyInvois Portal — forcing the seller to cancel or re-issue.</li>
      </ul><p>After 72 hours the invoice is final; corrections require a credit note (or debit note, or refund note) that gets its own UUID and references the original. Operationally the window is a feature, not a bug — it compresses the dispute cycle into a defined slot and removes the need for off-platform reversal workflows. Your invoicing dashboard must surface the countdown or the window will close while finance is asleep.</p><h2 id="b2c">B2C consolidated invoices and self-billing</h2><p class="block-answer" data-answer="true">B2C transactions do not require per-receipt clearance.  Instead the seller can submit one Consolidated e-Invoice per month aggregating all B2C activity by buyer category — Invoicemonk batches this automatically from the daily transaction stream.</p><p>B2C transactions do not require per-receipt clearance. Instead the seller can submit one <em>Consolidated e-Invoice</em> per month aggregating all B2C activity by buyer category — Invoicemonk batches this automatically from the daily transaction stream. If a consumer asks for a full e-invoice, the seller must issue one (and lose the consolidation benefit for that line).</p><p>Self-billed invoices cover scenarios where the buyer issues the invoice on the seller's behalf (e.g. imported services, payments to agents, certain commission structures). The self-billed document follows the same UBL profile and gets its own UUID.</p><h2 id="penalties">Penalties and operational consequences</h2><p class="block-answer" data-answer="true">An invoice without a MyInvois UUID is not legally valid for SST recovery.</p><p>An invoice without a MyInvois UUID is not legally valid for SST recovery. LHDN published administrative penalties for non-submission and incorrect data under the Income Tax Act, with fines up to RM20,000 per offence and possible imprisonment for repeated breaches. The bigger operational cost, however, is buyer behaviour: large Malaysian buyers refuse to settle invoices without a valid UUID and QR, which converts every clearance failure into a working-capital problem.</p><h2 id="vs-other">How MyInvois compares to ZATCA, GST IRN, and FIRS MBS</h2><table>
        <thead>
          <tr><th>Trait</th><th>MyInvois (Malaysia)</th><th>ZATCA Phase 2 (Saudi)</th><th>GST IRN (India)</th><th>FIRS / NRS MBS (Nigeria)</th></tr>
        </thead>
        <tbody>
          <tr><td>Format</td><td>UBL 2.1 or JSON</td><td>UBL 2.1 (XML)</td><td>INV-01 JSON</td><td>JSON (NRS schema)</td></tr>
          <tr><td>Stamp artefact</td><td>UUID</td><td>CSID + cryptographic stamp</td><td>IRN (64-char hash)</td><td>IRN</td></tr>
          <tr><td>QR format</td><td>UUID + verification URL</td><td>Base64 TLV (Phase 2 signed)</td><td>Signed JWT</td><td>Verification URL</td></tr>
          <tr><td>Post-clearance window</td><td>72-hour rejection window</td><td>None (corrections only)</td><td>24-hour cancellation</td><td>Credit note only</td></tr>
          <tr><td>B2C handling</td><td>Monthly consolidated</td><td>Reported within 24h (Phase 2)</td><td>Out of scope</td><td>Out of scope (today)</td></tr>
        </tbody>
      </table><p>Full comparison in <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models in e-invoicing</a>.</p><h2 id="timeline">Rollout timeline and what changes through 2026</h2><p class="block-answer" data-answer="true">Rollout timeline and what changes through 2026 includes: 1 Aug 2024: Phase 1 live (turnover &gt; RM100m).   1 Jan 2025: Phase 2 live (RM25m–RM100m).</p><ul>
        <li><strong>1 Aug 2024:</strong> Phase 1 live (turnover &gt; RM100m).</li>
        <li><strong>1 Jan 2025:</strong> Phase 2 live (RM25m–RM100m).</li>
        <li><strong>1 Jul 2025:</strong> Phase 3 live (RM5m–RM25m).</li>
        <li><strong>1 Jan 2026:</strong> Phase 4 live (RM1m–RM5m) — deferred from 1 July 2025 by LHDN.</li>
        <li><strong>Through 2026:</strong> Phase 5 (below RM1m) per the LHDN published timeline; minimum-turnover exemption confirmed on the MyInvois portal.</li>
        <li><strong>Ongoing:</strong> LHDN continues to publish FAQ updates (most recent May 2026); schema and classification list updates are versioned through the MyInvois SDK.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: MyInvois is clearance — no UUID, no legally valid invoice.   The 72-hour rejection window is unique among major mandates; surface it in the dashboard or miss it.</p><ul>
        <li>MyInvois is clearance — no UUID, no legally valid invoice.</li>
        <li>The 72-hour rejection window is unique among major mandates; surface it in the dashboard or miss it.</li>
        <li>B2C is consolidated monthly, not cleared per transaction.</li>
        <li>Phase 4 was deferred to 1 January 2026 — confirm your wave on the LHDN portal.</li>
        <li>The UUID + QR are non-negotiable for SST recovery and for getting paid by large Malaysian buyers.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">For the implementation playbook, read how to comply with MyInvois in Malaysia.  The original 2024 launch primer lives in e-invoicing in Malaysia with MyInvois.</p><p>For the implementation playbook, read <a href="/__LANG__/blog/how-to-comply-with-myinvois-malaysia">how to comply with MyInvois in Malaysia</a>. The original 2024 launch primer lives in <a href="/__LANG__/blog/myinvois-malaysia-explained">e-invoicing in Malaysia with MyInvois</a>. To compare across regimes, read <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models</a> and <a href="/__LANG__/blog/real-time-invoice-reporting">real-time invoice reporting</a>. For the QR artefact, see <a href="/__LANG__/blog/qr-codes-on-tax-invoices">QR codes on tax invoices</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.hasil.gov.my/en/e-invoice/implementation-of-e-invoicing-in-malaysia/e-invoice-implementation-timeline/" rel="noopener noreferrer">LHDN — e-Invoice Implementation Timeline</a></li>
        <li><a href="https://www.hasil.gov.my/media/0xqitc2t/lhdnm-e-invoice-general-faqs.pdf" rel="noopener noreferrer">LHDN — e-Invoice General FAQs (May 2026 update)</a></li>
        <li><a href="https://www.bernama.com/en/news.php/general/news.php?id=2431266" rel="noopener noreferrer">BERNAMA — Phase 4 implementation deferred to 1 January 2026</a></li>
        <li><a href="https://sdk.myinvois.hasil.gov.my/" rel="noopener noreferrer">MyInvois Developer SDK</a></li>
        <li><a href="https://www.hasil.gov.my/en/e-invoice/" rel="noopener noreferrer">LHDN — e-Invoice landing page</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> MyInvois is the LHDN e-invoicing clearance platform that validates and assigns a UUID to every in-scope Malaysian B2B invoice before it is legally valid. Phase 1 (turnover above RM100m) went live on 1 August 2024 and the rollout extends down through five phases — with Phase 4 (RM1m–RM5m) deferred to 1 January 2026 and Phase 5 (below RM1m) following on the LHDN timeline. The mandate covers UBL 2.1 / JSON payloads, 8% SST handling, a 72-hour post-clearance rejection window, monthly consolidated B2C submissions, and a verification QR that the buyer scans to confirm validation.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['MyInvois', 'Malaysia', 'LHDN', 'e-invoicing', 'explainer', 'SST', 'UUID'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/myinvois-malaysia-explained.jpg',
    featuredImageAlt: 'Editorial illustration of Malaysia\'s e-invoicing compliance workflow for the myinvois malaysia explained guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/myinvois-malaysia',
    semanticKeywords: ['MyInvois explained', 'Malaysia e-invoicing scope', 'LHDN rollout phases', 'SST 8% Malaysia', 'MyInvois UUID', 'Phase 4 deferral 2026', 'consolidated B2C invoice MyInvois', '72-hour rejection window', 'self-billed e-invoice Malaysia'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'my',
    faq: [
      { question: 'Is MyInvois mandatory in Malaysia?', answer: 'Yes for taxpayers in the active LHDN rollout wave. Phase 1 (turnover above RM100m) has been mandatory since 1 August 2024; Phase 2 since 1 January 2025; Phase 3 since 1 July 2025; Phase 4 from 1 January 2026 after LHDN deferred it from July 2025; Phase 5 follows on the published timeline.' },
      { question: 'Does MyInvois apply to B2C invoices?', answer: 'B2C does not require per-transaction clearance. Instead the seller submits a monthly consolidated e-invoice aggregating B2C activity. If a consumer requests a full e-invoice, the seller must issue one and forfeit the consolidation benefit for that line.' },
      { question: 'What is the MyInvois UUID?', answer: 'The unique identifier assigned by LHDN MyInvois after the payload clears validation. The UUID — together with the embedded verification QR — is the buyer\'s proof that LHDN validated the invoice and is the basis on which the buyer claims SST recovery.' },
      { question: 'When was Phase 4 deferred and why?', answer: 'LHDN announced on 5 June 2025 that Phase 4 (turnover between RM1m and RM5m) would be deferred from 1 July 2025 to 1 January 2026 to give smaller taxpayers additional preparation time. The deferral did not change Phases 1–3 or the broader rollout commitment.' },
      { question: 'What document types does MyInvois support?', answer: 'Invoice, Credit Note, Debit Note, Refund Note, Self-billed Invoice, and the monthly Consolidated e-Invoice for B2C. Each document type carries the same UBL 2.1 or JSON profile and receives its own UUID.' },
      { question: 'What happens to a cleared invoice after 72 hours?', answer: 'It becomes final. Corrections after the 72-hour window require a credit note (or debit note / refund note) that gets its own UUID and references the original. The original cleared invoice cannot be deleted or amended directly.' },
      { question: 'Are foreign suppliers in scope?', answer: 'No. Foreign suppliers selling into Malaysia are out of direct MyInvois scope; the Malaysian buyer self-accounts under LHDN reverse-charge guidance. Malaysian sellers invoicing foreign buyers use the generic foreign-buyer identifier defined in the MyInvois SDK.' },
    ],
    relatedTools: [
      { label: 'MyInvois source page', url: '/e-invoicing/myinvois-malaysia', description: 'How Invoicemonk implements MyInvois for Malaysia' },
      { label: 'Clearance vs reporting models', url: '/blog/clearance-vs-reporting-models', description: 'Where MyInvois sits among global mandates' },
      { label: 'QR codes on tax invoices', url: '/blog/qr-codes-on-tax-invoices', description: 'MyInvois QR vs ZATCA TLV vs India signed JWT' },
    ],
  },

  // ============================================================
  // GST IRN India — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-gst-irn-india',
    title: 'How to Comply with GST IRN in India: Onboard with NIC IRP and Issue Your First Signed QR Invoice (2026)',
    excerpt: 'Step-by-step playbook for issuing GST e-invoices in India through the NIC Invoice Registration Portal — onboarding, GST INV-01 JSON, IRN issuance, signed QR, 30-day upload limit, and 2FA enforcement.',
    content: `<p><strong>To comply with GST IRN e-invoicing in India, a GST-registered taxpayer whose aggregate annual turnover crossed ₹5 crore in any financial year from 2017-18 onwards must enrol on the NIC Invoice Registration Portal (einvoice.gst.gov.in), enable mandatory two-factor authentication, build a GST INV-01 JSON payload with seller and buyer GSTINs plus the CGST/SGST or IGST breakdown, submit it to the IRP API within 30 days of the invoice date (for taxpayers above ₹10 crore turnover), receive the 64-character IRN and signed JWT QR, then render both on the buyer-facing invoice as the basis for the buyer's input tax credit claim.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Central Board of Indirect Taxes and Customs (CBIC) and the GST Council; technical operator is the National Informatics Centre (NIC).</li>
          <li><strong>Mandate:</strong> GST e-Invoicing — clearance via the Invoice Registration Portal (IRP).</li>
          <li><strong>Artefact:</strong> GST INV-01 JSON payload + 64-character IRN hash + signed JWT QR.</li>
          <li><strong>Transport:</strong> NIC IRP REST API (primary) or alternative approved IRPs (Cygnet, IRIS, ClearTax, EY, GSTN).</li>
          <li><strong>Applies to:</strong> B2B, exports, SEZ supplies, and credit/debit notes for taxpayers with aggregate annual turnover above ₹5 crore in any FY since 2017-18.</li>
          <li><strong>Upload window:</strong> 30 days from invoice date for taxpayers with AATO &gt; ₹10 crore; no time bar today for AATO ₹5–10 crore.</li>
          <li><strong>Tax rates handled:</strong> CGST + SGST (intra-state), IGST (inter-state and exports).</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against the GSTN portal, the CBIC e-invoice notifications, and the NIC IRP API documentation.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#prereqs">Pre-requisites</a></li>
          <li><a href="#register">Step 1 — Register on the NIC IRP</a></li>
          <li><a href="#auth">Step 2 — Enable two-factor authentication</a></li>
          <li><a href="#payload">Step 3 — Map your invoice to GST INV-01</a></li>
          <li><a href="#submit">Step 4 — Submit to the IRP and obtain the IRN</a></li>
          <li><a href="#buyer">Step 5 — Present the IRN and signed QR to the buyer</a></li>
          <li><a href="#cancel">Step 6 — Cancellations, credit notes, and the 30-day upload limit</a></li>
          <li><a href="#errors">Common rejection codes and how to fix them</a></li>
          <li><a href="#checklist">Pre-go-live compliance checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2>Where GST IRN sits in the global e-invoicing landscape</h2><p class="block-answer" data-answer="true">GST IRN is a clearance-model continuous transaction control regime — the same family as ZATCA Phase 2 in Saudi Arabia, MyInvois in Malaysia, and NRS / FIRS MBS in Nigeria.</p><p>GST IRN is a <em>clearance</em>-model continuous transaction control regime — the same family as <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 in Saudi Arabia</a>, <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois in Malaysia</a>, and <a href="/__LANG__/e-invoicing/firs-mbs-nigeria">NRS / FIRS MBS in Nigeria</a>. The distinguishing feature is the <a href="/__LANG__/glossary/irn">IRN</a> (a 64-character SHA-256 hash generated by the IRP) and the signed JWT QR that is the buyer's primary basis for claiming input tax credit. No other major regime uses a JWT QR.</p><p>If you are integrating across India and ASEAN, your platform must emit INV-01 JSON for India, UBL 2.1 for MyInvois, ZATCA-profile XML for Saudi Arabia, and the FIRS schema for Nigeria. Treat your canonical invoice model as the single source of truth and let the integration layer compose the per-jurisdiction payload.</p><h2 id="prereqs">What you need before you start</h2><p class="block-answer" data-answer="true">An active GSTIN for every place of business that will issue e-invoices.  Aggregate annual turnover above the current GST e-invoicing threshold — ₹5 crore since 1 August 2023, applied if the threshold was crossed in any financial year from 2017-18 onwards (CBIC Notification 10/2023-CT).</p><ul>
        <li>An active <strong>GSTIN</strong> for every place of business that will issue e-invoices.</li>
        <li>Aggregate annual turnover above the current GST e-invoicing threshold — <strong>₹5 crore since 1 August 2023</strong>, applied if the threshold was crossed in any financial year from 2017-18 onwards (CBIC Notification 10/2023-CT).</li>
        <li>An invoicing platform that can emit GST INV-01 JSON and submit to the IRP API.</li>
        <li>NIC IRP credentials (or credentials with an alternative approved IRP) provisioned via the GSTN portal.</li>
        <li>NTP-synchronised servers — IRN issuance carries the IRP's signing timestamp and your payload must reconcile.</li>
      </ul><h2 id="register">Step 1 — Register on the NIC IRP</h2><h3>Which IRP should I use?</h3><p class="block-answer" data-answer="true">NIC IRP is the default and most widely used.  As of 2026, the GSTN-approved IRPs are NIC (IRP1, IRP2), Cygnet, IRIS, ClearTax, EY, and a handful of others — full list on the GSTN portal.</p><p>NIC IRP is the default and most widely used. As of 2026, the GSTN-approved IRPs are NIC (IRP1, IRP2), Cygnet, IRIS, ClearTax, EY, and a handful of others — full list on the GSTN portal. Most platforms (Invoicemonk included) integrate NIC IRP by default; switching IRPs requires re-enrolment with the alternative.</p><h3>How do I enrol?</h3><p class="block-answer" data-answer="true">Log in to einvoice. gst.</p><p>Log in to einvoice.gst.gov.in with your GST credentials, accept the terms, complete the enrolment form with your GSTIN, principal place of business, and email/mobile for OTP verification. The portal then issues your IRP API credentials (client ID and secret) which your invoicing platform uses to authenticate API calls.</p><h2 id="auth">Step 2 — Enable two-factor authentication</h2><p class="block-answer" data-answer="true">Since 2024 the GSTN has progressively rolled out mandatory two-factor authentication (2FA) for IRP access.  As of 2026, 2FA is enforced for all taxpayers above the e-invoicing threshold.</p><p>Since 2024 the GSTN has progressively rolled out mandatory two-factor authentication (2FA) for IRP access. As of 2026, 2FA is enforced for all taxpayers above the e-invoicing threshold. The second factor is an OTP delivered to the registered mobile number or via the NIC e-Way Bill app. Without active 2FA on the GSTN account, IRP API calls return an authentication failure.</p><h2 id="payload">Step 3 — Map your invoice to the GST INV-01 JSON schema</h2><p>The INV-01 payload requires:</p><ul>
        <li><strong>Header:</strong> document type (INV for invoice, CRN for credit note, DBN for debit note), document number, document date.</li>
        <li><strong>Seller:</strong> GSTIN, legal name, address, place of business, state code.</li>
        <li><strong>Buyer:</strong> GSTIN (or "URP" for unregistered persons), legal name, address, place of supply (state code that drives CGST/SGST vs IGST routing).</li>
        <li><strong>Line items:</strong> HSN or SAC code, item description, quantity, unit price, taxable value, GST rate, CGST / SGST / IGST amounts, Cess where applicable.</li>
        <li><strong>Document totals:</strong> taxable value, CGST, SGST, IGST, Cess, rounding, total invoice value.</li>
        <li><strong>Optional blocks:</strong> shipping details, payment terms, dispatch from / ship to addresses, reference document for credit/debit notes.</li>
      </ul><p>All values must reconcile to the totals at the paise level. Mismatches trigger validation errors and the IRP refuses to issue the IRN.</p><h2 id="submit">Step 4 — Submit to the IRP and obtain the IRN</h2><p class="block-answer" data-answer="true">Step 4 — Submit to the IRP and obtain the IRN includes: The platform builds the INV-01 JSON.   The JSON is POSTed to the IRP API with your IRP credentials and 2FA session token.</p><ol>
        <li>The platform builds the INV-01 JSON.</li>
        <li>The JSON is POSTed to the IRP API with your IRP credentials and 2FA session token.</li>
        <li>The IRP validates schema, GSTINs, GST computation, and place-of-supply routing.</li>
        <li>On success the IRP returns:<ul>
          <li><strong>IRN</strong> — a 64-character SHA-256 hash of (seller GSTIN + invoice number + financial year + document type).</li>
          <li><strong>Signed JWT QR</strong> containing the IRN, GSTINs, totals, and the IRP signature.</li>
          <li><strong>Ack number and ack date</strong> for audit trail.</li>
        </ul></li>
        <li>The platform binds the IRN, ack number, and signed QR to the buyer PDF.</li>
      </ol><h2 id="buyer">Step 5 — Present the IRN and signed QR on the buyer-facing invoice</h2><p class="block-answer" data-answer="true">Every buyer-facing invoice must display the IRN and the signed QR.</p><p>Every buyer-facing invoice must display the IRN and the signed QR. The QR is a JSON Web Token signed by the IRP that any GST-compliant viewer can decode to verify the invoice was registered. The buyer's accounts payable system decodes the JWT, verifies the IRP signature, and confirms the seller, buyer, document type, and totals match the QR's claims. Without the QR, the buyer cannot claim input tax credit (ITC) — and ITC denial is the single most common reason large Indian buyers refuse to settle invoices.</p><h2 id="cancel">Step 6 — Cancellations, credit notes, and the 30-day upload limit</h2><p class="block-answer" data-answer="true">Cancellations and corrections follow a strict timeline:</p><p>Cancellations and corrections follow a strict timeline:</p><ul>
        <li><strong>Cancellation window:</strong> an IRN can be cancelled within 24 hours of issuance via the IRP. After 24 hours, the IRN is final.</li>
        <li><strong>Corrections after 24 hours:</strong> issue a credit note (CRN) or debit note (DBN) which gets its own IRN and references the original document number.</li>
        <li><strong>30-day upload limit:</strong> for taxpayers with aggregate annual turnover above <strong>₹10 crore</strong>, the IRP rejects payloads with an invoice date more than 30 days old. Taxpayers between ₹5 and ₹10 crore are not yet subject to the 30-day bar; check the GSTN portal for changes.</li>
        <li><strong>Auto-population to GSTR-1:</strong> cleared IRNs flow into the seller's GSTR-1 return automatically; the seller confirms before filing rather than re-entering data.</li>
      </ul><h2 id="errors">Common rejection codes and how to fix them</h2><p class="block-answer" data-answer="true">Common rejection codes and how to fix them includes: 2150 — Invalid GSTIN: seller or buyer GSTIN failed registry lookup.   Verify the format (15-character) and active status on the GSTN portal.</p><ul>
        <li><strong>2150 — Invalid GSTIN</strong>: seller or buyer GSTIN failed registry lookup. Verify the format (15-character) and active status on the GSTN portal.</li>
        <li><strong>2189 — Duplicate IRN</strong>: the seller invoice number + document type + financial year combination was already submitted. Use a unique sequence per seller per FY.</li>
        <li><strong>2233 — Invoice date older than 30 days</strong>: applies to AATO &gt; ₹10 crore taxpayers. Issue a credit note for the old document if reversal is required.</li>
        <li><strong>2270 — Place of supply mismatch</strong>: declared place-of-supply state code does not match the IGST/CGST+SGST routing. Use IGST for inter-state and exports, CGST + SGST for intra-state.</li>
        <li><strong>2295 — Tax amount mismatch</strong>: line-level GST does not equal rate × taxable value. Recompute and resubmit.</li>
        <li><strong>2172 — Authentication failure</strong>: typically a 2FA session token has expired. Re-authenticate via the IRP login flow.</li>
        <li><strong>2150-2-INV01 — HSN/SAC invalid</strong>: HSN code (for goods) or SAC code (for services) is not in the CBIC list. Map to the closest valid code; 8-digit HSN is mandatory for AATO &gt; ₹5 crore.</li>
      </ul><h2 id="checklist">Pre-go-live compliance checklist</h2><p class="block-answer" data-answer="true">Pre-go-live compliance checklist includes: ☐ All GSTINs enrolled on the NIC IRP (or alternative approved IRP).   ☐ Two-factor authentication enabled on every GSTN account.</p><ul>
        <li>☐ All GSTINs enrolled on the NIC IRP (or alternative approved IRP).</li>
        <li>☐ Two-factor authentication enabled on every GSTN account.</li>
        <li>☐ IRP API credentials provisioned and stored securely (rotated quarterly).</li>
        <li>☐ INV-01 JSON validates against the NIC schema in sandbox (einv-apisandbox.nic.in).</li>
        <li>☐ 8-digit HSN / SAC codes mapped for every line item.</li>
        <li>☐ Place-of-supply routing logic tested for intra-state, inter-state, and export scenarios.</li>
        <li>☐ Signed JWT QR rendered on the buyer PDF in the prescribed format.</li>
        <li>☐ 24-hour cancellation flow tested end to end.</li>
        <li>☐ 30-day upload-window monitoring in place (if AATO &gt; ₹10 crore).</li>
        <li>☐ Credit note (CRN) and debit note (DBN) flows tested.</li>
        <li>☐ Auto-population to GSTR-1 verified.</li>
        <li>☐ Archive policy proven for the eight-year statutory GST retention period.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: GST IRN is clearance — no IRN, no input tax credit for the buyer.   The signed JWT QR is unique to India; treat it as a first-class artefact, not a barcode.</p><ul>
        <li>GST IRN is clearance — no IRN, no input tax credit for the buyer.</li>
        <li>The signed JWT QR is unique to India; treat it as a first-class artefact, not a barcode.</li>
        <li>2FA is mandatory on every IRP-linked GSTN account.</li>
        <li>If AATO is above ₹10 crore, the 30-day upload limit is binding and audited.</li>
        <li>Cancellations live within a 24-hour window; after that, only credit/debit notes can correct a cleared invoice.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Start at the e-invoicing pillar, then the GST IRN India mandate page.  For the regulatory context, read GST IRN India explained.</p><p>Start at the <a href="/__LANG__/e-invoicing">e-invoicing pillar</a>, then the <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN India mandate page</a>. For the regulatory context, read <a href="/__LANG__/blog/gst-irn-india-explained">GST IRN India explained</a>. The original launch primer lives in <a href="/__LANG__/blog/gst-irn-india-explained">e-invoicing in India with GST</a>. For the IRN itself, see <a href="/__LANG__/blog/what-is-irn">what is an Invoice Reference Number</a>, and for the QR mechanics see <a href="/__LANG__/blog/qr-codes-on-tax-invoices">QR codes on tax invoices</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://einvoice.gst.gov.in/" rel="noopener noreferrer">GSTN — e-Invoice landing page</a></li>
        <li><a href="https://einv-apisandbox.nic.in/" rel="noopener noreferrer">NIC IRP API Sandbox — schema, error catalogue, sample payloads</a></li>
        <li><a href="https://www.gstn.org.in/faqs-category-details" rel="noopener noreferrer">GSTN — e-Invoice FAQs and approved IRP list</a></li>
        <li><a href="https://cbic-gst.gov.in/" rel="noopener noreferrer">CBIC GST Portal — notifications and threshold history</a></li>
        <li><a href="https://docs.ewaybillgst.gov.in/" rel="noopener noreferrer">NIC e-Invoice + e-Way Bill technical documentation</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with GST IRN e-invoicing in India, a GST-registered taxpayer whose aggregate annual turnover crossed ₹5 crore in any financial year from 2017-18 onwards must enrol on the NIC Invoice Registration Portal (einvoice.gst.gov.in), enable mandatory two-factor authentication, build a GST INV-01 JSON payload with seller and buyer GSTINs plus the CGST/SGST or IGST breakdown, submit it to the IRP API within 30 days of the invoice date (for taxpayers above ₹10 crore turnover), receive the 64-character IRN and signed JWT QR, then render both on the buyer-facing invoice as the basis for the buyer's input tax credit claim.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['GST', 'India', 'IRN', 'NIC IRP', 'e-invoicing', 'compliance', 'how-to', 'signed JWT QR'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '14 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-gst-irn-india.jpg',
    featuredImageAlt: 'Editorial illustration of India\'s IRN issuance and QR-code validation for the how to comply with gst irn india guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/gst-irn-india',
    semanticKeywords: ['GST IRN India', 'NIC IRP onboarding', 'INV-01 JSON', 'signed JWT QR India', '30-day upload limit', 'GST 2FA mandatory', 'einvoice.gst.gov.in', 'ITC IRN', 'CBIC e-invoice notification', 'place of supply CGST IGST', 'HSN SAC 8-digit'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'in',
    faq: [
      { question: 'Which IRP should I use for GST e-invoicing?', answer: 'NIC IRP is the default and most widely used. As of 2026 the GSTN-approved IRPs include NIC (IRP1, IRP2), Cygnet, IRIS, ClearTax, and EY. Most invoicing platforms (including Invoicemonk) integrate NIC IRP out of the box; switching IRPs requires re-enrolment with the alternative.' },
      { question: 'How long do I have to cancel an IRN?', answer: '24 hours from issuance via the IRP. After 24 hours, the IRN is final — corrections require a credit note (CRN) or debit note (DBN) which gets its own IRN and references the original.' },
      { question: 'What happens if I issue an invoice without an IRN?', answer: 'The invoice is not legally valid for input tax credit (ITC). The buyer cannot claim ITC against it, large Indian buyers will refuse to settle until you regularise, and the seller faces penalties under GST law.' },
      { question: 'What is the 30-day upload limit?', answer: 'Taxpayers with aggregate annual turnover above ₹10 crore must upload e-invoices to the IRP within 30 days of the invoice date. The IRP rejects payloads with an older invoice date. Taxpayers between ₹5 and ₹10 crore are not yet subject to this bar — check the GSTN portal for changes.' },
      { question: 'Is two-factor authentication mandatory?', answer: 'Yes. The GSTN progressively rolled out mandatory 2FA from 2024 onward. By 2026 it is enforced for all taxpayers above the e-invoicing threshold. Without active 2FA, IRP API calls return an authentication failure regardless of how valid the payload is.' },
      { question: 'Do exports and SEZ supplies need an IRN?', answer: 'Yes. Exports and SEZ supplies are in scope on the same ₹5 crore threshold as domestic B2B. Use the appropriate document type code (export with payment of IGST, export without payment of IGST, SEZ with payment, SEZ without payment) per the INV-01 schema.' },
      { question: 'Does GST IRN apply to B2C invoices?', answer: 'Not currently. Only B2B (including exports and SEZ supplies) and credit/debit notes against them are in scope. Watch CBIC notifications — the GST Council has signalled B2C extensions in successive meetings but no implementation date has been confirmed as of late 2026.' },
    ],
    relatedTools: [
      { label: 'GST IRN India source page', url: '/e-invoicing/gst-irn-india', description: 'How Invoicemonk implements GST IRN for India' },
      { label: 'What is an IRN', url: '/blog/what-is-irn', description: 'The 64-character hash that proves IRP clearance' },
      { label: 'QR codes on tax invoices', url: '/blog/qr-codes-on-tax-invoices', description: 'India\'s signed JWT QR vs other formats' },
    ],
  },

  // ============================================================
  // GST IRN India — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'gst-irn-india-explained',
    title: 'GST IRN India Explained: Scope, Threshold History, Input Tax Credit, and the 2026 Timeline',
    excerpt: 'A plain-English explainer for GST e-invoicing in India — what the IRN is, who must comply, the threshold step-down from ₹500 crore to ₹5 crore, how the signed JWT QR enables ITC, the 30-day upload limit, and what is changing through 2026.',
    content: `<p><strong>India's GST e-invoicing regime requires every in-scope B2B invoice to be registered with an Invoice Registration Portal (IRP) and assigned a 64-character IRN before it is legally valid for input tax credit. The threshold has stepped down progressively from ₹500 crore (October 2020) to ₹5 crore (August 2023), making it one of the most aggressively expanded clearance mandates in the world. The IRP returns a signed JWT QR alongside the IRN — both must appear on the buyer-facing invoice as the basis for the buyer's ITC claim, with a 24-hour cancellation window, a 30-day upload limit for AATO above ₹10 crore, and mandatory 2FA on every IRP-linked GSTN account.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> CBIC and the GST Council; technical operator is NIC, with multiple approved IRPs.</li>
          <li><strong>Mandate name:</strong> GST e-Invoicing — clearance via the Invoice Registration Portal (IRP).</li>
          <li><strong>Artefact:</strong> INV-01 JSON payload + 64-character SHA-256 IRN + signed JWT QR.</li>
          <li><strong>Threshold:</strong> AATO above ₹5 crore in any FY since 2017-18 (since 1 August 2023).</li>
          <li><strong>Upload limit:</strong> 30 days from invoice date for AATO &gt; ₹10 crore.</li>
          <li><strong>Cancellation:</strong> 24 hours; afterwards corrections require credit/debit notes.</li>
          <li><strong>Tax rates handled:</strong> CGST + SGST intra-state; IGST inter-state and exports; Cess where applicable.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against CBIC notifications, GSTN portal, and the NIC IRP API documentation.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what-is">What GST IRN actually is</a></li>
          <li><a href="#scope">Who must comply today</a></li>
          <li><a href="#threshold-history">Threshold history: from ₹500 crore to ₹5 crore</a></li>
          <li><a href="#qr">Why the signed JWT QR matters for ITC</a></li>
          <li><a href="#payload">What the payload must contain</a></li>
          <li><a href="#cancellation">Cancellation, amendment, and the 30-day limit</a></li>
          <li><a href="#vs-other">How GST IRN compares to ZATCA, MyInvois, and FIRS MBS</a></li>
          <li><a href="#timeline">Rollout timeline and what changes through 2026</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2 id="what-is">What GST IRN actually is</h2><p class="block-answer" data-answer="true">The Invoice Reference Number (IRN) is a 64-character SHA-256 hash generated by the IRP from the GST INV-01 JSON payload submitted by the seller.</p><p>The Invoice Reference Number (IRN) is a 64-character SHA-256 hash generated by the IRP from the GST INV-01 JSON payload submitted by the seller. The hash combines the seller GSTIN, the invoice number, the financial year, and the document type, so the IRN is deterministic for a given invoice — re-submitting the same payload produces the same IRN, which is how duplicate-detection works.</p><p>Alongside the IRN the IRP returns a signed JWT QR. The JWT payload contains the IRN, seller and buyer GSTINs, document type, invoice value, total tax, and the signing certificate metadata. The buyer's AP system decodes the JWT, verifies the IRP signature, and treats the result as proof that the seller actually cleared the invoice with the GST authority. Without the JWT QR — or with one that fails signature verification — the buyer cannot reliably claim ITC.</p><h2 id="scope">Who must comply today</h2><h3>Above ₹5 crore aggregate annual turnover (AATO)</h3><p>Mandatory since 1 August 2023 per CBIC Notification 10/2023-Central Tax. The test is whether AATO crossed ₹5 crore in <strong>any</strong> financial year from 2017-18 onwards; once you cross, you remain in scope even if turnover later drops back below the threshold.</p><h3>B2C invoices</h3><p>Not currently in scope. The GST Council has signalled B2C extensions in successive meetings but no implementation date has been confirmed as of late 2026. When B2C joins, the architecture will most likely follow the existing IRP path with additional fields for unregistered buyers.</p><h3>Exports and SEZ supplies</h3><p>In scope on the same ₹5 crore threshold as domestic B2B. The INV-01 schema distinguishes between export with payment of IGST, export without payment of IGST, SEZ with payment of IGST, and SEZ without payment of IGST.</p><h3>Notified exempted categories</h3><p>Insurance companies, banking and NBFC services, GTA (goods transport agencies), passenger transport, and some other categories are exempted by CBIC notification regardless of turnover. Government departments and local authorities are also outside the regime.</p><h2 id="threshold-history">Threshold history: the step-down from ₹500 crore to ₹5 crore</h2><p class="block-answer" data-answer="true">The Indian GST e-invoicing regime is unusual for how aggressively the threshold has been pulled down since launch:</p><p>The Indian GST e-invoicing regime is unusual for how aggressively the threshold has been pulled down since launch:</p><table>
        <thead>
          <tr><th>Effective date</th><th>AATO threshold</th><th>CBIC notification</th></tr>
        </thead>
        <tbody>
          <tr><td>1 October 2020</td><td>₹500 crore</td><td>61/2020 + 71/2020</td></tr>
          <tr><td>1 January 2021</td><td>₹100 crore</td><td>88/2020</td></tr>
          <tr><td>1 April 2021</td><td>₹50 crore</td><td>5/2021</td></tr>
          <tr><td>1 April 2022</td><td>₹20 crore</td><td>1/2022</td></tr>
          <tr><td>1 October 2022</td><td>₹10 crore</td><td>17/2022</td></tr>
          <tr><td>1 August 2023</td><td>₹5 crore</td><td>10/2023</td></tr>
        </tbody>
      </table><p>The CBIC publishes notifications when the threshold drops further. Market expectations point to ₹1–2 crore as the next step, but no formal notification has been issued as of late 2026.</p><h2 id="qr">Why the signed JWT QR matters for ITC</h2><p class="block-answer" data-answer="true">The signed QR is a JSON Web Token (RFC 7519) signed by the IRP's RSA key.</p><p>The signed QR is a <a href="https://datatracker.ietf.org/doc/html/rfc7519" rel="noopener noreferrer">JSON Web Token (RFC 7519)</a> signed by the IRP's RSA key. The QR payload encodes:</p><ul>
        <li>The IRN.</li>
        <li>Seller and buyer GSTINs.</li>
        <li>Document type, document number, document date.</li>
        <li>Total invoice value and total GST.</li>
        <li>Main HSN code.</li>
        <li>Signing certificate metadata and the IRP digital signature.</li>
      </ul><p>The buyer's AP system decodes the QR, verifies the signature against the published IRP certificate, and confirms the seller cleared the invoice. This is the basis on which the buyer claims input tax credit. The seller can claim "I issued the invoice" all day long — but if the QR does not exist, or if the signature fails, ITC is denied at the buyer's audit.</p><h2 id="payload">What the payload must contain</h2><p class="block-answer" data-answer="true">Seller GSTIN, legal name, address, place of business, state code.  Buyer GSTIN (or "URP" for unregistered persons), with place of supply driving CGST/SGST vs IGST routing.</p><ul>
        <li>Seller GSTIN, legal name, address, place of business, state code.</li>
        <li>Buyer GSTIN (or "URP" for unregistered persons), with place of supply driving CGST/SGST vs IGST routing.</li>
        <li>Document type (INV for invoice, CRN for credit note, DBN for debit note).</li>
        <li>Line items with HSN (goods) or SAC (services) codes — 8-digit HSN mandatory for AATO &gt; ₹5 crore.</li>
        <li>The GST breakdown — CGST + SGST for intra-state, IGST for inter-state and exports.</li>
        <li>Document totals reconciling to the line-item totals at the paise level.</li>
      </ul><h2 id="cancellation">Cancellation, amendment, and the 30-day upload limit</h2><p class="block-answer" data-answer="true">The cleared invoice lifecycle has three timing rules:</p><p>The cleared invoice lifecycle has three timing rules:</p><ul>
        <li><strong>24-hour cancellation:</strong> the seller can cancel an IRN within 24 hours via the IRP. After 24 hours, the IRN is final.</li>
        <li><strong>30-day upload limit:</strong> for taxpayers with AATO above ₹10 crore, the IRP refuses payloads with an invoice date more than 30 days old. This rule was originally piloted for AATO &gt; ₹100 crore and progressively lowered.</li>
        <li><strong>Amendments via credit/debit notes:</strong> after the 24-hour cancellation window, corrections require a credit note (CRN) or debit note (DBN) that gets its own IRN and references the original. There is no editing of a cleared invoice.</li>
      </ul><p>Cleared IRNs auto-populate the seller's GSTR-1 return; the seller confirms the data rather than re-keying it.</p><h2 id="vs-other">How GST IRN compares to ZATCA, MyInvois, and FIRS MBS</h2><table>
        <thead>
          <tr><th>Trait</th><th>GST IRN (India)</th><th>ZATCA Phase 2 (Saudi)</th><th>MyInvois (Malaysia)</th><th>FIRS / NRS MBS (Nigeria)</th></tr>
        </thead>
        <tbody>
          <tr><td>Format</td><td>INV-01 JSON</td><td>UBL 2.1 XML</td><td>UBL 2.1 or JSON</td><td>JSON (NRS schema)</td></tr>
          <tr><td>Stamp artefact</td><td>64-char SHA-256 IRN</td><td>CSID + cryptographic stamp</td><td>UUID</td><td>IRN</td></tr>
          <tr><td>QR format</td><td>Signed JWT</td><td>Base64 TLV (signed Phase 2)</td><td>UUID + verification URL</td><td>Verification URL</td></tr>
          <tr><td>Cancellation window</td><td>24 hours</td><td>None (credit notes only)</td><td>72 hours (incl. buyer reject)</td><td>Credit notes only</td></tr>
          <tr><td>Upload limit</td><td>30 days (AATO &gt; ₹10cr)</td><td>24h reporting for Phase 2 B2C</td><td>72-hour window then final</td><td>Per NRS guidance</td></tr>
          <tr><td>2FA requirement</td><td>Mandatory on GSTN account</td><td>OTP via Fatoora portal</td><td>Per LHDN portal</td><td>Per NRS portal</td></tr>
        </tbody>
      </table><p>For the full architectural comparison see <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models in e-invoicing</a>.</p><h2 id="timeline">Rollout timeline and what changes through 2026</h2><p class="block-answer" data-answer="true">Rollout timeline and what changes through 2026 includes: Threshold: ₹5 crore in place since 1 August 2023; market expects ₹1–2 crore as the next step, no formal notification as of November 2026.   30-day upload limit: currently AATO &gt; ₹10 crore; expansion to AATO &gt; ₹5 crore widely anticipated.</p><ul>
        <li><strong>Threshold:</strong> ₹5 crore in place since 1 August 2023; market expects ₹1–2 crore as the next step, no formal notification as of November 2026.</li>
        <li><strong>30-day upload limit:</strong> currently AATO &gt; ₹10 crore; expansion to AATO &gt; ₹5 crore widely anticipated.</li>
        <li><strong>2FA:</strong> fully enforced across the IRP-linked taxpayer base.</li>
        <li><strong>B2C extension:</strong> signalled by the GST Council; no notification yet.</li>
        <li><strong>e-Way Bill integration:</strong> the IRN auto-generates the e-Way Bill when transport details are provided, removing the double-keying problem.</li>
        <li><strong>GSTR-1 auto-population:</strong> mature; the seller confirms rather than re-keys.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: GST IRN is clearance — no IRN, no ITC for the buyer, no working capital for the seller.   The signed JWT QR is the buyer's verification artefact; the seller's claim alone does not unlock ITC.</p><ul>
        <li>GST IRN is clearance — no IRN, no ITC for the buyer, no working capital for the seller.</li>
        <li>The signed JWT QR is the buyer's verification artefact; the seller's claim alone does not unlock ITC.</li>
        <li>The threshold has dropped six times in three years; assume it keeps falling.</li>
        <li>The 30-day upload limit (AATO &gt; ₹10 crore) and 24-hour cancellation window are both audited.</li>
        <li>2FA is non-negotiable on every IRP-linked GSTN account.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">For the implementation playbook, read how to comply with GST IRN in India.  The original launch primer lives in e-invoicing in India with GST.</p><p>For the implementation playbook, read <a href="/__LANG__/blog/how-to-comply-with-gst-irn-india">how to comply with GST IRN in India</a>. The original launch primer lives in <a href="/__LANG__/blog/gst-irn-india-explained">e-invoicing in India with GST</a>. To compare across regimes, read <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models</a> and <a href="/__LANG__/blog/real-time-invoice-reporting">real-time invoice reporting</a>. For the artefact details, see <a href="/__LANG__/blog/what-is-irn">what is an IRN</a> and <a href="/__LANG__/blog/qr-codes-on-tax-invoices">QR codes on tax invoices</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://einvoice.gst.gov.in/" rel="noopener noreferrer">GSTN — e-Invoice portal</a></li>
        <li><a href="https://www.gstn.org.in/faqs-category-details" rel="noopener noreferrer">GSTN — e-Invoice FAQs and approved IRP list</a></li>
        <li><a href="https://cbic-gst.gov.in/" rel="noopener noreferrer">CBIC GST — notifications and threshold history</a></li>
        <li><a href="https://einv-apisandbox.nic.in/" rel="noopener noreferrer">NIC IRP API Sandbox</a></li>
        <li><a href="https://docs.ewaybillgst.gov.in/" rel="noopener noreferrer">NIC e-Invoice + e-Way Bill technical documentation</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> India's GST e-invoicing regime requires every in-scope B2B invoice to be registered with an Invoice Registration Portal (IRP) and assigned a 64-character IRN before it is legally valid for input tax credit. The threshold has stepped down progressively from ₹500 crore (October 2020) to ₹5 crore (August 2023), making it one of the most aggressively expanded clearance mandates in the world. The IRP returns a signed JWT QR alongside the IRN — both must appear on the buyer-facing invoice as the basis for the buyer's ITC claim, with a 24-hour cancellation window, a 30-day upload limit for AATO above ₹10 crore, and mandatory 2FA on every IRP-linked GSTN account.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['GST', 'India', 'IRN', 'e-invoicing', 'explainer', 'signed JWT QR', 'ITC'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-24',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/gst-irn-india-explained.jpg',
    featuredImageAlt: 'Editorial illustration of India\'s IRN issuance and QR-code validation for the gst irn india explained guide',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/gst-irn-india',
    semanticKeywords: ['GST IRN explained', 'India e-invoicing threshold', 'NIC IRP', 'input tax credit IRN', 'signed JWT QR', 'CBIC e-invoice notification', '30-day upload limit', 'GST 2FA', 'B2C GST e-invoicing', 'place of supply IGST', 'HSN 8-digit'],
    priority: 'P1',
    lastAudited: '2026-11-20',
    targetCountry: 'in',
    faq: [
      { question: 'Is GST IRN mandatory in India?', answer: 'Yes for taxpayers with aggregate annual turnover above ₹5 crore in any financial year since 2017-18 (mandate effective 1 August 2023 per CBIC Notification 10/2023-CT). Once you cross the threshold you remain in scope even if turnover later drops back below ₹5 crore.' },
      { question: 'Does GST IRN apply to B2C invoices?', answer: 'Not currently. Only B2B (including exports and SEZ supplies) and credit/debit notes against them are in scope. The GST Council has signalled B2C extensions in successive meetings; watch CBIC notifications for confirmation.' },
      { question: 'Can I claim input tax credit without the signed QR?', answer: 'No. The buyer\'s ITC claim depends on the IRN and signed JWT QR being present on the invoice and verifiable against the IRP signing certificate. Without them, the invoice is not legally valid for ITC and the buyer\'s audit will deny the credit.' },
      { question: 'What was the threshold history?', answer: 'The threshold has stepped down six times: ₹500 crore (October 2020), ₹100 crore (January 2021), ₹50 crore (April 2021), ₹20 crore (April 2022), ₹10 crore (October 2022), and ₹5 crore (August 2023). Each step was published by CBIC notification and market expectations point to a further reduction to ₹1–2 crore.' },
      { question: 'What is the 30-day upload limit?', answer: 'For taxpayers with AATO above ₹10 crore, the IRP refuses payloads with an invoice date more than 30 days old. Taxpayers between ₹5 and ₹10 crore are not yet subject to this bar but the rule has been progressively lowered since launch.' },
      { question: 'How does the IRN relate to the e-Way Bill?', answer: 'The IRP auto-generates the e-Way Bill when transport details (transporter ID, vehicle number, distance) are provided in the INV-01 payload. This removes the historical double-keying problem between e-invoicing and e-way bills and is the recommended integration pattern for AATO above ₹10 crore.' },
      { question: 'Which sectors are exempted from GST e-invoicing?', answer: 'Insurance companies, banking and NBFC services, GTA (goods transport agencies), passenger transport service providers, SEZ units (suppliers only — recipients are in scope), government departments, and local authorities are exempted by CBIC notification regardless of turnover.' },
    ],
    relatedTools: [
      { label: 'GST IRN India source page', url: '/e-invoicing/gst-irn-india', description: 'How Invoicemonk implements GST IRN for India' },
      { label: 'What is an IRN', url: '/blog/what-is-irn', description: 'The 64-character hash that proves IRP clearance' },
      { label: 'QR codes on tax invoices', url: '/blog/qr-codes-on-tax-invoices', description: 'India\'s signed JWT QR vs ZATCA TLV vs verification URLs' },
    ],
  },

  // ============================================================
  // Outer entity — QR codes on tax invoices (TLV / JWT / URL)
  // ============================================================
  {
    slug: 'qr-codes-on-tax-invoices',
    title: 'QR Codes on Tax Invoices: TLV, Signed JWT, and Verification URL Formats Compared',
    excerpt: 'Every clearance regime mandates a QR on the buyer-facing invoice, but the format diverges sharply. ZATCA uses Base64-encoded TLV. India uses a signed JWT. FIRS, GRA, and KRA use verification URLs. MyInvois uses a hybrid. This guide compares every format with field-level detail.',
    content: `<p><strong>Every clearance-model e-invoicing mandate requires a QR on the buyer-facing invoice, but the QR format is set by the regulator and varies sharply: ZATCA Phase 2 uses a Base64-encoded TLV (Tag-Length-Value) structure that includes the seller, totals, signature hash, and public key for offline verification; India's GST IRN uses a signed JSON Web Token (JWT) with the IRN, GSTINs, and totals; FIRS MBS, GRA e-VAT, and KRA eTIMS use a verification URL that resolves to the regulator's public lookup endpoint; and MyInvois uses a hybrid UUID + URL format. A multi-jurisdiction platform must emit the correct format per destination regulator on every cleared invoice.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Format 1 — TLV (Tag-Length-Value):</strong> Saudi Arabia ZATCA Phase 1 and Phase 2.</li>
          <li><strong>Format 2 — Signed JWT:</strong> India GST IRN.</li>
          <li><strong>Format 3 — Verification URL:</strong> Nigeria FIRS / NRS MBS, Ghana GRA e-VAT, Kenya KRA eTIMS.</li>
          <li><strong>Format 4 — Hybrid (UUID + URL):</strong> Malaysia MyInvois, ZATCA Phase 2 B2C.</li>
          <li><strong>Error correction:</strong> medium (M) or high (Q) per regulator spec — high is safer for printed invoices.</li>
          <li><strong>Encoding:</strong> UTF-8; ECI 26 for non-ASCII payloads.</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against ZATCA technical guidelines, NIC IRP API docs, and the FIRS / GRA / KRA portals.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#why-qr">Why regulators mandate a QR</a></li>
          <li><a href="#tlv">Format 1 — TLV (ZATCA)</a></li>
          <li><a href="#jwt">Format 2 — Signed JWT (GST IRN)</a></li>
          <li><a href="#url">Format 3 — Verification URL (FIRS, GRA, KRA)</a></li>
          <li><a href="#hybrid">Format 4 — Hybrid (MyInvois, ZATCA Phase 2 B2C)</a></li>
          <li><a href="#comparison">Side-by-side comparison</a></li>
          <li><a href="#implementation">Implementation patterns for multi-jurisdiction platforms</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2 id="why-qr">Why regulators mandate a QR</h2><p class="block-answer" data-answer="true">The QR is the buyer's primary verification surface — the artefact a clerk in accounts payable scans to confirm the invoice was actually cleared by the tax authority.  Without a verifiable QR, the regulator's clearance is invisible at the buyer's end and the whole clearance chain breaks.</p><p>The QR is the buyer's primary verification surface — the artefact a clerk in accounts payable scans to confirm the invoice was actually cleared by the tax authority. Without a verifiable QR, the regulator's clearance is invisible at the buyer's end and the whole clearance chain breaks. Three design forces shape the QR format choice:</p><ul>
        <li><strong>Offline verifiability</strong> — can the buyer confirm authenticity without hitting the regulator's server? (Yes for TLV and JWT; no for URL.)</li>
        <li><strong>Payload size</strong> — how much data must fit in the QR symbol before scan reliability degrades? (URLs are smallest; signed JWTs are largest.)</li>
        <li><strong>Data freshness</strong> — does the verifier see the regulator's current view, or a snapshot? (URLs are always fresh; TLV/JWT are issuance-time snapshots.)</li>
      </ul><h2 id="tlv">Format 1 — TLV (Tag-Length-Value), Base64-encoded</h2><p class="block-answer" data-answer="true">Used by ZATCA Phase 1 and Phase 2 in Saudi Arabia.  The QR encodes a binary structure where each field has a numeric tag, a length byte, and a UTF-8 value.</p><p>Used by <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 1 and Phase 2</a> in Saudi Arabia. The QR encodes a binary structure where each field has a numeric tag, a length byte, and a UTF-8 value. The whole TLV byte string is then Base64-encoded for QR rendering.</p><h3>Phase 1 TLV — five mandatory fields</h3><ol>
        <li><strong>Tag 1:</strong> Seller name (UTF-8 string).</li>
        <li><strong>Tag 2:</strong> Seller VAT registration number (15-digit, starts and ends with 3).</li>
        <li><strong>Tag 3:</strong> Timestamp in ISO 8601 UTC.</li>
        <li><strong>Tag 4:</strong> Invoice total including VAT.</li>
        <li><strong>Tag 5:</strong> VAT total.</li>
      </ol><h3>Phase 2 TLV — extended with signature</h3><p>Phase 2 adds four cryptographic fields that make the QR verifiable offline:</p><ol start="6">
        <li><strong>Tag 6:</strong> XML invoice hash (SHA-256, Base64).</li>
        <li><strong>Tag 7:</strong> ECDSA signature over the canonicalised invoice.</li>
        <li><strong>Tag 8:</strong> EGS public key (DER-encoded, Base64).</li>
        <li><strong>Tag 9:</strong> ZATCA-issued certificate signature for the public key.</li>
      </ol><p>A buyer with a Phase 2-capable viewer can decode the TLV, hash the invoice locally, and verify the signature chains back to a trusted ZATCA root — no portal lookup required. See <a href="/__LANG__/blog/what-is-csid">what is a CSID</a> for the cryptographic credential at the heart of this scheme.</p><h2 id="jwt">Format 2 — Signed JWT</h2><p class="block-answer" data-answer="true">Used by GST IRN in India.  The QR encodes a JSON Web Token (RFC 7519) signed by the NIC IRP using RSA-SHA256.</p><p>Used by <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN</a> in India. The QR encodes a <a href="https://datatracker.ietf.org/doc/html/rfc7519" rel="noopener noreferrer">JSON Web Token (RFC 7519)</a> signed by the NIC IRP using RSA-SHA256. The JWT payload contains:</p><ul>
        <li>The 64-character IRN.</li>
        <li>Seller and buyer GSTINs.</li>
        <li>Document type, document number, document date.</li>
        <li>Total invoice value and total GST.</li>
        <li>Main HSN code.</li>
        <li>Signing certificate identifier and algorithm.</li>
      </ul><p>Any compliant viewer can decode the JWT, fetch the published IRP signing certificate, and verify the signature offline. This is the basis on which the Indian buyer claims input tax credit.</p><p><strong>Trade-off:</strong> JWT payloads are larger than TLV or URL, which requires higher QR density (version 10+ symbols) and good print quality. A smudged JWT QR is a denied ITC claim.</p><h2 id="url">Format 3 — Verification URL</h2><p class="block-answer" data-answer="true">Used by FIRS / NRS MBS in Nigeria, GRA e-VAT in Ghana, KRA eTIMS in Kenya, and several Latin American mandates.</p><p>Used by <a href="/__LANG__/e-invoicing/firs-mbs-nigeria">FIRS / NRS MBS</a> in Nigeria, <a href="/__LANG__/e-invoicing/gra-e-vat-ghana">GRA e-VAT</a> in Ghana, <a href="/__LANG__/e-invoicing/kra-etims-kenya">KRA eTIMS</a> in Kenya, and several Latin American mandates. The QR encodes a URL to the regulator's public verification endpoint with the IRN or invoice ID as a parameter:</p><pre><code>https://einvoice.firs.gov.ng/verify?irn={IRN}&amp;tin={SELLER_TIN}</code></pre><p>The buyer scans the QR, follows the URL on a phone or AP system, and the regulator's page confirms the seller, buyer, totals, and timestamp.</p><p><strong>Trade-off:</strong> small payload, always-fresh data — but requires the regulator's portal to be online for verification. During regulator downtime the buyer cannot confirm clearance.</p><h2 id="hybrid">Format 4 — Hybrid (UUID + verification URL)</h2><p class="block-answer" data-answer="true">Used by MyInvois in Malaysia and by ZATCA Phase 2 B2C invoices.  The QR carries both an identifier (UUID for MyInvois; cleared invoice reference for ZATCA B2C) and a verification URL to the regulator's portal.</p><p>Used by <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois</a> in Malaysia and by ZATCA Phase 2 B2C invoices. The QR carries both an identifier (UUID for MyInvois; cleared invoice reference for ZATCA B2C) and a verification URL to the regulator's portal. This gives offline identifier capture plus optional online deep-verification.</p><h2 id="comparison">Side-by-side comparison</h2><table>
        <thead>
          <tr><th>Trait</th><th>TLV (ZATCA)</th><th>Signed JWT (India)</th><th>Verification URL (FIRS / GRA / KRA)</th><th>Hybrid (MyInvois)</th></tr>
        </thead>
        <tbody>
          <tr><td>Offline verification</td><td>Yes (Phase 2)</td><td>Yes (with cert)</td><td>No</td><td>Partial (UUID only)</td></tr>
          <tr><td>Payload size</td><td>Medium</td><td>Large</td><td>Small</td><td>Medium</td></tr>
          <tr><td>Fresh data</td><td>Snapshot at issuance</td><td>Snapshot at issuance</td><td>Always current</td><td>Always current via URL</td></tr>
          <tr><td>QR symbol density</td><td>Version 6–8</td><td>Version 10+</td><td>Version 3–4</td><td>Version 5–7</td></tr>
          <tr><td>Error correction</td><td>M or Q</td><td>Q (recommended)</td><td>M</td><td>M or Q</td></tr>
          <tr><td>Encoding</td><td>UTF-8 Base64</td><td>UTF-8 Base64URL</td><td>UTF-8 (ASCII URL)</td><td>UTF-8</td></tr>
        </tbody>
      </table><h2 id="implementation">Implementation patterns for multi-jurisdiction platforms</h2><p class="block-answer" data-answer="true">Implementation patterns for multi-jurisdiction platforms includes: Centralise QR generation in a single service that takes a canonical input (regulator, IRN/UUID, signature material, verification URL template) and emits the correct format.   Do not duplicate QR logic per integration.</p><ul>
        <li><strong>Centralise QR generation</strong> in a single service that takes a canonical input (regulator, IRN/UUID, signature material, verification URL template) and emits the correct format. Do not duplicate QR logic per integration.</li>
        <li><strong>Pre-test print quality</strong> — JWT QRs that look fine on screen smudge into illegibility on thermal paper. Pick error correction Q and minimum module size 4 for printed invoices.</li>
        <li><strong>Validate the regulator round-trip</strong> for every QR you generate in sandbox before go-live. Decode your own QR, hit the regulator's verification endpoint (or verify the signature for TLV/JWT), confirm the data matches.</li>
        <li><strong>Surface the QR to the buyer in two formats</strong> — the visual QR on the PDF, and a copyable text link for accessibility and AP automation.</li>
        <li><strong>Re-issue QRs on credit/debit notes</strong> — every cleared document gets its own QR; do not reuse the original invoice's QR on the credit note.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: You don't choose the QR format — the regulator does.   Build the per-jurisdiction emitter, don't argue.</p><ul>
        <li>You don't choose the QR format — the regulator does. Build the per-jurisdiction emitter, don't argue.</li>
        <li>TLV is compact and offline-verifiable; JWT is offline-verifiable but large; URLs are tiny but online-only; hybrid bridges both.</li>
        <li>For printed invoices, prefer error correction Q and pre-test on actual paper.</li>
        <li>Multi-jurisdiction platforms must centralise QR generation in one service and emit the correct format per destination.</li>
        <li>The QR is the buyer's verification surface — not generating it correctly costs the buyer their input tax claim and costs you working capital.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">For the mandate context, read clearance vs reporting models in e-invoicing and real-time invoice reporting.  For the cryptographic primitives, see what is a CSID and what is an IRN.</p><p>For the mandate context, read <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models in e-invoicing</a> and <a href="/__LANG__/blog/real-time-invoice-reporting">real-time invoice reporting</a>. For the cryptographic primitives, see <a href="/__LANG__/blog/what-is-csid">what is a CSID</a> and <a href="/__LANG__/blog/what-is-irn">what is an IRN</a>. For platform selection, the <a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">12-point platform checklist</a> includes QR-generation requirements. For the pillar, see the <a href="/__LANG__/e-invoicing">Invoicemonk global e-invoicing platform</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://zatca.gov.sa/ar/E-Invoicing/SystemsDevelopers/Documents/QRCodeCreation.pdf" rel="noopener noreferrer">ZATCA — Guide to FATOORA-compliant QR code (TLV specification)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing-Detailed-Technical-Guideline.pdf" rel="noopener noreferrer">ZATCA — E-invoicing Detailed Technical Guidelines (Phase 2 cryptographic fields)</a></li>
        <li><a href="https://einvoice.gst.gov.in/" rel="noopener noreferrer">GSTN — e-Invoice portal (signed JWT QR specification)</a></li>
        <li><a href="https://einvoice.firs.gov.ng/" rel="noopener noreferrer">FIRS / NRS MBS — verification URL endpoint</a></li>
        <li><a href="https://datatracker.ietf.org/doc/html/rfc7519" rel="noopener noreferrer">IETF RFC 7519 — JSON Web Token specification</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> Every clearance-model e-invoicing mandate requires a QR on the buyer-facing invoice, but the QR format is set by the regulator and varies sharply: ZATCA Phase 2 uses a Base64-encoded TLV (Tag-Length-Value) structure that includes the seller, totals, signature hash, and public key for offline verification; India's GST IRN uses a signed JSON Web Token (JWT) with the IRN, GSTINs, and totals; FIRS MBS, GRA e-VAT, and KRA eTIMS use a verification URL that resolves to the regulator's public lookup endpoint; and MyInvois uses a hybrid UUID + URL format. A multi-jurisdiction platform must emit the correct format per destination regulator on every cleared invoice.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['QR codes', 'TLV', 'JWT', 'verification URL', 'ZATCA', 'GST IRN', 'FIRS', 'MyInvois'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-11-20',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/qr-codes-on-tax-invoices.jpg',
    featuredImageAlt: 'QR formats on tax invoices: TLV, signed JWT, verification URL, and hybrid',
    pillarContent: false,
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['QR code tax invoice', 'TLV QR ZATCA', 'signed JWT QR India', 'verification URL QR FIRS', 'MyInvois QR hybrid', 'Base64 TLV invoice', 'ECDSA signature ZATCA QR', 'JWT RSA QR India', 'QR error correction printed invoice', 'multi-jurisdiction QR generation'],
    priority: 'P2',
    lastAudited: '2026-11-20',
    faq: [
      { question: 'Can one QR format cover multiple mandates?', answer: 'No. Each regulator specifies the exact format and field layout. A platform serving multiple jurisdictions must generate the QR per the destination regulator\'s specification for that invoice — TLV for ZATCA, signed JWT for India, verification URL for FIRS / GRA / KRA, hybrid for MyInvois.' },
      { question: 'Is the QR replacing the invoice PDF?', answer: 'No. The QR is printed on the invoice PDF (or paper) as the buyer\'s verification surface. The PDF remains the primary buyer-facing document with the QR as the cryptographic / regulatory proof.' },
      { question: 'What QR error correction level should I use?', answer: 'Most regulators specify medium (M) or high (Q). Q is safer for printed invoices that may smudge, photocopy badly, or fade — particularly important for India\'s signed JWT QR which is already large. ZATCA TLV and verification URLs cope well with M; pick Q if in doubt.' },
      { question: 'Why does India use JWT rather than TLV?', answer: 'India\'s regime predates many of the design lessons from ZATCA Phase 2 and benefited from the broad JWT tooling ecosystem when it was designed in 2019–2020. The trade-off is payload size — JWT QRs are larger than TLV and require higher-density symbols.' },
      { question: 'What is the difference between TLV and Base64-encoded TLV?', answer: 'TLV is the binary structure (tag byte, length byte, value bytes). Base64-encoded TLV is that binary string converted to ASCII via Base64 so it can be embedded in a QR. ZATCA specifies Base64 encoding because QR symbols handle ASCII more reliably than arbitrary binary.' },
      { question: 'How do I test my QR before go-live?', answer: 'Decode your own QR with a standard scanner, then run the regulator\'s test harness (ZATCA Compliance and Enablement Toolbox, NIC IRP sandbox, FIRS MBS sandbox). Verify the regulator returns the expected invoice metadata. Pre-print a sample on the actual receipt paper you will use in production.' },
      { question: 'Can I include both a TLV and a URL in one QR?', answer: 'Not within one QR symbol — the QR encodes a single payload. MyInvois\'s "hybrid" format embeds the UUID and a URL together as a single string the verifier parses. ZATCA Phase 2 B2C similarly packs the URL into one of the TLV tags. A second physical QR is acceptable but rarely needed.' },
    ],
    relatedTools: [
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: 'How Invoicemonk implements global e-invoicing mandates' },
      { label: 'What is a CSID', url: '/blog/what-is-csid', description: 'The ZATCA cryptographic credential that signs TLV Tag 7' },
      { label: 'What is an IRN', url: '/blog/what-is-irn', description: 'The clearance identifier embedded in India\'s signed JWT QR' },
    ],
  },

  // ============================================================
  // Outer entity — Real-time invoice reporting / CTC
  // ============================================================
  {
    slug: 'real-time-invoice-reporting',
    title: 'Real-Time Invoice Reporting: How Tax Authorities See Every Transaction As It Happens (and What ViDA Means for 2030)',
    excerpt: 'Real-time invoice reporting (RTIR) and continuous transaction controls (CTC) are the architectures that let ZATCA, MyInvois, GST IRN, FIRS, Hungary RTIR, and (from 2030) the EU ViDA Digital Reporting Requirements see every B2B invoice within seconds of issuance. This guide explains how it works, the trade-offs, and what to design for.',
    content: `<p><strong>Real-time invoice reporting (RTIR) — the umbrella term continuous transaction controls (CTC) — is the architecture where tax authorities receive a structured copy of every in-scope invoice on or near issuance, either before delivery to the buyer (clearance) or immediately after (reporting). It is now the dominant model across Saudi Arabia (ZATCA), India (GST IRN), Malaysia (MyInvois), Nigeria (FIRS / NRS MBS), Italy (SdI), Hungary (RTIR), Spain (SII), Latin America (Brazil NF-e, Mexico CFDI, Chile DTE), and from 1 July 2030 the EU ViDA Digital Reporting Requirements harmonise the patchwork into one EU-wide framework. RTIR makes the regulator a runtime dependency of your billing, replaces declaration-based VAT returns with reconciliation, and shifts audit risk from random selection to data-driven outlier detection.</strong></p><div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Term:</strong> Real-time invoice reporting (RTIR); broader umbrella is Continuous Transaction Controls (CTC).</li>
          <li><strong>Two architectures:</strong> Clearance (regulator validates before invoice is valid) and post-issuance reporting (transmitted within a defined window).</li>
          <li><strong>Live regimes (clearance):</strong> ZATCA Phase 2 (Saudi), GST IRN (India), MyInvois (Malaysia), FIRS / NRS MBS (Nigeria), GRA e-VAT (Ghana), KRA eTIMS (Kenya), Italy SdI, Mexico CFDI, Brazil NF-e, Chile DTE.</li>
          <li><strong>Live regimes (reporting):</strong> Hungary RTIR, Spain SII, France 2026+, Germany 2025+, ZATCA Phase 2 B2C (24h reporting).</li>
          <li><strong>EU framework:</strong> ViDA package adopted 11 March 2025; entry into force 14 April 2025; intra-EU DRR mandatory from 1 July 2030.</li>
          <li><strong>Driver:</strong> the VAT gap — estimated €99 billion in the EU alone (latest Commission estimate).</li>
          <li><strong>Last reviewed:</strong> 20 November 2026 against the EU ViDA Implementation Work Programme 2026 and the OECD CTC tracker.</li>
        </ul>
      </div>

      <nav aria-label="On this page">
        <p><strong>On this page</strong></p><ul>
          <li><a href="#what-is">What real-time invoice reporting is</a></li>
          <li><a href="#two-architectures">The two architectures — clearance vs reporting</a></li>
          <li><a href="#why">Why regulators implemented RTIR / CTC</a></li>
          <li><a href="#impact">What it means for your finance stack</a></li>
          <li><a href="#patterns">Implementation patterns</a></li>
          <li><a href="#regimes">Which regimes are RTIR today</a></li>
          <li><a href="#vida">EU ViDA — DRR from 1 July 2030</a></li>
          <li><a href="#checklist">RTIR-readiness checklist</a></li>
          <li><a href="#sources">Authority sources</a></li>
        </ul>
      </nav>

      <h2 id="what-is">What real-time invoice reporting is</h2><p class="block-answer" data-answer="true">RTIR means the tax authority receives a structured copy (UBL 2.</p><p>RTIR means the tax authority receives a structured copy (UBL 2.1, JSON, INV-01, FatturaPA, CFDI, NF-e, or jurisdiction-specific schema) of every in-scope invoice on or near issuance. The authority validates the payload against schema, taxpayer registry, and tax-rate rules; stores it as the legal record; and uses it for VAT reconciliation, audit selection, and risk scoring. In a pure clearance regime the legal validity of the invoice depends on the regulator's acknowledgement — without the stamp, the invoice doesn't exist for tax purposes.</p><h2 id="two-architectures">The two architectures — clearance vs reporting</h2><h3>Clearance</h3><p>The regulator validates and stamps the invoice <em>before</em> delivery to the buyer. The invoice is only legally valid once the regulator returns its identifier (CSID, IRN, UUID). Examples:</p><ul>
        <li><a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2 B2B</a> — Saudi Arabia.</li>
        <li><a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN</a> — India.</li>
        <li><a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois</a> — Malaysia.</li>
        <li><a href="/__LANG__/e-invoicing/firs-mbs-nigeria">FIRS / NRS MBS</a> — Nigeria.</li>
        <li>Italy SdI; Mexico CFDI; Brazil NF-e and NFS-e; Chile DTE.</li>
      </ul><h3>Post-issuance reporting</h3><p>The invoice is issued, then transmitted to the regulator within a defined window — minutes (Hungary RTIR), 24 hours (ZATCA Phase 2 B2C), or a few days (Spain SII):</p><ul>
        <li>Hungary RTIR — invoices reported in near real time.</li>
        <li>Spain SII — books transmitted within four days.</li>
        <li>ZATCA Phase 2 B2C — reporting within 24 hours.</li>
        <li>Italy Esterometro (cross-border) — periodic reporting alongside SdI.</li>
      </ul><p>Full architectural comparison in <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models in e-invoicing</a>.</p><h2 id="why">Why regulators implemented RTIR / CTC</h2><p class="block-answer" data-answer="true">The driver is the VAT gap — the difference between expected and collected VAT revenue.</p><p>The driver is the <em>VAT gap</em> — the difference between expected and collected VAT revenue. By moving from quarterly returns to per-invoice visibility, regulators cut the lag between fraud and detection from months to seconds:</p><ul>
        <li><strong>Hungary RTIR</strong> cut its VAT gap by an estimated 30% in the first three years after launch.</li>
        <li><strong>India GST IRN</strong> materially closed input-tax-credit fraud — the GSTR-2A/2B mismatch model only works when invoice data is in the regulator's hands at issuance.</li>
        <li><strong>Italy SdI</strong> reduced the Italian VAT gap from one of the highest in the EU to within striking distance of the EU average.</li>
        <li><strong>The EU as a whole</strong> estimates a €99 billion VAT gap — the ViDA package's intra-EU DRR is the structural fix.</li>
      </ul><h2 id="impact">What it means for your finance stack</h2><p class="block-answer" data-answer="true">The regulator becomes a runtime dependency.  Invoicing can block on regulator downtime.</p><ul>
        <li><strong>The regulator becomes a runtime dependency.</strong> Invoicing can block on regulator downtime. Your platform must queue, retry with backoff, and surface clearance status to the user. There is no "ship now, file later".</li>
        <li><strong>Data quality is enforced at issuance.</strong> Regulator schemas reject incomplete or inconsistent payloads synchronously. There is no quarterly clean-up window where finance can fix things off-platform.</li>
        <li><strong>VAT returns become reconciliation, not declaration.</strong> The regulator already has the data. Your return pre-populates from the cleared invoices; you confirm or dispute, you don't declare from scratch. India's GSTR-1 auto-population is the prototype.</li>
        <li><strong>Audit risk shifts.</strong> Random audits give way to data-driven selection. Outliers in your real-time stream — unusual buyer concentration, sudden margin changes, mismatched ITC claims — attract attention immediately.</li>
        <li><strong>Master data becomes a tax artefact.</strong> Buyer TINs / GSTINs / VAT numbers must validate against the regulator's registry on every submission. Stale customer data converts directly into clearance failures.</li>
      </ul><h2 id="patterns">Implementation patterns</h2><p class="block-answer" data-answer="true">Implementation patterns includes: Idempotent submission — every payload carries a deterministic identifier so retries do not duplicate.</p><ul>
        <li><strong>Idempotent submission</strong> — every payload carries a deterministic identifier so retries do not duplicate. India's IRN is deterministic by construction (hash of seller GSTIN + invoice number + FY + document type); for jurisdictions without deterministic identifiers, generate a client-side correlation ID and dedupe on the regulator's response.</li>
        <li><strong>Signed audit log</strong> — every regulator request/response is signed and stored for the statutory retention period (7 years for Malaysia, 8 years for India, 6 years for Saudi Arabia, 10 years for Italy).</li>
        <li><strong>Status surfacing</strong> — the dashboard shows each invoice in its current state (pending, cleared, rejected) with the regulator's response code. Finance teams need to see clearance status without leaving the invoicing screen.</li>
        <li><strong>Pre-send Schematron validation</strong> — block submission of payloads the regulator will reject. Almost every clearance regime publishes Schematron or equivalent rule files; running them client-side cuts the rejection rate to near zero.</li>
        <li><strong>Queue with backoff and dead-letter</strong> — handle regulator outages without losing payloads. Document the SLA expectations to the user.</li>
        <li><strong>Multi-jurisdiction emitter</strong> — a single canonical invoice model with per-regulator transformers, not parallel codebases.</li>
      </ul><h2 id="regimes">Which regimes are RTIR today (November 2026)</h2><table>
        <thead>
          <tr><th>Region</th><th>Regime</th><th>Architecture</th><th>Live since</th></tr>
        </thead>
        <tbody>
          <tr><td>Latin America</td><td>Mexico CFDI</td><td>Clearance via PAC</td><td>2014</td></tr>
          <tr><td>Latin America</td><td>Brazil NF-e / NFS-e</td><td>Clearance via SEFAZ</td><td>2006 / 2015</td></tr>
          <tr><td>Latin America</td><td>Chile DTE</td><td>Clearance via SII</td><td>2014</td></tr>
          <tr><td>EU</td><td>Italy SdI</td><td>Clearance (B2B + B2C)</td><td>2019</td></tr>
          <tr><td>EU</td><td>Hungary RTIR</td><td>Real-time reporting</td><td>2018</td></tr>
          <tr><td>EU</td><td>Spain SII</td><td>4-day reporting</td><td>2017</td></tr>
          <tr><td>EU</td><td>France e-invoicing</td><td>Clearance via PPF + PDPs</td><td>2026+ (phased)</td></tr>
          <tr><td>EU</td><td>Germany e-invoicing</td><td>B2B mandate</td><td>2025+ (phased)</td></tr>
          <tr><td>EU</td><td>Belgium e-invoicing</td><td>Peppol-based</td><td>2026</td></tr>
          <tr><td>Middle East</td><td>ZATCA Phase 1 + 2</td><td>Reporting + Clearance</td><td>2021 / 2023</td></tr>
          <tr><td>Asia</td><td>India GST IRN</td><td>Clearance via IRP</td><td>2020 (₹500cr); ₹5cr from Aug 2023</td></tr>
          <tr><td>Asia</td><td>MyInvois Malaysia</td><td>Clearance via LHDN</td><td>1 Aug 2024 (Phase 1)</td></tr>
          <tr><td>Asia</td><td>Philippines BIR CAS / EIS</td><td>Reporting / Clearance</td><td>2022+</td></tr>
          <tr><td>Africa</td><td>FIRS / NRS MBS Nigeria</td><td>Clearance</td><td>Q3 2025 pilot</td></tr>
          <tr><td>Africa</td><td>GRA e-VAT Ghana</td><td>Clearance</td><td>2022</td></tr>
          <tr><td>Africa</td><td>KRA eTIMS Kenya</td><td>Clearance via TIMS device + cloud</td><td>2024</td></tr>
        </tbody>
      </table><h2 id="vida">EU ViDA — Digital Reporting Requirements from 1 July 2030</h2><p class="block-answer" data-answer="true">The EU's VAT in the Digital Age (ViDA) package was adopted on 11 March 2025 and entered into force on 14 April 2025.</p><p>The EU's <em>VAT in the Digital Age</em> (ViDA) package was adopted on 11 March 2025 and entered into force on 14 April 2025. The Digital Reporting Requirements (DRR) pillar is the structural shift:</p><ul>
        <li><strong>14 April 2025 onwards:</strong> Member States can mandate domestic e-invoicing without first obtaining a derogation from the Commission — removing the legal block that delayed France, Germany, and others.</li>
        <li><strong>1 July 2030:</strong> Mandatory near-real-time digital reporting for intra-EU B2B transactions; harmonised European e-invoicing standard (EN 16931) becomes the default; structured invoices required for all intra-EU B2B.</li>
        <li><strong>By January 2035:</strong> National domestic systems must align with the EU DRR specification, ending the patchwork of national variants.</li>
        <li><strong>Single VAT registration:</strong> separate ViDA pillar; expanded one-stop-shop scope reduces the need for non-resident VAT registrations.</li>
        <li><strong>Platform economy:</strong> separate ViDA pillar; deemed-supplier rules for short-term accommodation and passenger transport platforms.</li>
      </ul><p>The practical signal for platforms: build to EN 16931 today and treat per-country variants as profiles, not separate codebases. The European Commission's 2026 work programme confirms ongoing technical specification work and a delegated act on the DRR data model.</p><h2 id="checklist">RTIR-readiness checklist</h2><p class="block-answer" data-answer="true">RTIR-readiness checklist includes: ☐ Canonical invoice model in your platform with per-regulator transformers.   ☐ Idempotent submission with client-side correlation IDs.</p><ul>
        <li>☐ Canonical invoice model in your platform with per-regulator transformers.</li>
        <li>☐ Idempotent submission with client-side correlation IDs.</li>
        <li>☐ Schematron / SDK validation run pre-submit for every cleared regime.</li>
        <li>☐ Queue + backoff + dead-letter for regulator outages.</li>
        <li>☐ Status surfaced on the invoice timeline with regulator response codes.</li>
        <li>☐ Buyer master data validated against regulator registries at customer onboarding.</li>
        <li>☐ Signed audit log of every request/response for statutory retention.</li>
        <li>☐ VAT return pre-population reconciled to cleared invoices automatically.</li>
        <li>☐ Plan for ViDA DRR alignment by 2030 — EN 16931 today as the canonical model.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: RTIR is no longer the exception — it is the dominant architecture across LatAm, Asia, Africa, and the EU through ViDA.   Clearance and reporting are siblings under the CTC umbrella; the architectural lesson is "data at issuance, not at declaration".</p><ul>
        <li>RTIR is no longer the exception — it is the dominant architecture across LatAm, Asia, Africa, and the EU through ViDA.</li>
        <li>Clearance and reporting are siblings under the CTC umbrella; the architectural lesson is "data at issuance, not at declaration".</li>
        <li>VAT returns are becoming reconciliation, not declaration — design your stack for confirm-and-dispute, not file-from-scratch.</li>
        <li>The regulator is now a runtime dependency. Engineer for it (idempotency, retry, status).</li>
        <li>EU ViDA's 1 July 2030 intra-EU DRR is the next big architectural rewrite — start aligning to EN 16931 now.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">For the architectural comparison, read clearance vs reporting models in e-invoicing.  For the platform-selection lens, see the 12-point e-invoicing platform checklist.</p><p>For the architectural comparison, read <a href="/__LANG__/blog/clearance-vs-reporting-models">clearance vs reporting models in e-invoicing</a>. For the platform-selection lens, see the <a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">12-point e-invoicing platform checklist</a>. For the cryptographic primitives the regulators use, see <a href="/__LANG__/blog/what-is-csid">what is a CSID</a>, <a href="/__LANG__/blog/what-is-irn">what is an IRN</a>, and <a href="/__LANG__/blog/qr-codes-on-tax-invoices">QR codes on tax invoices</a>. For the pillar, see the <a href="/__LANG__/e-invoicing">Invoicemonk global e-invoicing platform</a>.</p><h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" rel="noopener noreferrer">European Commission — VAT in the Digital Age (ViDA)</a></li>
        <li><a href="https://taxation-customs.ec.europa.eu/document/download/c6153542-8b34-4308-b7e4-9e65e55eb79d_en" rel="noopener noreferrer">European Commission — ViDA Implementation Work Programme 2026</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Introduction/Guidelines/Documents/E-invoicing-Detailed-Technical-Guideline.pdf" rel="noopener noreferrer">ZATCA — E-invoicing Detailed Technical Guidelines</a></li>
        <li><a href="https://einvoice.gst.gov.in/" rel="noopener noreferrer">GSTN — e-Invoice portal (India)</a></li>
        <li><a href="https://www.hasil.gov.my/en/e-invoice/" rel="noopener noreferrer">LHDN — MyInvois e-Invoice (Malaysia)</a></li>
        <li><a href="https://www.oecd.org/tax/forum-on-tax-administration/" rel="noopener noreferrer">OECD Forum on Tax Administration — CTC and digital VAT tracking</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> Real-time invoice reporting (RTIR) — the umbrella term continuous transaction controls (CTC) — is the architecture where tax authorities receive a structured copy of every in-scope invoice on or near issuance, either before delivery to the buyer (clearance) or immediately after (reporting). It is now the dominant model across Saudi Arabia (ZATCA), India (GST IRN), Malaysia (MyInvois), Nigeria (FIRS / NRS MBS), Italy (SdI), Hungary (RTIR), Spain (SII), Latin America (Brazil NF-e, Mexico CFDI, Chile DTE), and from 1 July 2030 the EU ViDA Digital Reporting Requirements harmonise the patchwork into one EU-wide framework. RTIR makes the regulator a runtime dependency of your billing, replaces declaration-based VAT returns with reconciliation, and shifts audit risk from random selection to data-driven outlier detection.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['real-time reporting', 'RTIR', 'CTC', 'ZATCA', 'GST IRN', 'MyInvois', 'FIRS', 'ViDA', 'VAT gap'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-11-20',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/real-time-invoice-reporting.jpg',
    featuredImageAlt: 'Real-time invoice reporting architecture across global tax authorities including EU ViDA',
    pillarContent: false,
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['real-time invoice reporting', 'RTIR', 'VAT gap', 'continuous transaction controls', 'CTC', 'EU ViDA DRR', 'Hungary RTIR', 'Italy SdI', 'clearance model e-invoicing', 'post-issuance reporting', 'EN 16931 canonical', 'intra-EU B2B 2030'],
    priority: 'P2',
    lastAudited: '2026-11-20',
    faq: [
      { question: 'What is the difference between RTIR and continuous transaction controls (CTC)?', answer: 'CTC is the umbrella term — any architecture where transactions are controlled by the regulator on a per-transaction basis. RTIR is the subset where the control is real-time reporting (post-issuance transmission within a defined window). Clearance — where the regulator validates and stamps before the invoice is valid — is the other major branch of the CTC family.' },
      { question: 'Will RTIR reach the EU?', answer: 'Yes. The EU\'s ViDA package was adopted on 11 March 2025 and entered into force on 14 April 2025. Mandatory near-real-time digital reporting for intra-EU B2B becomes effective from 1 July 2030. By January 2035 national domestic systems must align with the EU DRR specification, ending the patchwork of Italy SdI, Hungary RTIR, Spain SII, France PPF, and others.' },
      { question: 'Can I batch-submit at the end of the day instead of real-time?', answer: 'Not under most regimes. The defining feature of clearance RTIR is per-invoice transmission on or near issuance. Batching breaks the regime\'s detection lag — regulators do not allow it. Some reporting regimes (Spain SII at 4 days, ZATCA Phase 2 B2C at 24 hours) allow short windows but never end-of-period batching.' },
      { question: 'What is the VAT gap and how does RTIR close it?', answer: 'The VAT gap is the difference between expected and collected VAT revenue. The EU Commission\'s latest estimate puts it at €99 billion EU-wide. RTIR closes the gap by removing the lag between transaction and visibility — Hungary cut its VAT gap by about 30% in three years, and India\'s GSTR-2A/2B reconciliation under IRN materially closed ITC fraud.' },
      { question: 'How do I prepare my platform for EU ViDA?', answer: 'Build to EN 16931 (the European e-invoicing standard) today as your canonical model and treat per-country variants as profiles. The Commission\'s 2026 work programme confirms ongoing technical specification work; aligning early means the 1 July 2030 deadline is a feature flag, not a rewrite.' },
      { question: 'Does RTIR replace the VAT return?', answer: 'Not yet, but it converts the return from declaration to reconciliation. The regulator already has the invoice data, so the return pre-populates from cleared invoices. The taxpayer confirms or disputes rather than re-keying data. India\'s GSTR-1 auto-population from IRNs is the working prototype; the EU\'s ViDA DRR institutionalises the pattern EU-wide.' },
      { question: 'What is the operational risk if the regulator API goes down?', answer: 'Invoicing blocks. In clearance regimes the invoice is not legally valid without the regulator\'s identifier; in reporting regimes the seller still owes the transmission within the defined window. Engineer for it: queue with exponential backoff, surface status on the invoice timeline, document the regulator SLA to your users, and treat regulator incidents as platform-level events rather than per-invoice retries.' },
    ],
    relatedTools: [
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: 'How Invoicemonk implements global e-invoicing mandates' },
      { label: 'Clearance vs reporting models', url: '/blog/clearance-vs-reporting-models', description: 'Architectural comparison across CTC regimes' },
      { label: 'Platform selection checklist', url: '/blog/choosing-an-e-invoicing-platform-checklist', description: '12-point checklist for a multi-jurisdiction platform' },
    ],
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
eInvoicingClusterPostsBatch4.forEach(post => {
  if (!blogPosts.find(p => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
