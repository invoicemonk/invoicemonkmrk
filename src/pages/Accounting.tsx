import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { Calculator, ArrowRight, BookOpen, FileSpreadsheet, TrendingUp, RefreshCw, CheckCircle, Calendar } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { useTranslation } from 'react-i18next';

import accountingChartOfAccounts from '@/assets/accounting-chart-of-accounts.jpg';
import accountingFinancialReports from '@/assets/accounting-financial-reports.jpg';
import accountingMultiEntity from '@/assets/accounting-multi-entity.jpg';
import accountingAutomation from '@/assets/accounting-automation.jpg';

const featureIcons = [BookOpen, FileSpreadsheet, TrendingUp];
const automationIcons = [RefreshCw, CheckCircle, Calendar];
const tabImages = [accountingChartOfAccounts, accountingFinancialReports, accountingMultiEntity];

const Accounting = () => {
  const { formatCurrency } = useLocale();
  const { t } = useTranslation('accounting');

  const seoFaqs = t('seoFaqs', { returnObjects: true }) as { question: string; answer: string }[];
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const bannerFeatures = t('banner.features', { returnObjects: true }) as string[];
  const whyFeatures = t('whyAdd.features', { returnObjects: true }) as { title: string; description: string }[];
  const tabItems = (t('tabs.items', { returnObjects: true }) as { label: string; title: string; description: string }[]).map((tab, i) => ({ ...tab, image: tabImages[i] }));
  const automationFeatures = (t('automation.features', { returnObjects: true }) as { title: string; description: string }[]).map((f, i) => ({ ...f, icon: automationIcons[i] }));
  const howSteps = (t('howItWorks.steps', { returnObjects: true }) as { title: string; description: string }[]).map((s, i) => ({ ...s, number: i + 1 }));
  const mockupAccounts = t('hero.mockup.accounts', { returnObjects: true }) as string[];

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
        serviceName="Invoicemonk Accounting Software"
        serviceType="Accounting Software"
        description={t('seo.description')}
        url="https://invoicemonk.com/accounting"
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-green/10 text-wave-green mb-6"
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
                  <Calculator className="w-8 h-8 text-primary" />
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-body font-semibold text-heading">{t('hero.mockup.overview')}</h3>
                  <span className="text-caption text-muted-foreground">{t('hero.mockup.period')}</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-caption text-muted-foreground mb-2">{t('hero.mockup.balanceSheet')}</div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-body-sm">
                        <span className="text-foreground">{t('hero.mockup.totalAssets')}</span>
                        <span className="font-medium text-heading">{formatCurrency(124500)}</span>
                      </div>
                      <div className="flex justify-between text-body-sm">
                        <span className="text-foreground">{t('hero.mockup.totalLiabilities')}</span>
                        <span className="font-medium text-heading">{formatCurrency(42300)}</span>
                      </div>
                      <div className="h-px bg-border my-2" />
                      <div className="flex justify-between text-body-sm font-semibold">
                        <span className="text-primary">{t('hero.mockup.equity')}</span>
                        <span className="text-primary">{formatCurrency(82200)}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-wave-green/10 rounded-xl p-3">
                      <div className="text-caption text-wave-green mb-1">{t('hero.mockup.revenue')}</div>
                      <div className="text-h4 font-bold text-wave-green">{formatCurrency(48200)}</div>
                    </div>
                    <div className="bg-wave-orange/10 rounded-xl p-3">
                      <div className="text-caption text-wave-orange mb-1">{t('hero.mockup.expenses')}</div>
                      <div className="text-h4 font-bold text-wave-orange">{formatCurrency(31400)}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="text-caption text-muted-foreground mb-3">{t('hero.mockup.chartOfAccounts')}</div>
                  <div className="space-y-2">
                    {mockupAccounts.map((account) => (
                      <div key={account} className="flex items-center gap-2 text-body-sm text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary/60" />
                        {account}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Banner */}
      <WaveFeatureBanner 
        title={t('banner.title')}
        features={bannerFeatures}
        variant="orange"
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

      {/* Tabbed Feature Section */}
      <WaveTabbedFeature
        title={t('tabs.title')}
        subtitle={t('tabs.subtitle')}
        tabs={tabItems}
      />

      {/* Alternating Feature - Automation */}
      <WaveAlternatingFeature
        title={t('automation.title')}
        subtitle={t('automation.subtitle')}
        features={automationFeatures}
        image={accountingAutomation}
        className="bg-background"
      />

      {/* How It Works */}
      <WaveHowItWorks
        title={t('howItWorks.title')}
        subtitle={t('howItWorks.subtitle')}
        steps={howSteps}
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

      {/* Featured Article Link */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="text-caption text-primary font-medium uppercase tracking-wide">{t('featuredGuide.label')}</span>
                  <h2 className="text-h3 text-heading mt-2">{t('featuredGuide.title')}</h2>
                </div>
              </div>
              <p className="text-body-lg text-muted-foreground mb-6">
                {t('featuredGuide.description')}
              </p>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/blog/small-business-accounting-guide">
                  {t('featuredGuide.cta')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Preview */}
      <WaveBlogPreview
        title={t('blog.title')}
        subtitle={t('blog.subtitle')}
        pillarId="business-finances"
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

export default Accounting;
