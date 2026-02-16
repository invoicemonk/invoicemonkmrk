import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
  { name: 'Free tier', invoicemonk: true, competitor: false },
  { name: 'Invoicing', invoicemonk: true, competitor: true },
  { name: 'Multi-currency', invoicemonk: true, competitor: true },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Built-in accounting', invoicemonk: true, competitor: true },
  { name: 'Payroll', invoicemonk: false, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Credit notes', invoicemonk: true, competitor: true },
  { name: 'Inventory management', invoicemonk: false, competitor: true },
  { name: 'Ease of setup', invoicemonk: 'Minutes', competitor: 'Hours' },
  { name: 'Starting price', invoicemonk: 'Free', competitor: '$30/mo' },
];

const faqs = [
  { question: 'Is Invoicemonk a good QuickBooks alternative?', answer: 'For invoicing, expenses, and basic accounting — absolutely. Invoicemonk covers the features that 80% of small businesses actually use, at a fraction of QuickBooks\' cost. QuickBooks is the better choice if you specifically need payroll processing, inventory management, or deep bank feed integrations with US banks.' },
  { question: 'Why is Invoicemonk so much cheaper than QuickBooks?', answer: 'Invoicemonk focuses on core invoicing and financial management without the overhead of enterprise features like payroll, inventory, and 1099 contractor management that drive up QuickBooks pricing. If you don\'t need those features, you\'re paying for capabilities you\'ll never use. Invoicemonk gives you what you need at a price that reflects actual usage.' },
  { question: 'Can I move from QuickBooks to Invoicemonk?', answer: 'Yes. Export your client list, invoice history, and chart of accounts from QuickBooks as CSV or Excel files. Import them into Invoicemonk and you\'re up and running. The migration typically takes 30–60 minutes depending on data volume. Our support team can assist with complex migrations.' },
  { question: 'Does QuickBooks have better accounting than Invoicemonk?', answer: 'QuickBooks has more advanced accounting features — bank feeds, 1099 preparation, inventory valuation, and payroll journal entries. For a business that needs full-service accounting with payroll and inventory, QuickBooks is more comprehensive. For businesses that need invoicing, expense tracking, and standard financial reports, Invoicemonk\'s accounting is fully capable and much simpler to use.' },
  { question: 'Is QuickBooks worth $30/month?', answer: 'It depends on what you need. If you use payroll, inventory, and bank feeds daily, QuickBooks delivers significant value. If you primarily need invoicing and expense tracking, you\'re paying $360+/year for features you don\'t use. Invoicemonk gives you the invoicing and accounting essentials for free or at a fraction of the cost.' },
  { question: 'Which is better for freelancers?', answer: 'Invoicemonk is purpose-built for freelancers and small businesses. It\'s simpler to learn, faster to set up, and significantly cheaper. QuickBooks was originally designed for established businesses with employees and inventory — its feature set reflects that heritage, which means complexity that freelancers don\'t need.' },
  { question: 'Does Invoicemonk have bank feeds like QuickBooks?', answer: 'Invoicemonk focuses on invoicing, expenses, and accounting without direct bank feed integration. For businesses that rely heavily on automatic bank transaction categorization, this is a consideration. However, many small businesses find that manual expense entry with receipt scanning is more accurate and takes only a few minutes per week.' },
];

