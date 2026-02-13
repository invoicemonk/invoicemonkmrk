import { LocaleConfig } from '@/locales/types';

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  id: 'free' | 'starter' | 'professional' | 'business';
  name: string;
  description: string;
  features: string[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
  badge?: string;
  compliance?: boolean;
}

// Feature lists for each tier
export const freeTierFeatures = [
  '5 invoices & 5 receipts/month',
  '1 currency account',
  '1 payment method per currency',
  'Accounting & expense tracking',
  'Credit notes',
  'Invoice verification portal',
  'Invoicemonk watermark on PDFs',
];

export const starterTierFeatures = [
  'Unlimited invoices & receipts',
  '3 currency accounts',
  '2 payment methods per currency',
  'Accounting & expense tracking',
  'Credit notes',
  'Invoice verification portal',
  'Invoicemonk watermark on PDFs',
];

export const professionalTierFeatures = [
  'Everything in Starter',
  'Unlimited currency accounts',
  'Up to 5 team members',
  'Unlimited payment methods',
  'Full audit trail',
  'Data exports (CSV, PDF)',
  'Advanced reports',
  'Custom branding & premium templates',
  'Watermark-free PDFs',
];

export const professionalTierFeaturesIntl = [
  'Unlimited invoices & receipts',
  'Unlimited currency accounts',
  'Up to 5 team members',
  'Unlimited payment methods',
  'Full audit trail',
  'Data exports (CSV, PDF)',
  'Advanced reports',
  'Custom branding & premium templates',
  'Watermark-free PDFs',
];

export const businessTierFeatures = [
  'Everything in Professional',
  'Unlimited team members',
  'API access',
  'Enterprise-grade support',
];

// Feature comparison data for the comparison table
export interface FeatureComparisonRow {
  feature: string;
  free: string;
  starter: string;
  professional: string;
  business: string;
}

export const limitsComparison: FeatureComparisonRow[] = [
  { feature: 'Invoices per month', free: '5', starter: 'Unlimited', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Receipts per month', free: '5', starter: 'Unlimited', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Currency accounts', free: '1', starter: '3', professional: 'Unlimited', business: 'Unlimited' },
  { feature: 'Team members', free: '1', starter: '1', professional: 'Up to 5', business: 'Unlimited' },
  { feature: 'Payment methods per currency', free: '1', starter: '2', professional: 'Unlimited', business: 'Unlimited' },
];

export const featuresComparison: FeatureComparisonRow[] = [
  { feature: 'Accounting module', free: '✓', starter: '✓', professional: '✓', business: '✓' },
  { feature: 'Expense tracking', free: '✓', starter: '✓', professional: '✓', business: '✓' },
  { feature: 'Credit notes', free: '✓', starter: '✓', professional: '✓', business: '✓' },
  { feature: 'In-app support', free: '✓', starter: '✓', professional: '✓', business: '✓' },
  { feature: 'Invoice verification portal', free: '✓', starter: '✓', professional: '✓', business: '✓' },
  { feature: 'Full audit trail', free: '—', starter: '—', professional: '✓', business: '✓' },
  { feature: 'Custom branding', free: '—', starter: '—', professional: '✓', business: '✓' },
  { feature: 'Data exports (CSV, PDF)', free: '—', starter: '—', professional: '✓', business: '✓' },
  { feature: 'Advanced reports', free: '—', starter: '—', professional: '✓', business: '✓' },
  { feature: 'Premium templates', free: '—', starter: '—', professional: '✓', business: '✓' },
  { feature: 'Watermark-free PDFs', free: '—', starter: '—', professional: '✓', business: '✓' },
  { feature: 'API access', free: '—', starter: '—', professional: '—', business: '✓' },
];

// Get pricing plans based on locale
export function getPricingPlans(locale: LocaleConfig): PricingPlan[] {
  const showStarterTier = locale.pricingContent.starterAvailable;

  const plans: PricingPlan[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'For individuals getting started',
      features: freeTierFeatures,
      cta: 'Get Started',
      ctaLink: 'https://app.invoicemonk.com/signup',
      popular: false,
      compliance: false,
    },
  ];

  if (showStarterTier) {
    plans.push({
      id: 'starter',
      name: 'Starter',
      description: 'For solo businesses ready to grow',
      features: starterTierFeatures,
      cta: 'Start Free Trial',
      ctaLink: 'https://app.invoicemonk.com/signup?plan=starter',
      popular: false,
      compliance: false,
    });
  }

  plans.push({
    id: 'professional',
    name: 'Professional',
    description: 'For growing businesses',
    features: showStarterTier ? professionalTierFeatures : professionalTierFeaturesIntl,
    cta: 'Start Free Trial',
    ctaLink: 'https://app.invoicemonk.com/signup?plan=professional',
    popular: true,
    badge: 'Recommended',
    compliance: true,
  });

  plans.push({
    id: 'business',
    name: 'Business',
    description: 'For enterprises with advanced needs',
    features: businessTierFeatures,
    cta: 'Contact Sales',
    ctaLink: 'https://app.invoicemonk.com/signup?plan=business',
    popular: false,
    badge: 'Enterprise',
    compliance: true,
  });

  return plans;
}

// Calculate price based on billing period
export function calculatePrice(
  locale: LocaleConfig,
  planId: 'free' | 'starter' | 'professional' | 'business',
  isAnnual: boolean
): { monthly: number; total: number } {
  const { pricing } = locale;
  
  let basePrice = 0;
  
  switch (planId) {
    case 'free':
      return { monthly: 0, total: 0 };
    case 'starter':
      basePrice = pricing.starter || 0;
      break;
    case 'professional':
      basePrice = pricing.professional;
      break;
    case 'business':
      basePrice = pricing.business;
      break;
  }

  if (!isAnnual) {
    return { monthly: basePrice, total: basePrice };
  }

  const { annualMultiplier } = pricing;
  
  if (annualMultiplier >= 1) {
    const annualTotal = basePrice * annualMultiplier;
    const effectiveMonthly = Math.round(annualTotal / 12);
    return { monthly: effectiveMonthly, total: annualTotal };
  } else {
    const annualTotal = Math.round(basePrice * 12 * annualMultiplier);
    const effectiveMonthly = Math.round(annualTotal / 12);
    return { monthly: effectiveMonthly, total: annualTotal };
  }
}
