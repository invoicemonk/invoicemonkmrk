import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Download, Zap, Shield, CheckCircle, BookOpen } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';
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

const featureKeys = [
  { key: 'professionalTemplates', icon: FileText },
  { key: 'quickEasy', icon: Zap },
  { key: 'pdfDownload', icon: Download },
  { key: 'complianceReady', icon: Shield },
] as const;

const faqKeys = ['isFree', 'needAccount', 'addLogo', 'moreFeatures'] as const;

const FreeInvoiceGenerator = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/free-invoice-generator'];
  const { t } = useTranslation('freeInvoiceGenerator');
  const previewRef = useRef<HTMLDivElement>(null);

  const {
    data, totals, updateField, addLineItem, removeLineItem,
    updateLineItem, handleLogoUpload, removeLogo, formatCurrency, resetInvoice, loadInvoice,
  } = useInvoiceGenerator();

  const { invoices, saveInvoice, deleteInvoice } = useSavedInvoices();

  const handleSave = (d: typeof data) => {
    saveInvoice(d);
    toast({ title: t('form.invoiceSaved') });
  };

  const handleLoad = (d: typeof data) => {
    loadInvoice(d);
    toast({ title: t('form.invoiceLoaded') });
  };

  const handleDelete = (id: string) => {
    deleteInvoice(id);
    toast({ title: t('form.invoiceDeleted') });
  };

  const freeGeneratorFAQs = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`),
  }));

  return (
    <Layout>
      <FAQSchema items={freeGeneratorFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Tools', url: '/free-invoice-generator' }, { name: 'Free Invoice Generator', url: '/free-invoice-generator' }]} />
      <SEOHead
        title={seo?.getTitle(locale) || 'Free Invoice Generator | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Create professional invoices in minutes. No signup required to get started.'}
      />

      {/* Compact Hero */}
      <section className="py-10 lg:py-14 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1 mb-4">
            <CheckCircle className="w-3.5 h-3.5" />
            {t('hero.badge')}
          </div>
          <h1 className="text-heading-lg font-bold text-foreground mb-2">
            {t('hero.title')}
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('hero.description')}
          </p>
          <p className="text-xs text-muted-foreground mt-3">{t('hero.trustBadge')}</p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Saved Invoices Panel */}
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
            {/* Form */}
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

            {/* Preview + Actions */}
            <div className="space-y-4 lg:sticky lg:top-4">
              <TemplateSwitcher value={data.template} onChange={v => updateField('template', v)} />
              <InvoicePreview ref={previewRef} data={data} totals={totals} formatCurrency={formatCurrency} />
              <InvoiceActions data={data} totals={totals} formatCurrency={formatCurrency} onReset={resetInvoice} />
            </div>
          </div>

          {/* Upgrade Banner */}
          <div className="mt-8">
            <UpgradeBanner />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-10">
            {t('faqs.title')}
          </h2>
          <div className="space-y-6">
            {freeGeneratorFAQs.map((faq, i) => (
              <div key={i}>
                <h3 className="font-semibold text-foreground mb-1">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            {t('features.title')}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {featureKeys.map(({ key, icon: Icon }) => (
              <Card key={key} className="border-border/50 text-center">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{t(`features.${key}.title`)}</h3>
                  <p className="text-sm text-muted-foreground">{t(`features.${key}.description`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t('resources.title')}</h2>
          </div>
          <ul className="space-y-3">
            <li><Link to="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners" className="text-primary hover:underline">{t('resources.essentialElements')}</Link></li>
            <li><Link to="/blog/invoice-numbering-best-practices" className="text-primary hover:underline">{t('resources.numberingBestPractices')}</Link></li>
            <li><Link to="/invoicing" className="text-primary hover:underline">{t('resources.fullPlatform')}</Link></li>
          </ul>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">{t('cta.title')}</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">{t('cta.description')}</p>
              <Button size="lg" className="bg-white hover:bg-white/90 text-black" asChild>
                <a href="https://app.invoicemonk.com/signup" target="_blank" rel="noopener noreferrer">
                  {t('cta.button')}
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

export default FreeInvoiceGenerator;
