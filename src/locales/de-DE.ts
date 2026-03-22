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
      badge: "STEUERKONFORME RECHNUNGSSTELLUNG",
      headline: "Rechnungsstellung mit Compliance im Kern.",
      headlineAccent: "Nicht nachträglich aufgesetzt.",
      subheadline: "Invoicemonk ist die Rechnungs- und Buchhaltungssoftware, die Freiberufler, Berater und kleine Unternehmen steuerkonform, prüfungssicher und in jedem Land bezahlt hält.",
      cta: "Kostenlos starten — keine Karte nötig",
      secondaryCta: "So funktioniert Compliance →",
      trustBadge: "Genutzt von Unternehmen in über 30 Ländern, einschließlich Deutschland",
    },
    compliance: {
      authority: "Finanzamt",
      message: "Vollständig konform mit den Anforderungen des deutschen Finanzamts und der USt",
    },
    socialProof: "Schließen Sie sich wachsenden Unternehmen in Deutschland an",
    paymentGateway: "SEPA & Stripe",
    seo: {
      siteTitle: "Invoicemonk Deutschland - Finanzamt-konforme Rechnungssoftware",
      siteDescription: "Professionelle Rechnungs- und Buchhaltungssoftware für deutsche Unternehmen. Finanzamt-konform, SEPA-Integration. Kostenlose Stufe verfügbar.",
      complianceKeyword: "Finanzamt-konform",
      targetAudience: "deutsche",
      region: "Deutschland",
      hreflangCode: "de-DE",
    },
    testimonials: [
      {
        quote: "Invoicemonk erledigt unsere USt-Berechnungen perfekt. Der GoBD-konforme Audit-Trail gibt uns Sicherheit in der Steuersaison.",
        highlight: "USt-Berechnungen perfekt",
        name: "Stefan Weber",
        title: "Gründer",
        company: "Weber Digital GmbH",
        location: "Berlin, Deutschland",
      },
      {
        quote: "Wir haben von manueller Excel-Rechnungsstellung gewechselt und die Zeitersparnis ist unglaublich. SEPA-Zahlungen integrieren sich nahtlos.",
        highlight: "Zeitersparnis ist unglaublich",
        name: "Laura Müller",
        title: "Geschäftsführerin",
        company: "München Creative Studio",
        location: "München, Deutschland",
      },
      {
        quote: "Als Freiberufler brauche ich ordentliche Rechnungen für das Finanzamt. Invoicemonk macht das mühelos und professionell.",
        highlight: "mühelos und professionell",
        name: "Thomas Schneider",
        title: "Freiberuflicher Berater",
        company: "Schneider Beratung",
        location: "Hamburg, Deutschland",
      },
    ],
    faqs: [
      {
        question: "Welche Zahlungsmethoden werden in Deutschland unterstützt?",
        answer: "Invoicemonk unterstützt SEPA-Überweisungen, Stripe-Zahlungen, Kredit-/Debitkarten und PayPal. Kunden können direkt über die Rechnung bezahlen.",
      },
      {
        question: "Ist Invoicemonk konform mit deutschen Steueranforderungen?",
        answer: "Ja. Invoicemonk erstellt Finanzamt-konforme Rechnungen mit korrekten USt-Berechnungen bei 19 % (oder 7 % ermäßigter Satz). Dokumente erfüllen die GoBD-Anforderungen.",
      },
      {
        question: "Was kostet Invoicemonk in Deutschland?",
        answer: "Invoicemonk bietet einen kostenlosen Plan mit 5 Rechnungen pro Monat. Bezahlpläne beginnen ab 10 €/Monat (Professional) und 25 €/Monat (Business). Jährliche Abrechnung spart 20 %.",
      },
      {
        question: "Verwaltet Invoicemonk die USt (Umsatzsteuer) für deutsche Unternehmen?",
        answer: "Ja. Invoicemonk berechnet die USt mit 19 % oder 7 % und erstellt Berichte für Ihre Umsatzsteuervoranmeldung.",
      },
      {
        question: "Unterstützt Invoicemonk E-Invoicing?",
        answer: "Ja. Invoicemonk unterstützt E-Invoicing-Standards einschließlich Peppol, ZUGFeRD und XRechnung gemäß der EU-E-Invoicing-Richtlinie. Jede Rechnung kann digitale Signaturen, kryptografische Stempel (CSID) und eindeutige Rechnungsreferenznummern (IRN) für vollständige regulatorische Compliance enthalten.",
      },
    ],
    blog: {
      ctaHeadline: "Bereit, Ihre Rechnungsstellung zu optimieren?",
      ctaSubtext: "Schließen Sie sich deutschen Unternehmen an, die Invoicemonk mit SEPA-Integration nutzen.",
      ctaButtonText: "Jetzt mit der Rechnungsstellung beginnen",
    },
    socialProofHeadline: "Geliebt von deutschen Unternehmen",
  },
  pricing: {
    free: 0,
    professional: 10,
    business: 25,
    annualMultiplier: 0.8,
  },
  pricingContent: {
    annualSavingsText: "20 % sparen",
    starterAvailable: false,
  },
  urlPrefix: "de",
  dateFormat: "DD.MM.YYYY",
  taxLabels: { primary: "USt", rate: "19%" },
};
