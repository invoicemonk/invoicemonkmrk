import { LocaleConfig } from './types';

export const ptBR: LocaleConfig = {
  code: "pt-BR",
  country: "Brazil",
  countryCode: "BR",
  flag: "🇧🇷",
  currency: {
    code: "BRL",
    symbol: "R$",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for Brazilian Compliance",
      headline: "Professional invoices for",
      headlineAccent: "Brazilian businesses",
      subheadline: "Create Nota Fiscal-ready invoices, track revenue, and stay compliant with Receita Federal.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by Brazilian businesses",
    },
    compliance: {
      authority: "Receita Federal",
      message: "Compliant with Receita Federal and NF-e requirements",
    },
    socialProof: "Join growing businesses across Brazil",
    paymentGateway: "Pix & Boleto",
    seo: {
      siteTitle: "Invoicemonk Brazil - Receita Federal-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Brazilian businesses. NF-e compatible, Pix & Boleto support. Free tier available.",
      complianceKeyword: "NF-e-compliant",
      targetAudience: "Brazilian",
      region: "Brazil",
      hreflangCode: "pt-BR",
    },
    testimonials: [
      {
        quote: "Invoicemonk simplified our invoicing workflow. The Pix integration means instant payments from our clients across Brazil.",
        highlight: "instant payments from our clients",
        name: "Carlos Silva",
        title: "Founder",
        company: "Silva Consultoria",
        location: "São Paulo, Brazil",
      },
      {
        quote: "Managing invoices for our agency was a nightmare before Invoicemonk. Now everything is organized and compliant.",
        highlight: "everything is organized and compliant",
        name: "Fernanda Costa",
        title: "CEO",
        company: "Rio Creative Agency",
        location: "Rio de Janeiro, Brazil",
      },
      {
        quote: "The expense tracking and tax reports make quarterly filing with Receita Federal so much easier.",
        highlight: "quarterly filing so much easier",
        name: "Roberto Santos",
        title: "CFO",
        company: "Santos Tech",
        location: "Belo Horizonte, Brazil",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Brazil?",
        answer: "Invoicemonk supports Pix, Boleto Bancário, credit/debit cards, and bank transfers. Clients can pay directly from the invoice.",
      },
      {
        question: "Is Invoicemonk compliant with Brazilian tax requirements?",
        answer: "Yes. Invoicemonk generates invoices compatible with Receita Federal requirements and supports NF-e integration for electronic fiscal documents.",
      },
      {
        question: "How much does Invoicemonk cost in Brazil?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at R$50/month (Professional) and R$100/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle Brazilian taxes?",
        answer: "Invoicemonk supports ISS, ICMS, and PIS/COFINS calculations depending on your business type and municipality.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing compatible with NF-e (Nota Fiscal Eletrônica) and SEFAZ requirements. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join Brazilian businesses using Invoicemonk with Pix integration.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by Brazilian businesses",
  },
  pricing: {
    free: 0,
    professional: 50,
    business: 100,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "br",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "ISS/ICMS" },
};
