import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Blog Posts Cluster — E-Invoicing (Batch 2).
 *
 * Peppol EU cluster (HowTo, Explainer, Comparison) plus three
 * outer-entity supporting articles: Peppol Access Point, UBL 2.1, XAdES.
 *
 * Rewritten to a full Koray-grade semantic SEO contract (Batch 2):
 *  - Hero direct-answer paragraph (AI-overview ready).
 *  - At-a-glance fact box (entity-attribute-value triples).
 *  - Table of contents with anchors to every H2.
 *  - Macro/micro context, fan-out PAA H2/H3 questions.
 *  - Comparative tables and entity glossaries.
 *  - Authority citations (peppol.eu, eur-lex, oasis-open, etsi).
 *  - Compliance checklists, error catalogues.
 *  - Expanded FAQ blocks powering FAQPage schema.
 *  - Related-reading bridges to pillar, sub-source, siblings, glossary.
 *  - Internal links use the /__LANG__/... token rewritten by enhanceLinks.
 */
export const eInvoicingClusterPostsBatch2: BlogPost[] = [
  // ============================================================
  // Peppol EU — Archetype 1 (HowTo)
  // ============================================================
  {
    slug: 'how-to-comply-with-peppol-eu',
    title: 'How to Comply with Peppol in the EU: Connect, Validate, and Send Your First Invoice (2026)',
    excerpt: 'Step-by-step Peppol BIS Billing 3.0 onboarding for the EU — pick an Access Point, register your Participant ID, validate, send, handle MLR responses.',
    content: `<p><strong>To comply with Peppol in the EU, register through a certified Peppol Access Point, obtain a Peppol Participant Identifier in the SMP/SML directory, emit invoices in Peppol BIS Billing 3.0 (UBL 2.1 customisation of EN 16931), pass the official Schematron validation, and exchange documents AP-to-AP over AS4 with signed receipts. Belgium has mandated this for B2B since 1 January 2026; Germany requires B2B receipt since 1 January 2025; France switches on receipt for all businesses on 1 September 2026.</strong></p><div class="fact-box">
        <h3>At a glance</h3>
        <ul>
          <li><strong>Authority:</strong> OpenPeppol (governance) + national Peppol Authorities</li>
          <li><strong>Specification:</strong> Peppol BIS Billing 3.0 (current release: November 2025, v3.0.20)</li>
          <li><strong>Syntax:</strong> UBL 2.1 (OASIS Standard, 04 Nov 2013)</li>
          <li><strong>Transport:</strong> AS4 (Peppol AS4 Profile v2.0.3)</li>
          <li><strong>Applies to:</strong> B2G across all EU member states; B2B in Belgium (since 01 Jan 2026), Germany (receipt since 01 Jan 2025), France (receipt from 01 Sep 2026)</li>
          <li><strong>Live since:</strong> Network in production since 2008; BIS Billing 3.0 from 2019</li>
          <li><strong>Last reviewed:</strong> 23 June 2026</li>
        </ul>
      </div>

      <nav class="toc">
        <h3>On this page</h3><ul>
          <li><a href="#prereqs">Prerequisites before you onboard</a></li>
          <li><a href="#step-1">Step 1 — Choose a certified Peppol Access Point</a></li>
          <li><a href="#step-2">Step 2 — Register your Peppol Participant Identifier</a></li>
          <li><a href="#step-3">Step 3 — Declare the document types you accept</a></li>
          <li><a href="#step-4">Step 4 — Map your invoice to BIS Billing 3.0</a></li>
          <li><a href="#step-5">Step 5 — Validate against the Schematron rule set</a></li>
          <li><a href="#step-6">Step 6 — Send your first live invoice</a></li>
          <li><a href="#step-7">Step 7 — Handle MLR responses and rejections</a></li>
          <li><a href="#country-rules">Country-specific obligations on top of Peppol</a></li>
          <li><a href="#checklist">Pre-go-live compliance checklist</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      <h2>Why Peppol matters now</h2><p class="block-answer" data-answer="true">Peppol is the de facto EU rail for both e-invoicing for the EU and a growing list of national B2B mandates.</p><p>Peppol is the de facto EU rail for both <a href="/__LANG__/e-invoicing/peppol-eu">e-invoicing for the EU</a> and a growing list of national B2B mandates. Directive 2014/55/EU obliges every EU contracting authority to receive EN 16931 invoices — almost all do so via Peppol. The VAT in the Digital Age (ViDA) package, adopted by the Council on 11 March 2025, entered into force on 14 April 2025 and lets member states impose mandatory e-invoicing without prior derogation. That has unlocked the wave of national B2B mandates landing through 2026–2028.</p><h2 id="prereqs">Prerequisites before you onboard</h2><p class="block-answer" data-answer="true">Prerequisites before you onboard includes: A registered legal entity with a national identifier the Peppol Policy for Identifiers recognises (VAT number, national company number, GLN/0088, LEI/0199).   Buyer master data: each buyer's Peppol Participant Identifier (scheme::value) or enough information for an SMP lookup.</p><ul>
        <li>A registered legal entity with a national identifier the Peppol Policy for Identifiers recognises (VAT number, national company number, GLN/0088, LEI/0199).</li>
        <li>Buyer master data: each buyer's Peppol Participant Identifier (scheme::value) or enough information for an SMP lookup.</li>
        <li>An invoicing platform that emits UBL 2.1 in the Peppol BIS Billing 3.0 customisation and routes through a certified Access Point.</li>
        <li>If you also archive on-platform, a tamper-resistant store that meets your jurisdiction's retention period (10 years in Belgium, France and Germany; 7 in the Netherlands; see local rules).</li>
      </ul><h2 id="step-1">Step 1 — Choose a certified Peppol Access Point</h2><p class="block-answer" data-answer="true">You never connect to Peppol directly.  You connect through a certified Peppol Access Point ("AP") that speaks AS4 to every other AP on the network.</p><p>You never connect to Peppol directly. You connect through a certified Peppol Access Point ("AP") that speaks AS4 to every other AP on the network. Invoicemonk operates as an AP for customers in scope, so the AP step is bundled when you turn Peppol on inside the product.</p><h3>What should I check on a candidate AP?</h3><p class="block-answer" data-answer="true">Confirm active OpenPeppol certification, supported document types (at minimum BIS Billing 3. 0 Invoice and Credit Note), supported jurisdictions, AS4 conformance to Peppol AS4 Profile v2.</p><p>Confirm active OpenPeppol certification, supported document types (at minimum BIS Billing 3.0 Invoice and Credit Note), supported jurisdictions, AS4 conformance to Peppol AS4 Profile v2.0.3, and whether validation, MLR handling and archiving are bundled.</p><h3>Should I run my own Access Point?</h3><p class="block-answer" data-answer="true">Only at very high volume or if you resell Peppol connectivity.  Running an AP requires OpenPeppol certification, ongoing infrastructure, and continuous tracking of network policy changes through the OpenPeppol eDEC.</p><p>Only at very high volume or if you resell Peppol connectivity. Running an AP requires OpenPeppol certification, ongoing infrastructure, and continuous tracking of network policy changes through the OpenPeppol eDEC.</p><h2 id="step-2">Step 2 — Register your Peppol Participant Identifier</h2><p class="block-answer" data-answer="true">Your AP registers you in the Peppol SMP (Service Metadata Publisher) and the SML (Service Metadata Locator) so other senders can resolve you.  The Participant ID follows scheme::value.</p><p>Your AP registers you in the Peppol SMP (Service Metadata Publisher) and the SML (Service Metadata Locator) so other senders can resolve you. The Participant ID follows <code>scheme::value</code>. Common schemes: <code>0208</code> Belgian Crossroads Bank for Enterprises (CBE), <code>0184</code> Danish CVR, <code>0192</code> Norwegian Organisation Number, <code>0204</code> German LeitwegID for public buyers, <code>9925</code> Belgian VAT, <code>9930</code> German VAT.</p><h3>SML vs SMP — what is the difference?</h3><p class="block-answer" data-answer="true">The SML is the DNS-backed root directory pointing to the SMP that holds a participant's metadata.  The SMP holds the endpoint URL, certificate, and accepted document types.</p><p>The SML is the DNS-backed root directory pointing to the SMP that holds a participant's metadata. The SMP holds the endpoint URL, certificate, and accepted document types. The combination means any sender's AP can route to any receiver without bilateral setup.</p><h2 id="step-3">Step 3 — Declare the document types you accept</h2><p class="block-answer" data-answer="true">An AP publishes the document types your endpoint receives — typically urn:cen. eu:en16931:2017 (the BIS Billing 3.</p><p>An AP publishes the document types your endpoint receives — typically <code>urn:cen.eu:en16931:2017</code> (the BIS Billing 3.0 Invoice) and the corresponding Credit Note. Senders' APs check this list before they transmit; an undeclared type comes back as an SMP lookup error rather than a delivery.</p><h2 id="step-4">Step 4 — Map your invoice to BIS Billing 3.0</h2><p class="block-answer" data-answer="true">Peppol BIS Billing 3. 0 is a Core Invoice Usage Specification (CIUS) of EN 16931, expressed in UBL 2.</p><p>Peppol BIS Billing 3.0 is a Core Invoice Usage Specification (CIUS) of EN 16931, expressed in UBL 2.1. The mapping that catches most teams:</p><ul>
        <li><strong>Party identification</strong>: seller and buyer with Peppol-compatible scheme IDs.</li>
        <li><strong>Line items</strong>: classified with UNSPSC or CPV (UNCL 7143).</li>
        <li><strong>Unit codes</strong>: UN/ECE Recommendation 20 (<code>EA</code>, <code>HUR</code>, <code>KGM</code>…).</li>
        <li><strong>Tax category</strong>: UNCL 5305 (<code>S</code> standard, <code>Z</code> zero, <code>E</code> exempt, <code>AE</code> reverse charge, <code>K</code> intra-EU).</li>
        <li><strong>Payment means</strong>: UNCL 4461 (<code>30</code> credit transfer, <code>58</code> SEPA credit transfer, <code>59</code> SEPA direct debit).</li>
        <li><strong>Currency</strong>: ISO 4217, with optional tax accounting currency for non-EUR taxable supplies in EUR-denominated jurisdictions.</li>
      </ul><h2 id="step-5">Step 5 — Validate against the Schematron rule set</h2><p class="block-answer" data-answer="true">Run every outgoing document through the Peppol BIS Billing 3.</p><p>Run every outgoing document through the Peppol BIS Billing 3.0 Schematron at <code>docs.peppol.eu/poacc/billing/3.0/rules/</code>. Documents that fail validation are rejected at the receiving AP. Blocking sends until validation passes is the cheapest control you can put in place. The validator returns rule codes prefixed <code>BR-</code> (business rules from EN 16931), <code>BR-CO-</code> (calculation rules), <code>BR-S-</code> (VAT category rules), and <code>PEPPOL-</code> (Peppol-specific rules).</p><h2 id="step-6">Step 6 — Send your first live invoice</h2><p class="block-answer" data-answer="true">Step 6 — Send your first live invoice includes: Create the invoice as normal in your invoicing system.   The platform renders UBL 2.</p><ol>
        <li>Create the invoice as normal in your invoicing system.</li>
        <li>The platform renders UBL 2.1 in the BIS Billing 3.0 customisation.</li>
        <li>Your AP looks up the buyer's endpoint via SMP/SML.</li>
        <li>The document is transmitted to the buyer's AP over AS4, with non-repudiation receipts signed by both APs.</li>
        <li>The buyer's AP delivers it to the buyer's ERP or accounts payable system.</li>
      </ol><h2 id="step-7">Step 7 — Handle MLR responses and rejections</h2><p class="block-answer" data-answer="true">Buyers may return a Message Level Response (MLR) acknowledging or rejecting the document.  Treat MLR rejects the same way you would treat a bounced email — surface them in the invoice timeline, store the rejection reason code, and re-issue once corrected.</p><p>Buyers may return a Message Level Response (MLR) acknowledging or rejecting the document. Treat MLR rejects the same way you would treat a bounced email — surface them in the invoice timeline, store the rejection reason code, and re-issue once corrected. Typical reasons: unknown buyer reference, missing purchase order number, tax category mismatch, or party identifier mismatch.</p><h2 id="country-rules">Country-specific obligations on top of Peppol</h2><table>
        <thead><tr><th>Country</th><th>Status</th><th>Format</th><th>Reference</th></tr></thead>
        <tbody>
          <tr><td>Belgium</td><td>B2B mandatory since 01 Jan 2026; grace period ended 27 Mar 2026</td><td>Peppol BIS Billing 3.0</td><td>Royal Decree 18 Sep 2025</td></tr>
          <tr><td>France</td><td>Receipt for all from 01 Sep 2026; issuance phased (large/mid 01 Sep 2026, SMEs 01 Sep 2027)</td><td>Factur-X, UBL or CII via PDP/Peppol-PA</td><td>Loi de finances 2024 art. 91</td></tr>
          <tr><td>Germany</td><td>B2B receipt mandatory since 01 Jan 2025; issuance phased to 01 Jan 2028</td><td>XRechnung, ZUGFeRD ≥2.0.1, or Peppol BIS</td><td>Wachstumschancengesetz §14 UStG</td></tr>
          <tr><td>Italy</td><td>B2B + B2G via SDI since 2019</td><td>FatturaPA XML</td><td>Legge 205/2017</td></tr>
          <tr><td>Poland</td><td>KSeF B2B mandatory from 01 Feb 2026 (large), 01 Apr 2026 (others)</td><td>FA(2) XML; Peppol planned via gateway</td><td>Ministry of Finance announcement, Sept 2025</td></tr>
        </tbody>
      </table><h2 id="checklist">Pre-go-live compliance checklist</h2><p class="block-answer" data-answer="true">Pre-go-live compliance checklist includes: ☐ Participant ID registered in SMP + visible in SML.   ☐ Document type declarations include BIS Billing 3.</p><ul>
        <li>☐ Participant ID registered in SMP + visible in SML.</li>
        <li>☐ Document type declarations include BIS Billing 3.0 Invoice + Credit Note.</li>
        <li>☐ Schematron validation runs on every outgoing document.</li>
        <li>☐ AS4 receipts archived alongside the signed invoice.</li>
        <li>☐ MLR processing wired to the invoice timeline.</li>
        <li>☐ Country-specific overlays (XRechnung Leitweg ID, French PPF endpoint, Polish KSeF gateway) configured for your buyers.</li>
        <li>☐ Retention store proven against your longest jurisdiction (10 years for Belgium, France, Germany).</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Peppol compliance = AP + Participant ID + BIS Billing 3.  0 + Schematron + AS4 + MLR handling.</p><ul>
        <li>Peppol compliance = AP + Participant ID + BIS Billing 3.0 + Schematron + AS4 + MLR handling.</li>
        <li>Belgium, Germany and France are the immediate forcing functions for B2B in 2025–2027.</li>
        <li>ViDA does not mandate Peppol but its DRR (digital reporting requirements) effectively standardise on EN 16931 syntaxes.</li>
        <li>Run validation upstream of the AP — every Schematron error caught locally saves a network round-trip.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Start at the e-invoicing pillar, then the Peppol EU mandate page.  For background, read Peppol EU explained: scope, country mandates, and what changes in 2026.</p><p>Start at the <a href="/__LANG__/e-invoicing">e-invoicing pillar</a>, then the <a href="/__LANG__/e-invoicing/peppol-eu">Peppol EU mandate page</a>. For background, read <a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained: scope, country mandates, and what changes in 2026</a>. To compare to clearance regimes, read <a href="/__LANG__/blog/peppol-vs-national-portals">Peppol vs national portals</a>. For deep dives on the building blocks: <a href="/__LANG__/blog/what-is-peppol-access-point">what is a Peppol Access Point</a>, <a href="/__LANG__/blog/ubl-2-1-explained">UBL 2.1 explained</a>, and <a href="/__LANG__/blog/xades-digital-signatures-explained">XAdES digital signatures</a>.</p><h2 id="sources">Sources</h2><ul>
        <li><a href="https://docs.peppol.eu/poacc/billing/3.0/" rel="noopener noreferrer">OpenPeppol — Peppol BIS Billing 3.0 (November 2025 Release)</a></li>
        <li><a href="https://docs.peppol.eu/edelivery/as4/specification/" rel="noopener noreferrer">OpenPeppol — Peppol AS4 Profile v2.0.3</a></li>
        <li><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014L0055" rel="noopener noreferrer">Directive 2014/55/EU on electronic invoicing in public procurement</a></li>
        <li><a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" rel="noopener noreferrer">European Commission — VAT in the Digital Age (ViDA)</a></li>
        <li><a href="https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467108877/eInvoicing+in+Belgium" rel="noopener noreferrer">European Commission — eInvoicing in Belgium country factsheet</a></li>
        <li><a href="https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html" rel="noopener noreferrer">Bundesfinanzministerium — E-Rechnung FAQ (Germany)</a></li>
        <li><a href="https://entreprendre.service-public.gouv.fr/actualites/A15683?lang=en" rel="noopener noreferrer">Service-Public — France e-invoicing reform timetable</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> To comply with Peppol in the EU, register through a certified Peppol Access Point, obtain a Peppol Participant Identifier in the SMP/SML directory, emit invoices in Peppol BIS Billing 3.0 (UBL 2.1 customisation of EN 16931), pass the official Schematron validation, and exchange documents AP-to-AP over AS4 with signed receipts. Belgium has mandated this for B2B since 1 January 2026; Germany requires B2B receipt since 1 January 2025; France switches on receipt for all businesses on 1 September 2026.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['Peppol', 'EU', 'e-invoicing', 'compliance', 'how-to', 'BIS Billing 3.0'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-23',
    readTime: '14 min read',
    featuredImage: '/images/blog/einvoicing/how-to-comply-with-peppol-eu.jpg',
    featuredImageAlt: 'Peppol EU onboarding flow: Access Point, SMP/SML, BIS Billing 3.0, AS4',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/peppol-eu',
    semanticKeywords: ['Peppol onboarding', 'Peppol Access Point', 'BIS Billing 3.0', 'UBL 2.1 Peppol', 'AS4 Peppol', 'Peppol Participant Identifier', 'SMP SML lookup', 'Peppol Schematron validation', 'Peppol MLR', 'ViDA digital reporting'],
    priority: 'P1',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Do I need my own Peppol Access Point?', answer: 'No. Almost every sender uses a certified Access Point operated by their invoicing platform. Running your own AP requires OpenPeppol certification, AS4 infrastructure, and continuous tracking of OpenPeppol eDEC policy changes — only worth it at very high volume or if you resell Peppol connectivity.' },
      { question: 'Is Peppol the same as e-invoicing?', answer: 'No. Peppol is one network and standard for exchanging structured business documents. Many EU countries layer national mandates on top — France routes Peppol-compatible documents through a national platform (PPF/PDP), Italy uses SDI in parallel, Poland is bringing KSeF.' },
      { question: 'What is Peppol BIS Billing 3.0 vs EN 16931?', answer: 'EN 16931 is the European semantic standard. Peppol BIS Billing 3.0 is a Core Invoice Usage Specification (CIUS) of EN 16931, serialised in UBL 2.1, with additional Peppol Schematron rules and identifier scheme restrictions.' },
      { question: 'Which document types travel on Peppol?', answer: 'Invoices and credit notes are the dominant traffic. The network also carries orders, despatch advices, catalogues, order responses, and Message Level Responses (MLR) — anywhere from 65+ document types defined by UBL 2.1.' },
      { question: 'Is Belgium B2B Peppol mandatory in 2026?', answer: 'Yes. From 1 January 2026 most B2B transactions between Belgian VAT-registered taxpayers must be issued as structured electronic invoices via Peppol BIS. The FPS Finance grace period ended 27 March 2026 and full enforcement is now in effect.' },
      { question: 'Does Peppol satisfy the French e-invoicing reform?', answer: 'Partially. France requires invoices to flow through a Plateforme de Dématérialisation Partenaire (PDP) which routes via the Public Portal (PPF); most PDPs use Peppol under the hood, so a Peppol-compatible platform plugs into the French model — but you must also report the four French data flows (e-invoice, e-reporting B2C, e-reporting cross-border, lifecycle statuses).' },
      { question: 'How long must I keep Peppol invoices?', answer: 'Determined by national VAT law, not by Peppol itself. Belgium, France and Germany require 10 years; the Netherlands 7 years; Italy 10 years. Archive the signed UBL document plus the AS4 non-repudiation receipts.' },
    ],
    relatedTools: [
      { label: 'Peppol EU source page', url: '/e-invoicing/peppol-eu', description: 'How Invoicemonk implements Peppol for the EU' },
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: 'Global e-invoicing mandates overview' },
      { label: 'Peppol vs national portals', url: '/blog/peppol-vs-national-portals', description: 'Network vs clearance model comparison' },
    ],
  },

  // ============================================================
  // Peppol EU — Archetype 2 (Explainer)
  // ============================================================
  {
    slug: 'peppol-eu-explained',
    title: 'Peppol EU Explained: Scope, Country Mandates, and What Changes Through 2028',
    excerpt: 'Plain-English explainer for Peppol in the EU — the four-corner model, BIS Billing 3.0, country-by-country mandates, and the ViDA timetable to 2035.',
    content: `<p><strong>Peppol is the EU-governed network for exchanging structured business documents — most prominently invoices — between trading partners across borders. It runs on a four-corner model where senders and receivers transact through certified Access Points over AS4, using Peppol BIS Billing 3.0 (a UBL 2.1 customisation of EN 16931). It is mandatory for B2G across the EU under Directive 2014/55/EU, and now for B2B in Belgium (2026), Germany (phased 2025–2028), and France (phased 2026–2027). The VAT in the Digital Age (ViDA) package, adopted on 11 March 2025, rolls digital reporting requirements out to January 2035.</strong></p><div class="fact-box">
        <h3>At a glance</h3>
        <ul>
          <li><strong>Governance:</strong> OpenPeppol AISBL + national Peppol Authorities</li>
          <li><strong>Network model:</strong> Four-corner; AP-to-AP via AS4</li>
          <li><strong>Invoice standard:</strong> Peppol BIS Billing 3.0 (CIUS of EN 16931, UBL 2.1)</li>
          <li><strong>Lookup:</strong> SML (DNS) → SMP (metadata)</li>
          <li><strong>Mandatory for:</strong> EU B2G under Dir 2014/55/EU; B2B in BE (2026), DE (2025–2028), FR (2026–2027)</li>
          <li><strong>Wider context:</strong> ViDA package adopted 11 Mar 2025, in force 14 Apr 2025</li>
          <li><strong>Last reviewed:</strong> 23 June 2026</li>
        </ul>
      </div>

      <nav class="toc">
        <h3>On this page</h3><ul>
          <li><a href="#what">What Peppol actually is</a></li>
          <li><a href="#four-corner">The four-corner model in detail</a></li>
          <li><a href="#bis">The Peppol BIS Billing 3.0 specification</a></li>
          <li><a href="#mandates">Who must use Peppol today</a></li>
          <li><a href="#vida">What changes through ViDA (2025–2035)</a></li>
          <li><a href="#vs-clearance">How Peppol differs from clearance regimes</a></li>
          <li><a href="#glossary">Peppol glossary: 8 terms you need</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      <h2 id="what">What Peppol actually is</h2><p class="block-answer" data-answer="true">Peppol started as a 2008 EU-funded project (Pan-European Public Procurement Online) and is now governed by OpenPeppol AISBL, a non-profit incorporated in Belgium.</p><p>Peppol started as a 2008 EU-funded project (Pan-European Public Procurement Online) and is now governed by OpenPeppol AISBL, a non-profit incorporated in Belgium. Each member state has a Peppol Authority — for example the Belgian FPS Finance (BOSA), the Dutch NPa, the German KoSIT and the French DGFiP. The Peppol product is a network plus a set of business document specifications. The <a href="/__LANG__/e-invoicing/peppol-eu">Peppol EU mandate page</a> documents how Invoicemonk implements it; this article covers the regulation.</p><h2 id="four-corner">The four-corner model in detail</h2><p class="block-answer" data-answer="true">Peppol uses a four-corner model:</p><p>Peppol uses a four-corner model:</p><ul>
        <li><strong>Corner 1 (C1)</strong> — the sender (the invoicing application).</li>
        <li><strong>Corner 2 (C2)</strong> — the sender's certified Access Point.</li>
        <li><strong>Corner 3 (C3)</strong> — the receiver's certified Access Point.</li>
        <li><strong>Corner 4 (C4)</strong> — the receiver (the buyer's accounts payable system).</li>
      </ul><p>C1 and C4 never connect directly. C2 looks up C3 in the Peppol SML (Service Metadata Locator, a DNS-backed directory) and the SMP (Service Metadata Publisher) of the receiver, retrieves the endpoint URL, certificate, and accepted document types, then transmits over AS4 with non-repudiation receipts on both sides.</p><h3>Why a four-corner model and not point-to-point?</h3><p class="block-answer" data-answer="true">Point-to-point requires every sender to onboard every buyer bilaterally.  The four-corner model means any sender's AP can reach any receiver's AP without prior bilateral configuration — Peppol becomes "the email of B2B documents".</p><p>Point-to-point requires every sender to onboard every buyer bilaterally. The four-corner model means any sender's AP can reach any receiver's AP without prior bilateral configuration — Peppol becomes "the email of B2B documents".</p><h3>Where does the tax authority sit?</h3><p class="block-answer" data-answer="true">Outside the path.  Peppol carries documents buyer-to-buyer; tax reporting happens separately (national DRRs, future ViDA intra-community DRR).</p><p>Outside the path. Peppol carries documents buyer-to-buyer; tax reporting happens separately (national DRRs, future ViDA intra-community DRR). That is the key contrast with clearance models like ZATCA, MyInvois, or GST IRN, where the regulator sits inside the path.</p><h2 id="bis">The Peppol BIS Billing 3.0 specification</h2><p class="block-answer" data-answer="true">The current invoice standard is Peppol BIS Billing 3.</p><p>The current invoice standard is Peppol BIS Billing 3.0, with the November 2025 release at version 3.0.20. BIS Billing 3.0 is a Core Invoice Usage Specification (CIUS) of EN 16931, serialised as UBL 2.1, validated by a published Schematron rule set, and transmitted by Access Points. Every compliant Peppol invoice is therefore both a valid EN 16931 invoice and a valid UBL 2.1 document with Peppol's customisation layer on top.</p><h3>What is the role of Schematron?</h3><p class="block-answer" data-answer="true">Schematron files encode the business rules.  Rule codes are namespaced: BR-* for EN 16931 business rules, BR-CO-* for calculation rules, BR-S-* for VAT category rules, and PEPPOL-* for Peppol-only rules.</p><p>Schematron files encode the business rules. Rule codes are namespaced: <code>BR-*</code> for EN 16931 business rules, <code>BR-CO-*</code> for calculation rules, <code>BR-S-*</code> for VAT category rules, and <code>PEPPOL-*</code> for Peppol-only rules.</p><h3>What is the difference between CIUS and Extension?</h3><p class="block-answer" data-answer="true">A CIUS restricts EN 16931 (removes optionality, narrows code lists) without adding new elements.  An Extension adds new elements.</p><p>A CIUS restricts EN 16931 (removes optionality, narrows code lists) without adding new elements. An Extension adds new elements. Peppol BIS Billing 3.0 is a CIUS — that is why it remains EN 16931 compliant.</p><h2 id="mandates">Who must use Peppol today</h2><p class="block-answer" data-answer="true">EU public buyers (B2G): under Directive 2014/55/EU, every contracting authority must be able to receive EN 16931 invoices.  In practice almost all do so over Peppol.</p><ul>
        <li><strong>EU public buyers (B2G)</strong>: under <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014L0055" rel="noopener noreferrer">Directive 2014/55/EU</a>, every contracting authority must be able to receive EN 16931 invoices. In practice almost all do so over Peppol.</li>
        <li><strong>Belgium</strong>: B2B e-invoicing via Peppol BIS became mandatory on 1 January 2026 (Royal Decree of 18 September 2025); the FPS Finance grace period ended 27 March 2026 and full enforcement is in effect.</li>
        <li><strong>France</strong>: B2B reform begins 1 September 2026 with mandatory receipt for all businesses and mandatory issuance for large and mid-sized companies; SMEs and micro-enterprises join issuance from 1 September 2027. The model uses PDPs (private platforms) connected to the public portal.</li>
        <li><strong>Germany</strong>: B2B receipt of e-invoices mandatory since 1 January 2025 under the Wachstumschancengesetz; issuance obligations phased through 1 January 2028 with revenue thresholds. Permitted formats: XRechnung, ZUGFeRD ≥2.0.1, Peppol BIS.</li>
        <li><strong>Nordics, Netherlands, Luxembourg</strong>: Peppol is the de facto B2G rail and widely used for B2B.</li>
        <li><strong>Italy</strong>: SDI (FatturaPA) since 2019, with Peppol used for cross-border flows.</li>
        <li><strong>Poland</strong>: KSeF B2B mandatory from 1 February 2026 for large taxpayers (>PLN 200 million), 1 April 2026 for others; Peppol gateway in development.</li>
      </ul><h2 id="vida">What changes through ViDA (2025–2035)</h2><p class="block-answer" data-answer="true">The VAT in the Digital Age (ViDA) package was adopted by the Council on 11 March 2025 and entered into force on 14 April 2025.</p><p>The VAT in the Digital Age (ViDA) package was adopted by the Council on 11 March 2025 and entered into force on 14 April 2025. Three pillars:</p><ul>
        <li><strong>Digital Reporting Requirements (DRR)</strong>: from July 2030, all intra-EU B2B transactions must be reported in near-real-time using EN 16931 syntaxes; PDF-only invoices for those transactions become non-compliant.</li>
        <li><strong>Platform Economy</strong>: deemed supplier rules for short-term accommodation and passenger transport platforms from 1 January 2030.</li>
        <li><strong>Single VAT Registration</strong>: extended OSS scope from 1 January 2027.</li>
      </ul><p>Critically, ViDA removed the derogation requirement: since 14 April 2025, member states can mandate e-invoicing for domestic transactions without prior Commission approval. That is the legal lever behind the cascade of national B2B mandates landing in 2025–2026.</p><h2 id="vs-clearance">How Peppol differs from clearance regimes</h2><p class="block-answer" data-answer="true">Peppol is a delivery network — it routes documents between trading partners.  It is not a tax authority clearance system.</p><p>Peppol is a delivery network — it routes documents between trading partners. It is not a tax authority clearance system. Regimes like <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a> or <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois</a> require the tax authority to approve or receive every invoice in near real time; Peppol does not. The two models are compared in <a href="/__LANG__/blog/peppol-vs-national-portals">Peppol vs national portals</a>.</p><h2 id="glossary">Peppol glossary — 8 terms you need</h2><p class="block-answer" data-answer="true">Peppol glossary — 8 terms you need includes: Access Point (AP): certified Peppol service provider that sends/receives documents on behalf of a participant.   SML: Service Metadata Locator — DNS-backed root directory of all SMPs on the network.</p><ul>
        <li><strong>Access Point (AP)</strong>: certified Peppol service provider that sends/receives documents on behalf of a participant.</li>
        <li><strong>SML</strong>: Service Metadata Locator — DNS-backed root directory of all SMPs on the network.</li>
        <li><strong>SMP</strong>: Service Metadata Publisher — per-participant metadata (endpoint URL, certificate, accepted document types).</li>
        <li><strong>Participant Identifier</strong>: <code>scheme::value</code>, e.g. <code>0208::0123456789</code>.</li>
        <li><strong>AS4</strong>: OASIS messaging protocol (ebMS3 v3.0) profiled by Peppol AS4 v2.0.3 for AP-to-AP transmission.</li>
        <li><strong>BIS</strong>: Business Interoperability Specification — a usage profile of a base standard.</li>
        <li><strong>CIUS</strong>: Core Invoice Usage Specification — a restriction (no new elements) of EN 16931.</li>
        <li><strong>MLR</strong>: Message Level Response — receiver's acknowledgement or business-level reject of a document.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Peppol = four-corner network + BIS Billing 3.  0 standard + AS4 transport + SMP/SML lookup.</p><ul>
        <li>Peppol = four-corner network + BIS Billing 3.0 standard + AS4 transport + SMP/SML lookup.</li>
        <li>EU B2G compliance is universal under Directive 2014/55/EU. B2B is country-by-country.</li>
        <li>ViDA's adoption on 11 Mar 2025 unlocked the wave of national B2B mandates and sets the intra-EU DRR for 2030.</li>
        <li>Peppol is a network model — it does not replace clearance regimes outside the EU.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Pillar: e-invoicing.  Sub-source: Peppol EU mandate page.</p><p>Pillar: <a href="/__LANG__/e-invoicing">e-invoicing</a>. Sub-source: <a href="/__LANG__/e-invoicing/peppol-eu">Peppol EU mandate page</a>. Siblings: <a href="/__LANG__/blog/how-to-comply-with-peppol-eu">how to comply with Peppol in the EU</a>, <a href="/__LANG__/blog/peppol-vs-national-portals">Peppol vs national portals</a>, <a href="/__LANG__/blog/what-is-peppol-access-point">what is a Peppol Access Point</a>, <a href="/__LANG__/blog/ubl-2-1-explained">UBL 2.1 explained</a>, <a href="/__LANG__/blog/xades-digital-signatures-explained">XAdES digital signatures</a>.</p><h2 id="sources">Sources</h2><ul>
        <li><a href="https://docs.peppol.eu/poacc/billing/3.0/bis/" rel="noopener noreferrer">OpenPeppol — Peppol BIS Billing 3.0 (v3.0.20, Nov 2025)</a></li>
        <li><a href="https://docs.peppol.eu/edelivery/" rel="noopener noreferrer">OpenPeppol eDEC Specifications index</a></li>
        <li><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014L0055" rel="noopener noreferrer">Directive 2014/55/EU on e-invoicing in public procurement</a></li>
        <li><a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" rel="noopener noreferrer">European Commission — VAT in the Digital Age (ViDA)</a></li>
        <li><a href="https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467108886/eInvoicing+in+Germany" rel="noopener noreferrer">European Commission — eInvoicing in Germany factsheet</a></li>
        <li><a href="https://www.loyensloeff.com/insights/news--events/news/e-invoicing-in-belgium-as-from-1-january-2026-key-provisions-of-the-long-awaited-royal-decree/" rel="noopener noreferrer">Loyens &amp; Loeff — Belgian B2B Royal Decree analysis</a></li>
        <li><a href="https://entreprendre.service-public.gouv.fr/actualites/A15683?lang=en" rel="noopener noreferrer">Service-Public — France e-invoicing timetable</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> Peppol is the EU-governed network for exchanging structured business documents — most prominently invoices — between trading partners across borders. It runs on a four-corner model where senders and receivers transact through certified Access Points over AS4, using Peppol BIS Billing 3.0 (a UBL 2.1 customisation of EN 16931). It is mandatory for B2G across the EU under Directive 2014/55/EU, and now for B2B in Belgium (2026), Germany (phased 2025–2028), and France (phased 2026–2027). The VAT in the Digital Age (ViDA) package, adopted on 11 March 2025, rolls digital reporting requirements out to January 2035.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['Peppol', 'EU', 'e-invoicing', 'explainer', 'ViDA', 'BIS Billing 3.0'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-23',
    readTime: '13 min read',
    featuredImage: '/images/blog/einvoicing/peppol-eu-explained.jpg',
    featuredImageAlt: 'Peppol four-corner model with senders, Access Points, SMP, SML and receivers',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/peppol-eu',
    semanticKeywords: ['Peppol explained', 'Peppol BIS Billing 3.0', 'EN 16931', 'ViDA', 'four-corner model', 'Peppol SML', 'Peppol SMP', 'OpenPeppol', 'Peppol Authority', 'CIUS EN 16931'],
    priority: 'P1',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Is Peppol mandatory in the EU?', answer: 'Mandatory for sending invoices to EU public buyers under Directive 2014/55/EU. For B2B it is mandatory in Belgium (since 1 Jan 2026), Germany (receipt since 1 Jan 2025, issuance phased through 2028), and France (from 1 Sep 2026). Other member states are aligning under ViDA.' },
      { question: 'Is Peppol only for invoices?', answer: 'No. Peppol carries 60+ business document types including orders, despatch advices, catalogues, order responses, and Message Level Responses. Invoice flows are the most adopted because of regulation; procurement workflows are catching up.' },
      { question: 'Does Peppol replace national e-invoicing portals?', answer: 'Not always. France routes Peppol-compatible documents through a national platform (PPF) via certified PDPs; Italy uses SDI alongside Peppol for cross-border; Poland is building KSeF with a Peppol gateway. In those countries Peppol is the format and network, the national portal is the regulator-facing layer.' },
      { question: 'What is ViDA?', answer: 'VAT in the Digital Age — the EU package adopted by the Council on 11 March 2025 (in force 14 April 2025). Three pillars: digital reporting requirements for intra-EU B2B (live July 2030), platform economy deemed supplier rules (2030), and Single VAT Registration extension (2027). Rollout runs to January 2035.' },
      { question: 'What is the latest Peppol BIS Billing 3.0 version?', answer: 'The November 2025 Release at version 3.0.20, published at docs.peppol.eu/poacc/billing/3.0. Earlier 2025-Q4 release was v3.0.18. Always validate against the version your Access Point declares it supports.' },
      { question: 'What is the difference between CIUS and Extension under EN 16931?', answer: 'A CIUS restricts EN 16931 — it removes optional elements or narrows allowed code values — without adding new elements. An Extension adds new elements. Peppol BIS Billing 3.0 is a CIUS; XRechnung is also a CIUS; ZUGFeRD Extended adds elements (Extension).' },
    ],
    relatedTools: [
      { label: 'Peppol EU source page', url: '/e-invoicing/peppol-eu', description: 'How Invoicemonk implements Peppol for the EU' },
      { label: 'How to comply with Peppol', url: '/blog/how-to-comply-with-peppol-eu', description: 'Step-by-step onboarding' },
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: 'Global mandate overview' },
    ],
  },

  // ============================================================
  // Peppol EU — Archetype 3 (Comparison)
  // ============================================================
  {
    slug: 'peppol-vs-national-portals',
    title: 'Peppol vs National E-Invoicing Portals: Network Model vs Clearance Compared',
    excerpt: 'Side-by-side comparison of the Peppol four-corner network vs clearance portals (ZATCA, MyInvois, GST IRN, SDI, KSeF) on routing, latency, archiving, and obligations.',
    content: `<p><strong>Peppol is a four-corner delivery network: senders and receivers exchange invoices via certified Access Points over AS4, with the tax authority outside the path. Clearance portals (Saudi Arabia's ZATCA Phase 2, Malaysia's MyInvois, India's GST IRN, Italy's SDI, Poland's KSeF) put the tax authority inside the path — every invoice must be approved, validated, or registered by the regulator before or as it is delivered. Multinationals typically run both models in parallel and need a single platform that speaks both.</strong></p><div class="fact-box">
        <h3>At a glance</h3>
        <ul>
          <li><strong>Peppol model:</strong> four-corner network, AP-to-AP, regulator outside path</li>
          <li><strong>Clearance model:</strong> three- or five-corner, regulator gate before/at delivery</li>
          <li><strong>Peppol latency:</strong> seconds, AP-to-AP</li>
          <li><strong>Clearance latency:</strong> seconds to 72h depending on regime</li>
          <li><strong>Peppol coverage:</strong> EU + Australia, Singapore, NZ, Japan, US pilot</li>
          <li><strong>Clearance coverage:</strong> KSA, MY, IN, IT, PL, BR, MX, TR, CL, plus emerging mandates</li>
        </ul>
      </div>

      <nav class="toc">
        <h3>On this page</h3><ul>
          <li><a href="#routing">Routing model</a></li>
          <li><a href="#latency">Latency to delivery</a></li>
          <li><a href="#standard">Document standard</a></li>
          <li><a href="#archive">Archiving and retention</a></li>
          <li><a href="#hybrid">Hybrid jurisdictions</a></li>
          <li><a href="#matrix">Side-by-side matrix</a></li>
          <li><a href="#which">Which model applies to you?</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      <h2>Why the comparison matters</h2><p class="block-answer" data-answer="true">A team selling into the EU, Saudi Arabia, Malaysia, and India operates four different compliance regimes simultaneously.  Treating them as "all just e-invoicing" leads to a single integration that satisfies none of them.</p><p>A team selling into the EU, Saudi Arabia, Malaysia, and India operates four different compliance regimes simultaneously. Treating them as "all just e-invoicing" leads to a single integration that satisfies none of them. The split lives along one axis: <em>is the tax authority inside the invoice's delivery path or not?</em></p><h2 id="routing">Routing model</h2><p class="block-answer" data-answer="true">Routing model includes: Peppol (network): four-corner.   Sender → sender's Access Point → buyer's Access Point → buyer.</p><ul>
        <li><strong>Peppol (network)</strong>: four-corner. Sender → sender's Access Point → buyer's Access Point → buyer. The tax authority is not in the path.</li>
        <li><strong>ZATCA Phase 2 (clearance)</strong>: five-corner. ZATCA's Fatoora platform must clear or report each B2B invoice; the cleared XML is then delivered to the buyer.</li>
        <li><strong>MyInvois (clearance)</strong>: five-corner. LHDN validates the submission, returns a UUID and validation URL, then the buyer has 72 hours to reject.</li>
        <li><strong>GST IRN India (clearance)</strong>: three-corner. The supplier registers the invoice with the Invoice Registration Portal (IRP) and receives an IRN + signed QR before the invoice is legally valid for ITC.</li>
        <li><strong>SDI Italy (clearance)</strong>: three-corner. All invoices flow through Sistema di Interscambio; no SDI passage = no valid invoice.</li>
        <li><strong>KSeF Poland (clearance)</strong>: three-corner. From Feb 2026 for large taxpayers, all B2B invoices flow through KSeF and receive a KSeF reference number.</li>
      </ul><h2 id="latency">Latency to delivery</h2><p class="block-answer" data-answer="true">Latency to delivery includes: Peppol: typically &lt;5 seconds AP-to-AP for well-formed documents.   ZATCA Phase 2 B2B: synchronous clearance, sub-second to a few seconds.</p><ul>
        <li><strong>Peppol</strong>: typically &lt;5 seconds AP-to-AP for well-formed documents.</li>
        <li><strong>ZATCA Phase 2 B2B</strong>: synchronous clearance, sub-second to a few seconds. ZATCA is a hard dependency — if Fatoora is down, you cannot deliver.</li>
        <li><strong>MyInvois</strong>: validation seconds; UUID returned immediately; 72-hour buyer rejection window before final.</li>
        <li><strong>GST IRN India</strong>: IRN issuance typically &lt;2 seconds at the IRP.</li>
        <li><strong>SDI Italy</strong>: notifications within 5 days; most within minutes.</li>
        <li><strong>KSeF Poland</strong>: KSeF reference assigned at acceptance, usually within seconds.</li>
      </ul><h2 id="standard">Document standard</h2><table>
        <thead><tr><th>Regime</th><th>Syntax</th><th>Standard</th><th>Signature</th></tr></thead>
        <tbody>
          <tr><td>Peppol</td><td>UBL 2.1</td><td>Peppol BIS Billing 3.0 (CIUS of EN 16931)</td><td>AS4 message-level signature</td></tr>
          <tr><td>ZATCA Phase 2</td><td>UBL 2.1</td><td>KSA UBL 2.1 with KSA extensions</td><td>XAdES-B-B-Sig with CSID</td></tr>
          <tr><td>MyInvois</td><td>UBL 2.1 or JSON</td><td>LHDN Invoice v1.0</td><td>Digital signature on canonicalised payload</td></tr>
          <tr><td>GST IRN</td><td>JSON</td><td>GST INV-01 schema</td><td>IRP-signed QR with IRN</td></tr>
          <tr><td>SDI Italy</td><td>XML</td><td>FatturaPA 1.7.1</td><td>CAdES or XAdES with qualified certificate (B2B)</td></tr>
          <tr><td>KSeF Poland</td><td>XML</td><td>FA(2)</td><td>KSeF-issued reference number</td></tr>
        </tbody>
      </table><h2 id="archive">Archiving and retention</h2><p class="block-answer" data-answer="true">All six models require multi-year tamper-resistant archiving of the signed document.</p><p>All six models require multi-year tamper-resistant archiving of the signed document. Peppol leaves the archive entirely to the trading parties; clearance regimes hold a parallel copy with the regulator and impose stricter local retention:</p><ul>
        <li>Peppol (per national VAT law): 7–10 years.</li>
        <li>ZATCA Phase 2: 6 years (Saudi VAT Implementing Regulations Art. 66) with extension to 11 years for capital-asset documentation.</li>
        <li>MyInvois: 7 years (LHDN Tax Audit Framework).</li>
        <li>GST IRN India: 6 years from the end of the financial year (CGST Act §36).</li>
        <li>SDI Italy: 10 years (D.Lgs. 82/2005).</li>
        <li>KSeF: 10 years (statute of limitations on VAT).</li>
      </ul><h2 id="hybrid">Hybrid jurisdictions — France and Australia</h2><p class="block-answer" data-answer="true">Some regimes blur the line.  France's 2026 reform uses Peppol-compatible formats but routes them through a national Public Portal (PPF) via certified PDPs that report status, payment lifecycle, and aggregate tax data to the DGFiP — a clearance overlay on top of a network model.</p><p>Some regimes blur the line. France's 2026 reform uses Peppol-compatible formats but routes them through a national Public Portal (PPF) via certified PDPs that report status, payment lifecycle, and aggregate tax data to the DGFiP — a clearance overlay on top of a network model. Australia uses Peppol exclusively and has no clearance overlay.</p><h2 id="matrix">Side-by-side matrix</h2><table>
        <thead><tr><th>Dimension</th><th>Peppol</th><th>Clearance (ZATCA / MyInvois / GST IRN)</th></tr></thead>
        <tbody>
          <tr><td>Regulator in path</td><td>No</td><td>Yes</td></tr>
          <tr><td>Pre-delivery approval</td><td>No</td><td>Yes (or near-real-time)</td></tr>
          <tr><td>Buyer onboarding effort</td><td>Self-service via SMP</td><td>Tax-ID registration with regulator</td></tr>
          <tr><td>Cross-border reach</td><td>Native (EU + APAC)</td><td>Per-country only</td></tr>
          <tr><td>Identifier scheme</td><td>Peppol Participant ID</td><td>National Tax ID</td></tr>
          <tr><td>Validation</td><td>Schematron at AP</td><td>Regulator validates and signs</td></tr>
          <tr><td>Archive</td><td>Trading parties</td><td>Regulator + trading parties</td></tr>
        </tbody>
      </table><h2 id="which">Which model applies to you?</h2><p class="block-answer" data-answer="true">Usually both.  EU sales → Peppol.</p><p>Usually both. EU sales → Peppol. Sales in KSA, MY, IN, BR, MX, PL → that country's clearance regime. Italy → SDI. France → PPF/PDP overlay on Peppol. A single platform that speaks both models avoids parallel integrations and keeps the master invoice record consistent across regimes.</p><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: Network vs clearance is the cleanest mental model — everything else (latency, identifiers, archive) follows from it.   Peppol is the EU default; clearance is the global default outside the EU.</p><ul>
        <li>Network vs clearance is the cleanest mental model — everything else (latency, identifiers, archive) follows from it.</li>
        <li>Peppol is the EU default; clearance is the global default outside the EU.</li>
        <li>France and Poland are bridges — Peppol-compatible formats with a national clearance overlay.</li>
        <li>Build once on a platform that abstracts both models or you will rebuild every time a new mandate lands.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Pillar: e-invoicing.  Mandate pages: Peppol EU, ZATCA Phase 2, MyInvois Malaysia, GST IRN India.</p><p>Pillar: <a href="/__LANG__/e-invoicing">e-invoicing</a>. Mandate pages: <a href="/__LANG__/e-invoicing/peppol-eu">Peppol EU</a>, <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a>, <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois Malaysia</a>, <a href="/__LANG__/e-invoicing/gst-irn-india">GST IRN India</a>. Siblings: <a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a>, <a href="/__LANG__/blog/how-to-comply-with-peppol-eu">how to comply with Peppol in the EU</a>, <a href="/__LANG__/blog/what-is-peppol-access-point">what is a Peppol Access Point</a>.</p><h2 id="sources">Sources</h2><ul>
        <li><a href="https://docs.peppol.eu/poacc/billing/3.0/" rel="noopener noreferrer">OpenPeppol — Peppol BIS Billing 3.0 (November 2025)</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/Pages/default.aspx" rel="noopener noreferrer">ZATCA — E-Invoicing</a></li>
        <li><a href="https://www.hasil.gov.my/en/e-invoice/" rel="noopener noreferrer">LHDN — e-Invoice (Malaysia)</a></li>
        <li><a href="https://einvoice1.gst.gov.in/" rel="noopener noreferrer">GSTN — e-Invoice Portal (IRP)</a></li>
        <li><a href="https://www.fatturapa.gov.it/it/index.html" rel="noopener noreferrer">Agenzia delle Entrate — FatturaPA / SDI</a></li>
        <li><a href="https://www.podatki.gov.pl/ksef/" rel="noopener noreferrer">Ministerstwo Finansów — KSeF</a></li>
        <li><a href="https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en" rel="noopener noreferrer">European Commission — ViDA</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> Peppol is a four-corner delivery network: senders and receivers exchange invoices via certified Access Points over AS4, with the tax authority outside the path. Clearance portals (Saudi Arabia's ZATCA Phase 2, Malaysia's MyInvois, India's GST IRN, Italy's SDI, Poland's KSeF) put the tax authority inside the path — every invoice must be approved, validated, or registered by the regulator before or as it is delivered. Multinationals typically run both models in parallel and need a single platform that speaks both.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['Peppol', 'clearance', 'comparison', 'e-invoicing', 'ZATCA', 'MyInvois', 'GST IRN'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-23',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/peppol-vs-national-portals.jpg',
    featuredImageAlt: 'Peppol four-corner network compared to ZATCA, MyInvois, GST IRN, SDI clearance portals',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/e-invoicing/peppol-eu',
    semanticKeywords: ['Peppol vs clearance', 'four-corner model', 'ZATCA vs Peppol', 'MyInvois vs Peppol', 'GST IRN vs Peppol', 'SDI vs Peppol', 'KSeF vs Peppol', 'network vs clearance e-invoicing', 'e-invoicing routing models'],
    priority: 'P2',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Can Peppol replace ZATCA or MyInvois?', answer: 'No. Peppol is a delivery network; ZATCA and MyInvois are regulator clearance regimes. A Saudi or Malaysian taxpayer cannot satisfy local law by sending a Peppol document to the buyer — the regulator must be in the path.' },
      { question: 'Will the EU move from Peppol to a clearance model?', answer: 'The ViDA package introduces digital reporting requirements for intra-community B2B from July 2030 but stops short of mandating clearance for domestic transactions. Member states are free to implement national clearance regimes (Italy already has, France and Poland are bridging) as long as the format remains EN 16931 compatible.' },
      { question: 'Which is faster — Peppol or clearance?', answer: 'Peppol is generally faster in the steady state because there is no regulator gate, but the difference is seconds. The real cost difference is operational: clearance regimes make the regulator a hard runtime dependency, so platform availability targets must account for the regulator\'s SLA.' },
      { question: 'Do I need separate platforms for Peppol and clearance regimes?', answer: 'No, if you choose a platform that abstracts both. Modern e-invoicing platforms keep a single canonical invoice record and emit the right syntax + transport + signature stack per jurisdiction at send time.' },
      { question: 'Does France use Peppol or clearance?', answer: 'Both. France\'s 2026 reform uses Peppol-compatible formats (Factur-X, UBL, CII) routed through certified PDPs and the public PPF, with the DGFiP receiving lifecycle and reporting data — a clearance overlay on top of a network model.' },
    ],
    relatedTools: [
      { label: 'Peppol EU source page', url: '/e-invoicing/peppol-eu', description: 'Network model implementation' },
      { label: 'ZATCA Phase 2', url: '/e-invoicing/zatca-phase-2', description: 'Clearance model — Saudi Arabia' },
      { label: 'MyInvois Malaysia', url: '/e-invoicing/myinvois-malaysia', description: 'Clearance model — Malaysia' },
    ],
  },

  // ============================================================
  // Outer entity — Peppol Access Point
  // ============================================================
  {
    slug: 'what-is-peppol-access-point',
    title: 'What is a Peppol Access Point? The Four-Corner Model and AS4 in Plain English',
    excerpt: 'A Peppol Access Point is a certified service that sends and receives e-invoices on the Peppol network. Inside the four-corner model, SMP/SML lookup, AS4, and how to choose an AP.',
    content: `<p><strong>A Peppol Access Point (AP) is a certified service provider that sends and receives structured business documents on the Peppol network on behalf of a participant. APs sit at corners 2 and 3 of the four-corner model: they resolve the receiver's endpoint via the Peppol SML/SMP, transmit documents over AS4 with signed non-repudiation receipts, and validate against Peppol BIS Schematron. You almost never run your own AP — you use the one operated by your invoicing platform.</strong></p><div class="fact-box">
        <h3>At a glance</h3>
        <ul>
          <li><strong>Role:</strong> Corner 2 (sender's AP) and Corner 3 (receiver's AP) in the four-corner model</li>
          <li><strong>Transport:</strong> AS4 per Peppol AS4 Profile v2.0.3</li>
          <li><strong>Lookup:</strong> SML (DNS) → SMP (per-participant metadata)</li>
          <li><strong>Certification:</strong> OpenPeppol AP certification, renewed annually</li>
          <li><strong>Used for:</strong> invoices, credit notes, orders, despatch advices, catalogues, MLR</li>
          <li><strong>Last reviewed:</strong> 23 June 2026</li>
        </ul>
      </div>

      <nav class="toc">
        <h3>On this page</h3><ul>
          <li><a href="#four-corner">The four-corner model</a></li>
          <li><a href="#what-ap-does">What an Access Point actually does</a></li>
          <li><a href="#smp-sml">SMP and SML — how lookup works</a></li>
          <li><a href="#as4">AS4 transport — what's on the wire</a></li>
          <li><a href="#choose">How to choose an Access Point</a></li>
          <li><a href="#self-host">Should I run my own AP?</a></li>
          <li><a href="#fails">What fails in production</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      <h2>Why this term keeps appearing</h2><p class="block-answer" data-answer="true">If you read about Peppol in the EU, B2G procurement in the United States, or the upcoming Australian Peppol mandate, the term Peppol Access Point is everywhere.  It is the operational unit of the Peppol network — every document on Peppol touches at least two APs.</p><p>If you read about <a href="/__LANG__/e-invoicing/peppol-eu">Peppol in the EU</a>, B2G procurement in the United States, or the upcoming Australian Peppol mandate, the term <em>Peppol Access Point</em> is everywhere. It is the operational unit of the Peppol network — every document on Peppol touches at least two APs.</p><h2 id="four-corner">The four-corner model</h2><p class="block-answer" data-answer="true">Peppol is a four-corner network:</p><p>Peppol is a four-corner network:</p><ul>
        <li><strong>Corner 1 (C1)</strong> — the sender (the invoicing application).</li>
        <li><strong>Corner 2 (C2)</strong> — the sender's Access Point.</li>
        <li><strong>Corner 3 (C3)</strong> — the receiver's Access Point.</li>
        <li><strong>Corner 4 (C4)</strong> — the receiver (the buyer's AP/ERP system).</li>
      </ul><p>C1 and C4 never connect directly. C2 looks up C3 via SMP/SML, transmits over AS4, and the document lands at C4 via C3. Both APs sign non-repudiation receipts to prove delivery.</p><h2 id="what-ap-does">What an Access Point actually does</h2><p class="block-answer" data-answer="true">Identifies the receiver via SML + SMP — endpoint URL, certificate, supported document types from the receiver's Peppol Participant Identifier.  Transports the document over AS4 with signed receipts that prove delivery.</p><ul>
        <li><strong>Identifies</strong> the receiver via SML + SMP — endpoint URL, certificate, supported document types from the receiver's Peppol Participant Identifier.</li>
        <li><strong>Transports</strong> the document over AS4 with signed receipts that prove delivery.</li>
        <li><strong>Validates</strong> outgoing documents against the Peppol BIS Billing 3.0 Schematron and incoming documents against the same rules.</li>
        <li><strong>Acknowledges</strong> receipt and returns Message Level Responses (MLR) when the receiver business-rejects a document.</li>
        <li><strong>Reports</strong> traffic to OpenPeppol and the national Peppol Authority for monitoring.</li>
      </ul><h2 id="smp-sml">SMP and SML — how lookup works</h2><p class="block-answer" data-answer="true">The SML (Service Metadata Locator) is the DNS-backed root directory of all SMPs on the network, operated by the European Commission's DIGIT under the eDelivery building block.  The SMP (Service Metadata Publisher) is per-participant metadata: endpoint URL, public-key certificate, and accepted document types.</p><p>The SML (Service Metadata Locator) is the DNS-backed root directory of all SMPs on the network, operated by the European Commission's DIGIT under the eDelivery building block. The SMP (Service Metadata Publisher) is per-participant metadata: endpoint URL, public-key certificate, and accepted document types.</p><h3>Step-by-step lookup</h3><ol>
        <li>Sender's AP hashes the buyer's Participant Identifier and queries the SML via DNS.</li>
        <li>The SML returns the SMP URL for that participant.</li>
        <li>The sender's AP queries the SMP for the buyer's endpoint, certificate, and accepted document types.</li>
        <li>The sender's AP transmits over AS4 to the buyer's AP endpoint.</li>
      </ol><h2 id="as4">AS4 transport — what's on the wire</h2><p class="block-answer" data-answer="true">AS4 is the OASIS ebMS3 v3. 0 web-services profile, further restricted by the CEF eDelivery AS4 Profile v1.</p><p>AS4 is the OASIS ebMS3 v3.0 web-services profile, further restricted by the CEF eDelivery AS4 Profile v1.14 and then by the Peppol AS4 Profile v2.0.3. Each AS4 message includes a SOAP envelope with WS-Security headers, the UBL payload as a MIME attachment, and is signed using the AP's Peppol certificate. The receiver returns a non-repudiation receipt signed with its own certificate.</p><h2 id="choose">How to choose an Access Point</h2><p class="block-answer" data-answer="true">Confirm active OpenPeppol certification (renewed annually).  Check supported document types — at minimum BIS Billing 3.</p><ol>
        <li>Confirm active OpenPeppol certification (renewed annually).</li>
        <li>Check supported document types — at minimum BIS Billing 3.0 Invoice and Credit Note; ideally also order and despatch advice.</li>
        <li>Confirm jurisdictional coverage — most APs are cross-border, some restrict to specific Peppol Authorities.</li>
        <li>Confirm SLA — AP availability, support hours, escalation paths.</li>
        <li>Confirm ancillary services — Schematron validation, MLR handling, archiving, ERP connectors.</li>
        <li>Confirm pricing model — per-document, per-participant, or bundled with the invoicing platform.</li>
      </ol><h2 id="self-host">Should I run my own Access Point?</h2><p class="block-answer" data-answer="true">Almost certainly not.</p><p>Almost certainly not. Running an AP requires:</p><ul>
        <li>OpenPeppol AP certification, including security and conformance audits.</li>
        <li>Production AS4 infrastructure with HSM-backed signing keys.</li>
        <li>Continuous tracking of OpenPeppol eDEC policy changes (revised most months).</li>
        <li>Renewal of the Peppol PKI certificate annually.</li>
      </ul><p>Only large multinationals at very high volume or service providers reselling Peppol connectivity run their own AP. Everyone else uses the AP bundled with their invoicing platform — Invoicemonk operates as an AP for customers in scope.</p><h2 id="fails">What fails in production</h2><p class="block-answer" data-answer="true">SMP lookup miss: receiver not registered, or the wrong Participant scheme.  Verify via the Peppol Directory.</p><ul>
        <li><strong>SMP lookup miss</strong>: receiver not registered, or the wrong Participant scheme. Verify via the Peppol Directory.</li>
        <li><strong>Document type not declared</strong>: receiver's SMP does not advertise the type you sent. Coordinate with the buyer to add it.</li>
        <li><strong>Certificate chain failure</strong>: AP's Peppol certificate has expired or the trust anchor is stale.</li>
        <li><strong>Schematron failure on send</strong>: validation should be upstream of AS4 — otherwise the AP returns a hard reject.</li>
        <li><strong>MLR ignored</strong>: receiver business-rejects the document; if you do not process MLR, you do not know the invoice was rejected.</li>
        <li><strong>AS4 receipt loss</strong>: non-repudiation receipts must be archived alongside the signed UBL — otherwise you cannot prove delivery in a dispute.</li>
      </ul><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: An Access Point is the operational unit of Peppol — every document touches two.   Lookup is SML → SMP; transport is AS4; the AP also validates and handles MLR.</p><ul>
        <li>An Access Point is the operational unit of Peppol — every document touches two.</li>
        <li>Lookup is SML → SMP; transport is AS4; the AP also validates and handles MLR.</li>
        <li>Use the AP bundled with your invoicing platform — running your own is rarely worth it.</li>
        <li>The most common failure modes are SMP misses and declared-document-type mismatches, both fixed by coordination with the buyer.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Pillar: e-invoicing.  Mandate: Peppol EU.</p><p>Pillar: <a href="/__LANG__/e-invoicing">e-invoicing</a>. Mandate: <a href="/__LANG__/e-invoicing/peppol-eu">Peppol EU</a>. Siblings: <a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a>, <a href="/__LANG__/blog/how-to-comply-with-peppol-eu">how to comply with Peppol in the EU</a>, <a href="/__LANG__/blog/peppol-vs-national-portals">Peppol vs national portals</a>, <a href="/__LANG__/blog/ubl-2-1-explained">UBL 2.1 explained</a>.</p><h2 id="sources">Sources</h2><ul>
        <li><a href="https://docs.peppol.eu/edelivery/as4/specification/" rel="noopener noreferrer">OpenPeppol — Peppol AS4 Profile v2.0.3</a></li>
        <li><a href="https://docs.peppol.eu/edelivery/" rel="noopener noreferrer">OpenPeppol eDEC Specifications</a></li>
        <li><a href="https://ec.europa.eu/digital-building-blocks/sites/download/attachments/467118037/%28eDelivery%29%28SML%2BSMP%29%28COD%29%281.20%29.pdf" rel="noopener noreferrer">European Commission — SML &amp; SMP Component Offering (v1.20)</a></li>
        <li><a href="https://peppol.org/members/" rel="noopener noreferrer">OpenPeppol — Member directory (certified APs)</a></li>
        <li><a href="https://directory.peppol.eu/public" rel="noopener noreferrer">Peppol Directory (participant lookup)</a></li>
        <li><a href="https://docs.oasis-open.org/ebxml-msg/ebms/v3.0/core/os/ebms_core-3.0-spec-os.pdf" rel="noopener noreferrer">OASIS ebMS3 v3.0 specification (underpins AS4)</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> A Peppol Access Point (AP) is a certified service provider that sends and receives structured business documents on the Peppol network on behalf of a participant. APs sit at corners 2 and 3 of the four-corner model: they resolve the receiver's endpoint via the Peppol SML/SMP, transmit documents over AS4 with signed non-repudiation receipts, and validate against Peppol BIS Schematron. You almost never run your own AP — you use the one operated by your invoicing platform.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['Peppol', 'Access Point', 'e-invoicing', 'explainer', 'AS4', 'SMP'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-23',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/what-is-peppol-access-point.jpg',
    featuredImageAlt: 'Peppol four-corner model showing Access Points, SMP and SML lookup',
    pillarContent: false,
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['Peppol Access Point', 'AS4', 'SMP', 'SML', 'four-corner model', 'OpenPeppol certification', 'Peppol Participant Identifier', 'Peppol Directory', 'Peppol AP lookup'],
    priority: 'P2',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Is a Peppol Access Point the same as a Peppol service provider?', answer: 'In practice yes — most Peppol service providers are certified Access Points. The formal Peppol governance term is "OpenPeppol-certified Access Point provider".' },
      { question: 'How fast is delivery through an Access Point?', answer: 'Typically under 5 seconds for well-formed, validated documents. AS4 handshakes and signed receipts add latency in the low hundreds of milliseconds per hop, plus the SMP lookup round-trip (often cached).' },
      { question: 'Do both sender and receiver need an Access Point?', answer: 'Yes. The four-corner model requires an AP at corner 2 (sender side) and corner 3 (receiver side). Most platforms operate both sides for their customers.' },
      { question: 'How do I find my buyer\'s Peppol Participant Identifier?', answer: 'Query the public Peppol Directory at directory.peppol.eu, or ask the buyer for their Participant ID in scheme::value format. APs typically expose a lookup interface as well.' },
      { question: 'What happens if my Access Point goes down?', answer: 'Sending and receiving stop. AS4 is asynchronous so brief outages are typically transparent if both APs retry, but extended outages block delivery. Choose an AP with documented SLA and 24/7 support.' },
      { question: 'Can I switch Access Points?', answer: 'Yes. Your Participant ID is transferable — the new AP updates the SMP entry to point to its endpoint. There is a brief propagation window during DNS cache expiry.' },
    ],
    relatedTools: [
      { label: 'Peppol EU source page', url: '/e-invoicing/peppol-eu', description: 'Peppol implementation' },
      { label: 'How to comply with Peppol', url: '/blog/how-to-comply-with-peppol-eu', description: 'Step-by-step onboarding' },
    ],
  },

  // ============================================================
  // Outer entity — UBL 2.1
  // ============================================================
  {
    slug: 'ubl-2-1-explained',
    title: 'UBL 2.1 Explained: The XML Standard Behind Modern E-Invoicing',
    excerpt: 'UBL 2.1 is the OASIS XML standard for business documents. We explain the 65 document types, the extension model, and how Peppol BIS, ZATCA, and MyInvois customise it.',
    content: `<p><strong>UBL 2.1 (Universal Business Language version 2.1) is the OASIS XML standard for representing 65 business document types — orders, despatch advices, invoices, credit notes, catalogues, statements. It was ratified as an OASIS Standard on 4 November 2013 and is the canonical XML syntax for EN 16931 in Europe, the base format for Peppol BIS Billing 3.0, ZATCA Phase 2 KSA, MyInvois Malaysia, and several other regimes. Every regulator that picked UBL 2.1 did so because it is open, royalty-free, schema-validated, and supports jurisdiction-specific extensions without breaking interoperability.</strong></p><div class="fact-box">
        <h3>At a glance</h3>
        <ul>
          <li><strong>Publisher:</strong> OASIS Universal Business Language Technical Committee</li>
          <li><strong>Version:</strong> 2.1 (OASIS Standard, 4 November 2013)</li>
          <li><strong>Document types:</strong> 65 (invoice, credit note, order, despatch advice, catalogue, etc.)</li>
          <li><strong>Syntax:</strong> XML with XSD schemas</li>
          <li><strong>Customisation:</strong> CIUS (restrict) and Extension (add) per EN 16931</li>
          <li><strong>Used by:</strong> Peppol BIS Billing 3.0, ZATCA Phase 2, MyInvois, XRechnung, Factur-X, OIOUBL, A-NZ Peppol BIS</li>
          <li><strong>Last reviewed:</strong> 23 June 2026</li>
        </ul>
      </div>

      <nav class="toc">
        <h3>On this page</h3><ul>
          <li><a href="#what">What UBL 2.1 actually is</a></li>
          <li><a href="#why">Why regulators chose UBL 2.1</a></li>
          <li><a href="#structure">Invoice structure — the key blocks</a></li>
          <li><a href="#customisations">How each regime customises it</a></li>
          <li><a href="#vs-cii">UBL 2.1 vs CII (UN/CEFACT)</a></li>
          <li><a href="#vs-en16931">UBL 2.1 vs EN 16931</a></li>
          <li><a href="#platform">What this means for your platform</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      <h2>Why UBL 2.1 keeps appearing</h2><p class="block-answer" data-answer="true">If you read the spec for almost any current e-invoicing mandate — Peppol, ZATCA Phase 2, MyInvois — UBL 2. 1 is underneath.</p><p>If you read the spec for almost any current e-invoicing mandate — <a href="/__LANG__/e-invoicing/peppol-eu">Peppol</a>, <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a>, <a href="/__LANG__/e-invoicing/myinvois-malaysia">MyInvois</a> — UBL 2.1 is underneath. Knowing it is what lets you debug rejections.</p><h2 id="what">What UBL 2.1 actually is</h2><p class="block-answer" data-answer="true">UBL — Universal Business Language — is an OASIS XML standard for procure-to-pay business documents.</p><p>UBL — Universal Business Language — is an OASIS XML standard for procure-to-pay business documents. Version 2.1 was ratified by OASIS on 4 November 2013 and defines 65 document types: invoice, credit note, order, order response, despatch advice, receipt advice, catalogue, application response (used for MLR), statement, remittance advice, and more. The schemas live at <code>docs.oasis-open.org/ubl/os-UBL-2.1/</code>.</p><h2 id="why">Why regulators chose UBL 2.1</h2><p class="block-answer" data-answer="true">Open OASIS standard with no licensing cost.  Coverage of every procure-to-pay document a tax authority cares about.</p><ul>
        <li>Open OASIS standard with no licensing cost.</li>
        <li>Coverage of every procure-to-pay document a tax authority cares about.</li>
        <li>Strong extension model (UBL extensions container) lets jurisdictions add country-specific fields without breaking core interoperability.</li>
        <li>Tooling exists in every language (Java, .NET, Python, PHP, Go, Node).</li>
        <li>It is the syntax EN 16931 chose, which made it the default across the EU.</li>
      </ul><h2 id="structure">Invoice structure — the key blocks</h2><p class="block-answer" data-answer="true">Invoice structure — the key blocks includes: cbc:CustomizationID — identifies the CIUS/Extension (e.  g.</p><ul>
        <li><code>cbc:CustomizationID</code> — identifies the CIUS/Extension (e.g. <code>urn:cen.eu:en16931:2017#compliant#urn:fdc:peppol.eu:2017:poacc:billing:3.0</code> for Peppol BIS 3.0).</li>
        <li><code>cbc:ProfileID</code> — business process (e.g. <code>urn:fdc:peppol.eu:2017:poacc:billing:01:1.0</code>).</li>
        <li><code>cac:AccountingSupplierParty</code> + <code>cac:AccountingCustomerParty</code> — party data with identification schemes.</li>
        <li><code>cac:InvoiceLine</code> — per-line item, quantity, price, tax category.</li>
        <li><code>cac:TaxTotal</code> + <code>cac:TaxSubtotal</code> — VAT breakdown by category.</li>
        <li><code>cac:LegalMonetaryTotal</code> — totals: line extension, tax exclusive, tax inclusive, payable.</li>
        <li><code>cac:PaymentMeans</code> — UNCL 4461 payment method code + IBAN/BIC.</li>
        <li><code>ext:UBLExtensions</code> — container for jurisdiction-specific extensions (ZATCA QR + signature; XRechnung Leitweg-ID).</li>
      </ul><h2 id="customisations">How each regime customises it</h2><p class="block-answer" data-answer="true">Peppol BIS Billing 3. 0: CIUS of EN 16931 in UBL 2.</p><ul>
        <li><strong>Peppol BIS Billing 3.0</strong>: CIUS of EN 16931 in UBL 2.1 with Peppol Schematron rules and restricted identifier schemes.</li>
        <li><strong>ZATCA Phase 2 (Saudi Arabia)</strong>: UBL 2.1 with KSA extensions for the Previous Invoice Hash (PIH), TLV QR, XAdES signature with CSID, Arabic seller name, and KSA invoice type subtype codes.</li>
        <li><strong>MyInvois (Malaysia)</strong>: UBL 2.1 (JSON profile also accepted) with LHDN-issued UUID, validation URL embedded as QR, and additional MSIC industry code.</li>
        <li><strong>XRechnung (Germany B2G)</strong>: CIUS of EN 16931 in UBL 2.1 or CII with mandatory Leitweg-ID buyer reference.</li>
        <li><strong>OIOUBL (Denmark)</strong>: Denmark's pre-EN 16931 profile; still in use alongside Peppol BIS.</li>
        <li><strong>A-NZ Peppol BIS (Australia/New Zealand)</strong>: Peppol BIS 3.0 with A-NZ identifier schemes and GST-specific rules.</li>
      </ul><h2 id="vs-cii">UBL 2.1 vs CII (UN/CEFACT)</h2><p class="block-answer" data-answer="true">EN 16931 permits two syntaxes: UBL 2. 1 (OASIS) and UN/CEFACT Cross Industry Invoice (CII).</p><p>EN 16931 permits two syntaxes: UBL 2.1 (OASIS) and UN/CEFACT Cross Industry Invoice (CII). UBL is more widely tooled and adopted; CII is mandatory for some German federal use cases and is the XML inside ZUGFeRD/Factur-X hybrid PDFs. Most platforms convert between the two internally so the user picks one canonical model.</p><h2 id="vs-en16931">UBL 2.1 vs EN 16931</h2><p class="block-answer" data-answer="true">EN 16931 is the European semantic standard — it defines what fields a compliant invoice must carry.  UBL 2.</p><p>EN 16931 is the European semantic standard — it defines what fields a compliant invoice must carry. UBL 2.1 is one of the two permitted syntaxes (the other is CII). When you read "Peppol BIS Billing 3.0", read it as "EN 16931 semantic, in UBL 2.1 syntax, with Peppol's CIUS layer".</p><h2 id="platform">What this means for your platform</h2><p class="block-answer" data-answer="true">You should not be hand-writing UBL 2. 1.</p><p>You should not be hand-writing UBL 2.1. The right abstraction is a logical invoice object; the platform serialises that to UBL 2.1 in the customisation profile the destination mandate requires. Invoicemonk emits UBL 2.1 in the Peppol BIS Billing 3.0, ZATCA KSA, MyInvois, and XRechnung profiles from the same invoice record.</p><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: UBL 2.  1 = OASIS XML standard, 65 document types, ratified 2013.</p><ul>
        <li>UBL 2.1 = OASIS XML standard, 65 document types, ratified 2013.</li>
        <li>It is the syntax under almost every modern e-invoicing mandate.</li>
        <li>Customisations layer on top: CIUS to restrict, Extension to add.</li>
        <li>Abstract the invoice as data, let the platform handle the syntax.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Pillar: e-invoicing.  Siblings: XAdES digital signatures explained, what is a Peppol Access Point, Peppol EU explained.</p><p>Pillar: <a href="/__LANG__/e-invoicing">e-invoicing</a>. Siblings: <a href="/__LANG__/blog/xades-digital-signatures-explained">XAdES digital signatures explained</a>, <a href="/__LANG__/blog/what-is-peppol-access-point">what is a Peppol Access Point</a>, <a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a>.</p><h2 id="sources">Sources</h2><ul>
        <li><a href="https://docs.oasis-open.org/ubl/os-UBL-2.1/UBL-2.1.html" rel="noopener noreferrer">OASIS — Universal Business Language Version 2.1 (OASIS Standard, 4 Nov 2013)</a></li>
        <li><a href="https://docs.oasis-open.org/ubl/UBL-2.1.pdf" rel="noopener noreferrer">OASIS — UBL 2.1 PDF specification</a></li>
        <li><a href="https://docs.peppol.eu/poacc/billing/3.0/syntax/ubl-invoice/tree/" rel="noopener noreferrer">Peppol BIS Billing 3.0 — UBL Invoice tree</a></li>
        <li><a href="https://www.cen.eu/news/brief-news/Pages/NEWS-2017-014.aspx" rel="noopener noreferrer">CEN — EN 16931 publication notice</a></li>
        <li><a href="https://xeinkauf.de/xrechnung/" rel="noopener noreferrer">KoSIT — XRechnung specification (German B2G CIUS)</a></li>
        <li><a href="https://unece.org/trade/uncefact/mainstandards" rel="noopener noreferrer">UN/CEFACT — Cross Industry Invoice (alternative syntax)</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> UBL 2.1 (Universal Business Language version 2.1) is the OASIS XML standard for representing 65 business document types — orders, despatch advices, invoices, credit notes, catalogues, statements. It was ratified as an OASIS Standard on 4 November 2013 and is the canonical XML syntax for EN 16931 in Europe, the base format for Peppol BIS Billing 3.0, ZATCA Phase 2 KSA, MyInvois Malaysia, and several other regimes. Every regulator that picked UBL 2.1 did so because it is open, royalty-free, schema-validated, and supports jurisdiction-specific extensions without breaking interoperability.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['UBL 2.1', 'XML', 'standards', 'e-invoicing', 'EN 16931'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-23',
    readTime: '11 min read',
    featuredImage: '/images/blog/einvoicing/ubl-2-1-explained.jpg',
    featuredImageAlt: 'UBL 2.1 document model and customisations for Peppol, ZATCA, MyInvois, XRechnung',
    pillarContent: false,
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['UBL 2.1', 'EN 16931', 'Peppol BIS 3.0', 'ZATCA UBL', 'MyInvois UBL', 'XRechnung CIUS', 'OASIS UBL', 'UBL Invoice schema', 'UBL extension'],
    priority: 'P2',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'Is UBL 2.1 the same as Peppol BIS Billing 3.0?', answer: 'No. UBL 2.1 is the XML syntax; Peppol BIS Billing 3.0 is a CIUS that fixes certain UBL fields, restricts code lists, and adds Schematron rules. Every Peppol BIS invoice is a UBL 2.1 invoice; not every UBL 2.1 invoice is Peppol BIS compliant.' },
      { question: 'Will UBL 3 replace UBL 2.1?', answer: 'UBL 2.x has been the active version for over a decade. Any move to UBL 3 would need ratification by OASIS plus migration by every regulator that has built mandates on top of 2.1. A near-term migration is unlikely; UBL 2.1 will dominate through the ViDA timetable to 2035.' },
      { question: 'What is the difference between UBL and EDIFACT?', answer: 'EDIFACT is the pre-XML EDI standard from UN/CEFACT — fixed-position text, segment-based, used heavily in supply chain since the 1980s. UBL is the XML-era replacement with the same semantic coverage but schema-validated and far easier to tool. Most B2G mandates moved to UBL; some private supply chains still use EDIFACT.' },
      { question: 'How do I validate a UBL 2.1 document?', answer: 'Two layers: XSD validation against the OASIS UBL 2.1 schema (structural), and Schematron validation against the relevant CIUS rule set (business rules). Most APs and validators run both automatically.' },
      { question: 'Can UBL 2.1 carry attachments?', answer: 'Yes. The <cac:AdditionalDocumentReference> element with an <cac:Attachment> embedded as base64 inside <cbc:EmbeddedDocumentBinaryObject>. Many regulators (e.g. France PDP) require the human-readable PDF as an attachment alongside the structured UBL.' },
    ],
    relatedTools: [
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: 'How Invoicemonk implements global e-invoicing mandates' },
      { label: 'XAdES signatures', url: '/blog/xades-digital-signatures-explained', description: 'How UBL documents are signed' },
    ],
  },

  // ============================================================
  // Outer entity — XAdES
  // ============================================================
  {
    slug: 'xades-digital-signatures-explained',
    title: 'XAdES Digital Signatures Explained: How E-Invoices Are Signed and Verified',
    excerpt: 'XAdES is the ETSI XML signature standard used by ZATCA, Peppol, and other e-invoicing regimes. Inside the baseline levels (B-B, B-T, B-LT, B-LTA), certificate chains, and what fails in production.',
    content: `<p><strong>XAdES (XML Advanced Electronic Signatures) is the ETSI standard — EN 319 132-1 — that extends the XML Digital Signature (XML-DSig) specification with the additional properties needed for long-term legal validity. It defines four baseline levels — B-B, B-T, B-LT, B-LTA — that progressively add timestamps, validation material, and archive timestamps. ZATCA Phase 2 uses XAdES-B-B-Sig with the CSID; Peppol signs the AS4 envelope and optionally the UBL payload; many EU qualified e-signature flows use XAdES-B-LT or B-LTA for 10-year retention.</strong></p><div class="fact-box">
        <h3>At a glance</h3>
        <ul>
          <li><strong>Publisher:</strong> ETSI Technical Committee ESI</li>
          <li><strong>Reference:</strong> ETSI EN 319 132-1 v1.3.1 (July 2024)</li>
          <li><strong>Builds on:</strong> W3C XML Digital Signature (XML-DSig)</li>
          <li><strong>Baseline levels:</strong> B-B, B-T, B-LT, B-LTA</li>
          <li><strong>Used by:</strong> ZATCA Phase 2, Peppol (envelope + optional payload), eIDAS qualified flows, NF-e Brazil (CAdES variant), ZIMRA Zimbabwe</li>
          <li><strong>Last reviewed:</strong> 23 June 2026</li>
        </ul>
      </div>

      <nav class="toc">
        <h3>On this page</h3><ul>
          <li><a href="#what">What XAdES actually is</a></li>
          <li><a href="#levels">The baseline signature levels</a></li>
          <li><a href="#by-regime">How each regime uses XAdES</a></li>
          <li><a href="#cert-chain">Certificates, chains, and trust anchors</a></li>
          <li><a href="#canonical">Canonicalisation — the silent killer</a></li>
          <li><a href="#fails">What fails in production</a></li>
          <li><a href="#platform">What this means for your platform</a></li>
          <li><a href="#sources">Sources</a></li>
        </ul>
      </nav>

      <h2>Why XAdES matters</h2><p class="block-answer" data-answer="true">Almost every current e-invoicing mandate that signs documents at rest — ZATCA Phase 2, Peppol for some flows, MTD UK for VAT submissions — relies on XAdES.  Knowing the levels is what lets you diagnose "signature invalid" rejections.</p><p>Almost every current e-invoicing mandate that signs documents at rest — <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a>, <a href="/__LANG__/e-invoicing/peppol-eu">Peppol</a> for some flows, <a href="/__LANG__/e-invoicing/mtd-uk">MTD UK</a> for VAT submissions — relies on XAdES. Knowing the levels is what lets you diagnose "signature invalid" rejections.</p><h2 id="what">What XAdES actually is</h2><p class="block-answer" data-answer="true">XAdES — XML Advanced Electronic Signatures — is the ETSI standard ETSI EN 319 132-1 (current version v1.</p><p>XAdES — XML Advanced Electronic Signatures — is the ETSI standard ETSI EN 319 132-1 (current version v1.3.1, July 2024) that extends W3C XML-DSig with the properties needed for long-term legal validity: signed and unsigned properties for signing certificate, signing time, timestamps, validation data, and archive timestamps. It is the XML cousin of CAdES (for binary data, used by Brazil's NF-e) and PAdES (for PDFs, used by France's Factur-X human-readable layer).</p><h2 id="levels">The baseline signature levels</h2><p class="block-answer" data-answer="true">The baseline signature levels includes: XAdES-B-B (Baseline): Signature with the signer's certificate.   Proves the document was signed by the holder of that certificate at some unspecified moment.</p><ul>
        <li><strong>XAdES-B-B (Baseline)</strong>: Signature with the signer's certificate. Proves the document was signed by the holder of that certificate at some unspecified moment.</li>
        <li><strong>XAdES-B-T (with Timestamp)</strong>: Adds a trusted timestamp from a TSA (Time-Stamping Authority). Proves the signature existed at a specific point in time.</li>
        <li><strong>XAdES-B-LT (Long-Term)</strong>: Embeds the full certificate chain and revocation data (CRL/OCSP) needed to validate the signature years later, even if the issuing CA is gone.</li>
        <li><strong>XAdES-B-LTA</strong>: Adds archive timestamps for indefinite preservation; the archive timestamp is renewed periodically to chain cryptographic strength across decades.</li>
      </ul><p>Each higher level is a strict superset of the one below.</p><h2 id="by-regime">How each regime uses XAdES</h2><p class="block-answer" data-answer="true">ZATCA Phase 2 (Saudi Arabia): XAdES-B-B-Sig embedded in the UBL 2. 1 invoice's UBLExtensions, signed with the Production CSID issued by ZATCA.</p><ul>
        <li><strong>ZATCA Phase 2 (Saudi Arabia)</strong>: XAdES-B-B-Sig embedded in the UBL 2.1 invoice's <code>UBLExtensions</code>, signed with the Production CSID issued by ZATCA. The signed digest is bound into the TLV QR. Algorithm: SHA-256 with RSA-PSS.</li>
        <li><strong>Peppol</strong>: The AS4 transport layer signs the SOAP envelope with the AP's Peppol certificate. Some receivers additionally require XAdES on the UBL payload itself for non-repudiation at rest.</li>
        <li><strong>NF-e (Brazil)</strong>: Uses XAdES with country-specific CAs (ICP-Brasil A1/A3 certificates). NFC-e uses the same chain.</li>
        <li><strong>ZIMRA (Zimbabwe)</strong>: ZIMRA-issued certificates with country-specific trust anchors.</li>
        <li><strong>eIDAS qualified signatures</strong>: XAdES-B-LT or B-LTA with a qualified certificate from an EU Trust Service Provider listed in the EU Trusted List.</li>
      </ul><h2 id="cert-chain">Certificates, chains, and trust anchors</h2><p class="block-answer" data-answer="true">A XAdES signature is only as trustworthy as the certificate that signs it.</p><p>A XAdES signature is only as trustworthy as the certificate that signs it. Three building blocks:</p><ul>
        <li><strong>End-entity certificate</strong> — the signer's certificate (e.g. ZATCA Production CSID, Peppol AP certificate).</li>
        <li><strong>Certificate chain</strong> — intermediate CAs linking the end-entity to a trusted root.</li>
        <li><strong>Trust anchor</strong> — the root the verifier trusts (ZATCA Root CA, Peppol Root, eIDAS EU Trusted List, ICP-Brasil Root).</li>
      </ul><p>For B-LT and B-LTA the verifier must also have access to revocation information (CRL or OCSP responses) captured at signing time, not at verification time — otherwise a revoked-since cert breaks validity.</p><h2 id="canonical">Canonicalisation — the silent killer</h2><p class="block-answer" data-answer="true">XML can be serialised multiple ways for the same logical content (attribute order, whitespace, namespace prefixes).</p><p>XML can be serialised multiple ways for the same logical content (attribute order, whitespace, namespace prefixes). The signature is over a <em>canonicalised</em> form, so signer and verifier must use the same canonicalisation algorithm. Peppol and most modern profiles require Exclusive C14N (<code>http://www.w3.org/2001/10/xml-exc-c14n#</code>). Re-emitting XML after signing — even with no semantic change — invalidates the signature.</p><h2 id="fails">What fails in production</h2><p class="block-answer" data-answer="true">Clock drift: XAdES-B-T fails if the signing host clock differs from the TSA by more than a few seconds.  Sync with NTP — most TSAs allow ±5 minutes but some are stricter.</p><ol>
        <li><strong>Clock drift</strong>: XAdES-B-T fails if the signing host clock differs from the TSA by more than a few seconds. Sync with NTP — most TSAs allow ±5 minutes but some are stricter.</li>
        <li><strong>Canonicalisation mismatches</strong>: Signing one canonical form, verifying another. Always sign post-canonicalisation with Exclusive C14N.</li>
        <li><strong>Certificate expiry or revocation</strong>: A Production CSID rotates annually. A platform that does not rotate certificates ahead of expiry will fail clearance overnight.</li>
        <li><strong>Wrong digest algorithm</strong>: Regulators moved from SHA-1 → SHA-256 long ago; ZATCA explicitly requires SHA-256. Using a deprecated digest gets rejected.</li>
        <li><strong>Namespace prefix shuffling</strong>: Some implementations re-emit XML with different prefixes after signing. Even a prefix change invalidates the signature under standard C14N.</li>
        <li><strong>Missing revocation data on B-LT</strong>: Capturing CRL/OCSP at verification time instead of at signing time. If the cert is later revoked, the historic signature loses validity.</li>
        <li><strong>Wrong reference URI</strong>: The signature <code>&lt;Reference&gt;</code> points at a fragment that does not exist or has the wrong transform chain.</li>
      </ol><h2 id="platform">What this means for your platform</h2><p class="block-answer" data-answer="true">You should never be implementing XAdES yourself.  The right abstraction is "sign this invoice for this jurisdiction"; the platform handles the level, certificate, timestamp, canonicalisation, and revocation capture.</p><p>You should never be implementing XAdES yourself. The right abstraction is "sign this invoice for this jurisdiction"; the platform handles the level, certificate, timestamp, canonicalisation, and revocation capture. Invoicemonk handles XAdES end to end for every supported mandate.</p><h2>Key takeaways</h2><p class="block-answer" data-answer="true">Key takeaways includes: XAdES = XML-DSig + the metadata needed for long-term legal validity.   Four baseline levels: B-B → B-T → B-LT → B-LTA, each a superset.</p><ul>
        <li>XAdES = XML-DSig + the metadata needed for long-term legal validity.</li>
        <li>Four baseline levels: B-B → B-T → B-LT → B-LTA, each a superset.</li>
        <li>Canonicalisation is the most common silent failure — always use Exclusive C14N.</li>
        <li>Capture revocation data at signing time for any signature that needs to last beyond cert validity.</li>
      </ul><h2>Related reading</h2><p class="block-answer" data-answer="true">Pillar: e-invoicing.  Siblings: UBL 2.</p><p>Pillar: <a href="/__LANG__/e-invoicing">e-invoicing</a>. Siblings: <a href="/__LANG__/blog/ubl-2-1-explained">UBL 2.1 explained</a>, <a href="/__LANG__/blog/what-is-peppol-access-point">what is a Peppol Access Point</a>, <a href="/__LANG__/blog/peppol-eu-explained">Peppol EU explained</a>. Mandate context: <a href="/__LANG__/e-invoicing/zatca-phase-2">ZATCA Phase 2</a>.</p><h2 id="sources">Sources</h2><ul>
        <li><a href="https://www.etsi.org/deliver/etsi_EN/319100_319199/31913201/01.03.01_60/en_31913201v010301p.pdf" rel="noopener noreferrer">ETSI EN 319 132-1 v1.3.1 — XAdES digital signatures (July 2024)</a></li>
        <li><a href="https://www.w3.org/TR/xmldsig-core1/" rel="noopener noreferrer">W3C — XML Signature Syntax and Processing (Version 1.1)</a></li>
        <li><a href="https://www.w3.org/TR/xml-exc-c14n/" rel="noopener noreferrer">W3C — Exclusive XML Canonicalization Version 1.0</a></li>
        <li><a href="https://zatca.gov.sa/en/E-Invoicing/SystemsDevelopers/Pages/default.aspx" rel="noopener noreferrer">ZATCA — E-Invoicing Systems Developers (XAdES profile)</a></li>
        <li><a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32014R0910" rel="noopener noreferrer">eIDAS Regulation (EU) 910/2014</a></li>
        <li><a href="https://esignature.ec.europa.eu/efda/tl-browser/" rel="noopener noreferrer">EU Trusted List Browser — Trust Service Providers</a></li>
      </ul><aside class="tldr" aria-label="TL;DR"><p><strong>TL;DR.</strong> XAdES (XML Advanced Electronic Signatures) is the ETSI standard — EN 319 132-1 — that extends the XML Digital Signature (XML-DSig) specification with the additional properties needed for long-term legal validity. It defines four baseline levels — B-B, B-T, B-LT, B-LTA — that progressively add timestamps, validation material, and archive timestamps. ZATCA Phase 2 uses XAdES-B-B-Sig with the CSID; Peppol signs the AS4 envelope and optionally the UBL payload; many EU qualified e-signature flows use XAdES-B-LT or B-LTA for 10-year retention.</p></aside>`,
    category: 'E-Invoicing',
    tags: ['XAdES', 'digital signatures', 'cryptography', 'e-invoicing', 'ETSI', 'eIDAS'],
    author: defaultAuthor,
    date: '2026-06-23',
    dateModified: '2026-06-23',
    readTime: '12 min read',
    featuredImage: '/images/blog/einvoicing/xades-digital-signatures-explained.jpg',
    featuredImageAlt: 'XAdES baseline signature levels: B-B, B-T, B-LT, B-LTA',
    pillarContent: false,
    clusterType: 'supporting',
    targetProduct: '/e-invoicing',
    semanticKeywords: ['XAdES', 'XML signature', 'XAdES-B-B', 'XAdES-B-T', 'XAdES-B-LT', 'XAdES-B-LTA', 'ETSI EN 319 132', 'digital signature e-invoice', 'XML canonicalisation', 'XAdES CSID ZATCA'],
    priority: 'P2',
    lastAudited: '2026-06-23',
    faq: [
      { question: 'What is the difference between XAdES and PAdES?', answer: 'XAdES signs XML documents; PAdES signs PDFs; CAdES signs arbitrary binary data. All three are ETSI standards that extend basic cryptographic signatures with the metadata needed for long-term legal validity.' },
      { question: 'Why do regulators require XAdES instead of plain XML-DSig?', answer: 'XML-DSig proves a signature exists but says nothing about when it was made or whether the signing certificate is still valid years later. XAdES adds trusted timestamps and embedded validation material so the signature remains verifiable for the full statutory retention period — 6 years for ZATCA, 10 for most EU jurisdictions.' },
      { question: 'What level does ZATCA Phase 2 require?', answer: 'XAdES-B-B-Sig with the Production CSID, embedded in the UBL 2.1 invoice\'s UBLExtensions. ZATCA does not require B-T or B-LT because the cleared XML is held in Fatoora itself; long-term integrity is the regulator\'s problem post-clearance.' },
      { question: 'Can I use a standard TLS certificate to sign XAdES?', answer: 'No. XAdES requires a code-signing or document-signing certificate from an accepted CA, often a qualified TSP under eIDAS for EU flows or a regulator-issued certificate (ZATCA CSID, ICP-Brasil A1) for clearance regimes.' },
      { question: 'What is canonicalisation and why does it matter?', answer: 'XML can be serialised multiple ways for the same logical content (attribute order, whitespace, namespace prefixes). The signature is over the canonicalised form; signer and verifier must agree on the algorithm. Exclusive C14N (the standard Peppol/ZATCA choice) ignores ancestor namespaces; canonical C14N includes them.' },
      { question: 'How often do I need to renew an archive timestamp on B-LTA?', answer: 'Before the cryptographic algorithm of the previous archive timestamp weakens or its TSA certificate approaches expiry — typically every 5–7 years in practice. The renewal timestamps the existing signature plus the previous archive timestamp, chaining trust forward.' },
    ],
    relatedTools: [
      { label: 'E-invoicing pillar', url: '/e-invoicing', description: 'How Invoicemonk implements global e-invoicing mandates' },
      { label: 'ZATCA Phase 2', url: '/e-invoicing/zatca-phase-2', description: 'XAdES with CSID in production' },
      { label: 'UBL 2.1 explained', url: '/blog/ubl-2-1-explained', description: 'The XML format XAdES signs' },
    ],
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
eInvoicingClusterPostsBatch2.forEach(post => {
  if (!blogPosts.find(p => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
