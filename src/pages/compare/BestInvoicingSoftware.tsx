import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Link } from 'react-router-dom';

const tools = [
  { name: 'Invoicemonk', bestFor: 'Freelancers & small businesses globally', price: 'Free tier available', highlight: true, pros: ['Free tier with invoicing & accounting', 'Multi-currency & compliance focus', 'Invoice verification portal', 'Built-in expense tracking'], cons: ['No payroll', 'No inventory management'] },
  { name: 'FreshBooks', bestFor: 'Service businesses in North America', price: 'From $19/mo', highlight: false, pros: ['Built-in time tracking', 'Large integration ecosystem', 'Phone support'], cons: ['No free tier', 'Limited multi-currency on basic plans'] },
  { name: 'Wave', bestFor: 'Solo freelancers in US/Canada', price: 'Free', highlight: false, pros: ['Free invoicing and accounting', 'Receipt scanning'], cons: ['US/Canada only', 'No multi-currency', 'No credit notes'] },
  { name: 'Zoho Invoice', bestFor: 'Teams already in the Zoho ecosystem', price: 'Free tier available', highlight: false, pros: ['Part of Zoho suite', 'Good automation'], cons: ['Complex setup', 'Accounting is separate product'] },
  { name: 'QuickBooks', bestFor: 'Established businesses needing full accounting', price: 'From $30/mo', highlight: false, pros: ['Full accounting & payroll', 'Inventory management', 'CPA ecosystem'], cons: ['Expensive', 'Steep learning curve'] },
];

const faqs = [
  { question: 'What is the best free invoicing software in 2026?', answer: 'Invoicemonk and Wave both offer free invoicing. Invoicemonk works globally with multi-currency support, while Wave is limited to the US and Canada.' },
  { question: 'What invoicing software is best for freelancers?', answer: 'Invoicemonk is ideal for freelancers with its free tier, multi-currency invoicing, automatic reminders, and tax-compliant records.' },
  { question: 'Which is the cheapest invoicing software?', answer: 'Invoicemonk and Wave offer free tiers. For paid plans, Invoicemonk starts lower than FreshBooks ($19/mo) and QuickBooks ($30/mo).' },
];

export default function BestInvoicingSoftware() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in 2026 | Top 5 Compared"
        description="Compare the best invoicing software in 2026: Invoicemonk, FreshBooks, Wave, Zoho Invoice, and QuickBooks. Features, pricing, and recommendations."
        canonical="https://invoicemonk.com/best-invoicing-software"
      />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in 2026</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">We compared the top invoicing tools so you don't have to. Here's our honest ranking.</p>

          <div className="space-y-6">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                        {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Our Pick</span>}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">Best for: {tool.bestFor} · {tool.price}</p>
                    </div>
                  </div>
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

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Detailed comparisons</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/compare/invoicemonk-vs-freshbooks" className="text-primary hover:underline text-sm">vs FreshBooks</Link>
              <Link to="/compare/invoicemonk-vs-wave" className="text-primary hover:underline text-sm">vs Wave</Link>
              <Link to="/compare/invoicemonk-vs-zoho-invoice" className="text-primary hover:underline text-sm">vs Zoho Invoice</Link>
              <Link to="/compare/invoicemonk-vs-quickbooks" className="text-primary hover:underline text-sm">vs QuickBooks</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-8">Frequently asked questions</h2>
          <div className="space-y-6">{faqs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-2">{faq.question}</h3><p className="text-muted-foreground">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-heading-lg font-bold text-white mb-4">Try the #1 pick for free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Start with Invoicemonk's free tier — no credit card required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild><a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Get Started Free<ArrowRight className="ml-2 w-4 h-4" /></a></Button>
        </div>
      </section>
    </Layout>
  );
}
