import { defaultAuthor } from "./authors";
import type { BlogPost } from './blogPosts';

/**
 * Blog Posts Cluster 19 — E-Invoicing Compliance (P3 Countries)
 * Serbia, Bulgaria, Chile, Albania
 * Generated with verified government data, LLM-optimized writing.
 */

export const cluster19Posts: BlogPost[] = [
  // ═══════════════════════════════════════════════════
  // SERBIA — SEF (Sistem Elektronskih Faktura)
  // ═══════════════════════════════════════════════════
  {
    slug: 'serbia-e-invoicing-sef-guide',
    title: `Serbia E-Invoicing Guide: SEF Mandate, Deadlines & Compliance (2026)`,
    excerpt: 'Master Serbia\'s SEF e-invoicing requirements. Learn about the 2023-2024 mandates, XML standards, and how to avoid fines of up to RSD 2,000,000.',
    content: `<p>Master Serbia\'s SEF e-invoicing requirements. Learn about the 2023-2024 mandates, XML standards, and how to avoid fines of up to RSD 2,000,000. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Overview of E-Invoicing in Serbia (SEF)</h2>
<p>E-invoicing in Serbia is mandatory for all VAT-registered entities through the <strong>Sistem Elektronskih Faktura (SEF)</strong>. As of January 1, 2023, for B2G transactions and May 1, 2024, for all B2B transactions, businesses must issue, receive, and store invoices electronically. Failure to comply can result in severe penalties from the <strong>Poreska Uprava</strong> (Tax Administration), reaching up to <strong>RSD 2,000,000</strong> per violation.</p>

<h2>What is the SEF System?</h2>
<p>The <strong>Sistem Elektronskih Faktura (SEF)</strong> is the centralized national portal managed by the Serbian Ministry of Finance. It acts as the clearinghouse for all electronic invoices. Unlike post-audit models used in other countries, Serbia utilizes a continuous transaction control (CTC) model where the invoice must be validated by the SEF platform before it is legally recognized.</p>
<p>To ensure your business remains compliant, integrating high-quality <a href="/en/invoicing">invoicing software</a> with the SEF API is the standard practice for medium and large enterprises. The system ensures transparency, reduces the grey economy, and accelerates VAT refund processes.</p>

<h2>Mandate Timeline and Important Dates</h2>
<p>The Serbian government implemented e-invoicing in several phases to allow businesses to adapt to the new digital infrastructure. Here is the official timeline:</p>
<ul>
  <li><strong>May 1, 2022:</strong> G2G and B2G transactions became mandatory. Private entities were required to issue e-invoices to public sector bodies.</li>
  <li><strong>July 1, 2022:</strong> Public sector entities became required to issue e-invoices to the private sector (G2B).</li>
  <li><strong>January 1, 2023:</strong> Full B2G and G2B implementation; B2B transactions began voluntary adoption.</li>
  <li><strong>May 1, 2024:</strong> The final mandate for all B2B transactions between VAT-registered entities went into effect.</li>
</ul>

<h2>Who is Required to Comply?</h2>
<p>Current regulations apply to all "subjects of private sector" and "subjects of public sector" that are within the VAT (PDV) system. Specifically:</p>
<ul>
  <li>All companies registered for VAT in Serbia.</li>
  <li>Public enterprises and government agencies.</li>
  <li>Foreign entities with a local tax representative in Serbia and VAT registration.</li>
  <li>Legal entities and entrepreneurs who have opted into the SEF system voluntarily.</li>
</ul>

<h2>Technical Requirements and XML Standards</h2>
<p>Invoices in the Serbian SEF system must follow the <strong>UBL 2.1</strong> standard (Universal Business Language) and be formatted in <strong>XML</strong>. This structure ensures that both the tax authority and <a href="/en/accounting">accounting tools</a> can parse the data automatically without manual entry.</p>
<h3>Key Data Fields Required:</h3>
<table>
  <tr>
    <th>Field Name</th>
    <th>Requirement</th>
  </tr>
  <tr>
    <td>Supplier/Buyer Info</td>
    <td>Name, Address, PIB (Tax Identification Number)</td>
  </tr>
  <tr>
    <td>Invoice Number</td>
    <td>Unique, sequential identifier</td>
  </tr>
  <tr>
    <td>Date of Issue</td>
    <td>Electronic timestamp from SEF</td>
  </tr>
  <li>VAT Rate</td>
    <td>Standard (20%) or Reduced (10%)</td>
  </tr>
  <tr>
    <td>Total Amount</td>
    <td>Expressed in RSD (Serbian Dinar)</td>
  </tr>
</table>

<h2>Tax Rates and VAT (PDV) in Serbia</h2>
<p>The Serbian <strong>Poreska Uprava</strong> oversees the collection of Value Added Tax (PDV). The standard rate is <strong>20%</strong>, which applies to most goods and services. A reduced rate of <strong>10%</strong> applies to basic foods, medicines, and newspapers. Correctly categorizing these rates within your SEF submission is critical for <a href="/en/compliance">compliance features</a> and avoiding audits.</p>

<h2>Penalties for Non-Compliance</h2>
<p>The Serbian Law on Electronic Invoicing sets strict penalties for entities failing to issue e-invoices or those using the system incorrectly. The fines are structured as follows:</p>
<ul>
  <li><strong>Legal Entities:</strong> Fines range from RSD 200,000 to <strong>RSD 2,000,000</strong>.</li>
  <li><strong>Responsible Persons:</strong> Individuals within a company can face fines between RSD 50,000 and RSD 150,000.</li>
  <li><strong>Sole Traders/Entrepreneurs:</strong> Fines range from RSD 50,000 to RSD 500,000.</li>
</ul>
<p>Common violations include missing the 24-hour window for uploading invoices, failing to archive documents for the required 10-year period, or issuing invoices outside the SEF infrastructure.</p>

<h2>How to Register for SEF</h2>
<p>To begin using the SEF system, businesses must obtain a qualified electronic certificate. The registration process involves:</p>
<ol>
  <li>Accessing the portal at <a href="https://efaktura.mfin.gov.rs/">efaktura.mfin.gov.rs</a>.</li>
  <li>Authenticating through the <strong>eID.gov.rs</strong> portal.</li>
  <li>Appointing an administrator for the company profile.</li>
  <li>Connecting your internal ERP or third-party software via API keys.</li>
</ol>

<h2>Benefits of E-Invoicing for Serbian Businesses</h2>
<p>While the transition requires initial effort, the long-term benefits are substantial:</p>
<h3>1. Faster VAT Refunds</h3>
<p>Because the Tax Administration has real-time access to transaction data, the time required to process and approve VAT refund requests is significantly reduced.</p>
<h3>2. Automation and Reduced Error</h3>
<p>By using modern <a href="/en/accounting">accounting tools</a>, businesses can eliminate manual data entry, reducing the risk of clerical errors that lead to tax discrepancies.</p>
<h3>3. Secure Archiving</h3>
<p>The SEF system provides a digital archive, ensuring that invoices are stored securely and meet the 10-year legal retention requirement without the need for physical storage space.</p>

<h2>Frequently Asked Questions (FAQ)</h2>
<h3>1. Is B2B e-invoicing mandatory for foreign companies in Serbia?</h3>
<p>If a foreign company is registered for VAT in Serbia and has a local tax representative, it must comply with the SEF mandate for its Serbian transactions.</p>
<h3>2. Can I still send PDF invoices?</h3>
<p>A PDF can be sent as an attachment for human readability, but it is not a legal invoice. The <strong>XML file</strong> validated by SEF is the only legally binding document.</p>
<h3>3. How long must I store e-invoices in Serbia?</h3>
<p>The legally required retention period for electronic invoices in Serbia is 10 years. These must be stored in a way that ensures authenticity and integrity.</p>
<h3>4. What happens if the SEF system is down?</h3>
<p>In cases of technical malfunction of the national platform, taxpayers are usually granted a grace period to upload invoices once the system is restored, provided they have documented the downtime.</p>
<h3>5. Do I need an intermediary to connect to SEF?</h3>
<p>You can use the SEF portal manually, but for high-volume businesses, using a certified service provider or API-integrated <a href="/en/invoicing">invoicing software</a> is highly recommended.</p>
<h3>6. What is the standard VAT rate in Serbia?</h3>
<p>The standard VAT rate is 20%. There is also a reduced rate of 10% for specific essential categories. Both must be clearly itemized on the XML invoice.</p>
<h3>7. Who is the tax authority in Serbia?</h3>
<p>The primary authority is the <strong>Poreska Uprava</strong> (Tax Administration), under the Ministry of Finance. Their official website is <a href="https://www.purs.gov.rs">www.purs.gov.rs</a>.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'serbia-sef-xml-ubl-format-guide',
    title: `Serbia SEF UBL 2.1 Format: XML Requirements & Validation Rules`,
    excerpt: 'Master Serbia\'s SEF electronic invoicing requirements. Learn about UBL 2.1 XML standards, validation rules, and mandatory fields to ensure full compliance with the Poreska Uprava.',
    content: `<p>Master Serbia\'s SEF electronic invoicing requirements. Learn about UBL 2.1 XML standards, validation rules, and mandatory fields to ensure full compliance with the Poreska Uprava. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>What is the Serbia SEF E-Invoicing Mandate?</h2>
<p>As of January 1, 2023, for B2G transactions and January 1, 2024, for all B2B transactions, Serbia has mandated the use of the <strong>Sistem Elektronskih Faktura (SEF)</strong>. Under the supervision of the <strong>Poreska Uprava (Tax Administration)</strong>, all VAT-registered businesses must issue, receive, and archive invoices in a specific electronic format. Failure to comply can result in severe financial penalties reaching up to <strong>RSD 2,000,000</strong> (~€17,000) for legal entities and RSD 150,000 for responsible individuals.</p>

<h2>Which XML Format is Required for Serbia SEF?</h2>
<p>The technical backbone of the Serbian e-invoicing system is the <strong>UBL 2.1 (Universal Business Language)</strong> standard, specifically following the EN 16931-3-2 specification. This XML-based format ensures that data is structured in a way that the government portal (SEF) can automatically validate and process tax information. Using standardized <a href="/en/invoicing">invoicing software</a> is critical to ensure that every XML file generated meets the precise schema requirements set by the Ministry of Finance.</p>

<h3>Key Technical Specifications of the Serbian UBL Profile</h3>
<p>Unlike standard UBL 2.1, the Serbian implementation includes specific national extensions and mandatory fields that must be populated for a successful upload to the SEF portal. These include:</p>
<ul>
    <li><strong>Syntax:</strong> UBL 2.1 (ISO/IEC 19845:2015).</li>
    <li><strong>Customization ID:</strong> Must follow the specific Serbian prefix (urn:cen.eu:en16931:2017#compliant#en16931.rs:711).</li>
    <li><strong>Character Encoding:</strong> UTF-8 is the mandatory encoding to support Serbian Cyrillic and Latin characters.</li>
    <li><strong>Validation:</strong> Invoices must pass both XSD (XML Schema Definition) and Schematron validation rules.</li>
</ul>

<h2>Mandatory Data Fields in the Serbian XML Invoice</h2>
<p>To avoid rejection by the SEF portal, your XML files must contain the following data archetypes. Modern <a href="/en/accounting">accounting tools</a> typically automate these mappings, but manual API integrations must ensure these tags are present:</p>

<table>
    <thead>
        <tr>
            <th>XML Tag (UBL 2.1)</th>
            <th>Description</th>
            <th>Requirement</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>cbc:ID</td>
            <td>The unique invoice number (Internal Invoice Number)</td>
            <td>Mandatory</td>
        </tr>
        <tr>
            <td>cbc:IssueDate</td>
            <td>The date the invoice was issued (YYYY-MM-DD)</td>
            <td>Mandatory</td>
        </tr>
        <tr>
            <td>cac:AccountingSupplierParty</td>
            <td>Seller's details including PIB (Tax ID) and JBKJS</td>
            <td>Mandatory</td>
        </tr>
        <tr>
            <td>cac:AccountingCustomerParty</td>
            <td>Buyer's details including PIB and address</td>
            <td>Mandatory</td>
        </tr>
        <tr>
            <td>cac:TaxTotal</td>
            <td>Total VAT amount, split by tax rate (20% or 10%)</td>
            <td>Mandatory</td>
        </tr>
        <tr>
            <td>cbc:Note</td>
            <td>Usage of specific codes for tax exemptions</td>
            <td>Conditional</td>
        </tr>
    </tbody>
</table>

<h3>Handling VAT (PDV) and Tax Rates</h3>
<p>In Serbia, the standard VAT rate is <strong>20% (PDV)</strong>, while the reduced rate is <strong>10%</strong>. The XML must clearly define the <code>cac:TaxCategory</code>. If a transaction is exempt from VAT, the XML must include a specific reference to the article of the Serbian Law on VAT that justifies the exemption. This is often handled through a dedicated 'Invoice Note' or a 'Tax Exemption Reason Code' within the UBL structure.</p>

<h2>How to Connect to the SEF Portal?</h2>
<p>Businesses have two primary routes for complying with the Serbian mandate. First, smaller entities can manually upload XML files to the official <a href="https://www.purs.gov.rs" target="_blank">Poreska Uprava</a> web interface. However, for most businesses, the preferred method is via the <strong>SEF API</strong>.</p>
<p>Integrating your systems directly with the SEF API allows for real-time invoice transmission. To do this, your software must support <a href="/en/compliance">compliance features</a> such as secure authentication using API keys and the ability to poll the portal for status updates (e.g., Sent, Approved, Rejected).</p>

<h2>Common Validation Pitfalls and Errors</h2>
<p>When migrating to the UBL 2.1 format in Serbia, technical teams often encounter several common errors that result in rejected documents:</p>
<ul>
    <li><strong>Incorrect PIB Format:</strong> The Tax Identification Number (PIB) must be exactly 9 digits. Any deviation leads to immediate rejection.</li>
    <li><strong>JBKJS Missing:</strong> For B2G transactions, the unique identifier for public sector entities (JBKJS) is mandatory.</li>
    <li><strong>Rounding Discrepancies:</strong> The total sum at the document level must exactly match the sum of individual line items, often calculated to two or four decimal places.</li>
    <li><strong>Duplicate Invoice Numbers:</strong> The SEF system prevents the re-use of an invoice ID within the same fiscal year for the same supplier.</li>
</ul>

<h2>Why Compliance Automation Matters</h2>
<p>Managing the transition to UBL 2.1 XML manually is a high-risk strategy. Given that penalties for non-compliance start at RSD 150,000 and can escalate to millions, ensuring your <a href="/en/invoicing">invoicing software</a> is automatically updated with the latest Schematron rules from the Poreska Uprava is essential. Beyond avoiding fines, digitizing the invoice flow through SEF improves cash flow by reducing the time spent on manual reconciliation and disputes.</p>

<h2>Key Deadlines to Remember</h2>
<ul>
    <li><strong>January 1, 2023:</strong> All B2G (Business-to-Government) invoices must be electronic via SEF.</li>
    <li><strong>July 1, 2022:</strong> G2B (Government-to-Business) entities started issuing e-invoices.</li>
    <li><strong>January 1, 2024:</strong> Full B2B mandate. All VAT-registered businesses must issue and receive e-invoices.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>1. Is a digital signature required for Serbian e-invoices?</h3>
<p>While the SEF system secures the authenticity of the documents, invoices sent via the API are typically authenticated via the system's electronic keys. Invoices uploaded manually are signed via the portal credentials.</p>

<h3>2. What happens if I send an invoice in PDF format instead of XML?</h3>
<p>PDFs are no longer legally valid for VAT purposes in the B2B or B2G sectors in Serbia. While you may send a PDF visualization to a client for convenience, only the UBL 2.1 XML registered on the SEF portal is recognized by the Poreska Uprava.</p>

<h3>3. Do I need to archive electronic invoices?</h3>
<p>Yes, e-invoices must be archived for 10 years. The SEF portal provides a central archive, but it is highly recommended that businesses maintain their own compliant digital storage for redundancy and internal audit purposes.</p>

<h3>4. Are non-VAT registered businesses required to use SEF?</h3>
<p>Currently, the mandate primarily targets VAT-registered entities (obveznici PDV-a). However, public sector entities must use it regardless of VAT status. Non-VAT businesses can opt-in voluntarily.</p>

<h3>5. What is the penalty for failing to issue an e-invoice?</h3>
<p>Legal entities can be fined up to RSD 2,000,000. Additionally, the responsible person within the company can face fines up to RSD 150,000. Consistent non-compliance may also trigger more frequent tax audits from the Poreska Uprava.</p>

<h3>6. Can I use the OIOUBL or PEPPOL standard instead of UBL 2.1?</h3>
<p>Serbia's SEF is based on the EN 16931-3-2 standard, which is a specific subset of UBL 2.1. While it shares many similarities with PEPPOL, you must ensure your XML generator follows the specific Serbian national extensions (Serbia-specific Schematron).</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/serbia-sef-xml-ubl-format-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '5 min read',
  },
  {
    slug: 'serbia-sef-registration-setup-guide',
    title: `How to Register for Serbia's SEF E-Invoicing System (Step-by-Step)`,
    excerpt: 'Learn how to register for Serbia\'s Sistem Elektronskih Faktura (SEF). This guide covers mandatory deadlines, digital certificates, and SEF portal setup.',
    content: `<p>Learn how to register for Serbia\'s Sistem Elektronskih Faktura (SEF). This guide covers mandatory deadlines, digital certificates, and SEF portal setup. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>What is the SEF E-Invoicing System in Serbia?</h2><p>In Serbia, the <strong>Sistem Elektronskih Faktura (SEF)</strong> is the centralized electronic invoicing portal managed by the Ministry of Finance and monitored by the <strong>Poreska Uprava (Tax Administration)</strong>. As of <strong>January 1, 2023</strong>, all B2G transactions became mandatory, and by <strong>May 1, 2024</strong>, the mandate expanded to cover all B2B transactions between VAT-registered entities. Failure to comply can result in severe penalties of up to <strong>RSD 2,000,000</strong> per entity. To stay compliant, businesses must integrate their <a href="/en/invoicing">invoicing software</a> with the SEF infrastructure.</p><h3>The Timeline for SEF Implementation</h3><p>The Serbian government implemented e-invoicing in phases to ensure the economy could adapt to the new digital standards. The primary dates for compliance were:</p><ul><li><strong>May 1, 2022:</strong> G2G and G2B (Public sector issuing to private sector).</li><li><strong>January 1, 2023:</strong> B2G (Private sector must issue electronically to public entities).</li><li><strong>January 1, 2023:</strong> B2B (Public sector must receive but private entities also began voluntary adoption).</li><li><strong>May 1, 2024:</strong> Full B2B mandate for all VAT payers (obveznici PDV-a).</li></ul><h2>Step 1: Obtain a Qualified Electronic Certificate</h2><p>Before you can access the SEF portal, you must have a Qualified Digital Certificate. This is a digital signature that verifies the identity of the legal representative (Zakonski zastupnik). In Serbia, these are issued by authorized bodies including:</p><ul><li>The Serbian Chamber of Commerce (PKS)</li><li>The Ministry of Interior (MUP) - available on the chip of the national ID card</li><li>Pošta Srbije</li><li>Halcom</li><li>E-Smart Systems</li></ul><p>Without this certificate, you cannot authenticate your identity on the government’s <strong>eID.gov.rs</strong> portal, which serves as the gateway for SEF.</p><h2>Step 2: Registration on the eID.gov.rs Portal</h2><p>Once you have your electronic certificate and have installed the necessary middleware (drivers for your smart card or USB token), you must create a profile on the national Electronic Identification portal. This is a prerequisite for accessing all Serbian digital government services, including the <a href="/en/accounting">accounting tools</a> provided by the state.</p><h3>How to Log In to eID</h3><ol><li>Insert your card or token into your computer.</li><li>Visit <a href="https://eid.gov.rs">eid.gov.rs</a>.</li><li>Select 'Prijava elektronskim sertifikatom' (Sign in with electronic certificate).</li><li>Follow the prompts to register your personal and business details.</li></ol><h2>Step 3: Accessing the SEF Portal (Sistem Elektronskih Faktura)</h2><p>After successfully registering on eID, you can navigate to the SEF production environment at <strong>efaktura.mfin.gov.rs</strong>. Note that for testing purposes, the government also provides a 'Demo' environment which is highly recommended for first-time users to ensure their <a href="/en/compliance">compliance features</a> are working correctly.</p><h3>Selecting Your Company Type</h3><p>When you log in for the first time, you will be asked to select the company you are representing. If you are the legal representative registered in the APR (Business Registers Agency), your company should appear automatically. You will need to select the role of 'Administrator' to proceed with the configuration.</p><h2>Step 4: Configuring SEF Settings and API Keys</h2><p>For most businesses, manually entering every invoice into the government portal is inefficient. You likely want to connect your private <a href="/en/invoicing">invoicing software</a> directly to the SEF via an API. To do this, you must generate an API Key within the SEF portal.</p><table><thead><tr><th>Setting Name</th><th>Description</th></tr></thead><tbody><tr><td>API Key</td><td>The unique code that allows your software to communicate with SEF.</td></tr><tr><td>Subscription Key</td><td>Additional security layer for specific API calls.</td></tr><tr><td>VAT Status</td><td>Verification that your PDV status (20% or 10%) is correctly synchronized.</td></tr><tr><td>Notifications</td><td>Email alerts for received but unaccepted invoices.</td></tr></tbody></table><h3>Generating the API Key</h3><ol><li>Go to 'Podešavanja' (Settings) in the SEF menu.</li><li>Select the 'API menadžment' tab.</li><li>Click 'Generiši ključ' (Generate Key).</li><li>Copy this key and paste it into your company's internal software settings.</li></ol><h2>Step 5: Understanding Penalties for Non-Compliance</h2><p>The <strong>Poreska Uprava</strong> takes electronic invoicing very seriously. The Law on Electronic Invoicing specifies strict penalties for those who fail to issue, receive, or store e-invoices correctly.</p><ul><li><strong>Legal Entities:</strong> Fines range from RSD 200,000 to RSD 2,000,000.</li><li><strong>Responsible Persons:</strong> Individuals within a company can be fined between RSD 50,000 and RSD 150,000.</li><li><strong>Entrepreneurs (Preduzetnici):</strong> Penalties range from RSD 50,000 to RSD 500,000.</li></ul><h2>VAT (PDV) and the SEF System</h2><p>Serbia maintains two primary VAT rates: <strong>20% Standard Rate</strong> and <strong>10% Reduced Rate</strong>. When sending an invoice through SEF, the XML file (UBL 2.1 format) must contain the correct tax category codes. The SEF system automatically validates if the math adds up before allowing the invoice to be sent to the recipient. This reduces the risk of errors in your <a href="/en/accounting">accounting tools</a> and ensures smoother tax audits from the authority at <a href="https://www.purs.gov.rs">www.purs.gov.rs</a>.</p><h2>Frequently Asked Questions (FAQ)</h2><h3>1. Is SEF mandatory for all companies in Serbia?</h3><p>It is mandatory for all companies and entrepreneurs who are registered for VAT (PDV). If you are not in the VAT system, registration is currently voluntary unless you are transacting with the public sector.</p><h3>2. How long must I store e-invoices?</h3><p>According to Serbian law, electronic invoices must be stored in their original XML format for at least 10 years to remain compliant.</p><h3>3. Can an invoice be rejected in SEF?</h3><p>Yes, recipients have the right to 'Accept' or 'Reject' an invoice. If an invoice is rejected, the sender must issue a credit note or a corrected invoice.</p><h3>4. What is the standard format for Serbian e-invoices?</h3><p>The standard format used by the SEF is <strong>UBL 2.1</strong>, which is an international XML standard customized for Serbian tax requirements.</p><h3>5. Do I need to print invoices anymore?</h3><p>No, the electronic version stored in the SEF or your compliant archive is considered the legally valid document for tax purposes.</p><h3>6. Can I use a foreign invoicing tool?</h3><p>Yes, provided that the tool has localized <a href="/en/compliance">compliance features</a> that allow it to connect to the Serbian SEF API and handle the specific UBL 2.1 requirements of the Poreska Uprava.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/serbia-sef-registration-setup-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'serbia-e-invoicing-penalties-compliance',
    title: `Serbia E-Invoicing Penalties: Fines for SEF Non-Compliance (2026)`,
    excerpt: 'Discover the strict penalty structure for SEF non-compliance in Serbia. Learn how to avoid fines up to RSD 2,000,000 and ensure total VAT audit readiness.',
    content: `<p>Discover the strict penalty structure for SEF non-compliance in Serbia. Learn how to avoid fines up to RSD 2,000,000 and ensure total VAT audit readiness. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>What Are the Current Serbia E-Invoicing Penalties?</h2><p>In Serbia, non-compliance with the <strong>Sistem Elektronskih Faktura (SEF)</strong> mandates results in severe financial penalties. As of 2024, legal entities face fines ranging from <strong>RSD 200,000 to RSD 2,000,000</strong> (approximately €17,000) for failing to issue, receive, or store electronic invoices through the official portal. Individuals and responsible officers within a company can also be fined up to <strong>RSD 150,000</strong> per violation. Since the full B2B mandate took effect on May 1, 2024, the <strong>Poreska Uprava</strong> (Tax Administration) has begun active enforcement, monitoring all VAT-registered businesses to ensure consistency between SEF records and VAT returns.</p><h2>The Serbian E-Invoicing Timeline: When Did Rules Become Mandatory?</h2><p>The transition to a digital-first tax economy in Serbia was executed in phases to allow businesses to integrate their <a href="/en/invoicing">invoicing software</a> with the national infrastructure. Understanding the timeline is critical for compliance audits, as backdated invoices are subject to scrutiny.</p><ul><li><strong>May 1, 2022:</strong> B2G (Business-to-Government) transactions became mandatory for suppliers to the public sector.</li><li><strong>January 1, 2023:</strong> Full B2G and G2B reciprocity; public entities were required to issue e-invoices to businesses.</li><li><strong>May 1, 2024:</strong> The final and most significant phase, mandating all B2B (Business-to-Business) transactions between VAT-registered entities to occur via SEF.</li></ul><h3>Who Is Affected by These Regulations?</h3><p>The mandate applies to all private sector legal entities and entrepreneurs who are registered for Value Added Tax (VAT/PDV) in Serbia. Additionally, non-resident businesses with a fiscal representative in Serbia must comply if they are engaged in taxable transactions within the country. Using robust <a href="/en/compliance">compliance features</a> is no longer optional; it is a legal requirement for market participation.</p><h2>Detailed Penalty Structure for SEF Non-Compliance</h2><p>The Electronic Invoicing Law (Zakon o elektronskom fakturisanju) outlines several categories of violations. The Poreska Uprava monitors these through the SEF portal, which acts as a centralized clearing house for all tax data.</p><table><thead><tr><th>Violation Type</th><th>Fine for Legal Entity (RSD)</th><th>Fine for Responsible Person (RSD)</th></tr></thead><tbody><tr><td>Failure to issue an e-invoice through SEF</td><td>200,000 – 2,000,000</td><td>50,000 – 150,000</td></tr><tr><td>Failure to receive e-invoices via SEF</td><td>200,000 – 2,000,000</td><td>50,000 – 150,000</td></tr><tr><td>Incorrect use of tax categories / VAT rates</td><td>200,000 – 2,000,000</td><td>50,000 – 150,000</td></tr><tr><td>Failure to archive invoices for 10 years</td><td>200,000 – 2,000,000</td><td>50,000 – 150,000</td></tr></tbody></table><h3>Electronic Archiving Requirements</h3><p>It is not enough to simply send an invoice. Serbian law requires all e-invoices to be stored in a secure, digital format that ensures integrity and readability for 10 years. Many businesses utilize integrated <a href="/en/accounting">accounting tools</a> that automatically archive documents in compliance with the Law on Archival Materials and the Law on Electronic Invoicing.</p><h2>Common Compliance Pitfalls in the SEF System</h2><p>Avoiding penalties requires more than just access to the SEF portal. Most fines are triggered by procedural errors rather than intentional tax evasion. Common risks include:</p><ul><li><strong>Late Acceptance:</strong> If an invoice is not rejected within the legal timeframe (usually 15 days), it may be deemed accepted by default, creating a tax liability even if the goods were never received.</li><li><strong>Data Mismatch:</strong> Discrepancies between the SEF invoice data and the POPDV (VAT summary) return.</li><li><strong>Incorrect VAT Exemptions:</strong> Using the wrong tax category codes (e.g., S, OE, AE, E, R) inside the SEF XML file.</li><li><strong>Duplicate Invoicing:</strong> Issuing both a paper invoice and an e-invoice, which can lead to double taxation or audit flags.</li></ul><h3>The Role of the Poreska Uprava</h3><p>The Serbian Tax Administration (<a href="https://www.purs.gov.rs" target="_blank">Poreska Uprava</a>) utilizes automated cross-referencing technology. Because every B2B invoice must pass through the SEF, the government has real-time visibility into the 20% standard VAT and 10% reduced VAT liabilities of every firm. This transparency makes manual errors highly visible to auditors.</p><h2>How to Minimize Risk of Fines</h2><p>To ensure your business remains compliant and avoids the RSD 2,000,000 maximum penalty, follow these best practices:</p><ol><li><strong>API Integration:</strong> Link your ERP or invoicing system directly to the SEF API to prevent manual data entry errors.</li><li><strong>Regular Training:</strong> Ensure your accounting staff understands the specific XML requirements and the 15-day acceptance rule.</li><li><strong>Automated Validation:</strong> Use software that validates tax IDs and mandatory fields before the invoice is submitted to SEF.</li><li><strong>Periodic Audits:</strong> Compare your SEF dashboard against your internal ledgers monthly to catch discrepancies early.</li></ol><h2>Conclusion: The Cost of Non-Compliance</h2><p>The Serbian government has made it clear that digital transformation is the cornerstone of their tax strategy. With penalties exceeding €17,000 per violation, the financial risk of ignoring SEF protocols is unsustainable for most SMEs. By adopting professional <a href="/en/invoicing">invoicing software</a> and staying updated on Poreska Uprava circulars, businesses can turn compliance from a burden into a streamlined operational advantage.</p><h2>Frequently Asked Questions</h2><h3>1. Is SEF mandatory for all businesses in Serbia?</h3><p>SEF is mandatory for all VAT-registered entities (legal entities and entrepreneurs). Non-VAT payers are generally not required to use it unless they are dealing with public sector entities.</p><h3>2. What is the standard VAT rate in Serbia for e-invoices?</h3><p>The standard VAT rate is 20%, with a reduced rate of 10% for specific goods like food and medicine. These must be correctly coded in the SEF system.</p><h3>3. Can I still issue paper invoices for B2B transactions?</h3><p>No. For transactions between VAT-registered entities, only electronic invoices issued through the SEF portal are legally valid for tax deduction purposes.</p><h3>4. What happens if I make a mistake on an e-invoice?</h3><p>You must issue a credit note (storno) through the SEF portal to cancel the incorrect invoice and then issue a new, corrected electronic document.</p><h3>5. Do I need to store e-invoices on my own servers?</h3><p>While SEF stores invoices, the law requires taxpayers to ensure they have an accessible archive for 10 years. Relying solely on the government portal is not recommended; a secondary compliant archive is best practice.</p><h3>6. What are the penalties for individual responsible persons?</h3><p>Individuals (such as directors or legal representatives) face fines between RSD 50,000 and RSD 150,000 for e-invoicing violations, separate from the company's fine.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/serbia-e-invoicing-penalties-compliance.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'serbia-e-invoicing-foreign-companies',
    title: `Serbia E-Invoicing for Foreign Companies: SEF Requirements Explained`,
    excerpt: 'Learn how foreign entities must navigate Serbia\'s SEF e-invoicing mandate. Understand VAT registration, technical requirements, and penalties for non-compliance.',
    content: `<p>Learn how foreign entities must navigate Serbia\'s SEF e-invoicing mandate. Understand VAT registration, technical requirements, and penalties for non-compliance. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Does a Foreign Company Need to Use SEF in Serbia?</h2><p>Yes, foreign companies must comply with the <strong>Sistem Elektronskih Faktura (SEF)</strong> if they are registered for VAT (PDV) in Serbia or have a fiscal representative locally. Since January 1, 2023, for B2G transactions and <strong>May 1, 2024</strong>, for all B2B transactions, the <strong>Poreska Uprava</strong> (Tax Administration) mandates the electronic exchange of invoices. Failure to comply can lead to massive penalties of up to <strong>RSD 2,000,000</strong> (~€17,000) per violation, regardless of the company's country of origin.</p><h3>What is the SEF System?</h3><p>The SEF is a centralized portal managed by the Serbian Ministry of Finance. It serves as the single point of entry, storage, and distribution for all electronic invoices. Unlike systems in other European countries that allow decentralized exchange with reporting, Serbia utilizes a 'clearance model' where the invoice is only legally valid once it has passed through the SEF portal and received a unique identification number.</p><h2>The Timeline of Compliance in Serbia</h2><p>The rollout of e-invoicing in Serbia was aggressive compared to other Balkan nations. Foreign companies must recognize these critical milestones administered by the <a href="https://www.purs.gov.rs" target="_blank">Poreska Uprava</a>:</p><ul><li><strong>January 1, 2022:</strong> G2G transactions began.</li><li><strong>May 1, 2022:</strong> B2G transactions (businesses sending to public entities) became mandatory.</li><li><strong>January 1, 2023:</strong> G2B transactions (public entities sending to businesses) became mandatory.</li><li><strong>January 1, 2023:</strong> B2B transactions between VAT-registered entities became mandatory.</li><li><strong>May 1, 2024:</strong> Full implementation including specific reporting requirements for non-VAT entities and complex fiscal representations.</li></ul><h2>Mandatory Requirements for Foreign Entities</h2><p>For a foreign company to issue or receive invoices in Serbia, several prerequisites must be met. You cannot simply send a PDF via email and remain compliant. You must integrate with <a href="/en/invoicing">invoicing software</a> that supports the Serbian XML standard (UBL 2.1).</p><h3>1. VAT Registration and Fiscal Representation</h3><p>Foreign entities that engage in taxable supplies within Serbia usually require a local tax identification number (PIB). Unless there is a specific exemption, these companies must appoint a <strong>Fiscal Representative</strong>. This representative is jointly and severally liable for your VAT obligations and is responsible for accessing the SEF on your behalf using a qualified electronic certificate.</p><h3>2. The Serbian e-ID (Consent ID)</h3><p>To access the SEF portal, the authorized person (often the fiscal representative) must have a Serbian electronic ID or a qualified digital certificate issued by a Serbian CA (Certification Authority). For foreign directors, this often involves obtaining a 'Consent ID' mobile app credential through a local post office or embassy.</p><h3>3. Technical Standards: XML and UBL 2.1</h3><p>Faktura (invoices) must be structured in the <strong>PEPPOL-compatible UBL 2.1</strong> format. The system does not recognize manually typed Word or Excel documents. Using modern <a href="/en/accounting">accounting tools</a> that automate this conversion is essential for accuracy.</p><h2>VAT Rates and Reporting Structures</h2><p>Foreign companies must ensure their ERP systems are configured to handle the specific Serbian VAT (PDV) structure administered by the Tax Administration. The current rates are:</p><table><thead><tr><th>Tax Type</th><th>Rate</th><th>Application</th></tr></thead><tr><td>Standard VAT</td><td>20%</td><td>Most goods and services</td></tr><tr><td>Reduced VAT</td><td>10%</td><td>Food, newspapers, basic utilities, hotel services</td></tr><tr><td>Exempt</td><td>0%</td><td>Exports and specific international services</td></tr></table><p>Accurate tax categorization is vital because the SEF system performs automated validation. If a tax code is entered incorrectly, the SEF will reject the invoice immediately.</p><h2>Penalties for Non-Compliance</h2><p>The Serbian Law on Electronic Invoicing is strict regarding enforcement. The <a href="/en/compliance">compliance features</a> of your business process must be robust to avoid the following fines:</p><ul><li><strong>Legal Entities:</strong> RSD 200,000 to RSD 2,000,000 (~€1,700 to €17,000).</li><li><strong>Responsible Persons (Directors):</strong> RSD 50,000 to RSD 150,000 (~€425 to €1,275).</li><li><strong>Sole Proprietors:</strong> RSD 50,000 to RSD 500,000.</li></ul><p>Fines can be levied for failing to issue an e-invoice, failing to receive one, or failing to store them for the mandatory 10-year period.</p><h2>How to Connect to SEF: Methods for Foreigners</h2><p>There are two primary ways for a foreign business to interface with the SEF:</p><h3>Manual Upload (Web Interface)</h3><p>Small foreign entities with very low invoice volumes can manually upload XML files or type data directly into the SEF portal. However, this is prone to human error and requires a local person with a digital signature to log in every time.</p><h3>API Integration (Recommended)</h3><p>Connecting your global ERP directly to SEF via an API is the standard practice for international corporations. This ensures that every time a sale is made in your system, the e-invoice is automatically generated, signed, and transmitted to the Serbian authorities in real-time. This eliminates the need for manual data entry and reduces the risk of penalties.</p><h2>Key Frequently Asked Questions (FAQ)</h2><h3>1. Do I need a Serbian bank account to use SEF?</h3><p>No, a Serbian bank account is not a prerequisite for SEF, but registration for VAT (PIB) and a fiscal representative are typically required for foreign companies doing business locally.</p><h3>2. What is the storage requirement for Serbian e-invoices?</h3><p>B2B e-invoices must be stored for 10 years. While the SEF portal stores them, companies are advised to keep their own digital archives for audit safety.</p><h3>3. Can I send invoices in Euros?</h3><p>Invoices must be issued in Serbian Dinars (RSD) for local tax purposes. You may include Euro amounts as supplementary info, but the tax base and VAT amount must be in RSD at the official NBS exchange rate.</p><h3>4. Are B2C transactions included in SEF?</h3><p>Currently, the SEF is primarily for B2G and B2B transactions. B2C transactions are handled via the fiscalization system (e-fiskalizacija), though there is a convergence between the two systems.</p><h3>5. Is there a minimum threshold for e-invoicing?</h3><p>There is no minimum price threshold. If you are a VAT-registered entity in Serbia, every single B2B transaction must go through the SEF system.</p><h3>6. Can I use a foreign digital signature?</h3><p>Generally, the SEF requires a Serbian-issued qualified electronic certificate or a cloud-based signature provided via the Serbian government's Office for IT and eGovernment.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/serbia-e-invoicing-foreign-companies.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  // ═══════════════════════════════════════════════════
  // BULGARIA — NRA E-Invoice System
  // ═══════════════════════════════════════════════════
  {
    slug: 'bulgaria-e-invoicing-nra-guide',
    title: `Bulgaria E-Invoicing Guide: NRA Mandate, Deadlines & Compliance (2026)`,
    excerpt: 'Master Bulgaria\'s transition to the NRA e-invoice system. Learn about the 2026 B2G mandate, B2B deadlines, and how to avoid penalties up to BGN 10,000.',
    content: `<p>Master Bulgaria\'s transition to the NRA e-invoice system. Learn about the 2026 B2G mandate, B2B deadlines, and how to avoid penalties up to BGN 10,000. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>What is the Bulgaria E-Invoicing Mandate for 2026?</h2>
<p>Bulgaria is moving toward a mandatory e-invoicing framework governed by the <strong>National Revenue Agency (NRA)</strong> (Национална агенция за приходите). The mandate officially begins in <strong>April 2026</strong> for all Business-to-Government (B2G) transactions, with a phased rollout for Business-to-Business (B2B) expected by 2027. All VAT-registered businesses—those exceeding the <strong>BGN 100,000 (~€51,130)</strong> annual turnover threshold—must prepare to submit invoices electronically via the NRA portal. Failure to comply can result in severe financial penalties ranging from <strong>BGN 500 up to BGN 10,000 (€250–€5,112)</strong> per instance of systematic non-compliance.</p>

<h2>How Does the NRA E-Invoicing System Work?</h2>
<p>The Bulgarian government is aligning its tax infrastructure with the European Union’s ViDA (VAT in the Digital Age) initiative. The core of this system is the NRA's centralized platform, designed to collect real-time data on commercial transactions. Unlike traditional paper-based systems, the new digital workflow requires invoices to be issued in a structured format (XML) that can be automatically processed by the <a href="/en/compliance">compliance features</a> of modern financial software.</p>

<h3>Current Transaction Landscape in Bulgaria</h3>
<table border="1" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f2f2f2;">
      <th>Transaction Type</th>
      <th>Current Status (2024-2025)</th>
      <th>Mandate Deadline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>B2G (Business-to-Government)</td>
      <td>Voluntary / European Standard</td>
      <td>April 2026 (Mandatory)</td>
    </tr>
    <tr>
      <td>B2B (Business-to-Business)</td>
      <td>Voluntary</td>
      <td>Planned for 2027</td>
    </tr>
    <tr>
      <td>B2C (Business-to-Consumer)</td>
      <td>Fiscal Receipt via Cash Register</td>
      <td>Continuous Monitoring</td>
    </tr>
  </tbody>
</table>

<h2>Who Must Comply with Bulgaria’s E-Invoicing Rules?</h2>
<p>Compliance is determined primarily by your VAT registration status. In Bulgaria, Value Added Tax (VAT), known locally as <strong>ДДС (DDS)</strong>, is applied at a standard rate of <strong>20%</strong>. A reduced rate of <strong>9%</strong> applies to specific sectors like tourism, catering, and book publishing.</p>
<ul>
  <li><strong>VAT-registered entities:</strong> Any business with a turnover above BGN 100,000 over 12 months must register for VAT and abide by upcoming electronic reporting rules.</li>
  <li><strong>Public procurement suppliers:</strong> Any business providing goods or services to Bulgarian government agencies must use the Peppol network or the NRA system by mid-2026.</li>
  <li><strong>Foreign companies:</strong> International firms with a Bulgarian VAT ID are also subject to these digital reporting requirements.</li>
</ul>

<h2>What are the Technical Requirements for E-Invoices?</h2>
<p>To be legally valid under the new NRA guidelines, an electronic invoice must meet three primary criteria: authenticity of origin, integrity of content, and legibility. This is usually achieved through advanced electronic signatures (AES) or Electronic Data Interchange (EDI).</p>
<h3>Structured Formats and Standards</h3>
<p>Building on the EN 16931 European standard, the NRA requires invoices to be submitted in a structured electronic format. Utilizing professional <a href="/en/invoicing">invoicing software</a> ensures that your XML files contain all mandatory fields, including:</p>
<ul>
  <li>Unique Invoice Number and Issue Date.</li>
  <li>Seller and Buyer VAT Identification Numbers.</li>
  <li>Detailed description of goods/services.</li>
  <li>Tax base and applicable VAT rate (20% or 9%).</li>
  <li>A timestamp generated at the moment of submission.</li>
</ul>

<h2>Penalties for Non-Compliance in Bulgaria</h2>
<p>The National Revenue Agency (NRA) has established a strict penalty regime to ensure high adoption rates of the new digital system. Monitoring is conducted through the NRA portal (<a href="https://www.nra.bg">https://www.nra.bg</a>).</p>
<p>The current penalty structure includes:</p>
<ul>
  <li><strong>Administrative fines:</strong> For failing to issue an invoice or issuing it in an incorrect format, fines start at BGN 500.</li>
  <li><strong>Systematic Non-Compliance:</strong> If a business consistently fails to report transactions via the NRA e-invoice system, penalties can reach BGN 10,000 per violation.</li>
  <li><strong>Loss of VAT Deduction:</strong> Buyers may be denied the right to reclaim VAT if the invoice received was not issued through the mandated electronic channels.</li>
</ul>

<h2>Transitioning Your Business to the Bulgarian E-Invoice System</h2>
<p>Preparing for the 2026 mandate requires a proactive approach to your internal financial workflows. Manual data entry is no longer viable in a real-time reporting environment. Integration with robust <a href="/en/accounting">accounting tools</a> is the most efficient way to maintain compliance.</p>
<h3>Steps to Implementation:</h3>
<ol>
  <li><strong>Audit Current Processes:</strong> Identify how many B2G and B2B invoices your firm issues monthly and determine if your current software supports XML export.</li>
  <li><strong>Register with the NRA:</strong> Ensure your credentials for the NRA e-services portal are active and your Qualified Electronic Signature (QES) is valid.</li>
  <li><strong>Adopt Automated Solutions:</strong> Use API-driven platforms that connect your sales data directly to the NRA API to eliminate manual reporting errors.</li>
  <li><strong>Staff Training:</strong> Educate your finance team on the difference between a PDF (which is often not a compliant e-invoice) and a structured XML invoice.</li>
</ol>

<h2>Why is Bulgaria Implementing E-Invoicing?</h2>
<p>The primary driver is the reduction of the "VAT Gap"—the difference between expected VAT revenue and the amount actually collected. By mandating real-time digital reporting, the NRA can identify fraudulent activities, such as "missing trader" schemes, almost instantly. Furthermore, it streamlines the audit process, reducing the administrative burden on both the state and the taxpayer in the long run.</p>

<h2>Frequently Asked Questions</h2>
<h3>1. Is B2B e-invoicing mandatory in Bulgaria today?</h3>
<p>No, as of late 2024, B2B e-invoicing is voluntary. However, the government has announced plans to make it mandatory by 2027 following the B2G rollout in April 2026.</p>

<h3>2. What is the standard VAT rate in Bulgaria?</h3>
<p>The standard VAT rate is 20%. A reduced rate of 9% is applied to hotels, restaurants, and certain tourism-related services.</p>

<h3>3. Do I need a digital signature to send e-invoices?</h3>
<p>Yes, to ensure the authenticity and integrity of the document, a Qualified Electronic Signature (QES) is generally required for Bulgarian e-invoicing compliance.</p>

<h3>4. Can I just send a PDF invoice to comply?</h3>
<p>No. While a PDF is electronic, it is not a "structured" invoice. The NRA mandate requires a machine-readable format (like XML) that conforms to European standards.</p>

<h3>5. What is the VAT registration threshold in Bulgaria?</h3>
<p>Businesses must register for VAT if their taxable turnover exceeds BGN 100,000 (~€51,130) in a 12-month period.</p>

<h3>6. What happens if I miss the April 2026 deadline?</h3>
<p>Public sector entities will be unable to process your payments, and you may face administrative fines from the NRA starting at BGN 500 per invoice.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/bulgaria-e-invoicing-nra-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'bulgaria-e-invoicing-xml-peppol-format',
    title: `Bulgaria E-Invoice Format: PEPPOL BIS & XML Requirements Explained`,
    excerpt: 'Learn the technical requirements for Bulgaria\'s NRA e-invoicing mandate starting April 2026. Explore PEPPOL BIS 3.0 standards and compliance rules.',
    content: `<p>Learn the technical requirements for Bulgaria\'s NRA e-invoicing mandate starting April 2026. Explore PEPPOL BIS 3.0 standards and compliance rules. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Overview of Bulgaria’s E-Invoicing Landscape</h2><p>Bulgaria is transitioning to a mandatory e-invoicing framework governed by the <strong>National Revenue Agency (Национална агенция за приходите - NRA)</strong>. The primary mandate for Business-to-Government (B2G) transactions is set for <strong>April 2026</strong>, while Business-to-Business (B2B) mandates are expected to follow in <strong>2027</strong>. All VAT-registered businesses—those exceeding the <strong>BGN 100,000 (~€51,000)</strong> annual turnover threshold—must comply with the XML-based PEPPOL BIS 3.0 format. Failure to adhere to these standards can result in significant penalties ranging from <strong>BGN 500 up to BGN 10,000 per invoice</strong> for systematic non-compliance.</p><h3>What is the NRA E-Invoice System?</h3><p>The NRA E-Invoice System is the centralized platform designed to monitor and validate financial transactions across Bulgaria. By leveraging the European standard for electronic invoicing (EN 16931), Bulgaria aims to reduce the VAT gap and streamline cross-border trade within the EU. The system relies on the transmission of structured XML data, effectively phasing out paper-based invoices and unstructured PDFs for VAT-registered entities.</p><p>For businesses seeking to stay ahead of these regulatory changes, integrating robust <a href="/en/invoicing">invoicing software</a> that supports the PEPPOL network is essential. This ensures that every document issued meets the technical specifications required by the <a href="https://www.nra.bg">National Revenue Agency</a>.</p><h2>The Technical Standard: PEPPOL BIS 3.0 and XML Requirements</h2><p>Bulgaria has adopted the <strong>PEPPOL BIS Billing 3.0</strong> specification as its core format. This is an implementation of the European Standard EN 16931. The format uses Universal Business Language (UBL) 2.1 to define the structure of the XML document. Under this standard, every invoice must contain specific data components to be legally valid.</p><h3>Key Data Fields in Bulgarian E-Invoices</h3><ul><li><strong>Invoice Number:</strong> A unique, sequential identifier.</li><li><strong>Issue Date:</strong> The date the invoice was generated.</li><li><strong>Supplier/Buyer Information:</strong> Names, addresses, and VAT numbers (DDS numbers).</li><li><strong>VAT Rates:</strong> Standard rate of 20% or the reduced rate of 9% for specific services like tourism.</li><li><strong>Line Items:</strong> Description of goods/services, quantities, and unit prices.</li><li><strong>Total Amounts:</strong> Net amount, VAT amount, and total gross amount.</li><li><strong>Currency:</strong> Primarily BGN (Lev), though EUR is common for international trade.</li></ul><p>Implementing these fields correctly requires advanced <a href="/en/compliance">compliance features</a> that automatically map local accounting data to the PEPPOL XML schema. Manual entry of these XML tags is prone to error and highly discouraged by the NRA.</p><h2>Mandate Timeline and Thresholds</h2><p>The rollout of e-invoicing in Bulgaria is phased to allow businesses time to adapt their internal <a href="/en/accounting">accounting tools</a>. The current roadmap presented by the Ministry of Finance and the NRA includes the following milestones:</p><table><thead><tr><th>Phase</th><th>Target Group</th><th>Effective Date</th><th>Mandatory Format</th></tr></thead><tbody><tr><td>B2G Mandate</td><td>Public Procurement & Contracting Authorities</td><td>April 2026</td><td>PEPPOL BIS 3.0 XML</td></tr><tr><td>B2B Phase 1</td><td>Large Enterprises (>BGN 50M Turnover)</td><td>January 2027 (Expected)</td><td>PEPPOL BIS 3.0 XML</td></tr><tr><td>B2B Phase 2</td><td>All VAT-registered Businesses</td><td>Mid-2027</td><td>PEPPOL BIS 3.0 XML</td></tr></tbody></table><p>Businesses falling under the VAT registration threshold of <strong>BGN 100,000</strong> are currently exempt from mandatory B2B reporting but are encouraged to adopt the digital format for B2G contracts immediately to avoid exclusion from public tenders.</p><h2>Penalties for Non-Compliance</h2><p>The Bulgarian government has introduced a strict penalty regime to ensure high adoption rates and data accuracy. Non-compliance is not merely about missing deadlines but also about submitting incorrect XML data structures. The current penalty structure is as follows:</p><ul><li><strong>Isolated Errors:</strong> BGN 500 per invoice for clerical errors in mandatory fields.</li><li><strong>Systematic Non-compliance:</strong> Up to BGN 10,000 for entities failing to use the NRA-approved system for B2G transactions.</li><li><strong>Delayed Reporting:</strong> Fines proportional to the VAT amount due, often ranging from 25% to 100% of the tax value.</li></ul><h2>Infrastructure: How to Connect to the Bulgarian NRA</h2><p>To transmit an e-invoice to the Bulgarian tax authority or a B2B partner, businesses usually employ one of three methods:</p><h3>1. PEPPOL Access Points</h3><p>By using a certified PEPPOL Access Point, a Bulgarian company can send an invoice directly to the recipient’s software, regardless of the brand. The PEPPOL network acts as a secure "e-delivery" highway.</p><h3>2. API Integration with NRA Portal</h3><p>Large corporations often build direct API connections between their ERP systems and the NRA’s technical gateway. This requires significant IT investment and ongoing maintenance to keep up with schema updates.</p><h3>3. Automated Invoicing Platforms</h3><p>The most cost-effective method for SMEs is utilizing 3rd-party <a href="/en/invoicing">invoicing software</a> that handles the XML conversion, digital signing, and NRA transmission in the background. This ensures that the 20% standard VAT rate or 9% reduced rate is applied correctly according to current Bulgarian tax law.</p><h2>VAT Calculations and Reporting in Bulgaria</h2><p>In Bulgaria, Value Added Tax (VAT) is known as <strong>ДДС (DDS)</strong>. E-invoices must clearly distinguish between the different rates:</p><ul><li><strong>Standard Rate (20%):</strong> Applied to most goods and services.</li><li><strong>Reduced Rate (9%):</strong> Applied to hotel services, restaurants, and certain books/educational materials.</li><li><strong>Zero Rate (0%):</strong> Export of goods outside the EU and intra-community deliveries.</li></ul><p>The XML format must include the specific "Tax Category Code" (e.g., S for standard, E for exempt) as defined in the PEPPOL BIS 3.0 documentation. Managing these codes manually is a common source of compliance failure, making automated <a href="/en/compliance">compliance features</a> indispensable.</p><h2>Frequently Asked Questions</h2><h3>Is e-invoicing mandatory for all businesses in Bulgaria right now?</h3><p>Currently, it is not mandatory for all B2B transactions, but the B2G mandate starting in April 2026 will require all companies supplying the public sector to use PEPPOL XML formats. Full B2B mandates are expected by 2027.</p><h3>What is the standard XML format for Bulgaria?</h3><p>Bulgaria follows the EU standard EN 16931, specifically the PEPPOL BIS Billing 3.0 version of UBL 2.1 XML.</p><h3>What are the penalties for missing a mandatory e-invoice?</h3><p>Penalties range from BGN 500 to BGN 10,000 per invoice. In cases of VAT evasion linked to missing invoices, penalties can be much higher based on the tax amount.</p><h3>Does a PDF count as an e-invoice in Bulgaria?</h3><p>Under the new mandates, a simple PDF is not considered a valid electronic invoice. A valid e-invoice must be a structured data file (XML) that can be processed automatically by computers.</p><h3>Which authority oversees e-invoicing in Bulgaria?</h3><p>The National Revenue Agency (NRA), or Национална агенция за приходите, is the primary body responsible for e-invoicing regulations and tax collection.</p><h3>Are there turnover thresholds for e-invoicing?</h3><p>The mandate generally applies to all VAT-registered entities, which in Bulgaria currently requires registration if annual turnover exceeds BGN 100,000.</p><h3>How can I ensure my software is compliant?</h3><p>Ensure your software provider supports PEPPOL network transmission and can generate XML files that pass the EN 16931 validation rules used by the Bulgarian NRA.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/bulgaria-e-invoicing-xml-peppol-format.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '5 min read',
  },
  {
    slug: 'bulgaria-e-invoicing-registration-guide',
    title: `How to Register for Bulgaria's NRA E-Invoicing System (Step-by-Step)`,
    excerpt: 'Learn how to navigate Bulgaria\'s NRA e-invoicing registration requirements. Our guide covers digital certificates, B2G mandates, and upcoming 2027 B2B deadlines.',
    content: `<p>Learn how to navigate Bulgaria\'s NRA e-invoicing registration requirements. Our guide covers digital certificates, B2G mandates, and upcoming 2027 B2B deadlines. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Bulgaria E-Invoicing: Mandates, Deadlines, and Requirements</h2>
<p>To comply with Bulgaria's tax laws, businesses must interface with the <strong>National Revenue Agency (NRA)</strong>, known locally as <em>Национална агенция за приходите</em>. While B2G e-invoicing is currently mandatory via the Peppol network, a broader B2B e-invoicing framework is set for phased implementation. Mandatory B2G invoicing began in <strong>April 2026</strong>, with the full B2B mandate expected by <strong>2027</strong> for all VAT-registered entities. Failure to comply can result in penalties ranging from <strong>BGN 500 to BGN 10,000</strong> per violation.</p>

<h3>Key Facts for Bulgarian E-Invoicing Compliance</h3>
<table>
  <tr>
    <th>Tax Authority</th>
    <td>National Revenue Agency (NRA / НАП)</td>
  </tr>
  <tr>
    <th>System Name</th>
    <td>NRA E-Invoice Portal / Peppol Network</td>
  </tr>
  <tr>
    <th>B2G Mandate Date</th>
    <td>April 2026</td>
  </tr>
  <tr>
    <th>B2B Extension Date</th>
    <td>Expected 2027</td>
  </tr>
  <tr>
    <th>Standard VAT Rate</th>
    <td>20% (DDS / ДДС)</td>
  </tr>
  <tr>
    <th>Registration Threshold</th>
    <td>BGN 100,000 annual turnover</td>
  </tr>
</table>

<h2>Step 1: Obtain a Qualified Electronic Signature (QES)</h2>
<p>Before you can register for Bulgarian e-invoicing, you must possess a Qualified Electronic Signature (QES). In Bulgaria, this is a legal requirement for authenticating digital documents. The NRA system will not allow you to log in or submit invoices without a certificate issued by a certified provider (such as B-Trust or InfoNotary).</p>
<ul>
  <li>Visit an authorized provider and bring your company registration documents.</li>
  <li>Install the necessary drivers and middleware for the token on your local machine.</li>
  <li>Ensure the QES is issued in the name of the legal representative or an authorized person registered in the Commercial Register.</li>
</ul>

<h2>Step 2: Access the NRA E-Services Portal</h2>
<p>Once you have your digital certificate, you must navigate to the <a href="https://www.nra.bg">official NRA website</a>. From there, access the "E-Services" section. This portal is the central hub for all Bulgarian tax filings and invoicing reports.</p>
<p>To register for e-invoicing specifically, you will need to map your digital certificate to your VAT ID. This process ensures that every invoice sent via <a href="/en/invoicing">invoicing software</a> is verifiable and legally binding under Bulgarian law.</p>

<h2>Step 3: Configuring Your Accounts and Permissions</h2>
<p>After the initial login, you must configure the internal permissions for your team. Use the NRA portal to delegate access to members of your finance team or external providers using <a href="/en/accounting">accounting tools</a>. Bulgaria requires that any person submitting data on behalf of a company has a formal delegation of authority filed with the NRA.</p>

<h3>Required Information for Registration:</h3>
<ul>
  <li><strong>VAT Number:</strong> Your unique tax identification beginning with "BG".</li>
  <li><strong>Company Address:</strong> The registered legal address in Bulgaria.</li>
  <li><strong>Contact Email:</strong> For receiving automated validation reports and error logs.</li>
  <li><strong>ERP/System Integration:</strong> If you are using external <a href="/en/compliance">compliance features</a>, you must specify the technical interface for API connections.</li>
</ul>

<h2>Step 4: Integration with Peppol and Local Standards</h2>
<p>For B2G (Business-to-Government) transactions, Bulgaria utilizes the Peppol network. If you are a supplier to a Bulgarian hospital, municipality, or state agency, your system must be able to generate invoices in the XML format specified by the European Standard (EN 16931).</p>
<p>For B2B transactions, the NRA is currently working on the localized "SAF-T" (Standard Audit File for Tax) reporting and e-invoice clearance models. It is recommended to choose a provider that supports both the global Peppol standard and the local Bulgarian XML extensions.</p>

<h2>Penalties for Non-Compliance in Bulgaria</h2>
<p>The NRA takes digital record-keeping seriously. Under the Value Added Tax Act, businesses that fail to issue e-invoices correctly or fail to archive them for the required 10-year period face significant fines:</p>
<ul>
  <li><strong>Initial Violation:</strong> BGN 500 to BGN 2,000 for each individual invoice missing or improperly formatted.</li>
  <li><strong>Repeated Violations:</strong> Fines can escalate to BGN 10,000 for systematic non-compliance.</li>
  <li><strong>VAT Deduction Denial:</strong> If an invoice does not meet the e-invoicing standards, the buyer may be denied the right to deduct Input VAT, causing significant commercial friction.</li>
</ul>

<h2>Why Use Specialized Invoicing Software?</h2>
<p>Attempting to manage NRA compliance manually is risky. By leveraging <a href="/en/invoicing">modern invoicing software</a>, you automate the validation of VAT numbers and ensure that every document contains the mandatory fields required by the Bulgarian Tax Code, such as the date of the taxable event and the specific VAT rate applied (20% or 9%).</p>

<h3>Benefits of Automation:</h3>
<ul>
  <li>Real-time validation against the NRA database.</li>
  <li>Automatic application of the 9% reduced rate for tourism and restaurant services.</li>
  <li>Secure 10-year archiving as required by Bulgarian law.</li>
  <li>Seamless synchronization with <a href="/en/accounting">accounting tools</a> to avoid double entry.</li>
</ul>

<h2>Frequently Asked Questions (FAQ)</h2>

<h3>1. Is e-invoicing currently mandatory for all businesses in Bulgaria?</h3>
<p>As of 2024, it is primarily mandatory for B2G (Business-to-Government) transactions. For B2B, businesses must still issue invoices, but the transition to a mandatory electronic clearance system is finalized for 2027.</p>

<h3>2. What is the Bulgarian VAT registration threshold?</h3>
<p>Businesses with a taxable turnover exceeding BGN 100,000 (approximately €51,129) in the preceding 12 months must register for VAT and, subsequently, prepare for e-invoicing compliance.</p>

<h3>3. Can I use a foreign E-Signature for the NRA portal?</h3>
<p>While EU-recognized Qualified Electronic Signatures should technically be compatible, it is highly recommended to use a Bulgarian-issued QES to ensure seamless integration with the localized NRA middleware.</p>

<h3>4. How long must I store e-invoices in Bulgaria?</h3>
<p>Digital invoices must be stored for a minimum of 10 years. They must be stored in their original XML/electronic format and be readily available for NRA audit requests.</p>

<h3>5. What is the standard VAT rate in Bulgaria?</h3>
<p>The standard rate is 20%. A reduced rate of 9% applies to certain sectors like hospitality, books, and baby products. Your e-invoicing system must correctly categorize these rates to be compliant.</p>

<h3>6. Does the NRA provide a free portal for small businesses?</h3>
<p>The NRA offers basic e-services for document submission, but for high-volume B2B e-invoicing and Peppol connectivity, businesses generally require a third-party service provider.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/bulgaria-e-invoicing-registration-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'bulgaria-e-invoicing-penalties-compliance',
    title: `Bulgaria E-Invoicing Penalties: Fines for Non-Compliance (2026)`,
    excerpt: 'Learn about Bulgaria\'s upcoming e-invoicing mandates, the NRA E-Invoice System, and how to avoid fines of up to BGN 10,000 per violation.',
    content: `<p>Learn about Bulgaria\'s upcoming e-invoicing mandates, the NRA E-Invoice System, and how to avoid fines of up to BGN 10,000 per violation. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Overview of Bulgaria's E-Invoicing Mandate and Penalties</h2><p>In Bulgaria, the National Revenue Agency (NRA) – or <strong>Национална агенция за приходите</strong> – is implementing a strict e-invoicing framework starting with <strong>B2G transactions in April 2026</strong>, with a full B2B rollout planned for 2027. Businesses failing to comply face severe financial penalties ranging from <strong>BGN 500 to BGN 10,000 (~€250 to €5,100)</strong> per instance of non-compliance. All VAT-registered businesses exceeding the <strong>BGN 100,000 (€51,000)</strong> turnover threshold are subject to these stringent regulations under the NRA E-Invoice System.</p><h3>What is the Timeline for E-Invoicing in Bulgaria?</h3><p>The transition to digital tax reporting in Bulgaria is a multi-phase project designed to close the VAT gap and modernize the <strong>ДДС (DDS)</strong> collection process. While voluntary e-reporting has been encouraged, the legislative roadmap is now clear:</p><ul><li><strong>April 2026:</strong> Mandatory B2G (Business-to-Government) e-invoicing via the European standard (EN 16931).</li><li><strong>2027 (Projected):</strong> Mandatory B2B (Business-to-Business) e-invoicing for all VAT-registered entities.</li><li><strong>Ongoing:</strong> Integration of SAF-T (Standard Audit File for Tax) requirements alongside the e-invoice system.</li></ul><p>Adopting compliant <a href="/en/invoicing">invoicing software</a> early is essential to avoid the rush and ensure technical compatibility with the NRA's API requirements.</p><h2>How Much are the Fines for Non-Compliance in Bulgaria?</h2><p>The Bulgarian tax code is particularly strict regarding the documentation of VAT. Because the 20% standard VAT rate accounts for a significant portion of national revenue, the NRA enforces documentation accuracy through heavy administrative penalties. Failure to issue an electronic invoice when mandated, or issuing an invoice that does not meet the technical standards of the NRA E-Invoice System, results in escalating fines.</p><table><thead><tr><th>Violation Type</th><th>Penalty Amount (Initial)</th><th>Penalty Amount (Repeated)</th></tr></thead><tbody><tr><td>Failure to issue an e-invoice</td><td>BGN 500 - BGN 2,500</td><td>BGN 1,000 - BGN 5,000</td></tr><tr><td>Incorrect data/Schema errors</td><td>BGN 200 - BGN 1,000</td><td>BGN 400 - BGN 2,000</td></tr><tr><td>Systematic avoidance of mandate</td><td>BGN 5,000 - BGN 10,000</td><td>Up to BGN 20,000</td></tr></tbody></table><p>Beyond fiscal fines, the NRA has the authority to suspend the VAT registration of a business that repeatedly ignores compliance notifications. This can effectively halt a company's ability to operate within the European Single Market.</p><h3>What are the Technical Requirements for the NRA E-Invoice System?</h3><p>To avoid penalties, Bulgarian businesses must ensure their digital documents contain specific data points required by the <a href="https://www.nra.bg">National Revenue Agency</a>. The system requires the use of UBL 2.1 or CII formats. Key requirements include:</p><ul><li><strong>Digital Signatures:</strong> Invoices must be signed with a Qualified Electronic Signature (QES) to ensure authenticity.</li><li><strong>Archiving:</strong> Businesses must store e-invoices for a minimum of 10 years in a readable, tamper-proof format.</li><li><strong>Real-time Reporting:</strong> Unlike the old monthly reporting cycle, the new system moves toward near real-time validation of tax data.</li></ul><h3>Who is Required to Register for VAT and E-Invoicing?</h3><p>Currently, the threshold for mandatory VAT registration in Bulgaria is an annual turnover of <strong>BGN 100,000</strong>. However, businesses can voluntarily register even if they are below this threshold. Once registered, the business must adhere to all <strong>ДДС (DDS)</strong> reporting rules, including the upcoming e-invoicing mandates. Utilizing specialized <a href="/en/compliance">compliance features</a> ensures that your business stays within the legal boundaries regardless of turnover changes.</p><h2>How to Future-Proof Your Business Against Bulgarian Tax Audits</h2><p>The NRA is known for conducting thorough audits. With the digitalization of the tax system, these audits are becoming automated. If your <strong>accounting records</strong> do not match the data stored in the NRA E-Invoice System, an automated red flag is raised. To mitigate this risk:</p><h3>1. Integrate Your Systems</h3><p>Static PDF invoices will no longer be sufficient. Your internal <a href="/en/accounting">accounting tools</a> must be linked via API to the NRA portal to ensure that every transaction is validated instantly. This reduces the risk of human error, which is the leading cause of the BGN 500 per-invoice fines.</p><h3>2. Understand Local VAT Rates</h3><p>Applying the wrong tax rate is a common compliance pitfall. In Bulgaria, while the standard rate is 20%, certain sectors like tourism and restaurants enjoy a reduced rate of 9%. E-invoicing systems must be configured to automatically apply these rates based on product codes.</p><h3>3. Audit Your Archiving Process</h3><p>Under Bulgarian law, the burden of proof for tax deductions lies with the taxpayer. If an auditor requests an invoice from five years ago and you cannot produce a compliant XML file with its associated signature, the NRA may disqualify the VAT deduction and issue a fine for improper record-keeping.</p><h2>The Impact of the VAT in the Digital Age (ViDA) Initiative</h2><p>Bulgaria's move toward the NRA E-Invoice System is part of a broader EU-wide movement known as ViDA. This initiative aims to harmonize e-invoicing across all member states. For Bulgarian businesses trading across borders, this means that their systems must not only comply with local NRA rules but also be compatible with the Cross-Border Digital Reporting Requirements (DRR) expected by 2030.</p><h2>Frequently Asked Questions</h2><h3>When do the Bulgaria e-invoicing penalties take effect?</h3><p>Penalties for B2G transactions start in April 2026. For B2B transactions, enforcement is expected to follow in 2027 as the mandate expands to all VAT-registered businesses.</p><h3>Can I just send PDF invoices via email?</h3><p>No. Under the new NRA E-Invoice System, a standard PDF is not considered a legal e-invoice unless it contains structured data (XML) and a valid digital signature that can be processed by the tax authority's servers.</p><h3>What is the penalty for late filing in Bulgaria?</h3><p>Late filing of VAT returns or e-invoice data can result in fines starting from BGN 500. Repeated delays can lead to fines up to BGN 10,000 and potential de-registration from the VAT system.</p><h3>Do small businesses need to comply?</h3><p>Any business registered for VAT, which typically applies to those with over BGN 100,000 in turnover, must comply with the e-invoicing mandate once it becomes effective for their sector.</p><h3>What is the standard VAT rate in Bulgaria?</h3><p>The standard VAT (DDS) rate is 20%. There is a reduced rate of 9% for specific services, including hotel accommodation and certain restaurant services.</p><h3>How do I register for the NRA E-Invoice System?</h3><p>Registration is managed through the NRA's E-Services portal. Businesses will need a Qualified Electronic Signature (QES) to authenticate their identity and link their invoicing software to the government's API.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/bulgaria-e-invoicing-penalties-compliance.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'bulgaria-e-invoicing-foreign-companies',
    title: `Bulgaria E-Invoicing for Foreign Companies: Requirements Guide`,
    excerpt: 'Learn how foreign entities must navigate Bulgaria\'s transition to mandatory e-invoicing through the NRA system by 2026 to avoid heavy fines.',
    content: `<p>Learn how foreign entities must navigate Bulgaria\'s transition to mandatory e-invoicing through the NRA system by 2026 to avoid heavy fines. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Is E-Invoicing Mandatory in Bulgaria for Foreign Companies?</h2><p>In Bulgaria, e-invoicing is currently transitioning to a mandatory model overseen by the <strong>National Revenue Agency (NRA)</strong>, locally known as <i>Национална агенция за приходите</i>. As of early 2024, B2G (Business-to-Government) e-invoicing is mandatory for public procurement, with a broader roll-out for B2B transactions expected by <strong>April 2026</strong> for central government entities and a full mandatory domestic B2B rollout planned for <strong>2027</strong>. Foreign companies registered for VAT in Bulgaria must comply if they exceed the registration threshold of <strong>BGN 100,000 (~&euro;51,129)</strong>. Non-compliance can result in substantial penalties ranging from <strong>BGN 500 to BGN 10,000</strong> per instance of systematic violation.</p><h3>The Role of the National Revenue Agency (NRA)</h3><p>The NRA is the central authority managing tax compliance and the digital infrastructure for e-invoicing. Foreign businesses operating within Bulgarian borders or providing services to Bulgarian residents must interface with the NRA's systems, specifically regarding VAT reporting through the <strong>VIES</strong> system and the upcoming centralized e-invoice clearing platform. Integrating modern <a href="/en/invoicing">invoicing software</a> is becoming a necessity to ensure that data flows seamlessly to the NRA servers without manual errors.</p><h2>Understanding the Bulgarian VAT (DDS) Structure</h2><p>For any foreign company issuing e-invoices, understanding the local tax rates is fundamental. Bulgaria applies a Value Added Tax (VAT), locally referred to as <strong>ДДС (DDS)</strong>. The standard rate is <strong>20%</strong>, which applies to most goods and services. A reduced rate of <strong>9%</strong> is applicable to specific sectors such as hotel services, tourism, and certain restaurant services. Ensuring your <a href="/en/compliance">compliance features</a> are updated to handle these specific rate changes is critical for foreign entities.</p><h3>Who Must Register for VAT in Bulgaria?</h3><p>Foreign companies must monitor their taxable turnover closely. The mandatory registration threshold is currently BGN 100,000. Under the new digital mandate, once registered, all invoices issued for B2B transactions must eventually be transmitted electronically. For foreign businesses with no fixed establishment but a VAT registration (via a tax representative), the rules remain strict. You must issue invoices that meet the technical specifications of the NRA to ensure deductibility for your Bulgarian clients.</p><h2>Technical Requirements and Standards</h2><p>Bulgaria follows European standards for electronic invoicing, primarily the <strong>EN 16931</strong> standard. For B2G transactions, the Peppol network is often utilized, but the NRA is moving toward a more centralized clearance model for B2B. Foreign companies should look for <a href="/en/accounting">accounting tools</a> that support the <strong>XML</strong> format required by Bulgarian authorities.</p><table><thead><tr><th>Requirement</th><th>Details</th></tr></thead><tbody><tr><td>Mandatory System</td><td>NRA E-Invoice System (Clearing Model)</td></tr><tr><td>B2G Mandate Date</td><td>April 2026 (Full implementation)</td></tr><tr><td>B2B Planned Date</td><td>2027 (Expected)</td></tr><tr><td>Standard VAT Rate</td><td>20%</td></tr><tr><td>Threshold for Registration</td><td>BGN 100,000 (~&euro;51,000)</td></tr><tr><td>Language Requirement</td><td>Bulgarian (though dual-language is permitted)</td></tr></tbody></table><h3>Electronic Signatures and Storage</h3><p>To ensure the authenticity of origin and integrity of content, e-invoices in Bulgaria must typically be signed with a Qualified Electronic Signature (QES). Furthermore, documents must be archived for a period of 10 years. For foreign companies, cloud-based storage that complies with both Bulgarian law and GDPR is the safest route for long-term document retention.</p><h2>Penalties for Non-Compliance in Bulgaria</h2><p>The Bulgarian tax authorities take a rigorous approach to documentation. The penalties for failing to issue an invoice or issuing one that does not comply with the digital format are progressive:</p><ul><li><strong>First-time violations:</strong> Small administrative fines starting at BGN 500.</li><li><strong>Systematic Non-compliance:</strong> Fines can escalate to BGN 10,000 per invoice for major discrepancies.</li><li><strong>Audit Risks:</strong> Incorrect e-invoicing can trigger a full VAT audit of the foreign company, potentially leading to the loss of VAT deduction rights for the buyer.</li></ul><h2>Step-By-Step: E-Invoicing Setup for Foreign Entities</h2><ol><li><strong>VAT Registration:</strong> If turnover exceeds BGN 100,000, apply for a Bulgarian VAT number through the <a href="https://www.nra.bg">NRA website</a>.</li><li><strong>Obtain a QES:</strong> Secure a Qualified Electronic Signature recognized in the EU to sign digital documents.</li><li><strong>Select a Software Provider:</strong> Choose <a href="/en/invoicing">invoicing software</a> that supports Bulgarian tax localization and NRA API integration.</li><li><strong>Map Your Data:</strong> Ensure your ERP or billing system can output XML files that match the Bulgarian national schema.</li></ol><h3>Will Bulgaria adopt a Decentralized or Centralized model?</h3><p>Current indications from the Ministry of Finance suggest a transition to a <strong>continuous transaction control (CTC)</strong> model. This means the NRA will receive invoice data in real-time or near real-time, similar to systems in Italy or Romania. For foreign companies, this necessitates an automated workflow rather than manual uploads.</p><h2>Frequently Asked Questions</h2><h3>1. Does a foreign company need a local tax agent for e-invoicing?</h3><p>While not strictly mandatory for all EU companies, non-EU companies must appoint a tax representative in Bulgaria. This representative will often manage the e-invoicing portal access for the foreign entity.</p><h3>2. What is the deadline for B2G compliance?</h3><p>Public procurement e-invoicing is already active for many entities, but a full mandatory requirement for all government suppliers is set for April 2026.</p><h3>3. What are the penalties for late filing?</h3><p>Late filing of the VAT ledger (which includes invoice data) can result in fines from BGN 500 to BGN 1,000 per month of delay.</p><h3>4. Can I use my existing international invoicing software?</h3><p>Yes, provided your provider has integrated the specific Bulgarian NRA technical requirements and supports the local XML schema.</p><h3>5. Is the BGN 100,000 threshold based on global or local turnover?</h3><p>The threshold applies specifically to taxable supplies made within the territory of Bulgaria.</p><h3>6. Are there specific language requirements for e-invoices?</h3><p>Yes, while you can provide an English version for your internal records, the official invoice submitted to the NRA and provided to the Bulgarian counterparty must contain the mandatory fields in Bulgarian.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/bulgaria-e-invoicing-foreign-companies.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  // ═══════════════════════════════════════════════════
  // CHILE — DTE / SII
  // ═══════════════════════════════════════════════════
  {
    slug: 'chile-e-invoicing-dte-sii-guide',
    title: `Chile E-Invoicing Guide: DTE/SII System, Requirements & Compliance (2026)`,
    excerpt: 'Master the Chilean DTE e-invoicing system under SII regulations. Learn about XML requirements, 19% IVA compliance, and how to avoid costly tax penalties.',
    content: `<p>Master the Chilean DTE e-invoicing system under SII regulations. Learn about XML requirements, 19% IVA compliance, and how to avoid costly tax penalties. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Overview of E-Invoicing in Chile (DTE)</h2>
<p>E-invoicing in Chile is mandatory for 100% of taxpayers since 2018, regulated by the <strong>Servicio de Impuestos Internos (SII)</strong> via the <strong>Documento Tributario Electrónico (DTE)</strong> system. Businesses must issue electronic documents for all commercial transactions, subject to the standard <strong>IVA (Impuesto al Valor Agregado) rate of 19%</strong>. Failure to comply can result in fines ranging from <strong>1 to 3 UTM per document</strong> (~CLP 65,000 to 195,000) and the potential suspension of tax certificates.</p>

<p>As one of the global pioneers in electronic fiscal controls, Chile launched its pilot program in 2003. By 2014, Law No. 20.727 established a phased rollout that culminated in April 2018, making electronic issuance the sole legal method for reporting business-to-business (B2B) and business-to-consumer (B2C) sales. Today, the SII operates a sophisticated real-time validation model that ensures tax transparency and reduces evasion.</p>

<h2>What is the DTE System?</h2>
<h3>Understanding Documentos Tributarios Electrónicos</h3>
<p>The DTE is a digital file, structured in <strong>XML format</strong>, that has the same legal validity as a paper invoice. Each DTE must be digitally signed by the issuer using a RUT-linked digital certificate and validated by the SII. The system covers several document types, including:</p>
<ul>
  <li><strong>Factura Electrónica (Type 33):</strong> Standard B2B invoice with IVA breakdown.</li>
  <li><strong>Factura No Afecta o Exenta (Type 34):</strong> Invoices for tax-exempt services or goods.</li>
  <li><strong>Nota de Crédito (Type 61):</strong> For corrections or cancellations.</li>
  <li><strong>Nota de Débito (Type 56):</strong> For increasing original invoice amounts.</li>
  <li><strong>Guía de Despacho (Type 52):</strong> Electronic waybills for goods in transit.</li>
  <li><strong>Boleta Electrónica (Type 39):</strong> B2C sales receipts (mandatory since 2021).</li>
</ul>

<h2>How Does Chile's E-Invoicing Workflow Work?</h2>
<p>Managing <a href="/en/invoicing">invoicing software</a> in Chile requires integration with the SII platform. The workflow typically follows these steps:</p>
<ol>
  <li><strong>Generation:</strong> The taxpayer creates an XML file containing all transaction data, including the CAF (Código de Autorización de Folios) or authorized number range.</li>
  <li><strong>Signing:</strong> The document is digitally signed using a private key certificate authorized by the SII.</li>
  <li><strong>Transmission:</strong> The file is sent immediately to the <a href="https://www.sii.cl">SII website</a> via web services.</li>
  <li><strong>Validation:</strong> The SII performs structural and fiscal checks. If valid, it issues a receipt of acceptance.</li>
  <li><strong>Exchange:</strong> The issuer sends the DTE to the recipient (buyer) via email or a shared repository. The buyer has 8 days to accept or reject the document.</li>
</ol>

<h2>Key Requirements for Compliance in 2026</h2>
<p>To stay compliant with Chilean tax laws, businesses must meet several technical and administrative benchmarks. Integrating robust <a href="/en/compliance">compliance features</a> into your ERP is no longer optional; it is a necessity for business continuity.</p>

<h3>Digital Certificates</h3>
<p>Every taxpayer must obtain a Digital Signature (Firma Digital) from a certified provider. This signature identifies the representative of the company and ensures the integrity of the XML data sent to the SII.</p>

<h3>CAF (Folio Authorization)</h3>
<p>Issuers must request "Folios" (sequential numbers) from the SII online portal. These are downloaded as a CAF file and loaded into your <a href="/en/accounting">accounting tools</a> to be stamped onto each invoice. Without a valid CAF, an invoice is legally void.</p>

<h3>The 8-Day Rule</h3>
<p>In Chile, once a Factura Electrónica is received, the buyer has exactly 8 days to claim the IVA credit. If they do not explicitly reject the invoice within this window, the SII considers it "acknowledged and accepted," making it an enforceable executive title for debt collection.</p>

<h2>Tax Rates and Deadlines</h2>
<table>
  <thead>
    <tr>
      <th>Tax Component</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Standard IVA Rate</td>
      <td>19%</td>
    </tr>
    <tr>
      <td>Submission Deadline</td>
      <td>Real-time (Immediate)</td>
    </tr>
    <tr>
      <td>F29 Form Deadline</td>
      <td>20th of the following month (for electronic issuers)</td>
    </tr>
    <tr>
      <td>Record Keeping</td>
      <td>6 years (electronic storage required)</td>
    </tr>
  </tbody>
</table>

<h2>Penalties for Non-Compliance</h2>
<p>The SII is rigorous in enforcing DTE regulations. Non-compliance not only results in financial loss but also disrupts the ability to claim tax credits. The following penalties apply:</p>
<ul>
  <li><strong>Failure to Issue DTE:</strong> Fines between 50% and 500% of the tax amount, with a minimum of 2 UTM and a maximum of 40 UTM.</li>
  <li><strong>Delayed Reporting:</strong> 1 to 3 UTM per document (~CLP 65,000 - 195,000) for failing to transmit documents correctly to the SII.</li>
  <li><strong>Recidivism:</strong> Closure of business premises for up to 20 days and suspension of the digital certificate, effectively halting operations.</li>
  <li><strong>Incorrect Data:</strong> Errors in the XML structure or tax calculation can lead to audit flags and the rejection of IVA credits for clients, damaging business relationships.</li>
</ul>

<h2>Transitioning to Modern E-Invoicing Solutions</h2>
<p>While the SII provides a free basic portal (Sistema de Facturación Gratuito del SII), it is often insufficient for medium-to-large enterprises due to a lack of automation, limited storage, and no integration with inventory or <a href="/en/accounting">accounting tools</a>. Modern businesses prefer private software providers (PES - Proveedores de Facturación Electrónica) that offer API connectivity and automated 8-day acceptance tracking.</p>

<h3>Benefits of Automating Your Chilean Invoicing</h3>
<ul>
  <li><strong>Reduced Errors:</strong> Automated tax calculations prevent manual entry mistakes on the 19% IVA.</li>
  <li><strong>Cash Flow Management:</strong> Instant visibility into accepted invoices and pending tax credits.</li>
  <li><strong>Audit Readiness:</strong> Centralized digital archives meet the 6-year legal storage requirement automatically.</li>
  <li><strong>Scalability:</strong> Handle high volumes of Boletas Electrónicas without slowing down POS systems.</li>
</ul>

<h2>Frequently Asked Questions</h2>
<h3>1. Who is required to issue e-invoices in Chile?</h3>
<p>All legal entities and individuals who are first-category taxpayers (business income) or second-category taxpayers (professional services) and are authorized to issue tax documents must use the DTE system. There are virtually no remaining exemptions.</p>

<h3>2. What is a "Boleta Electrónica" vs. a "Factura Electrónica"?</h3>
<p>A Factura Electrónica (Type 33) is used for B2B transactions where the buyer needs to claim IVA credit. A Boleta Electrónica (Type 39) is used for B2C sales to end consumers who do not require a tax credit.</p>

<h3>3. Do I need a physical printer for e-invoices?</h3>
<p>No, the legal document is the XML file. However, for goods in transit, a "Representación Impresa" (printed PDF or digital display) must accompany the shipment to satisfy police or SII checks during transportation.</p>

<h3>4. How much is 1 UTM in 2024/2025?</h3>
<p>The UTM (Unidad Tributaria Mensual) is an inflation-indexed unit. As of 2024, 1 UTM is approximately CLP 65,000 (roughly $65-70 USD). Penalties are calculated based on the UTM value at the time of the infraction.</p>

<h3>5. Can I cancel an invoice after it is sent to the SII?</h3>
<p>Once a Factura Electrónica is validated by the SII, it cannot be deleted. You must issue a <strong>Nota de Crédito Electrónica</strong> to nullify the transaction or correct the amounts.</p>

<h3>6. Is the 19% IVA applied to all goods?</h3>
<p>Most goods and services carry the 19% rate. However, some specific exports and items like books or certain financial services may be exempt (Exenta). You must use the corresponding DTE Type 34 for these transactions.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/chile-e-invoicing-dte-sii-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '5 min read',
  },
  {
    slug: 'chile-dte-xml-format-requirements',
    title: `Chile DTE XML Format: SII Schema Requirements & Validation`,
    excerpt: 'Master the technical requirements for Chile\'s DTE XML format. Learn about SII schema validation, CAF folios, and digital signature standards for tax compliance.',
    content: `<p>Master the technical requirements for Chile\'s DTE XML format. Learn about SII schema validation, CAF folios, and digital signature standards for tax compliance. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>What are the Chile DTE XML Format Requirements?</h2><p>In Chile, the <strong>Documento Tributario Electrónico (DTE)</strong> is the mandatory XML format for all commercial transactions. Regulated by the <strong>Servicio de Impuestos Internos (SII)</strong>, the system became fully mandatory for all taxpayers in 2018 under Law 20.727. Every invoice must follow a strict XML schema, be signed with a X.509 digital certificate, and include a unique digital stamp (TED). Non-compliance results in penalties ranging from 1 to 3 UTM (approx. CLP 65,000 to 195,000) per document and may lead to the suspension of your tax certificate.</p><h3>Understanding the DTE Ecosystem and SII Mandates</h3><p>The Chilean e-invoicing model is one of the most mature in the world. Since the initial 2014 rollout, the SII has standardized the exchange of fiscal data to ensure the 19% <strong>IVA (Impuesto al Valor Agregado)</strong> is captured accurately. To operate, businesses must use certified <a href="/en/invoicing">invoicing software</a> that can handle XML generation, CAF management, and real-time SII communication.</p><h2>The Anatomy of a Chilean DTE XML File</h2><p>The DTE is not a single document type but a family of electronic documents. The technical schema (XSD) defined by the SII requires several mandatory blocks of data. Failure to include these elements results in an immediate rejection by the SII central platform.</p><h3>1. The Document Header (Encabezado)</h3><p>This section contains the core metadata of the transaction:</p><ul><li><strong>IdDoc:</strong> Includes the document type (e.g., Type 33 for electronic invoices), the Folio number, and the issuance date.</li><li><strong>Emisor:</strong> Detailed information about the sender, including the RUT (Rol Único Tributario), legal name, and economic activity code.</li><li><strong>Receptor:</strong> Identification of the buyer, including their RUT and business address.</li></ul><h3>2. Detail Lines (Detalle)</h3><p>Each line item must specify the product or service name, quantity, unit price, and the applicable tax rate. If an item is exempt from IVA, it must be flagged with a specific indicator code within the XML structure.</p><h3>3. The Electronic Timbre (TED)</h3><p>The <strong>Timbre Electrónico DTE (TED)</strong> is a required graphical and data element. It is a digital signature fragment represented in a PDF417 barcode. This ensures the document's authenticity can be verified even if printed on paper. It contains a fragment of the XML signed with the private key derived from the CAF.</p><h2>What is the CAF (Código de Autorización de Folios)?</h2><p>The CAF is a critical security component in Chile's system. It is a digital file provided by the SII that contains a range of authorized invoice numbers (folios) and a private key. </p><h3>How CAF Works in the XML Schema</h3><p>Before generating an XML, your <a href="/en/compliance">compliance features</a> must verify that a valid folio is available. The XML file must embed the CAF data to prove that the SII has pre-authorized the specific invoice number being used. CAFs have an expiration date and are limited to specific document types; using an expired CAF will result in a "Document Rejected" status during validation.</p><h2>Digital Signatures and Connectivity Requirements</h2><p>Every DTE transmitted to the SII must be signed using a <strong>Digital Certificate</strong> issued to an authorized representative of the company. This signature provides non-repudiation and integrity to the XML file.</p><table><thead><tr><th>Requirement</th><th>Specification</th><th>Authority</th></tr></thead><tbody><tr><td>XML Standard</td><td>DTE Schema v1.0</td><td>SII</td></tr><tr><td>Signature Type</td><td>X.509 Digital Certificate</td><td>Certified Providers</td></tr><tr><td>Tax Rate</td><td>19% IVA</td><td>Ministry of Finance</td></tr><tr><td>Transmission Protocol</td><td>SOAP / HTTPS Web Services</td><td>SII</td></tr><tr><td>Storage Mandate</td><td>6 Years (Digital)</td><td>Tax Code Art. 17</td></tr></tbody></table><h2>The Validation Process: Envío and Respuesta</h2><p>Once the XML is generated and signed, it is sent to the SII via a web service. This is known as the <strong>EnvíoDTE</strong>. The SII performs two levels of validation:</p><h3>Syntactic Validation</h3><p>The SII checks if the XML structure matches the official XSD. If there is a missing tag or an incorrect data type (e.g., text in a numeric field), the document is rejected immediately.</p><h3>Business Logic Validation</h3><p>The SII verifies if the RUTs are valid, if the Folio exists within the assigned CAF range, and if the tax calculations are correct. Successful validation results in an "Aceptado" status. If errors are found, the SII returns a status of "Rechazado" or "Reparo" (Accepted with observations).</p><h2>Common Document Types in Chile</h2><p>Developers and accountants using <a href="/en/accounting">accounting tools</a> must be familiar with the following codes:</p><ul><li><strong>Type 33:</strong> Factura Electrónica (Standard Invoice)</li><li><strong>Type 34:</strong> Factura Exenta (Exempt Invoice)</li><li><strong>Type 61:</strong> Nota de Crédito (Credit Note)</li><li><strong>Type 56:</strong> Nota de Débito (Debit Note)</li><li><strong>Type 52:</strong> Guía de Despacho (Dispatch Note)</li><li><strong>Type 39:</strong> Boleta Electrónica (Sales Receipt for Consumers)</li></ul><h2>Penalties for DTE Non-Compliance</h2><p>The SII monitors transmission in real-time. Failure to issue a DTE for a taxable sale can lead to:</p><ul><li><strong>Financial Fines:</strong> 1 to 3 UTM per instance of non-issuance.</li><li><strong>Business Closure:</strong> In extreme cases of recidivism, the SII can order a temporary closure of the physical establishment (Clausura).</li><li><strong>Tax Credit Loss:</strong> If a buyer accepts an invalid XML (non-compliant format), they may lose the right to claim the 19% IVA tax credit.</li></ul><h2>Frequently Asked Questions</h2><h3>1. What is the official website for DTE technical documentation?</h3><p>All technical schemas, manuals, and CAF download portals are located at <a href="https://www.sii.cl">https://www.sii.cl</a> under the "Factura Electrónica" section.</p><h3>2. Does Chile require a specific XML encoding?</h3><p>Yes, the DTE XML files must be encoded in <strong>ISO-8859-1</strong> (Latin-1), not the standard UTF-8. Using UTF-8 often leads to validation errors with special characters like 'ñ' or accents.</p><h3>3. How long do I have to store DTE files?</h3><p>By law, Chilean taxpayers must store the original XML files for a minimum of 6 years. This storage must be digital and accessible for SII audits.</p><h3>4. What is a 'Factura de Exportación'?</h3><p>It is a specific DTE (Type 110) used for international trade. It follows a different schema that includes customs information and is exempt from the domestic 19% IVA.</p><h3>5. Can I issue a DTE without a CAF?</h3><p>No. Every electronic document must be linked to a valid Folio Authorization (CAF) obtained from the SII website. Without a CAF, the digital signature cannot be generated for the TED block.</p><h3>6. What happens if the SII web service is down?</h3><p>Taxpayers can issue documents in "Contingency Mode" using pre-stamped paper forms if authorized, though this is rare as the SII offers high-availability APIs for transmission.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/chile-dte-xml-format-requirements.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'chile-sii-registration-setup-guide',
    title: `How to Register for Chile's SII E-Invoicing System (Step-by-Step)`,
    excerpt: 'Learn how to register with Chile\'s SII, obtain digital certificates, and manage DTE folios to ensure total tax compliance and avoid heavy penalties.',
    content: `<p>To register for Chile's <strong>DTE (Documento Tributario Electrónico)</strong> system, all taxpayers must use the <strong>Servicio de Impuestos Internos (SII)</strong> portal at <a href="https://www.sii.cl">https://www.sii.cl</a>. While e-invoicing has been mandatory since 2018, new businesses must register immediately, obtain a <strong>Digital Certificate</strong>, and request <strong>CAF (Código de Autorización de Folios)</strong> ranges. Failure to comply results in penalties ranging from <strong>1 to 3 UTM per invoice</strong> (approx. CLP 65,000 to 195,000) and potential suspension of your tax certificate.</p>

<h2>What is the DTE System in Chile?</h2>
<p>The DTE system is the backbone of Chile’s fiscal ecosystem. Managed by the SII, it requires every commercial transaction to be documented electronically. Whether you are a small startup or a large corporation, the mandate for <strong>IVA (Impuesto al Valor Agregado)</strong> at a flat rate of <strong>19%</strong> must be reported through these digital documents.</p>
<p>As part of your <a href="/en/compliance">compliance features</a> strategy, understanding that Chile does not allow paper invoices is critical. Every document, from <em>Facturas</em> to <em>Boletas Electrónicas</em>, must be signed with a valid digital signature and transmitted to the SII servers for real-time validation.</p>

<h2>Who is Required to Register?</h2>
<p>Unlike some European or North American models that have revenue thresholds, the Chilean system requires <strong>100% of taxpayers</strong> who issue invoices to use the electronic system. There is no minimum income exemption. If you sell goods or provide professional services subject to IVA, you must be registered in the SII's electronic billing system.</p>

<h3>Key Deadlines and Compliance History</h3>
<table>
  <tr>
    <th>Phase</th>
    <th>Date</th>
    <th>Requirement</th>
  </tr>
  <tr>
    <td>Initial Mandate</td>
    <td>2014</td>
    <td>Large Enteprises</td>
  </tr>
  <tr>
    <td>Full Adoption</td>
    <td>February 2018</td>
    <td>All Urban and Rural taxpayers</td>
  </tr>
  <tr>
    <td>Boleta Electrónica</td>
    <td>January 2021</td>
    <td>Mandatory for all retail receipts</td>
  </tr>
</table>

<h2>Step 1: Obtaining Your Digital Certificate</h2>
<p>Before you can log into the SII "Sistema de Facturación," you must purchase a <strong>Certificado Digital</strong> (Digital Certificate). This acts as your electronic ID card and is used to sign every DTE you issue. This certificate must be purchased from an SII-accredited provider.</p>
<ul>
  <li><strong>Format:</strong> Typically a .p12 or .pfx file.</li>
  <li><strong>Installation:</strong> Must be installed in your browser or uploaded to your <a href="/en/invoicing">invoicing software</a>.</li>
  <li><strong>Validity:</strong> Usually expires every 1, 2, or 3 years.</li>
</ul>

<h2>Step 2: Choosing Your Issuance Model</h2>
<p>The SII offers two distinct paths for digital invoicing:</p>
<ol>
  <li><strong>SII Free Portal (Sistema de Facturación Gratuito del SII):</strong> Best for micro-businesses with low transaction volumes. It is manual and requires logging in for every invoice.</li>
  <li><strong>Market Software (Software de Mercado):</strong> Best for growing businesses that need automation, inventory integration, and high-volume processing. This involves using specialized <a href="/en/accounting">accounting tools</a> that connect to the SII API.</li>
</ol>

<h2>Step 3: The Registration Process (Inscripción)</h2>
<p>Once you have your certificate, follow these steps on the SII website:</p>
<h3>Accessing the Portal</h3>
<p>Navigate to <em>Servicios Online</em> -> <em>Factura Electrónica</em> -> <em>Sistema de facturación de mercado</em> (or <em>gratuito</em>) -> <em>Inscripción</em>. You will need to authenticate using the Digital Certificate of the legal representative of the company.</p>

<h3>Technical Testing (The Set of Trials)</h3>
<p>If you are using market software, the SII requires a "Set de Prueba" (Test Set). This involves sending dummy documents to the SII's sandbox environment to ensure your XML files meet the schema requirements. These tests include:</p>
<ul>
  <li>Sending a standard Factura Electrónica.</li>
  <li>Sending a Notas de Crédito (Credit Note).</li>
  <li>Sending a Notas de Débito (Debit Note).</li>
  <li>Simulating a daily sales log (Reporte de Consumo de Folios).</li>
</ul>

<h2>Step 4: Requesting CAF (Folio Ranges)</h2>
<p>You cannot simply number your invoices from 1 to 100 on your own. You must request a <strong>CAF (Código de Autorización de Folios)</strong>. This is a digital file provided by the SII that contains a range of authorized numbers.</p>
<p>To download a CAF:
  <ul>
    <li>Go to the <em>Folios</em> section in the SII portal.</li>
    <li>Select the document type (Factura 33, Boleta 39, etc.).</li>
    <li>Enter the quantity of folios needed.</li>
    <li>Download the XML file and upload it to your invoicing system.</li>
  </ul>
</p>

<h2>Penalties for Non-Compliance</h2>
<p>The Chilean tax authority is rigorous regarding enforcement. Penalties are pegged to the <strong>UTM (Unidad Tributaria Mensual)</strong>, an inflation-indexed unit of account.</p>
<ul>
  <li><strong>Issuing Paper instead of DTE:</strong> 1 to 3 UTM per document.</li>
  <li><strong>Failure to send the XML to SII:</strong> 50% to 500% of the tax amount involved.</li>
  <li><strong>Repeat Offenders:</strong> Temporary closure of the physical commercial establishment and revocation of digital issuance permissions.</li>
</ul>

<h2>Managing IVA at 19%</h2>
<p>The standard IVA rate is <strong>19%</strong>. Your DTE must clearly distinguish between the <em>Neto</em> (Net amount), <em>IVA</em>, and <em>Total</em>. Since 2023, almost all professional services are also subject to this 19% tax, meaning registration with the SII for DTE is more critical than ever for service providers who previously issued tax-exempt receipts.</p>

<h2>Digital Signature and Final Validation</h2>
<p>Every DTE consists of an XML file that contains the <strong>Timbre Electrónico de Impuestos Internos (TED)</strong>. This is a 2D barcode (PDF417) that appears on the printed version of the invoice. While the digital XML is the legal document, the printed version (representación impresa) must carry this barcode to be valid for transit of goods.</p>

<h2>Frequently Asked Questions</h2>
<h3>1. Do I need an SII password or a Digital Certificate?</h3>
<p>You need both. The password is for logging into the portal, but the Digital Certificate is mandatory for signing and submitting electronic documents (DTEs).</p>
<h3>2. How long does the registration process take?</h3>
<p>If using the SII Free Portal, it is almost immediate. If using market software, the testing and certification phase can take 5 to 10 business days depending on your software provider's readiness.</p>
<h3>3. What happens if I run out of Folios (CAF)?</h3>
<p>Your system will block the issuance of new invoices. You must proactively request a new range from the SII website before your current stock hits zero.</p>
<h3>4. Is the Boleta Electrónica different from the Factura?</h3>
<p>Yes. The <em>Factura</em> is for B2B transactions where the buyer needs to claim IVA credit. The <em>Boleta</em> is for the final consumer (B2C). Both must be digital.</p>
<h3>5. Can I use my smartphone for SII e-invoicing?</h3>
<p>Yes, the SII provides an app called "e-Boleta" for retail receipts, and many modern <a href="/en/invoicing">invoicing software</a> providers offer mobile apps that interface with the SII system.</p>
<h3>6. What is the penalty for late IVA filing?</h3>
<p>Late filing of the monthly F29 form (which aggregates your DTE data) results in interest and fines based on the percentage of the tax due, typically starting at 10% of the unpaid tax.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/chile-sii-registration-setup-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '5 min read',
  },
  {
    slug: 'chile-e-invoicing-penalties-compliance',
    title: `Chile E-Invoicing Penalties: SII Fines for Non-Compliance (2026)`,
    excerpt: 'Avoid costly SII fines in Chile. Learn about DTE mandates, UTM-based penalties, and how to maintain tax compliance to prevent certificate suspension.',
    content: `<p>Avoid costly SII fines in Chile. Learn about DTE mandates, UTM-based penalties, and how to maintain tax compliance to prevent certificate suspension. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Chile's E-Invoicing Mandate: Essential Compliance Data</h2> <p>In Chile, e-invoicing is governed by the <strong>Servicio de Impuestos Internos (SII)</strong> under the <strong>DTE (Documento Tributario Electrónico)</strong> system. Failure to issue electronic invoices correctly results in fines ranging from <strong>1 to 3 UTM</strong> (Unidad Tributaria Mensual) per document, approximately <strong>CLP 65,000 to 195,000</strong> ($65–$195 USD). Since the 2018 universal mandate, all taxpayers must use the SII portal or certified software to report the <strong>19% IVA (Impuesto al Valor Agregado)</strong> or face immediate suspension of their digital tax certificate.</p> <h2>What is the DTE System and Who Must Comply?</h2> <p>Chile is a pioneer in Latin American tax digitization. The <em>Documento Tributario Electrónico</em> (DTE) is the legal digital format for invoices, credit notes, and debit notes. While the rollout began in 2014, as of February 2018, 100% of Chilean businesses—regardless of turnover or size—are required to issue electronic documents. Managing these requirements effectively often requires advanced <a href="/en/invoicing">invoicing software</a> that integrates directly with the SII servers.</p> <h3>Key Dates in Chile’s E-Invoicing History</h3> <ul> <li><strong>2014:</strong> Commencement of the mandatory phase for large enterprises.</li> <li><strong>2017:</strong> Mandatory inclusion of small and medium enterprises (SMEs) in urban areas.</li> <li><strong>2018:</strong> Full universal mandate; end of paper invoicing for all business categories.</li> <li><strong>2021:</strong> Introduction of mandatory electronic sales receipts (Boleta Electrónica).</li> </ul> <h2>The Cost of Non-Compliance: SII Penalty Structure</h2> <p>The SII does not take e-invoicing negligence lightly. Penalties are indexed to the UTM (Monthly Tax Unit), which adjusts for inflation, ensuring fines remain significant over time. Understanding these risks is critical for any business using local <a href="/en/accounting">accounting tools</a>.</p> <h3>1. Fines for Missing or Incorrect DTEs</h3> <p>If a business fails to issue an invoice for a taxable sale, or if the invoice is issued in paper format when digital is required, the SII imposes a fine between 50% and 500% of the tax amount involved. At a minimum, the fine is 2 UTM per transaction. For simple administrative errors where tax wasn't necessarily evaded, the fine typically stays within the 1 to 3 UTM range per document.</p> <h3>2. Technical Non-Compliance and Late Submission</h3> <p>DTEs must be sent to the SII in real-time or within specific grace periods (usually 24 hours for validation). Repeated late submissions Can lead to audits and fines. If the DTE does not meet the technical XML schema requirements defined by the SII, the document is rejected, and the transaction is legally considered "un-invoiced."</p> <h3>3. Suspension of Digital Tax Certificates</h3> <p>Perhaps the most severe penalty is the suspension of the taxpayer's ability to issue invoices. If the SII detects fraudulent activity or repeated refusal to correct compliance errors, they can revoke the Digital Certificate. This effectively shuts down the business's ability to trade legally within Chile.</p> <h2>Table: Penalty Breakdown for 2024-2026</h2> <table border="1" style="width: 100%; border-collapse: collapse;"> <thead> <tr style="background-color: #f2f2f2;"> <th>Infraction Type</th> <th>Penalty Amount (UTM)</th> <th>Estimated CLP Fine</th> <th>Additional Action</th> </tr> </thead> <tbody> <tr> <td>Failure to issue DTE</td> <td>2 - 12 UTM</td> <td>CLP 130,000 - 780,000</td> <td>Possible closure of premises</td> </tr> <tr> <td>Late submission to SII</td> <td>1 - 3 UTM per doc</td> <td>CLP 65,000 - 195,000</td> <td>Audit risk increase</td> </tr> <tr> <td>Technical Schema Errors</td> <td>1 UTM</td> <td>CLP 65,000</td> <td>Document rejection</td> </tr> <tr> <td>Repeat Offenses</td> <td>Escalating</td> <td>Up to 40 UTM</td> <td>Certificate revocation</td> </tr> </tbody> </table> <h2>How to Ensure Compliance with SII Requirements</h2> <p>To avoid the aforementioned penalties, businesses must adopt robust <a href="/en/compliance">compliance features</a> within their financial workflows. The SII provides a free basic portal (Sistema de Facturación Gratuito del SII), but most growing businesses opt for market-based solutions for automation.</p> <h3>Step 1: Obtain a Digital Certificate</h3> <p>Every taxpayer must have a valid digital signature (Certificado Digital) purchased from an SII-authorized provider. This acts as your digital identity for signing DTEs.</p> <h3>Step 2: Use Certified Software</h3> <p>Your software must be able to generate the mandatory XML format, perform signature encryption, and communicate with the SII's REST/SOAP APIs. It must also handle the receipt of XMLs from suppliers (<em>Ruse de Recibo</em>).</p> <h3>Step 3: Archive and Storage</h3> <p>Under Chilean law, electronic documents must be archived for a minimum of 6 years. These must be stored in their original XML format, as the PDF (CAF) version is merely a visual representation and not the legal document.</p> <h2>The Role of IVA (VAT) in E-Invoicing</h2> <p>The standard IVA rate in Chile is <strong>19%</strong>. The DTE system is designed specifically to track this tax in real-time. By automating the reporting of IVA through e-invoices, the SII can pre-fill the F29 tax form (Monthly Tax Declaration). Discrepancies between your issued DTEs and your F29 declaration are the number one trigger for SII audits in 2026.</p> <h3>Common Compliance Traps</h3> <ul> <li><strong>Incorrect CAF:</strong> The <em>Código de Autorización de Folios</em> (CAF) is a file provided by the SII that gives you a range of invoice numbers. Using an expired CAF or an exhausted range will result in rejected invoices.</li> <li><strong>Timely Acceptance:</strong> When you receive a purchase invoice, you have 8 days to accept or reject it. Failure to do so results in implicit acceptance, which affects your IVA credit.</li> </ul> <h2>Frequently Asked Questions</h2> <h3>1. What is the current UTM value in Chile?</h3> <p>The UTM (Unidad Tributaria Mensual) changes monthly based on inflation. As of early 2024, it is approximately CLP 65,000. For the most accurate 2026 calculations, always check the official <a href="https://www.sii.cl">SII website</a>.</p> <h3>2. Can I still use paper invoices in Chile?</h3> <p>No. Paper invoices are no longer legally valid for VAT-registered businesses. Only in extreme cases of geographic isolation with no internet connectivity (duly authorized by the SII) can paper be used as a contingency.</p> <h3>3. What happens if my internet goes down?</h3> <p>The SII allows for "Contingency DTEs." These are issued offline and must be uploaded to the SII system as soon as connectivity is restored, typically within 48 hours.</p> <h3>4. Do I need an e-invoice for B2C sales?</h3> <p>Yes. Since 2021, the <em>Boleta Electrónica</em> is mandatory for all sales to end consumers. Fines for not issuing a digital receipt are similar to those for B2B invoices.</p> <h3>5. Can the SII close my business for non-compliance?</h3> <p>Yes. Under Article 97 of the Tax Code, the SII has the authority to physically close an establishment for up to 20 days for repeated failure to issue legal tax documents.</p> <h3>6. How long must I store Chilean e-invoices?</h3> <p>You are legally required to store the XML files of all DTEs for 6 years. Relying solely on the SII portal for storage is not recommended; private backups are essential for audit defense.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/chile-e-invoicing-penalties-compliance.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '5 min read',
  },
  {
    slug: 'chile-e-invoicing-foreign-companies',
    title: `Chile E-Invoicing for Foreign Companies: SII Requirements Explained`,
    excerpt: 'Learn how foreign entities must navigate Chile\'s DTE system and SII regulations. Ensure compliance with the 19% IVA rate and avoid hefty UTM penalties.',
    content: `<p>Learn how foreign entities must navigate Chile\'s DTE system and SII regulations. Ensure compliance with the 19% IVA rate and avoid hefty UTM penalties. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Overview of Chile's E-Invoicing Mandate for Foreign Entities</h2><p>In Chile, e-invoicing is governed by the <strong>Servicio de Impuestos Internos (SII)</strong> through the <strong>DTE (Documento Tributario Electrónico)</strong> system. Since 2018, it has been mandatory for all taxpayers, regardless of size or turnover, to issue electronic invoices for B2B and B2G transactions. Foreign companies operating in Chile must register for a <strong>RUT (Rol Único Tributario)</strong> number and implement a certified solution to handle the 19% <strong>IVA (Impuesto al Valor Agregado)</strong> reporting. Non-compliance results in penalties ranging from 1 to 3 UTM per document (~CLP 65,000-195,000).</p><h3>How Does the Chilean DTE System Work?</h3><p>The Chilean e-invoicing model is a 'clearance' system, meaning every invoice must be validated by the SII in real-time or near real-time. The electronic document, known as a DTE, is an XML file that includes a digital signature (Firma Electrónica) to ensure authenticity and integrity. Once the SII receives and validates the file, a <strong>Timbre Electrónico SII (TED)</strong>—a unique fiscal barcode—is generated and attached to the document.</p><h3>Specific Requirements for Foreign Companies</h3><p>Foreign companies doing business in Chile typically fall into two categories: those with a permanent establishment (PE) and those providing digital services from abroad. For entities with a physical presence or PE, the following steps are mandatory:</p><ul><li><strong>Tax Registration:</strong> Obtain a RUT from the <a href="https://www.sii.cl">SII official website</a>.</li><li><strong>Digital Certificate:</strong> Purchase a digital signature certificate from a provider accredited by the SII.</li><li><strong>Software Certification:</strong> Use either the SII’s free portal (for low-volume taxpayers) or a private <a href="/en/invoicing">invoicing software</a> solution that has completed the SII 'Set de Pruebas' (certification tests).</li><li><strong>Compliance Monitoring:</strong> Ensure that the 19% IVA is correctly calculated and that books of purchases and sales (Libro de Compra y Venta) are synchronized with the SII portal via <a href="/en/compliance">compliance features</a>.</li></ul><h3>VAT (IVA) Rates and Reporting Standards</h3><p>The standard VAT rate in Chile is 19%. Under the DTE framework, several document types must be issued electronically:</p><table><thead><tr><th>Document Type (DTE)</th><th>Code</th><th>Description</th></tr></thead><tbody><tr><td>Factura Electrónica</td><td>33</td><td>Standard B2B electronic invoice (with IVA)</td></tr><tr><td>Factura No Afecta o Exenta</td><td>34</td><td>Invoice for non-taxed or exempt goods/services</td></tr><tr><td>Nota de Crédito</td><td>61</td><td>Used for refunds, discounts, or corrections</td></tr><tr><td>Guía de Despacho</td><td>52</td><td>Mandatory electronic dispatch note for goods in transit</td></tr></tbody></table><h3>Penalties for Non-Compliance in Chile</h3><p>The SII is rigorous regarding the enforcement of e-invoicing rules. For foreign companies, the oversight is equally strict to prevent tax leakage. Penalties include:</p><ul><li><strong>Financial Fines:</strong> Fines range from 1 to 3 UTM (Unidad Tributaria Mensual) per invoice. As of 2024, this converts to roughly $65 to $195 USD per document mistake.</li><li><strong>Suspension of Operation:</strong> Persistent failure to issue DTEs can lead to the revocation of the company's digital tax certificate, effectively barring them from trading in Chile.</li><li><strong>Reputational Risk:</strong> Public listing in the SII’s non-compliant taxpayer database.</li></ul><h3>The Digital Services Tax (VAT on Digital Services)</h3><p>Since June 2020, foreign companies providing digital services (like streaming, SaaS, or digital advertising) to Chilean residents must also comply with VAT regulations. These companies must register through a simplified portal provided by the SII. While they may not need to issue a full B2B DTE for every transaction with individuals, they must report and remit the 19% IVA quarterly or monthly depending on their registration type.</p><h3>Integrating with Local Accounting Ecosystems</h3><p>To succeed in the Chilean market, foreign firms often integrate their global ERP systems with local <a href="/en/accounting">accounting tools</a>. This ensures that the global ledger matches the ‘Registro de Aceptación’ (the registry of accepted invoices) maintained by the SII. Failure to reconcile these can lead to discrepancies in VAT credit claims, which can trigger an audit.</p><h2>Frequently Asked Questions</h2><h3>1. Can a foreign company issue paper invoices in Chile?</h3><p>No. Paper invoices were phased out in 2018. All commercial transactions in Chile must be documented through the DTE system electronically. Special exemptions are extremely rare and usually only apply to remote areas with no internet connectivity.</p><h3>2. What is the RUT and why do I need it?</h3><p>The RUT (Rol Único Tributario) is the unique tax identification number. Without it, a company cannot register for IVA, cannot sign digital documents, and cannot be recognized as a legal reporting entity by the SII.</p><h3>3. Do I need a local representative in Chile?</h3><p>Yes, foreign companies generally require a legal representative (Representante Legal) residing in Chile to manage tax filings and interact with the SII on behalf of the entity.</p><h3>4. How long must DTE records be stored?</h3><p>The SII requires taxpayers to store electronic documents for a minimum of 6 years. These must be stored in their original XML format with the digital signature and fiscal stamp intact.</p><h3>5. What is the 'Guía de Despacho' and why is it electronic?</h3><p>The Guía de Despacho is a transport document. In 2020, it became mandatory to issue this electronically. It tracks the movement of goods to prevent the sale of items without an accompanying invoice, ensuring the 19% IVA is captured.</p><h3>6. Is the 19% IVA refundable for foreign companies?</h3><p>In most B2B cases, IVA paid on purchases (Input Tax) can be offset against IVA collected on sales (Output Tax). If your company only exports from Chile or provides services from abroad, specific refund mechanisms may apply, but advice from a local tax expert is recommended.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/chile-e-invoicing-foreign-companies.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  // ═══════════════════════════════════════════════════
  // ALBANIA — Fiskalizimi
  // ═══════════════════════════════════════════════════
  {
    slug: 'albania-e-invoicing-fiskalizimi-guide',
    title: `Albania E-Invoicing Guide: Fiskalizimi System, Deadlines & Compliance (2026)`,
    excerpt: 'Master Albania\'s Fiskalizimi e-invoicing system. Learn about DPT mandates, NUIS requirements, real-time reporting, and VAT compliance for B2B and B2C.',
    content: `<p>Master Albania\'s Fiskalizimi e-invoicing system. Learn about DPT mandates, NUIS requirements, real-time reporting, and VAT compliance for B2B and B2C. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Overview of Albania’s E-Invoicing Mandate</h2><p>Albania implemented its mandatory real-time e-invoicing system, known as <strong>Fiskalizimi</strong> (Fiscalization), in phases starting January 1, 2021. Managed by the <strong>Drejtoria e Përgjithshme e Tatimeve (DPT)</strong>, the mandate requires all businesses to issue digital invoices for B2B, B2G, and B2C transactions. Non-compliance results in heavy financial penalties ranging from <strong>ALL 100,000 to ALL 500,000</strong> per violation and potential business closure.</p><h2>What is the Fiskalizimi System?</h2><p>The Fiskalizimi system is a comprehensive digital reform designed to modernize the Albanian tax collection process and reduce the informal economy. Unlike traditional periodic reporting, Fiskalizimi requires <strong>real-time reporting</strong> of every transaction to the DPT servers. Every invoice issued in Albania must be digitally signed and contain a unique identification code (NIVF and NSHP) to be legally valid.</p><h3>Key Dates and Mandates</h3><p>The transition to the electronic fiscalization system was executed in three distinct stages to ensure business readiness:</p><ul><li><strong>January 1, 2021:</strong> Mandatory for all cashless Business-to-Government (B2G) transactions.</li><li><strong>July 1, 2021:</strong> Mandatory for all cashless Business-to-Business (B2B) transactions.</li><li><strong>September 1, 2021:</strong> Mandatory for all cash-based Business-to-Consumer (B2C) transactions.</li></ul><p>As of 2026, all registered taxpayers in Albania, regardless of their annual turnover, must be fully integrated into the Fiskalizimi architecture to maintain <a href="/en/compliance">compliance features</a> with national tax laws.</p><h2>The Core Components of an Albanian E-Invoice</h2><p>To comply with DPT regulations, every electronic invoice must be generated in a specific XML format and transmitted to the Central Information System (CIS). A valid e-invoice in Albania must include:</p><table><thead><tr><th>Requirement</th><th>Description</th></tr></thead><tbody><tr><td><strong>NUIS Number</strong></td><td>The Unique Identification Number of the Subject (the business Tax ID).</td></tr><tr><td><strong>NSHP</strong></td><td>The unique code of the software used to generate the invoice.</td></tr><tr><td><strong>NIVF</strong></td><td>The unique identification code of the specific invoice.</td></tr><tr><td><strong>QR Code</strong></td><td>A scannable code for consumers and authorities to verify the invoice in real-time.</td></tr><tr><td><strong>Digital Signature</strong></td><td>Proof of authenticity issued by an authorized certification agency (NAECCS).</td></tr></tbody></table><h2>VAT Rates and Tax Structure in Albania</h2><p>The primary tax regulated by Fiskalizimi is <strong>TVSH (Tatimi mbi Vlerën e Shtuar)</strong>, or value-added tax. Understanding the applicable rates is critical for correct invoice calculation within your <a href="/en/invoicing">invoicing software</a>.</p><ul><li><strong>Standard Rate:</strong> 20% applied to most goods and services.</li><li><strong>Reduced Rate:</strong> 6% specifically for the accommodation and tourism sectors.</li><li><strong>Exempt Services:</strong> Certain financial services, health services, and education are exempt from TVSH.</li><li><strong>Export Rate:</strong> 0% for international exports.</li></ul><h3>Registration Thresholds</h3><p>While all businesses must fiscalize their sales, the mandatory VAT registration threshold in Albania is currently set at an annual turnover of <strong>ALL 10,000,000</strong> (~€85,000). Businesses earning below this threshold may opt for voluntary VAT registration but must still issue fiscalized invoices for all cash and cashless sales.</p><h2>Steps to Compliance: How to Issue E-Invoices in Albania</h2><p>Successfully navigating the Fiskalizimi process involves several technical and administrative steps:</p><h3>1. Obtain a Digital Certificate</h3><p>Businesses must apply for a digital certificate from the National Agency for Information Society (AKSHI). This certificate is used to sign invoices electronically, ensuring they cannot be tampered with after issuance.</p><h3>2. Select Certified Software</h3><p>Not all <a href="/en/accounting">accounting tools</a> are compatible with the DPT's Central Information System. You must use a software solution that is officially certified by the DPT to communicate with the Fiskalizimi API.</p><h3>3. Register Business Units</h3><p>Every physical location or digital point of sale must be registered as a "Business Unit" within the Self-Care portal on the official <a href="https://www.tatime.gov.al">DPT website</a>. Each unit will receive a unique code that must be present on every invoice.</p><h3>4. Real-time Transmission</h3><p>When a sale occurs, the software must send the invoice data to the DPT in XML format. The DPT server validates the data and returns a unique code (NIVF), which the business then prints or displays on the final invoice for the customer.</p><h2>Penalties for Non-Compliance</h2><p>The General Directorate of Taxation (DPT) monitors the Fiskalizimi system in real-time. Failure to comply with the e-invoicing regulations results in strict administrative sanctions:</p><ul><li><strong>First-time violations:</strong> Fines between <strong>ALL 100,000 and 500,000</strong> (approx. €850 to €4,250) depending on the size of the business and the nature of the error.</li><li><strong>Technical Failures:</strong> Failure to report invoices due to internet outages must be corrected within 48 hours, or penalties will apply.</li><li><strong>Repeat Offenders:</strong> Continuous failure to issue fiscalized invoices can lead to the immediate suspension of business activities for up to 30 days or permanent closure.</li><li><strong>Incorrect Data:</strong> Entering false information or failing to verify QR codes can result in separate fines per transaction.</li></ul><h2>The Role of E-Invoicing Software</h2><p>For modern Albanian enterprises, managing Fiskalizimi manually is impossible due to the real-time reporting requirements. Advanced <a href="/en/invoicing">invoicing software</a> automates the generation of XML files, the application of digital signatures, and the instant communication with the DPT. This automation reduces the risk of human error, ensures that UVF/NIVF codes are correctly applied, and maintains a clean audit trail for tax season.</p><h2>Frequently Asked Questions (FAQ)</h2><h3>1. What is the difference between a cash and cashless invoice in Albania?</h3><p>Cash invoices are issued for immediate payments (B2C), while cashless invoices apply to bank transfers and credit transactions (B2B/B2G). Both must be fiscalized, but the deadlines and reporting structures slightly differ.</p><h3>2. Does a foreign company selling to Albania need to fiscalize?</h3><p>If the foreign entity has a permanent establishment in Albania or is registered for VAT in Albania, it must comply with the Fiskalizimi rules. Purely cross-border sales from a non-resident entity typically follow international VAT rules.</p><h3>3. How long do I have to store fiscalized invoices?</h3><p>In accordance with Albanian law, digital invoices and their corresponding records must be stored securely for at least 10 years for tax audit purposes.</p><h3>4. What happens if the internet goes down?</h3><p>The Fiskalizimi system allows for an "offline mode." You can continue to issue invoices, and your software must automatically transmit them to the DPT as soon as the connection is restored, but no later than 48 hours after the outage.</p><h3>5. Is a QR code mandatory on all invoices?</h3><p>Yes. Every fiscalized invoice must display a QR code that allows the buyer or a tax inspector to verify the invoice’s validity via a mobile application or the DPT portal.</p><h3>6. Can I use a global ERP for Albanian Fiskalizimi?</h3><p>Yes, provided your global ERP or <a href="/en/accounting">accounting tools</a> are integrated with a certified local fiscalization middleware that handles the specific XML requirements and digital signing mandated by the DPT.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/albania-e-invoicing-fiskalizimi-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'albania-fiskalizimi-xml-format-guide',
    title: `Albania Fiskalizimi XML Format: Technical Requirements & NUIS Codes`,
    excerpt: 'A technical breakdown of Albania\'s Fiskalizimi system, XML schema requirements, and NUIS code integration for full e-invoicing compliance.',
    content: `<p>A technical breakdown of Albania\'s Fiskalizimi system, XML schema requirements, and NUIS code integration for full e-invoicing compliance. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Albania Fiskalizimi: Mandates, Dates, and Authority Overview</h2><p>The Albania Fiskalizimi (Fiscalization) system became mandatory for B2G transactions on January 1, 2021, followed by B2B transactions on July 1, 2021, and all other transactions (B2C) on September 1, 2021. Managed by the <strong>Drejtoria e Përgjithshme e Tatimeve (DPT)</strong>, the system requires all registered businesses to issue invoices in a specific XML format. Failure to comply can result in severe penalties ranging from <strong>ALL 100,000 to 500,000</strong> (~€850-€4,250) per violation and potential business closure. All businesses meeting the registration threshold, typically those with turnover exceeding <strong>ALL 10M (~€85,000)</strong>, must integrate with the central CIS platform.</p><h3>What is the Albania Fiskalizimi System?</h3><p>Fiskalizimi is a real-time invoice reporting framework designed to reduce the informal economy and increase transparency in tax collection. Unlike traditional invoice reporting, where data is sent periodically, the Albanian system requires a handshake with the tax authority servers before the invoice is considered legally valid. The central authority responsible for this is the <a href="https://www.tatime.gov.al">General Directorate of Taxation (DPT)</a>.</p><h3>Technical Architecture of the XML Schema</h3><p>For a developer or a business looking to integrate with the DPT, understanding the XML schema is paramount. The system relies on a Web Service (SOAP) architecture. Every invoice must be formatted according to the official XSD schemas provided by the DPT. Key technical components include:</p><ul><li><strong>NS (Namespace):</strong> All XML files must declare the correct namespaces for fiscalization.</li><li><strong>FIC (Fiscal Identification Code):</strong> An alphanumeric code generated by the taxpayer’s software during invoice signing.</li><li><strong>IIC (Invoice Identification Code):</strong> A unique code generated by the DPT upon successful receipt and validation of the XML.</li><li><strong>Digital Certificate:</strong> Every business must have a valid electronic certificate issued by AKSHI (National Agency for Information Society) to sign the SOAP requests.</li></ul><h3>The Role of NUIS and TCR Codes</h3><p>Compliance in Albania revolves around several unique identifiers that must be present in every XML payload:</p><ul><li><strong>NUIS (Nipt/Unique Identification Number):</strong> This is the tax identification number of the business. It must be valid and registered within the DPT database.</li><li><strong>TCR (Taxpayer Cash Register):</strong> Every point of sale or software instance must be registered as a TCR. Each TCR receives a unique code from the Self-Care portal of the DPT.</li><li><strong>Operator Code:</strong> The physical person or system user issuing the invoice must also have a registered operator code.</li></ul><p>Without the correct mapping of NUIS and TCR codes, the central server will reject the XML file, rendering the invoice void and making the business liable for penalties. Using integrated <a href="/en/invoicing">invoicing software</a> can automate the mapping of these identifiers to ensure every submission is successful.</p><h3>VAT (TVSH) Rates and Taxation Rules</h3><p>The Albanian tax system, known as TVSH (Tatimi mbi Vlerën e Shtuar), requires specific classification within the XML. The standard rate is <strong>20%</strong>, while a reduced rate of <strong>6%</strong> applies to the tourism sector and specific accommodation services. There are also VAT-exempt categories. The XML must explicitly state the tax rate, the taxable amount, and the calculated VAT for each line item, followed by a total summary.</p><h3>Mandatory Fields in the Fiskalizimi XML</h3><p>To ensure your XML isn't rejected by the Central Information System (CIS), the following fields must be accurately populated:</p><table><thead><tr><th>Field Name</th><th>Description</th><th>Requirement</th></tr></thead><tbody><tr><td>InvoiceType</td><td>CASH, NONCASH</td><td>Mandatory</td></tr><tr><td>BusinnesUnitCode</td><td>The registration code of the physical location</td><td>Mandatory</td></tr><tr><td>SoftCode</td><td>The code provided by the software provider</td><td>Mandatory</td></tr><tr><td>IIC</td><td>A hash value calculated from invoice data</td><td>Mandatory</td></tr><tr><td>IICSignature</td><td>The digital signature of the IIC code</td><td>Mandatory</td></tr></tbody></table><h3>Integration Challenges and Software Solutions</h3><p>Manually generating XML files that comply with the complex signing logic and SOAP protocols is prone to error. Most businesses opt for <a href="/en/compliance">compliance features</a> built into modern ERP systems. These systems handle the real-time communication with the DPT, manage digital certificate renewals, and ensure that if the internet connection is lost, the invoices are cached and sent once the connection is restored (offline mode). Furthermore, professional <a href="/en/accounting">accounting tools</a> provide the necessary reconciliation between the fiscalized invoices and the monthly tax declarations.</p><h3>Penalties for Non-Compliance</h3><p>The DPT takes enforcement seriously. The following penalties apply for failing to fiscalize transactions properly:</p><ul><li><strong>Incorrect Information:</strong> Fines of ALL 100,000 for each technical error in the XML structure if it prevents tax verification.</li><li><strong>Failure to Issue Invoice:</strong> For small businesses, the fine is ALL 50,000; for large businesses (those with turnover > 10M ALL), the fine escalates to ALL 500,000.</li><li><strong>Repeat Violations:</strong> Continuous failure to utilize a certified fiscalization solution can lead to a 30-day business suspension or permanent closure.</li></ul><h3>FAQ: Albania Fiskalizimi XML Compliance</h3><p><strong>1. Do I need a physical fiscal printer in Albania?</strong><br>No, the new Fiskalizimi system is software-based. While you can still use a fiscal printer, it must be integrated with software that sends XML data to the DPT in real-time.</p><p><strong>2. What is the difference between FIC and IIC codes?</strong><br>The IIC (Invoice Identification Code) is generated by your software before sending the data. The FIC (Fiscal Identification Code) is generated by the DPT server as a confirmation of receipt.</p><p><strong>3. Can I issue an invoice if my internet is down?</strong><br>Yes, the law allows for "offline mode." You can issue the invoice, but it must be sent to the DPT within 48 hours once the connection is restored.</p><p><strong>4. How do I get a digital certificate for signing?</strong><br>You must apply through the e-Albania portal. The certificate is issued by AKSHI and must be installed in your invoicing software.</p><p><strong>5. Is the XML format based on PEPPOL?</strong><br>No, the Albanian Fiskalizimi XML format is a proprietary schema defined by the DPT, though it shares some conceptual similarities with international standards.</p><p><strong>6. Does the 20% TVSH apply to all services?</strong><br>The 20% rate is standard. However, you must check for exemptions or the 6% reduced rate for tourism related services to ensure your XML calculation is correct.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/albania-fiskalizimi-xml-format-guide.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },
  {
    slug: 'albania-e-invoicing-penalties-compliance',
    title: `Albania E-Invoicing Penalties: Fiskalizimi Fines & Enforcement (2026)`,
    excerpt: 'Learn about the high costs of non-compliance with Albania\'s Fiskalizimi system, featuring penalties up to ALL 500,000 and business closure risks.',
    content: `<p>Learn about the high costs of non-compliance with Albania\'s Fiskalizimi system, featuring penalties up to ALL 500,000 and business closure risks. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Albania E-Invoicing: Understanding the Fiskalizimi Enforcement Landscape</h2><p>Albania represents one of the most evolved e-invoicing markets in the Balkans. Since the full implementation of the <strong>Fiskalizimi (Fiscalization)</strong> system, the <strong>Drejtoria e Përgjithshme e Tatimeve (DPT)</strong>—Albania’s General Directorate of Taxation—has transitioned from an introductory phase to strict enforcement. As of 2026, businesses failed to issue real-time authorized invoices face fines ranging from <strong>ALL 100,000 to ALL 500,000</strong> per violation, depending on turnover and the nature of the breach. In extreme cases of recidivism, the tax authority reserves the right to suspend business activities entirely for periods ranging from 30 days to permanent closure.</p><p>Mandatory adoption occurred in three stages: B2G transactions on January 1, 2021; B2B cashless transactions on July 1, 2021; and all remaining B2C and cash transactions by September 1, 2021. Today, every enterprise operating within the TVSH (Value Added Tax) framework must utilize certified <a href="/en/invoicing">invoicing software</a> to ensure every sale is registered in real-time with the central CIS platform.</p><h3>The Hierarchy of Penalties: What Does It Cost?</h3><p>The Albanian tax code specifies penalties based on the classification of the business and the severity of the omission. The fiscal system is designed to provide no room for manual self-correction after a transaction occurs without an automatic receipt from the DPT servers.</p><table><thead><tr><th>Violation Category</th><th>Penalty for Small Business (Under ALL 10M)</th><th>Penalty for Large Business (Over ALL 10M)</th></tr></thead><tbody><tr><td>Failure to issue an e-invoice</td><td>ALL 100,000 - 150,000</td><td>ALL 250,000 - 500,000</td></tr><tr><td>Use of non-certified software</td><td>ALL 200,000</td><td>ALL 500,000 + Software ban</td></tr><tr><td>Failure to maintain internet connection</td><td>Warning (First offense)</td><td>ALL 50,000 per day</td></tr><tr><td>Repeated non-compliance</td><td>30-day closure</td><td>6-month closure / License revocation</td></tr></tbody></table><h3>Why the General Directorate of Taxation (DPT) is Strict</h3><p>The DPT’s primary goal with Fiskalizimi was to reduce the informal economy, particularly in sectors like tourism where the reduced TVSH rate of 6% is often misapplied. With a standard TVSH rate of 20%, the tax gap was significant before 2021. By mandating a digital signature and a unique identification code (NIVF/NSLF) for every transaction, the government has created a transparent audit trail. For businesses, integrating robust <a href="/en/compliance">compliance features</a> into their daily operations is no longer optional; it is a prerequisite for legal existence.</p><h2>Common Non-Compliance Scenarios in Albania</h2><h3>1. Issuing Invoices Offline indefinitely</h3><p>While the Fiskalizimi system allows for an 'offline mode' during internet outages (requiring the upload of data within 48 hours), businesses that consistently fail to sync their data are flagged for manual audits. If the DPT finds that invoices were issued without being transmitted to the central server and the 48-hour window has lapsed, the business is treated as if no invoice was issued at all, triggering the maximum fine of ALL 500,000 for large taxpayers.</p><h3>2. Incorrect Data Fields and TVSH Rates</h3><p>A frequent error involves the misapplication of tax rates. While the standard rate is 20%, certain exports and tourism services qualify for 0% and 6% respectively. Errors in these fields lead to automatic reconciliation failure during the filing of the monthly TVSH declaration. Integrating your billing with modern <a href="/en/accounting">accounting tools</a> helps automate these rates, preventing human error that leads to costly administrative fines.</p><h3>3. Failure to Display the QR Code</h3><p>Every e-invoice in Albania must contain a unique QR Code that allows consumers or inspectors to verify the invoice on the 'Tatimet e Mia' mobile app. If an inspector conducts a field check and finds a physical or digital invoice without a valid, scannable QR code, the business faces an immediate fine starting at ALL 100,000.</p><h2>The Impact of the ALL 10 Million Threshold</h2><p>The Albanian government uses a turnover threshold of <strong>ALL 10 million</strong> (~€85,000) to categorize the severity of enforcement. Businesses exceeding this threshold are considered 'Large Taxpayers' and are subjected to more frequent remote audits. For these entities, the Fiskalizimi system is used as a live risk-assessment tool. Sharp deviations in daily turnover reported via e-invoices compared to historical averages can trigger an automated audit prompt within the DPT system.</p><h3>The Role of Certified Software Providers</h3><p>In Albania, a business cannot simply use any invoicing template; they must use software certified by the DPT. These providers ensure that the XML file sent to the central server contains the mandatory electronic signature (issued by AKSHI). Using uncertified software is one of the quickest ways to receive a heavy fine and a temporary closure notice.</p><h2>Step-by-Step Checklist to Avoid Penalties</h2><ul><li><strong>Verify Certificate Validity:</strong> Ensure your electronic signature certificate from AKSHI is current. Expired certificates prevent invoice validation.</li><li><strong>Automated Backups:</strong> Use a cloud-based provider to ensure that even if local hardware fails, your fiscal data remains accessible for tax audits.</li><li><strong>Real-time Reconciliation:</strong> Match your bank statements with your e-invoice output monthly to find discrepancies before the DPT does.</li><li><strong>Staff Training:</strong> Ensure that POS operators understand the importance of the 48-hour upload window if the system goes into offline mode.</li></ul><h2>Frequently Asked Questions (FAQ)</h2><h3>1. What is the official tax authority in Albania?</h3><p>The authority is the <strong>Drejtoria e Përgjithshme e Tatimeve (DPT)</strong>, also known as the General Directorate of Taxation. Their official website is https://www.tatime.gov.al.</p><h3>2. What happen if I miss the 48-hour synchronization deadline?</h3><p>If you fail to sync invoices generated during an internet outage within 48 hours, the system may flag the transactions as invalid. You could be fined between ALL 100,000 and ALL 500,000 for failure to report transactions in a timely manner.</p><h3>3. Are there different TVSH rates I should be aware of?</h3><p>Yes, the standard VAT (TVSH) rate is 20%. However, a reduced rate of 6% applies to certain tourism services and pharmaceutical products. It is critical that your e-invoicing software correctly identifies these rates to avoid filing errors.</p><h3>4. Can the government really close my business for e-invoice errors?</h3><p>Yes. Under the Fiskalizimi law, the DPT has the authority to suspend business activities for 30 days for a second violation. If the non-compliance continues, they can pursue permanent closure and revocation of the business license.</p><h3>5. Is Fiskalizimi mandatory for B2C small shops?</h3><p>Yes, as of September 1, 2021, all sales, including cash transactions in small retail shops (B2C), must be fiscalized via the central system and issued with a QR-coded receipt.</p><h3>6. Do I need a special device to issue e-invoices in Albania?</h3><p>You do not necessarily need a 'fiscal cash register' in the traditional sense, but you do need an internet-connected device (mobile, tablet, or PC) running DPT-certified software to communicate with the fiscal servers.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/albania-e-invoicing-penalties-compliance.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '5 min read',
  },
  {
    slug: 'albania-e-invoicing-foreign-companies',
    title: `Albania E-Invoicing for Foreign Companies: Fiskalizimi Requirements`,
    excerpt: 'Learn how foreign entities must navigate Albania\'s Fiskalizimi system to maintain VAT compliance and avoid penalties reached up to ALL 500,000.',
    content: `<p>Learn how foreign entities must navigate Albania\'s Fiskalizimi system to maintain VAT compliance and avoid penalties reached up to ALL 500,000. This guide gives the answer first, then explains mandate scope, required invoice data, technical format, penalties, official authority context, and practical compliance steps for businesses preparing or reviewing their local e-invoicing workflow.</p>

<h2>Does Your Foreign Business Need to Comply with Albania's E-Invoicing?</h2><p>Yes, any foreign company registered for VAT in Albania must comply with the <strong>Fiskalizimi</strong> (Fiscalization) system managed by the <strong>Drejtoria e Përgjithshme e Tatimeve (DPT)</strong>. The mandate began on <strong>January 1, 2021</strong> for B2G transactions, followed by B2B on <strong>July 1, 2021</strong>, and B2C on <strong>September 1, 2021</strong>. Non-compliance results in heavy penalties ranging from <strong>ALL 100,000 to ALL 500,000</strong> (~€850-€4,250) per violation and potential business suspension.</p><h3>What is the Fiskalizimi System?</h3><p>Fiskalizimi is Albania's real-time electronic invoicing and reporting framework. Unlike traditional post-audit systems, the Albanian model requires every invoice to be authorized by the DPT servers in real-time before it can be issued to the customer. This ensures that the General Directorate of Taxation has a digital record of every transaction, significantly reducing tax evasion and improving <strong>TVSH (Tatimi mbi Vlerën e Shtuar)</strong> collection.</p><p>For foreign entities, this means that even if your headquarters are located outside Albania, your Albanian branch or VAT-registered representative must utilize certified <a href="/en/invoicing">invoicing software</a> capable of communicating with the Self-Care portal and the Central Invoice Platform (CIS).</p><h2>What are the Mandatory Compliance Dates and Deadlines?</h2><p>Albania implemented its e-invoicing rollout in three distinct phases. While all deadlines have now passed, new foreign companies entering the market must be compliant from day one of their registration. The historical milestones were:</p><ul><li><strong>January 1, 2021:</strong> Mandatory e-invoicing for Business-to-Government (B2G) transactions.</li><li><strong>July 1, 2021:</strong> Mandatory e-invoicing for non-cash Business-to-Business (B2B) transactions.</li><li><strong>September 1, 2021:</strong> Mandatory e-invoicing for cash Business-to-Consumer (B2C) transactions and all other remaining categories.</li></ul><h3>Who is Required to Register?</h3><p>Compliance is required for all entities registered for VAT in Albania. Specifically, those with an annual turnover exceeding <strong>ALL 10,000,000 (~€85,000)</strong> are subject to the full breadth of the law, though smaller entities are also required to fiscalize their invoices if they are registered for TVSH. Foreign businesses should verify their status via the official <a href="https://www.tatime.gov.al">General Directorate of Taxation (DPT) website</a>.</p><h2>The Technical Requirements for Foreign Entities</h2><p>Foreign companies operating in Albania face unique technical challenges. To achieve compliance, a business needs more than just a PDF generator; they need an integrated solution that features specific <a href="/en/compliance">compliance features</a> tailored to Albanian law.</p><h3>1. Electronic Certificate for Fiskalizimi</h3><p>Every taxpayer must obtain a specialized electronic certificate issued by <strong>AKSHI (National Agency for Information Society)</strong>. This digital signature is used to sign every invoice, ensuring the authenticity and integrity of the data sent to the DPT.</p><h3>2. The NIVF and NSLF Codes</h3><p>Each fiscalized invoice in Albania contains two unique identifiers generated during the real-time communication with the tax authority:<ul><li><strong>NIVF:</strong> The unique identification code of the invoice.</li><li><strong>NSLF:</strong> The unique code of the software provider.</li></ul><p>Without these codes and the accompanying QR code, an invoice is legally void in Albania, and the buyer is technically not permitted to pay it or claim VAT deduction.</p><h2>VAT Rates and Tax Structure in Albania</h2><p>Understanding the TVSH structure is critical for accurate e-invoicing. Foreign companies must ensure their <a href="/en/accounting">accounting tools</a> are configured with the following rates:</p><table><thead><tr><th>Transaction Type</th><th>VAT Rate (TVSH)</th><th>Description</th></tr></thead><tbody><tr><td>Standard Rate</td><td>20%</td><td>Applied to most goods and services.</td></tr><tr><td>Reduced Rate</td><td>6%</td><td>Applied to the tourism sector (accommodation) and certain agricultural inputs.</td></tr><tr><td>Zero Rate (0%)</td><td>0%</td><td>Exports and international transport.</td></tr><tr><td>Exempt</td><td>0%</td><td>Financial services, health, and education.</td></tr></tbody></table><h2>Penalties for Non-Compliance</h2><p>The Albanian government takes Fiskalizimi enforcement seriously. The DPT regularly audits the Central Invoice Platform to cross-reference reported sales against bank records and physical inventory. Penalties for foreign and domestic companies include:</p><ul><li><strong>Financial Fines:</strong> Ranging from ALL 100,000 to ALL 500,000 per instance of non-reporting or incorrect reporting.</li><li><strong>Administrative Sanctions:</strong> Failure to issue a fiscalized invoice can lead to the temporary closure of the business premises for 30 to 60 days.</li><li><strong>Repeat Offenders:</strong> Can face permanent revocation of their business license and criminal charges for tax fraud.</li></ul><h2>How Foreign Companies Can Implement Fiskalizimi</h2><p>If you are a foreign entity, implementation usually follows four steps:</p><h3>Step 1: Obtain a Tax ID (NIPT)</h3><p>You must be registered with the National Business Center (KKB) to receive your NIPT (Unique Identification Number). This is the foundation of all tax reporting in Albania.</p><h3>Step 2: Apply for the AKSHI Certificate</h3><p>Apply via the e-Albania portal for the electronic signature required for fiscalization. This often requires a legal representative with an Albanian ID or a power of attorney.</p><h3>Step 3: Select Certified Software</h3><p>Ensure your software provider is integrated with the Albanian DPT API. The software must be able to handle XML messaging formats and real-time JSON responses from the CIS.</p><h3>Step 4: Register Business Units</h3><p>Each physical or virtual location where you conduct business must be registered as a "Business Unit" in the Self-Care portal to receive a unique code for invoice generation.</p><h2>FAQ: Albania E-Invoicing for Foreigners</h2><h3>1. Do I need an Albanian bank account to comply?</h3><p>While not strictly required for the act of fiscalization, you must report the bank account through which payments are received. Most foreign companies find it easier to manage TVSH payments to the DPT with a local account.</p><h3>2. Can I use my international ERP system?</h3><p>Yes, but it must be integrated with a fiscalization middleware that translates your ERP data into the specific XML format required by the Albanian CIS and signs it with the AKSHI certificate.</p><h3>3. What happens if the internet goes down?</h3><p>Albania allows for "off-line" fiscalization in the event of internet failure. Invoices must be issued with a temporary code and then uploaded to the DPT within 48 hours of the connection being restored.</p><h3>4. Are B2C sales handled differently than B2B?</h3><p>Yes. B2C sales often involve a physical fiscal printer or a digital receipt that must be issued at the point of sale, whereas B2B invoices are primarily electronic and exchanged via the CIS portal.</p><h3>5. Is the 6% VAT rate applicable to my business?</h3><p>The 6% rate is strictly regulated and primarily benefits the hospitality and tourism sectors. If you are a foreign company providing consulting or general services, the 20% standard rate is most likely applicable.</p><h3>6. Where can I find the technical documentation?</h3><p>The official technical specifications for API integration are maintained by the DPT and can be found on their official portal at tatime.gov.al under the Fiskalizimi section.</p>`,
    category: 'E-Invoicing Compliance',
    tags: [],
    date: '2026-04-16',
    dateModified: '2026-04-16',
    lastAudited: '2026-04-20',
    author: defaultAuthor,
    featuredImage: '/images/blog/albania-e-invoicing-foreign-companies.jpg',
    featuredImageAlt: 'E-invoicing compliance guide',
    readTime: '4 min read',
  },

  // ═══════════════════════════════════════════════════
  // EU PILLAR — VAT invoice requirements for freelancers
  // ═══════════════════════════════════════════════════
  {
    slug: 'eu-vat-invoice-requirements-freelancers',
    title: 'EU VAT invoice requirements for freelancers (2026 guide)',
    excerpt: 'Everything a freelancer needs to know about EU VAT invoice rules: mandatory fields, reverse charge, sequential numbering, thresholds, and country differences.',
    category: 'Tax and Compliance',
    tags: ['eu vat', 'vat invoice', 'freelancer', 'reverse charge', 'cross-border', 'european union', 'invoice compliance'],
    author: defaultAuthor,
    date: '2026-05-05',
    dateModified: '2026-05-05',
    lastAudited: '2026-05-05',
    readTime: '14 min read',
    featuredImage: '/images/blog/invoice-essential-elements.jpg',
    featuredImageAlt: 'EU VAT invoice requirements for freelancers — mandatory fields and reverse charge',
    pillarContent: true,
    clusterType: 'pillar',
    targetProduct: '/compliance',
    priority: 'P1',
    macroContext: 'EU VAT invoice compliance for freelancers and independent contractors invoicing across the 27 member states',
    semanticKeywords: [
      'EU VAT invoice requirements freelancer',
      'freelance invoice VAT Europe',
      'VAT invoice mandatory fields EU',
      'reverse charge invoice freelancer',
      'cross-border VAT freelancing EU',
      'invoice EU client requirements',
      'EU VAT Directive invoice rules',
      'sequential invoice numbering EU',
      'what must a VAT invoice include Europe'
    ],
    entityMentions: [
      { name: 'European Commission', type: 'GovernmentOrganization', url: 'https://commission.europa.eu' },
      { name: 'EU VAT Directive 2006/112/EC', type: 'Legislation', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112' },
      { name: 'EU Taxation and Customs Union', type: 'GovernmentOrganization', url: 'https://taxation-customs.ec.europa.eu' },
      { name: 'VAT in the Digital Age (ViDA)', type: 'Legislation', url: 'https://taxation-customs.ec.europa.eu/taxation/vat/vat-digital-age-vida_en' },
      { name: '§14 UStG (Germany)', type: 'Legislation' },
      { name: '§19 UStG Kleinunternehmerregelung', type: 'Legislation' }
    ],
    relatedTools: [
      { label: 'Free EU invoice generator', url: '/invoicing', description: 'Create VAT-compliant invoices for EU clients' },
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance' },
      { label: 'Invoicemonk Accounting', url: '/accounting', description: 'Books that match your invoices automatically' }
    ],
    faq: [
      {
        question: 'What are the VAT invoice requirements for freelancers in the EU?',
        answer: 'EU freelancers must include 13 mandatory fields on every VAT invoice: their name and address, their VAT number, the client\'s name and address, the client\'s VAT number, a unique sequential invoice number, the date of issue, the date of supply, a description of the services, the taxable amount per VAT rate, the VAT rate applied, the total VAT amount, the total amount payable, and, for cross-border B2B invoices, a reverse charge note citing Article 196 of the VAT Directive. These requirements are set by EU VAT Directive 2006/112/EC and apply across all 27 member states.'
      },
      {
        question: 'What is reverse charge on a freelance invoice?',
        answer: 'Reverse charge is a VAT mechanism that shifts the responsibility to report and pay VAT from the seller to the buyer. When a freelancer invoices a VAT-registered business in another EU country, they do not add VAT to the invoice. Instead, they include the note "VAT: reverse charge" and cite Article 196 of the EU VAT Directive. The client then accounts for the VAT on their own tax return. Without this note, the client cannot apply the mechanism and may refuse to pay until the invoice is corrected.'
      },
      {
        question: 'Do EU freelancers have to charge VAT?',
        answer: 'Not always. Most EU countries have a VAT registration threshold below which freelancers are not required to register for or charge VAT. Germany\'s threshold is €22,000 per year; France\'s is €37,500 for services. Freelancers below their domestic threshold do not charge VAT, but must note the reason on their invoice. For cross-border B2B invoices to VAT-registered EU clients, the reverse charge mechanism applies regardless of whether the freelancer is VAT-registered.'
      },
      {
        question: 'What happens if a freelance invoice is not VAT compliant in the EU?',
        answer: 'If a freelance invoice is missing mandatory VAT fields, the client\'s accountant will typically reject it and ask for a corrected version. This delays payment. If errors are repeated, national tax authorities can impose fines. The freelancer also remains liable for the correct VAT amount even if the invoice showed less, meaning the tax authority can pursue them for unpaid VAT. Mistakes must be corrected by issuing a formal credit note, not by deleting and reissuing the original invoice.'
      },
      {
        question: 'What is sequential invoice numbering and why does it matter?',
        answer: 'Sequential invoice numbering means every invoice must be part of an unbroken numerical sequence. Gaps in that sequence, created by deleting invoices or skipping numbers, are treated as a red flag during tax audits in many EU countries and can be interpreted as an attempt to conceal income. If an invoice needs to be cancelled or corrected, the correct approach is to issue a credit note rather than delete the original. This rule is strictly enforced in several EU countries including Bulgaria, Germany, and France.'
      }
    ],
    content: `
      <p>You just landed a client in Germany or the Netherlands. Great news. Then their accountant emails back asking for a "VAT-compliant invoice" and you stare at the screen wondering what that actually means. What goes on it? What if you get it wrong? And do you even need to charge VAT?</p>
      <p>This guide answers all of that. It covers the EU-wide rules that apply in all 27 member states, the mandatory fields every compliant invoice must include, how the reverse charge mechanism works (and when it applies to you), the sequential numbering rule that quietly trips up most freelancers, what happens when you issue a non-compliant invoice, and how <a href="/invoicing">Invoicemonk</a> handles all of this automatically.</p>

      <h2>Section 1: The legal foundation, what EU law actually says</h2>
      <p>EU invoicing is governed by a single piece of legislation: the <strong>VAT Directive (Council Directive 2006/112/EC)</strong>. This directive sets the baseline that all 27 member states must follow. Individual countries can add requirements on top of it (Germany and Italy do), but they cannot drop below the floor it sets.</p>
      <p>Here's the part most freelancers miss: a VAT invoice is not just a payment request. It is a legal document that allows your client to reclaim input VAT from their own tax authority. If your invoice is missing a required field, your client's accountant will reject it. Your payment gets delayed, and you look unprofessional in front of a brand-new client.</p>
      <p>Tax law sounds intimidating. The actual list of required fields is shorter than you think.</p>

      <h2>Section 2: The mandatory fields, what every EU VAT invoice must include</h2>
      <p>This is the core list. These fields come straight from the EU VAT Directive and are confirmed by the European Commission's own guidance. Every compliant freelance invoice issued anywhere in the EU must include:</p>
      <ol>
        <li><strong>Your full name and address.</strong> Your legal trading name, not just a brand or business name.</li>
        <li><strong>Your VAT identification number.</strong> The number issued by your country's tax authority. Format varies by country (e.g. DE123456789 in Germany, BG123456789 in Bulgaria, FR12345678901 in France).</li>
        <li><strong>Your client's full name and address.</strong></li>
        <li><strong>Your client's VAT number.</strong> Critical for B2B cross-border invoices; without it, you cannot apply reverse charge.</li>
        <li><strong>A unique, sequential invoice number.</strong> Must form part of an unbroken sequence (more on this below).</li>
        <li><strong>Date of issue.</strong> The date the invoice is created.</li>
        <li><strong>Date of supply.</strong> The date the service was actually delivered. This is different from the invoice date and is mandatory in some countries (notably Germany under §14 UStG).</li>
        <li><strong>A clear description of the services provided.</strong> "Project work" or "consulting" is not enough. Describe what you delivered: "Backend API development, March 2026, 40 hours".</li>
        <li><strong>The taxable amount per VAT rate.</strong> The net amount, before VAT.</li>
        <li><strong>The VAT rate applied.</strong> For example 19% (Germany), 20% (France), 21% (Netherlands).</li>
        <li><strong>The total VAT amount payable.</strong></li>
        <li><strong>The total amount payable.</strong> Gross amount including VAT.</li>
        <li><strong>A reverse charge note where applicable.</strong> The phrase "VAT: reverse charge" plus a reference to Article 196 of the VAT Directive.</li>
      </ol>
      <aside style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:24px 0;border-radius:6px;">
        <p style="margin:0;"><strong>Invoicemonk does this for you.</strong> When you invoice an EU business, the platform automatically includes all 13 fields and flags the correct reverse charge language based on your client's location and VAT status. <a href="/invoicing">Try it free</a>.</p>
      </aside>

      <h2>Section 3: The reverse charge mechanism, the most important concept for cross-border invoicing</h2>
      <p>This deserves its own section because it confuses almost every freelancer the first time they see it on an EU invoice.</p>
      <p>Here's how it works:</p>
      <ul>
        <li>Normally, the seller charges VAT and pays it to their government.</li>
        <li>Under reverse charge, that responsibility shifts to the buyer.</li>
        <li>So when you, the freelancer, invoice an EU business in another country, you do <strong>not</strong> add VAT to your invoice.</li>
        <li>You add the note "VAT: reverse charge" and cite Article 196 of the VAT Directive.</li>
        <li>Your client then self-reports the VAT on their own tax return.</li>
      </ul>
      <p>When does it apply? For services supplied by a freelancer to a VAT-registered business in another EU member state, reverse charge applies automatically. The "place of supply" rule under EU law deems services to be supplied where the client is established, not where you are.</p>
      <p>What if your client is a private individual rather than a business? Different rules apply, the reverse charge does not. We cover that in detail in our cross-border VAT guide for EU freelancers (publishing soon).</p>
      <p><strong>The mistake to avoid:</strong> not including the reverse charge note. Without it, the client cannot apply the mechanism. Their accountant will reject the invoice and may hold payment until you reissue it. <a href="/blog/germany-vat-reverse-charge-invoicing">Our German invoice requirements guide</a> walks through a worked example.</p>

      <h2>Section 4: Sequential invoice numbering, why gaps are a serious problem</h2>
      <p>Most freelancers do not realise this until their accountant or a tax auditor brings it up. EU rules require invoice numbers to form a <strong>continuous, unbroken sequence</strong>.</p>
      <p>What that means in practice:</p>
      <ul>
        <li>You cannot delete an invoice and reuse its number.</li>
        <li>If you make an error, you must issue a credit note (not delete the original). See our guide on <a href="/en/blog/credit-notes-and-invoice-corrections">how to issue a credit note</a>.</li>
        <li>Gaps in numbering are a red flag during tax audits. They can be interpreted as attempts to hide income.</li>
        <li>In Bulgaria, Germany, and France, the rules around this are strictly enforced.</li>
      </ul>
      <p>This is one place where free invoicing tools genuinely fall down. Word templates have no concept of sequential numbering. Google Docs neither. Wave does not enforce it. Invoicemonk does, and it is impossible to create a gap by accident: every invoice gets the next number in the sequence, and corrections must go through a credit note.</p>

      <h2>Section 5: What happens if your invoice is non-compliant</h2>
      <p>The consequences are not catastrophic, but they are annoying and they cost you money.</p>
      <ul>
        <li><strong>Your client's accountant will reject the invoice</strong> and ask you to reissue it. This delays your payment, sometimes by weeks.</li>
        <li><strong>National tax authorities can fine you</strong> if errors are systematic across many invoices. Severity varies by country: Germany can levy fines up to €5,000 per breach under §26a UStG.</li>
        <li><strong>You remain liable for the correct VAT</strong> even if your invoice showed less. The tax authority will come to you, not your client, for the unpaid amount.</li>
        <li><strong>Corrections require a formal credit note</strong>, not a replacement document. Issuing a "corrected" invoice with the same number is itself a compliance breach.</li>
      </ul>
      <p>None of this is hard to avoid if you use a tool that enforces compliance at the point of creation. The hard part is doing it manually for every invoice across multiple EU clients with different VAT setups.</p>

      <h2>Section 6: VAT registration thresholds, do you even need to charge VAT?</h2>
      <p>Many EU freelancers operate below their country's VAT registration threshold and do not need to charge VAT at all. This is a genuinely important nuance and it varies a lot between countries.</p>
      <ul>
        <li><strong>Germany:</strong> €22,000 per year (Kleinunternehmerregelung under §19 UStG). Below this, you do not charge VAT but must cite §19 UStG on your invoice.</li>
        <li><strong>France:</strong> €37,500 for services (régime micro-entrepreneur).</li>
        <li><strong>Netherlands:</strong> €20,000 (kleineondernemersregeling).</li>
        <li><strong>Bulgaria:</strong> BGN 100,000 (around €51,000).</li>
        <li><strong>Italy:</strong> €85,000 (regime forfettario).</li>
        <li><strong>Poland:</strong> PLN 200,000 (around €46,500).</li>
      </ul>
      <p>If you are above the threshold, you must register for VAT and charge it on domestic sales. If you are below, you do not charge VAT but must note the reason on your invoice.</p>
      <p>Here's the catch most freelancers miss: <strong>for cross-border B2B EU invoices, the reverse charge applies regardless of your registration status</strong>. So even a German Kleinunternehmer invoicing a Dutch company applies reverse charge, just with a slightly different note.</p>
      <p>Country-specific deep dives: <a href="/blog/freelancer-vat-registration-bg">Bulgaria</a>, <a href="/blog/freelancer-vat-registration-ro">Romania</a>, <a href="/blog/freelancer-vat-registration-pl">Poland</a>, <a href="/blog/freelancer-vat-registration-it">Italy</a>, <a href="/blog/freelancer-vat-registration-hu">Hungary</a>.</p>

      <h2>Section 7: What's changing, the EU's e-invoicing mandate</h2>
      <p>Worth knowing about, even if you don't have to act on it yet. The EU's <strong>VAT in the Digital Age (ViDA)</strong> directive is rolling out structured e-invoicing requirements for intra-EU B2B transactions from <strong>July 2030</strong>. From that date, cross-border B2B invoices will need to be issued in a structured electronic format and reported to tax authorities in near real time.</p>
      <p>Several countries are already ahead of the timeline:</p>
      <ul>
        <li><strong>Italy:</strong> Mandatory B2B e-invoicing via SDI since 2019. See our <a href="/blog/italy-fattura-elettronica-freelancers">Italy fattura elettronica guide for freelancers</a>.</li>
        <li><strong>Romania:</strong> Mandatory B2B e-invoicing via RO e-Factura since 2024.</li>
        <li><strong>Germany:</strong> ZUGFeRD/XRechnung phasing in, with full B2B enforcement by January 2028.</li>
        <li><strong>France:</strong> PPF/PDP rollout currently underway. See our <a href="/blog/france-e-invoicing-ppf-pdp-guide">France e-invoicing guide</a>.</li>
      </ul>
      <p>Invoicemonk is building these formats natively, not bolting them on. By the time ViDA is enforced, you will not have to think about it.</p>

      <h2>Quick answers (the things people actually ask)</h2>

      <h3>What are the VAT invoice requirements for freelancers in the EU?</h3>
      <p>EU freelancers must include 13 mandatory fields on every VAT invoice: their name and address, their VAT number, the client's name and address, the client's VAT number, a unique sequential invoice number, the date of issue, the date of supply, a description of the services, the taxable amount per VAT rate, the VAT rate applied, the total VAT amount, the total amount payable, and, for cross-border B2B invoices, a reverse charge note citing Article 196 of the VAT Directive. These requirements are set by EU VAT Directive 2006/112/EC and apply across all 27 member states.</p>

      <h3>What is reverse charge on a freelance invoice?</h3>
      <p>Reverse charge is a VAT mechanism that shifts the responsibility to report and pay VAT from the seller to the buyer. When a freelancer invoices a VAT-registered business in another EU country, they do not add VAT to the invoice. Instead, they include the note "VAT: reverse charge" and cite Article 196 of the EU VAT Directive. The client then accounts for the VAT on their own tax return. Without this note, the client cannot apply the mechanism and may refuse to pay until the invoice is corrected.</p>

      <h3>Do EU freelancers have to charge VAT?</h3>
      <p>Not always. Most EU countries have a VAT registration threshold below which freelancers are not required to register for or charge VAT. Germany's threshold is €22,000 per year; France's is €37,500 for services. Freelancers below their domestic threshold do not charge VAT, but must note the reason on their invoice. For cross-border B2B invoices to VAT-registered EU clients, the reverse charge mechanism applies regardless of whether the freelancer is VAT-registered.</p>

      <h3>What happens if a freelance invoice is not VAT compliant in the EU?</h3>
      <p>If a freelance invoice is missing mandatory VAT fields, the client's accountant will typically reject it and ask for a corrected version. This delays payment. If errors are repeated, national tax authorities can impose fines. The freelancer also remains liable for the correct VAT amount even if the invoice showed less, meaning the tax authority can pursue them for unpaid VAT. Mistakes must be corrected by issuing a formal credit note, not by deleting and reissuing the original invoice.</p>

      <h3>What is sequential invoice numbering and why does it matter?</h3>
      <p>Sequential invoice numbering means every invoice must be part of an unbroken numerical sequence. Gaps in that sequence, created by deleting invoices or skipping numbers, are treated as a red flag during tax audits in many EU countries and can be interpreted as an attempt to conceal income. If an invoice needs to be cancelled or corrected, the correct approach is to issue a credit note rather than delete the original. This rule is strictly enforced in several EU countries including Bulgaria, Germany, and France.</p>

      <h2>The five things every EU freelancer needs to remember</h2>
      <ol>
        <li><strong>Include all 13 mandatory fields</strong>, especially your VAT number and your client's VAT number.</li>
        <li><strong>Use reverse charge language</strong> for cross-border B2B invoices, with the Article 196 reference.</li>
        <li><strong>Never skip or delete invoice numbers.</strong> Always issue a credit note to correct errors.</li>
        <li><strong>Know your local VAT threshold.</strong> You may not need to charge VAT at all on domestic sales.</li>
        <li><strong>Use a tool that enforces compliance automatically</strong> so you never have to think about it again.</li>
      </ol>

      <p style="margin-top:32px;"><strong>Invoicemonk is built for exactly this.</strong> Sequential numbering enforced by design, automatic reverse charge handling for EU B2B clients, country-aware tax fields, and credit notes baked into the workflow. <a href="https://app.invoicemonk.com/signup?plan=professional" target="_blank" rel="noopener">Create your first VAT-compliant EU invoice free, </a>.</p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;"><strong>P.S.</strong> One small thing that will save you hours later: store your client's VAT number against their record the first time they give it to you, and validate it via the EU's <a href="https://ec.europa.eu/taxation_customs/vies/" rel="nofollow noopener" target="_blank">VIES</a> tool. An invalid VAT number means you cannot apply reverse charge, and you find out about it weeks later when payment stalls. Invoicemonk validates VIES numbers automatically when you add an EU client.</p>
    `,
  },

  // ═══════════════════════════════════════════════════
  // EU PILLAR 2 — Cross-border VAT invoicing for freelancers
  // ═══════════════════════════════════════════════════
  {
    slug: 'cross-border-vat-invoicing-freelancers-eu',
    title: 'Cross-border VAT for freelancers: the complete EU guide',
    excerpt: 'Do you charge VAT when billing an EU client in another country? This guide explains reverse charge, place of supply, VIES validation, and the exact invoice wording.',
    category: 'Tax and Compliance',
    tags: ['cross-border vat', 'reverse charge', 'place of supply', 'vies', 'eu freelancer', 'article 196', 'article 44', 'b2b invoice', 'b2c invoice'],
    author: defaultAuthor,
    date: '2026-05-05',
    dateModified: '2026-05-05',
    lastAudited: '2026-05-05',
    readTime: '12 min read',
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Cross-border VAT invoicing for freelancers in the EU — reverse charge and place of supply',
    pillarContent: true,
    clusterType: 'pillar',
    targetProduct: '/compliance',
    priority: 'P1',
    macroContext: 'Cross-border EU VAT, reverse charge, and place of supply rules for freelancers worldwide invoicing EU business clients',
    semanticKeywords: [
      'cross-border VAT freelancer EU',
      'cross-border VAT invoicing EU freelancer',
      'reverse charge invoice EU B2B',
      'place of supply rules freelancer',
      'Article 196 VAT Directive invoice',
      'VIES VAT number validation freelancer',
      'how to invoice EU client without VAT',
      'split VAT cross-border invoice',
      'non-EU freelancer invoicing EU client',
      'Article 44 VAT Directive B2B services',
      'EU cross-border invoice wording'
    ],
    entityMentions: [
      { name: 'European Commission', type: 'GovernmentOrganization', url: 'https://commission.europa.eu' },
      { name: 'EU VAT Directive 2006/112/EC', type: 'Legislation', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112' },
      { name: 'VIES (VAT Information Exchange System)', type: 'WebApplication', url: 'https://ec.europa.eu/taxation_customs/vies/' },
      { name: 'EU One Stop Shop (OSS)', type: 'GovernmentService', url: 'https://taxation-customs.ec.europa.eu/online-services/online-services-and-databases-taxation/oss-one-stop-shop_en' },
      { name: 'Article 44 EU VAT Directive', type: 'Legislation' },
      { name: 'Article 45 EU VAT Directive', type: 'Legislation' },
      { name: 'Article 196 EU VAT Directive', type: 'Legislation' },
      { name: 'Article 226(11a) EU VAT Directive', type: 'Legislation' }
    ],
    relatedTools: [
      { label: 'Free EU invoice generator', url: '/invoicing', description: 'Create cross-border, reverse-charge invoices for EU clients' },
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance for the EU' },
      { label: 'Invoicemonk Accounting', url: '/accounting', description: 'Books that match your cross-border invoices automatically' }
    ],
    faq: [
      {
        question: 'Do I charge VAT when invoicing a business client in another EU country?',
        answer: 'No. When a freelancer invoices a VAT-registered business in another EU country, the reverse charge mechanism applies under Articles 44 and 196 of the EU VAT Directive. The freelancer issues an invoice with no VAT and includes the notation "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC." The client then reports and pays the VAT in their own country through their VAT return. The freelancer does not register for VAT in the client\'s country and does not collect any VAT. Before issuing the invoice, the freelancer must verify the client\'s VAT number using the EU\'s VIES database.'
      },
      {
        question: 'What is the reverse charge mechanism and how does it work for freelancers?',
        answer: 'The reverse charge mechanism is an EU VAT rule that shifts the obligation to report and pay VAT from the supplier to the buyer in cross-border B2B transactions. When a freelancer provides services to a VAT-registered business in another EU country, they issue an invoice without charging VAT and include a mandatory reverse charge notation citing Article 196 of the EU VAT Directive. The client accounts for the VAT in their own country\'s VAT return as both output tax and input tax; the two entries cancel out, making the transaction effectively VAT-neutral for the client. The freelancer collects no VAT and does not need to register for VAT in the client\'s country.'
      },
      {
        question: 'What is the place of supply rule for freelance services in the EU?',
        answer: 'For B2B services, the EU VAT Directive (Article 44) establishes that the place of supply is where the customer is established, not where the supplier is based or where the work is performed. This means a Bulgarian freelancer billing a German company is subject to German place of supply rules. Because the supplier is not established in Germany, the reverse charge mechanism applies and the German company accounts for the VAT. For B2C services (billing private individuals), the place of supply is where the supplier is established under Article 45, unless the supplier provides digital services exceeding €10,000 per year to EU consumers across multiple member states.'
      },
      {
        question: 'What wording should I put on a reverse charge invoice?',
        answer: 'A reverse charge invoice must include the words "reverse charge" and a reference to the legal basis. The standard wording accepted across all EU member states is: "VAT is not charged on this invoice. The reverse charge mechanism applies under Article 196 of EU VAT Directive 2006/112/EC. The recipient is liable to account for VAT in their country of establishment." The invoice must also include the supplier\'s VAT number, the client\'s VAT number (verified via VIES), and the net amount only; no VAT line or gross total including tax. Some EU countries additionally require the notation in the local language: "Steuerschuldnerschaft des Leistungsempfängers" in Germany, "BTW verlegd" in the Netherlands, and "Autoliquidation" in France.'
      },
      {
        question: 'Does reverse charge apply to non-EU freelancers billing EU clients?',
        answer: 'Yes. The reverse charge mechanism applies to non-EU suppliers billing VAT-registered EU businesses, not just intra-EU transactions. Under Article 44 of the EU VAT Directive, the place of supply for B2B services is where the customer is established. When a non-EU freelancer (based in the UK, Nigeria, the US, or anywhere outside the EU) bills a VAT-registered EU business, the EU client accounts for the VAT under the reverse charge. The non-EU freelancer does not charge VAT, does not register for VAT in the EU client\'s country, and includes the Article 196 reverse charge notation on the invoice along with the client\'s verified VAT number.'
      },
      {
        question: 'What is VIES and why do freelancers need to use it?',
        answer: 'VIES (VAT Information Exchange System) is the European Commission\'s free online tool for verifying EU VAT registration numbers, available at ec.europa.eu/taxation_customs/vies. Freelancers must verify their client\'s VAT number via VIES before applying the reverse charge mechanism to a cross-border invoice. If a client\'s VAT number is invalid and the freelancer applied reverse charge without verifying it, the freelancer may be held liable for the full VAT amount that should have been charged. Saving a screenshot or record of the VIES validation result provides evidence of good-faith compliance in the event of an audit. VIES should be checked for every new client and periodically for repeat clients, as VAT registrations can lapse.'
      }
    ],
    content: `
      <p>You just finished a project for a client in Germany. You are based in Bulgaria, or Nigeria, or the UK. Do you charge them VAT?</p>
      <p>The answer is almost certainly no, but it is not as simple as leaving the VAT line blank. There is specific legal language that must appear on the invoice, a client verification step most freelancers skip, and a reporting obligation on your end even though you collected no VAT. This guide explains all of it, including exactly what to write on the invoice today.</p>

      <h2>What is the place of supply rule for freelance services in the EU?</h2>
      <p data-answer="true">For B2B services the EU VAT Directive (Article 44) places the supply where the customer is established, not where you are. So a Bulgarian freelancer billing a German company falls under German place of supply rules, and reverse charge applies because the supplier is not established in Germany.</p>
      <p>Before talking about what to write on the invoice, it is worth understanding why. The place of supply is the EU legal concept that decides which country's VAT rules govern a transaction. It answers one question: where is this service treated as having been supplied?</p>
      <p>For B2B services, which covers the vast majority of freelance work, Article 44 of the EU VAT Directive says the place of supply is where the <em>customer</em> is established. Not where you are. Not where the work was done. Where the client is based.</p>
      <p>What this means in practice: if you are a Bulgarian freelancer billing a German company, the place of supply is Germany. German VAT rules govern the transaction, not Bulgarian ones. But because you (the supplier) are not established in Germany, you do not register for German VAT or charge it on your invoice. Instead, the EU uses the reverse charge mechanism: the German company reports and pays the VAT on your behalf through its own VAT return.</p>
      <p>Two distinctions to flag clearly:</p>
      <ul>
        <li><strong>B2B vs. B2C:</strong> these rules apply only when billing VAT-registered businesses. If your client is a private individual, different rules apply entirely. See Section 5.</li>
        <li><strong>Services vs. goods:</strong> this article covers services only. Physical goods follow different place of supply rules.</li>
      </ul>
      <p>Now let's look at the reverse charge mechanism in detail, and exactly what your invoice needs to say.</p>

      <h2>How does the reverse charge mechanism work on a cross-border invoice?</h2>
      <p data-answer="true">Reverse charge shifts the VAT reporting and payment obligation from you to your client. You issue an invoice with no VAT, add a notation citing Article 196 of the EU VAT Directive, and your VAT-registered EU client accounts for the VAT on their own return.</p>
      <p>The reverse charge is not complicated once the logic is clear. It is a three-step mechanism.</p>
      <h3>Step 1: You issue an invoice without VAT.</h3>
      <p>Your invoice shows the net amount only. No VAT rate, no VAT amount, no gross total including tax. The invoice total is exactly the net fee you agreed with the client.</p>
      <h3>Step 2: You add a reverse charge notation.</h3>
      <p>This is the mandatory language that tells the client (and their tax authority) why there is no VAT on the invoice. Article 226(11a) of the EU VAT Directive requires the words "reverse charge" to appear. The standard wording used across every member state, accepted in plain English, is:</p>
      <blockquote>"VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC"</blockquote>
      <p>Some countries have their own language requirements. In Germany the equivalent is "Steuerschuldnerschaft des Leistungsempfängers (§13b Abs. 5 UStG)." In the Netherlands it is "BTW verlegd." In France it is "Autoliquidation." Including the Article 196 reference alongside any local language version is always safe; it is understood in every member state.</p>
      <h3>Step 3: The client handles the rest.</h3>
      <p>The client reports the VAT in their own country's VAT return as if they had charged it themselves, then immediately reclaims it as input tax (the VAT they can recover on business purchases) in the same return. The net effect for them is zero: it is a bookkeeping entry, not a payment. For you: no VAT to collect, no VAT to remit, no VAT registration in the client's country.</p>
      <p>One thing that does not change: your own VAT reporting. In most EU member states, you must declare cross-border B2B supplies on a periodic VAT return, often called an EC Sales List or recapitulative statement (a summary list of cross-border B2B supplies you filed alongside your normal VAT return). This is a reporting obligation, not a payment, but it is required.</p>
      <aside style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:24px 0;border-radius:6px;">
        <p style="margin:0;"><strong>Invoicemonk does this for you.</strong> Select a cross-border EU B2B invoice and the correct Article 196 reverse charge notation appears automatically; you never type it manually. <a href="/invoicing">Try it free</a>.</p>
      </aside>

      <h2>How do I validate my client's VAT number on VIES?</h2>
      <p data-answer="true">Use the EU's free VIES tool at ec.europa.eu/taxation_customs/vies, enter your client's VAT number and country, and save the confirmation before issuing a reverse charge invoice. If you skip this and the number is invalid, you (not the client) become liable for the unpaid VAT.</p>
      <p>This is the most practically important section for risk management, and the one most guides gloss over.</p>
      <p>Before you issue a reverse charge invoice, you must verify that your client is actually a VAT-registered business. Here is why it matters: if you apply reverse charge to a client who is not VAT-registered (a sole trader below the registration threshold, or a private individual who gave you a fake VAT number) you are responsible for the VAT. Not them. You. The tax authority will come to you for the unpaid tax, plus interest and potentially a fine.</p>
      <p>The EU provides a free, official tool: <a href="https://ec.europa.eu/taxation_customs/vies/" rel="nofollow noopener" target="_blank">VIES (VAT Information Exchange System)</a>. Enter your client's VAT number, select their country, and the system confirms whether the number is valid and active.</p>
      <p>Three things to do every time:</p>
      <ol>
        <li><strong>Validate before you issue the invoice</strong>, not after. If the number comes back invalid, do not apply reverse charge. Contact the client and ask for a valid number before you proceed.</li>
        <li><strong>Screenshot or save the VIES confirmation.</strong> If the VAT number is later found to have been invalid, your saved confirmation is evidence that you acted in good faith. Without it, your defence in an audit is significantly weaker.</li>
        <li><strong>Re-validate long-term clients periodically.</strong> VAT registrations can lapse. A number valid six months ago may not be valid today. For clients you invoice repeatedly, re-check VIES every few months.</li>
      </ol>
      <p>One known issue: VIES occasionally goes offline for maintenance. If validation fails due to a system error rather than an invalid number, document your attempt (timestamp, client details, error message) and try again when the system is available.</p>
      <p>Now let's look at the specific scenarios you might face, because not every cross-border invoice is the same.</p>

      <h2>Which cross-border VAT scenario applies to you?</h2>
      <p data-answer="true">Four scenarios cover almost every freelancer: A) EU freelancer to VAT-registered EU business (reverse charge), B) non-EU freelancer to VAT-registered EU business (reverse charge), C) any freelancer to a private EU individual (your own country's VAT, with a digital-services exception), and D) same-country domestic (your local VAT applies normally).</p>

      <h3>Scenario A: You are an EU freelancer billing a VAT-registered business in another EU country</h3>
      <p>The most common cross-border situation. Reverse charge applies automatically under Articles 44 and 196.</p>
      <p>Your invoice must include:</p>
      <ul>
        <li>Your VAT number</li>
        <li>Your client's VAT number (validated via VIES)</li>
        <li>The reverse charge notation: "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC"</li>
        <li>Net amount only, no VAT line</li>
      </ul>
      <p>You do not register for VAT in the client's country. You do not charge their local VAT rate. You report the supply in your own country's EC Sales List or equivalent recapitulative statement.</p>

      <h3>Scenario B: You are a non-EU freelancer billing a VAT-registered EU business</h3>
      <p>This is the situation of every Nigerian, UK, or US freelancer billing a German, Dutch, or French company. Good news: the same reverse charge logic applies. Article 44 puts the place of supply where the client is established. The EU client handles the VAT in their country. You do not register for VAT anywhere in the EU for B2B services.</p>
      <p>Your invoice must include:</p>
      <ul>
        <li>Your own tax identification number (or VAT number, if you have one)</li>
        <li>Your client's EU VAT number, validated via VIES</li>
        <li>The reverse charge notation: "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC"</li>
        <li>Net amount only</li>
      </ul>
      <p>One nuance: as a non-EU freelancer, you do not have an EU VAT number. That is fine. Your invoice does not require one as long as the reverse charge applies and your client's VAT number is included and valid.</p>

      <h3>Scenario C: You are billing a private individual in an EU country (B2C)</h3>
      <p>Different rules apply entirely. For B2C services, the place of supply under Article 45 is where <em>you</em>, the supplier, are established. So if you are a Bulgarian freelancer billing a private client in Germany, Bulgarian VAT rules apply. You charge Bulgarian VAT at the rate applicable in Bulgaria.</p>
      <p>The exception: digital services to EU consumers. If you provide digital services to private individuals across the EU and your total cross-border B2C digital-services revenue exceeds €10,000 per year, the place of supply shifts to the consumer's country. At that point you either register for VAT in each consumer's country or use the EU One Stop Shop (OSS) scheme to file a single return.</p>
      <p>For most freelancers billing professional services (development, design, consulting) this exception rarely applies. But it is worth knowing.</p>

      <h3>Scenario D: You are billing a client in the same EU country you are based in</h3>
      <p>No cross-border rules apply. This is a domestic transaction. You charge your local VAT rate as normal (or use your domestic small business exemption if applicable). The reverse charge mechanism does not apply to same-country transactions.</p>

      <h2>What about the cross-country VAT split scenario?</h2>
      <p data-answer="true">A genuine VAT split is rare. Multiple invoices to clients in different EU countries are not a "split"; each follows its own reverse charge rules. A real split only happens when one service is delivered or used in two countries at once, like a live event streamed simultaneously to two audiences.</p>
      <p>This comes up when a freelancer provides a service used in more than one EU country, or when a project involves distinct deliverables that are taxable in different jurisdictions.</p>
      <p>The most common real-world scenario: a freelancer has multiple clients in different EU countries and invoices each separately. Each invoice follows the reverse charge rules for that client's country. This is not a split; it is just multiple correct invoices.</p>
      <p>A genuine split scenario: a service physically delivered or used in two countries simultaneously, for example an event streamed live with audiences in France and Germany. In that case, place of supply rules for specific services (not the general Article 44 rule) may apportion VAT across the two countries.</p>
      <p>For the vast majority of freelance services (development, design, writing, consulting, marketing) the Article 44 general rule applies: place of supply is where the client is established. No split is required. One client, one country, one set of rules.</p>
      <p>If the split scenario does arise, determine which part of the service is attributable to which country and issue separate invoice line items or separate invoices accordingly. A tax advisor in the relevant country can give a definitive view specific to your contract structure.</p>
      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:24px;font-style:italic;color:#475569;"><strong>P.S.</strong> If you are facing a genuine multi-country VAT split on a single contract, get a tax advisor involved <em>before</em> you invoice. The cost of an hour of professional advice is small compared to the cost of getting it wrong.</p>

      <h2>What are the most common cross-border invoicing mistakes?</h2>
      <p data-answer="true">The five most common mistakes are: skipping VIES validation, writing "0% VAT" instead of the reverse charge note, omitting the reverse charge note entirely, applying reverse charge to a private (B2C) client, and forgetting to declare cross-border supplies in your own VAT recapitulative statement.</p>
      <ol>
        <li><strong>Not validating the client's VAT number via VIES before applying reverse charge.</strong> If the number is invalid and you have no verification record, you may be liable for the full VAT amount. Always validate, always save the confirmation.</li>
        <li><strong>Writing "0% VAT" instead of the reverse charge notation.</strong> Zero-rated VAT and reverse charge are different legal concepts. Writing "0% VAT" tells the client's accountant the supply is exempt, not reverse-charged, which is incorrect and may cause the invoice to be rejected.</li>
        <li><strong>Forgetting the reverse charge notation entirely.</strong> An invoice with no VAT and no explanation is incomplete. Without the reverse charge wording, the client cannot apply the mechanism and will hold payment until you reissue.</li>
        <li><strong>Applying reverse charge to a B2C client.</strong> Reverse charge only applies to VAT-registered businesses. If your client is a private individual, different rules apply; you may need to charge VAT at your domestic rate.</li>
        <li><strong>Not reporting cross-border supplies in your own VAT return.</strong> Even though you collected no VAT, most EU member states require you to declare cross-border B2B supplies in a recapitulative statement or EC Sales List. Skipping this is a compliance failure.</li>
      </ol>

      <h2>What is the exact wording for a reverse charge invoice? (copy and use this)</h2>
      <p data-answer="true">Use this verbatim block: "VAT is not charged on this invoice. The reverse charge mechanism applies under Article 196 of EU VAT Directive 2006/112/EC. The recipient is liable to account for VAT in their country of establishment." Add the local-language equivalent for Germany, the Netherlands, or France if relevant.</p>
      <p>For a standard EU cross-border B2B reverse charge invoice, include this note verbatim:</p>
      <blockquote>"VAT is not charged on this invoice. The reverse charge mechanism applies under Article 196 of EU VAT Directive 2006/112/EC. The recipient is liable to account for VAT in their country of establishment."</blockquote>
      <p>Optional but recommended: add the local language equivalent alongside the English. For Germany: "Steuerschuldnerschaft des Leistungsempfängers." For the Netherlands: "BTW verlegd." For France: "Autoliquidation."</p>
      <p>Your invoice must also include:</p>
      <ul>
        <li>Your VAT number (or tax ID, if non-EU)</li>
        <li>Your client's VAT number (VIES-validated)</li>
        <li>Net amount only, no VAT line</li>
      </ul>
      <p>That is it. Once this wording is on the invoice and the client's VAT number is verified, the transaction is handled correctly on your side.</p>
      <aside style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:24px 0;border-radius:6px;">
        <p style="margin:0;"><strong>Invoicemonk generates this wording automatically</strong> for cross-border EU invoices. Select the client's country; the correct notation appears with both VAT number fields and a net-only total. <a href="/invoicing">Create your first cross-border invoice free</a>.</p>
      </aside>

      <h2>Quick answers (the things people actually ask)</h2>

      <h3>Do I charge VAT when invoicing a business client in another EU country?</h3>
      <p data-answer="true">No. When a freelancer invoices a VAT-registered business in another EU country, the reverse charge mechanism applies under Articles 44 and 196 of the EU VAT Directive. You issue an invoice with no VAT, add the Article 196 notation, and your client reports and pays the VAT in their own country. Validate their VAT number via VIES before issuing the invoice.</p>

      <h3>What is the reverse charge mechanism and how does it work for freelancers?</h3>
      <p data-answer="true">Reverse charge shifts the VAT reporting and payment obligation from the supplier to the buyer in cross-border B2B transactions. You issue an invoice without VAT and include the Article 196 notation. The client books the VAT as both output tax and input tax on their own return; the entries cancel out and no money changes hands for VAT.</p>

      <h3>What is the place of supply rule for freelance services in the EU?</h3>
      <p data-answer="true">For B2B services, Article 44 of the EU VAT Directive places the supply where the customer is established. For B2C services, Article 45 places it where the supplier is established, except for cross-border digital services to EU consumers above €10,000 per year, where the place of supply shifts to the consumer's country.</p>

      <h3>What wording should I put on a reverse charge invoice?</h3>
      <p data-answer="true">Use: "VAT is not charged on this invoice. The reverse charge mechanism applies under Article 196 of EU VAT Directive 2006/112/EC. The recipient is liable to account for VAT in their country of establishment." Add the local-language equivalent for Germany ("Steuerschuldnerschaft des Leistungsempfängers"), the Netherlands ("BTW verlegd"), or France ("Autoliquidation") when relevant.</p>

      <h3>Does reverse charge apply to non-EU freelancers billing EU clients?</h3>
      <p data-answer="true">Yes. Article 44 places the supply where the customer is established, so a non-EU freelancer billing a VAT-registered EU business uses reverse charge exactly the same way an EU freelancer does. You do not register for VAT anywhere in the EU; you simply add the Article 196 notation and the client's VIES-validated VAT number to the invoice.</p>

      <h3>What is VIES and why do freelancers need to use it?</h3>
      <p data-answer="true">VIES is the European Commission's free tool for verifying EU VAT numbers, at ec.europa.eu/taxation_customs/vies. You must validate your client's VAT number on VIES before applying reverse charge; if the number is invalid and you skipped this step, the tax authority can hold you (not the client) liable for the unpaid VAT.</p>

      <h2>The five things every freelancer needs to remember about cross-border VAT</h2>
      <ol>
        <li>The place of supply for B2B services is where your client is established, not where you are.</li>
        <li>For cross-border B2B invoices in the EU, reverse charge applies: no VAT on the invoice, but the Article 196 notation is mandatory.</li>
        <li>Always verify your client's VAT number on VIES before issuing the invoice, and save the confirmation.</li>
        <li>B2C rules are different. Reverse charge does not apply to private individuals.</li>
        <li>You still have reporting obligations in your own country even when collecting no VAT.</li>
      </ol>
      <p>Cross-border VAT invoicing has a lot of moving parts: place of supply rules, VIES validation, exact invoice wording, EC Sales List reporting. Invoicemonk handles the invoice side automatically: correct notation, both VAT number fields, net-only amounts for reverse charge transactions.</p>
      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=cross_border_vat_pillar" target="_blank" rel="noopener">Create your first cross-border EU invoice free, </a>.</strong></p>
      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">Read our country-specific guides for the local rules that apply on top of these EU-wide principles: <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements</a>, <a href="/en/blog/how-to-invoice-german-clients-freelancer">invoicing German clients</a>, <a href="/en/blog/netherlands-vat-invoicing-freelancers">Dutch invoice requirements</a>, <a href="/en/blog/how-to-invoice-french-clients-freelancer">invoicing French clients</a>, <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering</a>, and <a href="/en/blog/credit-notes-and-invoice-corrections">how to issue a credit note</a>.</p>
    `,
  },

  // ═══════════════════════════════════════════════════
  // FRANCE — Freelancer country guide (Week 2 spoke)
  // ═══════════════════════════════════════════════════
  {
    slug: 'french-invoice-requirements-freelancers',
    title: 'French invoice requirements for freelancers (2026 guide)',
    excerpt: 'TVA rules, the franchise en base exemption phrase, SIRET number, autoliquidation, and the September 2026 e-invoicing mandate, all explained in plain English.',
    category: 'Tax and Compliance',
    tags: ['french invoice requirements freelancer', 'franchise en base de tva', 'tva non applicable article 293 b', 'autoliquidation tva france', 'siret invoice', 'mentions obligatoires', 'france e-invoicing 2026', 'facture electronique', 'toubon law', 'auto-entrepreneur'],
    author: defaultAuthor,
    date: '2026-05-06',
    dateModified: '2026-05-06',
    lastAudited: '2026-05-06',
    readTime: '13 min read',
    featuredImage: '/images/blog/e-invoicing-fr-hero.jpg',
    featuredImageAlt: 'French invoice requirements for freelancers — TVA, franchise en base, SIRET, autoliquidation, and the 2026 e-invoicing mandate',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/compliance',
    priority: 'P1',
    macroContext: 'France-specific freelancer invoicing compliance, TVA, franchise en base, autoliquidation, 2026 e-invoicing mandate',
    semanticKeywords: [
      'french invoice requirements freelancer',
      'franchise en base de TVA',
      'TVA non applicable article 293 B du CGI',
      'autoliquidation TVA France',
      'SIRET on invoice',
      'mentions obligatoires facture',
      'France e-invoicing 2026',
      'facture electronique obligatoire',
      'Toubon Law invoice French',
      'auto-entrepreneur invoice France',
      'numero TVA intracommunautaire',
      'Plateforme Agreee Factur-X UBL CII'
    ],
    entityMentions: [
      { name: 'Code général des impôts (Article 293 B)', type: 'Legislation' },
      { name: 'Code général des impôts (Article 283)', type: 'Legislation' },
      { name: 'Code de commerce', type: 'Legislation' },
      { name: 'Loi Toubon (1994)', type: 'Legislation' },
      { name: 'Service des Impôts des Entreprises', type: 'GovernmentOrganization' },
      { name: 'Factur-X', type: 'Thing' },
      { name: 'UBL', type: 'Thing' },
      { name: 'CII', type: 'Thing' },
      { name: 'Plateforme Agréée (PA)', type: 'Thing' },
      { name: 'EU VAT Directive 2006/112/EC', type: 'Legislation', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112' },
      { name: 'VIES (VAT Information Exchange System)', type: 'WebApplication', url: 'https://ec.europa.eu/taxation_customs/vies/' },
      { name: 'European Commission eInvoicing France', type: 'GovernmentOrganization', url: 'https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+in+France' }
    ],
    relatedTools: [
      { label: 'Free invoice generator', url: '/invoicing', description: 'Create France-compliant invoices with SIRET, TVA, and franchise en base wording' },
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance, including France' },
      { label: 'Invoicemonk Accounting', url: '/accounting', description: 'Books that match your French invoices automatically' }
    ],
    faq: [
      {
        question: 'What is the exact phrase a French freelancer under franchise en base must put on the invoice?',
        answer: 'The exact phrase required by Article 293 B of the Code général des impôts is "TVA non applicable, article 293 B du CGI". It must appear on every invoice issued by a freelancer covered by the franchise en base de TVA exemption. The invoice shows no TVA line and no TVA rate; the total equals the net amount. Without this wording, your client cannot tell why TVA is missing and the invoice is non-compliant. The phrase should appear near the totals, in French, even if the rest of the invoice is bilingual.'
      },
      {
        question: 'Do I need a SIRET number to issue invoices as a freelancer in France?',
        answer: 'Yes. Every French freelancer (auto-entrepreneur, micro-entreprise, or individual entrepreneur) must include a 14-digit SIRET number on every invoice. The SIRET is issued by INSEE when you register your activity and identifies your business at a specific location. Invoices without a SIRET are not legally valid, and your French client cannot record them in their accounts. If your activity is registered as Entrepreneur Individuel, the designation "EI" must also appear next to your name on the invoice.'
      },
      {
        question: 'When does the French e-invoicing mandate start, and does it affect non-French freelancers?',
        answer: 'The French e-invoicing mandate starts on September 1, 2026, when all French companies must be able to receive electronic invoices and large and medium companies must issue them. Small and micro-businesses must start issuing electronic invoices on September 1, 2027. Non-French freelancers billing French clients are not directly required to comply, but their invoices will be received through a Plateforme Agréée (an accredited platform). Sending PDFs by email will continue to work in the early phase; over time, you should expect French clients to ask for Factur-X, UBL, or CII formatted invoices.'
      },
      {
        question: 'How does autoliquidation work when a non-French freelancer invoices a French B2B client?',
        answer: 'When a freelancer based outside France invoices a French VAT-registered business, autoliquidation (reverse charge) applies under Article 283 of the Code général des impôts and Article 196 of the EU VAT Directive 2006/112/EC. The freelancer issues an invoice without TVA and includes the wording "Autoliquidation - Article 283 du CGI" together with both VAT numbers (or the freelancer\'s tax ID and the French client\'s numéro de TVA intracommunautaire, verified on VIES). The French client then accounts for the TVA in its own VAT return; the freelancer collects no TVA.'
      },
      {
        question: 'Does the Toubon Law require French freelance invoices to be written entirely in French?',
        answer: 'The Loi Toubon of 1994 requires that contracts and commercial documents involving French parties be available in French; it does not forbid bilingual invoices. The cleanest solution is a bilingual template with French as the primary language and English (or another language) alongside it. Mandatory wording such as "TVA non applicable, article 293 B du CGI" or "Autoliquidation - Article 283 du CGI" must appear in French exactly. Internationally recognised technical terms (for example, currency codes or product specifications) do not need to be translated.'
      }
    ],
    content: `
      <p>You just landed a French client. They are asking for your SIRET, a sequential invoice number, the right TVA wording, and they mentioned something about "facturation électronique" coming in 2026. France has more invoicing rules than most EU countries, but once you understand the structure, it stops feeling intimidating. This guide gives you the answer first, then walks through every mandatory field, the franchise en base de TVA exemption phrase, the Toubon Law, autoliquidation for cross-border invoices, and the September 2026 e-invoicing mandate.</p>

      <p data-answer="true">A French freelance invoice must include 14-digit SIRET, sequential invoice number, dates, désignation, HT/TVA/TTC totals, late-payment penalty plus the €40 indemnité, and (if you are exempt from TVA) the verbatim phrase "TVA non applicable, article 293 B du CGI". Cross-border B2B invoices use "Autoliquidation - Article 283 du CGI". Non-compliance can trigger penalties up to €75,000.</p>

      <h2>Why are French invoicing rules different?</h2>
      <p data-answer="true">French invoicing rules are stricter than the EU baseline because they sit on two layers: the Code de commerce (which sets out commercial obligations between businesses) and the Code général des impôts (which governs TVA). Together they create a longer list of mentions obligatoires than most other EU countries, with fines up to €75,000 per missing or false invoice.</p>
      <p>If you are billing a French company, the rules apply to your invoice even if you are based outside France, because the French client needs the invoice to deduct TVA and to satisfy its own audit obligations. The two phrases that French freelancers run into most often are "franchise en base de TVA" (the small-business exemption from charging TVA) and "Loi Toubon" (the 1994 law on the use of the French language in commercial documents). We will cover both below.</p>

      <h2>What must every French freelance invoice include?</h2>
      <p data-answer="true">Every French freelance invoice must show: your full legal name and address (with "EI" if you are an Entrepreneur Individuel), 14-digit SIRET, the client\'s SIRET when they are a French business, a unique sequential invoice number, the date of issue, the date the service was completed, a clear désignation of the service, the HT (net), TVA, and TTC (gross) amounts, payment terms with the late-payment penalty rate and the fixed €40 indemnité forfaitaire de recouvrement, and, when applicable, your numéro de TVA intracommunautaire.</p>
      <p>Here is the field-by-field checklist:</p>
      <ul>
        <li><strong>Your legal name and address.</strong> If you are registered as Entrepreneur Individuel, the letters "EI" must appear next to your name on every invoice.</li>
        <li><strong>14-digit SIRET.</strong> Issued by INSEE when you register. The first 9 digits (SIREN) identify the business, the last 5 identify the establishment.</li>
        <li><strong>Client SIRET.</strong> Required when invoicing a French business. For non-French B2B clients, use their VAT number instead.</li>
        <li><strong>Sequential invoice number.</strong> Must run consecutively without gaps. Many freelancers prefix the year, for example 2026-001.</li>
        <li><strong>Date of issue and date of service.</strong> Both are mandatory. The date of service can be a single date or a date range.</li>
        <li><strong>Désignation.</strong> A clear description of the service, including quantity (in days, hours, or units) and unit price.</li>
        <li><strong>HT, TVA, and TTC amounts.</strong> HT (hors taxes) is the net amount, TVA is the tax (typically 20%), and TTC (toutes taxes comprises) is the gross. If you are exempt under franchise en base, show only the HT amount and the exemption phrase.</li>
        <li><strong>Payment terms.</strong> The due date, the late-payment penalty rate (taux des pénalités de retard), and the fixed €40 indemnité forfaitaire de recouvrement that applies to every late B2B invoice.</li>
        <li><strong>TVA intracommunautaire number,</strong> if you have one (required for EU B2B invoices above the €10,000 threshold; see Section 6).</li>
      </ul>
      <p style="border-left:3px solid #ef4444;padding:12px 16px;background:#fef2f2;margin:16px 0;"><strong>Tip:</strong> <a href="/invoicing">Invoicemonk\'s free invoice generator</a> includes the French SIRET, "EI" designation, sequential numbering, and the franchise en base / autoliquidation wording out of the box, so you can <a href="/invoicing">create your first French-compliant invoice</a> in under a minute.</p>

      <h2>What is the franchise en base de TVA, and what phrase must appear on the invoice?</h2>
      <p data-answer="true">The franchise en base de TVA is a French small-business exemption that lets you stop charging TVA when your turnover stays below set thresholds. For 2025 the limits are €37,500 (services) and €85,000 (sales of goods), with a tolerance ceiling of €41,250 / €93,500. If you qualify, every invoice must show the verbatim phrase "TVA non applicable, article 293 B du CGI" and no TVA line.</p>
      <p>How it works in practice:</p>
      <ul>
        <li>You issue invoices with the HT amount only; no TVA rate, no TVA line, no TTC.</li>
        <li>You add the wording "TVA non applicable, article 293 B du CGI" near the totals, in French, exactly as written above.</li>
        <li>The "EI" designation still applies if you are an Entrepreneur Individuel.</li>
        <li>You cannot deduct TVA on your business expenses while you are under franchise en base.</li>
      </ul>
      <p><strong>Crossing the threshold.</strong> If your turnover passes the upper tolerance ceiling (€41,250 for services or €93,500 for goods), you become liable for TVA from the first day of the month in which the threshold was crossed. You must register, charge TVA on every subsequent invoice, and update the wording on your template (drop the article 293 B phrase, add the standard 20% TVA line and your numéro de TVA intracommunautaire).</p>
      <p><em>P.S. If you are unsure which side of the threshold you are on, ask an Expert-Comptable. The cost of a one-off consultation is far below the cost of getting it wrong for a full year.</em></p>

      <h2>Does the Toubon Law require French freelance invoices to be in French?</h2>
      <p data-answer="true">The Loi Toubon of 1994 requires that contracts and commercial documents involving French parties be available in French; it does not ban bilingual invoices. A bilingual template with French as the primary language solves it. The mandatory wording (franchise en base, autoliquidation, late-payment penalties) must appear in French exactly. Internationally recognised technical terms do not need to be translated.</p>
      <p>In practice, freelancers based outside France use one of two approaches. Either they issue an invoice entirely in French (most accountants prefer this), or they issue a bilingual invoice with French labels next to English ones (HT / Net, TVA / VAT, TTC / Gross). Both are accepted; the second is friendlier for non-French finance teams that need to understand what they are paying.</p>

      <h2>How does autoliquidation work for cross-border invoices to French clients?</h2>
      <p data-answer="true">Autoliquidation is the French term for the reverse charge mechanism. It applies to cross-border B2B services in two main scenarios. In Scenario A, a non-French freelancer bills a French VAT-registered business and uses the wording "Autoliquidation - Article 283 du CGI" with no TVA. In Scenario B, a French freelancer under franchise en base bills an EU B2B client above €10,000 in cumulative cross-border services and must obtain a numéro de TVA intracommunautaire from the Service des Impôts des Entreprises.</p>
      <p><strong>Scenario A: non-French freelancer billing a French B2B client.</strong> Under Article 283 of the Code général des impôts and Article 196 of the EU VAT Directive 2006/112/EC, the place of supply is France (where the client is established), and the French client accounts for TVA in its own VAT return. You issue the invoice without TVA, include both VAT numbers (verified on VIES), and add this wording near the totals:</p>
      <blockquote style="border-left:3px solid #6366f1;padding:8px 16px;background:#eef2ff;margin:12px 0;"><em>Autoliquidation - Article 283 du CGI. Reverse charge - Article 196, EU VAT Directive 2006/112/EC. The recipient is liable to account for TVA in France.</em></blockquote>
      <p><strong>Scenario B: French freelancer under franchise en base billing EU B2B clients above €10,000.</strong> Once your cumulative cross-border B2B services to other EU countries exceed €10,000 in a calendar year, you must request a numéro de TVA intracommunautaire from your Service des Impôts des Entreprises. You stay under the franchise en base for your domestic French invoices, but cross-border B2B invoices use the reverse charge with your new TVA intracommunautaire number on each invoice. For the wording and place of supply rules behind this, see our pillar on <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and reverse charge for EU freelancers</a>.</p>

      <h2>What does the September 2026 French e-invoicing mandate mean for freelancers?</h2>
      <p data-answer="true">From September 1, 2026, every French company must be able to receive electronic invoices, and large and medium companies must issue them. Small and micro-businesses (most freelancers) must start issuing e-invoices on September 1, 2027. Invoices flow through a Plateforme Agréée and use Factur-X, UBL, or CII formats. Non-French freelancers will continue to send PDF invoices in the early phase, with French clients gradually requesting structured formats.</p>
      <p>Read this calmly. The 2026 rollout is not asking auto-entrepreneurs to learn XML overnight. The phased timeline is:</p>
      <ul>
        <li><strong>September 1, 2026.</strong> All French companies must be able to receive electronic invoices. Large and medium companies must issue them.</li>
        <li><strong>September 1, 2027.</strong> Small and micro-businesses (TPE/PME) must issue electronic invoices.</li>
      </ul>
      <p>Invoices will move through a Plateforme Agréée (PA), the new accredited private platforms that replace the earlier "PDP" naming. The accepted formats are <strong>Factur-X</strong> (a hybrid PDF + XML format that humans and machines can both read), <strong>UBL</strong>, and <strong>CII</strong>.</p>
      <p>If you are a French freelancer, your invoicing tool will handle the format and the platform connection; you do not have to build any of this yourself. If you are based outside France and bill French clients, you can keep sending PDF invoices through 2026; expect French finance teams to start asking for Factur-X attachments later in 2027.</p>

      <h2>What are the most common French invoice mistakes?</h2>
      <p>Five errors come up again and again on French freelance invoices:</p>
      <ol>
        <li><strong>Missing the "EI" designation.</strong> If you are an Entrepreneur Individuel and your invoice does not show "EI" next to your name, it is technically non-compliant.</li>
        <li><strong>Wrong franchise en base wording.</strong> Variations such as "TVA non applicable" alone or "Article 293B" without "du CGI" are rejected by some French accounting teams. Use the exact phrase: <em>TVA non applicable, article 293 B du CGI.</em></li>
        <li><strong>No €40 indemnité forfaitaire on B2B invoices.</strong> The €40 fixed late-payment indemnity is mandatory wording on every B2B invoice issued in France, even if you also state a percentage penalty rate.</li>
        <li><strong>Confusing "date of issue" and "date of service".</strong> Both are mandatory and they are not always the same. The date of service is when the work was performed; the date of issue is when you sent the invoice.</li>
        <li><strong>Reusing or skipping invoice numbers.</strong> The sequence must be unbroken and chronological. For the full rules, see our guide on <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering in the EU</a>.</li>
      </ol>

      <h2>Quick answers</h2>

      <h3>What is the exact phrase a French freelancer under franchise en base must put on the invoice?</h3>
      <p data-answer="true">The exact phrase required by Article 293 B of the Code général des impôts is "TVA non applicable, article 293 B du CGI". It must appear on every invoice issued under the franchise en base de TVA exemption, in French, near the totals. The invoice shows no TVA line and no TVA rate; the total equals the net amount.</p>

      <h3>Do I need a SIRET number to issue invoices as a freelancer in France?</h3>
      <p data-answer="true">Yes. Every French freelancer must include a 14-digit SIRET on every invoice. The SIRET is issued by INSEE when you register your activity. Invoices without a SIRET are not legally valid, and your French client cannot record them in their accounts. If your activity is registered as Entrepreneur Individuel, the designation "EI" must also appear next to your name.</p>

      <h3>When does the French e-invoicing mandate start, and does it affect non-French freelancers?</h3>
      <p data-answer="true">The French e-invoicing mandate starts on September 1, 2026, when all French companies must be able to receive electronic invoices and large and medium companies must issue them. Small and micro-businesses must start issuing on September 1, 2027. Non-French freelancers can continue to send PDF invoices in the early phase, with French clients gradually requesting Factur-X, UBL, or CII formats through a Plateforme Agréée.</p>

      <h3>How does autoliquidation work when a non-French freelancer invoices a French B2B client?</h3>
      <p data-answer="true">When a freelancer based outside France invoices a French VAT-registered business, autoliquidation applies under Article 283 of the Code général des impôts and Article 196 of the EU VAT Directive. You issue the invoice without TVA and include the wording "Autoliquidation - Article 283 du CGI" with both VAT numbers verified on VIES. The French client then accounts for TVA in its own return.</p>

      <h3>Does the Toubon Law require French freelance invoices to be entirely in French?</h3>
      <p data-answer="true">No. The Loi Toubon of 1994 requires commercial documents to be available in French; it does not ban bilingual invoices. The cleanest solution is a bilingual template with French as the primary language. Mandatory wording such as "TVA non applicable, article 293 B du CGI" or "Autoliquidation - Article 283 du CGI" must appear in French exactly. Internationally recognised technical terms do not need to be translated.</p>

      <h2>The French invoice checklist to screenshot</h2>
      <ol>
        <li>Your legal name and address, with "EI" if you are an Entrepreneur Individuel.</li>
        <li>14-digit SIRET (yours), and the client\'s SIRET or VAT number.</li>
        <li>Sequential, unbroken invoice number.</li>
        <li>Date of issue and date of service.</li>
        <li>Clear désignation with quantity and unit price.</li>
        <li>HT, TVA, and TTC amounts (or HT only if you are under franchise en base).</li>
        <li>Late-payment penalty rate plus the €40 indemnité forfaitaire on B2B invoices.</li>
        <li>"TVA non applicable, article 293 B du CGI" if exempt; "Autoliquidation - Article 283 du CGI" if cross-border B2B.</li>
        <li>Numéro de TVA intracommunautaire when applicable.</li>
      </ol>

      <p>French invoicing rewards consistency. Once your template is right, every invoice after it is right. <a href="/invoicing">Invoicemonk</a> applies the SIRET, the "EI" tag, sequential numbering, and the franchise en base / autoliquidation wording automatically, so you do not have to remember the exact phrase every time.</p>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_french_invoice_requirements" target="_blank" rel="noopener">Create your first French-compliant invoice free, </a>.</strong></p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">For the EU-wide rules that sit behind these French specifics, read our pillar on <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and reverse charge for EU freelancers</a>, plus our country guides on <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements</a>, <a href="/en/blog/how-to-invoice-german-clients-freelancer">invoicing German clients</a>, <a href="/en/blog/netherlands-vat-invoicing-freelancers">Dutch invoice requirements</a>, <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering</a>, and <a href="/en/blog/credit-notes-and-invoice-corrections">how to issue a credit note</a>. External: <a href="https://ec.europa.eu/taxation_customs/vies/" rel="nofollow noopener" target="_blank">VIES VAT validation</a> and the <a href="https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+in+France" rel="nofollow noopener" target="_blank">European Commission eInvoicing France page</a>.</p>
    `,
  },

  // ═══════════════════════════════════════════════════
  // GERMANY — Freelancer country guide (Week 2 spoke)
  // ═══════════════════════════════════════════════════
  {
    slug: 'how-to-invoice-german-clients-freelancer',
    title: `How to invoice German clients as a freelancer (2026)`,
    excerpt: `A plain-English guide to German invoice requirements: mandatory fields under §14 UStG, the Kleinunternehmer exemption, Leistungsdatum, and the ZUGFeRD/XRechnung e-invoicing rollout.`,
    content: `<p>You just landed your first German client. Their finance team is already asking for an invoice that meets §14 UStG requirements, and they want to know your Leistungsdatum. Sound familiar? Germany has stricter invoice rules than most EU countries, but once you know the differences, it is not complicated. This guide walks you through every mandatory field, the Kleinunternehmer exemption, reverse charge wording, and the e-invoicing rollout that is happening right now.</p>

<h2>Germany's invoicing law: why §14 UStG matters</h2>
<p>German invoice requirements are spelled out in §14 of the Umsatzsteuergesetz (UStG), the German VAT Act, and your client's accountant will reject any invoice that does not meet them.</p>
<p>The stakes are real. If your invoice is missing a required field, your client cannot deduct the VAT as input tax (Vorsteuer). Their accounting team will send it back, and you will not get paid until you fix it. During a tax audit, the Finanzamt (Germany's tax authority) scrutinises every incoming invoice, and an incomplete one from you can cause problems for both sides.</p>
<p>The good news: the list of required fields is finite and learnable. Here is exactly what needs to go on every invoice you send to a German client.</p>

<h2>The mandatory fields for a German invoice</h2>
<p>Every B2B invoice issued under §14 UStG must include twelve specific fields, each named in German on the original law and each enforceable by the Finanzamt during an audit.</p>
<ul>
  <li><strong>Your full legal name and address (Vollständiger Name und Anschrift):</strong> for sole traders and freelancers this is your personal legal name. A brand name alone is not enough. If you trade as "Studio X", the invoice needs "Your Name, trading as Studio X". The same rule applies to your client's name.</li>
  <li><strong>Your tax identification number, either your Steuernummer or your USt-IdNr.:</strong> your Steuernummer is issued by your local Finanzamt when you register. Your USt-IdNr. is your EU VAT ID, which starts with "DE". You must include at least one. For cross-border EU invoices, the USt-IdNr. is required, not just the Steuernummer.</li>
  <li><strong>Your client's full name and address:</strong> use the company's official registered name, not the department or the individual contact's name.</li>
  <li><strong>Your client's VAT number (USt-IdNr.):</strong> required for cross-border B2B invoices where reverse charge applies.</li>
  <li><strong>A unique, sequential invoice number (Rechnungsnummer):</strong> the sequence must be unbroken. Gaps are a red flag in audits. To cancel a mistake, issue a Stornorechnung (cancellation invoice) and use the next number for the corrected version. Never delete the original.</li>
  <li><strong>Date of issue (Rechnungsdatum):</strong> the date you create and send the invoice.</li>
  <li><strong>Date of supply (Leistungsdatum):</strong> the most commonly missed field. This is the date the service was performed or goods were delivered. It is not the same as the invoice date, and Germany requires both. Even if they match, you must say so explicitly: "Leistungsdatum entspricht dem Rechnungsdatum" (date of supply equals invoice date).</li>
  <li><strong>A specific description of the services (Leistungsbeschreibung):</strong> "Consulting" or "Services" is not enough. A tax auditor must understand what was delivered without asking. Good: "Web development, client portal module, delivered March 2026." Bad: "Project work."</li>
  <li><strong>The taxable amount per VAT rate (Nettobetrag):</strong> the amount before VAT is added.</li>
  <li><strong>The applicable VAT rate (Steuersatz):</strong> the standard rate is 19%; the reduced rate is 7% for certain goods and services. If different rates apply to different line items, show each rate with its own subtotal.</li>
  <li><strong>The total VAT amount (Umsatzsteuerbetrag):</strong> the euro value of the VAT charged.</li>
  <li><strong>The total gross amount (Bruttobetrag):</strong> the final amount the client pays, including VAT.</li>
</ul>
<p><strong>Invoicemonk prompts you for every one of these fields, including the Leistungsdatum, before you can generate a German invoice. Nothing gets missed.</strong></p>

<h2>The Leistungsdatum: Germany's most overlooked rule</h2>
<p>The Leistungsdatum is the date your service was performed or delivered, and German tax law uses it (not the invoice date) to assign the transaction to a VAT period.</p>
<p>The Finanzamt cares about this field deeply. If it is missing, the invoice is technically non-compliant even when everything else is correct. Your client's accountant will refuse it.</p>
<p>Three scenarios cover almost every freelance situation:</p>
<ul>
  <li><strong>Service completed on a specific day:</strong> state that date clearly, for example "Leistungsdatum: 14.03.2026".</li>
  <li><strong>Service delivered over a period</strong> such as a month-long project: state both the start and end dates, for example "Leistungszeitraum: 01.03.2026 bis 31.03.2026".</li>
  <li><strong>Leistungsdatum is the same as the invoice date:</strong> write "Leistungsdatum entspricht dem Rechnungsdatum". You still have to say it.</li>
</ul>
<p>Now, here is the part that surprises most freelancers: whether you charge VAT at all depends on your situation, not your client's.</p>

<h2>Do you need to charge VAT? The Kleinunternehmer exemption explained</h2>
<p>Many German freelancers qualify for the Kleinunternehmer exemption under §19 UStG, which means they do not charge VAT at all on their invoices.</p>
<p>The 2025 thresholds (updated from 2024) are:</p>
<ul>
  <li>Your turnover in the previous calendar year was <strong>€25,000 or less</strong>, AND</li>
  <li>You expect <strong>no more than €100,000</strong> in the current year.</li>
</ul>
<p>If both conditions are met, you are a Kleinunternehmer and must not add VAT to your invoices.</p>
<p>Important: you still need to state why. Every invoice from a Kleinunternehmer must include this exact note:</p>
<blockquote>"Gemäß §19 UStG wird keine Umsatzsteuer berechnet." (No VAT is charged in accordance with §19 UStG.)</blockquote>
<p>Without this note, an invoice with no VAT line looks like an error rather than a legal exemption. Your client's accountant will send it back.</p>
<p><strong>What happens when you cross the threshold?</strong> The switch is immediate. The invoice that pushes you over €100,000 in a single year is the one that must start including VAT. The Finanzamt does not warn you; tracking it is your responsibility.</p>
<p><strong>Can you opt out of the Kleinunternehmer scheme?</strong> Yes, and if you opt out you are bound to that decision for 5 years. The trade-off: you start paying VAT, but you can also reclaim VAT on your business expenses (Vorsteuer). If you have significant equipment or software costs, opting out can be worth it.</p>
<p><strong>For non-German freelancers billing German clients:</strong> the Kleinunternehmer status is based on where you are established, not where your client is. If you are based in Bulgaria or Nigeria, §19 UStG does not apply to you. Your own country's rules determine whether you charge VAT, and for cross-border EU B2B services the reverse charge mechanism typically applies regardless, which means you would not charge German VAT anyway.</p>
<p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:24px;font-style:italic;color:#475569;"><strong>P.S.</strong> Not sure whether you qualify as a Kleinunternehmer? The safe default is to check with your Steuerberater (tax advisor) before your first German invoice. The decision affects your VAT obligations for at least a year.</p>

<h2>Reverse charge on German invoices: when and how to use it</h2>
<p>If you are a non-German freelancer billing a VAT-registered German business, the reverse charge mechanism applies, which means you do not charge German VAT and you add specific wording to the invoice instead.</p>
<p>The note to include, in English or German:</p>
<blockquote>"Reverse charge: VAT liability transferred to the recipient. Supplier USt-IdNr.: [your EU VAT ID]. Customer USt-IdNr.: [client's German USt-IdNr.]"<br><br>Or in German: "Steuerschuldnerschaft des Leistungsempfängers (§13b Abs. 5 UStG)"</blockquote>
<p>Both VAT numbers, yours and your client's, must appear on the invoice. Without the client's USt-IdNr. the reverse charge note has no legal basis, so always ask for it before creating the invoice and validate it through the EU VIES service.</p>
<p>For a full explanation of how reverse charge works across the EU, see our guide to <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a>. For a deeper look at the German-specific reverse charge mechanics, see <a href="/en/blog/germany-vat-reverse-charge-invoicing">Germany VAT reverse charge invoicing</a>.</p>

<h2>Germany's e-invoicing rollout: what freelancers need to know now</h2>
<p>Germany is in the middle of a phased e-invoicing mandate that already affects how you receive invoices and will soon dictate how you issue them.</p>
<p>The timeline, clearly:</p>
<ul>
  <li><strong>January 2025 (already in effect):</strong> all German businesses must be able to receive structured e-invoices in formats like ZUGFeRD or XRechnung. If a client sends you one in these formats, you cannot legally refuse it.</li>
  <li><strong>January 2027:</strong> businesses with annual turnover above €800,000 must issue e-invoices in structured formats. PDFs alone will no longer be accepted from these businesses.</li>
  <li><strong>January 2028:</strong> full rollout. All businesses, including freelancers and Kleinunternehmer that exceed the issuance exemption thresholds, must issue structured e-invoices for domestic B2B transactions.</li>
</ul>
<p><strong>What are ZUGFeRD and XRechnung?</strong></p>
<ul>
  <li><strong>XRechnung</strong> is a pure XML file, machine-readable, designed for automated processing. It is required for invoices to German government bodies.</li>
  <li><strong>ZUGFeRD</strong> is the freelancer-friendly version: a standard PDF with machine-readable XML embedded inside. You can open and read it like a normal PDF, and your client's accounting software can also process the structured data automatically.</li>
</ul>
<p><strong>Does this affect you right now?</strong> If you are invoicing German businesses today, you do not need to issue ZUGFeRD or XRechnung yet. But you should start asking whether your invoicing tool supports it, because by 2027 to 2028 it will not be optional.</p>
<p><strong>Important exemption:</strong> Kleinunternehmer under §19 UStG are exempt from the e-invoicing issuance obligation, but they still must be able to receive e-invoices.</p>
<p><strong>Invoicemonk is tracking the German e-invoicing rollout closely. <a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_body&amp;utm_campaign=blog_germany_freelancer" target="_blank" rel="noopener">Sign up</a> to be notified when ZUGFeRD export is available.</strong></p>

<h2>The most common German invoice mistakes and how to avoid them</h2>
<p>Five mistakes account for almost every rejected German invoice, and all five are easy to prevent once you know to look for them.</p>
<ul>
  <li><strong>Missing Leistungsdatum:</strong> the most common error. Even when it matches the invoice date, you must state it explicitly with "Leistungsdatum entspricht dem Rechnungsdatum".</li>
  <li><strong>Using your brand name instead of your legal name:</strong> "Studio X" alone is not a valid supplier name under §14 UStG. Include your full personal name.</li>
  <li><strong>No §19 UStG note when you are a Kleinunternehmer:</strong> an invoice with no VAT line and no explanation looks like an error. Always include the exemption note.</li>
  <li><strong>Gaps in invoice numbering:</strong> deleting or skipping invoice numbers creates audit risk. Issue a Stornorechnung (cancellation invoice) to void a mistake and use the next number in sequence for the corrected version. For more on this, see our guide to <a href="/en/blog/credit-notes-and-invoice-corrections">how to issue a credit note</a>.</li>
  <li><strong>Vague service descriptions:</strong> "Consulting" and "Services" will not satisfy the Finanzamt. Be specific about what was delivered and when.</li>
</ul>

<h2>Your German invoice checklist</h2>
<p>Bookmark or screenshot this checklist; it covers every field the Finanzamt and your client's accountant will look for on a German invoice.</p>
<ul>
  <li>Full legal names and addresses for both parties</li>
  <li>Your Steuernummer or USt-IdNr. (USt-IdNr. for cross-border work)</li>
  <li>Client's USt-IdNr. (for reverse charge invoices)</li>
  <li>Sequential invoice number with no gaps</li>
  <li>Invoice date AND Leistungsdatum</li>
  <li>Specific description of the services delivered</li>
  <li>Net amount, VAT rate, VAT amount, gross total (or §19 UStG exemption note)</li>
  <li>Reverse charge note if applicable</li>
</ul>
<p style="margin-top:24px;"><strong>Invoicemonk checks all of these for you. <a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_germany_freelancer" target="_blank" rel="noopener">Create your first Germany-compliant invoice free, </a>.</strong></p>
<p>Invoicing clients across Europe? Read our guide to <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a> for the full picture.</p>

<h2>Frequently asked questions</h2>
<h3>What must a freelance invoice to a German client include?</h3>
<p>A freelance invoice sent to a German client must include the full legal names and addresses of both parties, the freelancer's Steuernummer or USt-IdNr., the client's VAT number (USt-IdNr.) for cross-border invoices, a unique sequential invoice number, the date of issue, the date of supply (Leistungsdatum), a specific description of the services performed, the taxable amount, the VAT rate and VAT amount, and the total gross amount. These requirements are set by §14 of the German VAT Act (UStG). If the freelancer is exempt under the Kleinunternehmer scheme (§19 UStG), no VAT is charged but the invoice must include the note "Gemäß §19 UStG wird keine Umsatzsteuer berechnet."</p>

<h3>What is a Leistungsdatum on a German invoice?</h3>
<p>The Leistungsdatum is the date the service was performed or the goods were delivered. It is a mandatory field on German invoices under §14 UStG and is separate from the invoice date. The Finanzamt uses the Leistungsdatum to determine which VAT period the transaction falls into. If the date of supply is the same as the invoice date, the invoice must still state this explicitly, for example by writing "Leistungsdatum entspricht dem Rechnungsdatum". Missing this field makes the invoice technically non-compliant even if all other fields are correct.</p>

<h3>Do freelancers in Germany need to charge VAT?</h3>
<p>Not always. Freelancers in Germany who qualify as Kleinunternehmer under §19 UStG are exempt from charging VAT. As of 2025, the Kleinunternehmer thresholds are: turnover of €25,000 or less in the previous year, and no more than €100,000 expected in the current year. Freelancers who qualify must not add VAT to their invoices but must include the note "Gemäß §19 UStG wird keine Umsatzsteuer berechnet." Freelancers above these thresholds must register for VAT and charge the standard rate of 19% (or 7% for qualifying services) on domestic invoices.</p>

<h3>What is ZUGFeRD and does a freelancer need to use it?</h3>
<p>ZUGFeRD is a hybrid electronic invoice format used in Germany that combines a human-readable PDF with machine-readable XML data embedded inside. It complies with the European standard EN 16931. As of January 2025, all German businesses must be able to receive e-invoices in structured formats like ZUGFeRD or XRechnung. Freelancers are not yet required to issue ZUGFeRD invoices for B2B transactions, but full mandatory issuance applies from January 2028. Kleinunternehmer under §19 UStG are exempt from the issuance obligation but must still be able to receive structured e-invoices.</p>

<h3>What is the Kleinunternehmer rule for German freelancers?</h3>
<p>The Kleinunternehmerregelung is a VAT exemption under §19 of the German VAT Act (UStG) that allows freelancers and small businesses with modest turnover to skip charging VAT entirely. From 2025, the thresholds are: turnover of €25,000 or less in the previous calendar year, and no more than €100,000 forecast for the current year. Freelancers who qualify do not charge VAT, do not file VAT returns, and do not need a USt-IdNr. for domestic invoices. They must note the exemption on every invoice and cannot reclaim VAT on their own business expenses.</p>
    `,
    category: 'Tax and Compliance',
    tags: ['Germany', 'VAT', 'Freelancer', 'E-Invoicing', 'Kleinunternehmer', 'UStG'],
    date: '2026-05-05',
    dateModified: '2026-05-05',
    lastAudited: '2026-05-05',
    author: defaultAuthor,
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Germany freelancer invoicing guide',
    readTime: '10 min read',
  },

  // ═══════════════════════════════════════════════════
  // NETHERLANDS — ZZP'er country guide (Week 2 spoke)
  // ═══════════════════════════════════════════════════
  {
    slug: 'dutch-invoice-requirements-freelancers',
    title: `Dutch invoice requirements for freelancers (2026 guide)`,
    excerpt: `BTW, KVK numbers, the KOR exemption, and the dual VAT number trap: everything a freelancer needs to invoice Dutch clients correctly without exposing their personal BSN.`,
    content: `<p>Dutch freelancers receive two VAT numbers from the Belastingdienst. Only one of them belongs on your invoices. The other contains your personal citizen service number (BSN), and putting it on a client-facing document is a genuine identity fraud risk. Most guides do not mention this. This one does. Below: the mandatory invoice fields, the BTW-ID vs. OB-nummer distinction, the KOR small-business exemption, and how to handle BTW for international clients.</p>

<h2>The Dutch invoicing landscape: what makes it different</h2>
<p>The Netherlands follows EU VAT rules but layers Dutch-specific requirements on top, including a mandatory KVK number and the dual VAT number system unique to sole traders.</p>
<p>Dutch VAT is called BTW (Belasting Toegevoegde Waarde). The tax authority is the Belastingdienst. Dutch freelancers and self-employed professionals are called ZZP'ers (zelfstandige zonder personeel, literally "self-employed without employees"), and there are over 1.78 million of them as of 2025.</p>
<p>One key point: Dutch invoicing rules apply to you even if you are not based in the Netherlands. If you are billing a Dutch client, your invoice still needs to meet Dutch expectations, including correct BTW handling based on your status and location.</p>
<p>Now, the most important thing to get right, and the one most freelancers get wrong.</p>

<h2>The dual VAT number trap: BTW-ID vs. OB-nummer</h2>
<p>Dutch sole traders receive two VAT numbers from the Belastingdienst, and only the BTW-ID belongs on invoices; the OB-nummer is derived from your personal BSN and must never appear on client-facing documents.</p>
<p>When a Dutch sole trader (eenmanszaak) registers with the Belastingdienst, they receive:</p>
<ul>
  <li><strong>BTW-identificatienummer (BTW-ID):</strong> format NL + 9 digits + B + 2 check digits, for example NL123456789B01. Designed for public use on invoices, quotes, and your business website. Contains no personal identity information. <strong>This is the number that goes on your invoices, always.</strong></li>
  <li><strong>Omzetbelastingnummer (OB-nummer):</strong> used exclusively for communications with the Belastingdienst, including VAT returns and tax correspondence. For sole traders, this number is derived from their personal BSN (Burgerservicenummer, citizen service number). Putting it on a client-facing invoice exposes your personal identity to fraud risk. <strong>It must never appear on any document a third party will see.</strong></li>
</ul>
<p>Why does this matter? The two numbers look similar and arrive in the same registration paperwork. Many freelancers, especially those new to the Dutch system, accidentally use the OB-nummer on invoices without realising what it contains.</p>
<p>The fix is simple: check your registration letter from the Belastingdienst. The BTW-ID starts with "NL" and ends with "B" followed by two digits. If the number you have been putting on invoices does not match that format, stop and switch to the correct one immediately.</p>
<p><strong>Note:</strong> this dual number system only affects sole traders (eenmanszaak). If you operate through a BV (private limited company), you have a single VAT number that serves both purposes.</p>
<p><strong>Invoicemonk uses your BTW-ID field for all client-facing documents. Your OB-nummer is never included.</strong></p>

<h2>The mandatory fields for a Dutch invoice</h2>
<p>A compliant Dutch invoice must contain a specific set of fields, including the KVK number and BTW-ID that go beyond the EU baseline.</p>
<ul>
  <li><strong>Your business name and address:</strong> if you trade under a name different from your legal name, your trade name is fine, but your KVK registration must match.</li>
  <li><strong>Your KVK number (Kamer van Koophandel):</strong> your 8-digit registration number from the Dutch Chamber of Commerce. Every invoice from a Dutch-registered business must include it.</li>
  <li><strong>Your BTW-identificatienummer (BTW-ID):</strong> the NL + 9 digits + B + 2 digits format. Not your OB-nummer.</li>
  <li><strong>Your client's full name and address.</strong></li>
  <li><strong>Your client's BTW number:</strong> required for cross-border EU B2B invoices where reverse charge applies. Always verify it on the EU VIES database before applying reverse charge.</li>
  <li><strong>A unique sequential invoice number:</strong> an unbroken sequence with no gaps. If you void an invoice, document it; never reuse or skip the number. "2026-001, 2026-002..." is a clean, auditable format.</li>
  <li><strong>Invoice date (factuurdatum).</strong></li>
  <li><strong>Date of supply (leveringsdatum):</strong> the date the service was delivered or the goods were transferred. Similar in spirit to Germany's Leistungsdatum.</li>
  <li><strong>A clear description of services or goods:</strong> specific enough that a tax auditor understands what was delivered without asking.</li>
  <li><strong>The taxable amount per BTW rate:</strong> the net amount before BTW is added.</li>
  <li><strong>The BTW rate applied:</strong> the standard rate is 21%. The reduced rate of 9% applies to certain categories (food, books, some medical services). Most freelance services fall under 21%.</li>
  <li><strong>The total BTW amount.</strong></li>
  <li><strong>The total gross amount payable.</strong></li>
  <li><strong>Payment terms:</strong> not legally required for VAT purposes, but Dutch business practice expects a specific due date. "Payment due by 15 June 2026" is better than "Net 30." The standard is 30 days.</li>
</ul>
<p>One more Dutch-specific rule: you must send your invoice no later than the 15th day of the month following the month the service was delivered. Complete a project in May, the invoice goes out by 15 June.</p>
<p><strong>Invoicemonk includes the KVK number and BTW-ID fields as standard. Sequential numbering is enforced automatically; gaps are not possible.</strong></p>

<h2>Do you need to charge BTW? The KOR exemption explained</h2>
<p>Dutch freelancers with annual turnover of €20,000 or less can opt into the KOR (Kleineondernemersregeling) and stop charging BTW entirely, but the rules around invoice wording and the 3-year lock-in are strict.</p>
<p><strong>The KOR threshold:</strong> annual turnover of €20,000 or less in the Netherlands.</p>
<p><strong>What changes when you are on KOR:</strong></p>
<ul>
  <li>No BTW line appears on your invoices at all.</li>
  <li>Do not write "0% BTW"; that implies a different exemption (zero-rated supply) and will confuse your client's accountant.</li>
  <li>Instead, include this exact note: "BTW vrijgesteld op grond van artikel 25 Wet op de omzetbelasting 1968".</li>
  <li>Your invoice total equals the net amount; there is no gross/net distinction.</li>
  <li>You still need every other mandatory field: KVK number, BTW-ID, sequential numbering, and the rest.</li>
  <li>You cannot reclaim BTW on your own business expenses.</li>
</ul>
<p><strong>How to apply:</strong> submit the "Melding omzetbelasting kleineondernemersregeling" form via Mijn Belastingdienst Zakelijk at least 4 weeks before the start of the next quarter. Wait for written confirmation before treating any sales as BTW-exempt.</p>
<p><strong>The 3-year commitment:</strong> once on KOR, you are locked in for a minimum of 3 years before you can voluntarily opt out. Plan accordingly.</p>
<p><strong>New from 2025, the EU-KOR:</strong> Dutch freelancers can now apply for VAT exemption in other EU countries through the EU-KOR scheme, provided their total EU-wide turnover does not exceed €100,000 per year. This is a separate application from the domestic KOR and is optional; you can choose which EU countries it applies in.</p>
<p><strong>For non-Dutch freelancers billing Dutch clients:</strong> KOR is only available to businesses established in the Netherlands. If you are based in Bulgaria, Nigeria, or the UK, KOR does not apply to you. Your own country's rules govern your VAT status, and for cross-border EU B2B services reverse charge typically applies regardless.</p>

<h2>Cross-border invoicing: how BTW works for international clients</h2>
<p>BTW treatment for cross-border work depends on whether your client is in another EU country, outside the EU, or whether you (the freelancer) are the one based abroad billing a Dutch client.</p>
<p>Here is where it gets interesting. Three scenarios cover almost every situation.</p>
<p><strong>Scenario A: you are a Dutch ZZP'er billing an EU business client in another country.</strong> The reverse charge mechanism applies. You do not charge Dutch BTW. Instead, include your BTW-ID and your client's VAT number on the invoice and add the notation "BTW verlegd" (VAT reverse-charged). Your client accounts for the VAT in their own country. Always verify your client's VAT number via the EU VIES system before applying reverse charge. If the number turns out to be invalid, you are required to charge Dutch BTW at the standard rate, even if you already sent the invoice without it.</p>
<p><strong>Scenario B: you are a Dutch ZZP'er billing a non-EU client (US, UK, Nigeria, etc.).</strong> No BTW applies. Include a note on the invoice explaining the exemption; the service is considered to be supplied outside the EU.</p>
<p><strong>Scenario C: you are a non-Dutch freelancer billing a Dutch business client.</strong> Reverse charge applies. You do not charge your domestic VAT. Include the reverse charge notation on the invoice (in English, "VAT: reverse charge", or cite Article 196 of the EU VAT Directive). Include both your VAT number and your client's Dutch BTW-ID.</p>
<p>For a full explanation of how reverse charge works across all 27 EU member states, see our guide to <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a>. If your next client is in Germany, see our guide to <a href="/en/blog/how-to-invoice-german-clients-freelancer">invoicing German clients as a freelancer</a> for the country-specific rules.</p>

<h2>The most common Dutch invoice mistakes</h2>
<p>Five mistakes account for almost every rejected Dutch invoice; each one is easy to prevent once you know to check for it.</p>
<ul>
  <li><strong>Using the OB-nummer instead of the BTW-ID:</strong> the OB-nummer is for Belastingdienst communications only. It contains your personal BSN and must never appear on client-facing invoices. Confirm your BTW-ID follows the NL + 9 digits + B + 2 digits format.</li>
  <li><strong>Missing the KVK number:</strong> a Dutch-specific requirement that the EU VAT baseline does not include. Without it, the invoice is technically invalid under Dutch law.</li>
  <li><strong>Writing "0% BTW" when on the KOR scheme:</strong> "0% BTW" implies a zero-rated supply, a different legal concept. KOR invoices must include the article 25 exemption wording instead.</li>
  <li><strong>Not verifying the client's BTW number before applying reverse charge:</strong> if the client's VAT number is invalid, you remain liable for the BTW. Check every new client on VIES before sending the first invoice. For mistakes that need to be corrected after the fact, see our guide on <a href="/en/blog/credit-notes-and-invoice-corrections">how to issue a credit note</a>.</li>
  <li><strong>Missing or vague payment due date:</strong> "Net 30" is unclear. Dutch clients and their accountants expect a specific date. Use "Payment due by [exact date]" on every invoice.</li>
</ul>

<h2>Your Dutch invoice checklist</h2>
<p>Bookmark or screenshot this checklist; it covers every field a Dutch client's accountant and the Belastingdienst will look for.</p>
<ul>
  <li>Business name and address</li>
  <li>KVK number (8 digits)</li>
  <li>BTW-ID (NL format, not your OB-nummer)</li>
  <li>Client's name and address</li>
  <li>Client's BTW number (for cross-border EU invoices)</li>
  <li>Sequential invoice number with no gaps</li>
  <li>Invoice date and delivery date</li>
  <li>Specific description of services</li>
  <li>Net amount, BTW rate, BTW amount, gross total (or KOR exemption note)</li>
  <li>"BTW verlegd" notation for EU cross-border B2B invoices</li>
  <li>Specific payment due date</li>
</ul>
<p style="margin-top:24px;"><strong>Invoicemonk handles all of this, including the BTW-ID field, sequential numbering, and reverse charge notation. <a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_netherlands_freelancer" target="_blank" rel="noopener">Create your first Dutch-compliant invoice free, </a>.</strong></p>
<p>Invoicing across Europe? Start with our full guide to <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a>.</p>

<h2>Frequently asked questions</h2>
<h3>What must a freelance invoice to a Dutch client include?</h3>
<p>A Dutch invoice must include the freelancer's business name and address, their 8-digit KVK number (Chamber of Commerce registration), their BTW-identificatienummer (in NL + 9 digits + B + 2 digits format), the client's name and address, the client's BTW number for cross-border invoices, a unique sequential invoice number, the invoice date, the date of supply, a clear description of services, the applicable BTW rate (21% standard or 9% reduced), the BTW amount, and the total gross amount. The invoice must be sent no later than the 15th day of the month following the month of supply.</p>

<h3>What is the difference between a BTW-ID and an OB-nummer in the Netherlands?</h3>
<p>Dutch sole traders (eenmanszaak) receive two VAT-related numbers. The BTW-identificatienummer (BTW-ID) is the public-facing number in the format NL + 9 digits + B + 2 digits; this is the number that belongs on invoices and client-facing documents. The omzetbelastingnummer (OB-nummer) is used only for communications with the Belastingdienst. For sole traders, the OB-nummer is derived from their personal BSN (citizen service number), which means putting it on a client-facing invoice creates an identity fraud risk. Only the BTW-ID should ever appear on invoices.</p>

<h3>What is the KOR scheme and how does it affect Dutch freelance invoices?</h3>
<p>The KOR (Kleineondernemersregeling) is a Dutch VAT exemption available to freelancers and small businesses with annual turnover of €20,000 or less. If you qualify and opt in, you stop charging BTW entirely. KOR invoices must not include a BTW line or write "0% BTW"; instead, they must include the note "BTW vrijgesteld op grond van artikel 25 Wet op de omzetbelasting 1968." All other mandatory fields (KVK number, BTW-ID, sequential numbering) still apply. KOR participants cannot reclaim BTW on their business expenses and must commit to the scheme for at least 3 years before opting out.</p>

<h3>What does "BTW verlegd" mean on a Dutch invoice?</h3>
<p>"BTW verlegd" is the Dutch phrase for "VAT reverse-charged." It appears on invoices when a Dutch freelancer bills a VAT-registered business in another EU country. Under the reverse charge mechanism, the Dutch freelancer does not charge BTW; instead, the client accounts for the VAT in their own country. The invoice must include both the freelancer's BTW-ID and the client's VAT number, and the words "BTW verlegd" must appear on the invoice. The client's VAT number should always be verified on the EU's VIES database before applying reverse charge treatment.</p>

<h3>Does a non-Dutch freelancer need to include a KVK number when invoicing a Dutch client?</h3>
<p>No. The KVK number (Dutch Chamber of Commerce registration number) is only required on invoices from businesses registered in the Netherlands. A freelancer based outside the Netherlands does not have a KVK number and is not required to include one. The invoice must still comply with EU VAT rules, include the correct reverse charge notation and both VAT numbers for B2B cross-border invoices, and meet the Dutch client's own invoicing expectations.</p>
    `,
    category: 'Tax and Compliance',
    tags: ['Netherlands', 'BTW', 'Freelancer', 'ZZP', 'KOR', 'KVK'],
    date: '2026-05-05',
    dateModified: '2026-05-05',
    lastAudited: '2026-05-05',
    author: defaultAuthor,
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Netherlands freelancer invoicing guide',
    readTime: '11 min read',
  },

  // ═══════════════════════════════════════════════════
  // SEQUENTIAL INVOICE NUMBERING — EU explainer (Week ?? spoke)
  // ═══════════════════════════════════════════════════
  {
    slug: 'sequential-invoice-numbering-guide',
    title: 'Sequential invoice numbering: the complete EU guide (2026)',
    excerpt: "Gaps in your invoice numbers are a red flag in tax audits. Here's what sequential numbering means, why it's required by EU law, and how to fix gaps correctly.",
    category: 'Tax and Compliance',
    tags: ['sequential invoice numbering', 'EU VAT', 'invoice compliance', 'credit note', 'freelancer', 'tax audit'],
    author: defaultAuthor,
    date: '2026-05-05',
    dateModified: '2026-05-05',
    lastAudited: '2026-05-05',
    readTime: '11 min read',
    featuredImage: '/images/blog/invoice-essential-elements.jpg',
    featuredImageAlt: 'Sequential invoice numbering — EU compliance guide for freelancers',
    targetProduct: '/invoicing',
    priority: 'P1',
    macroContext: 'EU sequential invoice numbering rules under the VAT Directive 2006/112/EC, why gaps trigger tax audits, and how freelancers should correct invoices without breaking the sequence.',
    semanticKeywords: [
      'sequential invoice numbering',
      'invoice numbering EU requirements',
      'gaps in invoice numbers audit',
      'invoice number sequence freelancer',
      'how to number invoices correctly',
      'what is sequential invoice numbering',
      'invoice numbering best practices',
      'credit note invoice correction',
      'invoice number gap tax authority'
    ],
    entityMentions: [
      { name: 'EU VAT Directive 2006/112/EC', type: 'Legislation', url: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32006L0112' },
      { name: 'European Commission', type: 'GovernmentOrganization', url: 'https://commission.europa.eu' },
      { name: 'Bundeszentralamt für Steuern', type: 'GovernmentOrganization', url: 'https://www.bzst.de' },
      { name: 'Agencia Tributaria (SII)', type: 'GovernmentOrganization', url: 'https://sede.agenciatributaria.gob.es' },
      { name: 'Autoridade Tributária e Aduaneira (Portugal)', type: 'GovernmentOrganization', url: 'https://www.portaldasfinancas.gov.pt' }
    ],
    relatedTools: [
      { label: 'Free EU invoice generator', url: '/invoicing', description: 'Sequential numbering enforced automatically' },
      { label: 'Compliance hub', url: '/compliance', description: 'Country-by-country invoice rules' }
    ],
    faq: [
      {
        question: 'What is sequential invoice numbering?',
        answer: 'Sequential invoice numbering means every invoice must carry a unique number that follows a continuous, unbroken, chronological sequence. The EU VAT Directive (2006/112/EC) requires this across all 27 member states. Gaps in the sequence, where a number is missing, are treated by tax authorities as a potential sign of unreported income. The format is flexible (e.g. 001, INV-2026-001, 2026-05-001), but the sequence must be consistent and unbroken from the first invoice issued to the last.'
      },
      {
        question: 'What happens if there are gaps in my invoice numbers?',
        answer: "Gaps in invoice numbers are a primary audit trigger for EU tax authorities. When an auditor finds a missing number in a sequence, the default assumption is that the missing invoice represents an undeclared transaction. The burden of proof shifts to the business to explain the gap with documentation. If the gap cannot be explained, the tax authority may reconstruct the business's revenue using bank deposits or industry benchmarks, and the resulting assessment is rarely favourable. Gaps can also result in rejected VAT deductions for clients whose accountants flag the missing number."
      },
      {
        question: 'How do I correct an invoice without creating a gap in my sequence?',
        answer: 'To correct an invoice without creating a gap, issue a credit note rather than deleting the original. A credit note references the original invoice by number and date and formally reverses the transaction. The original invoice number remains in the sequence; the credit note receives its own sequential number. A corrected invoice then gets the next number in the sequence. This keeps the audit trail intact and complies with EU VAT rules, which do not allow retroactive changes to issued invoices.'
      },
      {
        question: 'Can I start my invoice sequence at a number other than 1?',
        answer: 'Yes. EU law does not require invoice sequences to start at 1. You can begin at any number, such as 100, 500, or 1000, as long as the sequence runs consecutively from that point without gaps. What matters is that the sequence is unbroken, chronological, and consistent. Any changes to your numbering format mid-year should be documented in case an auditor asks for an explanation.'
      },
      {
        question: 'Is it legal to run multiple invoice number series at the same time?',
        answer: 'Yes, EU law allows multiple sequential invoice series to run simultaneously, for example separate series for different service types or currencies. Each series must be internally sequential with no gaps, and the system must be documented in writing so an auditor can verify completeness across all series. Most tax advisors recommend a single universal sequence to reduce complexity and audit risk.'
      }
    ],
    content: `
      <p>Picture this. You are mid-way through a tax audit. The inspector asks for your invoice records from the past three years. You pull them up. Invoice 47, invoice 48, invoice 50. They notice invoice 49 is missing. Now you have to explain why.</p>
      <p>That explanation had better be good. In the EU, a gap in your invoice number sequence is not just a formatting inconsistency. It is legally treated as a potential sign of unreported income, and tax authorities are trained to look for it. This guide explains exactly what sequential numbering means, why the rule exists, and how to make sure you never face that conversation.</p>

      <h2>Section 1: What is sequential invoice numbering?</h2>
      <p>Sequential invoice numbering means every invoice you issue must carry a unique number that follows a continuous, unbroken, chronological sequence. The EU VAT Directive (2006/112/EC), the law that governs invoicing across all 27 member states, specifically requires that every invoice carry a sequential number, based on one or more series, that uniquely identifies the invoice.</p>
      <p>In practice this means four things:</p>
      <ul>
        <li><strong>Every number is used exactly once.</strong> No duplicates, ever. Two invoices with the same number invalidate both.</li>
        <li><strong>No gaps.</strong> If invoice 48 exists and invoice 50 exists, invoice 49 must also exist, or you must be able to explain what happened to it.</li>
        <li><strong>Chronological order.</strong> Invoice numbers must follow the order in which invoices were issued. You cannot issue invoice 105 today and then date invoice 103 last month to shift income to a previous tax period.</li>
        <li><strong>Permanent.</strong> Once a number is assigned, it cannot be changed. Corrections require a credit note and a new invoice with the next number in the sequence.</li>
      </ul>
      <p>The format is flexible. Numbers can be purely numerical (1, 2, 3) or include prefixes and dates (INV-2026-001, 2026-05-001). What matters is that the sequence is consistent, unbroken, and documented.</p>

      <h3>Q: What is sequential invoice numbering?</h3>
      <p>Sequential invoice numbering means every invoice must carry a unique number that follows a continuous, unbroken, chronological sequence. The EU VAT Directive (2006/112/EC) requires this across all 27 member states. Gaps in the sequence, where a number is missing, are treated by tax authorities as a potential sign of unreported income. The format is flexible (e.g. 001, INV-2026-001, 2026-05-001), but the sequence must be consistent and unbroken from the first invoice issued to the last.</p>

      <h2>Section 2: Why does this rule exist, and why do tax authorities care so much?</h2>
      <p>Sequential numbering exists for one core reason: it makes VAT fraud difficult. When every business issues invoices in an unbroken sequence, tax authorities can cross-reference your invoice records against your VAT returns, bank statements, and your clients' records. If your sequence runs from 1 to 500 with no gaps, an auditor can verify in minutes that 500 invoices were issued and all the income was reported.</p>
      <p>Now picture the opposite. A gap exists, say invoice 49 is missing. The auditor's default assumption is not that you made an administrative error. It is that invoice 49 represents a transaction you received payment for and chose not to declare. The burden of proof shifts to you. You have to prove the gap is innocent.</p>
      <p>What does that investigation look like? Tax auditors run automated software that scans for missing numbers, cross-references invoice sequences against bank deposits, and flags every voided or cancelled number for documentation. If they cannot reconcile the gap, they reconstruct your revenue using industry benchmarks, and the resulting assessment rarely favours the taxpayer.</p>

      <h3>Q: What happens if there are gaps in my invoice numbers?</h3>
      <p>Gaps in invoice numbers are a primary audit trigger for EU tax authorities. When an auditor finds a missing number in a sequence, the default assumption is that the missing invoice represents an undeclared transaction. The burden of proof shifts to the business to explain the gap with documentation. If the gap cannot be explained, the tax authority may reconstruct the business's revenue using bank deposits or industry benchmarks, and the resulting assessment is rarely favourable. Gaps can also result in rejected VAT deductions for clients whose accountants flag the missing number.</p>

      <p>So what actually creates gaps, and what should you do instead?</p>

      <h2>Section 3: The five most common ways gaps appear, and how to prevent each one</h2>
      <p>Gaps almost never come from intentional fraud. They come from five very ordinary mistakes, each easy to fix once you know what to look for.</p>

      <h3>1. Deleting an invoice you sent by mistake</h3>
      <p>The most common gap creator. A freelancer sends an invoice, spots an error, deletes it, and creates a new one. The deleted number disappears from the sequence.</p>
      <p><strong>Do this instead:</strong> never delete a sent invoice. Issue a credit note that references and cancels the original, then create a corrected invoice with the next number in the sequence.</p>

      <h3>2. Cancelling a project before invoicing</h3>
      <p>You draft invoice 49 for a client, the project falls through, you delete the draft, and invoice 50 goes to the next client. Gap created.</p>
      <p><strong>Do this instead:</strong> either avoid assigning a number until the invoice is ready to send, or, if a number was already assigned, document the cancellation formally with a written note in your accounting file explaining what happened to that number.</p>

      <h3>3. Using your invoicing tool incorrectly</h3>
      <p>Many freelancers rely on Word templates, Excel spreadsheets, or tools that number invoices manually. They skip a number by accident, create a test invoice with a real number, or import invoices from another system with a conflicting sequence.</p>
      <p><strong>Do this instead:</strong> use a tool that assigns invoice numbers automatically, making it structurally impossible to create a gap. <a href="/invoicing">Invoicemonk</a> does this by design: every invoice in the sequence is tracked, and gaps cannot be created manually.</p>

      <h3>4. Running multiple invoice series without documenting them</h3>
      <p>Some freelancers run separate sequences for different clients, currencies, or service types, for example "INV" for consulting and "DES" for design work. This is legally permitted in the EU, but only if each series is internally sequential, the system is documented in writing, and auditors can verify completeness across all series.</p>
      <p><strong>Do this instead:</strong> if you run multiple series, keep a written record of your numbering policy. Most tax advisors recommend a single universal sequence to keep things simple and auditable.</p>

      <h3>5. Using a payment platform transaction ID as the invoice number</h3>
      <p>Stripe, PayPal, and Wise assign transaction IDs (e.g. "ch_3Oabc123xyz") that are not sequential, contain gaps by design, and do not meet EU invoicing requirements.</p>
      <p><strong>Do this instead:</strong> use the platform transaction ID as a reference field only. Assign a separate sequential invoice number as the primary identifier on every invoice.</p>

      <h2>Section 4: Acceptable invoice number formats</h2>
      <p>The EU does not mandate a specific format, only that numbers be sequential and unique. These three formats all comply:</p>
      <ul>
        <li><strong>Simple sequential:</strong> 001, 002, 003. Works well for low invoice volumes. Clean and auditable.</li>
        <li><strong>Year-prefixed:</strong> 2026-001, 2026-002. Organises invoices by year and lets the counter reset annually. Useful for quickly identifying when an invoice was issued.</li>
        <li><strong>Year-month prefixed:</strong> 2026-05-001, 2026-05-002. The most granular option. Useful for higher invoice volumes.</li>
      </ul>
      <p>All three are valid. Pick one format and stick to it. Changing formats mid-year without documentation creates confusion in an audit.</p>
      <p>One question that comes up often: can you start at a number other than 1? Yes. You can start at 100, 500, 1000, or any number. What matters is that the sequence runs consecutively from that starting point without interruption.</p>

      <h3>Q: Can I start my invoice sequence at a number other than 1?</h3>
      <p>Yes. EU law does not require invoice sequences to start at 1. You can begin at any number, such as 100, 500, or 1000, as long as the sequence runs consecutively from that point without gaps. What matters is that the sequence is unbroken, chronological, and consistent. Any changes to your numbering format mid-year should be documented in case an auditor asks for an explanation.</p>

      <h3>Q: Is it legal to run multiple invoice number series at the same time?</h3>
      <p>Yes, EU law allows multiple sequential invoice series to run simultaneously, for example separate series for different service types or currencies. Each series must be internally sequential with no gaps, and the system must be documented in writing so an auditor can verify completeness across all series. Most tax advisors recommend a single universal sequence to reduce complexity and audit risk.</p>

      <h2>Section 5: What to do if you already have gaps</h2>
      <p>Read this with calm. If you already have gaps in your sequence, you are not in immediate trouble; you are in a documentation race. Five practical steps fix most of the risk.</p>
      <ol>
        <li><strong>Audit your records.</strong> Go through every invoice you have issued and map the full sequence. Identify exactly where gaps exist and how many there are.</li>
        <li><strong>Document what you know.</strong> For each gap, note whether it was a cancelled invoice, a deleted draft, a numbering error, or something else. Written documentation, even a brief note in your accounting file, beats nothing.</li>
        <li><strong>Do not retroactively fill gaps.</strong> Do not create backdated invoices to fill missing numbers. This is worse than the gap itself: it is potential fraud and significantly harder to explain in an audit.</li>
        <li><strong>Move forward cleanly.</strong> Switch to a tool that prevents future gaps. <a href="/invoicing">Invoicemonk</a> assigns numbers automatically; once a number is issued, it cannot be deleted, reused, or skipped.</li>
        <li><strong>If you are already facing an audit:</strong> speak to a tax advisor or accountant in the relevant country before the audit begins. They can help you frame existing gaps in the most defensible way based on the documentation you have.</li>
      </ol>

      <h2>Section 6: How credit notes protect your sequence</h2>
      <p>The correct way to cancel or correct an invoice in the EU is to issue a credit note, not delete the original. A credit note is essentially a negative invoice: it references the original by number and date, and formally reverses the transaction.</p>
      <p>Why does this matter for sequential numbering? Because the original invoice number stays in the sequence. It was issued; it exists in the audit trail. The credit note gets its own sequential number. The sequence remains unbroken.</p>
      <p>A concrete example: you issue invoice 49 to a client for €2,000. You realise the amount should have been €1,800. You do not delete invoice 49. Instead, you issue credit note CN-001, which references invoice 49 and credits the €200 difference. Then you issue invoice 50 for the corrected amount. Three documents exist in the audit trail; the sequence is intact.</p>
      <p>What must a credit note include? The same mandatory fields as the original invoice, plus a specific reference to the original invoice number and date, and a description of what is being credited and why.</p>

      <h3>Q: How do I correct an invoice without creating a gap in my sequence?</h3>
      <p>To correct an invoice without creating a gap, issue a credit note rather than deleting the original. A credit note references the original invoice by number and date and formally reverses the transaction. The original invoice number remains in the sequence; the credit note receives its own sequential number. A corrected invoice then gets the next number in the sequence. This keeps the audit trail intact and complies with EU VAT rules, which do not allow retroactive changes to issued invoices.</p>

      <p>For a full walkthrough of the wording, formatting, and timing rules, see our guide on <a href="/en/blog/credit-notes-and-invoice-corrections">how to issue a credit note under EU law</a>.</p>

      <h2>Section 7: Country-specific rules worth knowing</h2>
      <p>All EU member states require sequential numbering as a baseline, but a few enforce it more aggressively than others.</p>
      <ul>
        <li><strong>Germany:</strong> gaps in invoice numbers (Rechnungsnummer) are a specific Finanzamt audit trigger. Cancelled invoices must be documented as Stornorechnungen. See our full <a href="/en/blog/how-to-invoice-german-clients-freelancer">German invoice rules</a> guide.</li>
        <li><strong>Bulgaria:</strong> strict real-world enforcement. Tax inspectors actively cross-check invoice sequences against POS reports and bank statements during routine audits.</li>
        <li><strong>Spain:</strong> real-time VAT reporting through the SII (Suministro Inmediato de Información) means invoice sequences are verified electronically in near real time. Gaps are detected almost immediately.</li>
        <li><strong>Portugal:</strong> businesses must apply for government-issued unique invoice series in advance and use certified software that generates a QR code on each invoice.</li>
      </ul>
      <p>For Dutch invoicing, the rule is the same but layered with KVK and BTW-ID specifics; see our <a href="/en/blog/dutch-invoice-requirements-freelancers">Dutch invoice requirements</a> guide. For the EU-wide baseline that sits behind all of this, start with our pillar guide on <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements</a>.</p>

      <h2>The five rules to screenshot</h2>
      <ol>
        <li>Every invoice number must be used exactly once. No duplicates.</li>
        <li>The sequence must be unbroken. No gaps, ever.</li>
        <li>Numbers must be chronological. No backdating.</li>
        <li>Cancelled or incorrect invoices must be corrected with a credit note, not deleted.</li>
        <li>Your numbering format is flexible, but the system must be consistent and documented.</li>
      </ol>

      <p>Manually managing invoice numbers in a spreadsheet or Word template puts the burden of maintaining a gap-free sequence entirely on you. One mistake, a deleted draft, a skipped number, a test invoice with a real number, creates a gap that could take hours to explain in an audit. Invoicemonk assigns numbers automatically. The sequence is enforced by the system, not by your memory.</p>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_sequential_numbering" target="_blank" rel="noopener">Start issuing sequentially numbered, VAT-compliant invoices free, </a>.</strong></p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">Need to correct an invoice without breaking your sequence? Read our guide to <a href="/en/blog/how-to-issue-credit-note-freelancer">how to issue a credit note</a>.</p>
    `,
  },

  // ═══════════════════════════════════════════════════
  // CREDIT NOTE GUIDE — EU FREELANCER (Week 5)
  // ═══════════════════════════════════════════════════
  {
    slug: 'how-to-issue-credit-note-freelancer',
    title: 'How to issue a credit note — the complete freelancer guide',
    excerpt: "Made an error on an invoice? Here's exactly when to issue a credit note, what it must include, how VAT is affected, and how to keep your invoice sequence intact.",
    category: 'Tax and Compliance',
    tags: [
      'how to issue a credit note',
      'credit note vs correction invoice',
      'when to issue a credit note freelancer',
      'how to cancel an invoice EU',
      'credit note mandatory fields EU',
      'credit note VAT adjustment',
      'correction invoice freelancer',
      'credit note sequential numbering',
      'partial credit note invoice',
      'credit note template freelancer',
    ],
    author: defaultAuthor,
    date: '2026-05-06',
    dateModified: '2026-05-06',
    lastAudited: '2026-05-06',
    readTime: '13 min read',
    featuredImage: '/images/blog/credit-note-guide.jpg',
    featuredImageAlt: 'Freelancer issuing a credit note to correct a sent invoice under EU VAT rules',
    clusterType: 'cluster',
    targetProduct: '/compliance',
    priority: 'P1',
    pillarContent: false,
    macroContext: 'EU freelancer credit note compliance: when to issue, mandatory fields, VAT adjustment timing, sequential numbering, full vs partial corrections, and country-specific nuances (Germany Gutschrift trap, France avoir under the 2026 e-invoicing mandate, Netherlands creditnota).',
    semanticKeywords: [
      'how to issue a credit note',
      'credit note vs correction invoice',
      'when to issue a credit note freelancer',
      'how to cancel an invoice EU',
      'credit note mandatory fields EU',
      'credit note VAT adjustment',
      'correction invoice freelancer',
      'credit note sequential numbering',
      'partial credit note invoice',
      'credit note template freelancer',
      'Stornorechnung',
      'Gutschrift',
      'avoir',
      'creditnota',
    ],
    entityMentions: [
      { name: 'EU VAT Directive 2006/112/EC' },
      { name: 'Stornorechnung' },
      { name: 'Gutschrift' },
      { name: 'Rechnungskorrektur' },
      { name: 'Avoir' },
      { name: 'Note de crédit' },
      { name: 'Creditnota' },
      { name: 'BTW-ID' },
      { name: 'KVK' },
      { name: 'Service des Impôts des Entreprises' },
      { name: 'Plateforme Agréée' },
    ],
    relatedTools: [],
    faq: [
      {
        question: 'What is a credit note and when should I issue one?',
        answer: 'A credit note is a legally binding document that reduces or cancels a previously issued invoice. It is the correct method under EU VAT law for correcting invoicing mistakes, processing cancellations, or issuing partial refunds. A credit note must be issued when an invoice contains a material error (wrong amount, wrong VAT rate, wrong client), when a project is cancelled after an invoice has been sent, when a partial refund is agreed with a client, or when a duplicate invoice has been issued. Deleting or modifying a sent invoice is not a valid correction method in the EU.',
      },
      {
        question: 'What must a credit note include under EU law?',
        answer: 'Under EU VAT Directive 2006/112/EC, a credit note must include: a clear label identifying it as a credit note, a unique sequential credit note number (in its own number series, separate from invoices), the date of issue, a specific reference to the original invoice by number and date, the full names and addresses of both parties, VAT numbers where applicable, a description of what is being credited and why, the credited amount shown as a negative figure, and the VAT amount being reversed (also negative, if the original invoice included VAT). The credit note must mirror the VAT treatment of the original invoice it corrects.',
      },
      {
        question: 'How does a credit note affect my VAT return?',
        answer: 'When a freelancer issues a credit note that reduces or cancels a VAT invoice, their output VAT must be adjusted accordingly. If the credit note is issued in the same VAT period as the original invoice, the adjustment appears in the same return. If the original return has already been filed, the adjustment is made in the next VAT return period. The client who received the original invoice must also reduce their input VAT claim by the corresponding amount when they receive the credit note. For reverse charge invoices, the credit note also shows no VAT; the reversal is handled by the client in their own VAT return, mirroring the original reverse charge treatment.',
      },
      {
        question: 'What is the difference between a full cancellation credit note and a partial credit note?',
        answer: 'A full cancellation credit note completely reverses an original invoice; all amounts are shown as negative figures mirroring the original exactly. It is used when a project is cancelled entirely, an invoice was sent to the wrong client, or the error requires starting fresh. A partial credit note reverses only part of an invoice, for example a single incorrect line item or an agreed price reduction. The original invoice remains valid for the balance; only the credited amount appears on the partial credit note. After either type of credit note, a replacement invoice (if needed) receives the next sequential number; the original number is never reused.',
      },
      {
        question: 'Do credit notes have their own invoice number sequence?',
        answer: 'Yes. Credit notes must have their own sequential number series, separate from the invoice sequence. A common format is CN-2026-001, CN-2026-002. The original invoice number that the credit note cancels is never reused or removed from the sequence; both the original invoice and the credit note remain permanently in the audit trail. When a corrected replacement invoice is issued after a full credit note, it receives the next number in the invoice sequence (not the original cancelled number). This three-document structure (original invoice, credit note, corrected invoice) is the standard audit trail that EU tax authorities expect to see.',
      },
    ],
    content: `
      <p>You sent the invoice. Then you spotted the error: wrong amount, wrong VAT rate, wrong client name. Or the client cancelled the project three days later. Your instinct is to delete the invoice and start again. Do not do that.</p>

      <p>In the EU, deleting or modifying a sent invoice is not a valid correction method. The correct approach is a credit note: a separate document that formally reverses or adjusts the original. This guide explains exactly when to use one, what it must contain, how it affects your VAT, and how to do it without creating gaps in your invoice sequence.</p>

      <h2>What is a credit note, and what is it not?</h2>
      <p data-answer="true">A credit note, sometimes called a correction invoice or cancellation invoice depending on the country, is a legally binding document that reduces or cancels a previously issued invoice. It is the only compliant method under EU VAT law for correcting a sent invoice.</p>

      <p>What makes it different from a replacement invoice: it does not replace the original. Both documents coexist in your records. The credit note references the original by number and date, creates a negative entry in your accounts, and formally adjusts what the client owes.</p>

      <p>Three things a credit note is <em>not</em>:</p>
      <ul>
        <li><strong>It is not a refund.</strong> A credit note is a document. If money needs to be returned to the client, that is a separate bank transaction. The credit note provides the legal basis for the refund; it is not the refund itself.</li>
        <li><strong>It is not a deleted invoice.</strong> You cannot retroactively remove a sent invoice from your records. A sent invoice is a legal document that must be retained, typically for 6 to 10 years depending on the country.</li>
        <li><strong>It is not optional.</strong> In most EU member states, issuing a credit note when a correction is required is a legal obligation, not a courtesy. Skipping it and simply accepting less payment than invoiced creates a discrepancy that will surface in a VAT audit.</li>
      </ul>

      <h2>When do you need to issue a credit note?</h2>
      <p data-answer="true">You need to issue a credit note in five common scenarios: a material error on a sent invoice, a cancelled project, a partial refund or scope reduction agreed with the client, a duplicate or wrong-client invoice, or a retrospective adjustment to a previously paid invoice.</p>

      <h3>Scenario 1: You made an error on the invoice (wrong amount, wrong rate, wrong VAT)</h3>
      <p>Any material error on a sent invoice requires a correction document. Minor typographical errors that do not affect the transaction (a misspelled street name, for example) generally do not require formal correction. But errors that affect the financial or tax position, such as a wrong net amount, wrong VAT rate, wrong currency, or incorrect service description, must be corrected with a credit note.</p>

      <h3>Scenario 2: The client cancelled the project after you sent the invoice</h3>
      <p>If a client cancels after the invoice was issued, you cannot simply forget about the invoice. It exists in your accounts as receivable income and VAT collected (or declared). You must issue a credit note for the full amount to formally reverse the transaction.</p>

      <h3>Scenario 3: The client is disputing part of the invoice (partial refund agreed)</h3>
      <p>If you and the client agree to reduce the invoice amount because the scope changed, a milestone was not completed, or quality was disputed, issue a partial credit note for the difference. The original invoice remains valid for the agreed amount.</p>

      <h3>Scenario 4: The client was invoiced in error (duplicate invoice or wrong client)</h3>
      <p>If you accidentally sent the same invoice twice, or sent it to the wrong client, issue a full credit note referencing the incorrect invoice. Then, if applicable, issue a new correct invoice to the right client.</p>

      <h3>Scenario 5: A previously paid invoice needs a retrospective adjustment</h3>
      <p>If an overpayment was made and you need to offset it against a future invoice, a credit note documents the adjustment formally. This keeps both parties' VAT records consistent.</p>

      <p>Now that you know when to issue one, here is exactly what needs to go on it.</p>

      <h2>What a credit note must include</h2>
      <p data-answer="true">Under EU VAT Directive 2006/112/EC, a credit note is treated as an invoice for VAT purposes. It must contain essentially the same mandatory fields as the original invoice it references, plus the specific reference information that links it back.</p>

      <p>The complete credit note checklist:</p>
      <ul>
        <li><strong>The words "Credit Note"</strong> (or country-equivalent). It must be clearly labelled as a credit note, not an invoice. In Germany: "Stornorechnung" or "Gutschrift" (use carefully; Gutschrift has a specific legal meaning in Germany). In France: "Note de crédit" or "Avoir". In the Netherlands: "Creditnota".</li>
        <li><strong>A unique, sequential credit note number.</strong> Credit notes have their own number sequence, separate from your invoice sequence. Use a format like CN-2026-001, CN-2026-002. These numbers must also be sequential and gap-free.</li>
        <li><strong>Date of issue.</strong></li>
        <li><strong>A specific and unambiguous reference to the original invoice.</strong> This is the critical field. Include the original invoice number and date. Example: "This credit note cancels invoice INV-2026-049, dated 3 June 2026." Without this reference, the credit note has no legal link to the transaction it is correcting.</li>
        <li><strong>Your full name and address.</strong></li>
        <li><strong>Your VAT number</strong> (if applicable).</li>
        <li><strong>Your client's full name and address.</strong></li>
        <li><strong>Your client's VAT number</strong> (if applicable).</li>
        <li><strong>A description of what is being credited and why.</strong> Be specific. "Credit for cancelled project: web development, contracted May 2026" is correct. "Credit" alone is not sufficient.</li>
        <li><strong>The credited amount, shown as a negative figure.</strong> The net amount being reversed, displayed as a negative number (for example, -€2,000.00). Some tools show it as a positive with the credit note label making the direction clear; either is acceptable as long as it is unambiguous.</li>
        <li><strong>The VAT amount being reversed</strong> (if the original invoice included VAT). Also shown as a negative figure.</li>
        <li><strong>The total amount credited (gross), also negative.</strong></li>
      </ul>

      <p style="background:#fff7ed;border-left:4px solid #f97316;padding:16px 20px;border-radius:8px;margin:24px 0;"><strong>Invoicemonk callout:</strong> Invoicemonk generates credit notes with all of these fields pre-filled from the original invoice, including the sequential credit note number and the reference to the original. You select the invoice to credit, enter the amount and reason, and the document is ready. <a href="/invoicing">Try the free invoice generator</a>.</p>

      <h2>Full cancellation vs partial credit: which one to use?</h2>
      <p data-answer="true">Use a full cancellation credit note when the entire transaction is being reversed; use a partial credit note when only part of the invoice is being adjusted. When in doubt, cancel fully and reissue cleanly.</p>

      <h3>Full cancellation credit note</h3>
      <p>Use when you need to completely reverse an invoice: the project was cancelled, the invoice was sent to the wrong client, or the error is so significant that starting fresh is cleaner.</p>
      <p>The credit note mirrors the original invoice exactly (same amounts, same line items) but all figures are negative. Net amount: -€2,000.00. VAT: -€380.00. Total: -€2,380.00.</p>
      <p>After the credit note is issued, the original invoice is formally cancelled. If a new correct invoice is needed, issue it as a new document with the next sequential number.</p>

      <h3>Partial credit note</h3>
      <p>Use when only part of the invoice needs to be adjusted: a pricing error on one line item, a scope reduction, or a partial refund agreed with the client.</p>
      <p>The credit note shows only the amount being reversed, not the full invoice total. Example: original invoice was €3,000. Client agreed to pay €2,500 after a scope change. Issue a credit note for -€500 (plus any applicable VAT adjustment). The original invoice remains valid; the net position is €2,500 owed.</p>
      <p>Which to use depends on whether the transaction itself is being cancelled or just adjusted. When in doubt: cancel fully and reissue cleanly. Partial corrections with multiple credit notes and re-invoices create complex audit trails that are harder to explain.</p>

      <h2>How credit notes affect VAT, and your VAT return</h2>
      <p data-answer="true">When you issue a VAT invoice, you declare output VAT. If you later issue a credit note that reduces or cancels that invoice, your output VAT must be adjusted accordingly: in the same VAT return period if possible, or in the next period if the original return has already been filed.</p>

      <p>Concretely: you invoiced €2,000 + €380 VAT (19%) in May. In June you issue a full credit note. Your June VAT return must reflect a -€380 adjustment to output VAT. If you already filed the May return without knowing the correction was coming, you correct it in June's return, not by amending the May return.</p>

      <p>For your client: if they already claimed input VAT based on your invoice, they must reduce their input VAT claim by the same amount when they receive the credit note. This is why sending the credit note to the client promptly matters; delays cause their VAT records to be overstated until they receive it.</p>

      <p>For reverse charge invoices: if the original invoice was a reverse charge transaction with no VAT shown, the credit note also shows no VAT. The reversal is handled by the client in their own VAT return. For a deeper walkthrough, see our pillar on <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and reverse charge for EU freelancers</a>.</p>

      <h2>Credit notes and sequential numbering: keeping the sequence intact</h2>
      <p data-answer="true">The original invoice number is never reused. Once INV-2026-049 is issued, that number belongs to that document permanently, even if a credit note cancels it completely. Credit notes have their own sequence (CN-2026-001, CN-2026-002), and a corrected replacement invoice receives the next number in the invoice sequence.</p>

      <p>The relationship between credit notes and sequential numbering is one of the most misunderstood aspects of invoice compliance. Here is how they interact:</p>

      <ul>
        <li><strong>The original invoice number is never reused.</strong> Once INV-2026-049 is issued, that number belongs to that document permanently, even if a credit note cancels it completely. The cancelled invoice and its credit note both remain in your records as an audit trail.</li>
        <li><strong>Credit notes have their own sequence.</strong> Do not number credit notes within your invoice sequence. Use a separate prefix: CN-2026-001, CN-2026-002. This keeps the two document types clearly distinguishable in your records.</li>
        <li><strong>A corrected replacement invoice gets the next invoice number.</strong> If you cancel INV-2026-049 with credit note CN-2026-001 and need to reissue a corrected invoice, the corrected version is INV-2026-050: the next number in the invoice sequence.</li>
      </ul>

      <p>What the audit trail looks like:</p>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        <thead>
          <tr style="background:#f1f5f9;">
            <th style="text-align:left;padding:10px;border:1px solid #e2e8f0;">Document</th>
            <th style="text-align:left;padding:10px;border:1px solid #e2e8f0;">Date</th>
            <th style="text-align:left;padding:10px;border:1px solid #e2e8f0;">Amount</th>
            <th style="text-align:left;padding:10px;border:1px solid #e2e8f0;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding:10px;border:1px solid #e2e8f0;"><strong>INV-2026-049</strong> (original)</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">3 June 2026</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">€2,000 + VAT</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">Cancelled</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #e2e8f0;"><strong>CN-2026-001</strong> (credit note)</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">5 June 2026</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">-€2,000 - VAT</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">References INV-2026-049</td>
          </tr>
          <tr>
            <td style="padding:10px;border:1px solid #e2e8f0;"><strong>INV-2026-050</strong> (corrected)</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">5 June 2026</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">€1,800 + VAT</td>
            <td style="padding:10px;border:1px solid #e2e8f0;">Active</td>
          </tr>
        </tbody>
      </table>

      <p>Three documents. No gaps. A clear audit trail that any tax authority can follow without asking questions. For a full explanation of sequential invoice numbering rules, see our guide to <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering and gap prevention</a>.</p>

      <h2>Country-specific nuances worth knowing</h2>
      <p data-answer="true">The EU baseline credit note rules are consistent across all 27 member states, but Germany, France, and the Netherlands each add specific requirements freelancers should know.</p>

      <ul>
        <li><strong>Germany:</strong> the term "Gutschrift" (credit note) has a specific legal meaning. It refers to a self-billing arrangement where the client issues the invoice on behalf of the supplier. Using it to mean a correction invoice is technically incorrect under German VAT law since 2013. Use "Stornorechnung" (cancellation invoice) or "Rechnungskorrektur" (invoice correction) instead. See our guide on <a href="/en/blog/how-to-invoice-german-clients-freelancer">invoicing German clients</a>.</li>
        <li><strong>France:</strong> credit notes are called "avoirs" or "notes de crédit". France's e-invoicing mandate (September 2026 for large and medium businesses, September 2027 for small and micro-enterprises) includes credit notes in scope; they must be submitted through the same Plateforme Agréée certified platforms as regular invoices. See our <a href="/en/blog/french-invoice-requirements-freelancers">French invoice requirements guide</a>.</li>
        <li><strong>Netherlands:</strong> credit notes (creditnota) follow the same BTW rules as invoices. They must include the client's BTW-ID and the KVK number of the Dutch party. See our <a href="/en/blog/netherlands-vat-invoicing-freelancers">Dutch invoice requirements guide</a>.</li>
      </ul>

      <h2>Quick answers</h2>

      <h3>What is a credit note and when should I issue one?</h3>
      <p data-answer="true">A credit note is a legally binding document that reduces or cancels a previously issued invoice. It is the correct method under EU VAT law for correcting invoicing mistakes, processing cancellations, or issuing partial refunds. Issue one when an invoice contains a material error, when a project is cancelled after invoicing, when a partial refund is agreed, or when a duplicate invoice has been sent. Deleting or modifying a sent invoice is not a valid correction method in the EU.</p>

      <h3>What must a credit note include under EU law?</h3>
      <p data-answer="true">Under EU VAT Directive 2006/112/EC, a credit note must include a clear "Credit Note" label, a unique sequential credit note number (separate from invoices), the date of issue, a specific reference to the original invoice by number and date, both parties' names and addresses, VAT numbers where applicable, a description of what is being credited and why, the credited net amount as a negative figure, and the VAT amount being reversed (also negative).</p>

      <h3>How does a credit note affect my VAT return?</h3>
      <p data-answer="true">Your output VAT is reduced by the amount on the credit note. If the credit note is issued in the same VAT period as the original invoice, the adjustment appears in the same return. If the original return has already been filed, adjust it in the next VAT return period. Your client must reduce their input VAT claim by the same amount on receipt. For reverse charge invoices, the credit note also shows no VAT; the client mirrors the reversal in their own return.</p>

      <h3>What is the difference between a full cancellation credit note and a partial credit note?</h3>
      <p data-answer="true">A full cancellation credit note completely reverses an original invoice, with all amounts shown as negative figures mirroring the original. A partial credit note reverses only part of an invoice (one line item, an agreed price reduction), and the original invoice remains valid for the balance. After either type, a replacement invoice (if needed) gets the next sequential number; the original number is never reused.</p>

      <h3>Do credit notes have their own invoice number sequence?</h3>
      <p data-answer="true">Yes. Credit notes use a separate sequential series, commonly formatted as CN-2026-001, CN-2026-002. The cancelled invoice number is never reused. The audit trail shows three documents in sequence: the original invoice, the credit note that references it, and (if needed) a corrected replacement invoice with the next number in the invoice series.</p>

      <h2>The five rules to screenshot</h2>
      <ol>
        <li>Never delete or modify a sent invoice. Always issue a credit note instead.</li>
        <li>A credit note must reference the original invoice by number and date.</li>
        <li>Credit notes have their own sequential number series, separate from your invoice sequence.</li>
        <li>VAT on the credit note must mirror the VAT treatment on the original invoice.</li>
        <li>If you reissue a corrected invoice, it gets the next number in your invoice sequence. Never reuse the cancelled number.</li>
      </ol>

      <p>Invoicemonk generates credit notes directly from the original invoice: pre-filled with the reference, the correct amounts (positive or negative), and the next sequential credit note number. The audit trail is built automatically.</p>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_credit_note_guide" target="_blank" rel="noopener">Issue your first credit note in Invoicemonk: free, </a>.</strong></p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">Want to understand how sequential invoice numbering works and why gaps are dangerous? Read our complete guide to <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering and gap prevention</a>. For the EU-wide rules behind credit notes, see <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements</a> and <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT for EU freelancers</a>. External: <a href="https://ec.europa.eu/digital-building-blocks/sites/display/DIGITAL/eInvoicing+in+France" rel="nofollow noopener" target="_blank">European Commission eInvoicing France page</a>.</p>
    `,
  },

  // ═══════════════════════════════════════════════════
  // POLAND — Foreign freelancer guide & KSeF
  // ═══════════════════════════════════════════════════
  {
    slug: 'invoicing-polish-clients-foreign-freelancer',
    title: 'Invoicing Polish clients as a freelancer — KSeF explained',
    excerpt: 'Do you need to register for KSeF to invoice a Polish client? NIP numbers, reverse charge wording, Article 106e mandatory fields, and Biała Lista verification - explained in plain English.',
    category: 'Tax and Compliance',
    tags: ['invoice Poland foreign freelancer', 'KSeF freelancer', 'NIP number invoice Poland', 'Poland reverse charge invoice', 'Poland VAT invoice requirements freelancer', 'does KSeF apply to foreign companies', 'Polish VAT invoice mandatory fields Article 106e', 'Biała Lista verification', 'invoicing Polish client KSeF', 'invoice Polish business cross-border'],
    author: defaultAuthor,
    date: '2026-05-06',
    dateModified: '2026-05-06',
    lastAudited: '2026-05-06',
    readTime: '12 min read',
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Invoicing Polish clients as a foreign freelancer — NIP, KSeF, and reverse charge',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/compliance',
    priority: 'P2',
    macroContext: 'Poland KSeF mandate scope, foreign freelancer reverse charge, Article 106e invoice fields, Biała Lista verification, PLN currency conversion, micro-entrepreneur exemption',
    semanticKeywords: [
      'invoice Poland foreign freelancer',
      'KSeF freelancer',
      'NIP number invoice Poland',
      'Poland reverse charge invoice',
      'Poland VAT invoice requirements freelancer',
      'does KSeF apply to foreign companies',
      'Polish VAT invoice mandatory fields Article 106e',
      'Biała Lista verification',
      'invoicing Polish client KSeF',
      'invoice Polish business cross-border',
      'odwrotne obciążenie invoice',
      'FA(3) XML KSeF format'
    ],
    entityMentions: [
      { name: 'KSeF (Krajowy System e-Faktur)', type: 'GovernmentService', url: 'https://www.podatki.gov.pl/ksef/' },
      { name: 'NIP (Numer Identyfikacji Podatkowej)', type: 'Thing' },
      { name: 'Biała Lista podatników VAT', type: 'WebApplication', url: 'https://www.podatki.gov.pl/wykaz-podatnikow-vat-wyszukiwarka/' },
      { name: 'Article 106e Polish VAT Act', type: 'Legislation' },
      { name: 'EU VAT Directive 2006/112/EC Article 196', type: 'Legislation' },
      { name: 'FA(3) XML format', type: 'Thing' },
      { name: 'Polish Ministry of Finance', type: 'GovernmentOrganization', url: 'https://www.gov.pl/web/finanse' },
      { name: 'Krajowa Administracja Skarbowa (KAS)', type: 'GovernmentOrganization' },
      { name: 'Narodowy Bank Polski (NBP)', type: 'GovernmentOrganization', url: 'https://nbp.pl' },
      { name: 'Faktura korygująca', type: 'Thing' },
      { name: 'Odwrotne obciążenie', type: 'Thing' },
      { name: 'Jednoosobowa działalność gospodarcza', type: 'Thing' }
    ],
    relatedTools: [
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance for the EU, including Poland' },
      { label: 'Free EU invoice generator', url: '/invoicing', description: 'Create reverse-charge invoices for Polish business clients' }
    ],
    faq: [
      {
        question: 'Do I need to register for KSeF to invoice a Polish client as a foreign freelancer?',
        answer: 'No. KSeF (Krajowy System e-Faktur) is Poland\'s national e-invoicing system, and the mandate to issue invoices through KSeF applies only to taxpayers established in Poland or with a fixed establishment there. A foreign freelancer with no Polish business registration is out of scope. You issue your invoice the way you normally would, in PDF, with the reverse charge notation under Article 196 of the EU VAT Directive (or your local equivalent for non-EU suppliers). Your Polish client receives it by email and books it in their own accounting system. KSeF registration, the FA(3) XML format, and the KSeF taxpayer app are not your concern.'
      },
      {
        question: 'What is a NIP number and where do I find my Polish client\'s NIP?',
        answer: 'NIP stands for Numer Identyfikacji Podatkowej, the Polish Tax Identification Number. Every Polish business has one, and it must appear on every invoice you issue to a Polish client. The NIP is a 10-digit number, often written with hyphens (for example, 123-456-78-90) or as a continuous string. For VAT-registered businesses, the EU VAT number is the NIP prefixed with "PL" (PL1234567890), and this is the format you verify in the EU VIES database. Ask the client for their NIP at the start of the engagement, or look it up on the Biała Lista (the Polish Ministry of Finance whitelist of VAT-registered taxpayers) at podatki.gov.pl.'
      },
      {
        question: 'What wording do I put on a reverse charge invoice to a Polish business?',
        answer: 'On a cross-border B2B invoice to a Polish VAT-registered business, you charge no VAT and include both the EU and the Polish reverse charge notation. The standard wording is: "VAT: Reverse charge - Article 196, EU VAT Directive 2006/112/EC. Odwrotne obciążenie." "Odwrotne obciążenie" is the Polish phrase for reverse charge and signals to the client\'s accountant exactly how to book the invoice. Include your own tax number, the client\'s Polish VAT number in PL format (verified via VIES), the date of supply, a sequential invoice number, and a clear description of the service. The total on the invoice is the net amount only; no VAT line.'
      },
      {
        question: 'Does KSeF apply to foreign companies invoicing Polish clients?',
        answer: 'KSeF does not apply to foreign companies that have no establishment or fixed place of business in Poland. The Polish KSeF mandate covers Polish-resident taxpayers and entities with a fixed establishment in Poland that participates in the supply. A non-resident freelancer issuing a single cross-border invoice to a Polish client falls outside the scope. The Polish client may receive a paper or PDF invoice from a foreign supplier, book it in their accounts, and report the reverse charge in their own VAT return. The only obligation that affects you is the standard EU reverse charge wording and verification of the client\'s VAT number through VIES.'
      },
      {
        question: 'What does KSeF mean for me if I am a freelancer based in Poland?',
        answer: 'If you run a jednoosobowa działalność gospodarcza (a Polish sole proprietorship) and you are VAT-registered, KSeF applies to you on the active rollout schedule published by the Polish Ministry of Finance. From 1 February 2026, large taxpayers (annual turnover above PLN 200 million) must issue all B2B invoices through KSeF in the FA(3) XML format. From 1 April 2026, all other VAT-registered businesses, including freelancers, are obligated. From 1 January 2027, the smallest "micro" issuers (single invoice up to PLN 450, monthly turnover up to PLN 10,000) join, and the bank-transfer rule requiring the KSeF invoice ID in the payment reference begins applying. Corrections are issued as a faktura korygująca through KSeF, never as a deletion.'
      }
    ],
    content: `
      <p>You picked up a project for a client in Warsaw. You have read three blog posts about KSeF, Poland's new national e-invoicing system, and you are now wondering whether you need to register for it, generate XML in a specific schema, or hire a Polish accountant before you can send the first invoice.</p>
      <p data-answer="true">Almost certainly not. KSeF applies to taxpayers established in Poland. As a foreign freelancer with no Polish business presence, you issue a normal cross-border invoice with the reverse charge notation, send it by email, and let your client handle the Polish side. This guide covers exactly what to put on that invoice, the small list of edge cases where things change, and what KSeF means for the freelancers who do live in Poland.</p>

      <h2>What is KSeF, and why is everyone talking about it?</h2>
      <p data-answer="true">KSeF (Krajowy System e-Faktur) is Poland's mandatory national e-invoicing platform. From 1 February 2026 large taxpayers must issue B2B invoices through it in a structured XML format; from 1 April 2026 all other VAT-registered businesses join; from 1 January 2027 the smallest micro issuers follow.</p>
      <p>KSeF is operated by the Polish Ministry of Finance and Krajowa Administracja Skarbowa (KAS, the Polish tax administration). It is a clearance model: the invoice is sent first to the government platform, validated, assigned a unique KSeF invoice ID, and then exchanged with the buyer. There is no separate transmission step like in countries with a five-corner Peppol model. KSeF is the network.</p>
      <p>The format is FA(3), a structured XML schema published by the Ministry of Finance. PDFs alone are not accepted on the mandate side. The rollout has three confirmed phases:</p>
      <ul>
        <li><strong>1 February 2026:</strong> large taxpayers (annual turnover above PLN 200 million in 2024) must issue all B2B invoices through KSeF.</li>
        <li><strong>1 April 2026:</strong> all other VAT-registered Polish businesses, including most freelancers, must issue B2B invoices through KSeF.</li>
        <li><strong>1 January 2027:</strong> the smallest "micro" issuers (single invoice up to PLN 450, monthly invoice value up to PLN 10,000) join, and the bank-transfer rule requiring the KSeF invoice ID in the payment reference becomes effective.</li>
      </ul>
      <p>The fear most foreign freelancers have when they hear all this is that KSeF will somehow apply to them too. It does not. Let's walk through why.</p>

      <h2>Does KSeF apply to you as a foreign freelancer?</h2>
      <p data-answer="true">No. KSeF applies to taxpayers established in Poland or with a fixed establishment there. If your business is registered abroad and you have no office, employees, or fixed place of business in Poland, you are out of scope. You issue a normal cross-border invoice in PDF and your Polish client books it on their side.</p>
      <p>The legal scope of the KSeF mandate is anchored in the Polish VAT Act and tracks the EU concept of "fixed establishment" from the EU VAT Directive. A fixed establishment means a stable presence with both human and technical resources sufficient to supply or receive services. A laptop and a remote contract are not a fixed establishment. An apartment you rent in Kraków while you travel is not a fixed establishment either.</p>
      <p>That means in the standard scenario - you live in Berlin, London, Lagos, or anywhere outside Poland, you have a foreign business or operate as a sole trader registered in your home country, and you invoice a Polish company once or many times - KSeF does not apply to you.</p>
      <p>Three edge cases worth flagging:</p>
      <ul>
        <li><strong>You opened a Polish branch or subsidiary.</strong> If you set up a Polish entity (a sp. z o.o. or a registered branch), that entity is a Polish taxpayer and falls under KSeF on the schedule above.</li>
        <li><strong>You are physically present in Poland with staff.</strong> If you rent office space in Warsaw with a Polish employee taking client work, the tax authority may treat you as having a fixed establishment, even without a separate Polish company.</li>
        <li><strong>Your Polish client requests a KSeF invoice anyway.</strong> Some Polish accountants prefer to receive every invoice through KSeF for consistency. They can ask, but they cannot require it from a non-resident supplier. Keep issuing your standard PDF invoice with the reverse charge notation.</li>
      </ul>
      <aside style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:24px 0;border-radius:6px;">
        <p style="margin:0;"><strong>Invoicemonk handles cross-border Polish invoices out of the box.</strong> Pick "Poland" as the client country and the PL VAT number field, the "Odwrotne obciążenie" notation, and the Article 196 reference appear automatically. <a href="/invoicing">Try the free invoice generator</a>.</p>
      </aside>

      <h2>What are the mandatory fields on a Polish VAT invoice?</h2>
      <p data-answer="true">A Polish VAT invoice must include the issue date, a sequential invoice number, the supplier's and buyer's names, addresses and tax numbers, the date of supply, a description of the service, the net amount, the VAT rate and amount (or a reverse charge note), and the total. The list comes from Article 106e of the Polish VAT Act and tracks the EU baseline closely.</p>
      <p>The full Article 106e checklist for a cross-border invoice from a foreign freelancer to a Polish business client:</p>
      <ul>
        <li><strong>Date of issue</strong> (data wystawienia).</li>
        <li><strong>A sequential invoice number</strong> from an unbroken series. Read our <a href="/en/blog/sequential-invoice-numbering-eu">guide to sequential invoice numbering in the EU</a> if you have not set up a numbering scheme yet.</li>
        <li><strong>Your full legal name and address</strong> as the supplier.</li>
        <li><strong>Your tax identification number.</strong> If you are an EU-based supplier, this is your home-country EU VAT number (for example DE123456789, FRXX123456789). If you are a non-EU supplier, this is your local tax number; if you do not have one, your Polish client will accept a "no VAT registration in country of establishment" note alongside your business registration number.</li>
        <li><strong>Your client's full legal name and address.</strong></li>
        <li><strong>Your client's NIP, in PL format</strong> (PL followed by 10 digits) for a VAT-registered Polish business. This is the number you verify in VIES before applying reverse charge.</li>
        <li><strong>Date of supply</strong> (data dokonania dostawy / wykonania usługi). The date the service was performed or completed. If different from the invoice date, both must appear.</li>
        <li><strong>A specific description of the service</strong> (nazwa towaru lub usługi). "Consulting" is not specific enough; "UX audit of mobile checkout flow, May 2026" is.</li>
        <li><strong>Quantity, unit price, and net amount per line.</strong></li>
        <li><strong>Net total</strong> (wartość netto). On a reverse charge invoice, this is also the invoice total.</li>
        <li><strong>VAT rate and VAT amount</strong> - or, on a reverse charge invoice, the words "Odwrotne obciążenie" and the Article 196 reference instead.</li>
        <li><strong>Gross total</strong> (wartość brutto). Equal to the net total on a reverse charge invoice.</li>
        <li><strong>Currency.</strong> You may invoice in any currency, but if you invoice in a foreign currency the Polish client converts to PLN using the National Bank of Poland (NBP) exchange rate from the working day preceding the date of supply for their VAT return. You do not have to do the conversion on the invoice, but quoting the NBP rate as a courtesy is helpful.</li>
        <li><strong>Payment terms and bank details.</strong></li>
      </ul>
      <p>One Polish-specific habit worth adopting before sending the invoice: check the client on the Biała Lista (the white list of VAT-registered taxpayers) at podatki.gov.pl. The Biała Lista shows the client's active VAT status and the bank account they have registered for Polish tax purposes. If the client later disputes the invoice or your payment is delayed, having a Biała Lista screenshot from the day you issued the invoice protects you.</p>

      <h2>How does reverse charge work on a Polish invoice?</h2>
      <p data-answer="true">On a cross-border B2B invoice to a Polish VAT-registered client, you charge no VAT and add the bilingual notation: "VAT: Reverse charge - Article 196, EU VAT Directive 2006/112/EC. Odwrotne obciążenie." The Polish client reports and recovers the VAT in their own JPK_VAT return.</p>
      <p>The mechanism is the same as any other intra-EU B2B service supply. Article 44 of the EU VAT Directive places the supply in the country where the customer is established. Article 196 then shifts the VAT obligation onto that customer. Article 226(11a) requires the words "reverse charge" on the invoice.</p>
      <p>What this looks like on the invoice itself:</p>
      <blockquote>VAT: Reverse charge - Article 196, EU VAT Directive 2006/112/EC.<br/>Odwrotne obciążenie.</blockquote>
      <p>Including both lines together is the safest practice. The English line satisfies the EU directive; the Polish line tells the client's accountant exactly how to book the entry without translation. The total on the invoice is the net amount only; no VAT row, no gross total above net.</p>
      <p>Two verification habits before you send:</p>
      <ul>
        <li><strong>Verify the PL VAT number in VIES.</strong> ec.europa.eu/taxation_customs/vies. If the number is invalid you cannot apply reverse charge, and if you do anyway you can be held liable for the Polish VAT. Save a screenshot or print of the result.</li>
        <li><strong>Cross-check the Biała Lista entry.</strong> The Polish whitelist confirms the client is an active Polish VAT taxpayer and shows the bank account they have officially registered. This is a Polish-specific layer on top of VIES.</li>
      </ul>
      <p>And the reassurance worth repeating: KSeF does not enter the picture for you. Your Polish client receives a PDF, books it in their accounts, and reports the reverse charge in their JPK_VAT return. You file your own normal cross-border B2B sales report (the EC Sales List, recapitulative statement, or its equivalent in your home country).</p>

      <h2>If you are based in Poland - what does KSeF mean for you?</h2>
      <p data-answer="true">If you run a Polish sole proprietorship and you are VAT-registered, KSeF applies to you. From 1 April 2026 you must issue all B2B invoices through KSeF in the FA(3) XML format. The smallest "micro" issuers (single invoice up to PLN 450, monthly turnover up to PLN 10,000) join from 1 January 2027.</p>
      <p>The practical picture for a Polish-resident freelancer (jednoosobowa działalność gospodarcza, a sole proprietorship) under KSeF:</p>
      <ul>
        <li><strong>The format.</strong> Invoices are issued as FA(3) XML. You do not write XML by hand: you use either the free Polish Ministry of Finance taxpayer app, an integrated invoicing tool, or your accountant's software, which generates the XML and submits it to KSeF on your behalf.</li>
        <li><strong>The unique KSeF invoice ID.</strong> Every successfully cleared invoice receives a KSeF invoice ID. This ID is the legal identifier of the invoice. From 1 August 2026, B2B bank transfers between Polish VAT taxpayers must include the KSeF invoice ID in the payment reference. Your client cannot pay you correctly without it.</li>
        <li><strong>The micro-entrepreneur exemption.</strong> If your single invoice value does not exceed PLN 450 and your total monthly invoice value does not exceed PLN 10,000, you are not obligated to use KSeF until 1 January 2027. The micro threshold is reviewed monthly: cross it once and you fall under the mandate from the next billing period.</li>
        <li><strong>Corrections.</strong> Mistakes are fixed by issuing a faktura korygująca (a corrective invoice) through KSeF. You never delete or replace the original; the corrective invoice references the KSeF ID of the invoice it corrects. Read our <a href="/en/blog/credit-notes-and-invoice-corrections">credit-note guide</a> for the EU principles that the Polish faktura korygująca implements.</li>
        <li><strong>Invoices to private consumers (B2C).</strong> KSeF currently covers B2B invoices. Invoices to Polish private individuals continue under the existing rules; the Ministry of Finance has signalled future B2C inclusion but it is not in the active mandate.</li>
      </ul>
      <p>If you are based in Poland and unsure whether your invoicing setup is KSeF-ready before April 2026, talk to your accountant (księgowy) now. Migration is a software question; the legal obligation is fixed.</p>

      <h2>What are the most common mistakes on invoices to Polish clients?</h2>
      <ol>
        <li><strong>Trying to register for KSeF as a foreign freelancer.</strong> KSeF does not apply to non-resident suppliers. You waste days on a registration that gives you nothing and does not satisfy any legal requirement. Issue a normal PDF with the reverse charge notation instead.</li>
        <li><strong>Putting the NIP without the PL prefix.</strong> The 10-digit NIP alone is the domestic Polish tax number. For a cross-border B2B invoice you need the EU VAT format: PL followed by the 10 digits, with no spaces. That is the format VIES validates.</li>
        <li><strong>Skipping the "Odwrotne obciążenie" line.</strong> The English Article 196 reference alone is acceptable under the EU directive, but Polish accountants book invoices faster when the Polish phrase is on the page. Including both is a small effort with a real friction reduction.</li>
        <li><strong>Not verifying the client on Biała Lista.</strong> Biała Lista is a Polish-specific safety net. It confirms the VAT status and the official bank account. Skipping it means you have no defence if the bank account is later flagged as not belonging to the registered taxpayer.</li>
        <li><strong>Forgetting the date of supply.</strong> Article 106e separates the date of issue from the date of supply (data dokonania dostawy lub wykonania usługi). If you delivered the service in May and invoiced in June, both dates must appear on the invoice. Many freelancers list only the invoice date and confuse the client's accountant.</li>
      </ol>

      <h2>Quick answers</h2>
      <h3>Do I need to register for KSeF to invoice a Polish client as a foreign freelancer?</h3>
      <p data-answer="true">No. KSeF applies only to taxpayers established or with a fixed establishment in Poland. As a non-resident freelancer you issue a normal cross-border PDF invoice with the reverse charge notation under Article 196 of the EU VAT Directive (or your local equivalent for non-EU suppliers). KSeF registration, FA(3) XML, and the KSeF taxpayer app are not your concern.</p>

      <h3>What is a NIP number and where do I find my Polish client's NIP?</h3>
      <p data-answer="true">NIP (Numer Identyfikacji Podatkowej) is the Polish Tax Identification Number. It is 10 digits long and must appear on every invoice to a Polish client. For VAT-registered businesses the EU VAT number is the NIP prefixed with "PL." Look it up on the Biała Lista at podatki.gov.pl.</p>

      <h3>What wording do I put on a reverse charge invoice to a Polish business?</h3>
      <p data-answer="true">Use both the EU and Polish notation: "VAT: Reverse charge - Article 196, EU VAT Directive 2006/112/EC. Odwrotne obciążenie." Charge no VAT, show the net amount as the total, and include the client's PL VAT number verified through VIES.</p>

      <h3>Does KSeF apply to foreign companies invoicing Polish clients?</h3>
      <p data-answer="true">No. KSeF applies to Polish-resident taxpayers and entities with a fixed establishment in Poland. A non-resident freelancer issuing cross-border invoices is out of scope and continues with normal cross-border B2B reverse charge invoicing.</p>

      <h3>What does KSeF mean for me if I am a freelancer based in Poland?</h3>
      <p data-answer="true">If you are a VAT-registered Polish sole proprietor, KSeF applies from 1 April 2026 (large taxpayers from 1 February 2026; the smallest "micro" issuers from 1 January 2027). All B2B invoices must be issued through KSeF in the FA(3) XML format, and corrections are filed as faktury korygujące through the same system.</p>

      <h2>Your Polish-invoice checklist</h2>
      <ul>
        <li>Issue date and sequential invoice number</li>
        <li>Your full legal name, address, and tax number</li>
        <li>Client name, address, and PL VAT number (verified via VIES)</li>
        <li>Date of supply (if different from issue date)</li>
        <li>Specific service description, quantity, unit price, line net</li>
        <li>Net total (= invoice total on a reverse charge invoice)</li>
        <li>"VAT: Reverse charge - Article 196, EU VAT Directive 2006/112/EC. Odwrotne obciążenie."</li>
        <li>Currency and (optional) NBP exchange-rate note</li>
        <li>Bank details cross-checked against the Biała Lista</li>
      </ul>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_poland_freelancer" target="_blank" rel="noopener">Create your first compliant Polish invoice free, </a>.</strong></p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">Invoicing across multiple EU countries? Read our pillar guide to <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and the reverse charge mechanism</a>, or compare with our country guides for <a href="/en/blog/how-to-invoice-german-clients-freelancer">Germany</a>, <a href="/en/blog/dutch-invoice-requirements-freelancers">the Netherlands</a>, and <a href="/en/blog/french-invoice-requirements-freelancers">France</a>.</p>
    `,
  },
  // ═══════════════════════════════════════════════════
  // KENYA — Foreign freelancer invoicing Kenyan clients (KRA, eTIMS, reverse charge, WHT)
  // ═══════════════════════════════════════════════════
  {
    slug: 'invoicing-kenyan-clients-foreign-freelancer',
    title: 'Invoicing Kenyan clients as a foreign freelancer (2026)',
    excerpt: 'Does eTIMS apply to foreign freelancers billing Kenyan clients? Here is what KRA-compliant means for non-residents, plus the reverse charge rules and invoice wording.',
    category: 'Tax and Compliance',
    tags: ['invoicing Kenyan clients foreign freelancer', 'eTIMS foreign freelancer', 'KRA PIN invoice non-resident', 'Kenya reverse charge', 'Kenya withholding tax freelancer', 'KRA-compliant invoice', 'cross-border services Kenya'],
    author: defaultAuthor,
    date: '2026-05-07',
    dateModified: '2026-05-07',
    lastAudited: '2026-05-07',
    readTime: '13 min read',
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Foreign freelancer invoicing a Kenyan business client with KRA PIN and reverse charge wording',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/compliance',
    priority: 'P1',
    macroContext: 'Cross-border invoicing for Kenyan clients from non-resident foreign freelancers, eTIMS scope, KRA PIN, Kenyan reverse charge under VAT Act Cap 476, and 20% non-resident withholding tax.',
    semanticKeywords: [
      'invoicing Kenyan clients foreign freelancer',
      'does eTIMS apply to foreign freelancers Kenya',
      'KRA PIN invoice non-resident Kenya',
      'Kenya reverse charge foreign supplier',
      'non-resident supplier Kenya VAT invoice',
      'Kenya withholding tax freelancer',
      'invoice Kenya cross-border services',
      'KRA compliant invoice foreign business',
      'Kenya VAT registration non-resident freelancer',
    ],
    entityMentions: [
      { name: 'Kenya Revenue Authority (KRA)', type: 'GovernmentOrganization', url: 'https://www.kra.go.ke' },
      { name: 'eTIMS (electronic Tax Invoice Management System)', type: 'GovernmentService' },
      { name: 'Kenya VAT Act, Cap 476', type: 'Legislation' },
      { name: 'Kenya Tax Procedures Act', type: 'Legislation' },
      { name: 'iTax', type: 'WebApplication', url: 'https://itax.kra.go.ke' },
      { name: 'KRA PIN', type: 'Thing' },
      { name: 'Double Taxation Agreement', type: 'Thing' },
      { name: 'Withholding tax (non-resident)', type: 'Thing' },
    ],
    relatedTools: [
      { label: 'Free invoice generator', url: '/invoicing', description: 'Create reverse-charge invoices for Kenyan business clients with KRA PIN field.' },
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance, including Kenya.' },
    ],
    faq: [
      {
        question: 'Does eTIMS apply to foreign freelancers billing Kenyan clients?',
        answer: 'eTIMS (electronic Tax Invoice Management System) applies to businesses operating in Kenya - those with a Kenyan registration and a KRA PIN. Foreign freelancers without a permanent establishment in Kenya are not required to register for or use eTIMS. Their services are specifically exempted from the eTIMS obligation under Kenya\'s Tax Procedures Act as "services by non-resident persons without a permanent establishment in Kenya." Foreign freelancers should still issue invoices that include the Kenyan client\'s KRA PIN and the correct reverse charge language so the client can process the transaction correctly in their own tax records.',
      },
      {
        question: 'What is the reverse charge mechanism for non-resident suppliers in Kenya?',
        answer: 'Kenya\'s VAT Act applies a reverse charge mechanism when a Kenyan VAT-registered business receives taxable services from a non-resident supplier without a permanent establishment in Kenya. Under this mechanism, the Kenyan business accounts for and pays the VAT to KRA. The foreign supplier does not charge Kenyan VAT. The invoice should include the net amount only and a note stating: "No Kenyan VAT charged. VAT accounting is the responsibility of the recipient under the reverse charge provisions of Kenya\'s VAT Act, Cap 476." The client\'s KRA PIN must also appear on the invoice.',
      },
      {
        question: 'What is withholding tax on Kenyan invoices for foreign freelancers?',
        answer: 'Kenya applies withholding tax (WHT) of 20% on professional fees, management fees, and certain other service payments made to non-resident suppliers without a Kenyan permanent establishment. The Kenyan client deducts this 20% from the payment and remits it directly to KRA, issuing the foreign supplier a withholding tax certificate as proof. A foreign freelancer who invoices KES 100,000 receives KES 80,000; the client retains and remits the balance. If Kenya has a Double Taxation Agreement (DTA) with the freelancer\'s country of residence, the WHT rate may be reduced. Kenya has DTAs with Germany, the UK, India, Canada, and several other countries.',
      },
      {
        question: 'What must a foreign freelancer\'s invoice to a Kenyan client include?',
        answer: 'A foreign freelancer billing a Kenyan business client must include: full legal name, business address, and country of residence; home country tax identification number; the client\'s full legal name, address, and 11-character KRA PIN; a unique sequential invoice number; the date of issue and date of service; a specific description of services; the net amount in the agreed currency with no Kenyan VAT; and a note stating that no Kenyan VAT is charged and that the reverse charge mechanism applies under Kenya\'s VAT Act. Bank payment details for receiving the net amount after withholding tax deduction should also be included.',
      },
      {
        question: 'Do Kenyan freelancers billing international clients need to use eTIMS?',
        answer: 'Yes. Kenyan-registered freelancers using eTIMS for domestic clients must also issue invoices through eTIMS for international clients, but these invoices are zero-rated for VAT at 0%, not 16%. The eTIMS platform records the export supply for the freelancer\'s VAT return. The foreign client does not interact with eTIMS and receives the invoice through normal channels such as email or an invoicing platform. The obligation to use eTIMS applies to the Kenyan business regardless of where the client is located, with the VAT rate reflecting the export status of the supply.',
      },
    ],
    content: `
      <p>Your Kenyan client asked for a "KRA-compliant invoice." Maybe they even mentioned eTIMS. Now you are wondering whether you need to register with Kenya's Revenue Authority before you can get paid.</p>
      <p data-answer="true">The short answer: almost certainly not. eTIMS, Kenya's mandatory electronic invoicing system, applies to businesses operating in Kenya. As a foreign freelancer without a Kenyan establishment or KRA PIN, you are not required to use it. But your invoice still needs to be right. Here is exactly what "KRA-compliant" means for a non-resident supplier, plus the reverse charge rules and the 20% withholding tax detail most guides skip.</p>

      <h2>What eTIMS is, and who it applies to</h2>
      <p data-answer="true">eTIMS (electronic Tax Invoice Management System) is Kenya's national platform for generating, validating, and submitting tax invoices in real time to the Kenya Revenue Authority (KRA). Since January 2024 it has been mandatory for all businesses operating in Kenya, whether VAT-registered or not. Foreign freelancers without a Kenyan establishment or KRA PIN are out of scope.</p>
      <p>Every invoice issued by a Kenyan business must pass through or be reported to eTIMS, and any expense not backed by a valid eTIMS invoice is non-deductible for Kenyan income tax purposes. The operative phrase is "businesses operating in Kenya." The mandate covers entities with a Kenya presence: sole traders, companies, and professionals registered in Kenya with a KRA PIN. It does not extend to foreign suppliers without a Kenyan establishment.</p>
      <p>One important consequence: your Kenyan client needs an eTIMS invoice for purchases to be deductible as a business expense. The exemption under Kenya's Tax Procedures Act specifically covers "services by non-resident persons without a permanent establishment in Kenya," meaning your non-eTIMS invoice is still a valid supporting document for their records, even though it cannot be processed through eTIMS.</p>
      <p>For a full guide to how eTIMS works for Kenyan businesses, see our <a href="/en/blog/kenya-etims-small-business-guide">eTIMS Kenya guide</a>.</p>

      <h2>What your Kenyan client actually means by "KRA-compliant"</h2>
      <p data-answer="true">When a Kenyan client asks for a "KRA-compliant invoice," they are not asking you to use eTIMS. They are asking for an invoice that contains the fields their accountant needs to process the payment, record the expense, and handle their own withholding tax obligations.</p>
      <p>For a foreign supplier, "KRA-compliant" in practice means an invoice that includes:</p>
      <ul>
        <li>Your full legal name, business name, and address</li>
        <li>Your country of tax residence and tax identification number (whatever your country issues)</li>
        <li>The client's full legal name and address</li>
        <li>The client's KRA PIN, an 11-character alphanumeric identifier (for example, P051234567A) that all Kenyan businesses must have</li>
        <li>A sequential invoice number</li>
        <li>The date of issue and the date of service</li>
        <li>A clear description of services performed</li>
        <li>The net amount and currency</li>
        <li>A note explaining that no Kenyan VAT is charged and why (see Section 4)</li>
      </ul>
      <p>That is what "KRA-compliant" means for you. It is about the fields on the invoice, not the platform it was issued from.</p>

      <h2>Do you need to register for VAT in Kenya?</h2>
      <p data-answer="true">For most foreign freelancers billing Kenyan business clients, no. VAT registration in Kenya is required for businesses with annual taxable turnover exceeding KES 5 million (approximately USD 38,000) from Kenyan sources. As a non-resident foreign freelancer without a permanent establishment in Kenya, you are generally not within the scope of Kenya's VAT Act for your outbound services.</p>
      <p>There is a nuance for digital services: Kenya requires non-resident suppliers of digital services to Kenyan consumers to register for VAT regardless of turnover. If you provide digital products (software subscriptions, streaming, online courses, digital downloads) directly to Kenyan individual consumers, VAT registration may apply. If you are billing a Kenyan business client for professional services (development, design, consulting, marketing), this rule does not apply.</p>
      <p>The distinction matters: B2B professional services from a foreign supplier to a Kenyan business trigger the reverse charge mechanism (next section). B2C digital services to Kenyan individuals trigger a different set of rules entirely. When in doubt, consult a Kenyan tax advisor; KRA's guidance on non-resident suppliers is available at <a href="https://www.kra.go.ke" target="_blank" rel="nofollow noopener">kra.go.ke</a>.</p>

      <h2>Reverse charge in Kenya: what it means for your invoice</h2>
      <p data-answer="true">When a Kenyan business receives taxable services from a non-resident supplier without a Kenyan permanent establishment, Kenya's VAT Act applies the reverse charge mechanism. The Kenyan business, not the foreign supplier, accounts for and pays the VAT to KRA. This is the same logic as the EU's reverse charge, but governed by Kenya's domestic VAT legislation rather than the EU VAT Directive.</p>
      <p>What this means for your invoice:</p>
      <ul>
        <li>You do not charge Kenyan VAT (currently 16% standard rate)</li>
        <li>You invoice at the net amount only</li>
        <li>You include a note on the invoice explaining the VAT treatment</li>
      </ul>
      <p>Suggested wording for your invoice:</p>
      <blockquote style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:16px 0;border-radius:6px;">
        <p style="margin:0;"><em>"This invoice is issued by a non-resident supplier without a permanent establishment in Kenya. No Kenyan VAT is charged. VAT accounting is the responsibility of the recipient under the reverse charge provisions of Kenya's VAT Act, Cap 476."</em></p>
      </blockquote>
      <p>Your invoice must also include your client's KRA PIN; their accountant needs it to process the reverse charge in their VAT return.</p>

      <h3>Withholding tax: the detail most guides skip</h3>
      <p>Kenya also applies withholding tax (WHT) to certain payments to non-resident suppliers, including professional and management fees. The standard WHT rate for non-resident service providers is 20% of the gross payment. Your Kenyan client deducts this 20% at source: they pay you the net amount and remit the 20% to KRA directly.</p>
      <p>What this means for your invoice: you invoice the full agreed amount. Your client deducts 20% WHT and pays you the remainder. They should issue you a withholding tax certificate (available through iTax) as proof of deduction; keep this for your own tax records in your home country.</p>
      <p>If Kenya has a Double Taxation Agreement (DTA) with your country of residence, the WHT rate may be reduced. Kenya has DTAs with several countries including Germany, the UK, India, and Canada. Check the current treaty rate with a Kenyan tax advisor or on the KRA website before your first invoice.</p>
      <p>Here is what a complete, KRA-compliant invoice from a foreign freelancer looks like.</p>

      <h2>The complete invoice checklist for foreign freelancers billing Kenyan clients</h2>
      <p>Every invoice to a Kenyan business client must include:</p>
      <ul>
        <li>Your full legal name and business name (personal legal name for sole traders)</li>
        <li>Your business address and country of residence; make your non-Kenyan status clear</li>
        <li>Your home country tax identification number (VAT number, tax file number, or equivalent)</li>
        <li>Your client's full legal name and address</li>
        <li>Your client's KRA PIN: 11-character alphanumeric (for example, P051234567A). Always ask for it before issuing the first invoice</li>
        <li>A unique sequential invoice number</li>
        <li>Date of issue and date of service</li>
        <li>A specific description of services. Vague descriptions like "consulting" are not sufficient. "Brand strategy and content framework, delivered June 2026" is correct</li>
        <li>Net amount and currency. Specify USD, EUR, GBP, or whatever currency was agreed. If quoting in a foreign currency, your client may convert to KES for their VAT return</li>
        <li>No Kenyan VAT line: you are not charging it</li>
        <li>The reverse charge and non-resident note (the wording from Section 4)</li>
        <li>Your bank details or payment instructions: IBAN for SEPA, SWIFT/BIC for international wire</li>
      </ul>
      <p>Note on currency: there is no legal requirement to denominate your invoice in KES as a foreign supplier. Invoice in your preferred currency. Your client's accountant handles the conversion for their records.</p>
      <aside style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:24px 0;border-radius:6px;">
        <p style="margin:0;"><strong>Invoicemonk pre-fills KRA PIN, the non-resident reverse charge note, and the Cap 476 reference automatically.</strong> Pick "Kenya" as the client country and the right wording appears on the invoice. <a href="/invoicing">Try the free invoice generator</a>.</p>
      </aside>

      <h2>If you are a Kenyan freelancer billing international clients</h2>
      <p data-answer="true">If you are a Kenyan freelancer using eTIMS for domestic clients but billing clients outside Kenya, those invoices fall outside eTIMS scope only in terms of VAT charged: exports of services are zero-rated for VAT purposes in Kenya. You charge 0% VAT, not 16%. Your eTIMS invoice should reflect the 0% rate with an export notation.</p>
      <p>You are still required to issue the invoice through eTIMS even for export transactions; the system records the zero-rated supply for your VAT return. What changes is the VAT rate, not the platform.</p>
      <p>Your foreign client does not access or interact with eTIMS. They receive a standard invoice from you (a PDF export from your eTIMS-integrated software or an Invoicemonk invoice) and handle their own VAT in their country. For a full breakdown of eTIMS registration and the four access channels, see our <a href="/en/blog/kenya-etims-small-business-guide">eTIMS Kenya guide</a> and the related <a href="/en/blog/kra-invoice-requirements-kenya">KRA invoice requirements</a> overview.</p>

      <h2>The most common mistakes foreign freelancers make when billing Kenyan clients</h2>
      <ol>
        <li><strong>Assuming eTIMS applies to them.</strong> eTIMS is mandatory for businesses operating in Kenya. Foreign freelancers without a Kenyan establishment or KRA PIN are not within scope. Your invoice does not need to be issued through eTIMS.</li>
        <li><strong>Not including the client's KRA PIN.</strong> The KRA PIN is essential for the client's accountant to process the reverse charge and withholding tax in their iTax records. Always ask for it before issuing your first invoice.</li>
        <li><strong>Not accounting for withholding tax in your pricing.</strong> The 20% non-resident WHT is deducted by the client from your payment. If you invoice KES 100,000, you receive KES 80,000. Factor this into your pricing or discuss it explicitly with the client before agreeing a rate.</li>
        <li><strong>Issuing the invoice in KES without knowing the exchange rate.</strong> If you agree to bill in a currency other than your own, make sure the exchange rate calculation is clear and agreed in advance. Currency fluctuations between invoice date and payment date can significantly affect what you actually receive.</li>
        <li><strong>Writing "VAT: 0%" without an explanation.</strong> Zero-rated and reverse charge are different treatments. Include the non-resident reverse charge wording from Section 4 so your client's accountant knows exactly how to process it.</li>
      </ol>

      <h2>Quick-reference checklist</h2>
      <p>Foreign freelancer billing a Kenyan business client checklist:</p>
      <ul>
        <li>Your legal name, address, country of residence, home country tax ID</li>
        <li>Client's name, address, and KRA PIN (11-character alphanumeric)</li>
        <li>Sequential invoice number</li>
        <li>Date of issue and date of service</li>
        <li>Specific service description</li>
        <li>Net amount and currency: no Kenyan VAT</li>
        <li>Non-resident reverse charge note: "No Kenyan VAT charged. Reverse charge applies under Kenya's VAT Act, Cap 476."</li>
        <li>Bank details for payment</li>
        <li>Note: 20% withholding tax will be deducted by client at source</li>
      </ul>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_kenya_foreign_freelancer" target="_blank" rel="noopener">Create your first Kenyan-compliant invoice free, </a>.</strong> Invoicemonk generates all required fields, including the reverse charge notation and the KRA PIN field.</p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">For how eTIMS works for Kenyan businesses, read our full <a href="/en/blog/kenya-etims-small-business-guide">eTIMS Kenya guide</a> and the <a href="/en/blog/kra-invoice-requirements-kenya">KRA invoice requirements</a> overview. Invoicing across borders elsewhere? See the pillar guides on <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements</a>, <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and reverse charge</a>, and <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering</a>.</p>
    `,
  },
  // ═══════════════════════════════════════════════════
  // PHILIPPINES — BIR invoice requirements for freelancers (post-EOPT, e-invoicing 2026)
  // ═══════════════════════════════════════════════════
  {
    slug: 'bir-invoice-requirements-freelancers-philippines',
    title: 'BIR invoice requirements for freelancers in the Philippines (2026)',
    excerpt: 'Official Receipts are out. Sales Invoices are in. Here is what every Filipino freelancer needs to know about BIR invoicing rules, TIN, VAT, and the 2026 e-invoicing deadline.',
    category: 'Tax and Compliance',
    tags: ['BIR invoice requirements freelancer Philippines', 'Philippines freelancer invoice 2026', 'Official Receipt vs Sales Invoice Philippines', 'TIN number invoice Philippines', 'EOPT Act invoice changes Philippines', 'BIR VAT invoice', '8% flat tax freelancer Philippines', 'Philippines e-invoicing mandate 2026', 'non-VAT invoice Philippines freelancer'],
    author: defaultAuthor,
    date: '2026-05-07',
    dateModified: '2026-05-07',
    lastAudited: '2026-05-07',
    readTime: '12 min read',
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Filipino freelancer issuing a BIR-compliant Sales Invoice with TIN and VAT status statement',
    pillarContent: false,
    clusterType: 'cluster',
    targetProduct: '/compliance',
    priority: 'P1',
    macroContext: 'Post-EOPT BIR invoicing rules for Filipino freelancers, the Sales Invoice replacing the Official Receipt, the PHP 3M VAT threshold, the 8% flat tax option, and the BIR e-invoicing mandate extension to 31 December 2026.',
    semanticKeywords: [
      'BIR invoice requirements freelancer Philippines',
      'Philippines freelancer invoice requirements 2025',
      'Official Receipt vs Sales Invoice Philippines',
      'TIN number invoice Philippines',
      'EOPT Act invoice changes Philippines',
      'BIR VAT invoice mandatory fields',
      '8% flat tax freelancer Philippines',
      'Philippines e-invoicing mandate 2026',
      'non-VAT invoice Philippines freelancer',
      'foreign freelancer billing Philippines client',
    ],
    entityMentions: [
      { name: 'Bureau of Internal Revenue (BIR)', type: 'GovernmentOrganization', url: 'https://www.bir.gov.ph' },
      { name: 'Ease of Paying Taxes Act (Republic Act 11976)', type: 'Legislation' },
      { name: 'Revenue Regulation No. 7-2024', type: 'Legislation' },
      { name: 'Revenue Regulation No. 11-2024', type: 'Legislation' },
      { name: 'Revenue Regulation No. 11-2025', type: 'Legislation' },
      { name: 'Revenue Regulation No. 26-2025', type: 'Legislation' },
      { name: 'Electronic Invoicing System (EIS)', type: 'GovernmentService' },
      { name: 'Taxpayer Identification Number (TIN)', type: 'Thing' },
      { name: 'Authority to Print (ATP)', type: 'Thing' },
      { name: 'BIR Form 2303 (Certificate of Registration)', type: 'Thing' },
    ],
    relatedTools: [
      { label: 'Free invoice generator', url: '/invoicing', description: 'Create BIR-compliant Sales Invoices with TIN and VAT status statement.' },
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance, including the Philippines.' },
    ],
    faq: [
      {
        question: 'What replaced the Official Receipt in the Philippines for freelancers?',
        answer: 'Under the Ease of Paying Taxes Act (Republic Act 11976), which took effect 22 January 2024, the Sales Invoice replaced the Official Receipt as the primary tax document for proving sales and services in the Philippines. Since 27 April 2024, Official Receipts are classified as supplementary documents only and cannot be used to claim input VAT. Filipino freelancers must now issue Sales Invoices (also called Service Invoices) as their primary billing document. Unused Official Receipts can still be used as supplementary documents until consumed, or converted to invoices by crossing out "Official Receipt" and stamping "Invoice" in its place.',
      },
      {
        question: 'What must a BIR-compliant freelance invoice include in the Philippines?',
        answer: 'A BIR-compliant Sales Invoice in the Philippines must include: the label "Invoice" or "Service Invoice" prominently displayed; the freelancer\'s registered business name, address, and full 12-digit TIN including branch code; a statement of VAT or Non-VAT registration status; the client\'s registered name and TIN (for transactions above PHP 1,000); the date of transaction; a unique sequential invoice number registered with the BIR; a specific description of services with quantity and unit price; and the total amount with applicable VAT breakdown (12% if VAT-registered) or the phrase "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" if non-VAT registered. These requirements come from Revenue Regulation No. 7-2024, implementing the EOPT Act.',
      },
      {
        question: 'Do Filipino freelancers need to charge VAT?',
        answer: 'Filipino freelancers are required to register for VAT and charge 12% VAT only if their annual gross sales or receipts exceed PHP 3,000,000 (approximately USD 52,000). Below this threshold, freelancers are non-VAT registered and do not charge VAT. They may choose to pay income tax under the graduated rate (0%-35%) or the simpler 8% flat tax on gross receipts above PHP 250,000, eliminating the need to file a separate 3% percentage tax. For services provided to international clients where payment is received in foreign currency, the transaction is zero-rated at 0% VAT regardless of the freelancer\'s VAT registration status.',
      },
      {
        question: 'Does the BIR e-invoicing mandate apply to Filipino freelancers?',
        answer: 'The BIR\'s mandatory structured e-invoicing requirement under Revenue Regulation No. 11-2025 primarily affects Large Taxpayers, e-commerce businesses, exporters with tax incentives, and users of Computerised Accounting Systems (CAS). Most solo freelancers classified as micro-taxpayers are currently exempt from the structured e-invoicing obligation. The original March 2026 deadline for in-scope taxpayers was extended to 31 December 2026 under Revenue Regulation No. 26-2025. Freelancers should check their BIR Certificate of Registration (Form 2303) to confirm their classification and monitor BIR announcements as broader rollout timelines are established.',
      },
      {
        question: 'Can a Filipino freelancer use an Official Receipt as an invoice in 2026?',
        answer: 'No, not as a primary tax document. Since 27 April 2024, under the Ease of Paying Taxes Act, Official Receipts are classified as supplementary documents only. They cannot be used to substantiate a sale or support an input VAT claim by the buyer. Filipino freelancers must issue Sales Invoices (or Service Invoices) as their primary billing document. Unused Official Receipts may be converted to invoices by crossing out "Official Receipt" and stamping "Invoice" in their place. Any Official Receipt still used as a supplementary payment receipt must be stamped with "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX."',
      },
    ],
    content: `
      <p>If you are a Filipino freelancer, you have probably been issuing Official Receipts to your clients for years. Then someone told you the rules changed. Now you are not sure whether your Official Receipt is still valid, whether you should be issuing a Sales Invoice instead, and what your clients can actually use for input VAT.</p>
      <p data-answer="true">This guide answers all of that. The Sales Invoice is now the primary tax document under the Ease of Paying Taxes Act. The Official Receipt is supplementary only. Below: the mandatory fields under BIR Revenue Regulation No. 7-2024, the PHP 3 million VAT threshold, the 8% flat tax option, and the e-invoicing deadline extended to 31 December 2026.</p>

      <h2>The Official Receipt is no longer king: what the EOPT Act changed</h2>
      <p data-answer="true">The Ease of Paying Taxes Act (Republic Act 11976), in force since 22 January 2024, made the Sales Invoice the primary document for proving a sale of goods or services, including freelance work. The Official Receipt has been demoted to a supplementary document and cannot be used to claim input VAT.</p>
      <p>What this means in practice:</p>
      <ul>
        <li><strong>Sales Invoice is the primary document.</strong> It is what your client needs to claim input VAT. It is the basis for your output VAT liability. It is the document the BIR looks at in an audit.</li>
        <li><strong>Official Receipt is supplementary only.</strong> It proves payment was received, but it cannot be used to claim input VAT. Since 27 April 2024, any Official Receipt used as a primary tax document must be stamped "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX."</li>
        <li><strong>If you have unused Official Receipts:</strong> you do not need to throw them away. Under Revenue Regulation No. 11-2024, you can convert them to invoices by crossing out the words "Official Receipt" and stamping "Invoice" or "Service Invoice" in their place. They remain valid until fully consumed.</li>
      </ul>
      <p>The terminology changed too. BIR no longer uses "Official Receipt" and "Sales Invoice" interchangeably the way it once did. Under the new framework, every service transaction, even freelance work, requires a Sales Invoice as the primary document. The Official Receipt becomes an optional acknowledgement of payment on top of that.</p>
      <p>So what exactly needs to go on your Sales Invoice?</p>

      <h2>The mandatory fields: what every BIR-compliant freelance invoice must include</h2>
      <p>Under Revenue Regulation No. 7-2024 (the implementing regulations for the EOPT Act), a BIR-compliant Sales Invoice must include:</p>
      <ul>
        <li><strong>The word "Invoice" prominently displayed.</strong> The document must be clearly labelled as a Sales Invoice or Service Invoice. "Official Receipt" alone is no longer valid as a primary document label.</li>
        <li><strong>Your registered business name and address.</strong> The name on your BIR Certificate of Registration (Form 2303). For sole proprietors, this is typically your personal name followed by your trading name if any.</li>
        <li><strong>Your Taxpayer Identification Number (TIN) with 4-digit branch code.</strong> Your TIN is assigned by the BIR when you register. The format is 12 digits: 9 TIN digits plus 3 branch code digits (for example, 123-456-789-000). Always include the full number; the branch code is required.</li>
        <li><strong>A statement of your VAT or Non-VAT registration status.</strong> VAT-registered businesses must include their VAT registration status on the invoice. Non-VAT businesses must include the phrase "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" in bold on the face of the invoice.</li>
        <li><strong>Your client's registered business name and TIN.</strong> Required for B2B transactions above PHP 1,000. For B2C transactions, the buyer's details are not mandatory but are recommended for amounts above PHP 500.</li>
        <li><strong>Date of transaction.</strong></li>
        <li><strong>A unique, sequential invoice serial number.</strong> Must follow an unbroken sequence. The BIR requires you to register your invoice series through an Authority to Print (ATP) if using manually printed invoices, or through your accounting software if using a computerised system.</li>
        <li><strong>A specific description of goods or services.</strong> Quantity, unit of measure, and unit price where applicable. "Freelance services" is too vague. "Brand identity design - logo, colour palette, and style guide, delivered June 2026" is correct.</li>
        <li><strong>The amount of the sale, net of VAT or inclusive of VAT.</strong> Shown separately: taxable sales, VAT-exempt sales, zero-rated sales, and VAT amount, as applicable to your registration status.</li>
        <li><strong>The total amount payable.</strong></li>
      </ul>
      <aside style="border-left:4px solid #0F766E;padding:12px 16px;background:#f0fdfa;margin:24px 0;border-radius:6px;">
        <p style="margin:0;"><strong>Invoicemonk generates BIR-compliant Sales Invoices with all of these fields automatically</strong>, including TIN formatting, the VAT status statement, and sequential numbering. <a href="/invoicing">Try the free invoice generator</a>.</p>
      </aside>

      <h2>Do you need to charge VAT? The PHP 3 million threshold</h2>
      <p data-answer="true">VAT registration in the Philippines is mandatory when your annual gross sales or receipts exceed PHP 3,000,000 (approximately USD 52,000). Below this threshold, you are not required to register for VAT.</p>
      <p>If you are below the PHP 3 million threshold, you have two options for income tax:</p>
      <ul>
        <li><strong>Graduated income tax rates (0% to 35%):</strong> you pay based on income brackets, and you can deduct allowable business expenses.</li>
        <li><strong>8% flat tax on gross receipts:</strong> instead of income tax plus percentage tax, you pay a flat 8% on everything you earn above PHP 250,000. This option eliminates the need to file percentage tax (3%) separately. It is simpler for most freelancers with limited deductible expenses.</li>
      </ul>
      <p>You choose your tax option by filing BIR Form 1701Q on your first quarterly return of the year.</p>
      <p>If you are below the VAT threshold, your invoice:</p>
      <ul>
        <li>Does not include a VAT line</li>
        <li>Must include the phrase "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" in bold</li>
        <li>Is a Non-VAT Invoice under BIR classification</li>
      </ul>
      <p>If you exceed the PHP 3 million threshold, you must register for VAT, charge 12% VAT on domestic services, file monthly VAT returns (BIR Form 2550M), and issue VAT Invoices. You can also claim input VAT on your business expenses.</p>
      <p><strong>Zero-rated for international clients:</strong> if you provide services to clients outside the Philippines and the payment is received in foreign currency (inward remittance), the transaction is zero-rated for VAT at 0%. Your invoice shows 0% VAT, not 12%. This is the most important VAT rule for Filipino freelancers with international clients.</p>

      <h2>The Official Receipt question: answered once and for all</h2>
      <h3>Can I still use my old Official Receipts?</h3>
      <p data-answer="true">Yes, but only as supplementary documents. They must be stamped with "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX." You can also convert them to invoices by crossing out "Official Receipt" and stamping "Invoice" in its place.</p>

      <h3>Can my client claim input VAT from an Official Receipt?</h3>
      <p data-answer="true">No, not from an Official Receipt issued after 27 April 2024. Only a Sales Invoice (or a converted OR stamped as Invoice) is valid for input VAT claims from that date forward.</p>

      <h3>Do I need a new Authority to Print (ATP)?</h3>
      <p data-answer="true">If you are printing new invoice booklets, yes. You need a new ATP from the BIR using Form 1906. If you are using accounting software, the software must be registered with the BIR for it to generate valid invoices.</p>

      <h3>Do I need to submit my unused OR inventory to the BIR?</h3>
      <p data-answer="true">Yes. You should have submitted an inventory list of unused Official Receipts to your Revenue District Office (RDO) when the rule changed. If you have not done this yet, consult your RDO directly.</p>

      <h2>The BIR e-invoicing mandate: what freelancers need to know before December 2026</h2>
      <p data-answer="true">The BIR introduced mandatory structured e-invoicing under Revenue Regulation No. 11-2025. The system is called the Electronic Invoicing System (EIS) and requires eligible taxpayers to issue invoices in a structured JSON format transmitted directly to the BIR in near-real time. The original March 2026 deadline was extended to 31 December 2026 under Revenue Regulation No. 26-2025.</p>
      <p>Who is affected right now:</p>
      <ul>
        <li>Large Taxpayers (as classified under the EOPT Act)</li>
        <li>E-commerce and internet transaction businesses</li>
        <li>Users of Computerised Accounting Systems (CAS) or invoicing software</li>
        <li>Exporters with tax incentives under Section 304(D)</li>
      </ul>
      <p><strong>Does this affect most freelancers?</strong> Not directly, yet. Most solo freelancers are micro-taxpayers and are currently exempt from the structured e-invoicing obligation. However, freelancers using CAS or invoicing software may be in scope depending on their classification. Check your BIR Certificate of Registration (Form 2303) to see how you are classified.</p>
      <p><strong>What to watch:</strong> the BIR is building out the infrastructure for broader e-invoicing adoption. Freelancers should choose invoicing tools that are BIR-compatible now, rather than scrambling to switch later.</p>

      <h2>For international freelancers billing Filipino clients</h2>
      <p data-answer="true">If you are based outside the Philippines and billing a Filipino business client, BIR registration and the Philippine invoicing rules do not directly apply to you. You are a non-resident supplier providing cross-border services.</p>
      <p>What your Filipino client needs from your invoice:</p>
      <ul>
        <li>Your full legal name, business name, and country of residence</li>
        <li>Your home country tax identification number</li>
        <li>Their full registered business name and TIN</li>
        <li>A sequential invoice number</li>
        <li>Date of issue and date of service</li>
        <li>A specific description of services provided</li>
        <li>The net amount in the agreed currency</li>
        <li>A note that no Philippine VAT is charged (the client may self-assess VAT under the reverse charge mechanism for imported services)</li>
      </ul>
      <p>Your Filipino client's accountant will handle the VAT treatment on their end. Your invoice does not need to be issued through the BIR's system. For the wider playbook on cross-border invoicing, see our <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT invoicing for freelancers</a> guide.</p>

      <h2>The most common BIR invoicing mistakes Filipino freelancers make</h2>
      <ol>
        <li><strong>Still issuing Official Receipts as the primary document.</strong> Since 27 April 2024, Official Receipts are supplementary only. Your client cannot claim input VAT from them. Switch to Sales Invoices immediately if you have not already.</li>
        <li><strong>Missing the "NOT VALID FOR CLAIM OF INPUT TAX" phrase on Non-VAT invoices.</strong> This phrase is mandatory on every invoice issued by a non-VAT registered freelancer. Without it, the invoice does not clearly communicate its tax status to the client's accountant.</li>
        <li><strong>Not including the full TIN with branch code.</strong> The TIN alone (9 digits) is not enough. Include the 3-digit branch code to make the full 12-digit number (for example, 123-456-789-000). Omitting the branch code is a common compliance gap.</li>
        <li><strong>Using vague service descriptions.</strong> "Professional services" or "freelance work" is not sufficient under BIR rules. Describe specifically what was delivered and when.</li>
        <li><strong>Not registering invoice series with the BIR before use.</strong> If you use printed invoice booklets, they must have an Authority to Print (ATP) from the BIR. Invoices without a valid ATP are not legally recognised as tax documents.</li>
      </ol>

      <h2>Quick-reference checklist</h2>
      <p>Filipino freelancer invoice checklist (2026):</p>
      <ul>
        <li>Document label: "Service Invoice" or "Sales Invoice" (not "Official Receipt")</li>
        <li>Your registered name, address, and full TIN (including branch code)</li>
        <li>Client's registered name and TIN (for transactions above PHP 1,000)</li>
        <li>Sequential invoice number (registered with BIR via ATP or approved software)</li>
        <li>Date of transaction</li>
        <li>Specific description of services, quantity, unit price</li>
        <li>VAT breakdown (if VAT-registered at 12%) OR "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" (if non-VAT)</li>
        <li>Total amount payable</li>
        <li>Zero-rated notation (0% VAT) for services billed to international clients in foreign currency</li>
      </ul>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_philippines_freelancer" target="_blank" rel="noopener">Create your first BIR-compliant invoice free, </a>.</strong> Invoicemonk generates Sales Invoices with TIN formatting, VAT status statements, and sequential numbering automatically.</p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">Billing clients outside the Philippines? Read our guide to <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT invoicing for freelancers</a>, plus our pillar on <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements</a>, our deep-dive on <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering</a>, and how to <a href="/en/blog/how-to-issue-credit-note-freelancer">issue a credit note</a>.</p>
    `,
  },
  // ═══════════════════════════════════════════════════
  // INVOICEMONK VS WAVE — Comparison for international freelancers
  // ═══════════════════════════════════════════════════
  {
    slug: 'invoicemonk-vs-wave',
    title: 'InvoiceMonk vs Wave: which is better for international freelancers? (2026)',
    excerpt: 'Wave is great for North American freelancers. But if you invoice EU clients, need VAT compliance, or bill across borders, here is why InvoiceMonk is the better fit.',
    category: 'Comparisons',
    tags: ['Wave', 'Comparison', 'VAT', 'International', 'Freelancers', 'Invoicing'],
    author: defaultAuthor,
    date: '2026-05-07',
    dateModified: '2026-05-07',
    readTime: '12 min read',
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'InvoiceMonk vs Wave comparison for international freelancers',
    targetProduct: '/invoicing',
    priority: 'P1',
    semanticKeywords: ['Wave alternative', 'InvoiceMonk vs Wave', 'EU VAT invoicing', 'international freelancer invoicing', 'cross-border invoicing', 'reverse charge'],
    macroContext: 'Honest comparison of Wave and InvoiceMonk for freelancers who invoice cross-border, with a focus on EU VAT compliance, sequential numbering, and payment-processing geography.',
    faq: [
      {
        question: 'What is the main difference between InvoiceMonk and Wave?',
        answer: 'Wave is a free accounting and invoicing tool built for freelancers and small businesses in the United States and Canada. InvoiceMonk is a compliance-first invoicing platform built for cross-border freelancers, with EU VAT handling, sequential numbering enforcement, and country-specific invoice fields baked in.',
      },
      {
        question: 'Does Wave support EU VAT invoicing?',
        answer: 'Wave lets you add a manual VAT line to an invoice, but it does not handle reverse charge wording, VIES VAT-number checks, or country-specific EU invoice requirements automatically. For B2B invoices to EU clients, you have to remember the rules yourself.',
      },
      {
        question: 'Can I use Wave outside the US and Canada?',
        answer: 'You can sign up from other countries and create invoices, but Wave Payments (card and bank processing) only works for businesses based in the US and Canada. Outside those two countries you lose the integrated payment side of the product.',
      },
      {
        question: 'Is InvoiceMonk free?',
        answer: 'InvoiceMonk has a free Starter plan that covers unlimited invoices, clients, and basic VAT handling. The paid plan adds advanced compliance features, multi-currency reporting, and team access.',
      },
    ],
    relatedTools: [
      { label: 'EU VAT invoice requirements for freelancers', url: '/en/blog/eu-vat-invoice-requirements-freelancers', description: 'Pillar guide to VAT-compliant invoices in the EU.' },
      { label: 'Sequential invoice numbering and gap risk', url: '/en/blog/sequential-invoice-numbering-eu', description: 'Why missing invoice numbers can trigger an audit.' },
      { label: 'Cross-border VAT and reverse charge', url: '/en/blog/cross-border-vat-invoicing-freelancers-eu', description: 'How the reverse charge mechanism works in practice.' },
    ],
    content: `
      <p>Wave is one of the most loved free accounting tools for freelancers in the US and Canada. It is genuinely good at what it was built to do. But the moment you start invoicing clients in Germany, France, or the Netherlands, you discover that Wave was never designed for cross-border work. This comparison is for the freelancer whose client list has crossed an ocean.</p>

      <h2>What both tools are, and who they were built for</h2>
      <p>Wave was founded in Toronto in 2010 and acquired by H&amp;R Block in 2019. It now serves around two million small businesses, almost all of them in the US and Canada. The free Starter plan covers unlimited invoicing, basic accounting, and receipt capture. The Pro plan is $19 per month and adds bank-feed automation, recurring billing, and lower processing fees on Wave Payments.</p>
      <p>InvoiceMonk is younger and narrower. It is a compliance-first invoicing platform built for freelancers and small agencies who invoice across borders. Instead of trying to be a full accounting suite, it focuses on getting the invoice itself right: the right VAT wording, the right sequential number, the right country-specific fields, and a clean audit trail when a tax office asks for one.</p>

      <h3>What is the main difference between InvoiceMonk and Wave?</h3>
      <p data-answer="true">Wave is a free accounting and invoicing tool built for freelancers and small businesses in the United States and Canada. InvoiceMonk is a compliance-first invoicing platform built for cross-border freelancers, with EU VAT handling, sequential numbering enforcement, and country-specific invoice fields baked in. If your clients are in North America, Wave is hard to beat on price. If your clients are in the EU, InvoiceMonk is built for the rules you actually have to follow.</p>

      <h2>Five areas where Wave falls short for international freelancers</h2>
      <p>These are the gaps that show up once you stop invoicing only US clients. None of them are dealbreakers for a freelancer working entirely in Toronto or Austin. All of them become daily friction the moment you invoice a Berlin agency.</p>

      <h3>1. VAT handling is manual, not contextual</h3>
      <p>Wave lets you create a tax called "VAT" and apply it to a line item. That is the extent of its VAT support. It does not know that an invoice from a Bulgarian freelancer to a German company should carry zero VAT and the wording <em>"Reverse charge - Article 196, EU VAT Directive 2006/112/EC"</em>. You type that wording into the notes field yourself, every time, and you remember the rule yourself.</p>
      <p>InvoiceMonk is built to detect the cross-border B2B scenario from the buyer and seller VAT numbers and prompt you with the correct reverse charge wording before you send the invoice. The freelancer does not need to memorize Article 196.</p>

      <h3>2. Sequential numbering is not enforced</h3>
      <p>In Wave, invoice numbers are a free text field. You can skip from INV-014 to INV-020 and the software will not warn you. EU tax authorities treat gaps in your invoice sequence as a red flag during a VAT audit, because the simplest interpretation of a missing number is a deleted invoice.</p>
      <p>InvoiceMonk treats the sequence as a compliance feature, not a label. Cancelled invoices stay in the sequence as voided records, and the system prompts you when a number is about to be skipped. Read more on <a href="/en/blog/sequential-invoice-numbering-eu">sequential invoice numbering and why gaps are dangerous</a>.</p>

      <h3>3. Payment processing is geographically limited</h3>
      <p>Wave Payments, the integrated card and bank processor, only works for businesses based in the US and Canada. If you sign up from Spain, Bulgaria, or Romania, the "Accept Payments" button is greyed out. You can still send invoices, but the "click to pay" experience that Wave is known for is not available to you.</p>

      <h3>4. Country-specific invoice fields are missing</h3>
      <p>An invoice to a French client should reference SIRET. A Spanish invoice should reference NIF. A Dutch invoice needs the BTW number formatted as NL plus nine digits plus B plus two digits. Wave does not have these fields. You add them as free text, which means a typo is invisible to the software.</p>
      <p>InvoiceMonk ships country-specific field sets that change based on the buyer's country, so the right tax-ID label appears on the invoice and the format is validated.</p>

      <h3>5. No VIES VAT-number validation</h3>
      <p>VIES is the EU's official VAT-number checker. If you reverse charge an invoice to a client whose VAT number is invalid on the day you issue, you owe the VAT yourself. Wave does not check VIES. You open vies.ec.europa.eu in another tab, paste the number, screenshot the result, and save it next to the invoice yourself.</p>
      <p>InvoiceMonk is built to check the buyer VAT number against VIES at issue time and store the validation receipt with the invoice, so the audit trail is automatic.</p>

      <h2>Where Wave is genuinely better</h2>
      <p>Honesty matters here, because Wave is a strong product and pretending otherwise would not help anyone. Three areas where Wave clearly wins:</p>
      <ul>
        <li><strong>Free bookkeeping depth.</strong> Wave's free plan includes real double-entry accounting, bank reconciliation, and a chart of accounts. Most low-cost invoicing tools stop at sending invoices.</li>
        <li><strong>Reporting and reconciliation.</strong> Profit and loss, balance sheet, sales tax report, cash flow. They are all there, all free, and all mature after fifteen years of refinement.</li>
        <li><strong>Ecosystem and longevity.</strong> Wave has been around since 2010, integrates with H&amp;R Block at tax time in the US, and has a large community of accountants who already know it. That counts.</li>
      </ul>
      <p>If you are a US-based freelancer with US clients and you want one free tool that does invoicing and bookkeeping in one place, Wave is hard to argue with.</p>

      <h2>The decision framework</h2>
      <p>Two short lists. Pick the one that sounds like your week.</p>

      <h3>Choose Wave if</h3>
      <ul>
        <li>You and your clients are based in the US or Canada.</li>
        <li>You want bookkeeping and invoicing in one free tool.</li>
        <li>You file taxes domestically and never deal with VAT or reverse charge.</li>
        <li>You want Wave Payments to handle card processing for you.</li>
      </ul>

      <h3>Choose InvoiceMonk if</h3>
      <ul>
        <li>You invoice clients in the EU, UK, or other VAT jurisdictions.</li>
        <li>You need sequential numbering enforced and audit-ready out of the box.</li>
        <li>You bill in more than one currency and want consistent records.</li>
        <li>You would rather have the software remember the country-specific rules than memorize them yourself.</li>
      </ul>

      <p>Rico is a Bulgarian freelance developer who invoices three German agencies and a Dutch design studio. He used Wave for two years and loved how simple it was. Then his accountant asked him to produce his 2024 invoice register for a routine VAT review. Three invoice numbers were missing, because Rico had deleted draft invoices in Wave and the sequence had quietly skipped. The accountant had to write a memo explaining each gap. Rico moved to InvoiceMonk the same week, mostly so the sequence would simply never break again, and renewed his subscription a year later because nothing had broken since.</p>

      <h2>Feature-by-feature comparison</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Wave</th>
            <th>InvoiceMonk</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Free plan</td><td>No (Pro from $15/mo)</td><td>Yes</td></tr>
          <tr><td>Paid plan starting price</td><td>$19 / month (Pro)</td><td>Coming soon</td></tr>
          <tr><td>Unlimited invoices</td><td>Yes</td><td>Yes</td></tr>
          <tr><td>EU VAT reverse charge wording</td><td>Manual notes field</td><td>Prompted automatically</td></tr>
          <tr><td>Sequential numbering enforcement</td><td>Free text</td><td>Enforced, voids stay in sequence</td></tr>
          <tr><td>VIES VAT-number validation</td><td>Not available</td><td>Built in</td></tr>
          <tr><td>Country-specific invoice fields</td><td>Free text only</td><td>Country-aware field sets</td></tr>
          <tr><td>Multi-currency invoicing</td><td>Limited</td><td>Yes, with FX record</td></tr>
          <tr><td>Payment processing geography</td><td>US and Canada only</td><td>Coming soon</td></tr>
          <tr><td>Double-entry bookkeeping</td><td>Yes, free</td><td>Focused on invoicing</td></tr>
          <tr><td>Bank reconciliation</td><td>Yes (Pro)</td><td>Not the focus</td></tr>
          <tr><td>Audit-ready invoice register</td><td>Manual export</td><td>Built in</td></tr>
        </tbody>
      </table>

      <h3>Does Wave support EU VAT invoicing?</h3>
      <p data-answer="true">Wave lets you add a manual VAT line to an invoice, but it does not handle reverse charge wording, VIES VAT-number checks, or country-specific EU invoice requirements automatically. For B2B invoices to EU clients you have to remember the rules yourself, type the legal wording into the notes field, and validate the buyer's VAT number outside the product.</p>

      <h3>Can I use Wave outside the US and Canada?</h3>
      <p data-answer="true">You can sign up from other countries and create invoices in Wave, but Wave Payments (the integrated card and bank processor) only works for businesses based in the US and Canada. Outside those two countries you can still send PDF invoices, but you lose the "click to pay" experience and the automatic payment reconciliation that Wave is known for.</p>

      <h2>The pricing reality for international freelancers</h2>
      <p>"Wave is free" is true, and it is also incomplete. Free invoicing software is only cheap if every invoice you send is compliant on the first try. For a freelancer invoicing only US clients, that is usually the case. For a freelancer invoicing EU clients on Wave, the real cost shows up in three places:</p>
      <ul>
        <li>Time spent looking up the right reverse charge wording for each country.</li>
        <li>Invoices rejected by client AP teams because the buyer VAT number, SIRET, or NIF is missing or wrong.</li>
        <li>Hours spent explaining a numbering gap to your accountant or, worse, to a tax inspector.</li>
      </ul>
      <p>Compared against an hour of accountant time at typical EU rates, the gap between "free Wave" and a paid compliance-first tool closes quickly.</p>

      <h3>Is InvoiceMonk free?</h3>
      <p data-answer="true">Yes. InvoiceMonk has a free Starter plan that covers unlimited invoices, unlimited clients, and the basic VAT handling most freelancers need. A paid plan adds advanced compliance features, multi-currency reporting, and team access for agencies. You do not need a credit card to start.</p>

      <h2>Conclusion</h2>
      <p>Wave is the right tool for freelancers in the US and Canada who want free bookkeeping and invoicing in one place. InvoiceMonk is the right tool for freelancers who invoice across borders and need the rules of EU VAT, sequential numbering, and country-specific fields handled by the software, not by memory.</p>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_invoicemonk_vs_wave" target="_blank" rel="noopener">Create your first compliant cross-border invoice free, </a>.</strong></p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">If your clients are in the EU, start with our pillar guide to <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a>, or jump to a country: <a href="/en/blog/how-to-invoice-german-clients-freelancer">invoicing German clients</a>, <a href="/en/blog/dutch-invoice-requirements-freelancers">Dutch invoice requirements</a>, and <a href="/en/blog/french-invoice-requirements-freelancers">invoicing French clients</a>.</p>
    `,
  },

  // ═══════════════════════════════════════════════════
  // CAPSTONE — VAT INVOICE CHECKLIST BY COUNTRY (Week 11 hub)
  // ═══════════════════════════════════════════════════
  {
    slug: 'vat-invoice-checklist-by-country',
    title: 'VAT invoice checklist by country — the 2026 freelancer guide',
    excerpt: 'What must your invoice include when billing clients in Germany, France, Netherlands, Poland, Kenya, Philippines, and more? The complete country-by-country checklist.',
    category: 'Tax and Compliance',
    tags: [
      'VAT invoice checklist by country',
      'invoice requirements by country freelancer',
      'what must a VAT invoice include',
      'VAT invoice mandatory fields country list',
      'invoice compliance checklist EU freelancer',
      'cross-border invoice requirements freelancer',
      'VAT invoice requirements Europe Africa Asia',
      'compliant invoice checklist 2026',
      'EU invoice mandatory fields list',
      'reverse charge notation by country',
    ],
    author: defaultAuthor,
    date: '2026-05-07',
    dateModified: '2026-05-07',
    lastAudited: '2026-05-07',
    readTime: '14 min read',
    featuredImage: '/images/blog/e-invoicing-compliance-hero.jpg',
    featuredImageAlt: 'Country-by-country VAT-compliant invoice checklist for freelancers in 2026',
    clusterType: 'pillar',
    targetProduct: '/compliance',
    priority: 'P1',
    pillarContent: true,
    macroContext: 'Cross-market VAT compliance reference covering EU baseline (Article 226), country-specific mandatory fields for Germany, Netherlands, France, Poland, Bulgaria, Kenya, and the Philippines, reverse charge notation in local languages, sequential numbering enforcement, and the global e-invoicing rollout timeline.',
    semanticKeywords: [
      'VAT invoice checklist by country',
      'invoice requirements by country freelancer',
      'what must a VAT invoice include',
      'VAT invoice mandatory fields country list',
      'invoice compliance checklist EU freelancer',
      'cross-border invoice requirements freelancer',
      'VAT invoice requirements Europe Africa Asia',
      'compliant invoice checklist 2026',
      'EU invoice mandatory fields list',
      'reverse charge notation by country',
    ],
    entityMentions: [
      { name: 'EU VAT Directive 2006/112/EC', type: 'Legislation' },
      { name: 'Article 196 EU VAT Directive', type: 'Legislation' },
      { name: 'Article 226 EU VAT Directive', type: 'Legislation' },
      { name: 'VIES', type: 'GovernmentService', url: 'https://ec.europa.eu/taxation_customs/vies' },
      { name: 'Leistungsdatum' },
      { name: 'USt-IdNr.' },
      { name: 'Steuerschuldnerschaft des Leistungsempfängers' },
      { name: 'Kleinunternehmerregelung §19 UStG', type: 'Legislation' },
      { name: 'KVK' },
      { name: 'BTW-identificatienummer' },
      { name: 'OB-nummer' },
      { name: 'BSN' },
      { name: 'Kleineondernemersregeling (KOR)' },
      { name: 'BTW verlegd' },
      { name: 'SIRET' },
      { name: 'SIREN' },
      { name: 'Toubon Law', type: 'Legislation' },
      { name: 'Franchise en base de TVA' },
      { name: 'Autoliquidation' },
      { name: 'NIP' },
      { name: 'Biała Lista', type: 'GovernmentService', url: 'https://podatki.gov.pl' },
      { name: 'KSeF (Krajowy System e-Faktur)' },
      { name: 'Odwrotne obciążenie' },
      { name: 'KRA PIN' },
      { name: 'eTIMS' },
      { name: 'Kenya VAT Act, Cap 476', type: 'Legislation' },
      { name: 'BIR' },
      { name: 'Sales Invoice (Philippines)' },
      { name: 'Ease of Paying Taxes Act (RA 11976)', type: 'Legislation' },
      { name: 'EIS (Philippines)' },
      { name: 'ZUGFeRD' },
      { name: 'XRechnung' },
      { name: 'ViDA' },
    ],
    relatedTools: [
      { label: 'Compliance Hub', url: '/compliance', description: 'Country-by-country invoice compliance built into Invoicemonk.' },
      { label: 'Free invoice generator', url: '/invoicing', description: 'Generate compliant invoices with the right fields per country.' },
    ],
    faq: [
      {
        question: 'What must every EU VAT invoice include?',
        answer: 'Under EU VAT Directive 2006/112/EC, every VAT invoice issued to a business client in the EU must include: the supplier\'s full legal name, address, and VAT number; the client\'s full legal name, address, and VAT number; a unique sequential invoice number with no gaps; the date of issue; the date of supply; a specific description of services or goods delivered; the net amount per VAT rate; the VAT rate applied; the total VAT amount; and the total gross amount payable. For cross-border B2B invoices, the notation "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC" must replace the VAT line. Individual EU member states add requirements on top of this baseline — Germany requires a Leistungsdatum, France requires a SIRET number and late payment clause, and the Netherlands requires a KVK number.',
      },
      {
        question: 'What is the difference between VAT invoice requirements in Germany and France?',
        answer: 'Germany and France both follow the EU VAT Directive baseline but add distinct national requirements. Germany\'s most commonly missed field is the Leistungsdatum — the date of supply, which must be stated even when it matches the invoice date. Germany also requires either a Steuernummer or USt-IdNr. and uses "Steuerschuldnerschaft des Leistungsempfängers" for reverse charge notation. France requires a 14-digit SIRET number (not just the 9-digit SIREN), the client\'s SIRET number, an "EI" designation after the supplier\'s name for sole traders, and a mandatory late payment penalty clause (€40 indemnity). For freelancers under the VAT threshold, France requires the exact phrase "TVA non applicable, article 293 B du CGI" while Germany requires "Gemäß §19 UStG wird keine Umsatzsteuer berechnet." France also requires all mandatory fields in French under the Toubon Law.',
      },
      {
        question: 'What must a freelance invoice to a Kenyan client include?',
        answer: 'A freelance invoice to a Kenyan business client must include the freelancer\'s full legal name and home country tax ID, the client\'s KRA PIN (an 11-character alphanumeric identifier verified on kra.go.ke), a sequential invoice number, the date of issue and date of service, a specific description of services, the net amount in the agreed currency, and a note stating that no Kenyan VAT is charged under the reverse charge provisions of Kenya\'s VAT Act (Cap 476). For foreign freelancers, the Kenyan client will deduct 20% withholding tax from the payment before remitting — the freelancer invoices the full agreed amount and receives 80% unless a Double Taxation Agreement applies.',
      },
      {
        question: 'What changed about Philippine invoice requirements in 2024?',
        answer: 'Under the Ease of Paying Taxes Act (Republic Act 11976, effective January 2024), the Official Receipt was demoted from primary tax document to supplementary document in the Philippines. Since April 27, 2024, Filipino freelancers must issue Sales Invoices (or Service Invoices) as the primary billing document. Official Receipts can still be used as proof of payment but cannot be used by clients to claim input VAT. Every BIR-compliant Sales Invoice must include the label "Invoice" or "Service Invoice," the freelancer\'s full 12-digit TIN including branch code, the client\'s TIN for transactions above PHP 1,000, a sequential invoice number registered with the BIR, and the phrase "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" in bold if the freelancer is non-VAT registered.',
      },
      {
        question: 'What is the reverse charge invoice wording that works across all EU countries?',
        answer: 'The standard reverse charge notation accepted across all 27 EU member states for cross-border B2B service invoices is: "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC." This wording satisfies the EU VAT Directive requirement for a reverse charge notation (Article 226(11a)) in every member state. Some countries additionally require the notation in the local language: Germany uses "Steuerschuldnerschaft des Leistungsempfängers," the Netherlands uses "BTW verlegd," France uses "Autoliquidation — Article 283 du CGI," and Poland uses "Odwrotne obciążenie." Including both the English EU reference and the local language notation is recommended for invoices to clients in these countries.',
      },
    ],
    content: `
      <p>Every country has its own invoicing rules. Germany requires a Leistungsdatum. France requires a SIRET number and a specific exemption phrase. The Netherlands has two VAT numbers, and putting the wrong one on your invoice is a privacy risk. Poland now routes invoices through a government platform. Kenya deducts withholding tax before paying you. If you invoice clients across multiple countries, keeping track of all this is exhausting.</p>

      <p>This checklist is the reference you bookmark and return to. Every country, every key requirement, every country-specific field that trips people up, in one place.</p>

      <h2>The EU-wide baseline: what every invoice to an EU client must include</h2>
      <p data-answer="true">Every invoice to a VAT-registered EU business client must follow the EU VAT Directive (2006/112/EC) baseline: supplier and client legal names, addresses, and VAT numbers; a unique sequential invoice number with no gaps; date of issue and date of supply; a specific description of services; net amount per VAT rate; the VAT rate and amount; the total gross amount; and, for cross-border B2B, the reverse charge notation "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC."</p>

      <p>The full baseline checklist:</p>
      <ul>
        <li><strong>Supplier's full legal name and address.</strong></li>
        <li><strong>Supplier's VAT identification number.</strong> Format varies by country (DE + 9 digits for Germany, NL + 9 digits + B + 2 digits for the Netherlands, FR + 2 characters + 9 digits for France).</li>
        <li><strong>Client's full legal name and address.</strong></li>
        <li><strong>Client's VAT identification number.</strong> Verify via VIES at <a href="https://ec.europa.eu/taxation_customs/vies" target="_blank" rel="nofollow noopener">ec.europa.eu/taxation_customs/vies</a> before every new invoice.</li>
        <li><strong>A unique, sequential invoice number.</strong> No gaps; an unbroken chronological series.</li>
        <li><strong>Date of issue.</strong></li>
        <li><strong>Date of supply.</strong> The date the service was actually delivered, if different from the invoice date.</li>
        <li><strong>A specific description of services.</strong> Sufficient for a tax auditor to understand what was delivered without asking.</li>
        <li><strong>Net amount per VAT rate.</strong></li>
        <li><strong>VAT rate applied.</strong></li>
        <li><strong>Total VAT amount.</strong></li>
        <li><strong>Total gross amount payable.</strong></li>
        <li><strong>Cross-border B2B reverse charge notation:</strong> "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC."</li>
      </ul>

      <p><strong>The 15th of the month rule.</strong> For cross-border B2B supplies within the EU, you must issue invoices no later than the 15th of the month following the month of supply. Missing this deadline is a compliance failure even if the invoice content is correct.</p>

      <p>Every country in the EU adds its own requirements on top of this baseline. The sections below cover the most important country-specific additions. For the full pillar guide, see our <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a>.</p>

      <h2>Country-by-country checklist</h2>

      <h3>Germany</h3>
      <p><strong>Additional mandatory fields (on top of EU baseline):</strong></p>
      <ul>
        <li><strong>Leistungsdatum (date of supply).</strong> You must state it explicitly even when it matches the invoice date. If they are the same, use: "Leistungsdatum entspricht dem Rechnungsdatum."</li>
        <li><strong>Either your Steuernummer or USt-IdNr.</strong> For cross-border invoices, the USt-IdNr. is required.</li>
      </ul>
      <p><strong>Small business exemption:</strong> Kleinunternehmerregelung (§19 UStG). Threshold: €25,000 previous year / €100,000 current year. Phrase: "Gemäß §19 UStG wird keine Umsatzsteuer berechnet."</p>
      <p><strong>Cross-border reverse charge notation:</strong> "Steuerschuldnerschaft des Leistungsempfängers (§13b Abs. 5 UStG)" alongside the Article 196 EU reference.</p>
      <p><strong>Watch out:</strong> Never use "Gutschrift" to mean a correction invoice. Since 2013 it means self-billing. Use "Stornorechnung" or "Rechnungskorrektur" instead.</p>
      <p><strong>E-invoicing:</strong> ZUGFeRD/XRechnung mandatory for B2B from January 2027 (turnover above €800,000) and all businesses from January 2028.</p>
      <p><a href="/en/blog/how-to-invoice-german-clients-freelancer">Full Germany invoicing guide</a>.</p>

      <h3>Netherlands</h3>
      <p><strong>Additional mandatory fields:</strong></p>
      <ul>
        <li><strong>KVK number</strong> (8-digit Chamber of Commerce registration), for Dutch-registered businesses only.</li>
        <li><strong>BTW-identificatienummer (BTW-ID)</strong> in NL + 9 digits + B + 2 digits format. Never the OB-nummer.</li>
        <li><strong>Specific payment due date.</strong> Standard is 30 days.</li>
        <li><strong>Late payment terms.</strong> Recommended for B2B invoices.</li>
      </ul>
      <p><strong>Small business exemption:</strong> KOR (Kleineondernemersregeling). Threshold: €20,000 annual turnover. Phrase: "BTW vrijgesteld op grond van artikel 25 Wet op de omzetbelasting 1968."</p>
      <p><strong>Cross-border reverse charge notation:</strong> "BTW verlegd" alongside the Article 196 EU reference.</p>
      <p><strong>Watch out:</strong> Never put your OB-nummer on a client-facing invoice. It contains your personal BSN (citizen service number); a serious identity fraud risk. Only the BTW-ID belongs on invoices.</p>
      <p><strong>Invoicing deadline:</strong> No later than the 15th of the month following delivery.</p>
      <p><a href="/en/blog/dutch-invoice-requirements-freelancers">Full Netherlands invoicing guide</a>.</p>

      <h3>France</h3>
      <p>Now, across the Channel: France stacks the most country-specific requirements of any major EU market.</p>
      <p><strong>Additional mandatory fields:</strong></p>
      <ul>
        <li><strong>SIRET number</strong> (14 digits, not the 9-digit SIREN).</li>
        <li><strong>Client's SIRET number</strong>, required for B2B invoices.</li>
        <li><strong>EI designation:</strong> auto-entrepreneurs must add "EI" directly after their name since 2022.</li>
        <li><strong>Specific payment due date</strong> (not just "30 days").</li>
        <li><strong>Late payment penalty clause</strong>, mandatory for all B2B: "Indemnité forfaitaire de recouvrement: €40" plus a penalty rate (3x legal interest rate).</li>
        <li><strong>Toubon Law:</strong> all mandatory fields must appear in French for domestic transactions.</li>
      </ul>
      <p><strong>Small business exemption:</strong> Franchise en base de TVA. Threshold: €37,500 (services) / €41,250 upper limit. Phrase: "TVA non applicable, article 293 B du CGI."</p>
      <p><strong>Cross-border reverse charge notation:</strong> "Autoliquidation — Article 283 du CGI" alongside the Article 196 EU reference.</p>
      <p><strong>Watch out:</strong> Missing the franchise en base phrase, or writing "0% TVA" instead, is non-compliant even when no TVA is owed. The phrase must appear verbatim.</p>
      <p><strong>E-invoicing:</strong> Large businesses from September 1, 2026. All businesses including micro-enterprises from September 1, 2027.</p>
      <p><a href="/en/blog/french-invoice-requirements-freelancers">Full France invoicing guide</a>.</p>

      <h3>Poland</h3>
      <p><strong>Additional mandatory fields:</strong></p>
      <ul>
        <li><strong>NIP number</strong> (10-digit Polish tax ID); your own NIP if Polish-registered, your EU VAT number if not.</li>
        <li><strong>Client's NIP number</strong>, verified on Poland's Biała Lista (<a href="https://podatki.gov.pl" target="_blank" rel="nofollow noopener">podatki.gov.pl</a>) and on VIES.</li>
        <li><strong>Date of supply.</strong></li>
        <li><strong>PLN equivalent</strong> if invoicing in foreign currency.</li>
      </ul>
      <p><strong>Small business exemption:</strong> No VAT-threshold equivalent for most purposes; Polish VAT registration is required for most business activity.</p>
      <p><strong>Cross-border reverse charge notation:</strong> "Odwrotne obciążenie" alongside the Article 196 EU reference.</p>
      <p><strong>Watch out:</strong> Always verify the client's NIP on the Biała Lista, not just VIES. The Biała Lista confirms active status and registered bank accounts; VIES does not.</p>
      <p><strong>E-invoicing (KSeF):</strong> Mandatory for all VAT-registered Polish businesses from April 1, 2026. Foreign freelancers without a Polish establishment are not required to use KSeF.</p>
      <p><a href="/en/blog/invoicing-polish-clients-foreign-freelancer">Full Poland KSeF invoicing guide</a>.</p>

      <h3>Bulgaria</h3>
      <p>The EU baseline applies with no additional mandatory fields, but one thing matters more here than almost anywhere else.</p>
      <p><strong>Watch out:</strong> Sequential numbering enforcement is strict. Bulgarian tax authorities actively check for gaps during audits; a missing invoice number is treated as a potential unreported transaction. Maintain an unbroken sequence with meticulous care.</p>
      <p><strong>VAT rate:</strong> Standard rate 20%.</p>

      <h3>Kenya</h3>
      <p>Moving to East Africa: Kenya runs a real-time invoice clearance system (eTIMS) for resident businesses, and a separate set of rules for foreign suppliers.</p>
      <p><strong>For Kenyan-registered businesses:</strong></p>
      <ul>
        <li><strong>Seller's KRA PIN</strong>, mandatory for all Kenyan-registered businesses.</li>
        <li><strong>Buyer's KRA PIN</strong>, required for B2B invoices.</li>
        <li><strong>QR code</strong> on eTIMS-generated invoices.</li>
        <li><strong>eTIMS transmission:</strong> all Kenyan-registered businesses must issue invoices through the eTIMS platform.</li>
      </ul>
      <p><strong>For foreign freelancers billing Kenyan clients:</strong></p>
      <ul>
        <li>Your home country tax ID.</li>
        <li>The client's KRA PIN (11-character alphanumeric, e.g. P051234567A); verify on <a href="https://kra.go.ke" target="_blank" rel="nofollow noopener">kra.go.ke</a>.</li>
        <li>Reverse charge note: "No Kenyan VAT charged. Reverse charge applies under Kenya's VAT Act, Cap 476."</li>
      </ul>
      <p><strong>Withholding tax note:</strong> clients deduct 20% WHT at source on professional fees to non-residents. Invoice the full amount; receive 80%.</p>
      <p><strong>Watch out:</strong> eTIMS applies to Kenyan-registered businesses, not foreign freelancers. But foreign freelancers must still include the client's KRA PIN and reverse charge wording, or the client cannot process the invoice correctly.</p>
      <p><strong>VAT rate:</strong> Standard rate 16%. VAT registration threshold: KES 5 million annual turnover.</p>
      <p><a href="/en/blog/invoicing-kenyan-clients-foreign-freelancer">Full Kenya invoicing guide for foreign freelancers</a>.</p>

      <h3>Philippines</h3>
      <p>On the other side of the world: the Philippines reshaped its invoicing rules in 2024, and many freelancers are still using the old documents.</p>
      <p><strong>Additional mandatory fields:</strong></p>
      <ul>
        <li><strong>Document label:</strong> "Service Invoice" or "Sales Invoice", not "Official Receipt" (demoted to supplementary document since April 2024).</li>
        <li><strong>Your 12-digit TIN including branch code</strong> (e.g. 123-456-789-000).</li>
        <li><strong>Client's TIN</strong>, required for transactions above PHP 1,000.</li>
        <li><strong>Authority to Print (ATP) registration:</strong> manual invoice booklets must be BIR-registered.</li>
        <li><strong>"THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX"</strong> in bold on all Non-VAT invoices.</li>
      </ul>
      <p><strong>Small business exemption:</strong> Non-VAT registration below PHP 3,000,000 annual gross receipts. Option to use 8% flat tax on gross income above PHP 250,000 instead of graduated rates plus percentage tax.</p>
      <p><strong>For international clients:</strong> services paid in foreign currency are zero-rated (0% VAT). State the zero-rating clearly on the invoice.</p>
      <p><strong>Watch out:</strong> The switch from Official Receipt to Sales Invoice confused many freelancers. Any invoice labelled "Official Receipt" issued after April 27, 2024 is a supplementary document only; clients cannot use it to claim input VAT.</p>
      <p><strong>E-invoicing:</strong> Structured e-invoicing mandatory for Large Taxpayers and e-commerce businesses by December 31, 2026 (extended from March 2026). Most solo freelancers are currently exempt.</p>
      <p><a href="/en/blog/bir-invoice-requirements-freelancers-philippines">Full Philippines BIR invoicing guide</a>.</p>

      <h2>The universal fields: what every invoice everywhere needs</h2>
      <p data-answer="true">Regardless of where your client is located, every professional invoice must include your full legal name and business address, a unique sequential invoice number, the date of issue, the date of service, a specific description of what was delivered, the amount broken into net, tax, and gross, and your payment details (bank account, IBAN, SWIFT/BIC). These seven fields will not satisfy every jurisdiction's full compliance requirements, but an invoice missing any of them will be rejected by almost any client anywhere in the world.</p>
      <ul>
        <li>Your full legal name and business address.</li>
        <li>A sequential invoice number, unique and gap-free.</li>
        <li>Date of issue.</li>
        <li>Date of service delivered.</li>
        <li>A specific description of what was delivered.</li>
        <li>The amount: net, tax, and gross presented clearly.</li>
        <li>Your payment details: bank account, IBAN, SWIFT/BIC.</li>
      </ul>

      <h2>The three mistakes that get invoices rejected everywhere</h2>

      <h3>Mistake 1: Vague service descriptions</h3>
      <p data-answer="true">"Consulting," "Services," or "Project work" will be flagged by accountants in Germany, France, the Netherlands, Kenya, and the Philippines alike. Every country requires enough specificity for a tax auditor to understand the transaction without asking. Good: "UX design — homepage wireframes and three product page templates, delivered July 2026." Bad: "Design work."</p>

      <h3>Mistake 2: Gaps in invoice numbering</h3>
      <p data-answer="true">Every country covered in this article treats gaps in invoice number sequences as an audit red flag. Germany's Finanzamt, Bulgaria's tax authority, the EU VAT Directive, and Kenya's KRA all expect an unbroken sequential series. A missing number must be explained in writing or it is assumed to represent unreported income. See our deeper guide on <a href="/en/blog/sequential-invoice-numbering-guide">sequential invoice numbering and why gaps matter</a>.</p>

      <h3>Mistake 3: Applying reverse charge without verifying the client's tax ID</h3>
      <p data-answer="true">Applying the reverse charge mechanism to an invoice without verifying the client's VAT or tax registration number leaves you liable for the VAT if the number turns out to be invalid. Always verify (VIES for EU clients, the Biała Lista for Polish clients, kra.go.ke for Kenyan clients) and save the confirmation. For the full mechanics, read our guide to <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and reverse charge</a>.</p>

      <h2>The e-invoicing wave: what is coming and when</h2>
      <p>E-invoicing mandates are rolling out across every market covered in this article. The trend is universal: tax authorities are moving from periodic VAT return reporting to real-time or near-real-time transaction monitoring. Here is where each country stands as of mid-2026.</p>

      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        <thead>
          <tr style="background:#f8fafc;">
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;">Country</th>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;">Status</th>
            <th style="text-align:left;padding:8px;border:1px solid #e5e7eb;">Key deadline</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">France</td><td style="padding:8px;border:1px solid #e5e7eb;">Rolling out</td><td style="padding:8px;border:1px solid #e5e7eb;">Large businesses: September 2026. All businesses: September 2027.</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">Germany</td><td style="padding:8px;border:1px solid #e5e7eb;">Rolling out</td><td style="padding:8px;border:1px solid #e5e7eb;">Above €800K turnover: January 2027. All businesses: January 2028.</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">Poland (KSeF)</td><td style="padding:8px;border:1px solid #e5e7eb;">Live</td><td style="padding:8px;border:1px solid #e5e7eb;">All VAT-registered businesses: April 2026. Micro-entrepreneurs: January 2027.</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">Italy</td><td style="padding:8px;border:1px solid #e5e7eb;">Live</td><td style="padding:8px;border:1px solid #e5e7eb;">Mandatory for all B2B since 2019.</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">Kenya (eTIMS)</td><td style="padding:8px;border:1px solid #e5e7eb;">Live</td><td style="padding:8px;border:1px solid #e5e7eb;">All businesses since January 2024.</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">Philippines (EIS)</td><td style="padding:8px;border:1px solid #e5e7eb;">Rolling out</td><td style="padding:8px;border:1px solid #e5e7eb;">Large taxpayers: December 2026.</td></tr>
          <tr><td style="padding:8px;border:1px solid #e5e7eb;">EU-wide (ViDA)</td><td style="padding:8px;border:1px solid #e5e7eb;">Announced</td><td style="padding:8px;border:1px solid #e5e7eb;">Intra-EU digital reporting: July 2030.</td></tr>
        </tbody>
      </table>

      <p><strong>For freelancers:</strong> the immediate obligation is to ensure your current invoices meet the content requirements in each country. The structural e-invoicing mandates (XML formats, platform submissions) primarily affect larger businesses first. Solo freelancers have time, but choosing an invoicing tool that is tracking these developments now is the way to avoid a last-minute scramble.</p>

      <h2>Quick answers</h2>

      <h3>What must every EU VAT invoice include?</h3>
      <p data-answer="true">Under EU VAT Directive 2006/112/EC, every VAT invoice issued to a business client in the EU must include: the supplier's full legal name, address, and VAT number; the client's full legal name, address, and VAT number; a unique sequential invoice number with no gaps; the date of issue; the date of supply; a specific description of services or goods delivered; the net amount per VAT rate; the VAT rate applied; the total VAT amount; and the total gross amount payable. For cross-border B2B invoices, the notation "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC" must replace the VAT line. Individual EU member states add requirements on top of this baseline: Germany requires a Leistungsdatum, France requires a SIRET number and late payment clause, and the Netherlands requires a KVK number.</p>

      <h3>What is the difference between VAT invoice requirements in Germany and France?</h3>
      <p data-answer="true">Germany and France both follow the EU VAT Directive baseline but add distinct national requirements. Germany's most commonly missed field is the Leistungsdatum, the date of supply, which must be stated even when it matches the invoice date. Germany also requires either a Steuernummer or USt-IdNr. and uses "Steuerschuldnerschaft des Leistungsempfängers" for reverse charge notation. France requires a 14-digit SIRET number (not just the 9-digit SIREN), the client's SIRET number, an "EI" designation after the supplier's name for sole traders, and a mandatory late payment penalty clause (€40 indemnity). For freelancers under the VAT threshold, France requires the exact phrase "TVA non applicable, article 293 B du CGI" while Germany requires "Gemäß §19 UStG wird keine Umsatzsteuer berechnet." France also requires all mandatory fields in French under the Toubon Law.</p>

      <h3>What must a freelance invoice to a Kenyan client include?</h3>
      <p data-answer="true">A freelance invoice to a Kenyan business client must include the freelancer's full legal name and home country tax ID, the client's KRA PIN (an 11-character alphanumeric identifier verified on kra.go.ke), a sequential invoice number, the date of issue and date of service, a specific description of services, the net amount in the agreed currency, and a note stating that no Kenyan VAT is charged under the reverse charge provisions of Kenya's VAT Act (Cap 476). For foreign freelancers, the Kenyan client will deduct 20% withholding tax from the payment before remitting; the freelancer invoices the full agreed amount and receives 80% unless a Double Taxation Agreement applies.</p>

      <h3>What changed about Philippine invoice requirements in 2024?</h3>
      <p data-answer="true">Under the Ease of Paying Taxes Act (Republic Act 11976, effective January 2024), the Official Receipt was demoted from primary tax document to supplementary document in the Philippines. Since April 27, 2024, Filipino freelancers must issue Sales Invoices (or Service Invoices) as the primary billing document. Official Receipts can still be used as proof of payment but cannot be used by clients to claim input VAT. Every BIR-compliant Sales Invoice must include the label "Invoice" or "Service Invoice," the freelancer's full 12-digit TIN including branch code, the client's TIN for transactions above PHP 1,000, a sequential invoice number registered with the BIR, and the phrase "THIS DOCUMENT IS NOT VALID FOR CLAIM OF INPUT TAX" in bold if the freelancer is non-VAT registered.</p>

      <h3>What is the reverse charge invoice wording that works across all EU countries?</h3>
      <p data-answer="true">The standard reverse charge notation accepted across all 27 EU member states for cross-border B2B service invoices is: "VAT: Reverse charge — Article 196, EU VAT Directive 2006/112/EC." This wording satisfies the EU VAT Directive requirement for a reverse charge notation (Article 226(11a)) in every member state. Some countries additionally require the notation in the local language: Germany uses "Steuerschuldnerschaft des Leistungsempfängers," the Netherlands uses "BTW verlegd," France uses "Autoliquidation — Article 283 du CGI," and Poland uses "Odwrotne obciążenie." Including both the English EU reference and the local language notation is recommended for invoices to clients in these countries.</p>

      <h2>Conclusion</h2>
      <p>Three things to do after reading this article:</p>
      <ol>
        <li><strong>Bookmark this page.</strong> Requirements update as legislation changes. Check back when invoicing a country for the first time, or after a significant gap.</li>
        <li><strong>Verify every new client's tax ID before the first invoice.</strong> VIES for EU clients, Biała Lista for Polish clients, kra.go.ke for Kenyan clients. Save the confirmation.</li>
        <li><strong>Use a tool that enforces the compliance layer automatically.</strong> Sequential numbering, reverse charge notation, country-specific mandatory fields, VAT number validation. The alternative is researching each country manually every time and hoping you got it right.</li>
      </ol>

      <p style="margin-top:24px;"><strong><a href="https://app.invoicemonk.com/signup?utm_source=organic_blog&amp;utm_medium=article_end&amp;utm_campaign=blog_vat_checklist_by_country" target="_blank" rel="noopener">Invoicemonk builds the compliance requirements for every country in this checklist directly into the invoice, so the right fields appear automatically based on where your client is. Try it free.</a></strong></p>

      <p style="border-top:1px solid #e5e7eb;padding-top:16px;margin-top:32px;font-style:italic;color:#475569;">Need the full guide for a specific country or topic? Start here: <a href="/en/blog/eu-vat-invoice-requirements-freelancers">EU VAT invoice requirements for freelancers</a>, <a href="/en/blog/how-to-invoice-german-clients-freelancer">full Germany invoicing guide</a>, <a href="/en/blog/dutch-invoice-requirements-freelancers">full Netherlands invoicing guide</a>, <a href="/en/blog/sequential-invoice-numbering-guide">sequential invoice numbering and why gaps matter</a>, <a href="/en/blog/cross-border-vat-invoicing-freelancers-eu">cross-border VAT and reverse charge</a>, <a href="/en/blog/french-invoice-requirements-freelancers">full France invoicing guide</a>, <a href="/en/blog/how-to-issue-credit-note-freelancer">how to issue a credit note</a>, <a href="/en/blog/invoicing-polish-clients-foreign-freelancer">full Poland KSeF invoicing guide</a>, <a href="/en/blog/invoicing-kenyan-clients-foreign-freelancer">full Kenya invoicing guide for foreign freelancers</a>, <a href="/en/blog/bir-invoice-requirements-freelancers-philippines">full Philippines BIR invoicing guide</a>, and <a href="/en/blog/invoicemonk-vs-wave">InvoiceMonk vs Wave comparison</a>.</p>
    `,
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
cluster19Posts.forEach(post => {
  if (!blogPosts.find(p => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
