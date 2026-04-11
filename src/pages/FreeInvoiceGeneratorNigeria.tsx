import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, FileText, Download, Shield, Zap, BookOpen } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { RelatedTools } from '@/components/tools/RelatedTools';
import { useRef } from 'react';
import { InvoiceForm } from '@/components/invoice-generator/InvoiceForm';
import { InvoicePreview } from '@/components/invoice-generator/InvoicePreview';
import { InvoiceActions } from '@/components/invoice-generator/InvoiceActions';
import { UpgradeBanner } from '@/components/invoice-generator/UpgradeBanner';
import { useInvoiceGenerator } from '@/components/invoice-generator/useInvoiceGenerator';
import { TemplateSwitcher } from '@/components/invoice-generator/TemplateSwitcher';
import { SavedInvoicesPanel } from '@/components/invoice-generator/SavedInvoicesPanel';
import { useSavedInvoices } from '@/components/invoice-generator/useSavedInvoices';
import { toast } from '@/hooks/use-toast';

const nigeriaFAQs = [
  { question: 'Is this free invoice generator FIRS compliant?', answer: 'Yes. Invoicemonk generates invoices with all FIRS-required fields: TIN (Tax Identification Number) for seller and buyer, 7.5% VAT auto-calculation when NGN is selected, invoice reference numbers, and proper formatting compatible with TaxPro-Max submissions.' },
  { question: 'Does it support Nigerian VAT at 7.5%?', answer: 'Yes. When you select NGN as the currency, the generator auto-applies 7.5% VAT. You can override the rate per line item if some items are VAT-exempt or have different rates.' },
  { question: 'Can I add my TIN to the invoice?', answer: 'Yes. Enter your Tax Identification Number (TIN) in the business details section. It will appear prominently on the invoice, which is required for all tax invoices in Nigeria.' },
  { question: 'Do I need to create an account?', answer: 'No. The free invoice generator works entirely in your browser with no signup, no account, and no data stored on our servers.' },
  { question: 'Can I download the invoice as a PDF?', answer: 'Yes. Click "Download PDF" to get a professional, print-ready invoice that you can email to clients or keep for your FIRS records.' },
  { question: 'Is this the best free invoicing software in Nigeria?', answer: 'Invoicemonk is among the best free invoicing tools for Nigerian businesses in 2026. It offers FIRS compliance with 7.5% VAT, TIN fields, multi-currency support for billing international clients, 6 professional templates, and PDF downloads — all free.' },
];

const howToSteps = [
  { name: 'Enter your TIN and business details', text: 'Add your Tax Identification Number, business name, and address in the "From" section.' },
  { name: 'Add your client\'s details', text: 'Enter your client\'s name, TIN (for B2B invoices), and address in the "Bill To" section.' },
  { name: 'Add line items with VAT', text: 'List your products or services with quantities, rates, and applicable VAT. The calculator handles 7.5% VAT automatically for NGN.' },
  { name: 'Download your FIRS-compliant PDF', text: 'Preview your invoice, then download as a professional PDF ready to send to your client.' },
];

const featureHighlights = [
  { icon: FileText, title: 'FIRS-Compliant Templates', description: '6 professional templates with TIN fields and 7.5% VAT auto-calculation for NGN.' },
  { icon: Zap, title: 'Auto VAT at 7.5%', description: 'NGN currency auto-applies 7.5% VAT. Override per line item for different rates.' },
  { icon: Download, title: 'Free PDF Download', description: 'Download professional invoices as PDFs. No watermarks, no limitations.' },
  { icon: Shield, title: 'No Signup Required', description: 'Start creating invoices immediately. No account, no credit card, no data stored on our servers.' },
];

