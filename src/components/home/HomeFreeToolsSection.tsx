import { LayoutTemplate, Calculator, DollarSign, ArrowRightLeft } from 'lucide-react';
import { Link } from '@/components/LocalizedLink';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useTranslation } from 'react-i18next';

const toolMeta = [
  { key: 'invoiceTemplates', href: '/invoice-templates', icon: LayoutTemplate },
  { key: 'feeCalculator', href: '/international-payment-fee-calculator', icon: Calculator },
  { key: 'rateCalculator', href: '/freelancer-rate-calculator', icon: DollarSign },
  { key: 'paypalVsWise', href: '/paypal-vs-wise-fees', icon: ArrowRightLeft },
];

export function HomeFreeToolsSection() {
  const { t } = useTranslation('home');
  const itemsRaw = t('freeTools.items', { returnObjects: true });
  const items = Array.isArray(itemsRaw) ? itemsRaw as { name: string; description: string }[] : [];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <h2 className="text-h2 mb-4">
            {t('freeTools.heading')}{' '}
            <span className="font-serif italic text-primary">{t('freeTools.headingAccent')}</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            {t('freeTools.subtitle')}
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => {
            const meta = toolMeta[index];
            if (!meta) return null;
            const Icon = meta.icon;
            return (
              <StaggerItem key={meta.key}>
                <Link
                  to={meta.href}
                  className="group flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-soft-md transition-all duration-300 hover:-translate-y-1 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-body-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-body-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <span className="mt-auto text-body-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('freeTools.tryIt')} →
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection className="text-center mt-10 max-w-2xl mx-auto">
          <p className="text-body text-muted-foreground">
            {t('freeTools.contextual')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
