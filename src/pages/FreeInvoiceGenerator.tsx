import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Download, Zap, Shield, CheckCircle, BookOpen, Globe } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { HowToSchema } from '@/components/seo/HowToSchema';
import { SoftwareApplicationSchema } from '@/components/seo/SoftwareApplicationSchema';
import { WebPageSchema } from '@/components/seo/WebPageSchema';
import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
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

const faqKeys = ['isFree', 'needAccount', 'addLogo', 'moreFeatures', 'howToCreate', 'bestGenerator', 'freePdfDownload'] as const;

const GENERATOR_SCHEMA_ID = 'https://invoicemonk.com/free-invoice-generator#software';

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

  const howToSteps = [
    { name: t('steps.step1.title'), text: t('steps.step1.description') },
    { name: t('steps.step2.title'), text: t('steps.step2.description') },
    { name: t('steps.step3.title'), text: t('steps.step3.description') },
  ];

  // Entity mentions for semantic SEO (Gap 2)
  const entityMentionsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://invoicemonk.com/free-invoice-generator#webpage",
    "name": "Free Invoice Generator Online",
    "description": "Create professional invoices for free — no signup, no hidden fees. Download as PDF instantly.",
    "url": "https://invoicemonk.com/en/free-invoice-generator",
    "dateModified": "2026-03-10",
    "mainEntity": { "@id": GENERATOR_SCHEMA_ID },
    "isPartOf": { "@id": "https://invoicemonk.com/#website" },
    "publisher": { "@id": "https://invoicemonk.com/#organization" },
    "mentions": [
      { "@type": "Thing", "name": "Invoice", "sameAs": "https://en.wikipedia.org/wiki/Invoice" },
      { "@type": "Thing", "name": "PDF", "sameAs": "https://en.wikipedia.org/wiki/PDF" },
      { "@type": "Thing", "name": "Freelancer", "sameAs": "https://en.wikipedia.org/wiki/Freelancer" },
      { "@type": "Thing", "name": "Small business", "sameAs": "https://en.wikipedia.org/wiki/Small_business" },
      { "@type": "Thing", "name": "Value-added tax", "sameAs": "https://en.wikipedia.org/wiki/Value-added_tax" }
    ]
  };

  return (
    <Layout>
      <FAQSchema items={freeGeneratorFAQs} />
      {/* Gap 3: Fixed breadcrumb hierarchy — links to /invoicing pillar */}
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Invoicing', url: '/invoicing' },
        { name: 'Free Invoice Generator', url: '/free-invoice-generator' }
      ]} />
      <HowToSchema
        name="How to Create a Free Invoice Online"
        description="Create a professional invoice for free in under 2 minutes using the Invoicemonk free invoice generator."
        steps={howToSteps}
        totalTime="PT2M"
        estimatedCost={{ currency: 'USD', value: '0' }}
        tool={['Web browser']}
      />
      {/* Gap 8: Distinct @id for the free generator */}
      <SoftwareApplicationSchema
        name="Invoicemonk Free Invoice Generator"
        description="Free online invoice generator — create professional invoices, add your logo, and download as PDF. No signup required."
        schemaId={GENERATOR_SCHEMA_ID}
      />
      {/* Gap 9: WebPage schema with mainEntity + Gap 2: Entity mentions + Gap 6: dateModified */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(entityMentionsSchema)}
        </script>
      </Helmet>
      <SEOHead
        title={seo?.getTitle(locale) || 'Free Invoice Generator Online — Create & Download PDF | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Create professional invoices for free in under 2 minutes. No signup required. Download as PDF, add your logo, choose templates.'}
        article={{
          publishedTime: '2025-01-15',
          modifiedTime: '2026-03-10',
          author: 'Invoicemonk',
          section: 'Tools',
        }}
      />

      {/* Compact Hero */}
      <section className="py-8 lg:py-14 bg-muted/30">
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

      {/* SEO Intro Paragraph — Gap 4: Contextual internal links woven into content */}
      <section className="py-4 lg:py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <p className="text-sm text-muted-foreground leading-relaxed text-center">
            {t('seoIntro')}{' '}
            <Link to="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners" className="text-primary hover:underline">
              {t('seoIntroLinks.essentialElements')}
            </Link>{' '}
            {t('seoIntroLinks.connector')}{' '}
            <Link to="/blog/small-business-tax-compliance-guide" className="text-primary hover:underline">
              {t('seoIntroLinks.taxCompliance')}
            </Link>.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-6 lg:py-12">
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

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            {/* Form */}
            <Card>
              <CardContent className="p-4 lg:p-6">
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

      {/* FAQ — Gap 7: Enriched with semantic keywords in locale files */}
      <section className="py-12 lg:py-24 bg-muted/30">
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
      <section className="py-12 lg:py-24">
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

      {/* Gap 5: Country-Specific Generators */}
      <section className="py-12 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <h2 className="text-xl font-semibold text-foreground">{t('countryGenerators.title')}</h2>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{t('countryGenerators.description')}</p>
          <div className="grid sm:grid-cols-2 gap-3">
            <Link to="/free-invoice-generator-australia" className="flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors">
              <span className="text-lg">🇦🇺</span>
              <span className="text-sm font-medium text-foreground">{t('countryGenerators.australia')}</span>
            </Link>
            <Link to="/free-invoice-generator-india" className="flex items-center gap-2 p-3 rounded-lg border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-colors">
              <span className="text-lg">🇮🇳</span>
              <span className="text-sm font-medium text-foreground">{t('countryGenerators.india')}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 lg:py-24">
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
      <section className="py-12 lg:py-24">
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