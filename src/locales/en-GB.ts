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
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Beautiful invoices,",
      headlineAccent: "sorted",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by UK businesses",
    },
    compliance: {
      authority: "HMRC",
      message: "Fully compliant with Making Tax Digital requirements",
    },
    socialProof: "Join growing businesses across the United Kingdom",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk UK - HMRC-Compliant Invoicing Software",
      siteDescription: "Invoicing software built for UK businesses. HMRC-compliant, Making Tax Digital ready. Free tier available.",
      complianceKeyword: "HMRC-compliant",
      targetAudience: "British",
      region: "United Kingdom",
      hreflangCode: "en-GB",
    },
  },
  pricing: {
    free: 0,
    professional: 4,
    business: 12,
    annualMultiplier: 0.8, // 20% off
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "uk",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "20%" },
};
