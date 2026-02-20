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
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Create beautiful invoices",
      headlineAccent: "in seconds",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by American small businesses",
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
        quote: "Invoicemonk cut our invoicing time by 70%. The Stripe integration means our clients pay instantly, and the tax-ready reports save us hours every quarter.",
        highlight: "cut our invoicing time by 70%",
        name: "Sarah Mitchell",
        title: "Founder",
        company: "PixelCraft Studio",
        location: "New York, USA",
      },
      {
        quote: "Finally, a finance tool that's both powerful and simple. Our team was up and running in a day, and the audit trails are invaluable during tax season.",
        highlight: "up and running in a day",
        name: "Marcus Rivera",
        title: "CFO",
        company: "Rivera Consulting Group",
        location: "Austin, USA",
      },
      {
        quote: "The expense tracking alone has saved us thousands of dollars. I recommend Invoicemonk to every small business owner I know.",
        highlight: "saved us thousands of dollars",
        name: "Emily Chen",
        title: "CEO",
        company: "Bloom Digital Agency",
        location: "San Francisco, USA",
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
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at $5/month (Professional) and $19/month (Business). Annual billing saves you 20%.",
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
    professional: 5,
    business: 19,
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
