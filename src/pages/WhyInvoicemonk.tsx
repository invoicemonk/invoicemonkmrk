import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { Shield, Layers, TrendingUp, Lock, ArrowRight, Check, FileText, Users, Globe, Heart } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingSecurityBadge,
  FloatingIcon,
  FloatingChartCard
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { useLocale } from '@/hooks/useLocale';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { useTranslation } from 'react-i18next';

const principleKeys = [
  { key: 'complianceFirst', icon: Shield },
  { key: 'unifiedData', icon: Layers },
  { key: 'scales', icon: TrendingUp },
  { key: 'auditConfidence', icon: Lock },
] as const;

const trustKeys = [
  { key: 'growing', icon: FileText },
  { key: 'trusted', icon: Users },
  { key: 'countries', icon: Globe },
  { key: 'uptime', icon: Shield },
] as const;

const faqKeys = ['different', 'businessSize', 'compliance', 'freeTrial'] as const;

const WhyInvoicemonk = () => {
  const { locale } = useLocale();
  const seo = pageSEO['/why-invoicemonk'];
  const { t } = useTranslation('whyInvoicemonk');

  const differentiators = t('philosophy.items', { returnObjects: true }) as string[];

  const whyInvoicemonkFAQs = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`),
  }));

  return (
    <Layout>
      <FAQSchema items={whyInvoicemonkFAQs} />
      <SEOHead
        title={seo?.getTitle(locale) || 'Why Choose Invoicemonk | Compliance-First Invoicing'}
        description={seo?.getDescription(locale) || 'Discover why businesses choose Invoicemonk. Compliance-first invoicing, powerful features, and excellent support.'}
      />
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Heart, text: t('hero.badge') }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description')}
          primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: '/compliance', external: false }}
          backgroundVariant="gradient"
        />
        {/* Floating Elements */}
        <FloatingSecurityBadge 
          label={t('hero.floatingBadge')}
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingChartCard 
          className="absolute bottom-40 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingIcon 
          icon={Layers}
          className="absolute top-52 left-16 lg:left-32 hidden lg:block" 
          delay={0.8}
          size="md"
        />
      </div>

      {/* Philosophy Statement */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/30 rounded-3xl p-8 lg:p-12 border border-primary/10">
              <h2 className="text-h3 text-heading mb-8 text-center">{t('philosophy.title')}</h2>
              
              <ul className="space-y-4">
                {differentiators.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-body-lg text-foreground">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-h2 text-heading mb-4">{t('principles.title')}</h2>
            <p className="text-body-lg text-muted-foreground">
              {t('principles.description')}
            </p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {principleKeys.map(({ key, icon }) => {
              const Icon = icon;
              
              return (
                <StaggerItem key={key}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-card rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{t(`principles.${key}.title`)}</h3>
                    <p className="text-body text-muted-foreground">{t(`principles.${key}.description`)}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Audience callouts — Freelancers / SMBs / Accountants */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-h2 text-heading mb-4">{t('audiences.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('audiences.subtitle')}</p>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {(t('audiences.items', { returnObjects: true }) as { title: string; description: string }[]).map((item, i) => {
              const icons = [Heart, Layers, FileText];
              const Icon = icons[i % icons.length];
              return (
                <StaggerItem key={item.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{item.title}</h3>
                    <p className="text-body text-muted-foreground">{item.description}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {trustKeys.map(({ key, icon }, index) => {
                const Icon = icon;
                
                return (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-h3 text-heading mb-1">{t(`trust.${key}.label`)}</div>
                    <p className="text-body-sm text-muted-foreground">{t(`trust.${key}.description`)}</p>
                  </motion.div>
                );
              })}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-heading mb-4">{t('cta.title')}</h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              {t('cta.description')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8 group">
                <a href="https://app.invoicemonk.com/signup">
                  {t('cta.primaryButton')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/pricing">{t('cta.secondaryButton')}</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default WhyInvoicemonk;