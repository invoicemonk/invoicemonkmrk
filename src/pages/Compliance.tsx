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

const complianceFAQs = [
  { question: 'What does compliance-first mean?', answer: 'It means every feature in Invoicemonk is built with regulatory compliance at its core. Records are immutable, timestamped, and audit-ready from the moment they are created.' },
  { question: 'Which tax authorities does Invoicemonk support?', answer: 'Invoicemonk supports compliance requirements for FIRS (Nigeria), HMRC (UK), IRS (US), CRA (Canada), and ATO (Australia), with more regions being added regularly.' },
  { question: 'Can I export reports for my auditor?', answer: 'Yes. Generate compliance reports in formats accepted by tax authorities and auditors worldwide. All records include complete audit trails with timestamps and user information.' },
  { question: 'Are my invoice records truly immutable?', answer: 'Yes. Once created, invoice records cannot be altered or deleted. Every change creates a new version while preserving the original, ensuring complete data integrity for audits.' },
  { question: 'What is e-invoicing and does Invoicemonk support it?', answer: 'E-invoicing is the electronic exchange of invoices in structured digital formats required by tax authorities. Invoicemonk supports ZATCA Phase 2 (Saudi Arabia), Peppol (Europe), and other regional e-invoicing mandates, generating fully compliant e-invoices automatically.' },
  { question: 'What is an Invoice Reference Number (IRN)?', answer: 'An IRN is a unique identifier assigned to every invoice for end-to-end traceability. Invoicemonk generates IRNs automatically, ensuring every document can be tracked and verified throughout its lifecycle.' },
  { question: 'Does Invoicemonk support digital signatures?', answer: 'Yes. Invoicemonk supports Cryptographic Stamp Identifiers (CSID) and digital signatures that verify document authenticity. Recipients can independently confirm that an invoice has not been tampered with.' },
];

const complianceFeatures = [
  { icon: Lock, title: 'Immutable Records', description: 'Once created, invoice records cannot be altered or deleted, ensuring complete data integrity for audits.' },
  { icon: Clock, title: 'Timestamped Logs', description: 'Every action is logged with precise timestamps, creating a complete chronological audit trail.' },
  { icon: FileCheck, title: 'Export-Ready Reports', description: 'Generate compliance reports in formats accepted by tax authorities and auditors worldwide.' },
  { icon: Shield, title: 'Regulatory Standards', description: 'Built to meet international invoicing and record-keeping requirements for small businesses.' },
  { icon: FileDigit, title: 'E-Invoicing Compliance', description: 'Generate and receive e-invoices per ZATCA, Peppol, and regional mandates.' },
  { icon: Fingerprint, title: 'Digital Signatures (CSID)', description: 'Cryptographic stamps and digital signatures to verify document authenticity.' },
  { icon: Hash, title: 'Invoice Reference Numbers', description: 'Unique IRN assigned to every invoice for end-to-end traceability.' },
  { icon: Users, title: 'Role-Based Access', description: 'Assign Finance, Sales, and Executive roles with appropriate permissions.' },
];

const Compliance = () => {
  const { locale } = useLocale();
  const { compliance } = locale.content;
  const seo = pageSEO['/compliance'];

  return (
    <Layout>
      <FAQSchema items={complianceFAQs} />
      <SEOHead
        title={seo?.getTitle(locale) || 'Tax Compliance | Invoicemonk'}
        description={seo?.getDescription(locale) || 'Stay audit-ready with immutable records and comprehensive audit trails.'}
        canonical="https://invoicemonk.com/compliance"
      />
      {/* Hero Section */}
      <div className="relative">
        <PageHero
          badge={{ icon: Shield, text: `${compliance.authority}-Compliant` }}
          title="Built for audit-ready confidence"
          accentWord="audit-ready"
          description={`${compliance.message}. Invoicemonk maintains immutable records and comprehensive audit trails, so you're always prepared for regulatory review.`}
          primaryCta={{ text: 'Start Free', href: 'https://app.invoicemonk.com/signup' }}
          secondaryCta={{ text: 'Learn More', href: '/why-invoicemonk', external: false }}
          trustBadge="Immutable records • Complete audit trails • Export-ready reports"
          backgroundVariant="mesh"
        />
        {/* Floating Elements */}
        <FloatingSecurityBadge 
          label="Audit Ready"
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
