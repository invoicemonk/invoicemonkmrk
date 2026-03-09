import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Download, Zap, Shield, CheckCircle, BookOpen } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingInvoiceCard,
  FloatingPDFBadge,
  FloatingIcon
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const featureKeys = [
  { key: 'professionalTemplates', icon: FileText },
  { key: 'quickEasy', icon: Zap },
  { key: 'pdfDownload', icon: Download },
  { key: 'complianceReady', icon: Shield },
] as const;

const stepKeys = ['step1', 'step2', 'step3'] as const;
const faqKeys = ['isFree', 'needAccount', 'addLogo', 'moreFeatures'] as const;

const FreeInvoiceGenerator = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/free-invoice-generator'];
  const { t } = useTranslation('freeInvoiceGenerator');

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
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: CheckCircle, text: t('hero.badge') }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description')}
          primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com' }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: '/invoicing', external: false }}
          trustBadge={t('hero.trustBadge')}
          backgroundVariant="dots"
        />
        {/* Floating Elements */}
        <FloatingInvoiceCard 
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingPDFBadge 
          className="absolute bottom-36 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingIcon 
          icon={Zap}
          className="absolute top-52 left-16 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="sm"
        />
      </div>

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

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-heading-lg font-bold text-foreground text-center mb-12">
            {t('steps.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stepKeys.map((key, index) => (
              <div key={key} className="text-center">
                <div className="text-4xl font-bold text-primary/20 mb-4">{String(index + 1).padStart(2, '0')}</div>
                <h3 className="text-heading-sm font-semibold text-foreground mb-2">
                  {t(`steps.${key}.title`)}
                </h3>
                <p className="text-muted-foreground">{t(`steps.${key}.description`)}</p>
              </div>
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
            <li>
              <Link to="/blog/5-essential-elements-of-an-invoice-a-guide-for-small-business-owners" className="text-primary hover:underline">
                {t('resources.essentialElements')}
              </Link>
            </li>
            <li>
              <Link to="/blog/invoice-numbering-best-practices" className="text-primary hover:underline">
                {t('resources.numberingBestPractices')}
              </Link>
            </li>
            <li>
              <Link to="/invoicing" className="text-primary hover:underline">
                {t('resources.fullPlatform')}
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Upgrade CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="max-w-3xl mx-auto bg-primary">
            <CardContent className="p-8 lg:p-12 text-center">
              <h2 className="text-heading-lg font-bold text-white mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                {t('cta.description')}
              </p>
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