import { Check, ShoppingCart, FileText, CreditCard, BarChart3, ClipboardList } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const features = [
  { icon: ShoppingCart, label: 'Multi-currency accounts (no FX distortion)' },
  { icon: FileText, label: 'Clean PDF invoices for global customers' },
  { icon: CreditCard, label: 'Payment method snapshotting' },
  { icon: BarChart3, label: 'Revenue tracking by client & period' },
  { icon: ClipboardList, label: 'Audit logs for platform payouts' },
];

export function EcommercePositioningSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-h1 lg:text-display text-heading mb-4">
            Built for E-Commerce{' '}
            <span className="font-serif italic text-primary">& Digital Sellers</span>
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Built for founders selling across borders.
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
            Perfect for Shopify, WooCommerce, and global sellers.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
