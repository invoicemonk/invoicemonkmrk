import { LocaleConfig } from './types';

export const enKE: LocaleConfig = {
  code: "en-KE",
  country: "Kenya",
  countryCode: "KE",
  flag: "🇰🇪",
  currency: {
    code: "KES",
    symbol: "KSh",
    position: "before",
  },
  content: {
    hero: {
      badge: "Structured for Jurisdiction-Aware Invoicing",
      headline: "Professional invoices for",
      headlineAccent: "Kenyan businesses",
      subheadline: "Create country-aware invoices, track revenue, and stay compliant across borders.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Adapts",
      trustBadge: "Trusted by Kenyan businesses",
    },
    compliance: {
      authority: "KRA",
      message: "Compliant with Kenya Revenue Authority requirements",
    },
    socialProof: "Join growing businesses across Kenya",
    paymentGateway: "Paystack",
    seo: {
      siteTitle: "Invoicemonk Kenya - KRA-Compliant Invoicing Software",
      siteDescription: "Professional invoicing software for Kenyan businesses. KRA-compliant with mobile payments. Free tier available.",
      complianceKeyword: "KRA-compliant",
      targetAudience: "Kenyan",
      region: "Kenya",
      hreflangCode: "en-KE",
    },
    testimonials: [
      {
        quote: "Invoicemonk cut our invoicing time by 70%. The M-Pesa integration means our clients pay instantly from their phones, and KRA compliance is built in.",
        highlight: "cut our invoicing time by 70%",
        name: "James Mwangi",
        title: "Founder",
        company: "Savannah Consulting",
        location: "Nairobi, Kenya",
      },
      {
        quote: "Finally, a finance tool built for Kenyan businesses. Our team was up and running in a day, and the VAT tracking makes KRA filing effortless.",
        highlight: "up and running in a day",
        name: "Wanjiku Kamau",
        title: "Director",
        company: "Rift Valley Media",
        location: "Nakuru, Kenya",
      },
      {
        quote: "The expense tracking alone has saved us thousands of shillings. I recommend Invoicemonk to every business owner I know in Nairobi.",
        highlight: "saved us thousands of shillings",
        name: "Hassan Omar",
        title: "CEO",
        company: "Coastal Digital",
        location: "Mombasa, Kenya",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Kenya?",
        answer: "Invoicemonk supports M-Pesa, Paystack, bank transfer, and debit cards for Kenyan businesses. Your clients can pay directly from the invoice using their preferred method, including mobile money. Funds settle quickly to your Kenyan bank account.",
      },
      {
        question: "Is Invoicemonk compliant with KRA requirements?",
        answer: "Yes. Invoicemonk generates KRA-compliant invoices with proper VAT calculations at 16%. All invoices include the required fields for Kenyan tax reporting, including PIN details and ETR-compliant formatting.",
      },
      {
        question: "How much does Invoicemonk cost in Kenya?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at KSh500/month (Starter), KSh1,000/month (Professional), and KSh2,000/month (Business). Annual billing gives you 2 months free.",
      },
      {
        question: "Does Invoicemonk handle VAT for Kenyan businesses?",
        answer: "Absolutely. Invoicemonk automatically calculates and applies the 16% VAT rate on your invoices. You can also track VAT collected and paid for easy monthly filing with KRA through iTax.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing aligned with KRA TIMS (Tax Invoice Management System) requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Kenyan businesses using Invoicemonk with M-Pesa and mobile payments.",
      ctaButtonText: "Start Invoicing with M-Pesa",
    },
    socialProofHeadline: "Loved by Kenyan businesses",
  },
  pricing: {
    free: 0,
    starter: 500,
    professional: 1000,
    business: 2000,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: "2 months free",
    starterAvailable: true,
  },
  urlPrefix: "ke",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "16%" },
};
