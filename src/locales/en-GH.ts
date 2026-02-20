import { LocaleConfig } from './types';

export const enGH: LocaleConfig = {
  code: "en-GH",
  country: "Ghana",
  countryCode: "GH",
  flag: "🇬🇭",
  currency: {
    code: "GHS",
    symbol: "GH₵",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Ghanaian businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Ghanaian businesses",
    },
    compliance: {
      authority: "GRA",
      message: "Compliant with Ghana Revenue Authority requirements",
    },
    socialProof: "Join growing businesses across Ghana",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Ghana - GRA-Compliant Invoicing Software",
      siteDescription: "Professional invoicing software for Ghanaian businesses. GRA-compliant with Paystack integration. Free tier available.",
      complianceKeyword: "GRA-compliant",
      targetAudience: "Ghanaian",
      region: "Ghana",
      hreflangCode: "en-GH",
    },
  },
  pricing: {
    free: 0,
    starter: 50,
    professional: 100,
    business: 200,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "2 months free",
    starterAvailable: true,
  },
  urlPrefix: "gh",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
