import { LocaleConfig } from './types';

export const enCA: LocaleConfig = {
  code: "en-CA",
  country: "Canada",
  countryCode: "CA",
  flag: "🇨🇦",
  currency: {
    code: "CAD",
    symbol: "C$",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Invoicing made simple",
      headlineAccent: "for Canadians",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Canadian businesses",
    },
    compliance: {
      authority: "CRA",
      message: "Compliant with Canada Revenue Agency requirements including GST/HST",
    },
    socialProof: "Join growing businesses across Canada",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk Canada - CRA-Compliant Invoicing Software",
      siteDescription: "Invoicing and accounting software for Canadian businesses. CRA-compliant with GST/HST tracking. Free tier available.",
      complianceKeyword: "CRA-compliant",
      targetAudience: "Canadian",
      region: "Canada",
      hreflangCode: "en-CA",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The GST/HST tracking is automatic, and our clients love paying by credit card right from the invoice.",
        highlight: "cut our invoicing time by 70%",
        name: "David Tremblay",
        title: "Founder",
        company: "Tremblay Design Co.",
        location: "Toronto, Canada",
      },
      {
        quote: "Finally, a finance tool that understands Canadian tax rules. Our team was up and running in a day, and CRA compliance is built right in.",
        highlight: "up and running in a day",
        name: "Aisha Hassan",
        title: "Director",
        company: "NorthStar Consulting",
        location: "Vancouver, Canada",
      },
      {
        quote: "The expense tracking alone has saved us thousands of dollars. I recommend Invoicemonk to every Canadian entrepreneur I meet.",
        highlight: "saved us thousands of dollars",
        name: "Rachel Kim",
        title: "CEO",
        company: "Maple Digital",
        location: "Montreal, Canada",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Canada?",
        answer: "Invoicemonk integrates with Stripe for seamless Canadian payments. Your clients can pay via credit/debit card, Interac, and bank transfer directly from the invoice. Funds settle quickly to your Canadian bank account.",
      },
      {
        question: "Is Invoicemonk compliant with CRA requirements?",
        answer: "Yes. Invoicemonk generates CRA-compliant invoices with proper GST/HST calculations. All invoices include the required fields for Canadian tax reporting, and our audit trails keep you ready for any CRA review.",
      },
      {
        question: "How much does Invoicemonk cost in Canada?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at C$7/month (Professional) and C$20/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle GST/HST for Canadian businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates GST, HST, and provincial sales tax based on your province. Tax breakdowns are clearly itemized on each invoice for transparent CRA reporting.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Canadian businesses using Invoicemonk to stay CRA-compliant.",
      ctaButtonText: "Start Your Free Trial",
    },
    socialProofHeadline: "Loved by Canadian businesses",
  },
  pricing: {
    free: 0,
    professional: 7,
    business: 20,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "ca",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "GST/HST", rate: "5-15%" },
};
