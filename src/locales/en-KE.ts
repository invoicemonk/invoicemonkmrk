import { LocaleConfig } from './types';

export const enKE: LocaleConfig = {
  code: "en-KE",
  country: "Kenya",
  countryCode: "KE",
  flag: "🇰🇪",
  currency: {
    code: "KES",
    symbol: "KSh",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Kenyan businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Kenyan businesses",
    },
    compliance: {
      authority: "KRA",
      message: "Compliant with Kenya Revenue Authority requirements",
    },
    socialProof: "Join growing businesses across Kenya",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Kenya - KRA-Compliant Invoicing Software",
      siteDescription: "Professional invoicing software for Kenyan businesses. KRA-compliant with mobile payments. Free tier available.",
      complianceKeyword: "KRA-compliant",
      targetAudience: "Kenyan",
      region: "Kenya",
      hreflangCode: "en-KE",
    },
  },
  pricing: {
    free: 0,
    starter: 500,
    professional: 1000,
    business: 2000,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "2 months free",
    starterAvailable: true,
  },
  urlPrefix: "ke",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "16%" },
};
