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

const ukFAQs = [
  { question: 'Is this invoice generator HMRC compliant?', answer: 'Yes. Invoicemonk generates invoices with all HMRC-required fields: VAT registration number for seller and buyer, 20% VAT auto-calculation for GBP, unique sequential invoice numbers, and proper tax invoice formatting. For MTD VAT filing, export your records to compatible software.' },
  { question: 'Does it support UK VAT at 20%?', answer: 'Yes. When GBP is selected, the generator auto-applies 20% standard rate VAT. You can override per line item for reduced rate (5%), zero-rated, or exempt supplies.' },
  { question: 'Can I add my VAT number?', answer: 'Yes. Enter your VAT registration number in the business details section. It appears prominently on the invoice — required for all VAT invoices in the UK.' },
  { question: 'Does it support CIS reverse charge?', answer: 'Yes. For construction industry subcontractors, you can mark invoices as CIS reverse charge. The VAT is shown but noted as payable by the contractor, not the subcontractor.' },
  { question: 'Can I download as PDF?', answer: 'Yes. Download professional, print-ready invoices as PDFs — no watermarks, no limitations.' },
  { question: 'Is this the best free invoicing software in the UK?', answer: 'Invoicemonk is among the best free invoicing tools for UK businesses in 2026, offering HMRC compliance with 20% VAT, VAT number fields, CIS reverse charge, multi-currency support, 6 professional templates, and PDF downloads — all free.' },
];

const howToSteps = [
  { name: 'Enter your VAT number and business details', text: 'Add your VAT registration number, business name, and registered address in the "From" section.' },
  { name: 'Add client details', text: 'Enter your client\'s name, VAT number (for B2B), and address.' },
  { name: 'Add line items with VAT', text: 'List products or services with 20% VAT auto-applied for GBP. Override for reduced or zero-rated items.' },
  { name: 'Download your tax invoice PDF', text: 'Preview and download a professional PDF ready for clients and HMRC records.' },
];

const featureHighlights = [
  { icon: FileText, title: 'HMRC-Compliant Templates', description: '6 professional templates with VAT number fields and 20% VAT for GBP.' },
  { icon: Zap, title: 'Auto VAT at 20%', description: 'GBP auto-applies 20% VAT. Override per item for reduced, zero-rated, or exempt.' },
  { icon: Download, title: 'Free PDF Download', description: 'Professional invoices as PDFs. No watermarks, no limits.' },
  { icon: Shield, title: 'No Signup Required', description: 'Create invoices immediately. No account needed.' },
];

const FreeInvoiceGeneratorUK = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { data, totals, updateField, addLineItem, removeLineItem, updateLineItem, handleLogoUpload, removeLogo, formatCurrency, resetInvoice, loadInvoice } = useInvoiceGenerator();
  const { invoices, saveInvoice, deleteInvoice } = useSavedInvoices();

  const handleSave = (d: typeof data) => { saveInvoice(d); toast({ title: 'Invoice saved' }); };
  const handleLoad = (d: typeof data) => { loadInvoice(d); toast({ title: 'Invoice loaded' }); };
  const handleDelete = (id: string) => { deleteInvoice(id); toast({ title: 'Invoice deleted' }); };

  return (
    <Layout>
      <FAQSchema items={ukFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Free Invoice Generator', url: '/free-invoice-generator' }, { name: 'UK', url: '/free-invoice-generator-uk' }]} />
      <HowToSchema name="How to Create an HMRC-Compliant Invoice for the UK" description="Create a free, HMRC-compliant invoice with VAT number and 20% VAT in under 5 minutes." steps={howToSteps} totalTime="PT5M" estimatedCost={{ currency: 'GBP', value: '0' }} tool={['Invoicemonk Free Invoice Generator']} />
      <SEOHead title="Free Invoice Generator UK — HMRC & MTD Compliant, VAT 20% | No Signup | Invoicemonk" description="Create HMRC-compliant invoices with VAT number fields and 20% VAT auto-calculation. Free invoicing for UK businesses. No signup required." />

      <section className="py-10 lg:py-14 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4"><CheckCircle className="w-3.5 h-3.5" />Free &amp; HMRC-Compliant — No Signup Required</div>
          <h1 className="text-heading-lg font-bold text-foreground mb-3">Free Invoice Generator for UK Businesses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Create professional HMRC-compliant invoices with VAT number, 20% VAT, and multi-currency support. No account needed.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> VAT number fields</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> 20% VAT auto-calculation</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> PDF download</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> GBP + multi-currency</span>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <SavedInvoicesPanel invoices={invoices} onSave={handleSave} onLoad={handleLoad} onDelete={handleDelete} currentData={data} />
          </div>
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <Card><CardContent className="p-5 lg:p-6"><InvoiceForm data={data} updateField={updateField} addLineItem={addLineItem} removeLineItem={removeLineItem} updateLineItem={updateLineItem} handleLogoUpload={handleLogoUpload} removeLogo={removeLogo} /></CardContent></Card>
            <div className="space-y-4 lg:sticky lg:top-4">
              <TemplateSwitcher value={data.template} onChange={v => updateField('template', v)} />
              <InvoicePreview ref={previewRef} data={data} totals={totals} formatCurrency={formatCurrency} />
              <InvoiceActions data={data} totals={totals} formatCurrency={formatCurrency} onReset={resetInvoice} />
            </div>
          </div>
          <div className="mt-8"><UpgradeBanner /></div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">How to Create an HMRC-Compliant Invoice</h2>
          <div className="space-y-6">
            {howToSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">{i + 1}</div>
                <div><h3 className="font-semibold text-foreground mb-1">{step.name}</h3><p className="text-muted-foreground text-sm">{step.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Why UK Businesses Choose Invoicemonk</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {featureHighlights.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="border-border/50 text-center"><CardContent className="p-6"><div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4"><Icon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-foreground mb-2">{title}</h3><p className="text-sm text-muted-foreground">{description}</p></CardContent></Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">{ukFAQs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-1">{faq.question}</h3><p className="text-muted-foreground text-sm">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-6"><BookOpen className="w-5 h-5 text-primary" /><h2 className="text-xl font-semibold text-foreground">Related Resources</h2></div>
          <ul className="space-y-3">
            <li><Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator (All Countries)</Link></li>
            <li><Link to="/blog/e-invoicing-uk-hmrc-mtd-guide" className="text-primary hover:underline">UK HMRC MTD Complete Guide</Link></li>
            <li><Link to="/compare/best-invoicing-software-uk" className="text-primary hover:underline">Best Invoicing Software UK</Link></li>
            <li><Link to="/invoicing" className="text-primary hover:underline">Invoicemonk — Full Invoicing Platform</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-8 lg:py-12"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><RelatedTools currentHref="/free-invoice-generator-uk" /></div></section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">Ready for Full MTD Compliance?</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">Upgrade to Invoicemonk for recurring invoices, expense tracking, and MTD-compatible records.</p>
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

export default FreeInvoiceGeneratorUK;
