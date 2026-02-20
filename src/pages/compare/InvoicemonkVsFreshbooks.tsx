import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { ComparisonTable } from '@/components/compare/ComparisonTable';
import { Link } from '@/components/LocalizedLink';

const features = [
  { name: 'Free tier', invoicemonk: true, competitor: false },
  { name: 'Unlimited invoices (paid)', invoicemonk: true, competitor: true },
  { name: 'Multi-currency invoicing', invoicemonk: true, competitor: true },
  { name: 'Expense tracking', invoicemonk: true, competitor: true },
  { name: 'Recurring invoices', invoicemonk: true, competitor: true },
  { name: 'Client management', invoicemonk: true, competitor: true },
  { name: 'Invoice verification portal', invoicemonk: true, competitor: false },
  { name: 'Built-in accounting', invoicemonk: true, competitor: true },
  { name: 'Receipt scanning', invoicemonk: true, competitor: true },
  { name: 'API access', invoicemonk: 'Business plan', competitor: 'Premium plan' },
  { name: 'Starting price', invoicemonk: 'Free', competitor: '$19/mo' },
];

const faqs = [
  { question: 'Is Invoicemonk cheaper than FreshBooks?', answer: 'Yes. Invoicemonk offers a free tier with invoicing, expenses, and accounting included. Paid plans start significantly lower than FreshBooks\' $19/month Lite plan. For businesses that need core invoicing without enterprise features, Invoicemonk typically costs 40–60% less than FreshBooks annually.' },
  { question: 'Can I migrate from FreshBooks to Invoicemonk?', answer: 'Yes. Export your client list and invoice history from FreshBooks as CSV files, then import them into Invoicemonk. The process typically takes 15–30 minutes depending on data volume. Our support team can guide you through the migration step by step.' },
  { question: 'Does Invoicemonk have the same features as FreshBooks?', answer: 'Invoicemonk covers core invoicing, expenses, accounting, and client management — the features most small businesses actually use. FreshBooks includes built-in time tracking and a larger third-party integration marketplace. Invoicemonk differentiates with its invoice verification portal, stronger multi-currency support, and global tax compliance features.' },
  { question: 'Is FreshBooks better for time tracking?', answer: 'FreshBooks has built-in time tracking with a timer feature, which is useful for hourly billing. Invoicemonk focuses on invoice-based time and expense tracking. If your primary workflow is hourly billing with a running timer, FreshBooks may suit that specific need better. For most other invoicing needs, Invoicemonk offers equal or better functionality at a lower price.' },
  { question: 'Which is better for international businesses?', answer: 'Invoicemonk has stronger international capabilities. Multi-currency invoicing is available on all plans (including free), and the platform supports tax compliance for Nigeria, UK, US, Canada, and Australia out of the box. FreshBooks\' multi-currency support requires paid plans and its tax features are primarily US and Canada focused.' },
  { question: 'Does Invoicemonk have phone support like FreshBooks?', answer: 'Invoicemonk provides email and chat support. FreshBooks offers phone support on higher-tier plans. For most users, Invoicemonk\'s responsive chat support resolves issues faster than phone queues, but if phone support is essential for your business, this is worth considering.' },
  { question: 'Which has better reporting?', answer: 'Both platforms offer financial reports including profit & loss, tax summaries, and accounts receivable. Invoicemonk\'s reporting includes multi-currency consolidation and compliance-focused reports. FreshBooks offers more visual dashboard widgets. For core financial reporting, both are comparable.' },
];

