import { Lock, FileCheck, Layers, ClipboardList, ExternalLink, FileDigit, Hash, Fingerprint } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useTranslation } from 'react-i18next';

const trustIcons = [Lock, FileCheck, Layers, ClipboardList, ExternalLink, FileDigit, Hash, Fingerprint];

export function ComplianceTrustSection() {
  const { t } = useTranslation('home');
  const items = t('trust.items', { returnObjects: true }) as { label: string; description: string }[];

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h1 lg:text-display text-heading">
            {t('trust.heading')}{' '}
            <span className="font-serif italic text-primary">{t('trust.headingAccent')}</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {items.map((item, i) => {
            const Icon = trustIcons[i] || Lock;
            return (
              <StaggerItem key={i}>
                <div className="bg-card rounded-xl border border-border p-6 hover:shadow-soft-lg transition-shadow duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-body font-semibold text-heading mb-1">{item.label}</h3>
                  <p className="text-body-sm text-muted-foreground">{item.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
