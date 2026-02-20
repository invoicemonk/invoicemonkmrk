import { LocaleConfig } from './types';

export const enAU: LocaleConfig = {
  code: "en-AU",
  country: "Australia",
  countryCode: "AU",
  flag: "🇦🇺",
  currency: {
    code: "AUD",
    symbol: "A$",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Smart invoicing for",
      headlineAccent: "Australian businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Australian businesses",
    },
    compliance: {
      authority: "ATO",
      message: "Compliant with Australian Tax Office requirements including GST",
    },
    socialProof: "Join growing businesses across Australia",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk Australia - ATO-Compliant Invoicing Software",
      siteDescription: "Invoicing and accounting software for Australian businesses. ATO-compliant with GST tracking. Free tier available.",
      complianceKeyword: "ATO-compliant",
      targetAudience: "Australian",
      region: "Australia",
      hreflangCode: "en-AU",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The ATO-compliant reports make BAS preparation a breeze, and our clients love the professional invoices.",
        highlight: "cut our invoicing time by 70%",
        name: "Liam O'Brien",
        title: "Founder",
        company: "O'Brien Creative",
        location: "Sydney, Australia",
      },
      {
        quote: "Finally, a finance tool that understands Australian GST. Our team was up and running in a day, and the Stripe integration is seamless.",
        highlight: "up and running in a day",
        name: "Mei Chen",
        title: "Director",
        company: "Pacific Edge Consulting",
        location: "Melbourne, Australia",
      },
      {
        quote: "The expense tracking alone has saved us thousands of dollars. I recommend Invoicemonk to every Australian business owner I know.",
        highlight: "saved us thousands of dollars",
        name: "Jack Thompson",
        title: "CEO",
        company: "Outback Digital",
        location: "Brisbane, Australia",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Australia?",
        answer: "Invoicemonk integrates with Stripe for seamless Australian payments. Your clients can pay via credit/debit card, BPAY, and bank transfer directly from the invoice. Funds settle quickly to your Australian bank account.",
      },
      {
        question: "Is Invoicemonk compliant with ATO requirements?",
        answer: "Yes. Invoicemonk generates ATO-compliant invoices with proper GST treatment. All invoices include ABN details and GST breakdowns required for Australian tax reporting, and our reports simplify BAS preparation.",
      },
      {
        question: "How much does Invoicemonk cost in Australia?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at A$8/month (Professional) and A$29/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle GST for Australian businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the 10% GST rate on your invoices. GST summaries help you prepare your quarterly Business Activity Statements (BAS) for the ATO.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Australian businesses using Invoicemonk to stay ATO-compliant.",
      ctaButtonText: "Start Your Free Trial",
    },
    socialProofHeadline: "Loved by Australian businesses",
  },
  pricing: {
    free: 0,
    professional: 8,
    business: 29,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "au",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "GST", rate: "10%" },
};
