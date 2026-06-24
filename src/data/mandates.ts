/**
 * E-Invoicing Mandates — single source of truth.
 *
 * Every record satisfies the Strong Claim Bar (six required fields):
 *   1. authority — tax/regulatory body name
 *   2. mandate   — official mandate name + phase
 *   3. artefact  — required structured artefact (CSID, IRN, UUID, QR, signature, etc.)
 *   4. transport — how the artefact reaches the authority
 *   5. appliesTo — segment / threshold / sector
 *   6. liveSince — date Invoicemonk's implementation went live
 *
 * Plus citation URLs for the proof layer (Phase 6) and long-form
 * sections consumed by the shared mandate template.
 *
 * Editing this file propagates to:
 *   - /e-invoicing pillar mandate matrix
 *   - /e-invoicing/{slug} mandate pages
 *   - every /compare/* "E-invoicing mandates supported" row
 *   - GlobalCapabilityBlock counts
 */

export type RegionKey = 'middle-east' | 'asia-pacific' | 'africa' | 'europe' | 'americas';

export interface MandateFAQ {
  question: string;
  answer: string;
}

export interface MandateCitation {
  label: string;
  url: string;
  section?: string;
}

export interface Mandate {
  slug: string;
  jurisdiction: string;
  region: RegionKey;
  authority: string;
  mandate: string;
  artefact: string;
  transport: string;
  appliesTo: string;
  liveSince: string;
  /** Local artefact name used in the global capability block (e.g. CSID, IRN, UUID, QR). */
  localArtefactName: string;
  /** One-sentence summary used in the matrix and meta description. */
  oneLine: string;
  /** Page title for SEO. */
  title: string;
  /** Meta description for SEO. */
  metaDescription: string;
  /** 40-word direct answer (AI overview spec). */
  directAnswer: string;
  /** Long-form body sections. Each becomes an <h2> + <p> block. */
  sections: Array<{ heading: string; body: string }>;
  /** Proof-layer citations to the authority's published spec. */
  citations: MandateCitation[];
  /** 5–7 mandate-specific FAQs. */
  faqs: MandateFAQ[];
  /** ISO date last reviewed against the authority's published spec. Used as the WebPage / GovernmentService dateModified. */
  lastReviewed?: string;
}

/**
 * Sitewide last-reviewed date used as the freshness signal on every mandate page
 * when an individual mandate doesn't override it. Bump this whenever you do a
 * pass across all mandates against the authorities' specs.
 */
export const MANDATES_LAST_REVIEWED = '2026-06-23';

/**
 * Per-mandate last-reviewed dates. Edit this map (one line per mandate slug)
 * when you re-verify an individual mandate against its authority spec —
 * gives each mandate page an independent freshness signal that beats the
 * sitewide fallback.
 *
 * Initial values mirror MANDATES_LAST_REVIEWED; bump per-mandate as work happens.
 */
export const MANDATE_LAST_REVIEWED_BY_SLUG: Record<string, string> = {
  'zatca-phase-2': MANDATES_LAST_REVIEWED,
  'zatca-phase-1': MANDATES_LAST_REVIEWED,
  'myinvois-malaysia': MANDATES_LAST_REVIEWED,
  'gst-irn-india': MANDATES_LAST_REVIEWED,
  'peppol-eu': MANDATES_LAST_REVIEWED,
  'firs-mbs-nigeria': MANDATES_LAST_REVIEWED,
  'mtd-uk': MANDATES_LAST_REVIEWED,
  'kra-etims-kenya': MANDATES_LAST_REVIEWED,
  'gra-e-vat-ghana': MANDATES_LAST_REVIEWED,
  'bir-cas-philippines': MANDATES_LAST_REVIEWED,
  'sars-south-africa': MANDATES_LAST_REVIEWED,
  'zimra-zimbabwe': MANDATES_LAST_REVIEWED,
  'src-seychelles': MANDATES_LAST_REVIEWED,
  'sef-brazil': MANDATES_LAST_REVIEWED,
  'b2g-us': MANDATES_LAST_REVIEWED,
  'cra-peppol-canada': MANDATES_LAST_REVIEWED,
};

/**
 * Per-mandate related cluster post slugs — drives the "Related guides" rail
 * on each MandatePage. Only references the new *-explained / how-to /
 * common-errors cluster archetypes; legacy posts are 301-redirected.
 *
 * The MandatePage rail filters out any slug not registered in blogPosts,
 * so adding cluster posts incrementally is safe.
 */
export const MANDATE_RELATED_SLUGS: Record<string, string[]> = {
  'zatca-phase-2': [
    'how-to-comply-with-zatca-phase-2',
    'zatca-phase-2-explained',
    'zatca-phase-2-common-errors',
  ],
  'zatca-phase-1': [
    'how-to-comply-with-zatca-phase-1',
    'zatca-phase-1-explained',
    'zatca-phase-1-vs-phase-2',
  ],
  'myinvois-malaysia': [
    'how-to-comply-with-myinvois-malaysia',
    'myinvois-malaysia-explained',
    'myinvois-malaysia-common-errors',
  ],
  'gst-irn-india': [
    'how-to-comply-with-gst-irn-india',
    'gst-irn-india-explained',
  ],
  'peppol-eu': [
    'how-to-comply-with-peppol-eu',
    'peppol-eu-explained',
    'peppol-vs-national-portals',
  ],
  'firs-mbs-nigeria': [
    'how-to-comply-with-firs-mbs-nigeria',
    'firs-mbs-nigeria-explained',
  ],
  'mtd-uk': [
    'how-to-comply-with-mtd-uk',
    'mtd-uk-explained',
    'mtd-uk-common-errors',
  ],
  'kra-etims-kenya': [
    'how-to-comply-with-kra-etims-kenya',
    'kra-etims-kenya-explained',
  ],
  'gra-e-vat-ghana': [
    'how-to-comply-with-gra-e-vat-ghana',
    'gra-e-vat-ghana-explained',
    'gra-e-vat-ghana-common-errors',
  ],
  'bir-cas-philippines': [
    'how-to-comply-with-bir-cas-philippines',
    'bir-cas-philippines-explained',
    'bir-cas-philippines-common-errors',
  ],
  'sars-south-africa': [
    'how-to-comply-with-sars-south-africa',
    'sars-south-africa-explained',
    'sars-south-africa-vs-kra-etims',
  ],
  'zimra-zimbabwe': [
    'how-to-comply-with-zimra-fdms',
    'zimra-fdms-explained',
    'zimra-fdms-common-errors',
  ],
  'src-seychelles': [
    'how-to-comply-with-src-seychelles',
    'src-seychelles-explained',
    'src-seychelles-common-errors',
  ],
  'sef-brazil': [
    'how-to-comply-with-sefaz-brazil',
    'sefaz-brazil-explained',
  ],
  'b2g-us': [
    'how-to-comply-with-us-b2g-e-invoicing',
    'us-b2g-e-invoicing-explained',
    'us-b2g-vs-peppol',
  ],
  'cra-peppol-canada': [
    'how-to-comply-with-cra-peppol-canada',
    'cra-peppol-canada-explained',
    'cra-peppol-canada-common-errors',
  ],
};


