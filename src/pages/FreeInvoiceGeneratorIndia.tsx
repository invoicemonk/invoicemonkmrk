import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, FileText, Download, Shield, Zap, BookOpen } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
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

const indiaFAQs = [
  {
    question: 'Is this a free alternative to atoinvoice.com for India?',
    answer: 'Yes. Invoicemonk\'s free invoice generator is a comprehensive atoinvoice alternative — create unlimited GST-compliant invoices with GSTIN, HSN/SAC codes, and CGST/SGST/IGST breakdowns. No signup or credit card required.',
  },
  {
    question: 'Does it support CGST, SGST, and IGST?',
    answer: 'Yes. You can apply CGST + SGST for intra-state transactions or IGST for inter-state transactions. The generator automatically calculates the correct tax amounts and displays a clear breakdown on the invoice.',
  },
  {
    question: 'Can I add my GSTIN to the invoice?',
    answer: 'Yes. Enter your GST Identification Number (GSTIN) in the business details section. It will appear prominently on the invoice header, which is required for all GST-registered businesses issuing tax invoices in India.',
  },
  {
    question: 'Does it support HSN and SAC codes?',
    answer: 'Yes. You can add HSN (Harmonized System of Nomenclature) codes for goods or SAC (Services Accounting Code) for services in the line item descriptions. This is mandatory for businesses with turnover above ₹5 crore.',
  },
  {
    question: 'Can I set CGST and SGST separately on each item?',
    answer: 'Yes. Each line item has its own tax rate field, so you can apply different rates to different items on the same invoice. For intra-state transactions, set CGST + SGST rates per item. For inter-state, set IGST. The per-item tax override makes mixed-rate invoices easy — no need for separate invoices.',
  },
  {
    question: 'Do I need to create an account?',
    answer: 'No. The free invoice generator works entirely in your browser with no signup, no account, and no data stored on our servers. Your invoice data stays on your device.',
  },
  {
    question: 'Can I download the invoice as a PDF?',
    answer: 'Yes. Once you\'ve filled in your details, click "Download PDF" to get a professional, print-ready GST invoice that you can email to clients or keep for your tax records.',
  },
  {
    question: 'Is this the best free invoicing software in India?',
    answer: 'Invoicemonk is among the best free invoicing tools for Indian businesses in 2026. It offers full GST compliance with auto-labeled GSTIN fields when INR is selected, per-item tax rate overrides, 18% GST default, 6 professional templates, multi-currency support, and PDF downloads — all free.',
  },
];

const howToSteps = [
  { name: 'Enter your GSTIN and business details', text: 'Add your GST Identification Number, business name, and contact details in the "From" section. This information appears on every GST invoice.' },
  { name: 'Add your client\'s details and GSTIN', text: 'Enter your client\'s name, GSTIN (for B2B invoices), and address in the "Bill To" section.' },
  { name: 'Add line items with HSN codes and GST', text: 'List your products or services with quantities, rates, HSN/SAC codes, and applicable GST rates. The calculator handles CGST/SGST/IGST computation automatically.' },
  { name: 'Download your GST-compliant PDF', text: 'Preview your invoice, then download it as a professional PDF ready to send to your client and keep for GST filing.' },
];

const featureHighlights = [
  { icon: FileText, title: 'GST-Compliant Templates', description: 'Choose from 6 professional templates with GSTIN (auto-labeled when INR selected), HSN/SAC codes, and CGST/SGST/IGST breakdowns.' },
  { icon: Zap, title: 'Auto GST at 18%', description: 'INR currency auto-applies 18% GST default. Override per line item for CGST + SGST splits or mixed rates.' },
  { icon: Download, title: 'Free PDF Download', description: 'Download professional GST invoices as PDFs. No watermarks, no limitations, ready for clients and tax records.' },
  { icon: Shield, title: 'No Signup Required', description: 'Start creating invoices immediately. No account, no credit card, no data stored on our servers.' },
];

const FreeInvoiceGeneratorIndia = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/free-invoice-generator-india'];
  const previewRef = useRef<HTMLDivElement>(null);

  const {
    data, totals, updateField, addLineItem, removeLineItem,
    updateLineItem, handleLogoUpload, removeLogo, formatCurrency, resetInvoice, loadInvoice,
  } = useInvoiceGenerator();

  const { invoices, saveInvoice, deleteInvoice } = useSavedInvoices();

  const handleSave = (d: typeof data) => {
    saveInvoice(d);
    toast({ title: 'Invoice saved' });
  };

  const handleLoad = (d: typeof data) => {
    loadInvoice(d);
    toast({ title: 'Invoice loaded' });
  };

  const handleDelete = (id: string) => {
    deleteInvoice(id);
    toast({ title: 'Invoice deleted' });
  };

  return (
    <Layout>
      <FAQSchema items={indiaFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Free Invoice Generator', url: '/free-invoice-generator' },
        { name: 'India', url: '/free-invoice-generator-india' },
      ]} />
      <HowToSchema
        name="How to Create a GST-Compliant Invoice for India"
        description="Create a free, GST-compliant invoice with GSTIN, HSN codes, and CGST/SGST/IGST breakdowns in under 5 minutes."
        steps={howToSteps}
        totalTime="PT5M"
        estimatedCost={{ currency: 'INR', value: '0' }}
        tool={['Invoicemonk Free Invoice Generator']}
      />
      <SEOHead
        title={seo?.getTitle(locale) || 'Free GST Invoice Generator India — CGST, SGST, IGST | No Signup | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Create GST-compliant invoices with GSTIN, HSN codes, and CGST/SGST/IGST calculations. Free atoinvoice alternative for Indian businesses. No signup required.'}
      />

      {/* Hero */}
      <section className="py-10 lg:py-14 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            Free &amp; GST-Compliant — No Signup Required
          </div>
          <h1 className="text-heading-lg font-bold text-foreground mb-3">
            Free GST Invoice Generator for Indian Businesses
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Create professional GST invoices with GSTIN, HSN/SAC codes, and automatic CGST/SGST/IGST calculations.
            The free atoinvoice alternative — no account needed, works instantly in your browser.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> GSTIN &amp; HSN fields</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> CGST/SGST/IGST auto-calculation</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> PDF download</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> INR currency</span>
          </div>
        </div>
      </section>

      {/* Generator */}
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

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">
            How to Create a GST-Compliant Invoice
          </h2>
          <div className="space-y-6">
            {howToSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{step.name}</h3>
                  <p className="text-muted-foreground text-sm">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            Built for Indian GST Invoices
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {featureHighlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {indiaFAQs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-1">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">Related Resources</h2>
          </div>
          <ul className="space-y-3">
            <li><Link to="/compare/invoicemonk-vs-atoinvoice" className="text-primary hover:underline">Invoicemonk vs Atoinvoice — Full Comparison</Link></li>
            <li><Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator (All Countries)</Link></li>
            <li><Link to="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners" className="text-primary hover:underline">5 Essential Elements of an Invoice</Link></li>
            <li><Link to="/invoicing" className="text-primary hover:underline">Invoicemonk — Full Invoicing Platform</Link></li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">Need More Than a Free Generator?</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                Automate recurring invoices, track expenses, manage GST filing, and get paid faster with Invoicemonk's full platform — built for Indian businesses.
              </p>
              <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default FreeInvoiceGeneratorIndia;