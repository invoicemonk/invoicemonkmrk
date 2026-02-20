import { LocaleConfig } from './types';

export const enNZ: LocaleConfig = {
  code: "en-NZ",
  country: "New Zealand",
  countryCode: "NZ",
  flag: "🇳🇿",
  currency: {
    code: "NZD",
    symbol: "NZ$",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for New Zealand Compliance",
      headline: "Professional invoices for",
      headlineAccent: "New Zealand businesses",
      subheadline: "Create IRD-compliant invoices, track GST, and manage your finances with ease.",
      cta: "Start GST-Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by Kiwi businesses",
    },
    compliance: {
      authority: "IRD",
      message: "Fully compliant with Inland Revenue Department GST requirements",
    },
    socialProof: "Join growing businesses across New Zealand",
    paymentGateway: "Stripe & POLi",
    seo: {
      siteTitle: "Invoicemonk New Zealand - IRD-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for New Zealand businesses. IRD-compliant, GST tracking. Free tier available.",
      complianceKeyword: "IRD-compliant",
      targetAudience: "New Zealand",
      region: "New Zealand",
      hreflangCode: "en-NZ",
    },
    testimonials: [
      {
        quote: "Invoicemonk handles our GST calculations perfectly. Filing with IRD is now a breeze every two months.",
        highlight: "GST calculations perfectly",
        name: "James Mitchell",
        title: "Founder",
        company: "Auckland Digital Co.",
        location: "Auckland, New Zealand",
      },
      {
        quote: "As a sole trader, I needed something simple and compliant. Invoicemonk ticks every box and the free plan got me started.",
        highlight: "simple and compliant",
        name: "Sarah Thompson",
        title: "Freelance Writer",
        company: "Thompson Content",
        location: "Wellington, New Zealand",
      },
      {
        quote: "We manage all our trade invoices through Invoicemonk. The multi-currency support is essential for our export business.",
        highlight: "multi-currency support is essential",
        name: "David Chen",
        title: "Director",
        company: "Canterbury Exports Ltd",
        location: "Christchurch, New Zealand",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in New Zealand?",
        answer: "Invoicemonk supports Stripe, POLi, bank transfers, and credit/debit cards. Clients can pay directly from the invoice.",
      },
      {
        question: "Is Invoicemonk compliant with IRD requirements?",
        answer: "Yes. Invoicemonk generates IRD-compliant tax invoices with proper GST calculations at 15%. Documents meet all New Zealand tax invoice requirements.",
      },
      {
        question: "How much does Invoicemonk cost in New Zealand?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at NZ$15/month (Professional) and NZ$35/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle GST for New Zealand businesses?",
        answer: "Yes. Invoicemonk calculates GST at 15% and provides reports for your GST returns filed with IRD.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing standards including the A-NZ Peppol framework endorsed by IRD. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join Kiwi businesses using Invoicemonk to manage their finances.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by Kiwi businesses",
  },
  pricing: {
    free: 0,
    professional: 15,
    business: 35,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "nz",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "GST", rate: "15%" },
};