export default function InvoicemonkVsQuickbooks() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs QuickBooks: Affordable Alternative | 2026 Comparison"
        description="Compare Invoicemonk and QuickBooks for small business invoicing. Features, pricing, and which is the best fit for freelancers and small businesses in 2026."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-quickbooks"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs QuickBooks</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">QuickBooks is an industry giant — but is it the right fit for your small business? Here's how they compare.</p>

          {/* Editorial overview */}
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <p>
              QuickBooks is the 800-pound gorilla of small business accounting. With decades of market dominance, a massive CPA ecosystem, and features ranging from invoicing to payroll to inventory management, it's the default recommendation for any business that asks an accountant "what software should I use?" But default doesn't mean optimal — especially for freelancers, consultants, and small service businesses whose needs are far simpler than what QuickBooks was built for.
            </p>
            <p>
              The core issue with QuickBooks for many small businesses is over-engineering. QuickBooks Simple Start — the cheapest plan — costs $30/month and includes features like bank feeds, mileage tracking, and receipt capture alongside invoicing and basic accounting. For a freelancer who sends 5–10 invoices per month and tracks a handful of expenses, that's a significant monthly cost for a tool where most features go unused. And if you need multi-user access, the price jumps to $60/month or more.
            </p>
            <p>
              Invoicemonk addresses this by focusing on what small businesses actually use: invoicing, expense tracking, and financial reporting. There's no payroll module, no inventory system, and no 1099 preparation — because most Invoicemonk users don't need those features. What you get is a clean, fast platform that handles invoicing and accounting exceptionally well, with multi-currency support, tax compliance, and an invoice verification portal that QuickBooks doesn't offer. And it starts at free.
            </p>
          </div>

          <ComparisonTable competitorName="QuickBooks" features={features} />

          {/* Pricing comparison */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Pricing comparison: what you actually pay</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-4">Invoicemonk</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Free tier</span><span className="font-semibold text-foreground">₦0/mo</span></div>
                    <div className="flex justify-between"><span>Starter</span><span className="font-semibold text-foreground">Affordable</span></div>
                    <div className="flex justify-between"><span>Professional</span><span className="font-semibold text-foreground">Mid-range</span></div>
                    <div className="flex justify-between"><span>Business</span><span className="font-semibold text-foreground">Full suite</span></div>
                    <p className="text-xs pt-2">Invoicing + expenses + accounting on every plan. No per-client limits on paid plans. No hidden fees.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-4">QuickBooks Online</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Simple Start (1 user)</span><span className="font-semibold text-foreground">$30/mo</span></div>
                    <div className="flex justify-between"><span>Essentials (3 users)</span><span className="font-semibold text-foreground">$60/mo</span></div>
                    <div className="flex justify-between"><span>Plus (5 users)</span><span className="font-semibold text-foreground">$90/mo</span></div>
                    <div className="flex justify-between"><span>Advanced (25 users)</span><span className="font-semibold text-foreground">$200/mo</span></div>
                    <p className="text-xs pt-2">No free tier. Payroll is an add-on ($50+/mo). Prices shown are standard; promotional pricing may be lower initially.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-4">Annual cost difference for a solo freelancer: Invoicemonk Free ($0/year) vs QuickBooks Simple Start ($360/year)</p>
          </div>

          {/* Choose cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Primarily need invoicing and expense tracking</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a free starting point with room to grow</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer simplicity over enterprise features you don't use</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need multi-currency invoicing for international clients</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want invoice verification for client trust and fraud prevention</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose QuickBooks if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need payroll processing for employees</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Manage inventory and need stock tracking</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want automatic bank feed categorization</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need a US-focused CPA ecosystem</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Require 1099 contractor management</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Migration guide */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">How to switch from QuickBooks to Invoicemonk</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { step: '1', title: 'Export your QuickBooks data', desc: 'Go to Settings → Export Data in QuickBooks Online. Download your customer list, invoice history, chart of accounts, and expense records.' },
                { step: '2', title: 'Sign up for Invoicemonk', desc: 'Create a free account at app.invoicemonk.com. Set up your business profile with your logo, address, and tax information.' },
                { step: '3', title: 'Import clients and chart of accounts', desc: 'Upload your exported files. Invoicemonk maps client details and account structures automatically.' },
                { step: '4', title: 'Set up recurring billing', desc: 'Recreate any recurring invoice schedules from QuickBooks. Most businesses complete this in under 30 minutes.' },
                { step: '5', title: 'Cancel QuickBooks (save $360+/year)', desc: 'Once you\'re comfortable with Invoicemonk, cancel your QuickBooks subscription. Your exported data serves as a historical reference.' },
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
            <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave</Link>
            <Link to="/compare/invoicemonk-vs-zoho-invoice" className="text-primary hover:underline">Invoicemonk vs Zoho</Link>
            <Link to="/best-invoicing-software" className="text-primary hover:underline">Best Invoicing Software 2026</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">The affordable QuickBooks alternative</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">All the invoicing features you need, at a fraction of the cost. Start free.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
