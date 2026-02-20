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
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Smart invoicing for",
      headlineAccent: "Australian businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Australian businesses",
    },
    compliance: {
      authority: "ATO",
      message: "Compliant with Australian Tax Office requirements including GST",
    },
    socialProof: "Join growing businesses across Australia",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk Australia - ATO-Compliant Invoicing Software",
      siteDescription: "Invoicing and accounting software for Australian businesses. ATO-compliant with GST tracking. Free tier available.",
      complianceKeyword: "ATO-compliant",
      targetAudience: "Australian",
      region: "Australia",
      hreflangCode: "en-AU",
    },
  },
  pricing: {
    free: 0,
    professional: 8,
    business: 29,
    annualMultiplier: 0.8, // 20% off
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "au",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "GST", rate: "10%" },
};
