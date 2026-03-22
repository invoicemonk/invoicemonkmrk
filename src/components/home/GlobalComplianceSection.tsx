import { useState } from 'react';
import { Check, Globe, Shield, FileCheck, Lock, Hash, Archive } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@/components/LocalizedLink';
import { useTranslation } from 'react-i18next';

const featureIcons = [Globe, FileCheck, Hash, Shield, Lock, Archive, FileCheck, Lock];

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', taxLabel: 'VAT', currency: 'GBP (£)', badge: 'HMRC-Aware' },
  { name: 'Canada', flag: '🇨🇦', taxLabel: 'GST', currency: 'CAD (C$)', badge: 'CRA-Aware' },
  { name: 'UAE', flag: '🇦🇪', taxLabel: 'IVA', currency: 'AED (د.إ)', badge: 'FTA-Aware' },
  { name: 'Australia', flag: '🇦🇺', taxLabel: 'GST', currency: 'AUD (A$)', badge: 'ATO-Aware' },
  { name: 'Saudi Arabia', flag: '🇸🇦', taxLabel: 'VAT', currency: 'SAR (﷼)', badge: 'ZATCA-Compliant' },
];

export function GlobalComplianceSection() {
  const { t } = useTranslation('home');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = countries[selectedIndex];
  const featuresRaw = t('globalCompliance.features', { returnObjects: true });
  const features = Array.isArray(featuresRaw) ? featuresRaw : [];
  const body = t('globalCompliance.body', { defaultValue: '' });
  const pullQuote = t('globalCompliance.pullQuote', { defaultValue: '' });

  return (
    <section id="compliance" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <p className="text-caption uppercase tracking-widest font-semibold text-muted-foreground mb-3">
            {t('globalCompliance.eyebrow')}
          </p>
          <p className="text-body text-muted-foreground mb-4">
            {t('globalCompliance.eyebrowSub')}
          </p>
          <h2 className="text-h1 lg:text-display text-heading">
            {t('globalCompliance.heading')}{' '}
            <span className="font-serif italic text-primary">{t('globalCompliance.headingAccent')}</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          <AnimatedSection delay={0.1}>
            {body && (
              <div className="mb-8 space-y-4">
                {body.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-body text-muted-foreground">{paragraph}</p>
                ))}
              </div>
            )}
            <ul className="space-y-5">
              {features.map((label, i) => {
                const Icon = featureIcons[i] || Check;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <span className="text-body text-foreground">{label}</span>
                  </li>
                );
              })}
            </ul>
            <p className="mt-8 text-body-lg font-medium text-heading">
              {t('globalCompliance.footerBold')}
              <br />
              <span className="text-muted-foreground font-normal">
                {t('globalCompliance.footerSub')}
              </span>
            </p>
            {pullQuote && (
              <blockquote className="mt-6 pl-4 border-l-2 border-primary/30 italic text-body text-muted-foreground">
                "{pullQuote}"
              </blockquote>
            )}
            <Link
              to="/international-payment-fee-calculator"
              className="inline-block mt-4 text-body-sm text-primary hover:underline"
            >
              {t('globalCompliance.feeCalcLink')}
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-2xl border border-border shadow-soft-lg p-6 lg:p-8">
              <p className="text-caption uppercase tracking-wide font-semibold text-muted-foreground mb-4">
                {t('globalCompliance.invoicePreview')}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {countries.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedIndex(i)}
                    className={`px-3 py-1.5 rounded-full text-body-sm font-medium transition-colors ${
                      i === selectedIndex
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {c.flag} {c.name}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="bg-muted/50 rounded-xl p-5 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-muted-foreground">{t('globalCompliance.taxLabel')}</span>
                    <span className="text-body font-semibold text-heading">{selected.taxLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-muted-foreground">{t('globalCompliance.currency')}</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-body-sm font-medium">
                      {selected.currency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-muted-foreground">{t('globalCompliance.compliance')}</span>
                    <span className="flex items-center gap-1.5 text-body-sm font-medium text-primary">
                      <Shield className="w-4 h-4" />
                      {selected.badge}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-12 text-center space-y-1">
          <p className="text-caption text-muted-foreground">
            {t('globalCompliance.footerBold')}
          </p>
          <p className="text-caption text-muted-foreground">
            {t('globalCompliance.footerSub')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
