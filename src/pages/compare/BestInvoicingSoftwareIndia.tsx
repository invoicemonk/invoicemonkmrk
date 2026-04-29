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
    bestFor: 'Indian freelancers & small businesses',
    price: 'Free tier available',
    highlight: true,
    pros: ['GST-compliant with GSTIN fields', 'CGST/SGST/IGST auto-calculation', 'HSN/SAC code support', '18% GST default for INR', 'Multi-currency for international billing'],
    cons: ['No Tally integration', 'No GSP certification (yet)'],
    description: 'Invoicemonk is the best GST-compliant invoicing tool for Indian businesses. Select INR currency and it auto-applies 18% GST with GSTIN fields, HSN/SAC code support, and per-item CGST/SGST/IGST overrides. The free plan includes multi-currency invoicing — essential for Indian freelancers billing international clients. Six professional templates ensure your invoices look as credible as your work.',
  },
  {
    name: 'Vyapar',
    bestFor: 'Indian SMEs with inventory needs',
    price: 'From ₹3,399/year',
    highlight: false,
    pros: ['Built specifically for India', 'Inventory management', 'GST return filing', 'Tally export', 'GSTIN verification'],
    cons: ['No free plan for full features', 'Basic interface', 'Limited multi-currency', 'Mobile-first — desktop is secondary'],
    description: 'Vyapar is India\'s most popular accounting app for small businesses, especially those dealing with physical goods and inventory. GST return filing and Tally export are strong differentiators. However, the mobile-first approach means the desktop experience is secondary, and multi-currency support is limited.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users',
    price: 'Free (5 customers) / Zoho Books from ₹999/mo',
    highlight: false,
    pros: ['Free tier with GST support', 'Part of the Zoho suite', 'Workflow automation', 'E-invoicing via Zoho Books'],
    cons: ['5-customer limit on free plan', 'Full GST compliance needs Zoho Books', 'Complex setup for beginners'],
    description: 'Zoho Invoice offers free GST invoicing but caps you at 5 customers. For proper e-invoicing, GST return filing, and IRP integration, you need Zoho Books (starting at ₹999/mo). Best for businesses already using Zoho CRM or Zoho Expense.',
  },
  {
    name: 'ClearTax (ClearOne)',
    bestFor: 'Tax-focused Indian businesses',
    price: 'From ₹6,999/year',
    highlight: false,
    pros: ['E-invoicing with IRP integration', 'GST return filing', 'Strong tax compliance', 'Established Indian brand'],
    cons: ['No free plan', 'Primarily a tax filing tool', 'Limited invoicing customization', 'No multi-currency'],
    description: 'ClearTax\'s ClearOne invoicing module integrates directly with the IRP for e-invoicing. It\'s the strongest choice for businesses that prioritize GST return filing and compliance. However, it\'s not a full invoicing platform — the invoicing features are secondary to the tax filing capabilities.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software in India?', answer: 'Invoicemonk is the best invoicing software for Indian businesses in 2026, offering GST compliance with CGST/SGST/IGST auto-calculation, GSTIN fields, HSN/SAC code support, and multi-currency invoicing — all on a free plan. Vyapar is best for inventory-heavy businesses, and ClearTax for tax-filing-focused workflows.' },
  { question: 'Do I need GST-compliant invoicing software?', answer: 'Yes, if you\'re GST-registered. All GST invoices must include GSTIN, HSN/SAC codes, correct CGST/SGST/IGST split, and other mandatory fields. Using compliant software ensures accuracy and makes GSTR-1 filing easier.' },
  { question: 'Is there free invoicing software for India?', answer: 'Yes. Invoicemonk offers a free plan with GST-compliant invoicing, GSTIN fields, HSN/SAC code support, and CGST/SGST/IGST calculations. Zoho Invoice also has a free tier but limits you to 5 customers.' },
];

export default function BestInvoicingSoftwareIndia() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in India 2026 — GST Compliant | Top 4 Compared"
        description="Compare the best GST invoicing software for Indian businesses: Invoicemonk, Vyapar, Zoho Invoice, and ClearTax. CGST/SGST/IGST, HSN codes, and e-invoicing compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software India', url: '/compare/best-invoicing-software-india' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in India (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">GST compliance is mandatory. We compared the top invoicing tools for Indian businesses — CGST/SGST/IGST, HSN codes, and e-invoicing support.</p>

          <div className="space-y-8 mt-12">
            {tools.map((tool, i) => (
              <Card key={i} className={tool.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border/50'}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <h2 className="text-lg font-bold text-foreground">{i + 1}. {tool.name}</h2>
                    {tool.highlight && <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Our Pick</span>}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Best for {tool.bestFor} · {tool.price}</p>
                  <p className="text-muted-foreground text-sm mb-4">{tool.description}</p>
                  <div className="grid sm:grid-cols-2 gap-4">
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
            <p className="text-muted-foreground mb-4">Related Content</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/e-invoicing-india-gst-guide" className="text-primary hover:underline">GST E-Invoicing Complete Guide</Link>
              <Link to="/blog/india-cgst-sgst-igst-explained" className="text-primary hover:underline">CGST, SGST & IGST Explained</Link>
              <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Free GST Invoice Generator</a>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">GST-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create GST invoices with GSTIN, HSN codes, and CGST/SGST/IGST — no signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" target="_blank" rel="noopener noreferrer">Try Free GST Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
