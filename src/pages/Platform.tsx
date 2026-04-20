import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import {
  Layers, ArrowRight, FileMinus, Package, TrendingUp, FileBarChart,
  Globe, Building2, UsersRound, ShieldCheck, History, Upload,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { PageHero } from '@/components/shared/PageHero';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const capabilityKeys = [
  { key: 'creditNotes', icon: FileMinus },
  { key: 'catalog', icon: Package },
  { key: 'receivables', icon: TrendingUp },
  { key: 'reports', icon: FileBarChart },
  { key: 'multiCurrency', icon: Globe },
  { key: 'multiBusiness', icon: Building2 },
  { key: 'team', icon: UsersRound },
  { key: 'verification', icon: ShieldCheck },
  { key: 'auditTrail', icon: History },
  { key: 'csvImport', icon: Upload },
] as const;

const Platform = () => {
  const { t } = useTranslation('platform');

  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];

  return (
    <Layout>
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <FAQSchema items={faqItems} />
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Platform', url: '/platform' },
      ]} />

      {/* Hero */}
      <PageHero
        badge={{ icon: Layers, text: t('hero.badge') }}
        title={t('hero.title')}
        accentWord={t('hero.titleAccent')}
        description={t('hero.description')}
        primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com/signup' }}
        secondaryCta={{ text: t('hero.secondaryCta'), href: '/pricing', external: false }}
        backgroundVariant="gradient"
      />

      {/* Intro */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-h2 text-heading mb-4">{t('intro.title')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('intro.subtitle')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {capabilityKeys.map(({ key, icon }) => {
              const Icon = icon;
              return (
                <StaggerItem key={key}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-card rounded-2xl p-7 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-2">{t(`capabilities.${key}.title`)}</h3>
                    <p className="text-body text-muted-foreground">{t(`capabilities.${key}.description`)}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-heading mb-4">{t('cta.title')}</h2>
            <p className="text-body-lg text-muted-foreground mb-8">{t('cta.description')}</p>
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

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-h2 text-heading text-center mb-12">{t('faq.title')}</h2>
            <div className="space-y-6">
              {faqItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-background rounded-2xl p-6 border border-border"
                >
                  <h3 className="text-h4 text-heading mb-2">{item.question}</h3>
                  <p className="text-body text-muted-foreground">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
