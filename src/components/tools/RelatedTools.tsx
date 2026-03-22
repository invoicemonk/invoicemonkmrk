import { Link } from '@/components/LocalizedLink';
import { ArrowRight, FileText, LayoutTemplate, Calculator, DollarSign, ArrowRightLeft, FileCheck, Globe } from 'lucide-react';

interface ToolDef {
  name: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const allTools: ToolDef[] = [
  { name: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create professional invoices with tax fields and instant PDF download.', icon: FileText },
  { name: 'Invoice Templates', href: '/invoice-templates', description: '6 industry-specific invoice templates ready to customize.', icon: LayoutTemplate },
  { name: 'Payment Fee Calculator', href: '/international-payment-fee-calculator', description: 'Compare fees across PayPal, Wise, Payoneer, and bank transfers.', icon: Calculator },
  { name: 'Freelancer Rate Calculator', href: '/freelancer-rate-calculator', description: 'Calculate your ideal hourly or project rate.', icon: DollarSign },
  { name: 'PayPal vs Wise Fees', href: '/paypal-vs-wise-fees', description: 'Side-by-side fee comparison for international payments.', icon: ArrowRightLeft },
  { name: 'Invoice Generator Australia', href: '/free-invoice-generator-australia', description: 'ATO-compliant invoices with ABN and GST fields.', icon: FileCheck },
  { name: 'Cheapest International Payments', href: '/cheapest-way-to-receive-international-payments', description: 'Find the lowest-cost method for your payment corridor.', icon: Globe },
];

interface RelatedToolsProps {
  /** The href of the current tool page — will be excluded from the list */
  currentHref: string;
  /** Max number of related tools to show */
  max?: number;
}

export function RelatedTools({ currentHref, max = 3 }: RelatedToolsProps) {
  const normalized = currentHref.replace(/\/$/, '');
  const siblings = allTools.filter(t => t.href !== normalized).slice(0, max);

  return (
    <section className="mt-16 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-foreground mb-6">Related Tools</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {siblings.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              to={tool.href}
              className="group flex flex-col gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:bg-primary/5 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{tool.description}</p>
              </div>
              <span className="mt-auto text-xs font-medium text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Try it <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