const FreeInvoiceGeneratorNigeria = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { data, totals, updateField, addLineItem, removeLineItem, updateLineItem, handleLogoUpload, removeLogo, formatCurrency, resetInvoice, loadInvoice } = useInvoiceGenerator();
  const { invoices, saveInvoice, deleteInvoice } = useSavedInvoices();

  const handleSave = (d: typeof data) => { saveInvoice(d); toast({ title: 'Invoice saved' }); };
  const handleLoad = (d: typeof data) => { loadInvoice(d); toast({ title: 'Invoice loaded' }); };
  const handleDelete = (id: string) => { deleteInvoice(id); toast({ title: 'Invoice deleted' }); };

  return (
    <Layout>
      <FAQSchema items={nigeriaFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Free Invoice Generator', url: '/free-invoice-generator' }, { name: 'Nigeria', url: '/free-invoice-generator-nigeria' }]} />
      <HowToSchema name="How to Create a FIRS-Compliant Invoice for Nigeria" description="Create a free, FIRS-compliant invoice with TIN and 7.5% VAT in under 5 minutes." steps={howToSteps} totalTime="PT5M" estimatedCost={{ currency: 'NGN', value: '0' }} tool={['Invoicemonk Free Invoice Generator']} />
      <SEOHead title="Free Invoice Generator Nigeria — FIRS Compliant, VAT 7.5% | No Signup | Invoicemonk" description="Create FIRS-compliant invoices with TIN fields and 7.5% VAT auto-calculation. Free invoicing software for Nigerian businesses. No signup required." />

      <section className="py-10 lg:py-14 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4"><CheckCircle className="w-3.5 h-3.5" />Free &amp; FIRS-Compliant — No Signup Required</div>
          <h1 className="text-heading-lg font-bold text-foreground mb-3">Free Invoice Generator for Nigerian Businesses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Create professional FIRS-compliant invoices with TIN, 7.5% VAT auto-calculation, and multi-currency support. No account needed.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> TIN fields</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> 7.5% VAT auto-calculation</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> PDF download</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> NGN + multi-currency</span>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SavedInvoicesPanel
              invoices={invoices}
              onSave={handleSave}
              onLoad={handleLoad}
              onDelete={handleDelete}
              currentData={data}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card>
              <CardContent className="p-5 lg:p-6">
                <InvoiceForm
                  data={data}
                  updateField={updateField}
                  addLineItem={addLineItem}
                  removeLineItem={removeLineItem}
                  updateLineItem={updateLineItem}
                  handleLogoUpload={handleLogoUpload}
                  removeLogo={removeLogo}
                />
              </CardContent>
            </Card>

            <div className="space-y-4 lg:sticky lg:top-4">
              <TemplateSwitcher value={data.template} onChange={v => updateField('template', v)} />
              <InvoicePreview ref={previewRef} data={data} totals={totals} formatCurrency={formatCurrency} />
              <InvoiceActions data={data} totals={totals} formatCurrency={formatCurrency} onReset={resetInvoice} />
            </div>
          </div>

          <div className="mt-8">
            <UpgradeBanner />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">
            How to Create a FIRS-Compliant Invoice
          </h2>
          <div className="space-y-6">
            {howToSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.name}</h3>
                  <p className="text-muted-foreground text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Why Nigerian Businesses Choose Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {featureHighlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><Icon className="w-6 h-6 text-primary" /></div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{nigeriaFAQs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-1">{faq.question}</h3><p className="text-muted-foreground text-sm">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Related Resources</h2>
          </div>
          <ul className="space-y-3">
            <li><Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator (All Countries)</Link></li>
            <li><Link to="/blog/firs-invoice-requirements-nigeria" className="text-primary hover:underline">FIRS Invoice Requirements for Nigeria</Link></li>
            <li><Link to="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners" className="text-primary hover:underline">5 Essential Elements of an Invoice</Link></li>
            <li><Link to="/invoicing" className="text-primary hover:underline">Invoicemonk — Full Invoicing Platform</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <RelatedTools currentHref="/free-invoice-generator-nigeria" />
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">Ready for Full FIRS Compliance?</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">Upgrade to Invoicemonk for recurring invoices, expense tracking, and automatic FIRS reporting.</p>
              <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">Create Free Account<ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default FreeInvoiceGeneratorNigeria;