export default function InvoicemonkVsFreshbooks() {
  return (
    <Layout>
      <SEOHead
        title="Invoicemonk vs FreshBooks: Which Is Better? | 2026 Comparison"
        description="Compare Invoicemonk and FreshBooks side by side. Features, pricing, and which invoicing software is best for freelancers and small businesses in 2026."
        canonical="https://invoicemonk.com/compare/invoicemonk-vs-freshbooks"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Invoicemonk vs FreshBooks</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">A detailed comparison to help you choose the right invoicing software for your business.</p>

          {/* Editorial overview */}
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <p>
              FreshBooks is one of the most established names in small business invoicing, with over 30 million users and a reputation for user-friendly design. It's a solid product — but it's not the only option, and it's not always the best fit. For freelancers, agencies, and small businesses looking for a more affordable alternative with stronger international capabilities, Invoicemonk offers a compelling case.
            </p>
            <p>
              The most significant difference is pricing. FreshBooks has no free tier — its cheapest plan starts at $19/month (billed annually) and limits you to 5 billable clients. Invoicemonk offers a genuinely useful free tier with invoicing, expenses, and accounting, and its paid plans remove client limits at a fraction of FreshBooks' cost. For a solo freelancer or small business watching expenses, this difference adds up to hundreds of dollars per year.
            </p>
            <p>
              Feature-wise, both platforms cover the essentials: invoicing, expense tracking, recurring billing, and financial reports. FreshBooks edges ahead with built-in time tracking and a larger marketplace of third-party integrations. Invoicemonk differentiates with its invoice verification portal (where clients can independently verify invoice authenticity), stronger multi-currency support on all plans, and built-in tax compliance for multiple countries including Nigeria, UK, US, Canada, and Australia.
            </p>
          </div>

          <ComparisonTable competitorName="FreshBooks" features={features} />

          {/* Pricing comparison */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Pricing comparison</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/30">
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-4">Invoicemonk Pricing</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Free</span><span className="font-semibold text-foreground">₦0/mo</span></div>
                    <div className="flex justify-between"><span>Starter</span><span className="font-semibold text-foreground">Affordable</span></div>
                    <div className="flex justify-between"><span>Professional</span><span className="font-semibold text-foreground">Mid-range</span></div>
                    <div className="flex justify-between"><span>Business</span><span className="font-semibold text-foreground">Full suite</span></div>
                    <p className="text-xs pt-2">All plans include invoicing, expenses, and accounting. No per-client limits on paid plans.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-foreground text-lg mb-4">FreshBooks Pricing</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex justify-between"><span>Lite (5 clients)</span><span className="font-semibold text-foreground">$19/mo</span></div>
                    <div className="flex justify-between"><span>Plus (50 clients)</span><span className="font-semibold text-foreground">$33/mo</span></div>
                    <div className="flex justify-between"><span>Premium (500 clients)</span><span className="font-semibold text-foreground">$60/mo</span></div>
                    <div className="flex justify-between"><span>Select (custom)</span><span className="font-semibold text-foreground">Custom pricing</span></div>
                    <p className="text-xs pt-2">No free tier. Client limits on all standard plans. Prices shown for annual billing.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Choose cards */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card className="border-primary/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose Invoicemonk if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a generous free tier to start with</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need multi-currency invoicing without premium pricing</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Work with international clients across multiple countries</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want invoice verification for client trust and compliance</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer lower pricing as your business scales</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-3">Choose FreshBooks if you…</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need built-in time tracking with a running timer</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Want a large third-party integration marketplace</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Prefer phone support for issue resolution</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Are primarily US/Canada-based with domestic clients</li>
                  <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />Need specific third-party app integrations</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Migration guide */}
          <div className="mt-16">
            <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">How to switch from FreshBooks to Invoicemonk</h2>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { step: '1', title: 'Export your data from FreshBooks', desc: 'Go to FreshBooks Settings → Export Data. Download your client list, invoice history, and expense records as CSV files.' },
                { step: '2', title: 'Create your Invoicemonk account', desc: 'Sign up for free at app.invoicemonk.com. Set up your business profile, logo, and default payment terms.' },
                { step: '3', title: 'Import your clients', desc: 'Upload your client CSV to Invoicemonk. Client names, emails, addresses, and payment terms are mapped automatically.' },
                { step: '4', title: 'Set up recurring invoices', desc: 'Recreate any recurring billing schedules from FreshBooks. This takes 2–3 minutes per schedule.' },
                { step: '5', title: 'Start invoicing', desc: 'Your next invoice goes out from Invoicemonk. Historical data remains accessible in your FreshBooks account for reference.' },
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
            <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave</Link>
            <Link to="/compare/invoicemonk-vs-zoho-invoice" className="text-primary hover:underline">Invoicemonk vs Zoho</Link>
            <Link to="/compare/invoicemonk-vs-quickbooks" className="text-primary hover:underline">Invoicemonk vs QuickBooks</Link>
            <Link to="/best-invoicing-software" className="text-primary hover:underline">Best Invoicing Software 2026</Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Ready to switch from FreshBooks?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Start free and see the difference for yourself. No credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
