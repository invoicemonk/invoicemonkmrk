import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Cluster 13: Global How-To Fundamentals (Wave 2)
 * 4 posts: proforma vs commercial invoice, credit notes, chase unpaid invoices, create proforma invoice
 */

export const cluster13Posts: BlogPost[] = [
  // P3-G-05 — Proforma vs Commercial Invoice
  {
    slug: 'proforma-invoice-vs-commercial-invoice',
    title: 'Proforma Invoice vs Commercial Invoice: Key Differences Explained',
    excerpt: 'Understand the difference between proforma and commercial invoices — when to use each, legal status, customs requirements, and practical examples.',
    category: 'Invoicing',
    tags: ['proforma invoice', 'commercial invoice', 'international trade', 'customs', 'invoice types'],
    author: defaultAuthor,
    date: '2026-04-11',
    dateModified: '2026-04-11',
    lastAudited: '2026-04-20',
    readTime: '10 min read',
    featuredImage: '/images/blog/proforma-vs-commercial-invoice.jpg',
    featuredImageAlt: 'Side-by-side comparison of proforma invoice and commercial invoice documents',
    clusterType: 'cluster',
    targetProduct: '/invoicing',
    semanticKeywords: ['proforma invoice meaning', 'commercial invoice for customs', 'proforma vs commercial', 'when to use proforma invoice', 'international trade invoices'],
    priority: 'P3',
    macroContext: 'Understanding the difference between proforma and commercial invoices for international trade',
    faq: [
      { question: 'Is a proforma invoice legally binding?', answer: 'No. A proforma invoice is an estimate or quotation — it confirms the seller\'s intention to deliver goods at a stated price but does not create a legal obligation to pay. Only a commercial invoice (issued after goods are shipped or services delivered) constitutes a formal demand for payment.' },
      { question: 'Can I use a proforma invoice for customs clearance?', answer: 'In some cases, customs authorities accept proforma invoices for pre-clearance or temporary imports. However, most countries require a commercial invoice for final customs clearance and duty calculation. Always check your destination country\'s requirements.' },
      { question: 'Do proforma invoices need an invoice number?', answer: 'Yes. Assign a unique proforma invoice number (e.g., PI-2026-001) separate from your commercial invoice numbering sequence. This avoids confusion in your accounting records and helps track which proformas convert to actual sales.' },
    ],
    relatedTools: [      { label: 'Invoice Templates', url: '/invoice-templates', description: 'Professional templates for every invoice type' },
    ],
    content: `
<p><strong>If you sell internationally — or even domestically to new clients — you'll encounter both proforma invoices and commercial invoices.</strong> They look similar, but serve fundamentally different purposes. Using the wrong one can delay payments, cause customs problems, or create accounting headaches.</p>

<h2>What Is a Proforma Invoice?</h2>

<p>A proforma invoice is a <strong>preliminary bill of sale</strong> sent before goods are delivered or services rendered. Think of it as a detailed quote or estimate in invoice format. It tells the buyer:</p>
<ul>
  <li>What you plan to sell</li>
  <li>The expected price, including any taxes and shipping</li>
  <li>Estimated delivery timeline</li>
  <li>Payment terms you're proposing</li>
</ul>

<p><strong>Key point</strong>: A proforma invoice is <em>not</em> a demand for payment. It's a commitment to deliver at the stated price if the buyer agrees.</p>

<h2>What Is a Commercial Invoice?</h2>

<p>A commercial invoice is the <strong>official payment request</strong> issued after goods are shipped or services delivered. It's the legally binding document that:</p>
<ul>
  <li>Demands payment from the buyer</li>
  <li>Records the sale for tax purposes</li>
  <li>Serves as the basis for customs clearance in international trade</li>
  <li>Must be reported to tax authorities (VAT, GST, etc.)</li>
</ul>

<h2>Key Differences at a Glance</h2>

<table>
  <thead><tr><th>Feature</th><th>Proforma Invoice</th><th>Commercial Invoice</th></tr></thead>
  <tbody>
    <tr><td><strong>Purpose</strong></td><td>Estimate / quote</td><td>Demand for payment</td></tr>
    <tr><td><strong>Legal status</strong></td><td>Not binding</td><td>Legally binding</td></tr>
    <tr><td><strong>When issued</strong></td><td>Before delivery</td><td>After delivery / on shipment</td></tr>
    <tr><td><strong>Tax reporting</strong></td><td>Not reported</td><td>Must be reported (VAT/GST)</td></tr>
    <tr><td><strong>Customs use</strong></td><td>Pre-clearance only</td><td>Required for final clearance</td></tr>
    <tr><td><strong>Accounting</strong></td><td>Not recorded as revenue</td><td>Recorded as accounts receivable</td></tr>
    <tr><td><strong>Numbering</strong></td><td>Separate sequence (PI-XXX)</td><td>Main invoice sequence (INV-XXX)</td></tr>
  </tbody>
</table>

<h2>When to Use a Proforma Invoice</h2>

<ol>
  <li><strong>International trade</strong> — buyers in other countries need a proforma to arrange payment (especially letters of credit), apply for import licences, or get pre-clearance from customs</li>
  <li><strong>New client relationships</strong> — send a proforma before starting work so both parties agree on scope and price</li>
  <li><strong>Custom or made-to-order goods</strong> — confirm specifications and pricing before production begins</li>
  <li><strong>Budget approval</strong> — corporate clients often need a proforma to get internal purchase approval before issuing a purchase order</li>
  <li><strong>Grant or funding applications</strong> — organisations may need a proforma invoice to justify budget requests</li>
</ol>

<h2>When to Use a Commercial Invoice</h2>

<ol>
  <li><strong>After delivering goods or services</strong> — this is your standard sales invoice</li>
  <li><strong>Shipping internationally</strong> — required by customs in virtually every country for duty and tax calculation</li>
  <li><strong>Recording revenue</strong> — commercial invoices are the documents you report to tax authorities</li>
  <li><strong>Claiming input tax credits</strong> — buyers need your commercial invoice to claim VAT/GST credits</li>
</ol>

<h2>What Both Invoices Should Include</h2>

<p>Despite their different purposes, both documents share most fields:</p>
<ul>
  <li>Seller and buyer names, addresses, and tax IDs</li>
  <li>Unique document number</li>
  <li>Date of issue</li>
  <li>Description of goods or services</li>
  <li>Quantities, unit prices, and total amounts</li>
  <li>Currency</li>
  <li>Payment terms</li>
</ul>

<p><strong>Additional fields for commercial invoices in international trade:</strong></p>
<ul>
  <li>HS (Harmonized System) codes for each product</li>
  <li>Country of origin</li>
  <li>Incoterms (FOB, CIF, DDP, etc.)</li>
  <li>Weight and packaging details</li>
  <li>Shipping method and carrier</li>
</ul>

<h2>Common Mistakes to Avoid</h2>

<ul>
  <li><strong>Recording a proforma as revenue</strong> — it's not income until you issue the commercial invoice</li>
  <li><strong>Using proforma numbers in your main sequence</strong> — keep separate numbering to avoid gaps in your commercial invoice trail</li>
  <li><strong>Sending a proforma when customs needs a commercial invoice</strong> — this delays clearance and can result in goods being held</li>
  <li><strong>Not converting proformas to commercial invoices</strong> — if you deliver the goods, always issue the final commercial invoice for proper tax reporting</li>
</ul>

<p>Create both proforma and commercial invoices with <a href="/__LANG__/invoicing">Invoicemonk's free invoice generator</a>. For more on invoice types, see our <a href="/__LANG__/blog/invoice-vs-receipt-difference-explained">invoice vs receipt guide</a>.</p>
    `
  },


  // P3-G-07 — How to Chase Unpaid Invoices
  {
    slug: 'how-to-chase-unpaid-invoices',
    title: 'How to Chase Unpaid Invoices: Scripts, Timelines & Escalation Steps',
    excerpt: 'Stop chasing payments awkwardly. Use these proven email scripts, follow-up timelines, and escalation strategies to get unpaid invoices paid — professionally.',
    category: 'Getting Paid',
    tags: ['unpaid invoices', 'payment follow-up', 'overdue invoices', 'collections', 'cash flow'],
    author: defaultAuthor,
    date: '2026-04-11',
    dateModified: '2026-04-11',
    lastAudited: '2026-04-20',
    readTime: '14 min read',
    featuredImage: '/images/blog/chase-unpaid-invoices.jpg',
    featuredImageAlt: 'Freelancer sending a polite follow-up email about an overdue invoice',
    clusterType: 'cluster',
    targetProduct: '/invoicing',
    semanticKeywords: ['chase unpaid invoices', 'overdue invoice follow up', 'payment reminder email', 'unpaid invoice email template', 'invoice collection strategies'],
    priority: 'P3',
    macroContext: 'Professional strategies and email templates for collecting overdue payments',
    faq: [
      { question: 'How long should I wait before following up on an unpaid invoice?', answer: 'Send a friendly reminder 1-3 days after the due date. Most late payments are due to oversight, not refusal. If no response after 7 days, send a firmer follow-up. Escalate to a formal demand at 30 days overdue. Consider legal options after 60-90 days.' },
      { question: 'Can I charge interest on overdue invoices?', answer: 'Yes, if your payment terms include a late payment clause. Common rates are 1-2% per month. In the UK, the Late Payment of Commercial Debts Act allows 8% + Bank of England base rate. In the EU, Directive 2011/7/EU sets minimum late payment interest. Include the clause on your original invoice to enforce it.' },
      { question: 'Should I stop working for a client with unpaid invoices?', answer: 'Yes, after a reasonable follow-up period (typically 14-30 days overdue). Include a "suspension of services" clause in your contracts and payment terms. Notify the client in writing that work will pause until the outstanding balance is cleared.' },
    ],
    relatedTools: [      { label: 'Payment Terms Guide', url: '/blog/payment-terms-guide-net-30-explained', description: 'Set terms that get you paid on time' },
    ],
    content: `
<p><strong>An unpaid invoice doesn't just hurt your cash flow — it creates stress, damages relationships, and wastes time you could spend on actual work.</strong> But most freelancers and small business owners hate chasing payments because it feels awkward, confrontational, or desperate.</p>

<p>It doesn't have to be any of those things. With the right system — clear timelines, professional scripts, and escalation steps — you can collect what you're owed without burning bridges.</p>

<h2>Why Invoices Go Unpaid</h2>

<p>Before assuming the worst, understand the common reasons:</p>
<ul>
  <li><strong>Oversight</strong> — the client simply forgot (this is the most common reason)</li>
  <li><strong>Cash flow issues</strong> — the client has money problems but intends to pay</li>
  <li><strong>Internal process delays</strong> — the invoice is stuck in an approval queue</li>
  <li><strong>Dispute</strong> — the client is unhappy with the work but hasn't told you</li>
  <li><strong>Missing information</strong> — the invoice went to the wrong person or lacked a PO number</li>
</ul>

<h2>The Follow-Up Timeline</h2>

<p>Use this proven escalation schedule:</p>

<h3>Day 1-3 After Due Date: Friendly Reminder</h3>
<p>Assume it's an oversight. Keep it light and helpful.</p>

<blockquote>
<p><strong>Subject:</strong> Quick reminder — Invoice #[XXX] was due on [date]</p>
<p>Hi [Name],</p>
<p>Hope you're well. Just a quick note that Invoice #[XXX] for [amount] was due on [date]. In case it slipped through, I've reattached it here.</p>
<p>If you've already sent payment, please disregard this — and thank you!</p>
<p>Best,<br/>[Your name]</p>
</blockquote>

<h3>Day 7: Polite Follow-Up</h3>
<p>Slightly more direct. Ask if there's an issue.</p>

<blockquote>
<p><strong>Subject:</strong> Following up on Invoice #[XXX] — now 7 days overdue</p>
<p>Hi [Name],</p>
<p>Following up on my earlier reminder regarding Invoice #[XXX] for [amount], which was due on [date]. Could you let me know when I can expect payment, or if there's anything I need to address on my end?</p>
<p>Happy to discuss if there are any questions about the invoice.</p>
<p>Thanks,<br/>[Your name]</p>
</blockquote>

<h3>Day 14: Firm Reminder</h3>
<p>Reference your payment terms. Mention late fees if applicable.</p>

<blockquote>
<p><strong>Subject:</strong> Invoice #[XXX] — 14 days overdue, action needed</p>
<p>Hi [Name],</p>
<p>Invoice #[XXX] for [amount] is now 14 days past due. Per our agreed payment terms, invoices unpaid after [X] days are subject to [Y]% monthly late fee.</p>
<p>I'd prefer to resolve this without any fees. Could you confirm a payment date by [specific date]?</p>
<p>Best regards,<br/>[Your name]</p>
</blockquote>

<h3>Day 30: Formal Demand</h3>
<p>Business tone. Reference the contract. Mention next steps.</p>

<blockquote>
<p><strong>Subject:</strong> Formal payment notice — Invoice #[XXX], 30 days overdue</p>
<p>Dear [Name],</p>
<p>This is a formal notice that Invoice #[XXX] for [amount], issued on [date] and due on [due date], remains unpaid after 30 days.</p>
<p>Per our agreement dated [contract date], a late payment fee of [amount] has been applied. The revised total is [new total].</p>
<p>Please arrange payment within 7 days. If payment is not received by [date], I will need to [suspend services / refer to collections / seek legal advice].</p>
<p>Regards,<br/>[Your name]</p>
</blockquote>

<h3>Day 60+: Escalation</h3>
<p>At this point, consider:</p>
<ul>
  <li><strong>Formal demand letter</strong> — sent via recorded/certified mail</li>
  <li><strong>Mediation</strong> — a neutral third party helps negotiate</li>
  <li><strong>Small claims court</strong> — for amounts under the threshold (varies by country: £10,000 in UK, $10,000 in most US states)</li>
  <li><strong>Collection agency</strong> — they take 15-50% but handle the entire process</li>
  <li><strong>Legal action</strong> — for larger amounts, consult a solicitor/attorney</li>
</ul>

<h2>Prevention: How to Reduce Late Payments</h2>

<ol>
  <li><strong>Clear payment terms upfront</strong> — state terms in your contract AND on every invoice</li>
  <li><strong>Invoice immediately</strong> — the sooner you invoice, the sooner you get paid</li>
  <li><strong>Make paying easy</strong> — include a payment link, bank details, and multiple payment options</li>
  <li><strong>Request deposits</strong> — 25-50% upfront for new clients or large projects</li>
  <li><strong>Set up automatic reminders</strong> — don't rely on manual follow-ups</li>
  <li><strong>Offer early payment discounts</strong> — 2/10 Net 30 (2% discount if paid within 10 days)</li>
  <li><strong>Vet new clients</strong> — check references and start with smaller projects</li>
</ol>

<h2>What NOT to Do</h2>

<ul>
  <li><strong>Don't be aggressive in early follow-ups</strong> — most late payments are genuine oversights</li>
  <li><strong>Don't threaten legal action prematurely</strong> — it burns the relationship and often isn't necessary</li>
  <li><strong>Don't continue delivering work</strong> — stop after 14-30 days overdue with written notice</li>
  <li><strong>Don't accept verbal promises without a date</strong> — always get a specific payment date in writing</li>
  <li><strong>Don't ignore it</strong> — the longer you wait, the harder it gets to collect</li>
</ul>

<p>Set clear payment terms on every invoice with <a href="/__LANG__/invoicing">Invoicemonk's free invoice generator</a>. For payment term strategies, read our <a href="/__LANG__/blog/payment-terms-guide-net-30-explained">guide to Net 30 and payment terms</a>.</p>
    `
  },

  // P3-G-08 — How to Create a Proforma Invoice
  {
    slug: 'how-to-create-proforma-invoice',
    title: 'How to Create a Proforma Invoice: Template, Examples & Best Practices',
    excerpt: 'Step-by-step guide to creating a proforma invoice — what to include, when to send it, and free templates for international trade and client quotes.',
    category: 'Invoicing',
    tags: ['proforma invoice', 'invoice template', 'how to', 'international trade', 'quotation'],
    author: defaultAuthor,
    date: '2026-04-11',
    dateModified: '2026-04-11',
    lastAudited: '2026-04-20',
    readTime: '9 min read',
    featuredImage: '/images/blog/create-proforma-invoice.jpg',
    featuredImageAlt: 'Business owner creating a proforma invoice for an international client',
    clusterType: 'cluster',
    targetProduct: '/invoicing',
    semanticKeywords: ['create proforma invoice', 'proforma invoice template', 'proforma invoice example', 'how to make proforma invoice', 'proforma invoice for export'],
    priority: 'P3',
    macroContext: 'Step-by-step guide to creating proforma invoices for quotes and international trade',
    faq: [
      { question: 'What is the difference between a proforma invoice and a quote?', answer: 'A proforma invoice is formatted like an invoice and often used in international trade for customs and banking purposes. A quote is typically less formal and used domestically. In practice, many businesses use proforma invoices as formal quotes — the key difference is that proforma invoices follow invoice formatting standards and are accepted by banks and customs officials.' },
      { question: 'Should I include tax on a proforma invoice?', answer: 'Yes. Include estimated taxes (VAT, GST, duties) so the buyer has an accurate picture of the total cost. For international trade, show the applicable taxes for the buyer\'s country or note "taxes to be determined by customs" if exact duties are unknown.' },
    ],
    relatedTools: [      { label: 'Proforma vs Commercial Invoice', url: '/blog/proforma-invoice-vs-commercial-invoice', description: 'Understand the key differences' },
    ],
    content: `
<p><strong>A proforma invoice is one of the most useful — and most misunderstood — business documents.</strong> It's not a demand for payment. It's a formal commitment to deliver goods or services at a stated price. And if you sell internationally, banks and customs authorities expect to see one.</p>

<p>This guide walks you through creating a proforma invoice from scratch, with examples and best practices.</p>

<h2>When You Need a Proforma Invoice</h2>

<ul>
  <li><strong>International sales</strong> — buyers need it for import licences, letters of credit, and customs pre-clearance</li>
  <li><strong>Formal quotations</strong> — when a client needs a detailed, invoice-formatted quote for budget approval</li>
  <li><strong>New client relationships</strong> — to formalise pricing before starting work</li>
  <li><strong>Custom or made-to-order products</strong> — to confirm specs and pricing before production</li>
  <li><strong>Grant or funding applications</strong> — organisations may need proforma invoices to justify purchases</li>
</ul>

<h2>Step-by-Step: Creating a Proforma Invoice</h2>

<h3>Step 1: Label It Clearly</h3>
<p>Write <strong>"PROFORMA INVOICE"</strong> prominently at the top. This prevents confusion with a commercial invoice and ensures it's not accidentally processed as a payment demand.</p>

<h3>Step 2: Add Your Business Details</h3>
<ul>
  <li>Business name and logo</li>
  <li>Address</li>
  <li>Tax ID (VAT number, GSTIN, TIN, ABN, etc.)</li>
  <li>Contact email and phone</li>
</ul>

<h3>Step 3: Add Buyer Details</h3>
<ul>
  <li>Buyer's business name</li>
  <li>Address (including country for international trade)</li>
  <li>Tax ID (if applicable)</li>
  <li>Contact person</li>
</ul>

<h3>Step 4: Assign a Proforma Invoice Number</h3>
<p>Use a separate numbering sequence from your commercial invoices:</p>
<ul>
  <li><code>PI-2026-001</code>, <code>PI-2026-002</code>...</li>
  <li>Or <code>PRO-001</code>, <code>PRO-002</code>...</li>
</ul>
<p>Never use your main invoice number sequence — proforma invoices are not revenue and shouldn't appear in your tax filings.</p>

<h3>Step 5: Add Date and Validity Period</h3>
<ul>
  <li><strong>Issue date</strong> — when you're sending the proforma</li>
  <li><strong>Valid until</strong> — how long the pricing is guaranteed (typically 15-30 days)</li>
</ul>

<h3>Step 6: Itemise Products or Services</h3>
<p>Include the same level of detail as a commercial invoice:</p>
<table>
  <thead><tr><th>Description</th><th>Qty</th><th>Unit Price</th><th>Total</th></tr></thead>
  <tbody>
    <tr><td>Website redesign — 5 pages</td><td>1</td><td>$3,500</td><td>$3,500</td></tr>
    <tr><td>SEO audit and optimisation</td><td>1</td><td>$1,200</td><td>$1,200</td></tr>
    <tr><td>Content writing (10 pages)</td><td>10</td><td>$150</td><td>$1,500</td></tr>
  </tbody>
</table>

<p>For international trade, also include:</p>
<ul>
  <li><strong>HS codes</strong> — Harmonized System tariff codes for each product</li>
  <li><strong>Country of origin</strong></li>
  <li><strong>Weight and dimensions</strong></li>
  <li><strong>Incoterms</strong> (FOB, CIF, DDP, etc.)</li>
</ul>

<h3>Step 7: Calculate Totals</h3>
<ul>
  <li>Subtotal</li>
  <li>Estimated taxes (VAT/GST/duties)</li>
  <li>Shipping and handling (if applicable)</li>
  <li>Total estimated cost</li>
</ul>

<h3>Step 8: Add Payment Terms</h3>
<p>State the terms that will apply if the buyer proceeds:</p>
<ul>
  <li>Payment method (bank transfer, letter of credit, etc.)</li>
  <li>Payment timeline (e.g., 50% deposit, 50% on delivery)</li>
  <li>Currency</li>
  <li>Bank details (for international wire transfers: SWIFT/BIC, IBAN)</li>
</ul>

<h3>Step 9: Add Notes</h3>
<ul>
  <li><strong>"This is a proforma invoice and not a demand for payment"</strong> — clarifies the document's status</li>
  <li>Estimated delivery timeline</li>
  <li>Any conditions or assumptions</li>
</ul>

<h2>Proforma Invoice Best Practices</h2>

<ol>
  <li><strong>Be accurate</strong> — the commercial invoice should closely match the proforma; significant differences raise red flags with customs</li>
  <li><strong>Set an expiry date</strong> — prices change; protect yourself with a validity period</li>
  <li><strong>Keep records</strong> — even though proformas aren't tax documents, keep copies for reference</li>
  <li><strong>Convert to commercial invoice</strong> — when the sale proceeds, create a proper commercial invoice (ideally with a reference to the proforma number)</li>
  <li><strong>Use consistent formatting</strong> — your proforma should look as professional as your commercial invoices</li>
</ol>

<p>Create professional proforma invoices in minutes with <a href="/__LANG__/invoicing">Invoicemonk's free invoice generator</a>. For the difference between proforma and commercial invoices, read our <a href="/__LANG__/blog/proforma-invoice-vs-commercial-invoice">detailed comparison</a>.</p>
    `
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
cluster13Posts.forEach(post => {
  if (!blogPosts.find(p => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
