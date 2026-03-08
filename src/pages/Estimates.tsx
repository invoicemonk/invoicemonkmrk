import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { FileCheck, ArrowRight, FileText, CheckCircle, RefreshCw, TrendingUp, MessageSquare, BarChart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

const featureIcons = [FileText, CheckCircle, RefreshCw];
const conversionIcons = [TrendingUp, MessageSquare, BarChart];

const Estimates = () => {
  const { t } = useTranslation('estimates');
  const { formatCurrency } = useLocale();

  const renderAccent = (key: string): ReactNode => {
    const text = t(key);
    const match = text.match(/(.*)<accent>(.*?)<\/accent>(.*)/);
    if (!match) return <>{text}</>;
    return <>{match[1]}<span className="font-serif italic text-primary">{match[2]}</span>{match[3]}</>;
  };

  const lineItems = (t('mockup.items', { returnObjects: true }) as { item: string; qty: number; price: number }[]);
  const estimateTotal = lineItems.reduce((sum, line) => sum + line.price, 0);

  const seoFaqs = t('seoFaqs', { returnObjects: true }) as { question: string; answer: string }[];
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const bannerFeatures = t('banner.features', { returnObjects: true }) as string[];
  const featureBlocks = (t('features.blocks', { returnObjects: true }) as { title: string; description: string }[]).map((b, i) => ({ ...b, icon: featureIcons[i] }));
  const tabItems = t('tabs.items', { returnObjects: true }) as { label: string; title: string; description: string }[];
  const howSteps = (t('howItWorks.steps', { returnObjects: true }) as { title: string; description: string }[]).map((s, i) => ({ ...s, number: i + 1 }));
  const convFeatures = (t('conversion.features', { returnObjects: true }) as { title: string; description: string }[]).map((f, i) => ({ ...f, icon: conversionIcons[i] }));

  return (
    <Layout>
      <FAQSchema items={[...seoFaqs, ...faqItems]} />
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <ServiceSchema
        serviceName={t('seo.serviceName')}
        serviceType={t('seo.serviceType')}
        description={t('seo.serviceDescription')}
        url="https://invoicemonk.com/estimates"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-orange/10 text-wave-orange mb-6">
                <span className="text-body-sm font-medium">{t('hero.badge')}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <FileCheck className="w-8 h-8 text-primary" />
                </div>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-display text-heading mb-6">
                {renderAccent('hero.title')}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-body-lg text-muted-foreground mb-8">
                {t('hero.subtitle')}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group">
                  <a href="https://app.invoicemonk.com/signup">
                    {t('hero.ctaPrimary')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8 h-14 text-body border-border hover:bg-muted">
                  <Link to="/invoicing">{t('hero.ctaSecondary')}</Link>
                </Button>
              </motion.div>
            </div>

            {/* Product Mockup */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative hidden lg:block">
              <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-caption text-muted-foreground">{t('mockup.label')}</div>
                    <h3 className="text-body font-semibold text-heading">{t('mockup.number')}</h3>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-wave-green/10 text-wave-green text-body-sm font-medium">{t('mockup.status')}</div>
                </div>
                <div className="border-t border-border pt-4 mb-4">
                  <div className="text-caption text-muted-foreground mb-1">{t('mockup.clientLabel')}</div>
                  <div className="text-body font-medium text-heading">{t('mockup.clientName')}</div>
                </div>
                <div className="space-y-3 mb-4">
                  <div className="text-caption text-muted-foreground">{t('mockup.lineItemsLabel')}</div>
                  {lineItems.map((line, i) => (
                    <div key={i} className="flex justify-between items-center text-body-sm bg-muted/30 rounded-lg px-3 py-2">
                      <span className="text-foreground">{line.item}</span>
                      <span className="text-muted-foreground">{formatCurrency(line.price)}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-body font-medium text-heading">{t('mockup.totalLabel')}</span>
                    <span className="text-h4 font-bold text-primary">{formatCurrency(estimateTotal)}</span>
                  </div>
                </div>
                <div className="bg-primary/5 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-primary" />
                    <span className="text-body-sm text-primary font-medium">{t('mockup.convertLabel')}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveFeatureBanner title={t('banner.title')} features={bannerFeatures} variant="orange" />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">{renderAccent('features.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('features.subtitle')}</p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {featureBlocks.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <motion.div whileHover={{ y: -4 }} className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <WaveTabbedFeature title={t('tabs.title')} subtitle={t('tabs.subtitle')} tabs={tabItems} />
      <WaveHowItWorks title={t('howItWorks.title')} subtitle={t('howItWorks.subtitle')} steps={howSteps} />
      <WaveAlternatingFeature title={t('conversion.title')} subtitle={t('conversion.subtitle')} features={convFeatures} className="bg-background" />
      <WaveFeaturedTestimonial
        quote={t('testimonial.quote')}
        author={{ name: t('testimonial.name'), title: t('testimonial.title'), company: t('testimonial.company') }}
        rating={5}
        variant="primary"
      />
      <WaveBlogPreview title={t('blog.title')} subtitle={t('blog.subtitle')} pillarId="estimates-proposals" />
      <WaveProductFAQ title={t('faq.title')} subtitle={t('faq.subtitle')} faqs={faqItems} />
      <WaveCTASection />
    </Layout>
  );
};

export default Estimates;
