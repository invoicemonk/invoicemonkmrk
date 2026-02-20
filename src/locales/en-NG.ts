import { LocaleConfig } from './types';

export const enNG: LocaleConfig = {
  code: "en-NG",
  country: "Nigeria",
  countryCode: "NG",
  flag: "🇳🇬",
  currency: {
    code: "NGN",
    symbol: "₦",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Nigerian businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Nigerian businesses",
    },
    compliance: {
      authority: "NRS",
      message: "Fully compliant with Nigerian Revenue Service requirements",
    },
    socialProof: "Join growing businesses across Nigeria",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Nigeria - NRS-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Nigerian businesses. NRS-compliant, Paystack integration. Free tier available.",
      complianceKeyword: "NRS-compliant",
      targetAudience: "Nigerian",
      region: "Nigeria",
      hreflangCode: "en-NG",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The Paystack integration means our clients pay instantly, and the NRS-compliant receipts keep us audit-ready.",
        highlight: "cut our invoicing time by 70%",
        name: "Adaeze Okafor",
        title: "Founder",
        company: "BrightPath Consulting",
        location: "Lagos, Nigeria",
      },
      {
        quote: "Finally, a finance tool built for Nigerian businesses. Our team was up and running in a day, and the VAT tracking is invaluable at tax time.",
        highlight: "up and running in a day",
        name: "Tunde Bakare",
        title: "CFO",
        company: "Sahel Logistics",
        location: "Abuja, Nigeria",
      },
      {
        quote: "The expense tracking alone has saved us thousands of naira. I recommend Invoicemonk to every business owner I know in Lagos.",
        highlight: "saved us thousands of naira",
        name: "Fatima Abdullahi",
        title: "CEO",
        company: "Zaria Digital",
        location: "Lagos, Nigeria",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Nigeria?",
        answer: "Invoicemonk integrates with Paystack for seamless payments in Nigeria. Your clients can pay via bank transfer, USSD, debit cards, and mobile money directly from the invoice. Funds settle quickly to your Nigerian bank account.",
      },
      {
        question: "Is Invoicemonk compliant with Nigerian tax regulations?",
        answer: "Yes. Invoicemonk generates NRS-compliant invoices with proper VAT calculations at 7.5%. All invoices include the required fields for Nigerian tax reporting, and our audit trails help you stay ready for any FIRS review.",
      },
      {
        question: "How much does Invoicemonk cost in Nigeria?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at ₦2,000/month (Starter), ₦4,000/month (Professional), and ₦8,000/month (Business). Annual billing gives you 2 months free.",
      },
      {
        question: "Does Invoicemonk handle VAT for Nigerian businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the 7.5% VAT rate on your invoices. You can also track VAT collected vs. paid for easy quarterly filing with FIRS.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with FIRS requirements and NRS compliance standards. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Nigerian businesses using Invoicemonk to manage their finances with Paystack integration.",
      ctaButtonText: "Start Invoicing with Paystack",
    },
    socialProofHeadline: "Loved by Nigerian businesses",
  },
  pricing: {
    free: 0,
    starter: 2000,
    professional: 4000,
    business: 8000,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "2 months free",
    starterAvailable: true,
  },
  urlPrefix: "ng",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "7.5%" },
};
