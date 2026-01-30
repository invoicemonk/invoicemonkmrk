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
      badge: "NRS-compliant invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Nigerian businesses",
      subheadline: "Create NRS-compliant invoices, track payments, and manage expenses. Built for Nigerian entrepreneurs and SMEs.",
      cta: "Start Your Free Trial",
      secondaryCta: "Watch Demo",
      trustBadge: "Trusted by 5,000+ Nigerian businesses",
    },
    compliance: {
      authority: "NRS",
      message: "Fully compliant with Nigerian Revenue Service requirements",
    },
    socialProof: "Join 5,000+ businesses across Nigeria",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Nigeria - NRS-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Nigerian businesses. NRS-compliant, Paystack integration. Free tier available.",
      complianceKeyword: "NRS-compliant",
      targetAudience: "Nigerian",
      region: "Nigeria",
      hreflangCode: "en-NG",
    },
  },
  pricing: {
    starter: 5000,
    pro: 12500,
    business: 25000,
  },
};
