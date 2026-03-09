import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { CreditCard, ArrowRight, Banknote, Check, Zap, Clock, Globe } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const featureIcons = [Zap, Globe, Clock];

const Payments = () => {
  const { locale, formatCurrency } = useLocale();
  const { t } = useTranslation('payments');
  
  const invoiceAmount = locale.pricing.business * 50 + locale.pricing.starter * 50;
  const processingFee = Math.round(invoiceAmount * 0.029 * 100) / 100;
  const netAmount = invoiceAmount - processingFee;
  const feePercent = '2.9%';

  const seoFaqs = t('seoFaqs', { returnObjects: true }) as { question: string; answer: string }[];
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const bannerFeatures = t('banner.features', { returnObjects: true }) as string[];
  const whyFeatures = t('whyAdd.features', { returnObjects: true }) as { title: string; description: string }[];
  const tabItems = t('tabs.items', { returnObjects: true }) as { label: string; title: string; description: string }[];
  const howSteps = (t('howItWorks.steps', { returnObjects: true }) as { title: string; description: string }[]).map((s, i) => ({ ...s, number: i + 1 }));

  const renderAccent = (key: string) => {
    const text = t(key);
    const match = text.match(/(.*)<accent>(.*?)<\/accent>(.*)/);
    if (!match) return <>{text}</>;
    return <>{match[1]}<span className="font-serif italic text-primary">{match[2]}</span>{match[3]}</>;
  };

  return (
    <Layout>
      <FAQSchema items={[...seoFaqs, ...faqItems]} />
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <ServiceSchema
        serviceName="Invoicemonk Payment Processing"
        serviceType="Payment Processing Software"
        description={t('seo.description')}
        url="https://invoicemonk.com/payments"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-orange/10 text-wave-orange mb-6"
              >
                <span className="text-body-sm font-medium">{t('hero.badge')}</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                {renderAccent('hero.title')}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
                >
                  <a href="https://app.invoicemonk.com/signup">
                    {t('hero.cta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-body border-border hover:bg-muted"
                >
                  <Link to="/invoicing">{t('hero.secondary')}</Link>
                </Button>
              </motion.div>
            </div>

            {/* Product Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-wave-green/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-wave-green" />
                  </div>
                  <h3 className="text-h3 text-heading mb-2">{t('hero.mockup.title')}</h3>
                  <p className="text-body-sm text-muted-foreground">{t('hero.mockup.subtitle')}</p>
                </div>
                
                <div className="bg-muted/50 rounded-xl p-6 text-center mb-6">
                  <div className="text-caption text-muted-foreground mb-1">{t('hero.mockup.amountLabel')}</div>
                  <div className="text-display font-bold text-heading">{formatCurrency(invoiceAmount)}</div>
                </div>
                
                <div className="space-y-3 text-body-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">{t('hero.mockup.method')}</span>
                    <span className="text-foreground font-medium">{t('hero.mockup.methodValue')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">{t('hero.mockup.fee')}</span>
                    <span className="text-foreground font-medium">{formatCurrency(processingFee)} ({feePercent})</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">{t('hero.mockup.net')}</span>
                    <span className="text-wave-green font-semibold">{formatCurrency(netAmount)}</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-card rounded-xl shadow-soft-lg p-3 border border-border"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body-sm font-medium text-foreground">{t('hero.mockup.floatingLabel')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title={t('banner.title')}
        features={bannerFeatures}
        variant="primary"
      />

      {/* 3 Feature Blocks */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              {renderAccent('whyAdd.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('whyAdd.subtitle')}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {whyFeatures.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 text-center"
                  >
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

      {/* Tabbed Features */}
      <WaveTabbedFeature
        title={t('tabs.title')}
        subtitle={t('tabs.subtitle')}
        tabs={tabItems}
      />

      {/* Featured Testimonial */}
      <WaveFeaturedTestimonial
        quote={t('testimonial.quote')}
        author={{
          name: t('testimonial.name'),
          title: t('testimonial.title'),
          company: t('testimonial.company')
        }}
        rating={5}
        variant="primary"
      />

      {/* How It Works */}
      <WaveHowItWorks
        title={t('howItWorks.title')}
        subtitle={t('howItWorks.subtitle')}
        steps={howSteps}
      />

      {/* Processing Fees Preview */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">
              {renderAccent('pricing.title')}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="text-h4 text-heading mb-2">{t('pricing.sectionTitle')}</h3>
                <p className="text-body text-muted-foreground">{t('pricing.sectionSubtitle')}</p>
              </div>
              <div className="divide-y divide-border">
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-body font-medium text-heading">{t('pricing.cards.label')}</p>
                      <p className="text-body-sm text-muted-foreground">{t('pricing.cards.cardTypes')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-h4 font-bold text-heading">{t('pricing.cards.rate')}</p>
                    <p className="text-caption text-muted-foreground">{t('pricing.cards.rateNote')}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Banknote className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-body font-medium text-heading">{t('pricing.bank.label')}</p>
                      <p className="text-body-sm text-muted-foreground">{t('pricing.bank.types')}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-h4 font-bold text-heading">{t('pricing.bank.rate')}</p>
                    <p className="text-caption text-muted-foreground">{t('pricing.bank.rateNote')}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Preview */}
      <WaveBlogPreview
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        pillarId="getting-paid"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        faqs={faqItems}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Payments;
