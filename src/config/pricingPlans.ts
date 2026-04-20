export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: 'free' | 'professional' | 'sme' | 'business';
  name: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  badge?: string;
  compliance?: boolean;
  customPricing?: boolean;
}

export const starterFeatures = [
  '5 invoices/month',
  '5 receipts/month',
  '1 currency account',
  'Up to 1 team member',
  'Hash-chained audit trail',
  'Invoice verification portal',
  'Multi-currency invoicing',
  'Smart invoice numbering',
  'Accounting module',
  'Expense tracking',
  'Credit notes',
  'In-app support',
];

export const proFeatures = [
  'Unlimited invoices',
  'Unlimited receipts',
  'Unlimited currency accounts',
  'Up to 5 team members',
  'Deposit & milestone invoicing',
  'Recurring invoices',
  'AI receipt scanning',
  'Stripe & Paystack payments',
  'Branded templates & watermark-free PDFs',
  'Multi-business (up to 3)',
  'Hash-chained audit trail',
  'Invoice verification portal',
  'Multi-currency invoicing',
  'Smart invoice numbering',
  'Accounting module',
  'Expense tracking',
  'Credit notes',
  'In-app support',
];

export const smeFeatures = [
  'Everything in Pro',
  'Receivables intelligence',
  'Profitability reports (cash & accrual)',
  'Products & services catalog',
  'Team roles & permissions',
  'Unlimited multi-business',
  'CSV import',
  'Unlimited team members',
  'Online payment',
  'Advanced reports',
  'Premium templates',
  'Watermark-free PDFs',
];

export const bizFeatures = [
  'Everything in SME',
  'E-invoicing (FatturaPA, KSeF, ZUGFeRD) & PEPPOL',
  'Jurisdiction-aware tax engine',
  'Reports & exports API',
  'Dedicated account manager',
  'Custom integrations',
  'SLA guarantee',
  'Unlimited everything',
  'Priority support',
];

export function getPricingPlans(): PricingPlan[] {
  return [
    {
      id: 'free',
      name: 'Starter',
      description: 'For individuals getting started',
      features: starterFeatures,
      cta: 'Continue with Free plan',
      ctaLink: 'https://app.invoicemonk.com/signup',
      popular: false,
      compliance: false,
    },
    {
      id: 'professional',
      name: 'Pro',
      description: 'For growing businesses',
      features: proFeatures,
      cta: 'Get Started',
      ctaLink: 'https://app.invoicemonk.com/signup?plan=professional',
      popular: true,
      badge: 'Recommended',
      compliance: true,
    },
    {
      id: 'sme',
      name: 'SME',
      description: 'For scaling companies',
      features: smeFeatures,
      cta: 'Get Started',
      ctaLink: 'https://app.invoicemonk.com/signup?plan=sme',
      popular: false,
      compliance: true,
    },
    {
      id: 'business',
      name: 'Biz',
      description: 'Enterprise with e-invoicing & compliance',
      features: bizFeatures,
      cta: 'Contact Sales',
      ctaLink: 'mailto:sales@invoicemonk.com',
      popular: false,
      badge: 'Enterprise',
      compliance: true,
      customPricing: true,
    },
  ];
}

export function calculatePrice(
  planId: 'free' | 'professional' | 'sme' | 'business',
  isAnnual: boolean
): { monthly: number; total: number } {
  const prices: Record<string, number> = {
    free: 0,
    professional: 29,
    sme: 129,
    business: 0,
  };

  const basePrice = prices[planId] ?? 0;
  if (basePrice === 0) return { monthly: 0, total: 0 };

  if (!isAnnual) {
    return { monthly: basePrice, total: basePrice };
  }

  // Pay for 10 months, get 12 (~17% savings)
  const annualTotal = basePrice * 10;
  const effectiveMonthly = Math.round((annualTotal / 12) * 100) / 100;
  return { monthly: effectiveMonthly, total: annualTotal };
}
