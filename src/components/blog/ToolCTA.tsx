import { Link } from '@/components/LocalizedLink';
import { ArrowRight, FileText, Calculator, DollarSign, LayoutTemplate } from 'lucide-react';

interface ToolLink {
  label: string;
  href: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const toolsByPillar: Record<string, ToolLink[]> = {
  invoicing: [
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create a professional invoice in under 2 minutes — no signup.', icon: FileText },
    { label: 'Invoice Templates', href: '/invoice-templates', description: '6 industry-specific templates ready to download.', icon: LayoutTemplate },
  ],
  'getting-paid': [
    { label: 'Payment Fee Calculator', href: '/international-payment-fee-calculator', description: 'Compare fees across PayPal, Wise, and bank transfers.', icon: Calculator },
    { label: 'PayPal vs Wise Fees', href: '/paypal-vs-wise-fees', description: 'Side-by-side fee comparison for international payments.', icon: Calculator },
  ],
  'business-finances': [
    { label: 'Freelancer Rate Calculator', href: '/freelancer-rate-calculator', description: 'Calculate your ideal hourly or project rate.', icon: DollarSign },
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create a professional invoice in under 2 minutes.', icon: FileText },
  ],
  'tax-compliance': [
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Tax-compliant invoices with VAT/GST fields built in.', icon: FileText },
    { label: 'Invoice Templates', href: '/invoice-templates', description: 'Templates with correct tax fields for your jurisdiction.', icon: LayoutTemplate },
  ],
  freelancing: [
    { label: 'Freelancer Rate Calculator', href: '/freelancer-rate-calculator', description: 'Set profitable pricing based on your goals and expenses.', icon: DollarSign },
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Bill clients professionally in under 2 minutes.', icon: FileText },
  ],
  estimates: [
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Convert accepted estimates into invoices instantly.', icon: FileText },
    { label: 'Invoice Templates', href: '/invoice-templates', description: 'Professional templates for every industry.', icon: LayoutTemplate },
  ],
  expenses: [
    { label: 'Payment Fee Calculator', href: '/international-payment-fee-calculator', description: 'Track and compare payment costs as a business expense.', icon: Calculator },
    { label: 'Freelancer Rate Calculator', href: '/freelancer-rate-calculator', description: 'Factor expenses into your rate calculation.', icon: DollarSign },
  ],
  'client-management': [
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create branded invoices for your clients.', icon: FileText },
    { label: 'Invoice Templates', href: '/invoice-templates', description: 'Professional templates to impress clients.', icon: LayoutTemplate },
  ],
  receipts: [
    { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create invoices with receipt-ready formatting.', icon: FileText },
    { label: 'Payment Fee Calculator', href: '/international-payment-fee-calculator', description: 'Track payment costs alongside your receipts.', icon: Calculator },
  ],
};

// Default tools if no pillar match
const defaultTools: ToolLink[] = [
  { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create professional invoices — no signup needed.', icon: FileText },
  { label: 'Payment Fee Calculator', href: '/international-payment-fee-calculator', description: 'Compare international payment fees instantly.', icon: Calculator },
];

interface ToolCTAProps {
  pillarId?: string;
}

export function ToolCTA({ pillarId }: ToolCTAProps) {
  const tools = (pillarId && toolsByPillar[pillarId]) || defaultTools;

  return (
    <aside className="my-8 p-5 rounded-xl border border-primary/20 bg-primary/5">
      <p className="text-sm font-semibold text-primary mb-3 uppercase tracking-wide">Free Tools</p>
      <div className="space-y-3">
        {tools.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              to={tool.href}
              className="group flex items-center gap-3 p-3 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">{tool.label}</span>
                <p className="text-xs text-muted-foreground mt-0.5">{tool.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