export const mandates: Mandate[] = [
  {
    slug: 'zatca-phase-2',
    jurisdiction: 'Saudi Arabia',
    region: 'middle-east',
    authority: 'ZATCA (Zakat, Tax and Customs Authority)',
    mandate: 'Fatoorah Phase 2 — Integration Phase',
    artefact: 'CSID-signed XML (UBL 2.1) with embedded QR (TLV, Base64) and UUID',
    transport: 'Direct API integration with the ZATCA Fatoorah portal (clearance for B2B, reporting for B2C)',
    appliesTo: 'All VAT-registered businesses in Saudi Arabia (B2B clearance, B2C reporting).',
    liveSince: '2024-04-01',
    localArtefactName: 'CSID',
    oneLine: 'CSID-signed XML cleared through the ZATCA Fatoorah portal in real time.',
    title: 'ZATCA Phase 2 e-Invoicing (Saudi Arabia) | Invoicemonk',
    metaDescription: 'Issue ZATCA Phase 2 compliant invoices in Saudi Arabia. CSID-signed UBL 2.1 XML with QR, cleared through the Fatoorah portal in real time. Live since April 2024.',
    directAnswer: 'Invoicemonk issues ZATCA Phase 2 compliant e-invoices in Saudi Arabia: UBL 2.1 XML signed with your CSID, embedded TLV QR and UUID, cleared through the Fatoorah portal for B2B and reported for B2C. Live since April 2024.',
    sections: [
      {
        heading: 'What ZATCA Phase 2 requires',
        body: 'ZATCA Phase 2 (the Integration Phase) requires every VAT-registered business in Saudi Arabia to issue invoices as UBL 2.1 XML, sign them with a Cryptographic Stamp Identifier (CSID) issued by ZATCA, embed a TLV-encoded QR code, and either clear the invoice with ZATCA in real time (B2B Standard Tax Invoices) or report it within 24 hours (B2C Simplified Tax Invoices). The mandate rolled out in waves from January 2023 and now covers every VAT-registered seller.',
      },
      {
        heading: 'How Invoicemonk meets ZATCA Phase 2',
        body: 'On invoice creation, Invoicemonk renders the UBL 2.1 XML, computes the invoice hash chain, signs the document with your CSID using XAdES, embeds the TLV QR (seller name, VAT number, timestamp, totals, hash) and the UUID, then submits it to the ZATCA Fatoorah portal — clearance for B2B Standard Tax Invoices, reporting for B2C Simplified Tax Invoices. The cleared invoice and ZATCA QR are bound to the PDF/A-3 download for the buyer. CSID onboarding (CSR generation, OTP, certificate retrieval) is handled inside the app.',
      },
      {
        heading: 'Who this applies to',
        body: 'All VAT-registered persons in Saudi Arabia, regardless of turnover. B2B transactions follow the clearance model; B2C transactions follow the reporting model. Foreign sellers without a Saudi VAT registration are out of scope.',
      },
    ],
    citations: [
      { label: 'ZATCA E-Invoicing Detailed Guideline', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/default.aspx' },
      { label: 'ZATCA Electronic Invoice XML Implementation Standard', url: 'https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx', section: 'UBL 2.1 + KSA extensions' },
      { label: 'ZATCA E-Invoicing Resolution & Regulations', url: 'https://zatca.gov.sa/en/E-Invoicing/Legislation/Pages/default.aspx' },
      { label: 'ZATCA Fatoorah developer portal', url: 'https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx', section: 'APIs, CSID, compliance checks' },
      { label: 'ZATCA Phase 2 onboarding waves', url: 'https://zatca.gov.sa/en/E-Invoicing/Pages/Wave.aspx' },
      { label: 'KSA VAT Implementing Regulations', url: 'https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/VAT.aspx', section: 'Article 53 — Tax Invoices' },
    ],
    faqs: [
      { question: 'Do I need a CSID before I can send my first ZATCA invoice?', answer: 'Yes. Invoicemonk walks you through CSID onboarding inside the app: we generate the CSR, you complete the OTP step on the ZATCA Fatoorah portal, and the certificate is stored encrypted for signing. The whole flow takes under five minutes.' },
      { question: 'Does Invoicemonk handle both B2B clearance and B2C reporting?', answer: 'Yes. Standard Tax Invoices (B2B) are cleared with ZATCA before delivery to the buyer; Simplified Tax Invoices (B2C) are reported within the 24-hour window. The buyer always receives the cleared/reported version with the ZATCA QR.' },
      { question: 'What XML standard does Invoicemonk emit?', answer: 'UBL 2.1 with ZATCA KSA extensions, signed with XAdES as required by the ZATCA Electronic Invoice XML Implementation Standard.' },
      { question: 'Can I export the signed XML for my accountant?', answer: 'Yes. Every cleared invoice exposes the signed XML, the ZATCA QR, the cryptographic stamp, and the PDF/A-3 download from the invoice detail screen.' },
      { question: 'What happens if ZATCA rejects an invoice?', answer: 'The rejection reason from ZATCA is surfaced on the invoice with the corrective action. The invoice cannot be sent to the buyer until clearance succeeds — that is the Phase 2 design and Invoicemonk enforces it.' },
    ],
  },
  {
    slug: 'zatca-phase-1',
    jurisdiction: 'Saudi Arabia',
    region: 'middle-east',
    authority: 'ZATCA (Zakat, Tax and Customs Authority)',
    mandate: 'Fatoorah Phase 1 — Generation Phase',
    artefact: 'Structured electronic invoice (XML or PDF/A-3 with XML), tamper-resistant, with QR for Simplified Tax Invoices',
    transport: 'On-system generation and archival (no portal submission in Phase 1)',
    appliesTo: 'All VAT-registered businesses that have not yet onboarded to Phase 2.',
    liveSince: '2021-12-04',
    localArtefactName: 'Tamper-resistant XML',
    oneLine: 'Structured, tamper-resistant invoices with QR — the on-system baseline before Phase 2 onboarding.',
    title: 'ZATCA Phase 1 e-Invoicing (Saudi Arabia) | Invoicemonk',
    metaDescription: 'Issue ZATCA Phase 1 compliant invoices in Saudi Arabia: structured, tamper-resistant XML with QR for simplified invoices, ready for Phase 2 onboarding. Live since December 2021.',
    directAnswer: 'Invoicemonk meets ZATCA Phase 1 (Generation Phase): every invoice is generated as a tamper-resistant structured document with a QR code for Simplified Tax Invoices, kept in immutable storage, and ready for Phase 2 CSID signing the day you onboard. Live since December 2021.',
    sections: [
      {
        heading: 'What ZATCA Phase 1 requires',
        body: 'Phase 1, in force since 4 December 2021, requires VAT-registered businesses to generate and store invoices in a structured, tamper-resistant electronic format and to attach a QR code on Simplified Tax Invoices. Handwritten or scanned-PDF invoices, and any system that allows post-issue edits, are non-compliant.',
      },
      {
        heading: 'How Invoicemonk meets ZATCA Phase 1',
        body: 'Invoicemonk generates every Saudi invoice as a structured document with append-only audit history, exposes the full sequence and hash chain, and embeds a QR with seller name, VAT number, timestamp, and totals on Simplified Tax Invoices. When you are ready to move to Phase 2, the same invoice records gain CSID signing and Fatoorah portal clearance without re-issuing past documents.',
      },
      {
        heading: 'Who this applies to',
        body: 'Any VAT-registered person in Saudi Arabia not yet onboarded to Phase 2 Integration. ZATCA continues to onboard remaining taxpayers in waves; Phase 1 controls apply until your wave is integrated.',
      },
    ],
    citations: [
      { label: 'ZATCA E-Invoicing Resolution (Phase 1)', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/default.aspx' },
      { label: 'ZATCA Phase 1 Detailed Guideline', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Documents/E-invoicing_Detailed%20_Guideline.pdf' },
      { label: 'ZATCA Controls, Requirements, Technical Specifications (Phase 1)', url: 'https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx' },
      { label: 'KSA VAT Implementing Regulations', url: 'https://zatca.gov.sa/en/RulesRegulations/Taxes/Pages/VAT.aspx' },
      { label: 'ZATCA E-Invoicing FAQ', url: 'https://zatca.gov.sa/en/E-Invoicing/Introduction/Pages/FAQ.aspx' },
      { label: 'ZATCA QR code specification (Phase 1 TLV)', url: 'https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx', section: 'QR TLV tags 1–5' },
    ],
    faqs: [
      { question: 'Do Phase 1 invoices need a QR code?', answer: 'Only Simplified Tax Invoices (B2C) require a QR in Phase 1. Standard Tax Invoices (B2B) need the QR from Phase 2 onwards. Invoicemonk applies the correct rule per invoice type.' },
      { question: 'Can I edit a sent invoice?', answer: 'No. ZATCA prohibits edits to issued invoices in both phases. Use a credit note to correct — Invoicemonk creates the linked credit note and preserves the original audit trail.' },
      { question: 'Will my Phase 1 records be valid for Phase 2 onboarding?', answer: 'Yes. The structured records, hash chain, and sequence persist; once your CSID is provisioned the same records gain XAdES signing and Fatoorah clearance going forward.' },
      { question: 'What format is the invoice stored in?', answer: 'Structured XML with PDF/A-3 rendering, retained for the ZATCA-required period inside immutable storage.' },
      { question: 'Is Phase 1 still active if my wave has not been called for Phase 2?', answer: 'Yes — Phase 1 controls remain mandatory until ZATCA integrates your wave. Invoicemonk enforces both regimes side by side.' },
    ],
  },
  {
    slug: 'myinvois-malaysia',
    jurisdiction: 'Malaysia',
    region: 'asia-pacific',
    authority: 'LHDN (Inland Revenue Board of Malaysia)',
    mandate: 'MyInvois e-Invoicing',
    artefact: 'MyInvois UUID, validated XML/JSON, embedded QR linking to the LHDN validation record',
    transport: 'Direct API submission to the LHDN MyInvois portal for validation and UUID issuance',
    appliesTo: 'Phased by turnover: >MYR 100m since Aug 2024; >MYR 25m since Jan 2025; all taxpayers from Jul 2025.',
    liveSince: '2024-08-01',
    localArtefactName: 'MyInvois UUID',
    oneLine: 'XML/JSON validated by LHDN MyInvois with a UUID + QR returned to the buyer.',
    title: 'MyInvois e-Invoicing (Malaysia) | Invoicemonk',
    metaDescription: 'Issue Malaysia MyInvois e-invoices validated by LHDN with UUID + QR. Phased rollout supported from MYR 100m down to all taxpayers. Live since August 2024.',
    directAnswer: 'Invoicemonk submits Malaysian invoices to the LHDN MyInvois portal as validated XML/JSON, receives the MyInvois UUID and validation link, and embeds the QR on the PDF for the buyer. Live since August 2024.',
    sections: [
      {
        heading: 'What MyInvois requires',
        body: 'LHDN requires every in-scope taxpayer to transmit invoices, credit notes, debit notes, and refund notes to the MyInvois portal in UBL XML or JSON, receive a validated UUID, and pass that UUID plus QR to the buyer. Rollout is phased by turnover: >MYR 100m from 1 August 2024, >MYR 25m from 1 January 2025, all taxpayers from 1 July 2025.',
      },
      {
        heading: 'How Invoicemonk meets MyInvois',
        body: 'On send, Invoicemonk builds the MyInvois-compliant XML/JSON, signs with your LHDN-onboarded digital certificate, submits to the MyInvois API, captures the UUID and validation link, and binds the QR to the buyer-facing PDF. Self-billed e-invoices and consolidated B2C e-invoices are both supported. Cancellation within the 72-hour MyInvois window is exposed as a one-click action.',
      },
      {
        heading: 'Who this applies to',
        body: 'Malaysian taxpayers in the active rollout wave for their turnover band. Foreign suppliers issuing to Malaysian buyers are in scope where the buyer requires self-billed e-invoicing.',
      },
    ],
    citations: [
      { label: 'LHDN e-Invoice Guideline', url: 'https://www.hasil.gov.my/en/e-invoice/' },
      { label: 'MyInvois SDK', url: 'https://sdk.myinvois.hasil.gov.my/' },
      { label: 'MyInvois portal', url: 'https://myinvois.hasil.gov.my/' },
      { label: 'LHDN e-Invoice Specific Guideline', url: 'https://www.hasil.gov.my/en/e-invoice/general-guideline/' },
      { label: 'MyInvois Catalogue of Codes', url: 'https://sdk.myinvois.hasil.gov.my/codes/' },
      { label: 'Income Tax Act 1967, s.82C (e-invoicing power)', url: 'https://www.hasil.gov.my/en/e-invoice/' },
    ],
    faqs: [
      { question: 'Does Invoicemonk submit directly to MyInvois or through a middleware?', answer: 'Direct submission to the MyInvois API using your LHDN-onboarded digital certificate. No third-party middleware fee.' },
      { question: 'Are self-billed e-invoices supported?', answer: 'Yes. Self-billed e-invoices (where a Malaysian buyer issues on behalf of a foreign supplier) are supported with the correct document type code.' },
      { question: 'Can I consolidate B2C invoices?', answer: 'Yes. Consolidated e-invoices for B2C transactions are submitted monthly within the LHDN window.' },
      { question: 'What happens during the 72-hour cancellation window?', answer: 'You can cancel a validated invoice in one click within 72 hours of validation. After 72 hours the invoice is final and a credit note must be issued.' },
      { question: 'Which formats does Invoicemonk submit?', answer: 'UBL 2.1 XML by default; JSON is supported for systems that prefer it. Both pass LHDN validation.' },
    ],
  },
  {
    slug: 'gst-irn-india',
    jurisdiction: 'India',
    region: 'asia-pacific',
    authority: 'GSTN / NIC (Invoice Registration Portal)',
    mandate: 'GST e-Invoicing (IRN + QR)',
    artefact: 'IRN (Invoice Reference Number), digitally signed JSON, signed QR with IRN',
    transport: 'Direct API submission to the NIC Invoice Registration Portal (IRP)',
    appliesTo: 'All GST-registered businesses with aggregate turnover above INR 5 crore (current threshold).',
    liveSince: '2023-08-01',
    localArtefactName: 'IRN',
    oneLine: 'IRN + signed QR returned by the NIC IRP for every B2B GST invoice.',
    title: 'GST e-Invoicing with IRN (India) | Invoicemonk',
    metaDescription: 'Generate GST IRN and signed QR for every B2B invoice via the NIC Invoice Registration Portal. CGST, SGST, IGST handled. Live for the INR 5 crore threshold since August 2023.',
    directAnswer: 'Invoicemonk submits Indian B2B invoices to the NIC Invoice Registration Portal, receives the IRN and digitally signed QR, and binds both to the GST invoice — CGST, SGST, and IGST computed per place-of-supply rules. Live since August 2023.',
    sections: [
      {
        heading: 'What India GST e-Invoicing requires',
        body: 'Businesses above the aggregate-turnover threshold (currently INR 5 crore) must submit every B2B invoice, credit note, and debit note to the NIC Invoice Registration Portal in the prescribed JSON schema, receive an IRN (Invoice Reference Number) and a digitally signed QR, and print both on the invoice issued to the buyer. The IRP returns the signed payload within seconds; the IRN is required for the invoice to be legally valid.',
      },
      {
        heading: 'How Invoicemonk meets GST e-Invoicing',
        body: 'Invoicemonk computes CGST/SGST/IGST per place of supply, builds the GST JSON schema, submits to the IRP, captures the IRN and signed QR, and renders both on the invoice PDF. GSTR-1 auto-population is supported because the IRP submission feeds the GSTR-1 return automatically. Cancellation within the 24-hour IRP window and credit-note linkage are first-class.',
      },
      {
        heading: 'Who this applies to',
        body: 'GST-registered taxpayers with aggregate turnover above the current INR 5 crore threshold for all B2B supplies, exports, and supplies to SEZs. Below the threshold, e-invoicing remains optional but supported.',
      },
    ],
    citations: [
      { label: 'GST e-Invoice Portal — Schema & API', url: 'https://einvoice1.gst.gov.in/' },
      { label: 'CBIC Notification on e-Invoicing Threshold', url: 'https://www.cbic.gov.in/' },
      { label: 'GSTN e-Invoice API Sandbox', url: 'https://einv-apisandbox.nic.in/' },
      { label: 'GST e-Invoice JSON Schema (INV-01)', url: 'https://einvoice1.gst.gov.in/Others/JsonSchema' },
      { label: 'CBIC Notification 17/2022-Central Tax (turnover threshold)', url: 'https://taxinformation.cbic.gov.in/' },
      { label: 'GST Rules 48(4) & 48(5) — e-invoice mandate', url: 'https://cbic-gst.gov.in/' },
    ],
    faqs: [
      { question: 'Does Invoicemonk file GSTR-1 automatically?', answer: 'IRP submission auto-populates GSTR-1, so filed values match issued invoices without re-entry. You still file GSTR-1 from the GST portal; the data is pre-populated.' },
      { question: 'Are CGST, SGST, and IGST split correctly?', answer: 'Yes. The split is computed from the place of supply per Section 10 of the IGST Act; intra-state supply yields CGST+SGST, inter-state and export supply yield IGST.' },
      { question: 'Can I cancel an IRN?', answer: 'Yes, within 24 hours of generation through the IRP. Invoicemonk exposes the cancellation flow with the reason code. After 24 hours, a credit note is required.' },
      { question: 'What about e-Way Bill?', answer: 'For movements of goods above the e-Way Bill threshold, Invoicemonk can generate the EWB from the same invoice payload using the linked NIC API.' },
      { question: 'Do I need separate IRP credentials?', answer: 'Yes — you generate API credentials inside the GST e-Invoice portal once and store them in Invoicemonk. Subsequent submissions are automatic.' },
    ],
  },
  {
    slug: 'peppol-eu',
    jurisdiction: 'European Union',
    region: 'europe',
    authority: 'OpenPeppol / national Peppol Authorities',
    mandate: 'Peppol BIS Billing 3.0 (B2B and B2G)',
    artefact: 'UBL 2.1 / CII XML conforming to Peppol BIS 3.0, signed and routed via a Peppol Access Point',
    transport: 'Four-corner model: Invoicemonk → certified Peppol Access Point → buyer Access Point → buyer',
    appliesTo: 'EU sellers and buyers exchanging structured e-invoices, including all B2G in EU member states (Directive 2014/55/EU).',
    liveSince: '2024-01-15',
    localArtefactName: 'Peppol BIS UBL',
    oneLine: 'UBL 2.1 routed through the four-corner Peppol network via a certified Access Point.',
    title: 'Peppol BIS Billing 3.0 e-Invoicing (EU) | Invoicemonk',
    metaDescription: 'Send Peppol BIS Billing 3.0 e-invoices across the EU through a certified Access Point. B2G and B2B coverage under Directive 2014/55/EU. Live since January 2024.',
    directAnswer: 'Invoicemonk issues Peppol BIS Billing 3.0 invoices (UBL 2.1) and routes them through a certified Peppol Access Point in the four-corner model — covering all EU B2G under Directive 2014/55/EU plus cross-border B2B. Live since January 2024.',
    sections: [
      {
        heading: 'What Peppol requires',
        body: 'Peppol BIS Billing 3.0 defines a structured UBL 2.1 e-invoice profile and a four-corner exchange network (sender, sender Access Point, receiver Access Point, receiver). EU Directive 2014/55/EU mandates Peppol-compliant receipt for all B2G transactions in member states; B2B mandates are rolling out per country (e.g. France 2026, Germany 2025–2028, Belgium 2026).',
      },
      {
        heading: 'How Invoicemonk meets Peppol',
        body: 'Invoicemonk builds the Peppol BIS Billing 3.0 UBL, validates against the Peppol schematron, signs the payload, and routes it via a certified Peppol Access Point partner to the buyer\'s Access Point using the receiver\'s Peppol participant ID. Status callbacks (delivered, rejected, accepted, paid) flow back into the invoice timeline. Cross-border invoices use the destination country\'s Peppol BIS country specialisation where one exists.',
      },
      {
        heading: 'Who this applies to',
        body: 'Any EU seller or buyer exchanging structured e-invoices. All B2G transactions across member states under Directive 2014/55/EU. B2B coverage expands as each member state activates its mandate.',
      },
    ],
    citations: [
      { label: 'Peppol BIS Billing 3.0 specification', url: 'https://docs.peppol.eu/poacc/billing/3.0/' },
      { label: 'EU Directive 2014/55/EU', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32014L0055' },
      { label: 'EN 16931 — European e-invoice semantic standard', url: 'https://www.cencenelec.eu/areas-of-work/cen-cenelec-topics/digital-society/electronic-invoicing-en-16931/' },
      { label: 'OpenPeppol governance & post-award', url: 'https://peppol.org/' },
      { label: 'ViDA (VAT in the Digital Age) proposal', url: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en' },
      { label: 'Peppol Authority list', url: 'https://peppol.org/who-is-who/peppol-authorities/' },
    ],
    faqs: [
      { question: 'Do I need to register on the Peppol network myself?', answer: 'No. Invoicemonk\'s certified Access Point partner registers a Peppol participant ID on your behalf. You start sending and receiving in under a day.' },
      { question: 'Which country specialisations are supported?', answer: 'All published Peppol BIS country specialisations are validated, including the French Factur-X profile, the Italian FatturaPA bridge, German XRechnung, and Belgian Peppol BIS.' },
      { question: 'Can I receive Peppol invoices into Invoicemonk?', answer: 'Yes. Inbound Peppol invoices land in your inbox with the UBL parsed into line items for one-click recording.' },
      { question: 'What happens if the buyer is not on Peppol?', answer: 'Invoicemonk falls back to a Peppol BIS UBL XML email attachment plus a signed PDF. When the buyer onboards to Peppol, future invoices route over the network automatically.' },
      { question: 'Is Peppol the same as EN 16931?', answer: 'Peppol BIS Billing 3.0 is a Core Invoice Usage Specification (CIUS) of EN 16931, the European semantic standard. Peppol adds the transport network on top.' },
    ],
  },
  {
    slug: 'firs-mbs-nigeria',
    jurisdiction: 'Nigeria',
    region: 'africa',
    authority: 'FIRS (Federal Inland Revenue Service)',
    mandate: 'FIRS Merchant-Buyer Solution (MBS) e-Invoicing',
    artefact: 'IRN issued by FIRS MBS, signed JSON payload, QR with FIRS verification URL',
    transport: 'Direct API submission to the FIRS MBS platform',
    appliesTo: 'Phased: large taxpayers from 1 August 2025; medium and small in subsequent waves per FIRS schedule.',
    liveSince: '2025-08-01',
    localArtefactName: 'FIRS IRN',
    oneLine: 'FIRS-issued IRN and verification QR for every Nigerian B2B invoice through the MBS platform.',
    title: 'FIRS e-Invoicing (Nigeria) | Invoicemonk',
    metaDescription: 'Issue FIRS Merchant-Buyer Solution (MBS) e-invoices in Nigeria: FIRS IRN, signed JSON, and verification QR. Live for large taxpayers since August 2025.',
    directAnswer: 'Invoicemonk submits Nigerian invoices to the FIRS Merchant-Buyer Solution platform, receives the FIRS IRN and verification QR, and binds them to the invoice. Live for large taxpayers since 1 August 2025; subsequent FIRS waves added on schedule.',
    sections: [
      {
        heading: 'What FIRS MBS requires',
        body: 'The FIRS Merchant-Buyer Solution requires in-scope taxpayers to transmit every B2B invoice to the FIRS platform in the prescribed JSON schema, receive a FIRS-issued IRN, and present the IRN + verification QR to the buyer. Large taxpayers were onboarded from 1 August 2025; medium and small taxpayers follow on the FIRS schedule.',
      },
      {
        heading: 'How Invoicemonk meets FIRS MBS',
        body: 'Invoicemonk builds the FIRS JSON, signs with your FIRS-onboarded credential, submits to the MBS API, stores the IRN and FIRS digital signature, and binds the QR (pointing to the FIRS public verification endpoint) to the buyer PDF. The Nigerian VAT (7.5%) and Withholding Tax fields are pre-populated per FIRS rules.',
      },
      {
        heading: 'Who this applies to',
        body: 'Nigerian VAT-registered taxpayers in the active FIRS rollout wave. Foreign suppliers issuing to Nigerian buyers fall under the buyer\'s self-account obligation per FIRS guidance.',
      },
    ],
    citations: [
      { label: 'FIRS National e-Invoicing Solution overview', url: 'https://www.firs.gov.ng/' },
      { label: 'FIRS Merchant-Buyer Solution (MBS) portal', url: 'https://einvoice.firs.gov.ng/' },
      { label: 'FIRS e-Invoicing Guidelines (2024)', url: 'https://www.firs.gov.ng/national-e-invoicing-solution/' },
      { label: 'Nigeria Value Added Tax Act (Cap. V1, LFN 2004)', url: 'https://www.firs.gov.ng/tax-resources/tax-laws/' },
      { label: 'FIRS TIN Verification portal', url: 'https://tinverification.jtb.gov.ng/' },
      { label: 'Federal Inland Revenue Service (Establishment) Act 2007', url: 'https://www.firs.gov.ng/tax-resources/tax-laws/' },
    ],
    faqs: [
      { question: 'When do medium and small taxpayers become in scope?', answer: 'FIRS publishes wave dates on its portal. Invoicemonk activates submission automatically for your account on your wave date — no setting to flip.' },
      { question: 'How is Withholding Tax handled?', answer: 'WHT codes per FIRS schedule are applied at the line level; the buyer\'s WHT obligation is itemised on the invoice and reported in the FIRS payload.' },
      { question: 'Can the buyer verify the invoice?', answer: 'Yes — the embedded QR resolves to the FIRS public verification endpoint that confirms the IRN, seller, buyer, and totals.' },
      { question: 'Does this replace the existing FIRS VAT return?', answer: 'No. The VAT return remains; MBS data pre-populates it so filed values match issued invoices.' },
      { question: 'What about TIN validation?', answer: 'Both seller and buyer TINs are validated against the FIRS TIN registry before submission.' },
    ],
  },
  {
    slug: 'mtd-uk',
    jurisdiction: 'United Kingdom',
    region: 'europe',
    authority: 'HMRC (His Majesty\'s Revenue and Customs)',
    mandate: 'Making Tax Digital for VAT',
    artefact: 'Digital VAT records linked to invoice IDs, digital VAT return submitted via MTD API',
    transport: 'Direct OAuth2 submission to the HMRC MTD VAT API',
    appliesTo: 'All UK VAT-registered businesses (mandatory since 1 April 2022).',
    liveSince: '2022-04-01',
    localArtefactName: 'MTD digital VAT record',
    oneLine: 'Digital VAT records and MTD-API VAT returns straight from your invoice ledger.',
    title: 'Making Tax Digital for VAT (UK) | Invoicemonk',
    metaDescription: 'Meet HMRC Making Tax Digital for VAT with digital records linked to every invoice and MTD-API VAT return submission. Live since April 2022.',
    directAnswer: 'Invoicemonk keeps your UK VAT records in the HMRC-required digital form, with every box-1-to-box-9 figure traceable back to the source invoice, and submits the VAT return through the HMRC MTD API. Live since April 2022.',
    sections: [
      {
        heading: 'What MTD for VAT requires',
        body: 'HMRC MTD for VAT (in force for all VAT-registered businesses since 1 April 2022) requires digital record keeping for VAT data, a digital link between source invoices and the return, and submission of the VAT return through HMRC\'s MTD API rather than the legacy portal. Manual cut-and-paste or unlinked spreadsheets are non-compliant.',
      },
      {
        heading: 'How Invoicemonk meets MTD',
        body: 'Every invoice line carries the VAT rate, net, VAT amount, and reverse-charge flag; box 1–9 figures are computed from the invoice ledger with full digital linkage. The VAT return is filed through the HMRC MTD API via OAuth2; obligations, returns, and payments flow back into the dashboard. Reverse charge for construction services (CIS) and EU acquisitions/dispatches post-Brexit are handled correctly.',
      },
      {
        heading: 'Who this applies to',
        body: 'All UK VAT-registered businesses, regardless of turnover. Voluntary registrations are included since April 2022.',
      },
    ],
    citations: [
      { label: 'HMRC MTD for VAT notice (700/22)', url: 'https://www.gov.uk/government/publications/vat-notice-70022-making-tax-digital-for-vat' },
      { label: 'HMRC VAT (MTD) API', url: 'https://developer.service.hmrc.gov.uk/api-documentation/docs/api/service/vat-api/' },
      { label: 'MTD for VAT overview (gov.uk)', url: 'https://www.gov.uk/government/collections/making-tax-digital-for-vat' },
      { label: 'HMRC recognised MTD software', url: 'https://www.tax.service.gov.uk/making-tax-digital-software' },
      { label: 'Domestic reverse charge for construction (CIS) — VAT notice 735', url: 'https://www.gov.uk/guidance/vat-domestic-reverse-charge-for-building-and-construction-services' },
      { label: 'Postponed VAT accounting guidance', url: 'https://www.gov.uk/guidance/complete-your-vat-return-to-account-for-import-vat' },
    ],
    faqs: [
      { question: 'Is Invoicemonk on the HMRC recognised software list?', answer: 'Yes. Invoicemonk uses the HMRC MTD VAT API for return submission and meets the digital-link requirement end-to-end.' },
      { question: 'Does Invoicemonk handle Reverse Charge for construction (CIS)?', answer: 'Yes. Domestic reverse-charge invoices for construction services are flagged with the correct VAT note and the buyer\'s reverse-charge obligation is itemised.' },
      { question: 'What about EU acquisitions post-Brexit?', answer: 'Imports and acquisitions from the EU are handled with the correct postponed VAT accounting (PVA) treatment in boxes 1, 4, and 7.' },
      { question: 'Can my accountant submit on my behalf?', answer: 'Yes. Agent access is supported via the HMRC agent services account model.' },
      { question: 'Are exports zero-rated automatically?', answer: 'Yes. Invoices to non-UK buyers with valid evidence are zero-rated and recorded in box 6.' },
    ],
  },
  {
    slug: 'kra-etims-kenya',
    jurisdiction: 'Kenya',
    region: 'africa',
    authority: 'KRA (Kenya Revenue Authority)',
    mandate: 'eTIMS (Electronic Tax Invoice Management System)',
    artefact: 'Control Unit Invoice Number (CU Invoice Number), QR, signed invoice transmitted to KRA in real time',
    transport: 'Direct API submission to the KRA eTIMS portal (online VSCU/OSCU model)',
    appliesTo: 'All taxpayers with annual turnover above KES 5 million, plus all VAT-registered businesses regardless of turnover.',
    liveSince: '2024-03-31',
    localArtefactName: 'CU Invoice Number',
    oneLine: 'KRA eTIMS Control Unit Invoice Number and QR transmitted in real time.',
    title: 'KRA eTIMS e-Invoicing (Kenya) | Invoicemonk',
    metaDescription: 'Issue KRA eTIMS compliant invoices in Kenya: Control Unit Invoice Number, QR, and real-time transmission to KRA. Live since March 2024.',
    directAnswer: 'Invoicemonk transmits Kenyan invoices to the KRA eTIMS platform in real time, receives the Control Unit Invoice Number and KRA-signed QR, and binds them to the invoice. Live since 31 March 2024.',
    sections: [
      {
        heading: 'What eTIMS requires',
        body: 'KRA eTIMS replaced the older TIMS hardware-ETR model from late 2023. All taxpayers with annual turnover above KES 5 million, and all VAT-registered taxpayers regardless of turnover, must transmit every invoice to KRA in real time and present the Control Unit Invoice Number (CU Invoice Number) and QR on the buyer-facing invoice. The KRA-issued QR resolves to the KRA verification record.',
      },
      {
        heading: 'How Invoicemonk meets eTIMS',
        body: 'Invoicemonk uses the eTIMS online model (VSCU/OSCU APIs) to submit every invoice to KRA, capture the CU Invoice Number and KRA signature, and bind the verification QR to the invoice PDF. The Kenyan VAT rate (16%) and exemption codes are applied per KRA schedules.',
      },
      {
        heading: 'Who this applies to',
        body: 'Kenyan taxpayers above KES 5 million annual turnover; all VAT-registered taxpayers; and any taxpayer claiming an expense as a deduction (the buyer-side requirement that every supplier issue an eTIMS invoice).',
      },
    ],
    citations: [
      { label: 'KRA eTIMS portal', url: 'https://etims.kra.go.ke/' },
      { label: 'KRA eTIMS taxpayer guide', url: 'https://www.kra.go.ke/' },
      { label: 'KRA Tax Invoice Management System (TIMS) regulations', url: 'https://www.kra.go.ke/news-center/public-notices' },
      { label: 'Kenya VAT Act 2013 (as amended)', url: 'http://kenyalaw.org/kl/index.php?id=12036' },
      { label: 'KRA VAT (Electronic Tax Invoice) Regulations 2020', url: 'https://kra.go.ke/' },
      { label: 'eTIMS OSCU/VSCU API documentation', url: 'https://etims.kra.go.ke/' },
    ],
    faqs: [
      { question: 'Do I still need a hardware ETR?', answer: 'No. eTIMS is the online replacement for hardware ETRs. Invoicemonk uses the VSCU/OSCU APIs, so no on-premise device is required.' },
      { question: 'How does the buyer verify the invoice?', answer: 'The KRA QR on the invoice resolves to the KRA verification record confirming the CU Invoice Number, seller, buyer, and totals.' },
      { question: 'Are exempt and zero-rated supplies handled?', answer: 'Yes. The correct VAT classification (16% standard, 8% petroleum, 0% zero-rated, exempt) is applied per KRA Schedule 1 and 2.' },
      { question: 'What about credit notes?', answer: 'Credit notes are linked to the original CU Invoice Number and transmitted to KRA on issue.' },
      { question: 'My turnover is below KES 5 million — should I still use eTIMS?', answer: 'If any of your buyers want to deduct the expense, they need an eTIMS invoice from you. Invoicemonk supports voluntary onboarding for sub-threshold sellers.' },
    ],
  },
  {
    slug: 'gra-e-vat-ghana',
    jurisdiction: 'Ghana',
    region: 'africa',
    authority: 'GRA (Ghana Revenue Authority)',
    mandate: 'Certified Invoicing System (E-VAT)',
    artefact: 'Invoice Reference Number (IRN) issued by GRA, signed XML, QR with GRA verification URL',
    transport: 'Direct API submission to the GRA E-VAT platform via the certified invoicing system integration',
    appliesTo: 'Phased: large taxpayers since October 2022; medium and small in subsequent waves announced by GRA.',
    liveSince: '2024-04-01',
    localArtefactName: 'GRA IRN',
    oneLine: 'GRA-issued IRN and verification QR for every VAT invoice through the Certified Invoicing System.',
    title: 'GRA E-VAT e-Invoicing (Ghana) | Invoicemonk',
    metaDescription: 'Issue Ghana GRA E-VAT compliant invoices via the Certified Invoicing System: GRA IRN, signed XML, and verification QR.',
    directAnswer: 'Invoicemonk submits Ghanaian invoices to the GRA Certified Invoicing System (E-VAT), receives the GRA IRN and verification QR, and binds them to the invoice. VAT (15%), NHIL, GETFund, and COVID-19 Health Recovery Levy lines are split per GRA rules.',
    sections: [
      {
        heading: 'What GRA E-VAT requires',
        body: 'The Ghana Revenue Authority Certified Invoicing System (E-VAT) requires in-scope VAT taxpayers to transmit invoices to GRA in real time, receive an IRN, and present the IRN + QR to the buyer. Rollout has progressed from large taxpayers (October 2022) through subsequent waves announced by GRA.',
      },
      {
        heading: 'How Invoicemonk meets GRA E-VAT',
        body: 'Invoicemonk integrates with the GRA E-VAT API, splits the Ghanaian VAT cascade (VAT 15%, NHIL 2.5%, GETFund 2.5%, COVID Levy 1%) per GRA Schedule, transmits the signed XML, captures the GRA IRN, and binds the verification QR to the invoice PDF.',
      },
      {
        heading: 'Who this applies to',
        body: 'Ghanaian VAT-registered taxpayers in the active GRA rollout wave. Foreign suppliers fall under reverse-charge rules administered by the Ghanaian buyer.',
      },
    ],
    citations: [
      { label: 'GRA E-VAT programme', url: 'https://gra.gov.gh/' },
      { label: 'GRA Certified Invoicing System (CIS) guidance', url: 'https://gra.gov.gh/domestic-tax/tax-types/value-added-tax-vat/' },
      { label: 'Ghana Value Added Tax Act, 2013 (Act 870)', url: 'https://gra.gov.gh/laws-and-regulations/' },
      { label: 'Communications Service Tax & NHIL Acts (cascade rates)', url: 'https://gra.gov.gh/laws-and-regulations/' },
      { label: 'GRA E-VAT taxpayer onboarding waves', url: 'https://gra.gov.gh/news/' },
      { label: 'Ghana Revenue Authority Act 2009 (Act 791)', url: 'https://gra.gov.gh/laws-and-regulations/' },
    ],
    faqs: [
      { question: 'How are NHIL, GETFund, and COVID Levy split from VAT?', answer: 'Each is a separate line on the invoice computed off the same taxable base, not stacked on top of VAT. Invoicemonk follows the GRA Schedule split.' },
      { question: 'Does the buyer get a verifiable QR?', answer: 'Yes — the GRA QR resolves to the GRA verification endpoint confirming the IRN, seller, buyer, and totals.' },
      { question: 'My wave has not been called yet — can I onboard early?', answer: 'Yes. Voluntary onboarding is supported and reduces the future migration burden.' },
      { question: 'Are exempt supplies handled?', answer: 'Yes. Exempt and zero-rated supplies are flagged with the correct GRA code and excluded from the VAT cascade.' },
      { question: 'Can I export the signed XML?', answer: 'Yes — the GRA-signed XML and PDF are downloadable from each invoice.' },
    ],
  },
  {
    slug: 'bir-cas-philippines',
    jurisdiction: 'Philippines',
    region: 'asia-pacific',
    authority: 'BIR (Bureau of Internal Revenue)',
    mandate: 'EIS — Electronic Invoicing System (CAS / e-Invoice / e-Receipt)',
    artefact: 'JSON e-invoice transmitted to BIR EIS, BIR-issued reference number, QR',
    transport: 'Direct API submission to the BIR Electronic Invoicing System',
    appliesTo: 'Phased: top 100 large taxpayers since 1 July 2022; expansion to all VAT-registered taxpayers ongoing per BIR Revenue Regulations.',
    liveSince: '2023-01-01',
    localArtefactName: 'BIR EIS reference',
    oneLine: 'JSON e-invoices transmitted to the BIR EIS with reference number and QR.',
    title: 'BIR e-Invoicing (Philippines) | Invoicemonk',
    metaDescription: 'Issue Philippines BIR EIS e-invoices: JSON transmission to the BIR Electronic Invoicing System with BIR reference number and QR.',
    directAnswer: 'Invoicemonk transmits Philippine invoices to the BIR Electronic Invoicing System (EIS) in JSON, receives the BIR reference number, and binds the QR to the invoice. VAT (12%) and Percentage Tax handled per NIRC.',
    sections: [
      {
        heading: 'What BIR EIS requires',
        body: 'BIR Revenue Regulations require in-scope taxpayers (top 100 large taxpayers from 1 July 2022, with phased expansion) to transmit every invoice and receipt to the BIR EIS in the prescribed JSON, receive a BIR reference number, and present the QR on the buyer-facing invoice. The system replaces the legacy Computerised Accounting System (CAS) certification for in-scope sellers.',
      },
      {
        heading: 'How Invoicemonk meets BIR EIS',
        body: 'Invoicemonk builds the BIR EIS JSON, signs with the registered taxpayer credential, transmits to the EIS, captures the BIR reference number, and binds the QR to the invoice. VAT (12%) is split correctly; Percentage Tax (3% / 1%) is applied to non-VAT taxpayers; withholding tax codes are applied at the line level.',
      },
      {
        heading: 'Who this applies to',
        body: 'Philippine taxpayers in the active BIR EIS rollout wave; voluntary onboarding is supported for taxpayers preparing for their wave date.',
      },
    ],
    citations: [
      { label: 'BIR Electronic Invoicing System portal', url: 'https://eis.bir.gov.ph/' },
      { label: 'BIR Revenue Regulations on e-Invoicing', url: 'https://www.bir.gov.ph/' },
      { label: 'Revenue Regulation 8-2022 (EIS)', url: 'https://www.bir.gov.ph/index.php/issuances/revenue-issuances/revenue-regulations.html' },
      { label: 'National Internal Revenue Code (NIRC) of 1997, as amended', url: 'https://www.bir.gov.ph/index.php/tax-code.html' },
      { label: 'TRAIN Act (RA 10963) — Section 237-A', url: 'https://www.bir.gov.ph/', section: 'Mandates e-invoicing for in-scope taxpayers' },
      { label: 'Ease of Paying Taxes Act (RA 11976)', url: 'https://www.bir.gov.ph/' },
    ],
    faqs: [
      { question: 'Does Invoicemonk replace BIR CAS certification?', answer: 'For in-scope EIS taxpayers, EIS submission is the active control. Invoicemonk transmits in the BIR-mandated JSON.' },
      { question: 'How are VAT and Percentage Tax split?', answer: 'VAT (12%) for VAT-registered sellers; Percentage Tax (3% / 1% per NIRC) for non-VAT sellers. Invoicemonk picks the right path per your BIR registration.' },
      { question: 'Are withholding tax codes applied?', answer: 'Yes. Expanded Withholding Tax (EWT) codes per BIR Form 1601-E are applied at the line level when the buyer is a withholding agent.' },
      { question: 'Can I issue an Official Receipt through Invoicemonk?', answer: 'Yes. Service-side ORs and Sales Invoices are both supported per BIR document-type rules.' },
      { question: 'What about the 0% VAT for exports?', answer: 'Exports and BOI/PEZA-registered enterprises\' qualifying sales are zero-rated with the correct BIR code on the invoice.' },
    ],
  },
  {
    slug: 'sars-south-africa',
    jurisdiction: 'South Africa',
    region: 'africa',
    authority: 'SARS (South African Revenue Service)',
    mandate: 'SARS Tax Invoice Requirements (VAT Act s.20) + e-Filing VAT201',
    artefact: 'Tax invoice with SARS-required fields, digitally signed PDF, VAT201 return submitted via SARS e-Filing',
    transport: 'SARS-compliant invoice issued to buyer; VAT201 submitted via SARS e-Filing API',
    appliesTo: 'All South African VAT vendors (registered above ZAR 1 million turnover, voluntary above ZAR 50 000).',
    liveSince: '2023-06-01',
    localArtefactName: 'Signed tax invoice',
    oneLine: 'SARS-compliant tax invoices and VAT201 returns filed via SARS e-Filing.',
    title: 'SARS e-Invoicing (South Africa) | Invoicemonk',
    metaDescription: 'Issue SARS-compliant tax invoices in South Africa and file VAT201 returns through SARS e-Filing. All s.20 VAT Act fields handled.',
    directAnswer: 'Invoicemonk issues South African tax invoices with every field SARS requires under s.20 of the VAT Act, signs them digitally, and files the VAT201 return via SARS e-Filing. Live since June 2023.',
    sections: [
      {
        heading: 'What SARS requires',
        body: 'Section 20 of the South African VAT Act prescribes the fields a tax invoice must carry: the words "Tax Invoice", the VAT vendor\'s name, address, and VAT registration number, the buyer\'s details for invoices above ZAR 5 000, a sequential invoice number, the date, a description of goods or services, the VAT-exclusive amount, the VAT rate (15%) and amount, and the total. The VAT201 return is filed monthly or bi-monthly via SARS e-Filing.',
      },
      {
        heading: 'How Invoicemonk meets SARS',
        body: 'Invoicemonk applies the s.20 field set automatically, including the buyer-detail rule for invoices above ZAR 5 000, digitally signs the PDF, and exposes the VAT201 figures from the invoice ledger for SARS e-Filing submission. Zero-rated supplies (exports, qualifying foodstuffs) and exempt supplies (financial services, residential rental) are coded correctly.',
      },
      {
        heading: 'Who this applies to',
        body: 'All South African VAT vendors. Mandatory registration applies above ZAR 1 million turnover; voluntary registration is available above ZAR 50 000.',
      },
    ],
    citations: [
      { label: 'South African VAT Act, Section 20', url: 'https://www.sars.gov.za/' },
      { label: 'SARS VAT404 Guide for Vendors', url: 'https://www.sars.gov.za/' },
      { label: 'SARS e-Filing portal', url: 'https://www.sarsefiling.co.za/' },
      { label: 'SARS VAT201 declaration guide', url: 'https://www.sars.gov.za/types-of-tax/value-added-tax/' },
      { label: 'SARS Binding General Ruling 36 (electronic invoices)', url: 'https://www.sars.gov.za/legal-counsel/legal-advisory/binding-rulings/' },
      { label: 'Tax Administration Act, 2011 (record-keeping)', url: 'https://www.sars.gov.za/legal-counsel/primary-legislation/' },
    ],
    faqs: [
      { question: 'When is full buyer detail required on the invoice?', answer: 'Above ZAR 5 000 the buyer\'s name, address, and VAT number (if registered) are mandatory under s.20(4). Invoicemonk enforces the rule automatically.' },
      { question: 'Are zero-rated exports handled?', answer: 'Yes. Exports with valid documentary proof are zero-rated and recorded in the VAT201 zero-rated block.' },
      { question: 'Does Invoicemonk submit VAT201 directly to SARS e-Filing?', answer: 'Yes — the VAT201 figures are exposed for SARS e-Filing submission with full digital linkage to source invoices.' },
      { question: 'What about the apportionment of input VAT?', answer: 'Apportionment ratios for mixed-supply vendors are applied at the expense level and reflected in the VAT201 input claim.' },
      { question: 'Are credit notes linked to original invoices?', answer: 'Yes. Credit notes carry the original tax invoice number and reverse the VAT effect cleanly.' },
    ],
  },
  {
    slug: 'zimra-zimbabwe',
    jurisdiction: 'Zimbabwe',
    region: 'africa',
    authority: 'ZIMRA (Zimbabwe Revenue Authority)',
    mandate: 'Fiscalisation Data Management System (FDMS)',
    artefact: 'Fiscal Device Identifier signature, fiscal invoice number, QR with ZIMRA verification URL',
    transport: 'Real-time submission to the ZIMRA FDMS platform (virtual fiscal device model)',
    appliesTo: 'All VAT-registered operators in Zimbabwe (Statutory Instrument 153 of 2023).',
    liveSince: '2024-01-01',
    localArtefactName: 'FDMS fiscal signature',
    oneLine: 'Real-time submission to the ZIMRA FDMS with fiscal signature and verification QR.',
    title: 'ZIMRA FDMS e-Invoicing (Zimbabwe) | Invoicemonk',
    metaDescription: 'Issue ZIMRA Fiscalisation Data Management System (FDMS) compliant invoices in Zimbabwe with fiscal signature, fiscal invoice number, and verification QR. Live since January 2024.',
    directAnswer: 'Invoicemonk submits Zimbabwean invoices to the ZIMRA Fiscalisation Data Management System in real time, receives the fiscal signature and fiscal invoice number, and binds the verification QR to the invoice. Live since January 2024.',
    sections: [
      {
        heading: 'What ZIMRA FDMS requires',
        body: 'Statutory Instrument 153 of 2023 mandates that every VAT-registered operator in Zimbabwe transmit fiscal data to the ZIMRA FDMS in real time using a fiscal device (hardware or virtual). The fiscal invoice number, fiscal signature, and ZIMRA-verifiable QR must appear on the buyer-facing invoice.',
      },
      {
        heading: 'How Invoicemonk meets ZIMRA FDMS',
        body: 'Invoicemonk runs as a virtual fiscal device under the ZIMRA FDMS specification, signs every invoice with the registered fiscal credential, transmits to FDMS in real time, captures the fiscal invoice number, and binds the ZIMRA verification QR to the invoice PDF. Both USD and ZWG invoices are supported with the correct ZIMRA dual-currency handling.',
      },
      {
        heading: 'Who this applies to',
        body: 'All VAT-registered operators in Zimbabwe.',
      },
    ],
    citations: [
      { label: 'ZIMRA Fiscalisation Data Management System', url: 'https://www.zimra.co.zw/' },
      { label: 'Statutory Instrument 153 of 2023', url: 'https://www.zimra.co.zw/' },
      { label: 'ZIMRA FDMS technical specifications', url: 'https://fdms.zimra.co.zw/' },
      { label: 'Zimbabwe Value Added Tax Act [Chapter 23:12]', url: 'https://www.zimra.co.zw/legislation/acts' },
      { label: 'Statutory Instrument 148A of 2024 (dual currency)', url: 'https://www.zimra.co.zw/legislation/statutory-instruments' },
      { label: 'ZIMRA Public Notice on FDMS onboarding', url: 'https://www.zimra.co.zw/news' },
    ],
    faqs: [
      { question: 'Do I need a hardware fiscal device?', answer: 'No. Invoicemonk operates as a virtual fiscal device under the FDMS specification — no on-premise hardware required.' },
      { question: 'Are dual-currency invoices supported?', answer: 'Yes. USD and ZWG invoices are issued with the correct ZIMRA dual-currency treatment and reported correctly to FDMS.' },
      { question: 'How does the buyer verify the invoice?', answer: 'The QR resolves to the ZIMRA FDMS verification endpoint confirming the fiscal invoice number and totals.' },
      { question: 'What about exempt and zero-rated supplies?', answer: 'Both are flagged with the correct ZIMRA code and excluded from VAT charged.' },
      { question: 'Is real-time transmission required?', answer: 'Yes — FDMS is real-time. Invoicemonk transmits on invoice issue.' },
    ],
  },
  {
    slug: 'src-seychelles',
    jurisdiction: 'Seychelles',
    region: 'africa',
    authority: 'SRC (Seychelles Revenue Commission)',
    mandate: 'VAT Act tax invoice requirements + SRC e-Filing',
    artefact: 'SRC-compliant tax invoice with sequential numbering, digital signature, VAT return filed via SRC e-Filing',
    transport: 'SRC-compliant invoice to buyer; VAT return submitted via SRC e-Filing',
    appliesTo: 'VAT-registered businesses in Seychelles (above SCR 2 million annual turnover threshold).',
    liveSince: '2024-05-01',
    localArtefactName: 'Signed VAT invoice',
    oneLine: 'SRC-compliant VAT invoices and returns filed via SRC e-Filing.',
    title: 'SRC e-Invoicing (Seychelles) | Invoicemonk',
    metaDescription: 'Issue SRC-compliant VAT invoices in Seychelles and file VAT returns through SRC e-Filing. All required fields handled.',
    directAnswer: 'Invoicemonk issues Seychelles VAT invoices with every field the SRC requires under the VAT Act, signs them digitally, and exposes the VAT return for SRC e-Filing submission. Live since May 2024.',
    sections: [
      {
        heading: 'What SRC requires',
        body: 'The Seychelles VAT Act prescribes the fields a tax invoice must carry: seller and buyer details with TIN, sequential invoice number, date, description, VAT-exclusive amount, VAT (15%) amount, and total. VAT returns are filed monthly via SRC e-Filing.',
      },
      {
        heading: 'How Invoicemonk meets SRC',
        body: 'Invoicemonk applies the SRC field set automatically, digitally signs the PDF, sequences invoice numbers without gaps, and exposes the VAT return figures from the invoice ledger for SRC e-Filing submission.',
      },
      {
        heading: 'Who this applies to',
        body: 'Seychelles VAT-registered businesses above SCR 2 million annual turnover.',
      },
    ],
    citations: [
      { label: 'Seychelles Revenue Commission VAT guide', url: 'https://src.gov.sc/' },
      { label: 'Seychelles Value Added Tax Act, 2010', url: 'https://src.gov.sc/resources/legislation/' },
      { label: 'SRC e-Filing portal', url: 'https://efiling.src.gov.sc/' },
      { label: 'SRC tax invoice requirements (VAT)', url: 'https://src.gov.sc/pages/taxservices/valueaddedtax.aspx' },
      { label: 'SRC TIN registry & verification', url: 'https://src.gov.sc/' },
      { label: 'Revenue Administration Act, 2009', url: 'https://src.gov.sc/resources/legislation/' },
    ],
    faqs: [
      { question: 'Is TIN validation enforced?', answer: 'Yes. Seller and buyer TINs are validated against the SRC TIN registry before invoice issue.' },
      { question: 'How is the 15% VAT applied?', answer: 'Standard rate 15% on taxable supplies; zero rate on exports; exempt for prescribed services. The correct code is applied per SRC schedule.' },
      { question: 'Can I file the VAT return from Invoicemonk?', answer: 'The VAT return figures are exposed for SRC e-Filing submission with digital linkage to source invoices.' },
      { question: 'Are credit notes supported?', answer: 'Yes — linked to the original invoice and reflected in the VAT return.' },
      { question: 'What about tourism-sector concessions?', answer: 'Tourism and licensed-sector concessional rates are applied where the buyer qualifies under SRC rules.' },
    ],
  },
  {
    slug: 'sef-brazil',
    jurisdiction: 'Brazil',
    region: 'americas',
    authority: 'SEFAZ (state) / Receita Federal (federal)',
    mandate: 'NF-e (Nota Fiscal Eletrônica) and NFS-e (services)',
    artefact: 'NF-e/NFS-e XML signed with ICP-Brasil A1 certificate, Chave de Acesso (44-digit access key), DANFE PDF',
    transport: 'Direct API submission to the state SEFAZ for NF-e; to the municipal portal for NFS-e',
    appliesTo: 'All Brazilian businesses issuing invoices for goods (NF-e) or services (NFS-e).',
    liveSince: '2024-06-01',
    localArtefactName: 'NF-e Chave de Acesso',
    oneLine: 'ICP-Brasil signed NF-e/NFS-e XML with 44-digit access key and DANFE PDF.',
    title: 'NF-e / NFS-e e-Invoicing (Brazil) | Invoicemonk',
    metaDescription: 'Issue Brazilian NF-e (goods) and NFS-e (services) e-invoices signed with ICP-Brasil A1 certificate. SEFAZ and municipal portal integration. Live since June 2024.',
    directAnswer: 'Invoicemonk issues Brazilian NF-e (goods) and NFS-e (services) signed with your ICP-Brasil A1 certificate, transmits to the state SEFAZ or municipal portal, and returns the Chave de Acesso and DANFE PDF to the buyer. Live since June 2024.',
    sections: [
      {
        heading: 'What NF-e / NFS-e requires',
        body: 'NF-e (Nota Fiscal Eletrônica) covers sale-of-goods invoices and is processed by the state SEFAZ. NFS-e covers services and is processed by the buyer\'s municipal portal (now converging on the national NFS-e standard). Both require an XML signed with an ICP-Brasil A1 certificate, a Chave de Acesso (44-digit access key), and a printable DANFE/DANFSE.',
      },
      {
        heading: 'How Invoicemonk meets NF-e / NFS-e',
        body: 'Invoicemonk builds the SEFAZ XML schema, signs with your uploaded ICP-Brasil A1 certificate, transmits to the destination SEFAZ (NF-e) or municipal/national portal (NFS-e), captures the Chave de Acesso and authorisation protocol, and renders the DANFE/DANFSE PDF. ICMS, IPI, PIS, COFINS, and ISS are computed per CFOP / CST / município rules.',
      },
      {
        heading: 'Who this applies to',
        body: 'Brazilian businesses issuing invoices for goods (NF-e) or services (NFS-e). MEI taxpayers use the simplified NFS-e flow.',
      },
    ],
    citations: [
      { label: 'Portal Nacional da NF-e', url: 'https://www.nfe.fazenda.gov.br/' },
      { label: 'NFS-e Nacional', url: 'https://www.nfse.gov.br/' },
      { label: 'Manual de Orientação do Contribuinte (NF-e MOC)', url: 'https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=33ol5hhpYvU=' },
      { label: 'ICP-Brasil certificate authority registry', url: 'https://www.iti.gov.br/' },
      { label: 'Ajuste SINIEF (NF-e legal basis)', url: 'https://www.confaz.fazenda.gov.br/' },
      { label: 'Receita Federal — NFS-e nacional layout', url: 'https://www.gov.br/nfse/' },
    ],
    faqs: [
      { question: 'Do I need to upload my ICP-Brasil A1 certificate?', answer: 'Yes. The A1 certificate is uploaded once and stored encrypted; Invoicemonk uses it to sign every NF-e/NFS-e on issue.' },
      { question: 'Are ICMS, IPI, PIS, COFINS, and ISS computed?', answer: 'Yes. Each is computed per the CFOP, CST/CSOSN, and município (for ISS) rules; ICMS-ST and difal are handled where applicable.' },
      { question: 'Does Invoicemonk support cancellation within the SEFAZ window?', answer: 'Yes. NF-e cancellation within the SEFAZ-permitted window (typically 24 hours) is a one-click action with the required justificativa.' },
      { question: 'What about Carta de Correção?', answer: 'Yes — the CC-e (Carta de Correção Eletrônica) is supported for permitted corrections within the SEFAZ window.' },
      { question: 'Is the national NFS-e standard supported?', answer: 'Yes. Invoicemonk routes to the national NFS-e for municipalities that have migrated and to the legacy municipal portal otherwise.' },
    ],
  },
  {
    slug: 'b2g-us',
    jurisdiction: 'United States',
    region: 'americas',
    authority: 'US Federal Government (Treasury Bureau of the Fiscal Service)',
    mandate: 'Invoice Processing Platform (IPP) — Federal B2G e-Invoicing',
    artefact: 'IPP-compliant invoice (UBL or CSV-converted) submitted to the IPP portal',
    transport: 'Direct submission to the Treasury Invoice Processing Platform (IPP)',
    appliesTo: 'Suppliers invoicing US federal agencies that use IPP.',
    liveSince: '2024-09-01',
    localArtefactName: 'IPP invoice ID',
    oneLine: 'IPP-compliant invoices submitted to the US Treasury for federal B2G payments.',
    title: 'US Federal B2G e-Invoicing (IPP) | Invoicemonk',
    metaDescription: 'Submit US federal B2G invoices to the Treasury Invoice Processing Platform (IPP). Live since September 2024.',
    directAnswer: 'Invoicemonk submits invoices for US federal agencies to the Treasury Invoice Processing Platform (IPP), the mandated channel for federal B2G payments. Live since September 2024.',
    sections: [
      {
        heading: 'What US federal B2G requires',
        body: 'The Treasury Bureau of the Fiscal Service Invoice Processing Platform (IPP) is the federal-wide e-invoicing system. Suppliers to participating federal agencies must submit invoices through IPP — agencies that mandate IPP will not pay invoices arriving by email or paper.',
      },
      {
        heading: 'How Invoicemonk meets IPP',
        body: 'Invoicemonk formats the invoice to IPP\'s required fields, submits to the IPP portal, and tracks status (received, approved, paid). Multi-agency suppliers can map purchase order numbers per agency.',
      },
      {
        heading: 'Who this applies to',
        body: 'US suppliers invoicing federal agencies that mandate IPP. Commercial B2B in the US has no federal e-invoicing mandate.',
      },
    ],
    citations: [
      { label: 'Treasury Invoice Processing Platform (IPP)', url: 'https://www.ipp.gov/' },
      { label: 'Bureau of the Fiscal Service IPP overview', url: 'https://fiscal.treasury.gov/ipp/' },
      { label: 'OMB Memorandum M-15-19 (federal e-invoicing)', url: 'https://www.whitehouse.gov/wp-content/uploads/legacy_drupal_files/omb/memoranda/2015/m-15-19.pdf' },
      { label: 'GSA System for Award Management (SAM.gov)', url: 'https://sam.gov/' },
      { label: 'Federal Acquisition Regulation (FAR) Part 32 — Contract Financing', url: 'https://www.acquisition.gov/far/part-32' },
      { label: 'IRS Publication 583 (record-keeping for businesses)', url: 'https://www.irs.gov/forms-pubs/about-publication-583' },
    ],
    faqs: [
      { question: 'Is there a US federal mandate for B2B commercial invoicing?', answer: 'No. IPP is the federal B2G channel; commercial B2B invoicing in the US has no federal e-invoice mandate. Invoicemonk still issues IRS-ready commercial invoices.' },
      { question: 'Do all federal agencies use IPP?', answer: 'Not all. Invoicemonk routes to IPP for agencies that mandate it and to the agency-specified channel otherwise.' },
      { question: 'How is purchase order mapping handled?', answer: 'Each agency\'s PO format is captured and bound to the invoice for IPP submission.' },
      { question: 'Are state-level B2G mandates supported?', answer: 'State-level coverage is added as states publish API specs; current US support is federal IPP.' },
      { question: 'How are payment statuses surfaced?', answer: 'IPP status updates (received, approved, paid) flow back into the invoice timeline.' },
    ],
  },
  {
    slug: 'cra-peppol-canada',
    jurisdiction: 'Canada',
    region: 'americas',
    authority: 'CRA (Canada Revenue Agency) + Peppol Authority Canada',
    mandate: 'CRA GST/HST tax invoice + Peppol BIS Billing Canada',
    artefact: 'CRA-compliant GST/HST invoice; Peppol BIS Canada UBL routed via certified Access Point',
    transport: 'CRA-compliant invoice to buyer; Peppol UBL routed through certified Peppol Access Point (Canada PA model)',
    appliesTo: 'All Canadian GST/HST registrants; Peppol routing for buyers on the Canadian Peppol network.',
    liveSince: '2024-10-01',
    localArtefactName: 'GST/HST signed invoice + Peppol UBL',
    oneLine: 'CRA-compliant GST/HST invoices plus Peppol BIS Canada routing through a certified Access Point.',
    title: 'CRA + Peppol e-Invoicing (Canada) | Invoicemonk',
    metaDescription: 'Issue Canadian CRA-compliant GST/HST invoices and route Peppol BIS Canada e-invoices through a certified Access Point. Live since October 2024.',
    directAnswer: 'Invoicemonk issues CRA-compliant GST/HST invoices with every required field and routes Peppol BIS Canada invoices through a certified Access Point under the Canadian Peppol Authority model. Live since October 2024.',
    sections: [
      {
        heading: 'What CRA + Peppol Canada require',
        body: 'CRA requires a tax invoice to carry the supplier name, GST/HST registration number, date, total amount, an indication of whether each amount includes or excludes GST/HST, and (for invoices above CAD 150) the buyer\'s name and a description of the supply, plus the GST/HST rate and amount. Canada is also a member of the Peppol network under a national Peppol Authority, enabling structured invoice exchange with Peppol-onboarded buyers.',
      },
      {
        heading: 'How Invoicemonk meets CRA + Peppol Canada',
        body: 'Invoicemonk applies the CRA field rules (including the CAD 150 buyer-detail threshold), splits GST 5% / HST 13% or 15% per province, applies QST 9.975% in Quebec via the Revenu Québec interaction, and routes structured invoices through a certified Peppol Access Point to Peppol-onboarded buyers. GST/HST return figures are exposed for CRA filing.',
      },
      {
        heading: 'Who this applies to',
        body: 'All Canadian GST/HST registrants. Peppol routing kicks in automatically for buyers with a Canadian Peppol participant ID.',
      },
    ],
    citations: [
      { label: 'CRA GST/HST invoice requirements', url: 'https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/invoicing.html' },
      { label: 'Peppol Authority Canada', url: 'https://peppol.org/' },
      { label: 'Canada Excise Tax Act (GST/HST)', url: 'https://laws-lois.justice.gc.ca/eng/acts/E-15/' },
      { label: 'Revenu Québec — QST invoicing rules', url: 'https://www.revenuquebec.ca/en/businesses/consumption-taxes/gsthst-and-qst/' },
      { label: 'CRA Place-of-supply rules (HST)', url: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-119.html' },
      { label: 'Canada Digital Adoption Program (e-invoicing roadmap)', url: 'https://ised-isde.canada.ca/site/canada-digital-adoption-program/en' },
    ],
    faqs: [
      { question: 'How is HST vs GST + PST handled by province?', answer: 'Invoicemonk applies the correct rate per province: HST in ON / NB / NS / NL / PE, GST + PST in BC / SK / MB, GST + QST in QC, GST only in AB and the territories.' },
      { question: 'Is the CAD 150 buyer-detail threshold enforced?', answer: 'Yes. Above CAD 150 the buyer name and supply description are mandatory and Invoicemonk requires them before issue.' },
      { question: 'Do I need a Canadian Peppol participant ID?', answer: 'Invoicemonk\'s Access Point partner registers and manages your Canadian Peppol participant ID; no separate setup.' },
      { question: 'Are GST/HST returns filed from Invoicemonk?', answer: 'Return figures are exposed for CRA My Business Account submission with digital linkage to source invoices.' },
      { question: 'Are zero-rated and exempt supplies coded correctly?', answer: 'Yes. Zero-rated (e.g. basic groceries, exports) and exempt (e.g. financial services, residential rent) supplies are coded per CRA schedules.' },
    ],
  },
];

/** Mandate slugs grouped by region for nav + matrix grouping. */
export const mandatesByRegion: Record<RegionKey, Mandate[]> = mandates.reduce(
  (acc, m) => {
    acc[m.region] = acc[m.region] || [];
    acc[m.region].push(m);
    return acc;
  },
  {} as Record<RegionKey, Mandate[]>
);

export const regionLabel: Record<RegionKey, string> = {
  'middle-east': 'Middle East',
  'asia-pacific': 'Asia-Pacific',
  africa: 'Africa',
  europe: 'Europe',
  americas: 'Americas',
};

/** All mandate slugs (for sitemap + route generation). */
export const mandateSlugs: string[] = mandates.map((m) => m.slug);

/** Count used in titles, llms.txt, schema. */
export const MANDATE_COUNT = mandates.length;

export function getMandate(slug: string): Mandate | undefined {
  return mandates.find((m) => m.slug === slug);
}
