import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { Link } from '@/components/LocalizedLink';

const tools = [
  {
    name: 'Invoicemonk',
    bestFor: 'Freelancers & small businesses globally',
    price: 'Free forever tier',
    highlight: true,
    pros: ['Unlimited invoices on free plan', 'Multi-currency on all plans (including free)', 'Expense tracking & receipt scanning included', 'No credit card required', 'Tax compliance for 14+ countries'],
    cons: ['No payroll module', 'No inventory management'],
    description: 'Invoicemonk offers the most generous free tier among invoicing tools — unlimited invoices, multi-currency support, expense tracking, and accounting on every plan. No hidden limits, no credit card required, and no 30-day trial that expires. The free plan is genuinely free forever, making it ideal for freelancers and small businesses who need professional invoicing without upfront cost.',
  },
  {
    name: 'Wave',
    bestFor: 'Solo freelancers in US & Canada',
    price: 'Free (ads + paid add-ons)',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Direct bank connections', 'Receipt scanning included'],
    cons: ['Limited to US and Canada for payments', 'Ads in the free version', 'No multi-currency on free plan', 'Recently acquired — pricing changes expected'],
    description: 'Wave was the original free invoicing tool and remains popular in North America. However, since its acquisition by H&R Block, the platform has been shifting toward paid features. The free tier still covers basic invoicing and accounting, but payment processing and payroll are paid add-ons.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Businesses in the Zoho ecosystem',
    price: 'Free (up to 5 customers)',
    highlight: false,
    pros: ['Clean interface', 'Part of the Zoho suite', 'Time tracking included'],
    cons: ['Free plan limited to 5 customers', 'Advanced features need Zoho Books (paid)', 'Multi-currency only on paid plans'],
    description: 'Zoho Invoice is free but limited — the 5-customer cap means most businesses outgrow it quickly. It works best if you already use Zoho CRM, Zoho Books, or other Zoho products. Standalone, it lacks the depth of dedicated invoicing platforms.',
  },
  {
    name: 'Invoice Ninja',
    bestFor: 'Developers and tech-savvy users',
    price: 'Free (open source) / $10/mo Pro',
    highlight: false,
    pros: ['Open source — self-host for free', 'Generous free hosted plan', 'API access'],
    cons: ['Self-hosting requires technical knowledge', 'UI is less polished than competitors', 'Limited customer support on free plan'],
    description: 'Invoice Ninja is the best option for developers who want full control. The open-source version can be self-hosted for free on your own server. The hosted free plan is also generous. However, the learning curve is steeper and the interface is less refined than modern alternatives.',
  },
  {
    name: 'PayPal Business',
    bestFor: 'Businesses already using PayPal',
    price: 'Free (transaction fees apply)',
    highlight: false,
    pros: ['Widely recognized payment brand', 'Instant payment collection', 'No monthly fees'],
    cons: ['High transaction fees (2.9% + fixed fee)', 'Very basic invoicing features', 'No expense tracking or accounting', 'Not suitable as a standalone invoicing solution'],
    description: 'PayPal lets you send basic invoices for free, but it\'s not a real invoicing platform. There\'s no expense tracking, no accounting, and no tax compliance features. Transaction fees are also among the highest. Use it only if your clients strongly prefer PayPal payments.',
  },
];

const faqs = [
  { question: 'What is the best free invoicing software in 2026?', answer: 'Invoicemonk offers the best free invoicing software in 2026 with unlimited invoices, multi-currency support, expense tracking, and accounting on every plan — including the free tier. Unlike Wave (limited to North America) or Zoho Invoice (5-customer cap), Invoicemonk works globally with no hidden restrictions.' },
  { question: 'Is free invoicing software really free?', answer: 'It depends on the tool. Invoicemonk\'s free plan is genuinely free forever with no credit card required. Some tools like Wave show ads or charge for payment processing. Others like Zoho Invoice limit the number of customers. Always check what\'s actually included in the free tier.' },
  { question: 'Can I use free invoicing software for my business?', answer: 'Yes. Free invoicing software is perfectly suitable for freelancers, consultants, and small businesses. Tools like Invoicemonk include professional templates, tax calculations, and PDF downloads that meet the standards of any business. You only need to upgrade when you want advanced features like team access or priority support.' },
  { question: 'What features should I look for in free invoicing software?', answer: 'Essential features: unlimited invoices, professional templates, tax/VAT calculations, PDF download, multi-currency support, and mobile access. Nice-to-have: expense tracking, receipt scanning, recurring invoices, payment reminders, and basic accounting reports.' },
];

export default function BestFreeInvoicingSoftware() {
  return (
    <Layout>
      <SEOHead
        title="Best Free Invoicing Software in 2026 — Top 5 Compared | Invoicemonk"
        description="Compare the best free invoicing software in 2026: Invoicemonk, Wave, Zoho Invoice, Invoice Ninja, and PayPal. Features, limits, and honest recommendations."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Free Invoicing Software', url: '/compare/best-free-invoicing-software' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Free Invoicing Software in 2026</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We tested the top free invoicing tools to find which ones are genuinely free — and which ones aren't worth the hidden costs.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">How We Evaluated</h2>
            <p>We signed up for every free plan, created test invoices, tracked expenses, and pushed each tool to its limits. Our criteria: actual free tier generosity (not just a trial), feature completeness, ease of use, and global availability. We excluded tools that require a credit card to access the "free" tier.</p>
          </div>

          <div className="space-y-8">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                        {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Our Pick</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Best for {tool.bestFor} · {tool.price}</p>
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
            <p><strong>Invoicemonk is the best free invoicing software in 2026</strong> for businesses that need more than basic invoice creation. Its free tier includes features that competitors charge for — multi-currency, expense tracking, and tax compliance across 14+ countries. Wave remains a solid choice for US/Canada-only businesses, and Invoice Ninja appeals to developers who want open-source control.</p>
            <p>The bottom line: if you're a freelancer, consultant, or small business looking for genuinely free invoicing software that works globally, <strong>start with Invoicemonk</strong>.</p>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Related Comparisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/best-invoicing-software" className="text-primary hover:underline">Best Invoicing Software Overall</Link>
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline">Invoicemonk vs Wave</Link>
              <Link to="/compare/invoicemonk-vs-freshbooks" className="text-primary hover:underline">Invoicemonk vs FreshBooks</Link>
              <Link to="/compare/wave-alternatives" className="text-primary hover:underline">Wave Alternatives</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">Try Invoicemonk Free — No Signup Required</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create your first professional invoice in under 5 minutes. Multi-currency, tax-compliant, and genuinely free.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
              <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Create Free Account<ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
