import { LocaleConfig } from './types';

export const enSC: LocaleConfig = {
  code: "en-SC",
  country: "Seychelles",
  countryCode: "SC",
  flag: "🇸🇨",
  currency: {
    code: "SCR",
    symbol: "₨",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for Seychelles Compliance",
      headline: "Professional invoices for",
      headlineAccent: "Seychellois businesses",
      subheadline: "Create SRC-compliant invoices, track revenue, and manage your finances effortlessly.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by Seychellois businesses",
    },
    compliance: {
      authority: "SRC",
      message: "Fully compliant with Seychelles Revenue Commission requirements",
    },
    socialProof: "Join growing businesses across Seychelles",
    paymentGateway: "Bank Transfer",
    seo: {
      siteTitle: "Invoicemonk Seychelles - SRC-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Seychellois businesses. SRC-compliant with VAT support. Free tier available.",
      complianceKeyword: "SRC-compliant",
      targetAudience: "Seychellois",
      region: "Seychelles",
      hreflangCode: "en-SC",
    },
    testimonials: [
      {
        quote: "Invoicemonk made VAT compliance simple for our tourism business. We can focus on guests instead of paperwork.",
        highlight: "VAT compliance simple",
        name: "Jean-Pierre Laporte",
        title: "Owner",
        company: "Mahé Island Tours",
        location: "Victoria, Seychelles",
      },
      {
        quote: "Managing invoices for our resort suppliers used to take days. Invoicemonk cut that down to minutes.",
        highlight: "cut that down to minutes",
        name: "Marie-Claire Dubois",
        title: "Finance Manager",
        company: "Praslin Hospitality Group",
        location: "Praslin, Seychelles",
      },
      {
        quote: "The multi-currency support is essential for our import business. Invoicemonk handles SCR and USD invoicing seamlessly.",
        highlight: "handles SCR and USD invoicing seamlessly",
        name: "Patrick Morel",
        title: "Director",
        company: "Seychelles Trading Co.",
        location: "Victoria, Seychelles",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Seychelles?",
        answer: "Invoicemonk supports bank transfers and international card payments. Clients can pay directly from the invoice link.",
      },
      {
        question: "Is Invoicemonk compliant with SRC requirements?",
        answer: "Yes. Invoicemonk generates SRC-compliant invoices with proper VAT calculations at 15%. All documents meet Seychelles Revenue Commission standards.",
      },
      {
        question: "How much does Invoicemonk cost in Seychelles?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at ₨150/month (Professional) and ₨300/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle VAT for Seychellois businesses?",
        answer: "Yes. Invoicemonk automatically calculates the 15% VAT rate and tracks VAT for your SRC filings.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with SRC VAT compliance requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join Seychellois businesses using Invoicemonk to manage their finances.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by Seychellois businesses",
  },
  pricing: {
    free: 0,
    professional: 150,
    business: 300,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "sc",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
