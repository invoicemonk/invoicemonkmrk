import { Lock, FileCheck, Layers, ClipboardList, ExternalLink } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const trustItems = [
  { icon: Lock, label: 'Immutable Invoice Records', description: 'Once generated, invoices cannot be silently altered.' },
  { icon: FileCheck, label: 'Snapshot-Based PDF Generation', description: 'Every PDF captures the exact state at time of issue.' },
  { icon: Layers, label: 'Versioned Tax Schemas', description: 'Tax structures update as regulations evolve.' },
  { icon: ClipboardList, label: 'Audit Trail Access', description: 'Full change history available on Pro plan.' },
  { icon: ExternalLink, label: 'Public Verification Links', description: 'Clients can verify invoice authenticity independently.' },
];

export function ComplianceTrustSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-h1 lg:text-display text-heading">
            Compliance You Can{' '}
            <span className="font-serif italic text-primary">Prove.</span>
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {trustItems.map(({ icon: Icon, label, description }) => (
            <StaggerItem key={label}>
              <div className="bg-card rounded-xl border border-border p-6 hover:shadow-soft-lg transition-shadow duration-300">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-body font-semibold text-heading mb-1">{label}</h3>
                <p className="text-body-sm text-muted-foreground">{description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
