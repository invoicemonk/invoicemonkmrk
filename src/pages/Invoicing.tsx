import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { FileText, Check, ArrowRight, Send, Clock, Globe, Users, Shield, Repeat, Smartphone, Bell, Zap } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveCTASection } from '@/components/home/WaveCTASection';
import { useLocale } from '@/hooks/useLocale';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const quickFeatureKeys = [
  { key: 'createQuickly', icon: FileText },
  { key: 'stayOrganized', icon: Users },
  { key: 'reduceBookkeeping', icon: Clock },
] as const;

const getPaidFasterKeys = [
  { key: 'invoiceOnTheGo', icon: Smartphone },
  { key: 'instantNotifications', icon: Bell },
  { key: 'automaticReminders', icon: Zap },
] as const;

const faqKeys = ['isFree', 'getPaidFaster', 'customizeLogo', 'auditTrail', 'multiCurrency', 'paymentMethods', 'eInvoicing'] as const;

const Invoicing = () => {
  const { locale, formatCurrency } = useLocale();
  const { compliance } = locale.content;
  const { t } = useTranslation('invoicing');

  const serviceAmount = locale.pricing.business * 50;
  const hostingAmount = locale.pricing.professional * 50;
  const totalAmount = serviceAmount + hostingAmount;

  const bannerFeatures = t('banner.features', { returnObjects: true }) as string[];
  const complianceFeatures = t('compliance.features', { returnObjects: true }) as string[];

  const tabbedFeatures = [
    { label: t('tabbed.tabs.customerInfo.label'), title: t('tabbed.tabs.customerInfo.title'), description: t('tabbed.tabs.customerInfo.description') },
    { label: t('tabbed.tabs.trackPayments.label'), title: t('tabbed.tabs.trackPayments.title'), description: t('tabbed.tabs.trackPayments.description') },
    { label: t('tabbed.tabs.recurringBilling.label'), title: t('tabbed.tabs.recurringBilling.title'), description: t('tabbed.tabs.recurringBilling.description') + ' <a href="/blog/recurring-invoices-automating-billing">' + t('tabbed.tabs.recurringBilling.label') + '</a>.' },
  ];

  const getPaidFasterFeatures = getPaidFasterKeys.map(({ key, icon }) => ({
    icon,
    title: t(`getPaidFaster.${key}.title`),
    description: t(`getPaidFaster.${key}.description`),
  }));

  const invoicingFAQs = faqKeys.map(key => ({
    question: t(`faq.items.${key}.question`),
    answer: t(`faq.items.${key}.answer`),
  }));

  return (
    <Layout>
      <SEOHead
        title="Invoicing Software for Small Business | Free to Start | Invoicemonk"
        description="The easiest invoicing software for small businesses and freelancers. Create professional invoices in minutes, automate reminders, and get paid faster. Free tier available."
      />
      <FAQSchema items={invoicingFAQs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Features', url: '/invoicing' }, { name: 'Invoicing', url: '/invoicing' }]} />
      <ServiceSchema
        serviceName="Invoicemonk Invoicing Software"
        serviceType="Invoicing Software"
        description="Create beautiful professional invoices in minutes. Automate payment reminders, maintain complete audit trails, and get paid faster."
        url="https://invoicemonk.com/invoicing"
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
                <Check className="w-4 h-4" />
                <span className="text-body-sm font-medium">{t('hero.badge')}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-display text-heading mb-6"
              >
                {t('hero.title')}{' '}
                <span className="font-serif italic text-primary">{t('hero.titleAccent')}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-body-lg text-muted-foreground mb-8"
              >
                {t('hero.description')}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
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
                  <Link to="/pricing">{t('hero.secondaryCta')}</Link>
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-body-sm text-muted-foreground mt-6"
              >
                {t('hero.trustText')}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-sm">IM</span>
                    </div>
                    <div>
                      <div className="text-body-sm font-medium text-heading">{t('invoicePreview.invoiceNumber')}</div>
                      <div className="text-caption text-muted-foreground">{t('invoicePreview.client')}</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-caption font-medium rounded-full bg-wave-green/10 text-wave-green">
                    {t('invoicePreview.paid')}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">{t('invoicePreview.webDesign')}</span>
                    <span className="text-foreground font-medium">{formatCurrency(serviceAmount)}</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">{t('invoicePreview.hosting')}</span>
                    <span className="text-foreground font-medium">{formatCurrency(hostingAmount)}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-body-sm text-muted-foreground">{t('invoicePreview.total')}</span>
                  <span className="text-h3 font-bold text-heading">{formatCurrency(totalAmount)}</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-soft-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wave-green/10 flex items-center justify-center">
                    <Check className="w-5 h-5 text-wave-green" />
                  </div>
                  <div>
                    <p className="text-body-sm font-medium text-foreground">{t('invoicePreview.paymentReceived')}</p>
                    <p className="text-caption text-muted-foreground">{t('invoicePreview.timeAgo')}</p>
                  </div>
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
      />

      {/* Quick Features - 3 cards */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {quickFeatureKeys.map(({ key, icon }) => {
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
                    <h3 className="text-h4 text-heading mb-2">{t(`quickFeatures.${key}.title`)}</h3>
                    <p className="text-body text-muted-foreground">{t(`quickFeatures.${key}.description`)}</p>
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

      {/* Get Paid Faster - Alternating Feature */}
      <WaveAlternatingFeature
        title={t('getPaidFaster.title')}
        subtitle={t('getPaidFaster.subtitle')}
        features={getPaidFasterFeatures}
        className="bg-card"
        imagePlaceholder={
          <div className="bg-background rounded-2xl shadow-soft-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-wave-green/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-wave-green" />
              </div>
              <div>
                <p className="text-body-sm font-medium text-heading">Invoice #1043</p>
                <p className="text-caption text-muted-foreground">{t('getPaidFaster.timeline.sentAgo')}</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-body-sm">
                <div className="w-2 h-2 rounded-full bg-wave-green" />
                <span className="text-foreground">{t('getPaidFaster.timeline.invoiceSent')}</span>
                <span className="text-muted-foreground ml-auto">10:32 AM</span>
              </div>
              <div className="flex items-center gap-3 text-body-sm">
                <div className="w-2 h-2 rounded-full bg-wave-green" />
                <span className="text-foreground">{t('getPaidFaster.timeline.viewedByClient')}</span>
                <span className="text-muted-foreground ml-auto">11:15 AM</span>
              </div>
              <div className="flex items-center gap-3 text-body-sm">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-foreground">{t('getPaidFaster.timeline.awaitingPayment')}</span>
                <span className="text-muted-foreground ml-auto">{t('getPaidFaster.timeline.now')}</span>
              </div>
            </div>
          </div>
        }
      />

      {/* Compliance Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
                  {t('compliance.badge')}
                </span>
                <h2 className="text-h2 text-heading mb-6">
                  {t('compliance.title')}{' '}
                  <span className="font-serif italic text-primary">{t('compliance.titleAccent')}</span>
                </h2>
                <p className="text-body-lg text-muted-foreground mb-8">
                  {t('compliance.description')}{' '}
                  {t('compliance.creditNotesPrefix')}{' '}
                  <Link to="/blog/credit-notes-and-invoice-corrections" className="text-primary hover:underline">{t('compliance.creditNotesLink')}</Link>.
                </p>
                
                <ul className="space-y-4">
                  {complianceFeatures.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-wave-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-wave-green" />
                      </div>
                      <span className="text-body text-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </AnimatedSection>
              
              <AnimatedSection delay={0.2}>
                <div className="relative">
                  <div className="bg-card rounded-2xl shadow-soft-xl border border-border p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <Shield className="w-8 h-8 text-primary" />
                      <div>
                        <h4 className="text-body font-semibold text-heading">{t('compliance.auditTrail')}</h4>
                        <p className="text-body-sm text-muted-foreground">{t('invoicePreview.invoiceNumber')}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {[
                        { action: t('compliance.logs.created'), time: 'Jan 15, 2024 9:32 AM', user: 'John D.' },
                        { action: t('compliance.logs.sent'), time: 'Jan 15, 2024 9:33 AM', user: 'System' },
                        { action: t('compliance.logs.viewed'), time: 'Jan 15, 2024 2:15 PM', user: 'Client' },
                        { action: t('compliance.logs.paid'), time: 'Jan 17, 2024 10:42 AM', user: 'System' },
                      ].map((log, index) => (
                        <div key={index} className="flex items-start gap-3 text-body-sm">
                          <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{log.action}</p>
                            <p className="text-muted-foreground">{log.time} • {log.user}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <p className="text-caption text-muted-foreground">
                        Hash: a7f3b9c2d1e8...4k9m
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

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
        pillarId="invoicing-mastery"
      />

      {/* FAQ Section */}
      <WaveProductFAQ
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        faqs={invoicingFAQs}
      />

      {/* Final CTA */}
      <WaveCTASection />
    </Layout>
  );
};

export default Invoicing;