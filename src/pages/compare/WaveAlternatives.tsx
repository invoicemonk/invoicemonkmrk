import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const alternatives = [
  {
    name: 'Invoicemonk',
    bestFor: 'Best overall Wave alternative',
    price: 'Free tier available',
    highlight: true,
    pros: ['Multi-currency on free plan (Wave doesn\'t offer this)', 'Works globally — not limited to US/Canada', 'Expense tracking + receipt scanning included', 'Invoice verification portal', 'Tax compliance for 14+ countries'],
    cons: ['No payroll module', 'No direct bank connections (yet)'],
    description: 'Invoicemonk is the strongest Wave alternative for businesses that need global reach. Wave\'s payment processing and multi-currency features are US/Canada-only, while Invoicemonk works worldwide. Both offer free invoicing and accounting, but Invoicemonk adds multi-currency support on every plan, expense tracking with receipt scanning, and tax compliance for 14+ countries — all free.',
  },
  {
    name: 'FreshBooks',
    bestFor: 'Businesses wanting premium features',
    price: 'From $19/mo',
    highlight: false,
    pros: ['Superior user experience', 'Built-in time tracking and projects', 'Excellent mobile app', 'Double-entry accounting'],
    cons: ['No free plan', '$19/mo minimum cost', 'Client limits on lower plans', 'Multi-currency on higher plans only'],
    description: 'FreshBooks is the premium upgrade from Wave. If you\'ve outgrown Wave\'s feature set and want time tracking, project management, and a polished interface, FreshBooks delivers — but at a cost. The $19/mo starting price is a significant jump from free.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users',
    price: 'Free (5 customers) / Paid via Zoho Books',
    highlight: false,
    pros: ['Free tier available', 'Integrates with Zoho suite', 'Workflow automation'],
    cons: ['Free plan limited to 5 customers', 'Full features need Zoho Books subscription', 'Less intuitive than Wave'],
    description: 'Zoho Invoice is free but caps you at 5 customers on the free plan. It shines if you use other Zoho products (CRM, Projects, Books). As a standalone Wave replacement, the customer limit and complexity are drawbacks.',
  },
  {
    name: 'QuickBooks Self-Employed',
    bestFor: 'US freelancers wanting tax prep integration',
    price: 'From $15/mo',
    highlight: false,
    pros: ['Tax categorization built in', 'Mileage tracking', 'TurboTax integration', 'Established brand'],
    cons: ['No free plan', 'US-focused', 'Separate from QuickBooks Online', 'Limited invoicing customization'],
    description: 'QuickBooks Self-Employed targets US freelancers who want invoicing tied to tax preparation. The TurboTax integration is its main differentiator. However, it\'s a separate product from QuickBooks Online with fewer features, and there\'s no free option.',
  },
];

const faqs = [
  { question: 'Why should I switch from Wave?', answer: 'Common reasons to switch from Wave: you need multi-currency invoicing (Wave is US/Canada only for payments), you work with international clients, you want more reliable customer support, or you\'re concerned about Wave\'s future direction since the H&R Block acquisition. Invoicemonk matches Wave\'s free pricing while adding global features.' },
  { question: 'Is Invoicemonk really free like Wave?', answer: 'Yes. Invoicemonk\'s free plan includes unlimited invoices, expense tracking, and basic accounting — similar to Wave. Unlike Wave, Invoicemonk also includes multi-currency support and global tax compliance on the free plan. Neither requires a credit card to start.' },
  { question: 'Can I migrate from Wave to another tool?', answer: 'Yes. Export your Wave data (invoices, clients, expenses) as CSV files, then import them into your new tool. Invoicemonk, FreshBooks, and Zoho all support CSV imports. The migration typically takes 30-60 minutes for small businesses.' },
  { question: 'What happened to Wave after the H&R Block acquisition?', answer: 'H&R Block acquired Wave in 2019. Since then, Wave has shifted features behind paid tiers and focused more on North American small businesses. Some users report slower feature development and concerns about long-term pricing changes.' },
];

export default function WaveAlternatives() {
  return (
    <Layout>
      <SEOHead
        title="Best Wave Alternatives in 2026 — Top 4 Free & Paid Options Compared"
        description="Looking for a Wave alternative? Compare Invoicemonk, FreshBooks, Zoho Invoice, and QuickBooks — free and paid options for freelancers and small businesses."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Wave Alternatives', url: '/compare/wave-alternatives' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Wave Alternatives in 2026</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">Wave is solid — but if you need multi-currency, global tax compliance, or better support, here are the top alternatives.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">Why Look for a Wave Alternative?</h2>
            <p>Wave is excellent free invoicing software — but it has limitations. Payment processing is <strong>US and Canada only</strong>. Multi-currency is restricted. Since the H&R Block acquisition, pricing and features have shifted. If you work internationally, need multi-currency invoicing, or want more comprehensive tax compliance, it's worth exploring alternatives. Here's how the top options compare.</p>
          </div>

          <div className="space-y-8">
            {alternatives.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                        {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Best Alternative</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{tool.bestFor} · {tool.price}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <p className="text-xs font-medium text-green-700 mb-2">Pros</p>
                      <ul className="space-y-1">{tool.pros.map((p, j) => <li key={j} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />{p}</li>)}</ul>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-red-700 mb-2">Cons</p>
                      <ul className="space-y-1">{tool.cons.map((c, j) => <li key={j} className="text-sm text-muted-foreground">• {c}</li>)}</ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 prose prose-lg max-w-none text-muted-foreground space-y-6">
            <h2 className="text-heading-lg font-bold text-foreground text-center">Our Verdict</h2>
            <p><strong>Invoicemonk is the best Wave alternative in 2026</strong> — it matches Wave's free pricing while solving its biggest limitations: global payment support, multi-currency invoicing, and tax compliance beyond North America. For a detailed head-to-head, see our <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave comparison</Link>.</p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Comparisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave (Detailed)</Link>
              <Link to="/compare/best-free-invoicing-software" className="text-primary hover:underline">Best Free Invoicing Software</Link>
              <Link to="/compare/best-invoicing-software-freelancers" className="text-primary hover:underline">Best Invoicing Software for Freelancers</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Switch from Wave in 5 Minutes</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Start with Invoicemonk's free plan — import your clients, create invoices, and track expenses. No credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Create Free Account<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
