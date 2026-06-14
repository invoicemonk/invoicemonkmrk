export interface PlanFeature {
  text: string;
  included: boolean;
}

export type PricingPlanId = 'professional' | 'sme' | 'business';

export interface PricingPlan {
  id: PricingPlanId;
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

export const proFeatures = [
  'Unlimited invoices',
  'Unlimited receipts',
  'Unlimited clients',
  'Unlimited currency accounts',
  'Up to 5 team members',
  'Watermark-free PDFs',
  'Accounting module',
  'Expense tracking',
  'Credit notes',
  'In-app support',
  'Full audit trail',
  'Data exports',
  'Custom branding',
];

export const smeFeatures = [
  'Everything in Pro',
  'Unlimited clients',
  'Unlimited team members',
  'Online payment',
  'Advanced reports',
  'Premium templates',
];

export const bizFeatures = [
  'Everything in SME',
  'E-invoicing & government submission',
  'Dedicated account manager',
  'Custom integrations',
  'SLA guarantee',
  'Unlimited everything',
  'Priority support',
];

export function getPricingPlans(): PricingPlan[] {
  return [
    {
      id: 'professional',
      name: 'Pro',
      description: 'For freelancers and growing businesses',
      features: proFeatures,
      cta: 'Get started',
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
      cta: 'Get started',
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
  planId: PricingPlanId,
  isAnnual: boolean
): { monthly: number; total: number } {
  const prices: Record<PricingPlanId, number> = {
    professional: 15,
    sme: 49,
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
