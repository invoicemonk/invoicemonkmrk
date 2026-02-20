import { LocaleConfig } from './types';

export const frFR: LocaleConfig = {
  code: "fr-FR",
  country: "France",
  countryCode: "FR",
  flag: "🇫🇷",
  currency: {
    code: "EUR",
    symbol: "€",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for French Compliance",
      headline: "Professional invoices for",
      headlineAccent: "French businesses",
      subheadline: "Create DGFIP-compliant invoices, track TVA, and manage your finances with confidence.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by French businesses",
    },
    compliance: {
      authority: "DGFIP",
      message: "Fully compliant with Direction Générale des Finances Publiques requirements",
    },
    socialProof: "Join growing businesses across France",
    paymentGateway: "SEPA & Stripe",
    seo: {
      siteTitle: "Invoicemonk France - DGFIP-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for French businesses. DGFIP-compliant, SEPA integration, TVA tracking. Free tier available.",
      complianceKeyword: "DGFIP-compliant",
      targetAudience: "French",
      region: "France",
      hreflangCode: "fr-FR",
    },
    testimonials: [
      {
        quote: "Invoicemonk handles our TVA calculations and facture requirements perfectly. Compliance with DGFIP has never been easier.",
        highlight: "TVA calculations perfectly",
        name: "Pierre Dupont",
        title: "Founder",
        company: "Dupont Conseil",
        location: "Paris, France",
      },
      {
        quote: "As an auto-entrepreneur, I needed affordable and compliant invoicing. Invoicemonk's free plan was the perfect starting point.",
        highlight: "affordable and compliant invoicing",
        name: "Sophie Martin",
        title: "Freelance Designer",
        company: "Martin Design Studio",
        location: "Lyon, France",
      },
      {
        quote: "We process hundreds of factures monthly. Invoicemonk's automation saves our team significant time every week.",
        highlight: "saves our team significant time",
        name: "Antoine Bernard",
        title: "CFO",
        company: "Marseille Tech SAS",
        location: "Marseille, France",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in France?",
        answer: "Invoicemonk supports SEPA bank transfers, Stripe, credit/debit cards, and PayPal. Clients can pay directly from the invoice.",
      },
      {
        question: "Is Invoicemonk compliant with French invoicing requirements?",
        answer: "Yes. Invoicemonk generates DGFIP-compliant factures with proper TVA calculations at 20% (or reduced rates of 10%, 5.5%, 2.1%). Documents include all legally required mentions.",
      },
      {
        question: "How much does Invoicemonk cost in France?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at €10/month (Professional) and €25/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle TVA for French businesses?",
        answer: "Yes. Invoicemonk calculates TVA at the applicable rate and provides reports for your déclaration de TVA filings.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing standards including Peppol and Chorus Pro, and is ready for France's upcoming B2B e-invoicing mandate. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join French businesses using Invoicemonk with SEPA integration.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by French businesses",
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
  urlPrefix: "fr",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "TVA", rate: "20%" },
};
