import { useState } from 'react';
import { Check, Globe, Shield, FileCheck, Lock, Hash, Archive } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  { icon: Globe, label: '30+ supported jurisdictions' },
  { icon: FileCheck, label: 'Country-aware tax labels (VAT, GST, IVA, etc.)' },
  { icon: Hash, label: 'Tax schema versioning' },
  { icon: Shield, label: 'Immutable audit trail' },
  { icon: Lock, label: 'Snapshot-based invoice integrity' },
  { icon: Archive, label: 'Retention locking & verification IDs' },
];

const countries = [
  { name: 'United Kingdom', flag: '🇬🇧', taxLabel: 'VAT', currency: 'GBP (£)', badge: 'HMRC-Aware' },
  { name: 'Canada', flag: '🇨🇦', taxLabel: 'GST', currency: 'CAD (C$)', badge: 'CRA-Aware' },
  { name: 'UAE', flag: '🇦🇪', taxLabel: 'IVA', currency: 'AED (د.إ)', badge: 'FTA-Aware' },
  { name: 'Australia', flag: '🇦🇺', taxLabel: 'GST', currency: 'AUD (A$)', badge: 'ATO-Aware' },
];

export function GlobalComplianceSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = countries[selectedIndex];

  return (
    <section id="compliance" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <AnimatedSection className="text-center mb-12">
          <p className="text-caption uppercase tracking-widest font-semibold text-muted-foreground mb-3">
            Why Generic Invoicing Fails
          </p>
          <p className="text-body text-muted-foreground mb-4">
            Most invoicing tools are generic. Compliance isn't.
          </p>
          <h2 className="text-h1 lg:text-display text-heading">
            Built for Multi-Country{' '}
            <span className="font-serif italic text-primary">Compliance</span>
          </h2>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-12">
          {/* Left: Features */}
          <AnimatedSection delay={0.1}>
            <ul className="space-y-5">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-body text-foreground">{label}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-body-lg font-medium text-heading">
              Your invoices adapt to your country — automatically.
              <br />
              <span className="text-muted-foreground font-normal">
                No generic templates. No guessing tax fields.
              </span>
            </p>
          </AnimatedSection>

          {/* Right: Interactive card */}
          <AnimatedSection delay={0.2}>
            <div className="bg-card rounded-2xl border border-border shadow-soft-lg p-6 lg:p-8">
              <p className="text-caption uppercase tracking-wide font-semibold text-muted-foreground mb-4">
                Invoice Preview
              </p>

              {/* Country selector */}
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

              {/* Preview card */}
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
                    <span className="text-body-sm text-muted-foreground">Tax Label</span>
                    <span className="text-body font-semibold text-heading">{selected.taxLabel}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-muted-foreground">Currency</span>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-body-sm font-medium">
                      {selected.currency}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-body-sm text-muted-foreground">Compliance</span>
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

        {/* Microcopy footer */}
        <AnimatedSection delay={0.3} className="mt-12 text-center space-y-1">
          <p className="text-caption text-muted-foreground">
            Tax enforcement varies by jurisdiction. Invoicemonk adapts labels and structure based on your selected country.
          </p>
          <p className="text-caption text-muted-foreground">
            Field labels and structure adapt automatically. Tax rate configuration remains user-controlled.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
