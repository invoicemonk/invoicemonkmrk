import { LocaleConfig } from './types';

export const enCA: LocaleConfig = {
  code: "en-CA",
  country: "Canada",
  countryCode: "CA",
  flag: "🇨🇦",
  currency: {
    code: "CAD",
    symbol: "C$",
    position: "before",
  },
  content: {
    hero: {
      badge: "CRA-compliant invoicing",
      headline: "Invoicing made simple",
      headlineAccent: "for Canadians",
      subheadline: "Create CRA-compliant invoices, track GST/HST, and manage your finances with ease. Built for Canadian businesses.",
      cta: "Get Started Free",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 8,000+ Canadian businesses",
    },
    compliance: {
      authority: "CRA",
      message: "Compliant with Canada Revenue Agency requirements including GST/HST",
    },
    socialProof: "Join 8,000+ businesses across Canada",
    paymentGateway: "Stripe",
  },
  pricing: {
    starter: 12,
    pro: 25,
    business: 49,
  },
};
