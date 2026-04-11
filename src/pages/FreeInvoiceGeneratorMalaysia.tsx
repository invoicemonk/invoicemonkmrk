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

const malaysiaFAQs = [
  { question: 'Is this invoice generator MyInvois compliant?', answer: 'Yes. Invoicemonk generates invoices with all LHDN-required fields: TIN for seller and buyer, SST calculation support, proper invoice formatting, and MYR currency. For full MyInvois API integration (e-invoice submission to LHDN), use the paid plan.' },
  { question: 'Does it support Malaysian SST?', answer: 'Yes. You can apply Sales Tax (5-10%) or Service Tax (8%) per line item. The generator calculates totals automatically and shows SST breakdown on the invoice.' },
  { question: 'Can I add my TIN to the invoice?', answer: 'Yes. Enter your Tax Identification Number (TIN) in the business details section. It appears prominently on the invoice — required for all tax invoices in Malaysia under the MyInvois system.' },
  { question: 'Do I need to create an account?', answer: 'No. The free invoice generator works entirely in your browser. No signup, no data stored on our servers.' },
  { question: 'Can I download as PDF?', answer: 'Yes. Download professional, print-ready invoices as PDFs — no watermarks, no limitations.' },
  { question: 'Is this the best free invoicing tool in Malaysia?', answer: 'Invoicemonk is among the best free invoicing tools for Malaysian businesses in 2026, offering MyInvois-ready fields, SST support, TIN fields, multi-currency for international clients, 6 templates, and free PDF downloads.' },
];

const howToSteps = [
  { name: 'Enter your TIN and business details', text: 'Add your Tax Identification Number (TIN), business name, and address in the "From" section.' },
  { name: 'Add client details', text: 'Enter your client\'s name, TIN (for B2B), and address.' },
  { name: 'Add line items with SST', text: 'List products or services with applicable Sales Tax or Service Tax rates.' },
  { name: 'Download your tax invoice PDF', text: 'Preview and download a professional PDF ready for clients and LHDN records.' },
];

const featureHighlights = [
  { icon: FileText, title: 'MyInvois-Ready Templates', description: '6 professional templates with TIN fields and SST support for MYR.' },
  { icon: Zap, title: 'SST Calculation', description: 'Apply Sales Tax (5-10%) or Service Tax (8%) per line item automatically.' },
  { icon: Download, title: 'Free PDF Download', description: 'Professional invoices as PDFs. No watermarks, no limits.' },
  { icon: Shield, title: 'No Signup Required', description: 'Create invoices immediately. No account needed.' },
];

const FreeInvoiceGeneratorMalaysia = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const { data, totals, updateField, addLineItem, removeLineItem, updateLineItem, handleLogoUpload, removeLogo, formatCurrency, resetInvoice, loadInvoice } = useInvoiceGenerator();
  const { invoices, saveInvoice, deleteInvoice } = useSavedInvoices();

  const handleSave = (d: typeof data) => { saveInvoice(d); toast({ title: 'Invoice saved' }); };
  const handleLoad = (d: typeof data) => { loadInvoice(d); toast({ title: 'Invoice loaded' }); };
  const handleDelete = (id: string) => { deleteInvoice(id); toast({ title: 'Invoice deleted' }); };

  return (
    <Layout>
      <FAQSchema items={malaysiaFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Free Invoice Generator', url: '/free-invoice-generator' }, { name: 'Malaysia', url: '/free-invoice-generator-malaysia' }]} />
      <HowToSchema name="How to Create a MyInvois-Compliant Invoice for Malaysia" description="Create a free, LHDN MyInvois-compliant invoice with TIN and SST in under 5 minutes." steps={howToSteps} totalTime="PT5M" estimatedCost={{ currency: 'MYR', value: '0' }} tool={['Invoicemonk Free Invoice Generator']} />
      <SEOHead title="Free Invoice Generator Malaysia — MyInvois Compliant, SST Support | Invoicemonk" description="Create LHDN MyInvois-compliant invoices with TIN fields and SST calculation. Free invoicing for Malaysian businesses. No signup required." />

      <section className="py-10 lg:py-14 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4"><CheckCircle className="w-3.5 h-3.5" />Free &amp; MyInvois-Ready — No Signup Required</div>
          <h1 className="text-heading-lg font-bold text-foreground mb-3">Free Invoice Generator for Malaysian Businesses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Create professional MyInvois-compliant invoices with TIN, SST, and multi-currency support. No account needed.</p>
          <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> TIN fields</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> SST calculation</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> PDF download</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-primary" /> MYR + multi-currency</span>
          </div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6"><SavedInvoicesPanel invoices={invoices} onSave={handleSave} onLoad={handleLoad} onDelete={handleDelete} currentData={data} /></div>
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">How to Create a MyInvois-Compliant Invoice</h2>
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
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">Why Malaysian Businesses Choose Invoicemonk</h2>
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
          <div className="space-y-6">{malaysiaFAQs.map((faq, i) => (<div key={i}><h3 className="font-semibold text-foreground mb-1">{faq.question}</h3><p className="text-muted-foreground text-sm">{faq.answer}</p></div>))}</div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-6"><BookOpen className="w-5 h-5 text-primary" /><h2 className="text-xl font-semibold text-foreground">Related Resources</h2></div>
          <ul className="space-y-3">
            <li><Link to="/free-invoice-generator" className="text-primary hover:underline">Free Invoice Generator (All Countries)</Link></li>
            <li><Link to="/blog/e-invoicing-malaysia-myinvois-guide" className="text-primary hover:underline">MyInvois Complete Guide</Link></li>
            <li><Link to="/compare/best-invoicing-software-malaysia" className="text-primary hover:underline">Best Invoicing Software Malaysia</Link></li>
            <li><Link to="/invoicing" className="text-primary hover:underline">Invoicemonk — Full Invoicing Platform</Link></li>
          </ul>
        </div>
      </section>

      <section className="py-8 lg:py-12"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><RelatedTools currentHref="/free-invoice-generator-malaysia" /></div></section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">Ready for Full MyInvois Compliance?</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">Upgrade to Invoicemonk for recurring invoices, expense tracking, and LHDN MyInvois API integration.</p>
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

export default FreeInvoiceGeneratorMalaysia;
