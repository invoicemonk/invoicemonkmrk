import { LocaleConfig } from './types';

export const enZA: LocaleConfig = {
  code: "en-ZA",
  country: "South Africa",
  countryCode: "ZA",
  flag: "🇿🇦",
  currency: {
    code: "ZAR",
    symbol: "R",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Professional invoices for",
      headlineAccent: "South African businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by South African businesses",
    },
    compliance: {
      authority: "SARS",
      message: "Compliant with South African Revenue Service requirements",
    },
    socialProof: "Join growing businesses across South Africa",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk South Africa - SARS-Compliant Invoicing Software",
      siteDescription: "Professional invoicing software for South African businesses. SARS-compliant with local payments. Free tier available.",
      complianceKeyword: "SARS-compliant",
      targetAudience: "South African",
      region: "South Africa",
      hreflangCode: "en-ZA",
    },
  },
  pricing: {
    free: 0,
    professional: 80,
    business: 250,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "za",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
