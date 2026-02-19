import { Check, Globe, FileText, Shield, BarChart3, Bell } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const features = [
  { icon: Globe, label: 'Multi-currency invoicing with no FX distortion' },
  { icon: FileText, label: 'Clean, professional PDF invoices' },
  { icon: Shield, label: 'Tax-compliant across multiple countries' },
  { icon: BarChart3, label: 'Revenue tracking by client & period' },
  { icon: Bell, label: 'Automated payment reminders' },
];

export function CompliancePositioningSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-h1 lg:text-display text-heading mb-4">
            Built for Everyone Who{' '}
            <span className="font-serif italic text-primary">Invoices</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            From freelancers to agencies, consultants to contractors — Invoicemonk helps you create compliant invoices and get paid faster.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="max-w-2xl mx-auto">
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

          <p className="mt-10 text-body text-muted-foreground text-center">
            Trusted by freelancers, consultants, agencies, and small businesses worldwide.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
