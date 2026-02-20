import { LocaleConfig } from './types';

export const enZA: LocaleConfig = {
  code: "en-ZA",
  country: "South Africa",
  countryCode: "ZA",
  flag: "🇿🇦",
  currency: {
    code: "ZAR",
    symbol: "R",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Professional invoices for",
      headlineAccent: "South African businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by South African businesses",
    },
    compliance: {
      authority: "SARS",
      message: "Compliant with South African Revenue Service requirements",
    },
    socialProof: "Join growing businesses across South Africa",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk South Africa - SARS-Compliant Invoicing Software",
      siteDescription: "Professional invoicing software for South African businesses. SARS-compliant with local payments. Free tier available.",
      complianceKeyword: "SARS-compliant",
      targetAudience: "South African",
      region: "South Africa",
      hreflangCode: "en-ZA",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The SARS-compliant invoices and EFT payment options make running our business so much easier.",
        highlight: "cut our invoicing time by 70%",
        name: "Thabo Molefe",
        title: "Founder",
        company: "Highveld Consulting",
        location: "Johannesburg, South Africa",
      },
      {
        quote: "Finally, a finance tool that understands South African tax rules. Our team was up and running in a day, and the VAT tracking is spot on for SARS.",
        highlight: "up and running in a day",
        name: "Zanele Dlamini",
        title: "Director",
        company: "Ubuntu Digital Agency",
        location: "Cape Town, South Africa",
      },
      {
        quote: "The expense tracking alone has saved us thousands of rands. I recommend Invoicemonk to every South African business owner I know.",
        highlight: "saved us thousands of rands",
        name: "Johan van der Merwe",
        title: "CEO",
        company: "Karoo Tech Solutions",
        location: "Durban, South Africa",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in South Africa?",
        answer: "Invoicemonk integrates with Paystack for seamless South African payments. Your clients can pay via EFT, credit/debit card, and instant bank transfer directly from the invoice. Funds settle quickly to your South African bank account.",
      },
      {
        question: "Is Invoicemonk compliant with SARS requirements?",
        answer: "Yes. Invoicemonk generates SARS-compliant invoices with proper VAT calculations at 15%. All invoices include the required fields for South African tax reporting, and our audit trails keep you ready for any SARS review.",
      },
      {
        question: "How much does Invoicemonk cost in South Africa?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at R80/month (Professional) and R250/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle VAT for South African businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the 15% VAT rate on your invoices. VAT summaries help you prepare your bi-monthly VAT201 returns for SARS.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with SARS compliance requirements and South Africa's e-invoicing readiness initiatives. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of South African businesses using Invoicemonk to stay SARS-compliant.",
      ctaButtonText: "Start Your Free Trial",
    },
    socialProofHeadline: "Loved by South African businesses",
  },
  pricing: {
    free: 0,
    professional: 80,
    business: 250,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "za",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
