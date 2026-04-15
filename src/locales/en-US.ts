import { LocaleConfig } from './types';

export const enUS: LocaleConfig = {
  code: "en-US",
  country: "United States",
  countryCode: "US",
  flag: "🇺🇸",
  currency: {
    code: "USD",
    symbol: "$",
    position: "before",
  },
  content: {
    hero: {
      badge: "TAX-COMPLIANT INVOICING",
      headline: "Invoicing built around compliance.",
      headlineAccent: "Not bolted on after.",
      subheadline: "Invoicemonk is the invoicing and accounting software that keeps freelancers, consultants, and small businesses tax-ready, audit-proof, and paid in every country they work in.",
      cta: "Start free — no card needed",
      secondaryCta: "See how compliance works →",
      trustBadge: "Used by businesses invoicing across 30+ countries, including the United States",
    },
    compliance: {
      authority: "IRS",
      message: "Tax-ready invoices with all required documentation",
    },
    socialProof: "Join growing businesses across the United States",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk - Professional Invoicing Software for Small Business",
      siteDescription: "Invoicing and accounting software for American small businesses and freelancers. IRS-ready with Stripe payments. Free tier available.",
      complianceKeyword: "IRS-ready",
      targetAudience: "American",
      region: "United States",
      hreflangCode: "en-US",
    },
    testimonials: [
      {
        quote: "I used to worry every time a client asked for an invoice. Now I know it's already correct — the tax fields, the formatting, the reference numbers. Invoicemonk handles it all.",
        highlight: "I know it's already correct",
        name: "Adaeze Okafor",
        title: "Founder",
        company: "BrightPath Consulting",
        location: "Lagos, Nigeria",
      },
      {
        quote: "I invoice clients in Germany and the UK — Invoicemonk handles the different tax requirements automatically. I don't even have to think about it.",
        highlight: "handles the different tax requirements automatically",
        name: "Sophie Andersen",
        title: "Freelance Strategist",
        company: "Andersen Advisory",
        location: "Copenhagen, Denmark",
      },
      {
        quote: "My accountant was impressed — every record was already organised and compliant when tax season came. It saved us hours of preparation.",
        highlight: "saved us hours of preparation",
        name: "Arjun Mehta",
        title: "CEO",
        company: "Meridian Digital Agency",
        location: "Dubai, UAE",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in the United States?",
        answer: "Invoicemonk integrates with Stripe for seamless US payments. Your clients can pay via credit/debit card, ACH bank transfer, and Apple Pay directly from the invoice. Funds settle quickly to your US bank account.",
      },
      {
        question: "Is Invoicemonk compliant with IRS requirements?",
        answer: "Yes. Invoicemonk generates IRS-ready invoices with proper documentation. All invoices include the required fields for US tax reporting, and our detailed reports help you prepare for quarterly estimated payments and annual filings.",
      },
      {
        question: "How much does Invoicemonk cost?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at $29/month (Professional) and $129/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle sales tax?",
        answer: "Yes. Invoicemonk supports configurable sales tax rates, so you can set the correct rate for your state and locality. Tax amounts are clearly itemized on each invoice for transparent reporting.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing with structured formats for B2G compliance. While the US has no federal e-invoicing mandate yet, Invoicemonk is ready with digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of American businesses using Invoicemonk to manage their finances.",
      ctaButtonText: "Start Your Free Trial",
    },
    socialProofHeadline: "Loved by American businesses",
  },
  pricing: {
    free: 0,
    professional: 29,
    business: 129,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "us",
  dateFormat: "MM/DD/YYYY",
  taxLabels: { primary: "Sales Tax" },
};
