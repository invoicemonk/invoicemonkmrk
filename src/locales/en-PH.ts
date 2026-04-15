import { LocaleConfig } from './types';

export const enPH: LocaleConfig = {
  code: "en-PH",
  country: "Philippines",
  countryCode: "PH",
  flag: "🇵🇭",
  currency: {
    code: "PHP",
    symbol: "₱",
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
      trustBadge: "Used by businesses invoicing across 30+ countries, including the Philippines",
    },
    compliance: {
      authority: "BIR",
      message: "Fully compliant with Bureau of Internal Revenue requirements",
    },
    socialProof: "Join growing businesses across the Philippines",
    paymentGateway: "GCash & Maya",
    seo: {
      siteTitle: "Invoicemonk Philippines - BIR-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Philippine businesses. BIR-compliant, GCash & Maya integration. Free tier available.",
      complianceKeyword: "BIR-compliant",
      targetAudience: "Philippine",
      region: "Philippines",
      hreflangCode: "en-PH",
    },
    testimonials: [
      {
        quote: "Invoicemonk made BIR compliance effortless. The GCash integration means our clients pay instantly, and we always have proper receipts ready.",
        highlight: "BIR compliance effortless",
        name: "Maria Santos",
        title: "Founder",
        company: "Santos Digital Solutions",
        location: "Makati, Philippines",
      },
      {
        quote: "We switched from spreadsheets to Invoicemonk and saved hours every week. The VAT tracking is perfect for our quarterly BIR filings.",
        highlight: "saved hours every week",
        name: "Juan dela Cruz",
        title: "CEO",
        company: "Cebu Creative Agency",
        location: "Cebu City, Philippines",
      },
      {
        quote: "As a freelancer working with international clients, Invoicemonk handles multi-currency invoicing beautifully while keeping my BIR records straight.",
        highlight: "multi-currency invoicing beautifully",
        name: "Ana Reyes",
        title: "Freelance Designer",
        company: "Reyes Design Studio",
        location: "Davao, Philippines",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in the Philippines?",
        answer: "Invoicemonk supports GCash, Maya (formerly PayMaya), bank transfers, and credit/debit card payments. Your clients can pay directly from the invoice using their preferred method.",
      },
      {
        question: "Is Invoicemonk compliant with BIR requirements?",
        answer: "Yes. Invoicemonk generates BIR-compliant invoices and receipts with proper VAT calculations at 12%. All documents include the required fields for Philippine tax reporting.",
      },
      {
        question: "How much does Invoicemonk cost in the Philippines?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at ₱1,499/month (Professional) and ₱6,999/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle VAT for Philippine businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the 12% VAT rate on your invoices. You can track VAT collected for easy quarterly filing with the BIR.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with BIR CAS (Computerized Accounting System) requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Philippine businesses using Invoicemonk to manage their finances.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by Philippine businesses",
  },
  pricing: {
    free: 0,
    professional: 29,
    sme: 129,
    business: 0,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "Save ~17%",
    starterAvailable: false,
  },
  urlPrefix: "ph",
  dateFormat: "MM/DD/YYYY",
  taxLabels: { primary: "VAT", rate: "12%" },
};
