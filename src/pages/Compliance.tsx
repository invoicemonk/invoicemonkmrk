import { Layout } from '@/components/layout/Layout';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { Shield, FileCheck, Clock, Lock, FileDigit, Fingerprint, Hash, Users } from 'lucide-react';
import { useLocale } from '@/hooks/useLocale';
import { PageHero } from '@/components/shared/PageHero';
import { 
  FloatingSecurityBadge,
  FloatingLockBadge,
  FloatingImmutableStamp
} from '@/components/shared/FloatingElements';
import { SEOHead } from '@/components/seo/SEOHead';
import { pageSEO } from '@/components/seo/seoConfig';
import { FAQSchema } from '@/components/seo/FAQSchema';
import { BreadcrumbSchema } from '@/components/seo/BreadcrumbSchema';
import { useTranslation } from 'react-i18next';

const featureKeys = [
  { key: 'immutableRecords', icon: Lock },
  { key: 'timestampedLogs', icon: Clock },
  { key: 'exportReadyReports', icon: FileCheck },
  { key: 'regulatoryStandards', icon: Shield },
  { key: 'eInvoicing', icon: FileDigit },
  { key: 'digitalSignatures', icon: Fingerprint },
  { key: 'irn', icon: Hash },
  { key: 'roleBasedAccess', icon: Users },
] as const;

const faqKeys = [
  'complianceFirst',
  'taxAuthorities',
  'exportReports',
  'immutable',
  'eInvoicing',
  'irn',
  'digitalSignatures',
] as const;

const Compliance = () => {
  const { locale } = useLocale();
  const { compliance } = locale.content;
  const seo = pageSEO['/compliance'];
  const { t } = useTranslation('compliance');

  const complianceFAQs = faqKeys.map(key => ({
    question: t(`faqs.${key}.question`),
    answer: t(`faqs.${key}.answer`),
  }));

  const complianceFeatures = featureKeys.map(({ key, icon }) => ({
    icon,
    title: t(`features.${key}.title`),
    description: t(`features.${key}.description`),
  }));

  return (
    <Layout>
      <FAQSchema items={complianceFAQs} />
      <SEOHead
        title={seo?.getTitle(locale) || 'Tax Compliance | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Stay audit-ready with immutable records and comprehensive audit trails.'}
      />
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Shield, text: t('hero.badge', { authority: compliance.authority }) }}
          title={t('hero.title')}
          accentWord={t('hero.accentWord')}
          description={t('hero.description', { message: compliance.message })}
          primaryCta={{ text: t('hero.primaryCta'), href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: t('hero.secondaryCta'), href: '/why-invoicemonk', external: false }}
          trustBadge={t('hero.trustBadge')}
          backgroundVariant="mesh"
        />
        {/* Floating Elements */}
        <FloatingSecurityBadge 
          label={t('floatingBadge')}
          className="absolute top-28 right-8 lg:right-20 hidden lg:block" 
          delay={0.4}
        />
        <FloatingLockBadge 
          className="absolute bottom-40 left-8 lg:left-16 hidden lg:block" 
          delay={0.6}
        />
        <FloatingImmutableStamp 
          className="absolute top-52 left-20 lg:left-36 hidden lg:block" 
          delay={0.8}
        />
      </div>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {complianceFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <StaggerItem key={feature.title}>
                  <div className="group h-full bg-card rounded-2xl p-8 border border-border hover:shadow-card-hover transition-all">
                    <div className="w-14 h-14 mb-6 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-h3 text-heading mb-3">{feature.title}</h3>
                    <p className="text-body text-muted-foreground">{feature.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </Layout>
  );
};

export default Compliance;