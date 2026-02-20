import { LocaleConfig } from './types';

export const enZW: LocaleConfig = {
  code: "en-ZW",
  country: "Zimbabwe",
  countryCode: "ZW",
  flag: "🇿🇼",
  currency: {
    code: "USD",
    symbol: "$",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for Zimbabwean Compliance",
      headline: "Professional invoices for",
      headlineAccent: "Zimbabwean businesses",
      subheadline: "Create ZIMRA-compliant invoices, track revenue, and manage payments in USD.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by Zimbabwean businesses",
    },
    compliance: {
      authority: "ZIMRA",
      message: "Fully compliant with Zimbabwe Revenue Authority requirements",
    },
    socialProof: "Join growing businesses across Zimbabwe",
    paymentGateway: "Paynow & EcoCash",
    seo: {
      siteTitle: "Invoicemonk Zimbabwe - ZIMRA-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Zimbabwean businesses. ZIMRA-compliant, USD-based pricing. Free tier available.",
      complianceKeyword: "ZIMRA-compliant",
      targetAudience: "Zimbabwean",
      region: "Zimbabwe",
      hreflangCode: "en-ZW",
    },
    testimonials: [
      {
        quote: "Invoicemonk simplified our USD invoicing and ZIMRA compliance. We no longer worry about tax season.",
        highlight: "simplified our USD invoicing",
        name: "Tendai Moyo",
        title: "Founder",
        company: "Harare Tech Solutions",
        location: "Harare, Zimbabwe",
      },
      {
        quote: "The expense tracking saves us time every month. Perfect for small businesses operating in Zimbabwe's dollarized economy.",
        highlight: "saves us time every month",
        name: "Chiedza Mutasa",
        title: "Director",
        company: "Bulawayo Logistics",
        location: "Bulawayo, Zimbabwe",
      },
      {
        quote: "Finally an invoicing tool that understands Zimbabwean tax requirements. The VAT calculations are always accurate.",
        highlight: "understands Zimbabwean tax requirements",
        name: "Farai Nyathi",
        title: "Accountant",
        company: "Nyathi & Associates",
        location: "Harare, Zimbabwe",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Zimbabwe?",
        answer: "Invoicemonk supports EcoCash, bank transfers, and USD payments. Your clients can pay directly from the invoice.",
      },
      {
        question: "Is Invoicemonk compliant with ZIMRA requirements?",
        answer: "Yes. Invoicemonk generates ZIMRA-compliant invoices with proper VAT calculations at 15%. All documents meet Zimbabwe Revenue Authority standards.",
      },
      {
        question: "How much does Invoicemonk cost in Zimbabwe?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at $10/month (Professional) and $25/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle VAT for Zimbabwean businesses?",
        answer: "Yes. Invoicemonk automatically calculates the 15% VAT rate and tracks VAT collected for your ZIMRA filings.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with ZIMRA fiscal device integration requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join Zimbabwean businesses using Invoicemonk to manage their finances.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by Zimbabwean businesses",
  },
  pricing: {
    free: 0,
    professional: 10,
    business: 25,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "zw",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
