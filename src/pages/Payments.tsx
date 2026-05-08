import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { CreditCard, ArrowRight, Check, Globe, Banknote, FileText, Bell, Layers, RefreshCw } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveFeatureBanner } from '@/components/ui/WaveFeatureBanner';
import { WaveHowItWorks } from '@/components/home/WaveHowItWorks';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const SIGNUP_URL = 'https://app.invoicemonk.com/signup?utm_source=payments_page&utm_medium=cta';

const featureIcons = [Globe, Banknote, FileText, Bell, Layers, RefreshCw];

const Payments = () => {
  const { t } = useTranslation('payments');

  const seoFaqs = t('seoFaqs', { returnObjects: true }) as { question: string; answer: string }[];
  const faqItems = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const trustBar = t('trustBar', { returnObjects: true }) as string[];
  const problemParagraphs = t('problem.paragraphs', { returnObjects: true }) as string[];
  const howSteps = (t('howItWorks.steps', { returnObjects: true }) as { title: string; description: string }[]).map((s, i) => ({ ...s, number: i + 1 }));
  const features = t('features.items', { returnObjects: true }) as { title: string; description: string }[];
  const feeRows = t('fees.rows', { returnObjects: true }) as { method: string; fee: string }[];
  const reduceTips = t('reduceFees.tips', { returnObjects: true }) as { title: string; description: string }[];
  const bottomTrust = t('bottomCta.trustSignals', { returnObjects: true }) as string[];
  const relatedLinks = t('relatedLinks.items', { returnObjects: true }) as { title: string; href: string; description: string }[];

  const renderAccent = (key: string) => {
    const text = t(key);
    const match = text.match(/(.*)<accent>(.*?)<\/accent>(.*)/);
    if (!match) return <>{text}</>;
    return <>{match[1]}<span className="font-serif italic text-primary">{match[2]}</span>{match[3]}</>;
  };

  return (
    <Layout>
      <FAQSchema items={[...seoFaqs, ...faqItems]} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Features', url: '/payments' }, { name: 'Payments', url: '/payments' }]} />
      <SEOHead title={t('seo.title')} description={t('seo.description')} />
      <ServiceSchema
        serviceName="InvoiceMonk Payment Processing"
        serviceType="Payment Processing Software"
        description={t('seo.description')}
        url="https://invoicemonk.com/payments"
      />

      {/* Hero */}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
              >
                <span className="text-body-sm font-semibold uppercase tracking-wide">{t('hero.badge')}</span>
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
                  <a href={SIGNUP_URL}>
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
                  <Link to="/pricing">{t('hero.secondary')}</Link>
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="text-body-sm text-muted-foreground mt-6"
              >
                {t('hero.socialProof')}
              </motion.p>
            </div>

            {/* Mockup */}
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
                  <div className="text-display font-bold text-heading">€4,250.00</div>
                </div>

                <div className="space-y-3 text-body-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">{t('hero.mockup.method')}</span>
                    <span className="text-foreground font-medium">{t('hero.mockup.methodValue')}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">{t('hero.mockup.fee')}</span>
                    <span className="text-foreground font-medium">€1.20</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">{t('hero.mockup.net')}</span>
                    <span className="text-wave-green font-semibold">€4,248.80</span>
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
                    <RefreshCw className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-body-sm font-medium text-foreground">{t('hero.mockup.floatingLabel')}</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <WaveFeatureBanner
        title="Built for international invoicing"
        features={trustBar}
        variant="primary"
      />

      {/* The problem */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-h2 text-heading mb-8 text-center">{t('problem.label')}</h2>
            <div className="space-y-5 text-body-lg text-muted-foreground">
              {problemParagraphs.map((p, i) => (
                <p key={i} className={i === problemParagraphs.length - 1 ? 'text-foreground font-medium' : ''}>
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How it works */}
      <WaveHowItWorks
        title={t('howItWorks.label')}
        subtitle={t('howItWorks.subtitle')}
        steps={howSteps}
      />

      {/* Features grid (6 items, 2x3) */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">{t('features.label')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('features.subtitle')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = featureIcons[i] ?? Globe;
              return (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
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

      {/* Processing fees */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4">{t('fees.label')}</h2>
            <p className="text-body-lg text-muted-foreground">{t('fees.intro')}</p>
          </AnimatedSection>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-soft-md">
              <div className="grid grid-cols-2 bg-muted/40 px-6 py-4 text-caption font-semibold uppercase tracking-wide text-muted-foreground">
                <div>{t('fees.headers.method')}</div>
                <div className="text-right">{t('fees.headers.fee')}</div>
              </div>
              <div className="divide-y divide-border">
                {feeRows.map((row) => (
                  <div key={row.method} className="grid grid-cols-2 px-6 py-5 items-center">
                    <div className="text-body font-medium text-heading">{row.method}</div>
                    <div className="text-right text-body font-semibold text-primary">{row.fee}</div>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-body-sm text-muted-foreground mt-6 max-w-3xl mx-auto leading-relaxed">
              {t('fees.note')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reduce fees */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading mb-4 text-center">{t('reduceFees.label')}</h2>
            <p className="text-body-lg text-muted-foreground text-center">{t('reduceFees.intro')}</p>
          </AnimatedSection>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {reduceTips.map((tip, i) => (
              <StaggerItem key={tip.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-5 font-bold text-h4">
                    {i + 1}
                  </div>
                  <h3 className="text-h4 text-heading mb-3">{tip.title}</h3>
                  <p className="text-body text-muted-foreground">{tip.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonial */}
      <WaveFeaturedTestimonial
        quote={t('testimonial.quote')}
        author={{
          name: t('testimonial.name'),
          title: t('testimonial.title'),
          company: t('testimonial.company'),
        }}
        rating={5}
        variant="primary"
      />

      {/* FAQ */}
      <WaveProductFAQ
        title={t('faq.title')}
        subtitle={t('faq.subtitle')}
        faqs={faqItems}
      />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-accent/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-h1 text-heading mb-6">{t('bottomCta.headline')}</h2>
            <p className="text-body-lg text-muted-foreground mb-8">{t('bottomCta.subheadline')}</p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 text-body-lg bg-accent-orange hover:bg-accent-orange/90 text-accent-orange-foreground shadow-soft-md group"
            >
              <a href={SIGNUP_URL}>
                {t('bottomCta.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
            <p className="text-body-sm text-muted-foreground mt-4">{t('bottomCta.microcopy')}</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-8">
              {bottomTrust.map((sig) => (
                <div key={sig} className="flex items-center gap-2 text-body-sm text-foreground">
                  <Check className="w-4 h-4 text-primary" />
                  <span>{sig}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 lg:py-20 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-h3 text-heading mb-8 text-center">{t('relatedLinks.label')}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="group block bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
              >
                <h3 className="text-body font-semibold text-heading mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="text-body-sm text-muted-foreground mb-4">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-body-sm font-medium text-primary">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Payments;
