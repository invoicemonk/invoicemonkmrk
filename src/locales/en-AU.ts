import { LocaleConfig } from './types';

export const enAU: LocaleConfig = {
  code: "en-AU",
  country: "Australia",
  countryCode: "AU",
  flag: "🇦🇺",
  currency: {
    code: "AUD",
    symbol: "A$",
    position: "before",
  },
  content: {
    hero: {
      badge: "ATO-ready invoicing",
      headline: "Smart invoicing for",
      headlineAccent: "Australian businesses",
      subheadline: "Create ATO-compliant invoices, track GST, and streamline your finances. Made for Australian entrepreneurs and SMEs.",
      cta: "Get Started Free",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 6,000+ Australian businesses",
    },
    compliance: {
      authority: "ATO",
      message: "Compliant with Australian Tax Office requirements including GST",
    },
    socialProof: "Join 6,000+ businesses across Australia",
    paymentGateway: "Stripe",
  },
  pricing: {
    starter: 12,
    pro: 25,
    business: 49,
  },
};
