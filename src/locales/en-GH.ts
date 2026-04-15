import { LocaleConfig } from './types';

export const enGH: LocaleConfig = {
  code: "en-GH",
  country: "Ghana",
  countryCode: "GH",
  flag: "🇬🇭",
  currency: {
    code: "GHS",
    symbol: "GH₵",
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
      trustBadge: "Used by businesses invoicing across 30+ countries, including Ghana",
    },
    compliance: {
      authority: "GRA",
      message: "Compliant with Ghana Revenue Authority requirements",
    },
    socialProof: "Join growing businesses across Ghana",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Ghana - GRA-Compliant Invoicing Software",
      siteDescription: "Professional invoicing software for Ghanaian businesses. GRA-compliant with Paystack integration. Free tier available.",
      complianceKeyword: "GRA-compliant",
      targetAudience: "Ghanaian",
      region: "Ghana",
      hreflangCode: "en-GH",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The Paystack integration means our clients pay with mobile money or bank transfer, and GRA compliance is built in.",
        highlight: "cut our invoicing time by 70%",
        name: "Kwame Asante",
        title: "Founder",
        company: "Asante Tech Solutions",
        location: "Accra, Ghana",
      },
      {
        quote: "Finally, a finance tool built for Ghanaian businesses. Our team was up and running in a day, and the VAT tracking is spot on for GRA filings.",
        highlight: "up and running in a day",
        name: "Abena Mensah",
        title: "Director",
        company: "Golden Coast Media",
        location: "Kumasi, Ghana",
      },
      {
        quote: "The expense tracking alone has saved us thousands of cedis. I recommend Invoicemonk to every business owner I know in Ghana.",
        highlight: "saved us thousands of cedis",
        name: "Kofi Darko",
        title: "CEO",
        company: "Volta Digital",
        location: "Accra, Ghana",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Ghana?",
        answer: "Invoicemonk integrates with Paystack for seamless Ghanaian payments. Your clients can pay via mobile money, bank transfer, USSD, and debit cards directly from the invoice. Funds settle quickly to your Ghanaian bank account.",
      },
      {
        question: "Is Invoicemonk compliant with GRA requirements?",
        answer: "Yes. Invoicemonk generates GRA-compliant invoices with proper VAT calculations at 15%. All invoices include the required fields for Ghanaian tax reporting, and our audit trails keep you ready for any GRA review.",
      },
      {
        question: "How much does Invoicemonk cost in Ghana?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at GH₵300/month (Starter), GH₵600/month (Professional), and GH₵1,400/month (Business). Annual billing gives you 2 months free.",
      },
      {
        question: "Does Invoicemonk handle VAT for Ghanaian businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the 15% VAT rate on your invoices. You can also track VAT collected and paid for easy filing with the Ghana Revenue Authority.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with GRA e-VAT invoicing requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Ghanaian businesses using Invoicemonk to manage their finances with Paystack integration.",
      ctaButtonText: "Start Invoicing with Paystack",
    },
    socialProofHeadline: "Loved by Ghanaian businesses",
  },
  pricing: {
    free: 0,
    starter: 300,
    professional: 600,
    business: 1400,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "2 months free",
    starterAvailable: true,
  },
  urlPrefix: "gh",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
