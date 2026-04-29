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
    bestFor: 'South African freelancers & SMEs needing SARS compliance',
    price: 'Free tier available',
    highlight: true,
    pros: ['SARS-compliant invoice fields', 'VAT at 15% auto-calculated for ZAR', 'Multi-currency (ZAR, USD, GBP, EUR)', 'Tax reference number fields', 'Free invoice generator — no signup'],
    cons: ['No direct SARS eFiling integration', 'No payroll module'],
    description: 'Invoicemonk handles South African invoicing requirements with SARS-compliant fields. When ZAR is selected, it auto-applies 15% VAT and includes tax reference number fields for both seller and buyer. The free plan covers multi-currency invoicing for billing international clients.',
  },
  {
    name: 'Xero',
    bestFor: 'Growing SA businesses wanting full accounting',
    price: 'From R399/mo',
    highlight: false,
    pros: ['Strong SA presence', 'Bank feeds for SA banks', 'VAT201 return support', 'Payroll add-on'],
    cons: ['No free plan', 'Expensive for freelancers', 'Invoice limits on Starter plan', 'Complex for simple invoicing'],
    description: 'Xero has a strong presence in South Africa with local bank feeds and VAT201 return support. However, it\'s expensive for businesses that only need invoicing and limits invoices on the Starter plan.',
  },
  {
    name: 'Wave',
    bestFor: 'Basic free invoicing (limited SA support)',
    price: 'Free',
    highlight: false,
    pros: ['Free invoicing and accounting', 'Clean interface', 'Receipt scanning'],
    cons: ['Payment processing unavailable in SA', 'No SARS compliance features', 'No ZAR-specific VAT defaults', 'No tax reference fields'],
    description: 'Wave is free but has no South Africa-specific features. Payment processing doesn\'t work in SA, there are no SARS compliance fields, and you\'d manually configure 15% VAT every time.',
  },
  {
    name: 'Sage Business Cloud',
    bestFor: 'Traditional South African businesses',
    price: 'From R199/mo',
    highlight: false,
    pros: ['South African company', 'SARS compliance built in', 'Payroll included', 'Strong local support'],
    cons: ['No free plan', 'Dated interface', 'Complex for freelancers', 'Expensive at scale'],
    description: 'Sage is a South African institution with deep SARS integration, including VAT201 returns and IRP5 certificates. It\'s comprehensive but complex and expensive for freelancers or micro-businesses.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for South Africa?', answer: 'Invoicemonk is the best free invoicing software for South African businesses in 2026. It includes SARS-compliant fields, 15% VAT auto-calculation for ZAR, tax reference number fields, and multi-currency support. For full accounting with SARS filing, Sage and Xero are market leaders.' },
  { question: 'What must a South African tax invoice include?', answer: 'A valid SARS tax invoice must include: the word "Tax Invoice", supplier name and VAT number, recipient details, invoice date, description of goods/services, VAT amount, and total amount. Invoicemonk includes all these fields by default.' },
  { question: 'Is e-invoicing mandatory in South Africa?', answer: 'SARS is reviewing e-invoicing mandates but has not yet confirmed a timeline. Currently, invoices can be in any format as long as they contain the required fields. Invoicemonk ensures your invoices meet all current SARS requirements.' },
];

export default function BestInvoicingSoftwareSouthAfrica() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software in South Africa 2026 — SARS Compliant | Top 4 Compared"
        description="Compare the best invoicing software for South African businesses: Invoicemonk, Xero, Wave, and Sage. SARS compliance, VAT 15%, and ZAR support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software South Africa', url: '/compare/best-invoicing-software-south-africa' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in South Africa (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">We compared the top invoicing tools for South African businesses — SARS compliance, 15% VAT handling, ZAR support, and multi-currency billing.</p>

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
              <Link to="/blog/sars-invoice-requirements-south-africa" className="text-primary hover:underline">SARS Invoice Requirements Guide</Link>
              <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Free Invoice Generator South Africa</a>
              <Link to="/compare/wave-alternative-south-africa" className="text-primary hover:underline">Wave Alternative for SA</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">SARS-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create SARS-ready invoices with 15% VAT, tax reference numbers, and multi-currency. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" target="_blank" rel="noopener noreferrer">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
