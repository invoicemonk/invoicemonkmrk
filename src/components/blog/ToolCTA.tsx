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

// Soft-sell copy per pillar — contextual, non-aggressive mid-article CTA
const softSellByPillar: Record<string, string> = {
  'invoicing-mastery': 'If you want invoices that look professional and get paid faster, Invoicemonk lets you create, send, and track invoices in under 2 minutes — with automatic tax calculations and payment reminders built in.',
  'getting-paid': 'Tired of chasing payments? Invoicemonk helps you create professional invoices that actually get paid — with automatic reminders, payment links, and real-time tracking so you always know where your money is.',
  'business-finances': 'Managing finances shouldn\'t feel like a second job. Invoicemonk combines invoicing, expense tracking, and financial reporting in one place — so you can focus on growing your business, not wrestling with spreadsheets.',
  'tax-compliance': 'Tax compliance is complicated enough without worrying about invoice formatting. Invoicemonk automatically includes the right tax fields, calculates VAT/GST, and generates compliant invoices for 20+ countries.',
  freelancing: 'As a freelancer, every minute spent on admin is a minute not earning. Invoicemonk automates your invoicing workflow — from creating branded invoices to sending payment reminders — so you can focus on the work that pays.',
  estimates: 'Win more projects with professional estimates that convert to invoices in one click. Invoicemonk handles the entire quote-to-cash workflow — proposals, approvals, invoices, and payment tracking.',
  expenses: 'Tracking expenses doesn\'t have to be painful. Invoicemonk lets you log expenses, attach receipts, and see your real profit margins alongside your invoicing — all in one dashboard.',
  'client-management': 'Build stronger client relationships with a professional billing experience. Invoicemonk stores client details, tracks payment history, and sends branded invoices that reflect your business.',
  receipts: 'Generate professional receipts automatically when payments are recorded. Invoicemonk creates tax-compliant receipts linked to your invoices — no manual work required.',
  invoicing: 'If you want invoices that look professional and get paid faster, Invoicemonk lets you create, send, and track invoices in under 2 minutes — with automatic tax calculations and payment reminders built in.',
};

// Default tools if no pillar match
const defaultTools: ToolLink[] = [
  { label: 'Free Invoice Generator', href: '/free-invoice-generator', description: 'Create professional invoices — no signup needed.', icon: FileText },
  { label: 'Payment Fee Calculator', href: '/international-payment-fee-calculator', description: 'Compare international payment fees instantly.', icon: Calculator },
];

const defaultSoftSell = 'Whether you\'re invoicing your first client or your hundredth, Invoicemonk makes it fast, professional, and free. Create an invoice in under 2 minutes — no signup required.';

interface ToolCTAProps {
  pillarId?: string;
}

export function ToolCTA({ pillarId }: ToolCTAProps) {
  const tools = (pillarId && toolsByPillar[pillarId]) || defaultTools;
  const softSell = (pillarId && softSellByPillar[pillarId]) || defaultSoftSell;

  return (
    <aside className="my-8 p-5 rounded-xl border border-primary/20 bg-primary/5">
      {/* Soft-sell contextual paragraph */}
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{softSell}</p>
      
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
