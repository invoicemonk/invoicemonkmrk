import { LocaleConfig } from './types';

export const deDE: LocaleConfig = {
  code: "de-DE",
  country: "Germany",
  countryCode: "DE",
  flag: "🇩🇪",
  currency: {
    code: "EUR",
    symbol: "€",
    position: "before",
  },
  content: {
    hero: {
      badge: "Built for German Compliance",
      headline: "Professional invoices for",
      headlineAccent: "German businesses",
      subheadline: "Create Finanzamt-compliant invoices, track revenue, and manage USt with ease.",
      cta: "Start Compliant Invoicing",
      secondaryCta: "See How It Works",
      trustBadge: "Trusted by German businesses",
    },
    compliance: {
      authority: "Finanzamt",
      message: "Fully compliant with German Finanzamt and USt requirements",
    },
    socialProof: "Join growing businesses across Germany",
    paymentGateway: "SEPA & Stripe",
    seo: {
      siteTitle: "Invoicemonk Germany - Finanzamt-Compliant Invoicing Software",
      siteDescription: "Professional invoicing and accounting software for German businesses. Finanzamt-compliant, SEPA integration. Free tier available.",
      complianceKeyword: "Finanzamt-compliant",
      targetAudience: "German",
      region: "Germany",
      hreflangCode: "de-DE",
    },
    testimonials: [
      {
        quote: "Invoicemonk handles our USt calculations perfectly. The GoBD-compliant audit trail gives us peace of mind during tax season.",
        highlight: "USt calculations perfectly",
        name: "Stefan Weber",
        title: "Founder",
        company: "Weber Digital GmbH",
        location: "Berlin, Germany",
      },
      {
        quote: "We switched from manual Excel invoicing and the time savings are incredible. SEPA payments integrate seamlessly.",
        highlight: "time savings are incredible",
        name: "Laura Müller",
        title: "CEO",
        company: "München Creative Studio",
        location: "Munich, Germany",
      },
      {
        quote: "As a freelancer, I need proper Rechnungen for the Finanzamt. Invoicemonk makes it effortless and professional.",
        highlight: "effortless and professional",
        name: "Thomas Schneider",
        title: "Freelance Consultant",
        company: "Schneider Beratung",
        location: "Hamburg, Germany",
      },
    ],
    faqs: [
      {
        question: "What payment methods are supported in Germany?",
        answer: "Invoicemonk supports SEPA bank transfers, Stripe payments, credit/debit cards, and PayPal. Clients can pay directly from the invoice.",
      },
      {
        question: "Is Invoicemonk compliant with German tax requirements?",
        answer: "Yes. Invoicemonk generates Finanzamt-compliant invoices (Rechnungen) with proper USt calculations at 19% (or 7% reduced rate). Documents meet GoBD requirements.",
      },
      {
        question: "How much does Invoicemonk cost in Germany?",
        answer: "Invoicemonk offers a free plan with 5 invoices per month. Paid plans start at €10/month (Professional) and €25/month (Business). Annual billing saves you 20%.",
      },
      {
        question: "Does Invoicemonk handle USt (Umsatzsteuer) for German businesses?",
        answer: "Yes. Invoicemonk calculates USt at 19% or 7% and provides reports for your Umsatzsteuervoranmeldung (USt advance return).",
      },
      {
        question: "Does Invoicemonk support e-invoicing?",
        answer: "Yes. Invoicemonk supports e-invoicing standards including Peppol, ZUGFeRD, and XRechnung under the EU e-invoicing directive. Every invoice can include digital signatures, cryptographic stamps (CSID), and unique Invoice Reference Numbers (IRN) for full regulatory compliance.",
      },
    ],
    blog: {
      ctaHeadline: "Ready to streamline your invoicing?",
      ctaSubtext: "Join German businesses using Invoicemonk with SEPA integration.",
      ctaButtonText: "Start Invoicing Today",
    },
    socialProofHeadline: "Loved by German businesses",
  },
  pricing: {
    free: 0,
    professional: 10,
    business: 25,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Save 20%",
    starterAvailable: false,
  },
  urlPrefix: "de",
  dateFormat: "DD.MM.YYYY",
  taxLabels: { primary: "USt", rate: "19%" },
};
