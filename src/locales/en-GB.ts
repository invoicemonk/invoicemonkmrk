import { LocaleConfig } from './types';

export const enGB: LocaleConfig = {
  code: "en-GB",
  country: "United Kingdom",
  countryCode: "GB",
  flag: "🇬🇧",
  currency: {
    code: "GBP",
    symbol: "£",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Beautiful invoices,",
      headlineAccent: "sorted",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by UK businesses",
    },
    compliance: {
      authority: "HMRC",
      message: "Fully compliant with Making Tax Digital requirements",
    },
    socialProof: "Join growing businesses across the United Kingdom",
    paymentGateway: "Stripe",
    seo: {
      siteTitle: "Invoicemonk UK - HMRC-Compliant Invoicing Software",
      siteDescription: "Invoicing software built for UK businesses. HMRC-compliant, Making Tax Digital ready. Free tier available.",
      complianceKeyword: "HMRC-compliant",
      targetAudience: "British",
      region: "United Kingdom",
      hreflangCode: "en-GB",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The Making Tax Digital compliance is built-in, so we never worry about HMRC requirements.",
        highlight: "cut our invoicing time by 70%",
        name: "James Hartley",
        title: "Founder",
        company: "Hartley & Partners",
        location: "London, UK",
      },
      {
        quote: "Finally, a finance tool that understands UK compliance. Our team was up and running in a day, and the VAT tracking is spot on.",
        highlight: "up and running in a day",
        name: "Priya Patel",
        title: "Director",
        company: "Patel Advisory",
        location: "Manchester, UK",
      },
      {
        quote: "The expense tracking alone has saved us thousands of pounds. I recommend Invoicemonk to every business owner I know in the UK.",
        highlight: "saved us thousands of pounds",
        name: "Sophie Williams",
        title: "CEO",
        company: "Bloom Creative",
        location: "Bristol, UK",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in the UK?",
        answer: "Invoicemonk integrates with Stripe for seamless UK payments. Your clients can pay via credit/debit card, direct debit, and Apple Pay directly from the invoice. Funds settle quickly to your UK bank account.",
      },
      {
        question: "Is Invoicemonk compliant with HMRC and Making Tax Digital?",
        answer: "Yes. Invoicemonk generates HMRC-compliant invoices with proper VAT treatment. Our platform is designed to meet Making Tax Digital (MTD) requirements, with digital record-keeping and VAT return preparation support.",
      },
      {
        question: "How much does Invoicemonk cost in the UK?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at £4/month (Professional) and £12/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle VAT for UK businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the standard 20% VAT rate, with support for reduced and zero-rated items. VAT summaries make quarterly MTD submissions straightforward.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing standards including Peppol and Making Tax Digital (MTD) requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of UK businesses using Invoicemonk to stay HMRC-compliant.",
      ctaButtonText: "Start Your Free Trial",
    },
    socialProofHeadline: "Loved by UK businesses",
  },
  pricing: {
    free: 0,
    professional: 4,
    business: 12,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "uk",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "20%" },
};
