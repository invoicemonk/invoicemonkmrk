import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { Wallet, ArrowRight, Camera, Tag, PieChart, Receipt, Smartphone, FileText, TrendingDown, Clock, FolderCheck, FileBarChart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
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

import expensesReceiptScanning from '@/assets/expenses-receipt-scanning.jpg';
import expensesCategories from '@/assets/expenses-categories.jpg';
import expensesTaxTracking from '@/assets/expenses-tax-tracking.jpg';
import expensesAutomation from '@/assets/expenses-automation.jpg';

const featureBlockKeys = [
  { key: 'snapAndForget', icon: Camera },
  { key: 'autoCategorize', icon: Tag },
  { key: 'seeWhereMoneyGoes', icon: PieChart },
] as const;

const automationKeys = [
  { key: 'autoDataEntry', icon: Clock },
  { key: 'smartOrganization', icon: FolderCheck },
  { key: 'oneClickReports', icon: FileBarChart },
] as const;

const faqKeys = ['receiptScanning', 'multipleCategories', 'taxes', 'integration', 'budgets', 'bestReceiptApp', 'receiptAppSmallBiz'] as const;
const seoFaqKeys = ['whatIs', 'receiptScanning', 'categories', 'taxHelp'] as const;

const Expenses = () => {
  const { formatCurrency } = useLocale();
  const { t } = useTranslation('expenses');

  const expenseCategories = [
    { category: t('preview.categories.officeSupplies'), amount: 450, percent: 14 },
    { category: t('preview.categories.software'), amount: 890, percent: 27 },
    { category: t('preview.categories.travel'), amount: 1200, percent: 37 },
    { category: t('preview.categories.meals'), amount: 700, percent: 22 },
  ];

  const bannerFeatures = t('banner.features', { returnObjects: true }) as string[];

  const tabbedFeatures = [
    { label: t('tabbed.receiptScanning.label'), title: t('tabbed.receiptScanning.title'), description: t('tabbed.receiptScanning.description'), image: expensesReceiptScanning },
    { label: t('tabbed.categories.label'), title: t('tabbed.categories.title'), description: t('tabbed.categories.description'), image: expensesCategories },
    { label: t('tabbed.taxTracking.label'), title: t('tabbed.taxTracking.title'), description: t('tabbed.taxTracking.description'), image: expensesTaxTracking },
  ];

  const automationFeatures = automationKeys.map(({ key, icon }) => ({
    icon,
    title: t(`automation.${key}.title`),
    description: t(`automation.${key}.description`),
  }));

  const expensesFAQs = faqKeys.map(key => ({
    question: t(`faq.items.${key}.question`),
    answer: t(`faq.items.${key}.answer`),
  }));

  const expensesSEOFAQs = seoFaqKeys.map(key => ({
    question: t(`seoFaqs.${key}.question`),
    answer: t(`seoFaqs.${key}.answer`),
  }));

  return (
    <Layout>
      <FAQSchema items={[...expensesSEOFAQs, ...expensesFAQs]} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Features', url: '/expenses' }, { name: 'Expenses', url: '/expenses' }]} />
      <SEOHead
        title="Best Receipt Scanning & Expense Tracking App for Small Business 2026 | Invoicemonk"
        description="Receipt scanning with AI-powered OCR, automatic expense categorization, and tax-ready reports. Integrated with invoicing — save 5+ hours/month."
      />
      <ServiceSchema
        serviceName="Invoicemonk Receipt Scanning & Expense Tracking"
        serviceType="Receipt Scanning and Expense Management Software"
        description="Receipt scanning with AI-powered OCR, automatic expense categorization, and tax-ready reports integrated with invoicing."
        url="https://invoicemonk.com/expenses"
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
                  <Wallet className="w-8 h-8 text-primary" />
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-display text-heading mb-6"
              >
                {t('hero.title')}{' '}
                <span className="font-serif italic text-primary">{t('hero.titleAccent')}</span>
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
                    {t('hero.primaryCta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-14 text-body border-border hover:bg-muted"
                >
                  <Link to="/invoicing">{t('hero.secondaryCta')}</Link>
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
                  <h3 className="text-body font-semibold text-heading">{t('preview.title')}</h3>
                  <span className="text-caption text-muted-foreground">{t('preview.thisMonth')}</span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-xl p-4">
                    <div className="text-caption text-muted-foreground mb-1">{t('preview.totalExpenses')}</div>
                    <div className="text-h3 font-bold text-heading">{formatCurrency(3240)}</div>
                  </div>
                  <div className="bg-wave-green/10 rounded-xl p-4">
                    <div className="text-caption text-wave-green mb-1">{t('preview.taxDeductible')}</div>
                    <div className="text-h3 font-bold text-wave-green">{formatCurrency(2180)}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {expenseCategories.map((item) => (
                    <div key={item.category} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex justify-between text-body-sm mb-1">
                          <span className="text-foreground">{item.category}</span>
                          <span className="text-muted-foreground">{formatCurrency(item.amount)}</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full" 
                            style={{ width: `${item.percent}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
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
              {t('featureBlocks.title').split('<accent>')[0]}
              <span className="font-serif italic text-primary">
                {t('featureBlocks.title').match(/<accent>(.*?)<\/accent>/)?.[1]}
              </span>
              {t('featureBlocks.title').split('</accent>')[1] || ''}
            </h2>
            <p className="text-body-lg text-muted-foreground">
              {t('featureBlocks.subtitle')}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {featureBlockKeys.map(({ key, icon }) => {
              const Icon = icon;
              return (
                <StaggerItem key={key}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 text-center"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 mx-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{t(`featureBlocks.${key}.title`)}</h3>
                    <p className="text-body text-muted-foreground">{t(`featureBlocks.${key}.description`)}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Tabbed Feature Section */}
      <WaveTabbedFeature
        title={t('tabbed.title')}
        subtitle={t('tabbed.subtitle')}
        tabs={tabbedFeatures}
      />

      {/* Alternating Feature - Automation */}
      <WaveAlternatingFeature
        title={t('automation.title')}
        subtitle={t('automation.subtitle')}
        features={automationFeatures}
        image={expensesAutomation}
        className="bg-background"
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
        faqs={expensesFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Expenses;