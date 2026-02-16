import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
  { name: 'Free invoicing', invoicemonk: true, competitor: true },
  { name: 'Multi-currency invoicing', invoicemonk: true, competitor: false },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Recurring invoices', invoicemonk: true, competitor: true },
  { name: 'Client management', invoicemonk: true, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Built-in accounting', invoicemonk: true, competitor: true },
  { name: 'Receipt scanning', invoicemonk: true, competitor: true },
  { name: 'Credit notes', invoicemonk: true, competitor: false },
  { name: 'Custom branding (free)', invoicemonk: false, competitor: false },
  { name: 'Team access', invoicemonk: 'Professional+', competitor: false },
  { name: 'Availability', invoicemonk: 'Global', competitor: 'US & Canada only' },
];

const faqs = [
  { question: 'Is Invoicemonk better than Wave?', answer: 'For businesses outside the US and Canada, Invoicemonk is the clear choice — Wave is only available in those two markets. Even within the US and Canada, Invoicemonk offers multi-currency invoicing, credit notes, and an invoice verification portal that Wave lacks. Wave\'s advantage is its completely free model (monetized through payment processing fees) and built-in payroll for US businesses.' },
  { question: 'Is Wave really free?', answer: 'Wave\'s invoicing and accounting are free, but the company monetizes through payment processing fees (2.9% + $0.60 per credit card transaction) and payroll services. Invoicemonk also has a free tier with invoicing, expenses, and accounting — but its paid plans offer more features at competitive prices without taking a percentage of your transactions.' },
  { question: 'Can I switch from Wave to Invoicemonk?', answer: 'Yes. Export your client and invoice data from Wave as CSV files and import them into Invoicemonk. The migration process typically takes 15–30 minutes. Our support team can assist with data mapping if needed.' },
  { question: 'Why did Wave stop working in my country?', answer: 'Wave restricted its service to the US and Canada in 2023. If you were using Wave from another country, you need an alternative. Invoicemonk is built for global use with tax compliance for Nigeria, UK, US, Canada, and Australia — and works anywhere in the world.' },
  { question: 'Does Wave support multi-currency invoicing?', answer: 'No. Wave only supports invoicing in USD and CAD. If you have international clients or need to bill in other currencies, Invoicemonk is the better choice with support for all major world currencies on every plan, including the free tier.' },
  { question: 'Which has better accounting features?', answer: 'Both offer double-entry accounting with chart of accounts, financial reports, and transaction categorization. Wave\'s accounting is completely free. Invoicemonk\'s accounting is included on all plans and adds multi-currency consolidation and compliance-focused reports that Wave doesn\'t offer.' },
  { question: 'Can Wave handle credit notes?', answer: 'No. Wave does not support credit notes or invoice corrections. If you need to issue refunds, adjustments, or corrections, you have to create manual workarounds. Invoicemonk has built-in credit note support with proper accounting treatment.' },
];

export default function InvoicemonkVsWave() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs Wave: Which Free Invoicing Software Is Better? | 2026"
        description="Compare Invoicemonk and Wave side by side. Both offer free invoicing, but differ in currency support, global availability, credit notes, and features."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-wave"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs Wave</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">Both offer free invoicing — here's how they compare on features, availability, and flexibility.</p>

          {/* Editorial overview */}
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <p>
              Wave has been a popular choice for solo freelancers and very small businesses thanks to its completely free invoicing and accounting platform. It built a loyal following by removing the cost barrier entirely — you could send unlimited invoices and manage your books without paying a cent. But Wave's model comes with significant limitations that are often overlooked in surface-level comparisons.
            </p>
            <p>
              The biggest limitation is geography. Since 2023, Wave is only available in the United States and Canada. If your business is based anywhere else — Nigeria, the UK, Australia, or any other country — Wave simply doesn't work for you. Even for US and Canadian businesses, Wave doesn't support multi-currency invoicing, which is increasingly essential as freelancers and small businesses work with international clients.
            </p>
            <p>
              Invoicemonk takes a different approach. It offers a free tier that includes invoicing, expenses, and accounting — similar to Wave — but works globally with multi-currency support on every plan. Additional features like credit notes, an invoice verification portal, and tax compliance for multiple jurisdictions make Invoicemonk the more capable platform for businesses that operate internationally or plan to grow beyond a single market.
            </p>
          </div>

          <ComparisonTable competitorName="Wave" features={features} />

          {/* Key differences */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Key differences explained</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Global availability</h3>
                <p className="text-muted-foreground text-sm">Wave only operates in the US and Canada. Invoicemonk works worldwide with localized tax compliance for Nigeria (FIRS), UK (HMRC), US (IRS), Canada (CRA), and Australia (ATO). This makes Invoicemonk the default choice for anyone outside North America — and a better choice for North American businesses with international clients.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Multi-currency support</h3>
                <p className="text-muted-foreground text-sm">Wave invoices only in USD and CAD. Invoicemonk supports all major currencies on every plan, including the free tier. For freelancers with even one international client, this difference alone can justify the switch — billing in a client's currency accelerates payment and reduces disputes.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Credit notes and corrections</h3>
                <p className="text-muted-foreground text-sm">Wave has no credit note functionality. If you need to issue a refund, correction, or adjustment, you must create workarounds that don't follow proper accounting standards. Invoicemonk has built-in credit notes that link to original invoices, maintain proper accounting treatment, and keep your books audit-ready.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Revenue model</h3>
                <p className="text-muted-foreground text-sm">Wave is free but monetizes through payment processing fees (2.9% + $0.60 per credit card transaction) and payroll services. Invoicemonk's free tier is genuinely free with no transaction fees. Paid plans add features like unlimited currency accounts and team access — you choose when and if you upgrade.</p>
              </div>
            </div>
          </div>

          {/* Choose cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Are based outside the US or Canada</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need multi-currency invoicing for international clients</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want credit notes and invoice verification</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need tax compliance beyond US/Canada</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want team access as your business grows</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Wave if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Are US or Canada-based with only domestic clients</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need built-in US payroll processing</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want direct bank connections (US banks)</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Only invoice in USD or CAD</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Don't need credit notes or team features</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Migration guide */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">How to migrate from Wave to Invoicemonk</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { step: '1', title: 'Export your Wave data', desc: 'In Wave, go to Settings → Data Export. Download your customers, invoices, and transactions as CSV files.' },
                { step: '2', title: 'Sign up for Invoicemonk', desc: 'Create a free account at app.invoicemonk.com. Set up your business profile, logo, and tax configuration.' },
                { step: '3', title: 'Import your clients', desc: 'Upload your customer CSV. Invoicemonk maps names, emails, and addresses automatically.' },
                { step: '4', title: 'Configure your currencies', desc: 'If you now work with international clients, set up currency accounts for each market you serve.' },
                { step: '5', title: 'Start invoicing globally', desc: 'Send your first invoice from Invoicemonk — in any currency, to any country.' },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground mb-4">More comparisons</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/compare/invoicemonk-vs-freshbooks" className="text-primary hover:underline">Invoicemonk vs FreshBooks</Link>
            <Link to="/compare/invoicemonk-vs-zoho-invoice" className="text-primary hover:underline">Invoicemonk vs Zoho</Link>
            <Link to="/compare/invoicemonk-vs-quickbooks" className="text-primary hover:underline">Invoicemonk vs QuickBooks</Link>
            <Link to="/best-invoicing-software" className="text-primary hover:underline">Best Invoicing Software 2026</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Try the global alternative to Wave</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Free invoicing that works everywhere, not just the US and Canada.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
