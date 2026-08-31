import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

/**
 * Blog Posts Cluster 22 — US query-gap articles
 *
 * Each post targets a US query family that had impressions in Search Console
 * but no dedicated page, so an adjacent post was being stretched to cover it.
 */

export const cluster22Posts: BlogPost[] = [
  {
    slug: 'invoice-terms-and-conditions-wording',
    title: 'Invoice Terms and Conditions: Wording and Clauses You Can Copy (2026)',
    excerpt:
      'Copy-paste invoice terms and conditions wording — late fees, interest, ownership until paid, dispute windows, and jurisdiction — plus where to put them on the invoice.',
    content: `<p data-answer="true">Invoice terms and conditions are the short block of contractual wording printed on an invoice that states when payment is due, what happens if it is late, who owns the work until payment clears, and how disputes are handled. Payment terms say <em>when</em> you get paid; terms and conditions say <em>what happens if you don't</em>. Most invoices need six clauses, and all six fit in under 150 words.</p><h2>Payment terms vs terms and conditions</h2><p class="block-answer" data-answer="true">These are often used interchangeably, which is why so many invoices carry one and not the other.</p><p>These are often used interchangeably, which is why so many invoices carry one and not the other.</p><table>
        <thead>
          <tr><th>Element</th><th>Answers</th><th>Example</th></tr>
        </thead>
        <tbody>
          <tr><td>Payment terms</td><td>When is payment due?</td><td>Net 30, Due on receipt, 50% deposit</td></tr>
          <tr><td>Terms and conditions</td><td>What are the rules around that payment?</td><td>1.5% monthly late fee, 7-day dispute window, work remains our property until paid</td></tr>
        </tbody>
      </table><p>For a full breakdown of the first column, see <a href="/en/blog/how-to-write-invoice-payment-terms">how to write invoice payment terms</a>.</p><h2>The six clauses every invoice should carry</h2><h3>1. Payment due date clause</h3><blockquote><p>Payment is due within 30 days of the invoice date (Net 30). Payment is considered received on the date cleared funds reach our account.</p></blockquote><p>The second sentence matters: without it, clients argue that mailing a cheque on day 30 counts as paying on time.</p><h3>2. Late fee and interest clause</h3><blockquote><p>Invoices unpaid after the due date accrue interest at 1.5% per month (18% per annum) on the outstanding balance, or the maximum rate permitted by applicable law, whichever is lower.</p></blockquote><p>The "or the maximum rate permitted by law" fallback keeps the clause enforceable in US states that cap contractual interest. Never invent a rate you have not checked against your state's usury limit.</p><h3>3. Ownership / retention of title clause</h3><blockquote><p>All deliverables, files, designs, and intellectual property created under this invoice remain the property of [Your Business] until payment is received in full, at which point ownership transfers to the client.</p></blockquote><p>This is the single most useful clause for freelancers, designers, developers, and photographers. It converts a debt problem into a licensing problem, which clients resolve much faster.</p><h3>4. Dispute window clause</h3><blockquote><p>Any dispute regarding this invoice must be raised in writing within 7 days of the invoice date. Amounts not disputed within that period are deemed accepted and payable in full.</p></blockquote><h3>5. Collection costs clause</h3><blockquote><p>If this invoice is referred to a collections agency or legal counsel, the client is responsible for all reasonable recovery costs, including agency commission, court fees, and attorney fees.</p></blockquote><h3>6. Governing law clause</h3><blockquote><p>This invoice and its terms are governed by the laws of the State of [State], United States. Any proceedings shall be brought in the courts of [County, State].</p></blockquote><h2>A complete copy-paste terms and conditions block</h2><p class="block-answer" data-answer="true">Paste this into the footer of your invoice template and replace the bracketed values:</p><p>Paste this into the footer of your invoice template and replace the bracketed values:</p><blockquote>
        <p><strong>Terms and Conditions.</strong> Payment is due within 30 days of the invoice date. Payment is considered received when cleared funds reach our account. Overdue balances accrue interest at 1.5% per month, or the maximum rate permitted by law, whichever is lower. All deliverables remain the property of [Your Business] until payment is received in full. Disputes must be raised in writing within 7 days of the invoice date; undisputed amounts are payable in full. The client is responsible for reasonable collection and legal costs on overdue balances. These terms are governed by the laws of [State], United States.</p>
      </blockquote><h2>Shorter wording for immediate payment</h2><p class="block-answer" data-answer="true">For invoices that must be paid immediately, the standard wording is: "Payment due on receipt.  This invoice is payable immediately upon delivery; late payments accrue 1.</p><p data-answer="true">For invoices that must be paid immediately, the standard wording is: "Payment due on receipt. This invoice is payable immediately upon delivery; late payments accrue 1.5% monthly interest." Avoid vague phrases like "please pay promptly" or "payment appreciated" — they have no due date, so there is nothing to enforce and nothing to age in your receivables report.</p><ul>
        <li><strong>Strong:</strong> "Due on receipt — payable immediately."</li>
        <li><strong>Strong:</strong> "Payment due upon presentation of this invoice."</li>
        <li><strong>Weak:</strong> "Please remit at your earliest convenience."</li>
        <li><strong>Weak:</strong> "Thanks for paying soon!"</li>
      </ul><h2>Where terms and conditions go on the invoice</h2><p class="block-answer" data-answer="true">Due date and payment terms: near the total, in the same visual block as the amount owed — this is what the payer actually reads.  Full terms and conditions: the invoice footer, at 8–9pt, on every page.</p><ul>
        <li><strong>Due date and payment terms:</strong> near the total, in the same visual block as the amount owed — this is what the payer actually reads.</li>
        <li><strong>Full terms and conditions:</strong> the invoice footer, at 8–9pt, on every page.</li>
        <li><strong>Contract-level terms:</strong> your master services agreement, referenced from the invoice ("subject to the MSA dated …").</li>
      </ul><p>Terms buried only in a signed contract still bind the client, but terms printed on the invoice are the ones that change behaviour, because they are visible at the moment of payment.</p><h2>Enforceability: what actually holds up</h2><p class="block-answer" data-answer="true">Terms first introduced on an invoice — after the work was agreed — are weaker than terms the client accepted before work started.</p><p>Terms first introduced on an invoice — after the work was agreed — are weaker than terms the client accepted before work started. To make them stick:</p><ol>
        <li>Put the same clauses in your quote, estimate, or contract, so the invoice restates rather than introduces them.</li>
        <li>Keep the late-fee rate at or below your state's cap.</li>
        <li>Keep records: the sent timestamp, delivery confirmation, and any client acknowledgement.</li>
      </ol><p>Invoicemonk stamps send and view timestamps on every invoice automatically, which is the evidence that matters if a payment goes to collection.</p><h2>Set it once, apply it everywhere</h2><p class="block-answer" data-answer="true">Retyping terms per invoice is how they drift.  In Invoicemonk invoicing you save a default terms block and a default payment term, and every new invoice inherits both — with late fees and automatic payment reminders attached to the same due date.</p><p>Retyping terms per invoice is how they drift. In <a href="/en/invoicing">Invoicemonk invoicing</a> you save a default terms block and a default payment term, and every new invoice inherits both — with late fees and <a href="/en/blog/setting-up-automatic-payment-reminders">automatic payment reminders</a> attached to the same due date.</p><p>Plans start at $15/month — see <a href="/en/pricing">pricing</a>, or compare alternatives in our <a href="/en/compare/best-invoicing-software-usa">best invoicing software in the USA</a> guide.</p>`,
    category: 'Invoicing and Billing Tips',
    tags: ['invoicing', 'payment terms', 'contracts', 'late payment'],
    author: defaultAuthor,
    date: '2026-08-28',
    dateModified: '2026-08-28',
    readTime: '8 min read',
    featuredImage: '/images/blog/payment-terms-guide.jpg',
    featuredImageAlt: 'Invoice terms and conditions wording examples you can copy onto your invoice',
    clusterType: 'cluster',
    semanticKeywords: [
      'invoice terms and conditions',
      'invoice terms and conditions wording',
      'invoice template terms and conditions',
      'terms and conditions on invoices',
      'terms and conditions for billing',
      'invoice wording for immediate payment',
    ],
    faq: [
      {
        question: 'What are invoice terms and conditions?',
        answer:
          'Invoice terms and conditions are the contractual rules printed on an invoice: when payment is due, the late fee or interest rate, who owns the deliverables until payment clears, the dispute window, who pays collection costs, and which law governs the invoice.',
      },
      {
        question: 'What wording should I use for terms and conditions on an invoice?',
        answer:
          'Use a short footer block: payment due within 30 days of the invoice date; 1.5% monthly interest on overdue balances or the maximum permitted by law; deliverables remain your property until paid in full; disputes must be raised in writing within 7 days; the client covers reasonable collection costs; governed by the laws of your state.',
      },
      {
        question: 'What is the best invoice wording for immediate payment?',
        answer:
          'Use "Payment due on receipt — payable immediately upon delivery of this invoice," followed by your late fee clause. Avoid soft phrases such as "please pay at your earliest convenience," which set no enforceable due date.',
      },
      {
        question: 'Are terms and conditions on an invoice legally binding?',
        answer:
          'They are strongest when the client accepted the same terms before work started, in a quote or contract, and the invoice restates them. Terms introduced for the first time on an invoice are harder to enforce, and late fee rates above your state usury cap may be unenforceable.',
      },
    ],
    relatedTools: [
      { label: 'Invoicing', url: '/invoicing', description: 'Save default terms and conditions that apply to every invoice you send.' },
      { label: 'Invoice payment terms guide', url: '/blog/how-to-write-invoice-payment-terms', description: 'How to choose the payment term the conditions apply to.' },
    ],
  },
  {
    slug: 'what-is-net-15-payment-terms',
    title: 'What Is Net 15? Payment Terms, Examples, and When to Use It',
    excerpt:
      'Net 15 means payment is due 15 days after the invoice date. Here is how to calculate the due date, how to word it on an invoice, and when Net 15 beats Net 30.',
    content: `<p data-answer="true">Net 15 means the full invoice amount is due 15 calendar days after the invoice date. An invoice dated 3 March with Net 15 terms is due 18 March. "Net" refers to the net amount owed — the whole balance, not a portion — and the number is the count of days you allow before the balance is overdue.</p><h2>How to calculate a Net 15 due date</h2><p class="block-answer" data-answer="true">Count calendar days, not business days, unless your invoice says otherwise.  Count from the invoice date, not the delivery date or the date the client opened the email — again, unless you state otherwise.</p><ul>
        <li>Count <strong>calendar days</strong>, not business days, unless your invoice says otherwise.</li>
        <li>Count from the <strong>invoice date</strong>, not the delivery date or the date the client opened the email — again, unless you state otherwise.</li>
        <li>Day 0 is the invoice date; day 15 is the due date.</li>
      </ul><table>
        <thead><tr><th>Invoice date</th><th>Net 15 due date</th></tr></thead>
        <tbody>
          <tr><td>1 January</td><td>16 January</td></tr>
          <tr><td>20 February</td><td>7 March</td></tr>
          <tr><td>31 March</td><td>15 April</td></tr>
        </tbody>
      </table><p>If the due date lands on a weekend or bank holiday, most US businesses treat the next business day as the deadline. Say so explicitly if it matters to you: "If the due date falls on a weekend or federal holiday, payment is due the next business day."</p><h2>How to write Net 15 on an invoice</h2><p class="block-answer" data-answer="true">Any of these are unambiguous, and all three should sit next to the total:</p><p>Any of these are unambiguous, and all three should sit next to the total:</p><ul>
        <li><code>Payment terms: Net 15</code></li>
        <li><code>Net 15 — due 18 March 2026</code></li>
        <li><code>Payment due within 15 days of the invoice date (Net 15)</code></li>
      </ul><p data-answer="true">Always print the calculated calendar due date alongside "Net 15." Clients who don't recognise the shorthand file the invoice for later; a visible date goes into the payables queue. This single change typically shortens days-sales-outstanding more than shortening the term itself.</p><h2>When Net 15 is the right term</h2><p class="block-answer" data-answer="true">Small invoices.  Under about $2,000, most clients can approve within 15 days without an internal budgeting cycle.</p><ul>
        <li><strong>Small invoices.</strong> Under about $2,000, most clients can approve within 15 days without an internal budgeting cycle.</li>
        <li><strong>New clients.</strong> A shorter first term tests whether they pay at all, before you take on a larger engagement.</li>
        <li><strong>Tight cash cycles.</strong> Freelancers and small agencies paying contractors monthly need money in before payroll goes out.</li>
        <li><strong>Recurring or retainer work.</strong> Invoice at the start of the period on Net 15 so the term closes well before the next invoice.</li>
      </ul><h3>When Net 15 backfires</h3><p class="block-answer" data-answer="true">Enterprise and government clients.  Many run fixed 30- or 45-day AP cycles; Net 15 is simply ignored and you have taught the client that your due dates are decorative.</p><ul>
        <li><strong>Enterprise and government clients.</strong> Many run fixed 30- or 45-day AP cycles; Net 15 is simply ignored and you have taught the client that your due dates are decorative.</li>
        <li><strong>Invoices needing multi-level approval.</strong> If three people must sign off, 15 days is not a schedule, it's a hope.</li>
        <li><strong>Where 2/10 Net 30 works better.</strong> An early-payment discount often gets you paid on day 10 while keeping a term the client's system accepts.</li>
      </ul><h2>Net 15 vs Net 30 vs Due on Receipt</h2><p class="block-answer" data-answer="true">The full head-to-head, including the cash-flow maths, is in Net 30 vs Net 15 compared.</p><table>
        <thead><tr><th>Term</th><th>Due</th><th>Best for</th></tr></thead>
        <tbody>
          <tr><td>Due on receipt</td><td>Immediately</td><td>One-off jobs, new or high-risk clients, deposits</td></tr>
          <tr><td>Net 15</td><td>15 days</td><td>Small businesses, freelancers, recurring small invoices</td></tr>
          <tr><td>Net 30</td><td>30 days</td><td>Corporate clients, larger projects, established relationships</td></tr>
          <tr><td>2/10 Net 30</td><td>30 days, 2% off if paid in 10</td><td>Clients with cash who respond to discounts</td></tr>
        </tbody>
      </table><p>The full head-to-head, including the cash-flow maths, is in the <a href="/en/blog/how-to-write-invoice-payment-terms">invoice payment terms guide</a>.</p><h2>Making Net 15 actually work</h2><p class="block-answer" data-answer="true">Making Net 15 actually work includes: Agree the term in the quote or contract, before the work — not on the first invoice.   Print the calculated due date, not just "Net 15.</p><ol>
        <li>Agree the term in the quote or contract, before the work — not on the first invoice.</li>
        <li>Print the calculated due date, not just "Net 15."</li>
        <li>Attach a late fee clause; see <a href="/en/blog/invoice-terms-and-conditions-wording">invoice terms and conditions wording</a>.</li>
        <li>Schedule reminders at day 10, day 16, and day 23 — see <a href="/en/blog/payment-reminder-email-templates">payment reminder email templates</a>.</li>
        <li>Offer a payment method that clears fast; a 15-day term paid by mailed cheque is a 25-day term.</li>
      </ol><p>In <a href="/en/invoicing">Invoicemonk</a>, Net 15 is a saved default: the due date calculates itself, the terms block attaches, and reminders fire on schedule without you tracking dates. Check <a href="/en/pricing">pricing</a> or see how it stacks up in our <a href="/en/compare/best-invoicing-software-usa">US invoicing software comparison</a>.</p>`,
    category: 'Invoicing and Billing Tips',
    tags: ['invoicing', 'payment terms', 'cash flow'],
    author: defaultAuthor,
    date: '2026-08-28',
    dateModified: '2026-08-28',
    readTime: '7 min read',
    featuredImage: '/images/blog/net-15-payment-terms.jpg',
    featuredImageAlt: 'Net 15 payment terms explained — invoice due 15 days after the invoice date',
    clusterType: 'cluster',
    semanticKeywords: [
      'net 15 payment terms',
      'net 15 terms',
      'net 15 invoice',
      'invoice terms net 15',
      'what is net 15',
      'invoice net 15',
    ],
    faq: [
      {
        question: 'What does Net 15 mean on an invoice?',
        answer:
          'Net 15 means the full invoice balance is due 15 calendar days after the invoice date. An invoice dated 3 March on Net 15 terms is due 18 March.',
      },
      {
        question: 'Is Net 15 counted in business days or calendar days?',
        answer:
          'Calendar days, by default, counted from the invoice date. If you want business days or a count from the delivery date instead, you must state that explicitly on the invoice.',
      },
      {
        question: 'Is Net 15 better than Net 30?',
        answer:
          'Net 15 is better for small invoices, new clients, and tight cash cycles. Net 30 is better for corporate and government clients whose accounts payable cycles run on 30 days and will ignore a shorter term.',
      },
      {
        question: 'How do I write Net 15 terms on an invoice?',
        answer:
          'Write "Payment terms: Net 15" next to the total and print the calculated due date beside it, for example "Net 15 — due 18 March 2026." Add a late fee clause so the term has consequences.',
      },
    ],
    relatedTools: [
      { label: 'Invoicing', url: '/invoicing', description: 'Set Net 15 as a default and let due dates calculate themselves.' },
      { label: 'Invoice payment terms guide', url: '/blog/how-to-write-invoice-payment-terms', description: 'Net 30 vs Net 15, wording, examples, and templates in one definitive guide.' },
      { label: 'Best invoicing software USA', url: '/compare/best-invoicing-software-usa', description: 'Compare invoicing tools for US freelancers and small businesses.' },
    ],
  },
  {
    slug: 'invoice-as-proof-of-income',
    title: 'Using an Invoice as Proof of Income (Self-Employed Guide)',
    excerpt:
      'Can invoices prove your income for a loan, apartment, or visa? What lenders actually accept, what makes an invoice credible, and which documents to send with it.',
    content: `<p data-answer="true">Invoices alone are usually not accepted as proof of income, because an invoice shows what you billed, not what you were paid. Invoices become acceptable proof when paired with evidence of payment — matching bank deposits, paid-stamped invoices, or a tax return. Lenders, landlords, and immigration officers all look for the same thing: billed amounts that reconcile with money that actually arrived.</p><h2>Who asks, and what they accept</h2><p class="block-answer" data-answer="true">Who asks, and what they accept — Mortgage lender: 2 years of tax returns (Form 1040 + Schedule C), 1099s, 3–12 months of bank statements; invoices only as supporting detail.</p><table>
        <thead><tr><th>Requester</th><th>Typically accepted</th></tr></thead>
        <tbody>
          <tr><td>Mortgage lender</td><td>2 years of tax returns (Form 1040 + Schedule C), 1099s, 3–12 months of bank statements; invoices only as supporting detail</td></tr>
          <tr><td>Landlord</td><td>3 months of bank statements, recent paid invoices, prior year tax return</td></tr>
          <tr><td>Auto or personal lender</td><td>Bank statements plus tax return or profit-and-loss statement</td></tr>
          <tr><td>Visa or immigration</td><td>Tax returns, contracts, paid invoices, bank statements — usually all of them</td></tr>
          <tr><td>Government benefit or subsidy</td><td>Recent paid invoices plus bank deposits covering the assessment period</td></tr>
        </tbody>
      </table><h2>What makes an invoice credible as evidence</h2><p class="block-answer" data-answer="true">A reviewer is checking whether the document is real and whether the money moved.</p><p>A reviewer is checking whether the document is real and whether the money moved. Give them both:</p><ul>
        <li><strong>Sequential invoice numbers</strong> with no unexplained gaps.</li>
        <li><strong>Full client details</strong> — legal name, address, contact — not initials.</li>
        <li><strong>Issue date, due date, and payment date.</strong> The payment date is the one that counts.</li>
        <li><strong>Clear line items</strong> describing the service, not "consulting, $4,000."</li>
        <li><strong>Payment status</strong> marked paid, with the method and reference.</li>
        <li><strong>Your business identity</strong> — business name, address, and EIN or SSN as applicable.</li>
      </ul><h2>The document set that works</h2><p class="block-answer" data-answer="true">The document set that works includes: Paid invoices for the period, in date order.   Bank statements with the matching deposits highlighted, so each invoice traces to a credit.</p><ol>
        <li><strong>Paid invoices</strong> for the period, in date order.</li>
        <li><strong>Bank statements</strong> with the matching deposits highlighted, so each invoice traces to a credit.</li>
        <li><strong>An income summary</strong>: a one-page table of invoice number, client, date paid, amount, and running total.</li>
        <li><strong>Your tax return</strong> (Schedule C) for the most recent year, and 1099-NEC forms where clients issued them.</li>
        <li><strong>Signed contracts</strong> for recurring or retainer work, which show income is expected to continue.</li>
      </ol><p data-answer="true">The reconciliation step is what convinces reviewers: every invoice you submit should have a bank deposit of the same amount on or shortly after the payment date. Mismatched or unexplained amounts do more damage than a smaller income figure would.</p><h2>Common mistakes</h2><p class="block-answer" data-answer="true">Common mistakes includes: Sending unpaid invoices.   Billed is not earned; unpaid invoices can suggest collection problems.</p><ul>
        <li><strong>Sending unpaid invoices.</strong> Billed is not earned; unpaid invoices can suggest collection problems.</li>
        <li><strong>Gaps in numbering.</strong> Reviewers read a missing number as a hidden or deleted invoice.</li>
        <li><strong>Cash payments with no record.</strong> Deposit cash and note the invoice number on the deposit.</li>
        <li><strong>Mixing personal and business accounts.</strong> A separate business account makes reconciliation obvious.</li>
        <li><strong>Editing old invoices to look better.</strong> This is fraud, and version mismatches are easy to spot.</li>
      </ul><h2>Building the record before you need it</h2><p class="block-answer" data-answer="true">Self-employed people usually get asked for proof of income with two weeks' notice, which is far too late to reconstruct three years of billing.  Invoicing software that keeps sequential numbering, records payment dates and methods, and exports a paid-invoice report by date range turns this into a five-minute export.</p><p>Self-employed people usually get asked for proof of income with two weeks' notice, which is far too late to reconstruct three years of billing. Invoicing software that keeps sequential numbering, records payment dates and methods, and exports a paid-invoice report by date range turns this into a five-minute export.</p><p>See what the IRS expects invoices to contain in <a href="/en/blog/irs-invoice-requirements-us-compliance">IRS invoice requirements for US freelancers</a>, and set up your records with <a href="/en/freelancers">Invoicemonk for freelancers</a>.</p><p>Paid plans start at $15/month — see <a href="/en/pricing">pricing</a>, or compare the options in our <a href="/en/compare/best-invoicing-software-usa">best invoicing software in the USA</a> guide.</p>`,
    category: 'Freelancing and Small Business',
    tags: ['freelancing', 'invoicing', 'taxes', 'self-employed'],
    author: defaultAuthor,
    date: '2026-08-28',
    dateModified: '2026-08-28',
    readTime: '7 min read',
    featuredImage: '/images/blog/invoice-as-proof-of-income.jpg',
    featuredImageAlt: 'Self-employed person presenting paid invoices as proof of income to a lender',
    clusterType: 'cluster',
    semanticKeywords: [
      'invoice as proof of income',
      'invoice to claim income',
      'proof of income self employed',
      'freelancer proof of income',
      'paid invoice income verification',
    ],
    faq: [
      {
        question: 'Can I use an invoice as proof of income?',
        answer:
          'An invoice on its own is rarely enough, because it shows what you billed rather than what you were paid. Paid invoices become acceptable proof when submitted alongside bank statements showing the matching deposits, and ideally a tax return.',
      },
      {
        question: 'What do lenders accept as proof of income for the self-employed?',
        answer:
          'Most US lenders want two years of tax returns including Schedule C, any 1099-NEC forms, and three to twelve months of bank statements. Paid invoices and contracts support the application but do not replace those documents.',
      },
      {
        question: 'How do I prove freelance income to a landlord?',
        answer:
          'Provide three months of bank statements with client deposits highlighted, the matching paid invoices, a one-page income summary reconciling the two, and your most recent tax return.',
      },
      {
        question: 'Does an unpaid invoice count as income?',
        answer:
          'Not for proof-of-income purposes. Unpaid invoices show expected revenue, not received revenue, and under cash-basis accounting they are not income until the payment clears.',
      },
    ],
    relatedTools: [
      { label: 'Invoicemonk for freelancers', url: '/freelancers', description: 'Sequential invoice numbering and paid-invoice reports built for the self-employed.' },
      { label: 'Invoicing', url: '/invoicing', description: 'Record payment dates and methods on every invoice automatically.' },
    ],
  },
];

// Register posts in the global blog posts array
import { blogPosts } from './blogPosts';
cluster22Posts.forEach((post) => {
  if (!blogPosts.find((p) => p.slug === post.slug)) {
    blogPosts.push(post);
  }
});
