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
    bestFor: 'Saudi freelancers & SMEs needing ZATCA Fatoorah compliance',
    price: 'Free tier available',
    highlight: true,
    pros: ['ZATCA Fatoorah-compliant fields', 'SAR + multi-currency invoicing', 'VAT at 15% auto-calculated', 'QR code generation for e-invoices', 'Free invoice generator — no signup'],
    cons: ['No direct ZATCA API integration (yet)', 'No Arabic UI (English only)'],
    description: 'Invoicemonk generates Fatoorah-compliant invoices with all ZATCA-required fields: seller and buyer VAT registration numbers, 15% VAT auto-calculation for SAR, QR codes containing the mandatory five fields (seller name, VAT number, timestamp, total, VAT amount), and cryptographic stamp support. The free plan includes multi-currency invoicing for billing international clients.',
  },
  {
    name: 'Qoyod',
    bestFor: 'Saudi businesses wanting Arabic-first accounting',
    price: 'From SAR 149/mo',
    highlight: false,
    pros: ['Arabic interface', 'ZATCA Phase 2 certified', 'Full accounting suite', 'HR and payroll features'],
    cons: ['No free plan', 'Expensive for simple invoicing', 'Limited multi-currency', 'Saudi-only — no global compliance'],
    description: 'Qoyod is a Saudi-built accounting platform with full ZATCA Phase 2 certification and Arabic-first design. It\'s comprehensive but expensive — starting at SAR 149/month with no free tier. Best for established businesses needing full ERP features.',
  },
  {
    name: 'Wafeq',
    bestFor: 'GCC businesses needing regional compliance',
    price: 'From SAR 99/mo',
    highlight: false,
    pros: ['ZATCA Phase 2 integration', 'Arabic + English', 'VAT return preparation', 'Bank feeds'],
    cons: ['No free plan', 'Limited template customisation', 'GCC-focused — limited global features', 'Add-ons increase cost'],
    description: 'Wafeq is designed for GCC markets with ZATCA integration and bilingual (Arabic/English) support. It handles VAT returns and bank reconciliation but starts at SAR 99/month with no free invoicing option.',
  },
  {
    name: 'Zoho Invoice',
    bestFor: 'Zoho ecosystem users in Saudi Arabia',
    price: 'Free (5 customers)',
    highlight: false,
    pros: ['Free tier available', 'Professional templates', 'Multi-currency on paid plans'],
    cons: ['5-customer limit on free plan', 'No ZATCA-specific features', 'No Arabic invoice templates', 'No QR code for Saudi compliance'],
    description: 'Zoho Invoice offers a free tier but caps you at 5 customers. It lacks Saudi-specific ZATCA features — no QR codes, no Fatoorah compliance, and no Arabic invoice templates. You\'d need to configure everything manually.',
  },
];

const faqs = [
  { question: 'What is the best invoicing software for Saudi Arabia?', answer: 'Invoicemonk is among the best invoicing tools for Saudi businesses in 2026. It includes ZATCA Fatoorah-compliant fields, 15% VAT auto-calculation for SAR, QR code generation, and multi-currency invoicing — all on a free plan.' },
  { question: 'Is ZATCA e-invoicing mandatory in Saudi Arabia?', answer: 'Yes. ZATCA e-invoicing (Fatoorah) Phase 1 (generation) has been mandatory since December 2021. Phase 2 (integration) is rolling out in waves — businesses receive notification from ZATCA at least 6 months before their compliance deadline.' },
  { question: 'What are the ZATCA QR code requirements?', answer: 'ZATCA-compliant QR codes must contain five fields: seller name, VAT registration number, invoice timestamp, invoice total (with VAT), and VAT amount. For Phase 2, the QR code must also include a cryptographic stamp (CSID) from ZATCA\'s systems.' },
];

export default function BestInvoicingSoftwareSaudiArabia() {
  return (
    <Layout>
      <SEOHead
        title="Best Invoicing Software Saudi Arabia 2026 — ZATCA Compliant | Top 4"
        description="Compare the best invoicing software for Saudi businesses: Invoicemonk, Qoyod, Wafeq, and Zoho. ZATCA Fatoorah compliance, VAT, and QR code support compared."
      />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Compare', url: '/best-invoicing-software' },
        { name: 'Best Invoicing Software Saudi Arabia', url: '/compare/best-invoicing-software-saudi-arabia' },
      ]} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-heading-xl font-bold text-foreground text-center mb-4">Best Invoicing Software in Saudi Arabia (2026)</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">ZATCA Fatoorah e-invoicing is mandatory. We compared the top tools for Saudi businesses — Phase 2 compliance, VAT, and QR code support.</p>

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
              <Link to="/blog/e-invoicing-saudi-zatca-fatoorah" className="text-primary hover:underline">ZATCA Fatoorah Complete Guide</Link>
              <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Free Invoice Generator</a>
              <Link to="/guides/e-invoicing-mandates" className="text-primary hover:underline">E-Invoicing Mandates by Country</Link>
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
          <h2 className="text-heading-lg font-bold text-white mb-4">ZATCA-Compliant Invoicing — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create Fatoorah-ready invoices with 15% VAT, QR codes, and multi-currency. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <a href="https://app.invoicemonk.com/signup?utm_source=compare&utm_medium=cta&utm_campaign=compare_to_signup" target="_blank" rel="noopener noreferrer">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></a>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
