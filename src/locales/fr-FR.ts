import { LocaleConfig } from './types';

export const frFR: LocaleConfig = {
  code: "fr-FR",
  country: "France",
  countryCode: "FR",
  flag: "🇫🇷",
  currency: {
    code: "EUR",
    symbol: "€",
    position: "before",
  },
  content: {
    hero: {
      badge: "FACTURATION CONFORME",
      headline: "La facturation conçue autour de la conformité.",
      headlineAccent: "Pas ajoutée après coup.",
      subheadline: "Invoicemonk est le logiciel de facturation et de comptabilité qui garde les freelances, consultants et petites entreprises conformes, prêts pour l'audit et payés dans chaque pays où ils travaillent.",
      cta: "Commencer gratuitement — sans carte",
      secondaryCta: "Voir comment fonctionne la conformité →",
      trustBadge: "Utilisé par des entreprises facturant dans plus de 30 pays, dont la France",
    },
    compliance: {
      authority: "DGFIP",
      message: "Entièrement conforme aux exigences de la Direction Générale des Finances Publiques",
    },
    socialProof: "Rejoignez les entreprises en croissance en France",
    paymentGateway: "SEPA & Stripe",
    seo: {
      siteTitle: "Invoicemonk France - Logiciel de facturation conforme DGFIP",
      siteDescription: "Logiciel de facturation et de comptabilité professionnel pour les entreprises françaises. Conforme DGFIP, intégration SEPA, suivi TVA. Offre gratuite disponible.",
      complianceKeyword: "conforme DGFIP",
      targetAudience: "française",
      region: "France",
      hreflangCode: "fr-FR",
    },
    testimonials: [
      {
        quote: "Invoicemonk gère parfaitement nos calculs de TVA et nos exigences de facturation. La conformité avec la DGFIP n'a jamais été aussi simple.",
        highlight: "calculs de TVA parfaitement",
        name: "Pierre Dupont",
        title: "Fondateur",
        company: "Dupont Conseil",
        location: "Paris, France",
      },
      {
        quote: "En tant qu'auto-entrepreneur, j'avais besoin d'une facturation abordable et conforme. Le plan gratuit d'Invoicemonk était le point de départ idéal.",
        highlight: "facturation abordable et conforme",
        name: "Sophie Martin",
        title: "Designer freelance",
        company: "Martin Design Studio",
        location: "Lyon, France",
      },
      {
        quote: "Nous traitons des centaines de factures par mois. L'automatisation d'Invoicemonk fait gagner un temps considérable à notre équipe chaque semaine.",
        highlight: "fait gagner un temps considérable",
        name: "Antoine Bernard",
        title: "Directeur financier",
        company: "Marseille Tech SAS",
        location: "Marseille, France",
      },
    ],
    faqs: [
      {
        question: "Quels modes de paiement sont acceptés en France ?",
        answer: "Invoicemonk prend en charge les virements SEPA, Stripe, les cartes de crédit/débit et PayPal. Les clients peuvent payer directement depuis la facture.",
      },
      {
        question: "Invoicemonk est-il conforme aux exigences françaises de facturation ?",
        answer: "Oui. Invoicemonk génère des factures conformes à la DGFIP avec des calculs de TVA corrects à 20 % (ou taux réduits de 10 %, 5,5 %, 2,1 %). Les documents incluent toutes les mentions légales obligatoires.",
      },
      {
        question: "Combien coûte Invoicemonk en France ?",
        answer: "Invoicemonk propose un plan gratuit avec 5 factures par mois. Les plans payants commencent à 29 €/mois (Professionnel) et 119 €/mois (Business). La facturation annuelle vous fait économiser 20 %.",
      },
      {
        question: "Invoicemonk gère-t-il la TVA pour les entreprises françaises ?",
        answer: "Oui. Invoicemonk calcule la TVA au taux applicable et fournit des rapports pour vos déclarations de TVA.",
      },
      {
        question: "Invoicemonk prend-il en charge la facturation électronique ?",
        answer: "Oui. Invoicemonk prend en charge les normes de facturation électronique, notamment Peppol et Chorus Pro, et est prêt pour le mandat français de facturation électronique B2B. Chaque facture peut inclure des signatures numériques, des cachets cryptographiques (CSID) et des numéros de référence de facture uniques (IRN) pour une conformité réglementaire complète.",
      },
    ],
    blog: {
      ctaHeadline: "Prêt à simplifier votre facturation ?",
      ctaSubtext: "Rejoignez les entreprises françaises qui utilisent Invoicemonk avec l'intégration SEPA.",
      ctaButtonText: "Commencer à facturer aujourd'hui",
    },
    socialProofHeadline: "Apprécié par les entreprises françaises",
  },
  pricing: {
    free: 0,
    professional: 29,
    business: 119,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "Économisez 20 %",
    starterAvailable: false,
  },
  urlPrefix: "fr",
  dateFormat: "DD/MM/YYYY",
  taxLabels: { primary: "TVA", rate: "20%" },
};
