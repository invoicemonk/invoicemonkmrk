import { LocaleConfig } from './types';

export const enGB: LocaleConfig = {
  code: "en-GB",
  country: "United Kingdom",
  countryCode: "GB",
  flag: "🇬🇧",
  currency: {
    code: "GBP",
    symbol: "£",
    position: "before",
  },
  content: {
    hero: {
      badge: "HMRC-compliant invoicing",
      headline: "Beautiful invoices,",
      headlineAccent: "sorted",
      subheadline: "Create HMRC-compliant invoices with proper VAT handling. Perfect for UK freelancers, contractors and businesses.",
      cta: "Get Started Free",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 10,000+ UK businesses",
    },
    compliance: {
      authority: "HMRC",
      message: "Fully compliant with Making Tax Digital requirements",
    },
    socialProof: "Join 10,000+ businesses across the United Kingdom",
    paymentGateway: "Stripe",
  },
  pricing: {
    starter: 8,
    pro: 15,
    business: 29,
  },
};
