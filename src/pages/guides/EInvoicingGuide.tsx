import { Layout } from '@/components/layout/Layout';
import { SEOHead } from '@/components/seo/SEOHead';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Globe, Shield, FileText } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';

const countryGuides = [
  { country: 'Nigeria', system: 'FIRS E-Invoicing', link: '/blog/e-invoicing-nigeria-firs-guide', status: 'Mandatory (phased rollout 2025–2026)' },
  { country: 'India', system: 'GST E-Invoicing (IRP)', link: '/blog/e-invoicing-india-gst-guide', status: 'Mandatory (₹5 crore+ threshold)' },
  { country: 'Kenya', system: 'KRA eTIMS', link: '/blog/e-invoicing-kenya-etims', status: 'Mandatory for VAT-registered businesses' },
  { country: 'Italy', system: 'SDI (Sistema di Interscambio)', link: '/blog/tax-compliant-invoice-it', status: 'Mandatory since 2019' },
  { country: 'Romania', system: 'RO e-Factura / SAF-T', link: '/blog/tax-compliant-invoice-ro', status: 'Mandatory since 2024' },
  { country: 'Hungary', system: 'NAV RTIR', link: '/blog/tax-compliant-invoice-hu', status: 'Real-time reporting mandatory' },
  { country: 'Poland', system: 'KSeF', link: '/blog/tax-compliant-invoice-pl', status: 'Mandatory from 2026' },
];

const faqs = [
  { question: 'What is e-invoicing?', answer: 'E-invoicing (electronic invoicing) is the automated creation, transmission, and processing of invoices in a structured digital format between systems. Unlike emailing a PDF, e-invoicing means invoice data flows directly into tax authority systems for real-time validation, reducing fraud and improving tax collection.' },
  { question: 'Is e-invoicing mandatory?', answer: 'It depends on your country. Over 80 countries have implemented or announced e-invoicing mandates. India, Italy, and Saudi Arabia already require it. Nigeria and Kenya are rolling it out. The EU plans a bloc-wide mandate by 2028. Check your country\'s specific requirements.' },
  { question: 'How is e-invoicing different from emailing a PDF?', answer: 'A PDF invoice is an image — a human can read it, but systems can\'t process it automatically. An e-invoice is structured data (usually XML or JSON) that systems read, validate, and process without human intervention. E-invoicing enables real-time tax reporting, automatic validation, and seamless integration between buyer and seller systems.' },
];

export default function EInvoicingGuide() {
  return (
    <Layout>
      <SEOHead title="What Is E-Invoicing? Complete Guide to Electronic Invoicing (2026)" description="Understand e-invoicing: what it is, how it works, which countries mandate it, and how to comply. Complete guide for small businesses and freelancers." />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Guides', url: '/guides' }, { name: 'E-Invoicing', url: '/guides/e-invoicing' }]} />
      <FAQSchema items={faqs} />

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="flex items-center gap-2 text-sm text-primary mb-4"><Globe className="w-4 h-4" /> Guide</div>
          <h1 className="text-heading-xl font-bold text-foreground mb-4">What Is E-Invoicing?</h1>
          <p className="text-lg text-muted-foreground mb-12">Electronic invoicing is transforming how businesses issue, transmit, and report invoices worldwide. This guide explains what e-invoicing is, why governments mandate it, and how your business can comply.</p>

          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-16">
            <h2 className="text-heading-md font-bold text-foreground">E-Invoicing vs Traditional Invoicing</h2>
            <p>Traditional invoicing involves creating a document (paper or PDF), sending it to your client, and separately reporting the transaction to tax authorities. <strong>E-invoicing automates this entire chain.</strong> Your invoice data is created in a structured format (XML or JSON), validated by a government system in real time, and automatically reported for tax purposes.</p>
            <p>Think of it as the difference between mailing a letter and sending a bank transfer. Both communicate the same information, but the digital version is instant, verifiable, and leaves an automatic audit trail.</p>

            <h2 className="text-heading-md font-bold text-foreground">How E-Invoicing Works</h2>
            <ol>
              <li><strong>Create invoice</strong> in your accounting/invoicing software with all mandatory fields</li>
              <li><strong>Software converts</strong> the invoice to structured data (XML/JSON) in the required national format</li>
              <li><strong>Submit to government platform</strong> — IRP (India), SDI (Italy), FIRS TaxPro-Max (Nigeria), eTIMS (Kenya)</li>
              <li><strong>Government validates</strong> — checks tax IDs, calculations, and format compliance</li>
              <li><strong>Reference number issued</strong> — IRN (India), unique ID (Italy), etc.</li>
              <li><strong>Invoice delivered</strong> to recipient, often through the same government platform</li>
              <li><strong>Tax return auto-populated</strong> — no manual filing needed for reported invoices</li>
            </ol>

            <h2 className="text-heading-md font-bold text-foreground">Benefits for Small Businesses</h2>
            <ul>
              <li><strong>Faster payments</strong> — validated invoices are processed more quickly by recipients</li>
              <li><strong>Reduced errors</strong> — real-time validation catches mistakes before the invoice is sent</li>
              <li><strong>Auto-populated tax returns</strong> — less manual data entry for GST/VAT filing</li>
              <li><strong>Lower compliance costs</strong> — no need for manual reconciliation with tax reports</li>
              <li><strong>Audit readiness</strong> — every invoice is validated and stored in government systems</li>
            </ul>
          </div>

          <h2 className="text-heading-lg font-bold text-foreground mb-8">Country-Specific E-Invoicing Guides</h2>
          <div className="grid gap-4">
            {countryGuides.map((g) => (
              <Link key={g.country} to={g.link}>
                <Card className="hover:border-primary/50 transition-colors">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{g.country} — {g.system}</h3>
                      <p className="text-sm text-muted-foreground">{g.status}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </CardContent>
                </Card>
              </Link>
            ))}
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
          <h2 className="text-heading-lg font-bold text-white mb-4">E-Invoicing Ready Invoices — Free</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">Create compliant invoices with tax IDs, VAT/GST calculations, and professional formatting. No signup required.</p>
          <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
            <Link to="/free-invoice-generator">Try Free Invoice Generator<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
