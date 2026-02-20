import { LocaleConfig } from './types';

export const enIN: LocaleConfig = {
  code: "en-IN",
  country: "India",
  countryCode: "IN",
  flag: "🇮🇳",
  currency: {
    code: "INR",
    symbol: "₹",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for Indian GST Compliance",
      headline: "Professional invoices for",
      headlineAccent: "Indian businesses",
      subheadline: "Create GST-compliant invoices, track revenue, and accept payments via UPI and Razorpay.",
      cta: "Start GST-Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by Indian businesses",
    },
    compliance: {
      authority: "GST/CBIC",
      message: "Fully compliant with Goods and Services Tax requirements under CBIC",
    },
    socialProof: "Join growing businesses across India",
    paymentGateway: "Razorpay & UPI",
    seo: {
      siteTitle: "Invoicemonk India - GST-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for Indian businesses. GST-compliant, UPI & Razorpay integration. Free tier available.",
      complianceKeyword: "GST-compliant",
      targetAudience: "Indian",
      region: "India",
      hreflangCode: "en-IN",
    },
    testimonials: [
      {
        quote: "Invoicemonk handles CGST, SGST, and IGST automatically. Filing GST returns has never been easier for our consulting firm.",
        highlight: "handles CGST, SGST, and IGST automatically",
        name: "Priya Sharma",
        title: "Founder",
        company: "Sharma Consulting",
        location: "Mumbai, India",
      },
      {
        quote: "The UPI integration is a game-changer. Our clients pay within minutes of receiving the invoice. Highly recommend for Indian businesses.",
        highlight: "clients pay within minutes",
        name: "Rajesh Kumar",
        title: "CEO",
        company: "TechBridge Solutions",
        location: "Bangalore, India",
      },
      {
        quote: "We manage 200+ invoices monthly with Invoicemonk. The GST reports save our accountant days of work every quarter.",
        highlight: "save our accountant days of work",
        name: "Anita Patel",
        title: "CFO",
        company: "Patel Exports",
        location: "Delhi, India",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in India?",
        answer: "Invoicemonk integrates with Razorpay and supports UPI, net banking, credit/debit cards, and wallets. Clients can pay directly from the invoice.",
      },
      {
        question: "Is Invoicemonk compliant with Indian GST requirements?",
        answer: "Yes. Invoicemonk generates GST-compliant invoices with proper CGST, SGST, and IGST calculations. GSTIN fields and HSN/SAC codes are supported.",
      },
      {
        question: "How much does Invoicemonk cost in India?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at ₹800/month (Professional) and ₹1,600/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle GST for Indian businesses?",
        answer: "Absolutely. Invoicemonk calculates GST at 5%, 12%, 18%, or 28% based on your product/service category, and generates GST-ready reports for filing.",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports GST e-invoicing with Invoice Reference Numbers (IRN) via the NIC portal. Every invoice can include digital signatures, cryptographic stamps (CSID), and QR codes for full regulatory compliance under CBIC mandates.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join thousands of Indian businesses using Invoicemonk with Razorpay & UPI integration.",
      ctaButtonText: "Start GST Invoicing",
    },
    socialProofHeadline: "Loved by Indian businesses",
  },
  pricing: {
    free: 0,
    professional: 800,
    business: 1600,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "in",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "GST", rate: "18%" },
};
