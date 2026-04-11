import { LocaleConfig } from './types';

export const enMY: LocaleConfig = {
  code: "en-MY",
  country: "Malaysia",
  countryCode: "MY",
  flag: "🇲🇾",
  currency: {
    code: "MYR",
    symbol: "RM",
    position: "before",
  },
  content: {
    hero: {
      badge: "MYINVOIS-READY INVOICING",
      headline: "Invoicing built around compliance.",
      headlineAccent: "Not bolted on after.",
      subheadline: "Invoicemonk is the invoicing and accounting software that keeps freelancers, consultants, and small businesses tax-ready, audit-proof, and paid in every country they work in.",
      cta: "Start free — no card needed",
      secondaryCta: "See how compliance works →",
      trustBadge: "Used by businesses invoicing across 30+ countries, including Malaysia",
    },
    compliance: {
      authority: "LHDN",
      message: "Fully compliant with LHDN MyInvois e-invoicing requirements",
    },
    socialProof: "Join growing businesses across Malaysia",
    paymentGateway: "Bank Transfer",
    seo: {
      siteTitle: "Invoicemonk Malaysia - MyInvois-Compatible E-Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Malaysian businesses. LHDN MyInvois compatible with SST support. Free tier available.",
      complianceKeyword: "MyInvois-compatible",
      targetAudience: "Malaysian",
      region: "Malaysia",
      hreflangCode: "en-MY",
    },
    testimonials: [
      {
        quote: "With the LHDN MyInvois mandate rolling out, Invoicemonk gave us peace of mind. SST calculations and e-invoice formatting are handled automatically.",
        highlight: "gave us peace of mind",
        name: "Lim Wei Chen",
        title: "Founder",
        company: "KL Digital Agency",
        location: "Kuala Lumpur, Malaysia",
      },
      {
        quote: "As a freelancer in Malaysia, I needed an invoicing tool that handles MYR and SST properly. Invoicemonk is perfect — simple, compliant, and free to start.",
        highlight: "simple, compliant, and free to start",
        name: "Nurul Aisyah",
        title: "Freelance Designer",
        company: "Independent",
        location: "Penang, Malaysia",
      },
      {
        quote: "We moved from manual Excel invoicing to Invoicemonk and saved 10 hours a week. The MyInvois-ready format means we're already compliant with the 2025 mandate.",
        highlight: "saved 10 hours a week",
        name: "Raj Kumar",
        title: "Managing Director",
        company: "Selangor Tech Solutions",
        location: "Shah Alam, Malaysia",
      },
    ],
    faqs: [
      {
        question: "Is Invoicemonk compatible with Malaysia's MyInvois system?",
        answer: "Yes. Invoicemonk generates e-invoices in the format required by LHDN's MyInvois platform, including all mandatory fields for Malaysian businesses.",
      },
      {
        question: "Does Invoicemonk handle SST for Malaysian businesses?",
        answer: "Yes. Invoicemonk supports Sales and Service Tax (SST) calculations. You can configure SST rates for your products and services, and the system automatically calculates the correct amounts.",
      },
      {
        question: "How much does Invoicemonk cost in Malaysia?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at $9/month (Professional) and $39/month (Business). Annual billing saves 20%.",
      },
      {
        question: "Is e-invoicing mandatory for all Malaysian businesses?",
        answer: "LHDN is rolling out MyInvois e-invoicing in phases. As of 2025, it's mandatory for businesses with annual turnover above RM100 million. Smaller businesses will be phased in through 2026. Invoicemonk helps you prepare ahead of your compliance deadline.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join Malaysian businesses using Invoicemonk to stay LHDN-compliant and get paid faster.",
      ctaButtonText: "Start Invoicing Free",
    },
    socialProofHeadline: "Loved by Malaysian businesses",
  },
  pricing: {
    free: 0,
    professional: 19,
    business: 39,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "my",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "SST", rate: "6%/10%" },
};
