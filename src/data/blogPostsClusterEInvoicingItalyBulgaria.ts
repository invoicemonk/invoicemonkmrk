import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Blog Posts Cluster — E-Invoicing (Italy SdI + Bulgaria NRA).
 *
 * Supportive layer (Koray) under the central pillar /e-invoicing and the
 * sub-central source pages /e-invoicing/sdi-italy and /e-invoicing/nra-bulgaria.
 *
 * Each article follows the Koray contract used in batches 1–6:
 *  - Hero direct-answer paragraph (40–60 words) for AI Overviews.
 *  - At-a-glance fact box of entity-attribute-value triples.
 *  - Table of contents nav.
 *  - Macro → micro context (fan-out H3 questions).
 *  - Differential / comparison section.
 *  - Implementation or buying-criteria walkthrough.
 *  - Authority Sources block (primary regulator domains).
 *  - Key takeaways + Related reading.
 *  - Expanded FAQ (5–7 questions).
 */
export const eInvoicingClusterPostsItalyBulgaria: BlogPost[] = [
  // ============================================================
  // 1. SdI Italy — Explainer
  // ============================================================
  {
    slug: 'sdi-italy-explained',
    title: 'SdI (Sistema di Interscambio) Explained: How Italian FatturaPA Clearance Works (2026)',
    excerpt: 'The Agenzia delle Entrate clearance hub for every Italian B2B, B2C, and B2G invoice — what SdI validates, how the Codice Destinatario routes the FatturaPA, and what changes under ViDA.',
    content: `<p><strong>The Sistema di Interscambio (SdI) is the <a href="/__LANG__/e-invoicing/sdi-italy">Agenzia delle Entrate clearance hub</a> that validates and routes every Italian e-invoice. Sellers submit a FatturaPA XML; SdI runs schema and VAT-number checks, then forwards the invoice to the buyer using the 7-character Codice Destinatario or the buyer\'s PEC, returning a ricevuta di consegna on success or a ricevuta di scarto on rejection.</strong></p>
      <div class="fact-box">
        <p><strong>At a glance</strong></p>
        <ul>
          <li><strong>Authority:</strong> Agenzia delle Entrate (AdE)</li>
          <li><strong>Mandate:</strong> FatturaPA via SdI — clearance model</li>
          <li><strong>Artefact:</strong> FatturaPA XML v1.2.x + ricevuta di consegna</li>
          <li><strong>Transport:</strong> SDICoop web service, PEC, SDIFTP, accredited intermediary</li>
          <li><strong>Applies to:</strong> All Italian VAT-registered businesses, incl. forfettari since 1 Jan 2024</li>
          <li><strong>B2B live since:</strong> 1 January 2019 (DL 119/2018)</li>
        </ul>
      </div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#what">What SdI is and is not</a></li>
        <li><a href="#flow">The five-step SdI flow</a></li>
        <li><a href="#codice">Codice Destinatario routing</a></li>
        <li><a href="#td">TipoDocumento (TD) codes and cross-border</a></li>
        <li><a href="#errors">Common scarto codes</a></li>
        <li><a href="#vida">What ViDA changes from 2030</a></li>
      </ul></nav>
      <h2 id="what">What SdI is and is not</h2><p>SdI is a clearance hub, not a national invoice archive in the GST-IRP sense. It validates the FatturaPA against the AdE schema and schematron, registers the unique Identificativo SdI, and delivers the invoice. The legal original is the cleared XML itself, not a PDF rendering — the PDF (or HTML preview generated from the XML) is a courtesy view. SdI sits in the same architectural category as Türkiye\'s e-Fatura and ZATCA Phase 2: a pre-clearance gate without which the invoice has no legal existence between Italian-resident parties.</p>
      <h2 id="flow">The five-step SdI flow</h2><ol>
        <li>Seller\'s system builds a <a href="/__LANG__/glossary/fatturapa">FatturaPA</a> XML to schema v1.2.x with the correct TipoDocumento code.</li>
        <li>The seller (or accredited intermediary) submits the XML through SDICoop, PEC, SDIFTP, or web upload.</li>
        <li>SdI runs ~70 schematron checks: schema validity, VAT-number format (and existence via VIES for cross-border), date logic, mandatory blocks.</li>
        <li>On success, SdI returns a <em>ricevuta di consegna</em> with the Identificativo SdI; on failure, a <em>ricevuta di scarto</em> with one of the documented error codes.</li>
        <li>SdI routes the cleared invoice to the buyer via the Codice Destinatario or PEC fallback. The buyer\'s system returns a ricevuta di mancata consegna if undeliverable.</li>
      </ol>
      <h2 id="codice">Codice Destinatario routing</h2><p>The 7-character alphanumeric <a href="/__LANG__/glossary/codice-destinatario">Codice Destinatario</a> tells SdI which buyer channel to use. Italian VAT-registered buyers with an accredited intermediary register a code (e.g. <code>KRRH6B9</code>). Buyers without one use <code>0000000</code> plus a registered PEC; private consumers without a PEC use <code>0000000</code> with the invoice deposited in their AdE personal area. Foreign buyers use <code>XXXXXXX</code>. An invalid code returns scarto 00311.</p>
      <h2 id="td">TipoDocumento (TD) codes</h2><p>FatturaPA encodes the invoice nature in a TD code: TD01 standard invoice, TD04 credit note, TD05 debit note, TD17 purchase of services from abroad (replaces Esterometro), TD18 intra-EU acquisition, TD19 art.17 c.2 purchase, TD20 self-billing (autofattura), TD24 deferred invoice, TD28 purchases from San Marino. Picking the wrong TD is the most common semantic error and triggers AdE follow-up audits even when SdI accepts the document.</p>
      <h2 id="errors">Common scarto codes</h2><ul>
        <li><strong>00200</strong> — file does not validate against the FatturaPA XSD.</li>
        <li><strong>00301</strong> — CessionarioCommittente CodiceFiscale or PartitaIVA does not exist in AdE registry.</li>
        <li><strong>00311</strong> — Codice Destinatario invalid or unknown.</li>
        <li><strong>00400</strong> — Natura code missing on a VAT-exempt or reverse-charge line.</li>
        <li><strong>00471</strong> — duplicate invoice (same seller VAT + ProgressivoInvio).</li>
      </ul>
      <h2 id="vida">What ViDA changes from 2030</h2><p>The EU VAT in the Digital Age (ViDA) package introduces an EU-level digital reporting requirement based on <a href="/__LANG__/glossary/peppol-bis-billing-3">EN 16931 / Peppol BIS Billing 3.0</a> for intra-EU transactions. AdE has signalled that SdI infrastructure will be retained — but the FatturaPA schema will need to expose the EN 16931 semantic model for intra-EU invoices alongside the current Italian-specific blocks. Domestic invoices remain on FatturaPA. Italy is one of the few Member States already operating clearance, so the operational change is mostly schema enrichment rather than a new channel.</p>
      <h2>Key takeaways</h2><ul>
        <li>SdI is clearance, not archive: no Identificativo SdI = no legal invoice.</li>
        <li>Codice Destinatario routing has three patterns: registered code, <code>0000000</code> + PEC, <code>XXXXXXX</code> for foreign.</li>
        <li>Cross-border flows use TD17/TD18/TD19 through SdI since 1 July 2022 — the Esterometro is gone.</li>
        <li>ViDA from 2030 enriches the schema; SdI itself stays.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.fatturapa.gov.it/it/norme-e-regole/documentazione-fattura-elettronica/formato-fatturapa/" rel="noopener noreferrer">AdE — FatturaPA specifications</a></li>
        <li><a href="https://www.agenziaentrate.gov.it/" rel="noopener noreferrer">Agenzia delle Entrate — normativa e prassi</a></li>
        <li><a href="https://www.fatturapa.gov.it/" rel="noopener noreferrer">Sistema di Interscambio portal</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/e-invoicing/sdi-italy">How Invoicemonk implements SdI / FatturaPA</a></li>
        <li><a href="/__LANG__/blog/how-to-comply-with-sdi-italy">How to comply with SdI: step-by-step</a></li>
        <li><a href="/__LANG__/blog/how-to-choose-e-invoicing-software-for-italian-vat-compliance">Choosing e-invoicing software for Italian VAT compliance</a></li>
        <li><a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Italy', 'FatturaPA', 'SdI', 'Agenzia delle Entrate', 'e-invoicing', 'clearance', 'EU'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/sdi-italy-explained.jpg',
    featuredImageAlt: 'Diagram of the Italian Sistema di Interscambio clearance flow with Codice Destinatario routing',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/sdi-italy',
    targetCountry: 'IT',
    semanticKeywords: ['SdI', 'Sistema di Interscambio', 'FatturaPA', 'Agenzia delle Entrate', 'Codice Destinatario', 'ricevuta di consegna', 'TipoDocumento', 'Italian e-invoicing', 'EN 16931', 'ViDA'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'Is SdI mandatory for all Italian invoices?', answer: 'Yes — for every B2B, B2C, and B2G invoice between Italian-resident parties since 1 January 2019, extended to flat-rate (regime forfettario) taxpayers from 1 January 2024.' },
      { question: 'What is the difference between ricevuta di consegna and ricevuta di scarto?', answer: 'Consegna confirms SdI accepted and delivered the invoice; scarto rejects it with one of the documented error codes (00200, 00301, 00311, etc.). Until consegna is received, the invoice has no legal existence.' },
      { question: 'Can foreign buyers receive a FatturaPA?', answer: 'Yes — using Codice Destinatario XXXXXXX. The invoice is registered in SdI but not delivered; the seller sends a courtesy PDF/PEC to the foreign buyer.' },
      { question: 'Does FatturaPA need a digital signature?', answer: 'Mandatory CAdES-BES for B2G. For B2B/B2C through SDICoop signature is no longer mandated by SdI, but most accountants still sign for evidential value.' },
      { question: 'What replaces the Esterometro?', answer: 'TD17, TD18, and TD19 invoices submitted through SdI itself since 1 July 2022 — the standalone Esterometro report is abolished.' },
    ],
    relatedTools: [
      { label: 'SdI / FatturaPA mandate page', url: '/e-invoicing/sdi-italy', description: 'How Invoicemonk implements SdI' },
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: '16 mandates, one platform' },
      { label: 'Peppol EU explained', url: '/blog/peppol-eu-explained', description: 'The EU cross-border companion' },
    ],
  },

  // ============================================================
  // 2. SdI Italy — HowTo (compliance)
  // ============================================================
  {
    slug: 'how-to-comply-with-sdi-italy',
    title: 'How to Comply with SdI Italy: Onboarding, FatturaPA, and Your First Cleared Invoice',
    excerpt: 'Italian VAT-registered playbook: register an intermediary, build the FatturaPA XML, sign where required, submit to SdI, and reconcile the ricevuta di consegna.',
    content: `<p><strong>To comply with SdI Italy, a VAT-registered business must obtain a partita IVA, register a Codice Destinatario (or use 0000000 plus PEC), build the <a href="/__LANG__/e-invoicing/sdi-italy">FatturaPA XML</a> with the correct TipoDocumento code, optionally sign with CAdES-BES, submit through SDICoop or an accredited intermediary, and reconcile the ricevuta di consegna against the issued invoice. The cleared XML is the legal original.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Channel:</strong> SDICoop web service (XML over SOAP), PEC, SDIFTP, or accredited intermediary</li>
        <li><strong>Schema:</strong> FatturaPA v1.2.x (current as of 2026)</li>
        <li><strong>Signature:</strong> CAdES-BES (.xml.p7m) mandatory for B2G; optional for B2B/B2C via SDICoop</li>
        <li><strong>SLA:</strong> SdI returns ricevuta within 5 days; in practice seconds</li>
        <li><strong>Retention:</strong> 10 years (conservazione sostitutiva to AgID-accredited provider)</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#prereqs">Prerequisites</a></li>
        <li><a href="#onboarding">Onboarding: partita IVA, PEC, Codice Destinatario</a></li>
        <li><a href="#build">Build the FatturaPA XML</a></li>
        <li><a href="#submit">Submit to SdI</a></li>
        <li><a href="#conservazione">Conservazione sostitutiva (10-year archive)</a></li>
        <li><a href="#checklist">Go-live checklist</a></li>
      </ul></nav>
      <h2 id="prereqs">Prerequisites</h2><ul>
        <li>Active Italian partita IVA (11 digits).</li>
        <li>PEC mailbox (posta elettronica certificata) registered with INI-PEC.</li>
        <li>Fiscal code (codice fiscale) of every individual buyer; partita IVA of every business buyer.</li>
        <li>Access to the Fatture e Corrispettivi area of the AdE portal (with SPID, CIE, or CNS).</li>
        <li>Access to an <a href="/__LANG__/glossary/sdi">SdI</a>-capable invoicing system or accredited intermediary.</li>
      </ul>
      <h2 id="onboarding">Onboarding: partita IVA, PEC, Codice Destinatario</h2>
      <h3>Do I need to register a Codice Destinatario myself?</h3><p>Only if you are a buyer who wants invoices routed to your invoicing system instead of your PEC. Sellers do not need one. Most Italian businesses use their intermediary\'s Codice Destinatario, registered once in the AdE portal under "Registrazione dell\'indirizzo telematico". Once registered, the code overrides whatever the seller writes — SdI uses the registered code as the source of truth.</p>
      <h3>Forfettari: do flat-rate taxpayers really have to e-invoice?</h3><p>Yes, since 1 January 2024 (DL 36/2022 art.18), regardless of turnover. The previous €25k carve-out is gone. Most forfettari use accredited cloud platforms because the SDICoop SOAP integration is impractical for a single user.</p>
      <h2 id="build">Build the FatturaPA XML</h2><p>The XML root is <code>&lt;FatturaElettronica&gt;</code> with two top-level blocks:</p><ul>
        <li><strong>FatturaElettronicaHeader</strong> — DatiTrasmissione (ProgressivoInvio, FormatoTrasmissione = FPR12 for B2B/B2C or FPA12 for B2G, CodiceDestinatario, PECDestinatario), CedentePrestatore (seller), CessionarioCommittente (buyer), TerzoIntermediarioOSoggettoEmittente if applicable.</li>
        <li><strong>FatturaElettronicaBody</strong> — DatiGenerali (TipoDocumento, Numero, Data, ImportoTotaleDocumento), DatiBeniServizi (line items with Natura code for VAT-exempt), DatiPagamento.</li>
      </ul>
      <h3>Picking the right TipoDocumento</h3><p>TD01 covers standard sales. TD04 credit note, TD05 debit note, TD20 self-billing (autofattura) for reverse-charge purchases, TD17/TD18/TD19 for cross-border. Invoicemonk picks the TD code from the counterparty\'s country and the VAT treatment, which removes the most common semantic error.</p>
      <h2 id="submit">Submit to SdI</h2><p>Three live channels:</p><ol>
        <li><strong>SDICoop</strong> — SOAP web service, the production channel for high-volume issuers. Accredited intermediary required for the WS endpoint.</li>
        <li><strong>PEC</strong> — email to <code>sdi01@pec.fatturapa.it</code>, attaching the FatturaPA XML (optionally .p7m). Practical for low volumes.</li>
        <li><strong>Fatture e Corrispettivi portal</strong> — manual upload, suitable for forfettari and micro-businesses.</li>
      </ol><p>SdI replies asynchronously with the ricevuta. Persist the Identificativo SdI on the invoice — it is the audit primary key.</p>
      <h2 id="conservazione">Conservazione sostitutiva (10-year archive)</h2><p>FatturaPA records must be preserved in <em>conservazione sostitutiva</em> (substitute electronic preservation) for 10 years per CAD art.43 and DM 17 June 2014. The conservation process applies a qualified timestamp and digital signature to a closed package of invoices, lodged with an AgID-accredited provider (or the AdE\'s own conservation service, free for small businesses).</p>
      <h2 id="checklist">Go-live compliance checklist</h2><ul>
        <li>☐ Partita IVA active and validated in VIES for intra-EU.</li>
        <li>☐ PEC registered with INI-PEC and the AdE portal.</li>
        <li>☐ Codice Destinatario (own or intermediary) registered in Fatture e Corrispettivi.</li>
        <li>☐ FatturaPA generator outputs schema v1.2.x with correct TD code.</li>
        <li>☐ SdI sandbox round-trip tested (consegna + scarto scenarios).</li>
        <li>☐ Identificativo SdI persisted on every invoice record.</li>
        <li>☐ Conservazione sostitutiva contract in place (AdE or accredited provider).</li>
      </ul>
      <h2>Key takeaways</h2><ul>
        <li>SDICoop for volume, PEC for low volume, AdE portal for the smallest taxpayers.</li>
        <li>Pick the TipoDocumento from the transaction, not from a default — TD code errors trigger audit selection.</li>
        <li>Conservazione sostitutiva is a separate compliance surface from SdI clearance; both are mandatory.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.fatturapa.gov.it/it/norme-e-regole/documentazione-fattura-elettronica/" rel="noopener noreferrer">AdE — FatturaPA technical documentation</a></li>
        <li><a href="https://www.agid.gov.it/" rel="noopener noreferrer">AgID — conservazione sostitutiva guidelines</a></li>
        <li><a href="https://ivaservizi.agenziaentrate.gov.it/" rel="noopener noreferrer">Fatture e Corrispettivi portal</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/blog/sdi-italy-explained">SdI / FatturaPA explained</a></li>
        <li><a href="/__LANG__/blog/best-e-invoicing-software-for-small-businesses-in-italy">Best e-invoicing software for small businesses in Italy</a></li>
        <li><a href="/__LANG__/blog/how-to-choose-e-invoicing-software-for-italian-vat-compliance">How to choose for Italian VAT compliance</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Italy', 'SdI', 'FatturaPA', 'compliance', 'how-to', 'VAT'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-sdi-italy.jpg',
    featuredImageAlt: 'Step-by-step illustration of submitting a FatturaPA through SdI',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/sdi-italy',
    targetCountry: 'IT',
    semanticKeywords: ['SdI compliance', 'FatturaPA onboarding', 'Codice Destinatario', 'conservazione sostitutiva', 'forfettari e-invoicing', 'Italian VAT', 'SDICoop', 'PEC FatturaPA'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'How long do I have to send an invoice through SdI?', answer: 'Within 12 days of the operation\'s VAT trigger date (data dell\'operazione) for standard invoices, or by the 15th of the following month for deferred invoices (fattura differita / TD24).' },
      { question: 'Can I correct an invoice already accepted by SdI?', answer: 'Not the original. Issue a credit note (TD04) referencing the Identificativo SdI of the original and then a new invoice — this is the only AdE-permitted correction path.' },
      { question: 'Do forfettari really have to e-invoice from 2024?', answer: 'Yes — DL 36/2022 art.18 removed the €25k carve-out. All forfettari are in scope since 1 January 2024.' },
      { question: 'What\'s the cheapest SdI-capable channel for a freelancer?', answer: 'The AdE\'s own Fatture e Corrispettivi portal is free, plus the free AdE conservazione service. Cloud platforms add automation and PEC routing.' },
      { question: 'How long must I retain FatturaPA records?', answer: '10 years under CAD art.43 and DPR 633/72, in conservazione sostitutiva with qualified timestamp and signature.' },
    ],
    relatedTools: [
      { label: 'SdI / FatturaPA mandate page', url: '/e-invoicing/sdi-italy', description: 'Production implementation' },
      { label: 'Codice Destinatario glossary', url: '/glossary/codice-destinatario', description: '7-character routing identifier' },
    ],
  },

  // ============================================================
  // 3. Best e-invoicing software for SMBs in Italy (Listicle / Review)
  // ============================================================
  {
    slug: 'best-e-invoicing-software-for-small-businesses-in-italy',
    title: 'Best E-Invoicing Software for Small Businesses in Italy (2026): SdI-Ready Platforms Compared',
    excerpt: 'A buyer\'s shortlist of e-invoicing platforms that handle FatturaPA, SdI submission, forfettari rules, and conservazione sostitutiva — ranked by fit for Italian small businesses and freelancers.',
    content: `<p><strong>The best e-invoicing software for small businesses in Italy must do four things natively: build a valid <a href="/__LANG__/glossary/fatturapa">FatturaPA</a> XML, submit to the <a href="/__LANG__/e-invoicing/sdi-italy">Sistema di Interscambio</a> through SDICoop or PEC, route by Codice Destinatario, and lodge invoices in conservazione sostitutiva for 10 years. Invoicemonk, Fatture in Cloud, Aruba Fatturazione Elettronica, and FattureGo each meet that bar; the right pick depends on whether you need multi-jurisdiction coverage, accountant collaboration, or absolute price-floor.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Who this is for:</strong> Italian VAT-registered small businesses and freelancers (incl. forfettari)</li>
        <li><strong>Mandate:</strong> SdI clearance + 10-year conservazione sostitutiva</li>
        <li><strong>Decision criteria:</strong> SdI channel quality, Codice Destinatario UX, conservazione bundling, accountant export, price for low volume</li>
        <li><strong>Last reviewed:</strong> June 2026</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#criteria">The 7 criteria that matter</a></li>
        <li><a href="#shortlist">The shortlist (5 platforms)</a></li>
        <li><a href="#matrix">Comparison matrix</a></li>
        <li><a href="#freelancer">Best for freelancers / forfettari</a></li>
        <li><a href="#multicountry">Best if you invoice outside Italy too</a></li>
        <li><a href="#mistakes">Three mistakes to avoid</a></li>
      </ul></nav>
      <h2 id="criteria">The 7 criteria that matter</h2><ol>
        <li><strong>SdI channel</strong> — SDICoop SOAP, PEC fallback, AdE portal upload. The best platforms transparently fail over between them.</li>
        <li><strong>Codice Destinatario UX</strong> — registry validation, intermediary code auto-fill, foreign buyer handling (<code>XXXXXXX</code>).</li>
        <li><strong>TipoDocumento coverage</strong> — at minimum TD01, TD04, TD17–TD19, TD20, TD24.</li>
        <li><strong>Conservazione sostitutiva</strong> — bundled (no separate contract) ideally with AgID-accredited provider.</li>
        <li><strong>Forfettari pricing</strong> — flat-rate users invoice rarely; subscription should match.</li>
        <li><strong>Accountant collaboration</strong> — XML export, commercialista access, period close.</li>
        <li><strong>Multi-jurisdiction</strong> — relevant if you sell to ZATCA Saudi, Peppol EU, or MTD UK buyers as well.</li>
      </ol>
      <h2 id="shortlist">The shortlist</h2>
      <h3>1. Invoicemonk — best for cross-border Italian businesses</h3><p>Invoicemonk handles FatturaPA + SdI end to end with Codice Destinatario validation and conservazione sostitutiva to an AgID-accredited provider bundled. It is unique on this list in also covering 15 other mandates (ZATCA, Peppol, MyInvois, GST IRN, MTD, etc.), which matters if your buyers span Italy plus another regulated market. See the <a href="/__LANG__/e-invoicing/sdi-italy">SdI implementation page</a>.</p>
      <h3>2. Fatture in Cloud (TeamSystem) — best for accountant collaboration</h3><p>Italian incumbent. Deep integration with Italian accountants (commercialisti). FatturaPA, SdI, conservazione, F24 — the full Italian compliance suite. Weak on cross-border and on UX for non-Italian-speaking founders.</p>
      <h3>3. Aruba Fatturazione Elettronica — best price floor</h3><p>Bundled with Aruba PEC for low cost. Reliable SdI submission, conservazione included. Light on workflow and reporting.</p>
      <h3>4. FattureGo — best pure-play SdI sender</h3><p>Free tier for very low volume. Limited features but does the SdI essentials.</p>
      <h3>5. SumUp Fatture (ex-Tinaba) — best for service freelancers with payment links</h3><p>FatturaPA + payment link in one flow, suited to consultants who need to invoice and collect in the same step.</p>
      <h2 id="matrix">Comparison matrix</h2><div class="overflow-x-auto"><table>
        <thead><tr><th>Platform</th><th>SDICoop</th><th>Codice Destinatario validation</th><th>Conservazione bundled</th><th>Forfettari plan</th><th>Multi-jurisdiction</th></tr></thead>
        <tbody>
          <tr><td>Invoicemonk</td><td>✔</td><td>✔ (AdE registry)</td><td>✔ (AgID)</td><td>✔</td><td>16 mandates</td></tr>
          <tr><td>Fatture in Cloud</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Italy only</td></tr>
          <tr><td>Aruba</td><td>✔</td><td>Partial</td><td>✔</td><td>✔</td><td>Italy only</td></tr>
          <tr><td>FattureGo</td><td>✔</td><td>✔</td><td>Add-on</td><td>Free tier</td><td>Italy only</td></tr>
          <tr><td>SumUp Fatture</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Italy only</td></tr>
        </tbody>
      </table></div>
      <h2 id="freelancer">Best for freelancers / forfettari</h2><p>If you issue under 30 invoices a year, Fatture in Cloud\'s Forfettario plan or FattureGo\'s free tier are the lowest friction. If you collect payments by card or link, SumUp Fatture compresses invoice + payment into one step. If you also have a foreign client base, Invoicemonk consolidates SdI and other mandates under one subscription.</p>
      <h2 id="multicountry">Best if you invoice outside Italy too</h2><p>This is where the list narrows. Italian incumbents are domestic-only. <a href="/__LANG__/e-invoicing/peppol-eu">Peppol EU</a> coverage for German XRechnung, French Factur-X, or Belgian Hermes — plus non-EU regimes like Saudi <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a> or UK <a href="/__LANG__/e-invoicing/mtd-uk">MTD</a> — is where Invoicemonk\'s 16-mandate footprint pays for itself.</p>
      <h2 id="mistakes">Three mistakes to avoid</h2><ul>
        <li><strong>Picking a platform without conservazione bundled.</strong> Buying conservation separately doubles the admin and often costs more.</li>
        <li><strong>Hard-coding Codice Destinatario <code>0000000</code> for every buyer.</strong> If the buyer registered a code, SdI uses it and your invoice is delivered, but mismatched data triggers buyer-side rejections.</li>
        <li><strong>Ignoring the TipoDocumento beyond TD01.</strong> TD17/TD18/TD19 are the cross-border codes that replaced Esterometro; using TD01 for a foreign-services purchase triggers AdE follow-up.</li>
      </ul>
      <h2>Key takeaways</h2><ul>
        <li>The minimum viable feature set is SdI submission + Codice Destinatario validation + conservazione sostitutiva.</li>
        <li>For cross-border invoicing, multi-mandate platforms win on TCO.</li>
        <li>Forfettari should optimise for price floor and AdE portal compatibility, not feature depth.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.fatturapa.gov.it/" rel="noopener noreferrer">AdE — FatturaPA portal</a></li>
        <li><a href="https://www.agid.gov.it/" rel="noopener noreferrer">AgID — conservatori accreditati registry</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/blog/sdi-italy-explained">SdI / FatturaPA explained</a></li>
        <li><a href="/__LANG__/blog/how-to-comply-with-sdi-italy">How to comply with SdI Italy</a></li>
        <li><a href="/__LANG__/blog/how-to-choose-e-invoicing-software-for-italian-vat-compliance">How to choose for Italian VAT compliance</a></li>
        <li><a href="/__LANG__/blog/enterprise-e-invoicing-europe-comparison">Enterprise e-invoicing in Europe — comparison</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Italy', 'small business', 'FatturaPA', 'comparison', 'buyer guide'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/best-e-invoicing-italy-smb.jpg',
    featuredImageAlt: 'Shortlist comparison of SdI-ready e-invoicing platforms for Italian small businesses',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/sdi-italy',
    targetCountry: 'IT',
    semanticKeywords: ['best e-invoicing Italy', 'FatturaPA software SMB', 'SdI software comparison', 'forfettari invoicing', 'Fatture in Cloud alternative', 'Aruba fatturazione', 'Codice Destinatario'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'Do I need separate software for SdI submission and conservazione sostitutiva?', answer: 'No, the best platforms bundle both. Buying them separately usually costs more and creates two compliance surfaces to monitor.' },
      { question: 'Can I use Italian software if I have buyers abroad?', answer: 'You can, but cross-border invoices through TD17/TD18/TD19 still flow through SdI. If you also need to satisfy non-Italian mandates (ZATCA, MTD, Peppol national), a multi-jurisdiction platform avoids running parallel tools.' },
      { question: 'Is the AdE\'s own free portal enough?', answer: 'For very low volume (a handful of invoices per month), yes. Beyond that, the lack of automation, recurring invoices, and accountant integration becomes painful.' },
      { question: 'What does conservazione sostitutiva typically cost?', answer: 'Bundled with the e-invoicing subscription, often €0; standalone with an AgID-accredited provider, €30–80/year for a small business.' },
      { question: 'Are these platforms suitable for the regime forfettario?', answer: 'Yes — all five offer a forfettari-tier plan or free tier suitable for low-volume flat-rate issuers since the 2024 extension.' },
    ],
    relatedTools: [
      { label: 'Invoicemonk for Italian businesses', url: '/e-invoicing/sdi-italy', description: 'FatturaPA + 15 other mandates' },
      { label: 'Buyer\'s checklist', url: '/blog/choosing-an-e-invoicing-platform-checklist', description: '12-point multi-jurisdiction guide' },
    ],
  },

  // ============================================================
  // 4. How to choose e-invoicing software for Italian VAT compliance
  // ============================================================
  {
    slug: 'how-to-choose-e-invoicing-software-for-italian-vat-compliance',
    title: 'How to Choose E-Invoicing Software for Italian VAT Compliance (2026 Buyer\'s Guide)',
    excerpt: 'Decision framework for selecting an SdI-ready platform that satisfies Italian VAT — TipoDocumento coverage, Natura codes, split-payment, reverse-charge, and conservazione sostitutiva.',
    content: `<p><strong>Choosing e-invoicing software for Italian VAT compliance means going beyond "does it talk to SdI?". The right platform proves it handles every <a href="/__LANG__/glossary/fatturapa">FatturaPA</a> TipoDocumento you issue, the Natura code matrix for VAT-exempt and reverse-charge supplies, IVA scissione dei pagamenti for public-administration buyers, and lodges every record in 10-year <em>conservazione sostitutiva</em>. Use the eight-point framework below.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Regulator:</strong> Agenzia delle Entrate</li>
        <li><strong>Compliance surfaces:</strong> SdI clearance + Natura/TD coding + scissione + reverse-charge + conservazione</li>
        <li><strong>Retention:</strong> 10 years under CAD art.43 and DPR 633/72</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#framework">The 8-point framework</a></li>
        <li><a href="#td">TipoDocumento coverage</a></li>
        <li><a href="#natura">Natura codes</a></li>
        <li><a href="#scissione">Split payment (scissione) and reverse-charge</a></li>
        <li><a href="#conservazione">Conservazione sostitutiva</a></li>
        <li><a href="#vendor">Vendor due-diligence questions</a></li>
      </ul></nav>
      <h2 id="framework">The 8-point framework</h2><ol>
        <li>Native FatturaPA v1.2.x output with automatic schema upgrades.</li>
        <li>Full TipoDocumento coverage relevant to your transactions.</li>
        <li>Correct Natura code application (N1–N7 family).</li>
        <li>Split payment (scissione dei pagamenti) for PA invoices.</li>
        <li>Reverse-charge handling per art.17 DPR 633/72 with TD16/TD17/TD19.</li>
        <li>Conservazione sostitutiva to an AgID-accredited provider.</li>
        <li>Bidirectional sync with your commercialista (XML export, lookup links).</li>
        <li>Audit log that maps each invoice to its Identificativo SdI and ricevuta.</li>
      </ol>
      <h2 id="td">TipoDocumento coverage — what to ask</h2><p>"Show me how you handle TD17 (cross-border services purchase), TD20 (autofattura for missing supplier invoice), TD24 (deferred invoice), TD28 (San Marino purchases)." If the demo cannot show these end to end, the platform is not safe for VAT compliance — defaulting to TD01 misclassifies the transaction and survives SdI validation but fails AdE risk-scoring.</p>
      <h2 id="natura">Natura codes — the silent rejection trigger</h2><p>Every line that does not charge standard 22% VAT needs a Natura code:</p><ul>
        <li><strong>N1</strong> — escluse ex art.15.</li>
        <li><strong>N2.1 / N2.2</strong> — non soggette (out of scope).</li>
        <li><strong>N3.1–N3.6</strong> — non imponibili (zero-rated exports, intra-EU, etc.).</li>
        <li><strong>N4</strong> — esenti.</li>
        <li><strong>N5</strong> — regime del margine.</li>
        <li><strong>N6.1–N6.9</strong> — reverse-charge sub-types.</li>
        <li><strong>N7</strong> — IVA assolta in altro Stato UE.</li>
      </ul><p>Missing or wrong Natura triggers scarto 00400 or 00415 — and even when accepted, an over-broad N2.2 is the single most common trigger of AdE letters of inquiry.</p>
      <h2 id="scissione">Split payment and reverse-charge</h2><p>Public administration buyers pay the supplier net and remit VAT directly to the AdE (scissione dei pagamenti, art.17-ter). The FatturaPA must carry <code>EsigibilitaIVA = S</code>. Reverse-charge (art.17 c.2/c.5/c.6) shifts VAT to the buyer with Natura N6.* and zero VAT charged. The platform must trigger the right combination from the buyer\'s nature (PA vs. private B2B) and the transaction code, not from a manual checkbox.</p>
      <h2 id="conservazione">Conservazione sostitutiva — non-negotiable</h2><p>10 years is the minimum. The conservation pack must carry a qualified timestamp and digital signature, lodged with an AgID-accredited conservatore. The AdE\'s own free service is fine for low volume; for material volume, bundled conservazione from the e-invoicing vendor avoids running two compliance systems.</p>
      <h2 id="vendor">Vendor due-diligence questions</h2><ul>
        <li>"Which AgID-accredited conservatore do you use?"</li>
        <li>"How do you handle FatturaPA schema upgrades — is there ever any downtime?"</li>
        <li>"Can my commercialista access invoices directly without an extra licence?"</li>
        <li>"Show me the audit log mapping each invoice to its Identificativo SdI and ricevuta."</li>
        <li>"How are TD17 and TD19 generated — do you derive them from VAT treatment or do I tick a box?"</li>
        <li>"What is your contingency if SDICoop is down — PEC fallback automatic?"</li>
      </ul>
      <h2>Key takeaways</h2><ul>
        <li>SdI submission is necessary but not sufficient — Italian VAT compliance lives in TipoDocumento, Natura, scissione, and conservazione.</li>
        <li>Default-to-TD01 platforms survive SdI but fail audits.</li>
        <li>Bundle conservazione with submission to halve the compliance surface area.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://www.agenziaentrate.gov.it/" rel="noopener noreferrer">Agenzia delle Entrate — normativa</a></li>
        <li><a href="https://www.fatturapa.gov.it/" rel="noopener noreferrer">FatturaPA — technical documentation</a></li>
        <li><a href="https://www.agid.gov.it/it/piattaforme/conservazione" rel="noopener noreferrer">AgID — conservazione documentale</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/blog/sdi-italy-explained">SdI / FatturaPA explained</a></li>
        <li><a href="/__LANG__/blog/best-e-invoicing-software-for-small-businesses-in-italy">Best SdI-ready platforms for SMBs</a></li>
        <li><a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">12-point multi-jurisdiction checklist</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Italy', 'VAT', 'FatturaPA', 'buyer guide', 'compliance'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '10 min read',
    featuredImage: '/images/blog/einvoicing/italy-vat-software-choice.jpg',
    featuredImageAlt: 'Decision framework illustration for Italian VAT-compliant e-invoicing software',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/sdi-italy',
    targetCountry: 'IT',
    semanticKeywords: ['Italian VAT software', 'TipoDocumento', 'Natura code', 'scissione dei pagamenti', 'reverse charge Italy', 'conservazione sostitutiva', 'AgID accredited', 'commercialista integration'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'Is SdI submission enough for Italian VAT compliance?', answer: 'No. SdI clearance is one of four surfaces; the others are TipoDocumento coding, Natura/scissione/reverse-charge treatment, and 10-year conservazione sostitutiva.' },
      { question: 'How do I know if a vendor handles Natura correctly?', answer: 'Ask for a demo of N2.2, N3.2, N6.6 (subcontracting), and N7 in real invoices, not generic VAT-21 lines.' },
      { question: 'Do I need a separate conservazione contract?', answer: 'Only if your e-invoicing platform doesn\'t bundle it. Most quality platforms partner with an AgID-accredited conservatore at no extra cost.' },
      { question: 'Will the platform handle PA buyers automatically?', answer: 'It should — detecting FormatoTrasmissione FPA12 and applying EsigibilitaIVA = S without manual toggles.' },
      { question: 'How are FatturaPA schema updates handled?', answer: 'The platform should ship schema updates ahead of the AdE\'s effective date with no user action and no downtime.' },
    ],
    relatedTools: [
      { label: 'SdI / FatturaPA mandate page', url: '/e-invoicing/sdi-italy', description: 'How Invoicemonk handles Italian VAT' },
      { label: 'Best for SMBs comparison', url: '/blog/best-e-invoicing-software-for-small-businesses-in-italy', description: 'Shortlist of platforms' },
    ],
  },

  // ============================================================
  // 5. NRA Bulgaria — Explainer
  // ============================================================
  {
    slug: 'nra-bulgaria-explained',
    title: 'NRA Bulgaria E-Invoicing & SAF-T Explained: Phased Rollout 2026–2030',
    excerpt: 'Bulgaria\'s SAF-T BG schema, NRA submission cycle, B2G Peppol mandate, and the upcoming domestic CTC mandate — what each requires and when.',
    content: `<p><strong>Bulgaria operates two distinct compliance surfaces. <a href="/__LANG__/glossary/saf-t-bulgaria">SAF-T BG</a> — Bulgaria\'s adoption of the OECD SAF-T 2.0 schema with NRA extensions — rolls out by enterprise size from 1 January 2026 (large) to 1 January 2030 (micro). B2G invoices have travelled through <a href="/__LANG__/glossary/peppol-bis-billing-3">Peppol BIS Billing 3.0</a> since 2019. A domestic B2B clearance mandate is in public consultation. See the <a href="/__LANG__/e-invoicing/nra-bulgaria">NRA mandate page</a> for Invoicemonk\'s implementation.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Authority:</strong> Национална агенция за приходите (NRA)</li>
        <li><strong>SAF-T waves:</strong> Large 1 Jan 2026 · Medium 1 Jan 2027 · Small 1 Jan 2028 · Micro 1 Jan 2030</li>
        <li><strong>B2G:</strong> Peppol BIS Billing 3.0 since November 2019</li>
        <li><strong>Domestic B2B:</strong> Ministry of Finance consultation, expected 2027–2028</li>
        <li><strong>VAT rates:</strong> 20% standard, 9% reduced, 0%</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#saft">What SAF-T BG covers</a></li>
        <li><a href="#waves">Rollout waves</a></li>
        <li><a href="#peppol">B2G via Peppol</a></li>
        <li><a href="#consultation">Domestic B2B consultation</a></li>
        <li><a href="#zdds">How SAF-T relates to ZDDS VAT returns</a></li>
      </ul></nav>
      <h2 id="saft">What SAF-T BG covers</h2><p>SAF-T BG is an XML file the NRA can request (and, on the wave dates, that taxpayers must submit on a recurring cadence). The schema follows OECD SAF-T 2.0 with Bulgarian-specific code lists and extensions, structured as:</p><ul>
        <li><strong>Header</strong> — taxpayer identification, file scope (monthly / annual / on-demand), period dates.</li>
        <li><strong>MasterFiles</strong> — chart of accounts, customers, suppliers, tax-code table, products. Submitted annually.</li>
        <li><strong>GeneralLedgerEntries</strong> — journal entries, on demand.</li>
        <li><strong>SourceDocuments</strong> — sales invoices, purchase invoices, payments, movements of goods. Submitted monthly.</li>
      </ul>
      <h2 id="waves">Rollout waves</h2><p>The NRA defines four bands by turnover, assets, and headcount under the Bulgarian Accountancy Act classification, plus a "group 1 / very large" tier:</p><ul>
        <li><strong>1 January 2026</strong> — large enterprises and group 1 (very large / public-interest entities). Monthly SourceDocuments, annual MasterFiles, on-demand GeneralLedger.</li>
        <li><strong>1 January 2027</strong> — medium enterprises.</li>
        <li><strong>1 January 2028</strong> — small enterprises.</li>
        <li><strong>1 January 2030</strong> — micro enterprises.</li>
      </ul><p>Submission is via the NRA SAF-T portal with a qualified electronic signature (QES) on the file envelope.</p>
      <h2 id="peppol">B2G via Peppol</h2><p>Since November 2019, supplying Bulgarian public bodies requires a Peppol BIS Billing 3.0 UBL invoice routed through a <a href="/__LANG__/glossary/peppol-access-point">certified Access Point</a>. Public bodies register under scheme <code>9938:VAT-number</code>. This transposes EU Directive 2014/55/EU into Bulgarian law via amendments to the Public Procurement Act (art.39a). Routing is end-to-end UBL; the public body\'s ERP receives the structured invoice directly.</p>
      <h2 id="consultation">Domestic B2B consultation</h2><p>The Ministry of Finance published a domestic e-invoicing consultation paper in late 2025. The current direction is a clearance-style continuous-transaction-controls regime (similar to Italy\'s SdI), with the NRA operating the hub. The expected timeline is large-enterprise B2B alongside the small-enterprise SAF-T wave in 2028, with full rollout by 2030. The schema is expected to align with EN 16931 to satisfy <a href="/__LANG__/blog/peppol-eu-explained">ViDA</a>.</p>
      <h2 id="zdds">How SAF-T relates to ZDDS VAT returns</h2><p>SAF-T does <em>not</em> replace the monthly VAT return (декларация по ЗДДС) or the VIES recapitulative statement. It provides the NRA with the underlying transactional dataset so risk-scoring and audit selection can run against the source data rather than aggregated returns. Expect post-rollout audits to start with cross-checks between the SAF-T SourceDocuments and the corresponding VAT return lines.</p>
      <h2>Key takeaways</h2><ul>
        <li>SAF-T BG is the dominant Bulgarian compliance surface from 2026; B2G Peppol has been live since 2019.</li>
        <li>Wave date is set by enterprise size — large first, micro last.</li>
        <li>VAT returns continue alongside SAF-T; the two reconcile bidirectionally.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://nra.bg/" rel="noopener noreferrer">NRA — official portal</a></li>
        <li><a href="https://www.oecd.org/tax/forum-on-tax-administration/publications-and-products/saft.htm" rel="noopener noreferrer">OECD — SAF-T 2.0 standard</a></li>
        <li><a href="https://www.aop.bg/" rel="noopener noreferrer">Agency for Public Procurement (AOP)</a></li>
        <li><a href="https://www.minfin.bg/" rel="noopener noreferrer">Ministry of Finance — e-invoicing consultation</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/e-invoicing/nra-bulgaria">How Invoicemonk implements NRA Bulgaria</a></li>
        <li><a href="/__LANG__/blog/best-e-invoicing-platforms-for-small-businesses-in-bulgaria">Best e-invoicing platforms for Bulgarian SMBs</a></li>
        <li><a href="/__LANG__/blog/how-to-choose-e-invoicing-provider-bulgarian-tax-laws">Choosing a Bulgarian-tax-compliant provider</a></li>
        <li><a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Bulgaria', 'NRA', 'SAF-T', 'Peppol', 'e-invoicing', 'EU'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '10 min read',
    featuredImage: '/images/blog/einvoicing/nra-bulgaria-explained.jpg',
    featuredImageAlt: 'Timeline of the Bulgarian NRA SAF-T phased rollout and Peppol B2G mandate',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/nra-bulgaria',
    targetCountry: 'BG',
    semanticKeywords: ['NRA Bulgaria', 'SAF-T BG', 'Bulgarian e-invoicing', 'Peppol Bulgaria', 'ZDDS', 'B2G Peppol', 'OECD SAF-T 2.0', 'ViDA Bulgaria'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'When does SAF-T apply to my Bulgarian business?', answer: 'By enterprise band: large 1 Jan 2026, medium 1 Jan 2027, small 1 Jan 2028, micro 1 Jan 2030. The Bulgarian Accountancy Act thresholds determine your band.' },
      { question: 'Is B2B e-invoicing mandatory today in Bulgaria?', answer: 'Not yet. The Ministry of Finance is consulting on a CTC clearance regime; B2G Peppol is already mandatory since 2019.' },
      { question: 'What\'s the difference between SAF-T and a VAT return?', answer: 'The VAT return is aggregated period figures; SAF-T is the underlying transactional dataset the NRA uses for risk-scoring and audit support. Both must reconcile.' },
      { question: 'Do I need a qualified electronic signature for SAF-T submission?', answer: 'Yes — the SAF-T file envelope is signed with a QES from a Bulgarian or EU-trusted TSP before submission.' },
      { question: 'How does Peppol routing work for Bulgarian public bodies?', answer: 'Public bodies register Peppol participant IDs under scheme 9938 (Bulgarian VAT). A certified Access Point routes the UBL BIS Billing 3.0 invoice end-to-end.' },
    ],
    relatedTools: [
      { label: 'NRA Bulgaria mandate page', url: '/e-invoicing/nra-bulgaria', description: 'Implementation status' },
      { label: 'SAF-T BG glossary', url: '/glossary/saf-t-bulgaria', description: 'Schema and submission cadence' },
    ],
  },

  // ============================================================
  // 6. Best e-invoicing platforms for SMBs in Bulgaria
  // ============================================================
  {
    slug: 'best-e-invoicing-platforms-for-small-businesses-in-bulgaria',
    title: 'Best E-Invoicing Platforms for Small Businesses in Bulgaria (2026)',
    excerpt: 'Bulgarian SMB shortlist: platforms that handle ZDDS VAT invoicing today, are ready for SAF-T BG submission, and offer Peppol routing for B2G tenders.',
    content: `<p><strong>The best e-invoicing platforms for Bulgarian small businesses already handle ZDDS-compliant invoices today, generate <a href="/__LANG__/glossary/saf-t-bulgaria">SAF-T BG</a> for the 2026–2030 wave that applies to you, and route B2G invoices as <a href="/__LANG__/glossary/peppol-bis-billing-3">Peppol BIS Billing 3.0</a>. Invoicemonk, Microinvest, Balans, and Plus Minus are the shortlist; the right pick depends on whether you need cross-border coverage, deep Bulgarian accounting integration, or a low-cost ZDDS-only invoicer.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Who this is for:</strong> Bulgarian VAT-registered (ZDDS) SMBs and freelancers</li>
        <li><strong>Compliance surfaces:</strong> ZDDS invoice + SAF-T BG (per wave) + Peppol B2G + future domestic CTC</li>
        <li><strong>VAT rates:</strong> 20% standard / 9% reduced / 0%</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#criteria">The 6 criteria that matter</a></li>
        <li><a href="#shortlist">The shortlist</a></li>
        <li><a href="#matrix">Comparison matrix</a></li>
        <li><a href="#freelancer">Best for freelancers</a></li>
        <li><a href="#future">Picking for the 2027–2030 wave</a></li>
      </ul></nav>
      <h2 id="criteria">The 6 criteria that matter</h2><ol>
        <li><strong>ZDDS-compliant invoice fields</strong> — Bulgarian VAT number format (BG + 9–10 digits), reverse-charge under art.82 / art.163a, VAT 20% / 9% / 0%.</li>
        <li><strong>SAF-T BG readiness</strong> — schema generation for SourceDocuments (monthly), MasterFiles (annual), on-demand GL. NRA portal submission.</li>
        <li><strong>Peppol B2G</strong> — certified Access Point integration for tenders to public bodies under scheme <code>9938</code>.</li>
        <li><strong>QES signing</strong> — qualified signature for SAF-T file envelopes and B2G PDFs.</li>
        <li><strong>BGN + EUR + USD multi-currency</strong> — Bulgaria adopts the euro in 2026; transitional dual-display is required.</li>
        <li><strong>Roadmap for domestic CTC</strong> — vendor commitment to ship the upcoming clearance integration on day one.</li>
      </ol>
      <h2 id="shortlist">The shortlist</h2>
      <h3>1. Invoicemonk — best for Bulgarian businesses with cross-border buyers</h3><p>Invoicemonk issues ZDDS-compliant invoices, generates SAF-T BG XML for the relevant wave, and routes Peppol BIS Billing 3.0 to Bulgarian public bodies via a certified Access Point. Multi-currency with euro changeover handling is built in. The 16-mandate footprint (ZATCA, Peppol, MTD, MyInvois, etc.) matters for Bulgarian exporters. See the <a href="/__LANG__/e-invoicing/nra-bulgaria">NRA mandate page</a>.</p>
      <h3>2. Microinvest Delta Pro — best for deep Bulgarian accounting integration</h3><p>Bulgarian incumbent. Tightly integrated with Bulgarian accountants, fiscal device support, full ZDDS toolkit. SAF-T BG roadmap announced; Peppol via partner. Weak on UI and cross-border.</p>
      <h3>3. Balans — best for accountant-facing workflow</h3><p>Mid-market Bulgarian platform used by many счетоводни кантори. Strong ZDDS reporting, monthly close, SAF-T modules in beta.</p>
      <h3>4. Plus Minus — best price floor for ZDDS-only invoicing</h3><p>Long-running Bulgarian invoicing tool. Affordable, ZDDS-correct, modest on automation. SAF-T BG generation is on the roadmap rather than shipped.</p>
      <h3>5. Invoicemonk competitor benchmark — Smart Bulgaria</h3><p>Smart Bulgaria is gaining traction with start-ups for its API-first model; SAF-T BG is on roadmap, Peppol via partner.</p>
      <h2 id="matrix">Comparison matrix</h2><div class="overflow-x-auto"><table>
        <thead><tr><th>Platform</th><th>ZDDS invoice</th><th>SAF-T BG ready</th><th>Peppol B2G</th><th>QES signing</th><th>Multi-jurisdiction</th></tr></thead>
        <tbody>
          <tr><td>Invoicemonk</td><td>✔</td><td>✔ (all waves)</td><td>✔ (certified AP)</td><td>✔</td><td>16 mandates</td></tr>
          <tr><td>Microinvest Delta Pro</td><td>✔</td><td>Roadmap</td><td>Via partner</td><td>✔</td><td>BG only</td></tr>
          <tr><td>Balans</td><td>✔</td><td>Beta</td><td>Via partner</td><td>✔</td><td>BG only</td></tr>
          <tr><td>Plus Minus</td><td>✔</td><td>Roadmap</td><td>—</td><td>Partial</td><td>BG only</td></tr>
          <tr><td>Smart Bulgaria</td><td>✔</td><td>Roadmap</td><td>Via partner</td><td>✔</td><td>BG + light EU</td></tr>
        </tbody>
      </table></div>
      <h2 id="freelancer">Best for freelancers</h2><p>Single-person businesses below the SAF-T wave threshold (until 2030) should optimise for ZDDS correctness and low subscription. Plus Minus or Microinvest\'s freelancer tier suffice for purely domestic invoicing. If you have EU buyers, Invoicemonk\'s Peppol output and FatturaPA / XRechnung handling pays for itself when those buyers ask for structured invoices.</p>
      <h2 id="future">Picking for the 2027–2030 wave</h2><p>If your wave is years away, the temptation is to defer the choice. The risk is that ZDDS-only platforms reach the wave with rushed SAF-T modules. Vendor commitment to SAF-T BG (and the upcoming CTC clearance) should be a contract-level commitment, not a brochure claim. Ask for a roadmap, a beta sandbox, and the named AgID-equivalent (BG QES TSP) used.</p>
      <h2>Key takeaways</h2><ul>
        <li>Today\'s pick must cover ZDDS + Peppol B2G; tomorrow\'s pick must cover SAF-T BG and the planned domestic CTC.</li>
        <li>Multi-jurisdiction matters for Bulgarian exporters because EU buyers increasingly require Peppol BIS Billing 3.0.</li>
        <li>Roadmap commitments deserve contract language, not just marketing copy.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://nra.bg/" rel="noopener noreferrer">NRA Bulgaria — portal</a></li>
        <li><a href="https://www.minfin.bg/" rel="noopener noreferrer">Ministry of Finance</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/blog/nra-bulgaria-explained">NRA Bulgaria explained</a></li>
        <li><a href="/__LANG__/blog/how-to-choose-e-invoicing-provider-bulgarian-tax-laws">Choosing a provider compliant with Bulgarian tax laws</a></li>
        <li><a href="/__LANG__/blog/enterprise-e-invoicing-europe-comparison">Enterprise e-invoicing in Europe — comparison</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Bulgaria', 'small business', 'SAF-T', 'Peppol', 'comparison'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/best-e-invoicing-bulgaria-smb.jpg',
    featuredImageAlt: 'Shortlist comparison of e-invoicing platforms for Bulgarian small businesses',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/nra-bulgaria',
    targetCountry: 'BG',
    semanticKeywords: ['best e-invoicing Bulgaria', 'Bulgarian SMB invoicing', 'SAF-T BG software', 'Peppol Bulgaria', 'Microinvest alternative', 'ZDDS software', 'Plus Minus invoicing'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'Do Bulgarian SMBs already need SAF-T BG?', answer: 'Only if you are in the active wave. Large enterprises from 2026, medium from 2027, small from 2028, micro from 2030. Choose a platform whose SAF-T roadmap matches your wave with months to spare.' },
      { question: 'Is Peppol mandatory for selling to Bulgarian public bodies?', answer: 'Yes, since November 2019. You need a certified Access Point — either the platform\'s own or a partner.' },
      { question: 'Can I use a foreign platform for Bulgarian invoicing?', answer: 'Yes if it handles ZDDS invoice fields (BG VAT number, art.163a reverse-charge, 20%/9%/0% rates) and SAF-T BG for your wave.' },
      { question: 'What about the upcoming euro changeover?', answer: 'Bulgaria targets euro adoption in 2026. The platform should display BGN and EUR side by side during the transition period and switch the ledger functional currency on the changeover date.' },
      { question: 'Will the platform be ready for the domestic CTC mandate?', answer: 'Ask for the vendor\'s public commitment to the Ministry of Finance consultation timeline and a contractual go-live obligation.' },
    ],
    relatedTools: [
      { label: 'NRA Bulgaria mandate page', url: '/e-invoicing/nra-bulgaria', description: 'SAF-T + Peppol implementation' },
      { label: 'Buyer\'s checklist', url: '/blog/choosing-an-e-invoicing-platform-checklist', description: '12-point multi-jurisdiction guide' },
    ],
  },

  // ============================================================
  // 7. How to choose e-invoicing provider — Bulgarian tax laws
  // ============================================================
  {
    slug: 'how-to-choose-e-invoicing-provider-bulgarian-tax-laws',
    title: 'How to Choose an E-Invoicing Provider Compliant with Bulgarian Tax Laws',
    excerpt: 'Eight-criterion framework for picking an e-invoicing provider that satisfies ZDDS, the Accountancy Act, SAF-T BG, Peppol B2G, and the upcoming CTC mandate.',
    content: `<p><strong>Choosing an e-invoicing provider compliant with Bulgarian tax laws means proving the vendor handles four current obligations (<a href="/__LANG__/e-invoicing/nra-bulgaria">ZDDS VAT invoice, Accountancy Act records, B2G Peppol, QES signing</a>) and two upcoming ones (SAF-T BG on your wave, the planned NRA clearance regime). Use the framework below as a vendor-RFP scoring grid.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Primary acts:</strong> ZDDS (VAT), Accountancy Act, Tax-Insurance Procedure Code, Public Procurement Act</li>
        <li><strong>Regulator:</strong> Национална агенция за приходите (NRA)</li>
        <li><strong>Schemes:</strong> Peppol scheme 9938 for BG VAT participants</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#framework">The 8-criterion framework</a></li>
        <li><a href="#zdds">ZDDS field coverage</a></li>
        <li><a href="#accountancy">Accountancy Act retention</a></li>
        <li><a href="#saft">SAF-T BG readiness</a></li>
        <li><a href="#peppol">Peppol B2G</a></li>
        <li><a href="#ctc">Future CTC clearance</a></li>
        <li><a href="#rfp">Vendor RFP questions</a></li>
      </ul></nav>
      <h2 id="framework">The 8-criterion framework</h2><ol>
        <li>ZDDS-compliant invoice field set (BG VAT, 20%/9%/0%, reverse-charge under art.82 / art.163a).</li>
        <li>Sequential invoice numbering without gaps (chronologic, per art.114 ZDDS).</li>
        <li>Accountancy Act compliant retention (10 years, immutable archive).</li>
        <li>SAF-T BG XML generation for the SourceDocuments (monthly), MasterFiles (annual), GeneralLedger (on demand) blocks.</li>
        <li>Peppol BIS Billing 3.0 routing for B2G via certified Access Point.</li>
        <li>Qualified Electronic Signature support (BG QES TSP integration for SAF-T envelopes and B2G PDFs).</li>
        <li>Roadmap and contractual commitment for the upcoming domestic B2B CTC mandate.</li>
        <li>Auditability: full audit log linking each invoice to its lifecycle events, the SAF-T export, and any Peppol receipts.</li>
      </ol>
      <h2 id="zdds">ZDDS field coverage</h2><p>ZDDS art.114 mandates: sequential invoice number, date, supplier and recipient details (incl. BG VAT identification number), description, quantity, unit price, tax base, VAT rate and amount, total. Reverse-charge invoices must carry the explicit "обратно начисляване" annotation plus the legal basis (art.82 c.2 / art.163a). Triangulation under art.65a must be flagged. Verify the vendor renders all of this on the standard PDF and in the SAF-T SourceDocuments block.</p>
      <h2 id="accountancy">Accountancy Act retention</h2><p>Bulgarian Accountancy Act (Закон за счетоводството) art.12 requires 10-year retention of primary accounting documents, including invoices. The archive must be immutable and addressable per document. Look for object-lock or WORM-equivalent guarantees, not just "we keep backups".</p>
      <h2 id="saft">SAF-T BG readiness</h2><p>The NRA published the SAF-T BG technical specification with the OECD SAF-T 2.0 base schema plus Bulgarian code lists. Verify the provider:</p><ul>
        <li>Generates conformant SourceDocuments (sales, purchases, payments, movements of goods).</li>
        <li>Generates conformant MasterFiles (chart of accounts, customers, suppliers, tax codes).</li>
        <li>Generates the on-demand GeneralLedger.</li>
        <li>Signs the envelope with a BG-qualified electronic signature before submission.</li>
        <li>Submits through the NRA portal (or guides you through the manual submission).</li>
      </ul>
      <h2 id="peppol">Peppol B2G</h2><p>Public Procurement Act art.39a mandates Peppol for tenders. The provider must hold (or partner with) a certified Peppol Access Point and register your business under scheme <code>9938:VAT-number</code>. Verify the provider can show buyer-side acceptance from at least one major Bulgarian public buyer.</p>
      <h2 id="ctc">Future CTC clearance</h2><p>The Ministry of Finance consultation paper points to a clearance-style regime on the Italian SdI model. The provider\'s roadmap should commit to:</p><ul>
        <li>Live integration on the official go-live date (large enterprises first).</li>
        <li>Schema and code-list updates without customer downtime.</li>
        <li>Sandbox availability at least 6 months before the live date.</li>
      </ul>
      <h2 id="rfp">Vendor RFP questions</h2><ul>
        <li>"Show me an end-to-end ZDDS reverse-charge invoice under art.163a in your demo."</li>
        <li>"Generate a sample SAF-T BG SourceDocuments file for my chart of accounts."</li>
        <li>"Which BG QES TSP do you integrate for envelope signing?"</li>
        <li>"Which Peppol Access Point operator do you use, and what is your SLA?"</li>
        <li>"What is your commitment date for the NRA domestic CTC mandate?"</li>
        <li>"What is your retention architecture under Accountancy Act art.12?"</li>
      </ul>
      <h2>Key takeaways</h2><ul>
        <li>Compliance is multi-surface: ZDDS invoices today, SAF-T tomorrow, CTC the day after.</li>
        <li>Treat the SAF-T and CTC roadmap as contract terms, not marketing.</li>
        <li>Peppol B2G is non-negotiable if you ever tender for public contracts.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://nra.bg/" rel="noopener noreferrer">NRA Bulgaria — official portal</a></li>
        <li><a href="https://www.aop.bg/" rel="noopener noreferrer">Agency for Public Procurement</a></li>
        <li><a href="https://www.minfin.bg/" rel="noopener noreferrer">Ministry of Finance</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/blog/nra-bulgaria-explained">NRA Bulgaria explained</a></li>
        <li><a href="/__LANG__/blog/best-e-invoicing-platforms-for-small-businesses-in-bulgaria">Best platforms for Bulgarian SMBs</a></li>
        <li><a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">12-point multi-jurisdiction checklist</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Bulgaria', 'compliance', 'SAF-T', 'ZDDS', 'buyer guide'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '10 min read',
    featuredImage: '/images/blog/einvoicing/bulgaria-tax-provider-choice.jpg',
    featuredImageAlt: 'Decision framework illustration for Bulgarian-tax-compliant e-invoicing providers',
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/nra-bulgaria',
    targetCountry: 'BG',
    semanticKeywords: ['Bulgarian tax compliance', 'ZDDS invoicing', 'Accountancy Act archive', 'SAF-T BG provider', 'Peppol Bulgaria B2G', 'QES Bulgaria', 'NRA CTC roadmap'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'What\'s the minimum field set for a ZDDS-compliant invoice?', answer: 'ZDDS art.114: sequential number, date, supplier + recipient identification including BG VAT number, line description, quantity, unit price, tax base, VAT rate and amount, total. Reverse-charge requires the "обратно начисляване" annotation plus the legal basis.' },
      { question: 'How long must I keep Bulgarian invoices?', answer: '10 years per Accountancy Act art.12, in an immutable archive.' },
      { question: 'Is SAF-T BG submission really mandatory if I am a small business?', answer: 'It becomes mandatory on your wave date (small enterprises 1 Jan 2028, micro 1 Jan 2030). Until then it is on-demand only.' },
      { question: 'Do I need my own Peppol Access Point?', answer: 'No — provider-supplied or partner Access Points are the norm. Verify the operator is certified by OpenPeppol.' },
      { question: 'What is the timeline for the upcoming CTC mandate?', answer: 'The Ministry of Finance is consulting; expected large-enterprise start around 2028, full coverage by 2030. Treat vendor commitment to that date as a contract term.' },
    ],
    relatedTools: [
      { label: 'NRA Bulgaria mandate page', url: '/e-invoicing/nra-bulgaria', description: 'Implementation status' },
      { label: 'Best Bulgarian SMB platforms', url: '/blog/best-e-invoicing-platforms-for-small-businesses-in-bulgaria', description: 'Shortlist' },
    ],
  },

  // ============================================================
  // 8. Enterprise e-invoicing in Europe — comparison (+ accounting integration)
  // ============================================================
  {
    slug: 'enterprise-e-invoicing-europe-comparison',
    title: 'Enterprise E-Invoicing in Europe Compared: Coverage, Integrations, ViDA-Readiness (2026)',
    excerpt: 'Comparison of enterprise e-invoicing platforms operating across the EU: mandate coverage, ERP/accounting integrations, ViDA readiness, and where each one excels.',
    content: `<p><strong>Enterprise e-invoicing in Europe is shaped by three forces: 27 national mandates at different maturities, the EU-wide <a href="/__LANG__/blog/peppol-eu-explained">Peppol BIS Billing 3.0</a> backbone, and the ViDA digital reporting requirement from 2030. The best enterprise platforms cover the live mandates (Italy <a href="/__LANG__/e-invoicing/sdi-italy">SdI</a>, France PPF/PDP, Spain TicketBAI/Veri*Factu, Germany B2B 2025–2028, Poland KSeF, Romania e-Factura, plus Bulgaria <a href="/__LANG__/e-invoicing/nra-bulgaria">SAF-T</a> and the rest), integrate natively with SAP S/4HANA, Oracle Fusion, Microsoft Dynamics 365, NetSuite, and Sage X3, and ship ViDA-ready EN 16931 schemas today.</strong></p>
      <div class="fact-box"><p><strong>At a glance</strong></p><ul>
        <li><strong>Live EU clearance / RTIR regimes (2026):</strong> IT SdI, HU RTIR, ES TicketBAI / Veri*Factu, FR PPF, PL KSeF, RO e-Factura, GR myDATA</li>
        <li><strong>SAF-T regimes:</strong> PT, FR, LU, LT, NO, AT (audit), BG (phased 2026–2030)</li>
        <li><strong>EU-wide:</strong> Peppol BIS Billing 3.0 for B2G under Directive 2014/55</li>
        <li><strong>ViDA:</strong> EN 16931 digital reporting for intra-EU from 2030</li>
      </ul></div>
      <nav aria-label="On this page"><p><strong>On this page</strong></p><ul>
        <li><a href="#landscape">The European mandate landscape</a></li>
        <li><a href="#vendors">The enterprise shortlist</a></li>
        <li><a href="#matrix">Coverage and ERP integration matrix</a></li>
        <li><a href="#integration">Integration capabilities with accounting systems</a></li>
        <li><a href="#vida">ViDA readiness</a></li>
        <li><a href="#choose">How enterprises should choose</a></li>
      </ul></nav>
      <h2 id="landscape">The European mandate landscape</h2><p>Europe is the most fragmented e-invoicing market in the world. Italy has been on full B2B clearance since 2019; France launched PPF/PDP in stages 2024–2026; Spain runs TicketBAI in the Basque Country and Veri*Factu nationally; Germany\'s B2B mandate phases in 2025–2028; Poland\'s KSeF was deferred to 2026; Romania\'s e-Factura is live for B2B since 2024; Greece\'s myDATA is the real-time reporting baseline. Bulgaria\'s SAF-T phases in 2026–2030. ViDA layers an EU-wide EN 16931 reporting obligation on top from 2030 for intra-EU transactions.</p>
      <h2 id="vendors">The enterprise shortlist</h2>
      <h3>1. Invoicemonk — best for multi-mandate breadth without per-country add-ons</h3><p>Native coverage of 16 mandates including SdI, Peppol EU, MTD, plus the upcoming Bulgarian and German B2B regimes. One subscription, one schema engine. Integrates with SAP, Oracle Fusion, Dynamics 365, NetSuite, Sage X3, Odoo, QuickBooks, and Xero through standard connectors.</p>
      <h3>2. SAP Document and Reporting Compliance — best if you are SAP-mandated</h3><p>The native SAP option. Strong on SAP ERP integration, weaker on non-SAP back-ends. Per-country activation pricing.</p>
      <h3>3. Pagero — best for Peppol-heavy Nordic operations</h3><p>Long-running European e-invoicing operator now part of Thomson Reuters. Strong Peppol presence, broad EU coverage, ERP-agnostic.</p>
      <h3>4. Sovos — best for indirect tax integration</h3><p>Tax-compliance vendor that bundles e-invoicing with VAT determination. Strong in jurisdictions with complex tax-rate logic (ES, IT, PT).</p>
      <h3>5. Edicom — best for Spain and LatAm bridge</h3><p>Spain-headquartered; deep TicketBAI and Veri*Factu coverage; LatAm coverage for businesses spanning ES + MX/BR/CL.</p>
      <h3>6. Comarch EDI — best for CEE depth</h3><p>Poland-headquartered; strong KSeF, RO e-Factura, HU RTIR; broad EDI catalogue alongside e-invoicing.</p>
      <h2 id="matrix">Coverage and ERP integration matrix</h2><div class="overflow-x-auto"><table>
        <thead><tr><th>Platform</th><th>IT SdI</th><th>FR PPF</th><th>ES TicketBAI</th><th>DE B2B</th><th>PL KSeF</th><th>BG SAF-T</th><th>SAP S/4</th><th>Oracle Fusion</th><th>D365 F&amp;O</th><th>NetSuite</th><th>Sage X3</th></tr></thead>
        <tbody>
          <tr><td>Invoicemonk</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
          <tr><td>SAP DRC</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Partial</td><td>Native</td><td>✗</td><td>✗</td><td>✗</td><td>✗</td></tr>
          <tr><td>Pagero</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Partial</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
          <tr><td>Sovos</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Partial</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Partial</td></tr>
          <tr><td>Edicom</td><td>✔</td><td>✔</td><td>✔ (deep)</td><td>✔</td><td>✔</td><td>Partial</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td><td>Partial</td></tr>
          <tr><td>Comarch EDI</td><td>✔</td><td>✔</td><td>Partial</td><td>✔</td><td>✔ (deep)</td><td>Partial</td><td>✔</td><td>✔</td><td>✔</td><td>Partial</td><td>Partial</td></tr>
        </tbody>
      </table></div>
      <h2 id="integration">Integration capabilities with existing accounting systems</h2><p>Enterprise selection often comes down to how cleanly the platform sits in front of (or beside) the accounting system. The mature pattern is:</p><ul>
        <li><strong>SAP S/4HANA</strong> — outbound via IDoc INVOIC or eDocument framework; certified extractors are the gold standard.</li>
        <li><strong>Oracle Fusion / NetSuite</strong> — REST + SuiteApp; bidirectional sync of customer / supplier master data.</li>
        <li><strong>Microsoft Dynamics 365 F&amp;O / Business Central</strong> — Electronic Reporting framework on F&amp;O; AppSource extension on BC.</li>
        <li><strong>Sage X3 / Intacct</strong> — REST + ODBC fallback; weaker than the above on master-data sync.</li>
        <li><strong>Odoo, QuickBooks, Xero</strong> — REST + OAuth; suited to mid-market subsidiaries of larger groups.</li>
      </ul><p>The integration questions that matter at enterprise scale: bidirectional customer / supplier sync, real-time webhook on clearance status, replay of failed transmissions, correlation IDs persisted on both sides, and a tested SAP-mandate IDoc upgrade path. Brochure-grade "integrates with SAP" claims should be tested with a 30-day sandbox.</p>
      <h2 id="vida">ViDA readiness</h2><p>From 2030 (or earlier, depending on Council adoption of revised timelines), intra-EU B2B transactions must be reported as structured EN 16931 messages within near-real-time of issuance. Enterprises with cross-border EU activity should confirm:</p><ul>
        <li>EN 16931 schema available in production today (not "by 2029").</li>
        <li>Reporting interface for the EU central VIES-DRR exchange when activated.</li>
        <li>Conformance with the revised Peppol BIS for ViDA — current consultation drafts on docs.peppol.eu.</li>
      </ul>
      <h2 id="choose">How enterprises should choose</h2><ol>
        <li>Map your live ERPs to the vendor matrix. Eliminate vendors lacking native connectors for your top three.</li>
        <li>Map your mandate footprint (where you sell + where you buy) against the coverage matrix. Eliminate vendors with critical gaps.</li>
        <li>Score on ViDA readiness — schema today, not roadmap.</li>
        <li>Run a 30-day sandbox in the two most operationally complex jurisdictions you operate in (typically IT, FR, ES, or PL).</li>
        <li>Negotiate per-mandate pricing into a flat platform fee where possible; per-mandate add-ons turn enterprise rollouts into multi-year cost surprises.</li>
      </ol>
      <h2>Key takeaways</h2><ul>
        <li>European e-invoicing is irreducibly multi-jurisdiction; single-country tools are dead-ends at enterprise scale.</li>
        <li>Native ERP integration with the top platforms (SAP, Oracle, Dynamics, NetSuite, Sage) is the second decisive axis.</li>
        <li>ViDA readiness is no longer optional — and the schema must exist in production, not on a roadmap.</li>
      </ul>
      <h2 id="sources">Authority sources</h2><ul>
        <li><a href="https://eur-lex.europa.eu/" rel="noopener noreferrer">EUR-Lex — Directive 2014/55 and ViDA package</a></li>
        <li><a href="https://docs.peppol.eu/poacc/billing/3.0/" rel="noopener noreferrer">OpenPeppol — BIS Billing 3.0</a></li>
        <li><a href="https://ec.europa.eu/taxation_customs/business/vat/vat-digital-age-vida_en" rel="noopener noreferrer">European Commission — VAT in the Digital Age</a></li>
      </ul>
      <h2>Related reading</h2><ul>
        <li><a href="/__LANG__/e-invoicing">E-invoicing pillar — 16 mandates</a></li>
        <li><a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a></li>
        <li><a href="/__LANG__/blog/sdi-italy-explained">SdI / FatturaPA explained</a></li>
        <li><a href="/__LANG__/blog/nra-bulgaria-explained">NRA Bulgaria explained</a></li>
        <li><a href="/__LANG__/blog/choosing-an-e-invoicing-platform-checklist">12-point buyer\'s checklist</a></li>
      </ul>`,
    category: 'E-Invoicing',
    tags: ['Europe', 'enterprise', 'ViDA', 'Peppol', 'comparison', 'ERP integration', 'accounting'],
    author: defaultAuthor,
    date: '2026-06-25',
    dateModified: '2026-06-25',
    readTime: '14 min read',
    featuredImage: '/images/blog/einvoicing/enterprise-europe-comparison.jpg',
    featuredImageAlt: 'Comparison of enterprise e-invoicing platforms across European mandates with ERP integration coverage',
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['enterprise e-invoicing Europe', 'ViDA readiness', 'SAP DRC alternative', 'Pagero vs Sovos', 'Edicom Comarch', 'Peppol enterprise', 'SAP S/4HANA e-invoicing', 'Oracle Fusion e-invoicing', 'NetSuite e-invoicing', 'Dynamics 365 e-invoicing', 'Sage X3 e-invoicing'],
    priority: 'P1',
    lastAudited: '2026-06-25',
    faq: [
      { question: 'Which European countries already mandate B2B e-invoicing?', answer: 'Italy (since 2019), Romania (since 2024), Poland (KSeF, 2026), France (PPF/PDP, phased 2024–2026), Hungary (RTIR), Greece (myDATA reporting), Spain (TicketBAI in Basque Country + Veri*Factu nationally). Germany phases in 2025–2028. Bulgaria is on consultation.' },
      { question: 'Is one platform enough to cover all of these?', answer: 'Yes, for enterprises. Multi-mandate platforms (Invoicemonk, Pagero, Sovos, Edicom, SAP DRC) abstract per-country differences behind a single schema engine and ERP connector.' },
      { question: 'How do enterprise platforms integrate with SAP and Oracle?', answer: 'Via certified extractors / connectors: SAP IDoc INVOIC or eDocument framework for SAP; SuiteApp + REST for NetSuite; Electronic Reporting for D365 F&O; certified Oracle Fusion adapter. Avoid platforms that offer only generic CSV import.' },
      { question: 'What does ViDA actually require enterprises to ship?', answer: 'EN 16931 structured digital reports for intra-EU B2B transactions in near-real-time of issuance, plus alignment with the revised Peppol BIS. Today\'s safe bet is platforms that already emit EN 16931 in production for non-EU mandates.' },
      { question: 'Is Peppol enough, or do I still need per-country integrations?', answer: 'Peppol covers B2G everywhere in the EU and B2B in some Nordic countries. National clearance regimes (IT SdI, FR PPF, ES TicketBAI, PL KSeF) bypass Peppol with their own portals — you need both.' },
      { question: 'How should we evaluate ERP-integration claims?', answer: 'Demand a 30-day sandbox with your actual master data and IDoc / API contracts. Validate bidirectional customer / supplier sync, webhook latency, and the failure-replay path.' },
    ],
    relatedTools: [
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: '16 mandates, one platform' },
      { label: 'SdI / FatturaPA', url: '/e-invoicing/sdi-italy', description: 'Italian mandate' },
      { label: 'Peppol EU', url: '/e-invoicing/peppol-eu', description: 'EU four-corner network' },
      { label: 'NRA Bulgaria', url: '/e-invoicing/nra-bulgaria', description: 'SAF-T + Peppol B2G' },
    ],
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
eInvoicingClusterPostsItalyBulgaria.forEach((post) => {
  if (!blogPosts.find((p) => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});