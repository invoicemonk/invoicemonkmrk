import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { Users, ArrowRight, FileText, Mail, UserCheck, BarChart3, Repeat } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveAlternatingFeature } from '@/components/home/WaveAlternatingFeature';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveBlogPreview } from '@/components/home/WaveBlogPreview';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { useLocale } from '@/hooks/useLocale';
import { SEOHead } from '@/components/seo/SEOHead';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { useTranslation } from 'react-i18next';
import { ReactNode } from 'react';

const featureIcons = [Users, FileText, BarChart3];
const altIcons = [FileText, BarChart3, Repeat];

const ClientManagement = () => {
  const { t } = useTranslation('clientManagement');
  const { formatCurrency } = useLocale();

  const renderAccent = (key: string): ReactNode => {
    const text = t(key);
    const match = text.match(/(.*)<accent>(.*?)<\/accent>(.*)/);
    if (!match) return <>{text}</>;
    return <>{match[1]}<span className="font-serif italic text-primary">{match[2]}</span>{match[3]}</>;
  };

  const clients = t('mockup.clients', { returnObjects: true }) as { name: string; invoices: number; total: number; status: string }[];
  const bannerFeatures = t('banner.features', { returnObjects: true }) as string[];
  const featureBlocks = (t('features.blocks', { returnObjects: true }) as { title: string; description: string }[]).map((b, i) => ({ ...b, icon: featureIcons[i] }));
  const tabItems = t('tabs.items', { returnObjects: true }) as { label: string; title: string; description: string }[];
  const altFeatures = (t('alternating.features', { returnObjects: true }) as { title: string; description: string }[]).map((f, i) => ({ ...f, icon: altIcons[i] }));
  const benefitItems = t('benefits.items', { returnObjects: true }) as string[];
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <ServiceSchema
        serviceName={t('service.name')}
        serviceType={t('service.type')}
        description={t('service.description')}
        url="https://invoicemonk.com/client-management"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-wave-green/10 text-wave-green mb-6">
                <UserCheck className="w-4 h-4" />
                <span className="text-body-sm font-medium">{t('hero.badge')}</span>
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
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
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-body font-semibold text-heading">{t('mockup.title')}</h3>
                  <span className="text-caption text-muted-foreground">{t('mockup.count')}</span>
                </div>
                <div className="space-y-3">
                  {clients.map((client, i) => (
                    <div key={i} className="bg-muted/30 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-body-sm font-semibold text-primary">{client.name.charAt(0)}</span>
                          </div>
                          <div>
                            <div className="text-body font-medium text-heading">{client.name}</div>
                            <div className="text-caption text-muted-foreground">{client.invoices} {t('mockup.invoicesLabel')}</div>
                          </div>
                        </div>
                        <div className="px-2 py-1 rounded-full bg-wave-green/10 text-wave-green text-caption">{client.status}</div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <span className="text-caption text-muted-foreground">{t('mockup.totalBilledLabel')}</span>
                        <span className="text-body-sm font-semibold text-heading">{formatCurrency(client.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-caption text-muted-foreground">{t('mockup.searchPlaceholder')}</span>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveFeatureBanner title={t('banner.title')} features={bannerFeatures} />

      {/* Quick Value Props */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">{renderAccent('features.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('features.subtitle')}</p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {featureBlocks.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all text-center h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-body font-semibold text-heading mb-2">{feature.title}</h3>
                    <p className="text-body-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <WaveTabbedFeature title={t('tabs.title')} subtitle={t('tabs.subtitle')} tabs={tabItems} />
      <WaveAlternatingFeature title={t('alternating.title')} subtitle={t('alternating.subtitle')} features={altFeatures} className="bg-card" />

      {/* Benefits Checklist */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-h2 text-heading text-center mb-12">{renderAccent('benefits.title')}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefitItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-background rounded-xl p-4 border border-border"
                >
                  <div className="w-6 h-6 rounded-full bg-wave-green/10 flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-3.5 h-3.5 text-wave-green" />
                  </div>
                  <span className="text-body text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveFeaturedTestimonial
        quote={t('testimonial.quote')}
        author={{ name: t('testimonial.name'), title: t('testimonial.title'), company: t('testimonial.company') }}
        rating={5}
      />
      <WaveBlogPreview title={t('blog.title')} subtitle={t('blog.subtitle')} pillarId="client-management" />
      <WaveProductFAQ title={t('faq.title')} subtitle={t('faq.subtitle')} faqs={faqItems} />

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-white mb-4">
              {(() => {
                const text = t('cta.title');
                const match = text.match(/(.*)<accent>(.*?)<\/accent>(.*)/);
                if (!match) return text;
                return <>{match[1]}<span className="font-serif italic">{match[2]}</span>{match[3]}</>;
              })()}
            </h2>
            <p className="text-body-lg text-white/90 mb-8">{t('cta.subtitle')}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 h-14 bg-white hover:bg-white/90 text-black">
                <a href="https://app.invoicemonk.com/signup" className="flex items-center gap-2">
                  {t('cta.button')}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default ClientManagement;
