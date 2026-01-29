import { LocaleConfig } from './types';

export const enNG: LocaleConfig = {
  code: "en-NG",
  country: "Nigeria",
  countryCode: "NG",
  flag: "🇳🇬",
  currency: {
    code: "NGN",
    symbol: "₦",
    position: "before",
  },
  content: {
    hero: {
      badge: "FIRS-compliant invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Nigerian businesses",
      subheadline: "Create FIRS-compliant invoices, track payments, and manage expenses. Built for Nigerian entrepreneurs and SMEs.",
      cta: "Start Free Trial",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 5,000+ Nigerian businesses",
    },
    compliance: {
      authority: "FIRS",
      message: "Fully compliant with Federal Inland Revenue Service requirements",
    },
    socialProof: "Join 5,000+ businesses across Nigeria",
    paymentGateway: "Paystack",
  },
  pricing: {
    starter: 5000,
    pro: 12500,
    business: 25000,
  },
};
