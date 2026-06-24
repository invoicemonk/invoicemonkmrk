import { motion } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import {
  Check,
  ArrowRight,
  Globe,
  Repeat,
  ListOrdered,
  Coins,
  ShieldCheck,
  FileMinus,
  Shield,
  UserPlus,
  FileText,
  Send,
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { WaveTabbedFeature } from '@/components/home/WaveTabbedFeature';
import { WaveFeaturedTestimonial } from '@/components/home/WaveFeaturedTestimonial';
import { WaveProductFAQ } from '@/components/home/WaveProductFAQ';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { SEOHead } from '@/components/seo/SEOHead';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';
import invoicingEuVat from '@/assets/invoicing-eu-vat.jpg';
import invoicingAfrica from '@/assets/invoicing-africa.jpg';
import invoicingGlobal from '@/assets/invoicing-global.jpg';

const FEATURE_ICONS = [Globe, Repeat, ListOrdered, Coins, ShieldCheck, FileMinus];
const STEP_ICONS = [UserPlus, FileText, Send];
const TABBED_IMAGES = [invoicingEuVat, invoicingAfrica, invoicingGlobal];

const Invoicing = () => {
  const { t } = useTranslation('invoicing');

  const trustBar = t('trustBar.items', { returnObjects: true }) as string[];
  const features = t('features.items', { returnObjects: true }) as { title: string; body: string }[];
  const auditFeatures = t('auditReady.features', { returnObjects: true }) as string[];
  const steps = t('howItWorks.steps', { returnObjects: true }) as { title: string; body: string }[];
  const comparisonRows = t('comparison.rows', { returnObjects: true }) as string[][];
  const faqs = t('faq.items', { returnObjects: true }) as { question: string; answer: string }[];
  const bottomTrust = t('bottomCta.trust', { returnObjects: true }) as string[];
  const relatedLinks = t('related.links', { returnObjects: true }) as { label: string; to: string }[];

  const tabbedFeatures = [
    { label: t('tabbed.tabs.eu.label'), title: t('tabbed.tabs.eu.title'), description: t('tabbed.tabs.eu.description'), image: TABBED_IMAGES[0] },
    { label: t('tabbed.tabs.africa.label'), title: t('tabbed.tabs.africa.title'), description: t('tabbed.tabs.africa.description'), image: TABBED_IMAGES[1] },
    { label: t('tabbed.tabs.global.label'), title: t('tabbed.tabs.global.title'), description: t('tabbed.tabs.global.description'), image: TABBED_IMAGES[2] },
  ];

  return (
    <Layout>
      <SEOHead title={t('meta.title')} description={t('meta.description')} />
      <FAQSchema items={faqs} />
      <BreadcrumbSchema items={[{ name: 'Home', url: '/' }, { name: 'Invoicing', url: '/invoicing' }]} />
      <ServiceSchema
        serviceName="InvoiceMonk Invoicing Software"
        serviceType="VAT-compliant invoicing software"
        description="Create VAT-compliant invoices for clients in 30+ countries. Reverse charge, sequential numbering, and country-specific mandatory fields built in."
        url="https://invoicemonk.com/invoicing"
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 lg:py-28">
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
                <ShieldCheck className="w-4 h-4" />
                <span className="text-body-sm font-medium">{t('hero.badge')}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-display text-heading mb-6"
              >
                {t('hero.titleStart')}{' '}
                <span className="font-serif italic text-primary">{t('hero.titleAccent')}</span>{' '}
                {t('hero.titleEnd')}
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
                <Button asChild size="lg" className="rounded-full px-8 h-14 text-body-lg group">
                  <a href="https://app.invoicemonk.com/signup?plan=professional">
                    {t('hero.primaryCta')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-full px-6 h-14 text-body">
                  <Link to="/pricing">{t('hero.secondaryCta')}</Link>
                </Button>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-body-sm text-muted-foreground mt-6"
              >
                Need country-specific clearance, CSID, IRN, UUID, or Peppol?{' '}
                <Link to="/e-invoicing" className="text-primary font-medium hover:underline">
                  See the E-invoicing platform (16 mandates)
                </Link>
              </motion.p>
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
                  <span className="px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary">
                    {t('invoicePreview.compliant')}
                  </span>
                </div>
                <div className="space-y-3 mb-4 pb-4 border-b border-border">
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">{t('invoicePreview.designServices')}</span>
                    <span className="text-foreground font-medium">€2,400.00</span>
                  </div>
                  <div className="flex justify-between text-body-sm">
                    <span className="text-muted-foreground">{t('invoicePreview.consulting')}</span>
                    <span className="text-foreground font-medium">€1,800.00</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-body-sm">
                    <span className="text-muted-foreground">{t('invoicePreview.subtotal')}</span>
                    <span className="text-foreground">€4,200.00</span>
                  </div>
                  <div className="flex items-center justify-between text-caption">
                    <span className="text-muted-foreground">{t('invoicePreview.vat')}</span>
                    <span className="text-muted-foreground">€0.00</span>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-border">
                    <span className="text-body-sm text-muted-foreground">{t('invoicePreview.total')}</span>
                    <span className="text-h3 font-bold text-heading">€4,200.00</span>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-soft-lg p-4 border border-border max-w-[280px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-wave-green/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-wave-green" />
                  </div>
                  <div>
                    <p className="text-body-sm font-medium text-foreground">{t('invoicePreview.fieldVerified')}</p>
                    <p className="text-caption text-muted-foreground">{t('invoicePreview.fieldsLine')}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-card border-y border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {trustBar.map((item) => (
              <div key={item} className="flex items-center gap-2 text-body-sm text-foreground">
                <Check className="w-4 h-4 text-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
              {t('problem.label')}
            </span>
            <h2 className="text-h2 text-heading mb-6">{t('problem.title')}</h2>
            <p className="text-body-lg text-foreground font-medium mb-6">{t('problem.leadShort')}</p>
            <p className="text-body text-muted-foreground mb-4">{t('problem.body1')}</p>
            <p className="text-body text-muted-foreground mb-8">{t('problem.body2')}</p>
            <p className="text-h3 font-serif italic text-primary">{t('problem.closer')}</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading">{t('features.label')}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {features.map((feature, i) => {
              const Icon = FEATURE_ICONS[i] ?? Globe;
              return (
                <StaggerItem key={feature.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="h-full bg-background rounded-2xl p-8 border border-border hover:border-primary/20 hover:shadow-card-hover transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.body}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Tabs (EU / Africa / Global) */}
      <WaveTabbedFeature
        title={t('tabbed.title')}
        subtitle={t('tabbed.subtitle')}
        tabs={tabbedFeatures}
      />

      {/* Audit ready */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
                  {t('auditReady.label')}
                </span>
                <h2 className="text-h2 text-heading mb-6">
                  {t('auditReady.title')}{' '}
                  <span className="font-serif italic text-primary">{t('auditReady.titleAccent')}</span>
                </h2>
                <p className="text-body-lg text-muted-foreground mb-8">{t('auditReady.description')}</p>
                <ul className="space-y-4">
                  {auditFeatures.map((feature, index) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
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
                <div className="bg-background rounded-2xl shadow-soft-xl border border-border p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="text-body font-semibold text-heading">{t('auditReady.auditTrail')}</h4>
                      <p className="text-body-sm text-muted-foreground">Invoice #1042</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {[
                      { action: t('auditReady.logs.created'), time: 'May 1, 2026 9:32 AM', user: 'You' },
                      { action: t('auditReady.logs.sent'), time: 'May 1, 2026 9:33 AM', user: 'System' },
                      { action: t('auditReady.logs.viewed'), time: 'May 1, 2026 2:15 PM', user: 'Client' },
                      { action: t('auditReady.logs.paid'), time: 'May 3, 2026 10:42 AM', user: 'System' },
                    ].map((log) => (
                      <div key={log.action} className="flex items-start gap-3 text-body-sm">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{log.action}</p>
                          <p className="text-muted-foreground">{log.time} • {log.user}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-caption text-muted-foreground font-mono">Hash: a7f3b9c2d1e8...4k9m</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof testimonial */}
      <WaveFeaturedTestimonial
        quote={t('testimonial.quote')}
        author={{ name: t('testimonial.name'), title: t('testimonial.title') }}
        rating={5}
        variant="primary"
      />

      {/* Rico testimonial */}
      <WaveFeaturedTestimonial
        quote={t('ricoTestimonial.quote')}
        author={{
          name: t('ricoTestimonial.name'),
          title: t('ricoTestimonial.title'),
          company: t('ricoTestimonial.context'),
        }}
        rating={5}
        variant="card"
      />

      {/* How it works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-h2 text-heading">{t('howItWorks.label')}</h2>
          </AnimatedSection>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {steps.map((step, i) => {
              const Icon = STEP_ICONS[i] ?? UserPlus;
              return (
                <StaggerItem key={step.title}>
                  <div className="h-full bg-card rounded-2xl p-8 border border-border relative">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-body-sm font-semibold">
                        {i + 1}
                      </span>
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-h4 text-heading mb-3">{step.title}</h3>
                    <p className="text-body text-muted-foreground">{step.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 text-caption font-medium rounded-full bg-primary/10 text-primary mb-4">
              {t('comparison.label')}
            </span>
            <h2 className="text-h2 text-heading">{t('comparison.title')}</h2>
          </AnimatedSection>

          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border bg-background">
            <table className="w-full text-left text-body-sm">
              <thead>
                <tr className="border-b border-border bg-muted/40">
                  <th className="px-6 py-4 font-semibold text-heading">{t('comparison.headers.feature')}</th>
                  <th className="px-6 py-4 font-semibold text-primary bg-primary/5">{t('comparison.headers.invoicemonk')}</th>
                  <th className="px-6 py-4 font-semibold text-heading">{t('comparison.headers.generic')}</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([feature, im, gen], idx) => (
                  <tr key={feature} className={idx % 2 === 1 ? 'bg-muted/20' : ''}>
                    <td className="px-6 py-4 text-foreground font-medium">{feature}</td>
                    <td className="px-6 py-4 text-foreground bg-primary/5">{im}</td>
                    <td className="px-6 py-4 text-muted-foreground">{gen}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WaveProductFAQ title={t('faq.title')} subtitle={t('faq.subtitle')} faqs={faqs} />

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <h2 className="text-h2 text-primary-foreground mb-4">{t('bottomCta.title')}</h2>
            <p className="text-body-lg text-primary-foreground/80 mb-8">{t('bottomCta.subtitle')}</p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-8 h-14 text-body-lg group">
              <a href="https://app.invoicemonk.com/signup?plan=professional">
                {t('bottomCta.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
            <p className="text-body-sm text-primary-foreground/70 mt-4">{t('bottomCta.smallPrint')}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 max-w-3xl mx-auto">
              {bottomTrust.map((item) => (
                <div key={item} className="flex items-center justify-center gap-2 text-body-sm text-primary-foreground/90">
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Related links */}
      <section className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-h4 text-heading mb-6 text-center">{t('related.title')}</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
                >
                  <span className="text-body text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Invoicing;
