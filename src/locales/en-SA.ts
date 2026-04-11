import { LocaleConfig } from './types';

export const enSA: LocaleConfig = {
  code: "en-SA",
  country: "Saudi Arabia",
  countryCode: "SA",
  flag: "🇸🇦",
  currency: {
    code: "SAR",
    symbol: "﷼",
    position: "after",
  },
  content: {
    hero: {
      badge: "ZATCA-COMPLIANT INVOICING",
      headline: "Invoicing built around compliance.",
      headlineAccent: "Not bolted on after.",
      subheadline: "Invoicemonk is the invoicing and accounting software that keeps freelancers, consultants, and small businesses tax-ready, audit-proof, and paid in every country they work in.",
      cta: "Start free — no card needed",
      secondaryCta: "See how compliance works →",
      trustBadge: "Used by businesses invoicing across 30+ countries, including Saudi Arabia",
    },
    compliance: {
      authority: "ZATCA",
      message: "Fully compliant with ZATCA Fatoorah e-invoicing requirements",
    },
    socialProof: "Join growing businesses across Saudi Arabia",
    paymentGateway: "Bank Transfer",
    seo: {
      siteTitle: "Invoicemonk Saudi Arabia - ZATCA-Compliant E-Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Saudi Arabian businesses. ZATCA Fatoorah compliant with QR code and cryptographic stamp support. Free tier available.",
      complianceKeyword: "ZATCA-compliant",
      targetAudience: "Saudi",
      region: "Saudi Arabia",
      hreflangCode: "en-SA",
    },
    testimonials: [
      {
        quote: "Invoicemonk made ZATCA Phase 2 compliance painless. The automatic QR code generation and cryptographic stamps saved us weeks of integration work.",
        highlight: "ZATCA Phase 2 compliance painless",
        name: "Ahmed Al-Rashid",
        title: "Founder",
        company: "Gulf Digital Solutions",
        location: "Riyadh, Saudi Arabia",
      },
      {
        quote: "As a freelancer in Saudi Arabia, understanding VAT invoicing was stressful. Invoicemonk handles everything — from SAR formatting to ZATCA-compliant fields.",
        highlight: "handles everything",
        name: "Fatimah Al-Saud",
        title: "Freelance Consultant",
        company: "Independent",
        location: "Jeddah, Saudi Arabia",
      },
      {
        quote: "We switched from manual invoicing to Invoicemonk and cut our compliance overhead by 80%. The Fatoorah-ready templates are exactly what we needed.",
        highlight: "cut our compliance overhead by 80%",
        name: "Khalid bin Omar",
        title: "CFO",
        company: "Najd Logistics",
        location: "Dammam, Saudi Arabia",
      },
    ],
    faqs: [
      {
        question: "Is Invoicemonk compliant with ZATCA e-invoicing requirements?",
        answer: "Yes. Invoicemonk generates Fatoorah-compliant e-invoices with QR codes, cryptographic stamps (CSID), and all mandatory fields required by ZATCA Phase 1 and Phase 2 regulations.",
      },
      {
        question: "Does Invoicemonk support Saudi VAT at 15%?",
        answer: "Yes. Invoicemonk automatically calculates and applies the 15% VAT rate on your invoices. You can also track VAT collected for easy filing with ZATCA.",
      },
      {
        question: "How much does Invoicemonk cost in Saudi Arabia?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at $9/month (Starter), $19/month (Professional), and $39/month (Business). Annual billing saves 20%.",
      },
      {
        question: "Can I generate QR codes on my invoices for ZATCA?",
        answer: "Yes. Invoicemonk automatically generates ZATCA-compliant QR codes containing the seller name, VAT number, invoice date, total amount, and VAT amount — meeting Fatoorah Phase 1 and Phase 2 requirements.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join Saudi businesses using Invoicemonk to stay ZATCA-compliant and get paid faster.",
      ctaButtonText: "Start Invoicing Free",
    },
    socialProofHeadline: "Loved by Saudi businesses",
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
  urlPrefix: "sa",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "VAT", rate: "15%" },
};
