/**
 * German translations for country-specific compliance posts.
 * Mirrors the generator pattern in countryCompliancePosts.ts.
 */
import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const countriesWithImages = ['ng', 'us', 'uk', 'ca', 'au', 'gh', 'ke', 'za'];

interface CountryConfig {
  code: string; name: string; nameDe: string; demonym: string; demonymDe: string;
  authority: string; authorityFull: string; taxType: string; taxRate: string;
  currency: string; currencyCode: string; taxId: string; taxIdFull: string;
  vatThreshold: string; filingFrequency: string; filingFrequencyDe: string;
  recordKeepingYears: string; paymentMethods: string; paymentMethodsDe: string;
  penalties: string; penaltiesDe: string;
  einvoicingContext: string; einvoicingContextDe: string;
  registrationUrl: string;
}

const countries: CountryConfig[] = [
  {
    code: 'ng', name: 'Nigeria', nameDe: 'Nigeria', demonym: 'Nigerian', demonymDe: 'nigerianische',
    authority: 'FIRS', authorityFull: 'Federal Inland Revenue Service',
    taxType: 'VAT', taxRate: '7,5 %', currency: '₦', currencyCode: 'NGN',
    taxId: 'TIN', taxIdFull: 'Tax Identification Number',
    vatThreshold: '₦25 Mio. Jahresumsatz',
    filingFrequency: 'monthly, by the 21st of the following month',
    filingFrequencyDe: 'monatlich, bis zum 21. des Folgemonats',
    recordKeepingYears: '6',
    paymentMethods: 'Paystack, bank transfer, USSD, and debit cards',
    paymentMethodsDe: 'Paystack, Banküberweisung, USSD und Debitkarten',
    penalties: 'Failure to register: ₦10,000 first month + ₦5,000/month thereafter.',
    penaltiesDe: 'Nichtregistrierung: ₦10.000 im ersten Monat + ₦5.000/Monat danach. Verspätete Abgabe: ₦5.000/Monat. Verspätete Zahlung: Zinsen zum CBN-Mindestzinssatz.',
    einvoicingContext: 'Nigeria is moving toward digital tax administration via the FIRS TaxPro-Max platform.',
    einvoicingContextDe: 'Nigeria bewegt sich in Richtung digitale Steuerverwaltung über die FIRS TaxPro-Max-Plattform. Obwohl E-Rechnungen noch nicht vollständig verpflichtend sind, werden digitale Aufzeichnungen zunehmend erwartet.',
    registrationUrl: 'https://firs.gov.ng',
  },
  {
    code: 'us', name: 'United States', nameDe: 'Vereinigte Staaten', demonym: 'American', demonymDe: 'amerikanische',
    authority: 'IRS', authorityFull: 'Internal Revenue Service',
    taxType: 'Sales Tax', taxRate: 'je nach Bundesstaat (0 %–10,25 %)', currency: '$', currencyCode: 'USD',
    taxId: 'EIN', taxIdFull: 'Employer Identification Number',
    vatThreshold: 'je nach Bundesstaat — Economic Nexus ab ca. $100.000 Umsatz oder 200 Transaktionen',
    filingFrequency: 'quarterly or annually depending on state',
    filingFrequencyDe: 'vierteljährlich oder jährlich je nach Bundesstaat',
    recordKeepingYears: '7',
    paymentMethods: 'ACH transfer, credit/debit cards, checks, PayPal, and Stripe',
    paymentMethodsDe: 'ACH-Überweisung, Kredit-/Debitkarten, Schecks, PayPal und Stripe',
    penalties: 'Failure to file: 5% of unpaid tax per month (up to 25%).',
    penaltiesDe: 'Nichtabgabe: 5 % der nicht gezahlten Steuer pro Monat (bis 25 %). Nichtzahlung: 0,5 % pro Monat. Genauigkeitsstrafen: 20 % der Unterzahlung.',
    einvoicingContext: 'The US has no federal e-invoicing mandate for B2B transactions.',
    einvoicingContextDe: 'Die USA haben kein bundesweites E-Rechnungs-Mandat für B2B-Transaktionen. Die Business Payments Coalition fördert jedoch strukturierte E-Rechnungen.',
    registrationUrl: 'https://www.irs.gov',
  },
  {
    code: 'uk', name: 'United Kingdom', nameDe: 'Vereinigtes Königreich', demonym: 'British', demonymDe: 'britische',
    authority: 'HMRC', authorityFull: 'HM Revenue & Customs',
    taxType: 'VAT', taxRate: '20 % (Standard), 5 % (ermäßigt), 0 % (Nullsatz)', currency: '£', currencyCode: 'GBP',
    taxId: 'UTR', taxIdFull: 'Unique Taxpayer Reference',
    vatThreshold: '£90.000 steuerpflichtiger Jahresumsatz',
    filingFrequency: 'quarterly via Making Tax Digital (MTD)',
    filingFrequencyDe: 'vierteljährlich über Making Tax Digital (MTD)',
    recordKeepingYears: '6',
    paymentMethods: 'bank transfer (BACS/Faster Payments), credit/debit cards, PayPal, and GoCardless',
    paymentMethodsDe: 'Banküberweisung (BACS/Faster Payments), Kredit-/Debitkarten, PayPal und GoCardless',
    penalties: 'Late registration: up to 100% of VAT owed.',
    penaltiesDe: 'Verspätete Registrierung: bis zu 100 % der geschuldeten VAT. Verspätete Abgabe: £200 Grundstrafe mit Steigerung bei Wiederholung.',
    einvoicingContext: 'The UK supports Peppol e-invoicing and has implemented Making Tax Digital (MTD).',
    einvoicingContextDe: 'Das UK unterstützt Peppol-E-Rechnungen und hat Making Tax Digital (MTD) eingeführt, das digitale Aufzeichnungen und vierteljährliche digitale VAT-Erklärungen für alle VAT-registrierten Unternehmen vorschreibt.',
    registrationUrl: 'https://www.gov.uk/government/organisations/hm-revenue-customs',
  },
  {
    code: 'ca', name: 'Canada', nameDe: 'Kanada', demonym: 'Canadian', demonymDe: 'kanadische',
    authority: 'CRA', authorityFull: 'Canada Revenue Agency',
    taxType: 'GST/HST', taxRate: '5 % GST (Bund) + 0–10 % Provinz (HST bis 15 %)', currency: 'C$', currencyCode: 'CAD',
    taxId: 'BN', taxIdFull: 'Business Number',
    vatThreshold: 'C$30.000 in vier aufeinanderfolgenden Kalenderquartalen',
    filingFrequency: 'quarterly or annually depending on revenue',
    filingFrequencyDe: 'vierteljährlich oder jährlich je nach Umsatz',
    recordKeepingYears: '6',
    paymentMethods: 'Interac e-Transfer, credit/debit cards, EFT, and PayPal',
    paymentMethodsDe: 'Interac e-Transfer, Kredit-/Debitkarten, EFT und PayPal',
    penalties: 'Late filing: 1% of balance owing + 0.25% per month.',
    penaltiesDe: 'Verspätete Abgabe: 1 % des geschuldeten Betrags + 0,25 %/Monat (bis 12 Monate). Wiederholte Verspätung: 10 % + 2 %/Monat.',
    einvoicingContext: 'Canada is exploring Peppol adoption.',
    einvoicingContextDe: 'Kanada prüft die Einführung von Peppol über die Digital Commerce Standards Initiative. E-Rechnungen sind noch nicht verpflichtend, die CRA fördert jedoch elektronische Aufzeichnungen.',
    registrationUrl: 'https://www.canada.ca/en/revenue-agency.html',
  },
  {
    code: 'au', name: 'Australia', nameDe: 'Australien', demonym: 'Australian', demonymDe: 'australische',
    authority: 'ATO', authorityFull: 'Australian Taxation Office',
    taxType: 'GST', taxRate: '10 %', currency: 'A$', currencyCode: 'AUD',
    taxId: 'ABN', taxIdFull: 'Australian Business Number',
    vatThreshold: 'A$75.000 Jahresumsatz (A$150.000 für Non-Profit)',
    filingFrequency: 'quarterly via Business Activity Statements (BAS)',
    filingFrequencyDe: 'vierteljährlich über Business Activity Statements (BAS)',
    recordKeepingYears: '5',
    paymentMethods: 'BPAY, bank transfer, credit/debit cards, PayPal, and Stripe',
    paymentMethodsDe: 'BPAY, Banküberweisung, Kredit-/Debitkarten, PayPal und Stripe',
    penalties: 'Failure to lodge BAS on time: $313 per 28-day period.',
    penaltiesDe: 'Verspätete BAS-Abgabe: $313 pro 28-Tage-Zeitraum (bis 5 Perioden). GIC-Zinsen auf verspätete Zahlungen.',
    einvoicingContext: 'Australia is a leader in Peppol e-invoicing adoption.',
    einvoicingContextDe: 'Australien ist Vorreiter bei der Peppol-E-Rechnungseinführung. Das ATO unterstützt Peppol aktiv für B2B- und B2G-Transaktionen.',
    registrationUrl: 'https://www.ato.gov.au',
  },
  {
    code: 'gh', name: 'Ghana', nameDe: 'Ghana', demonym: 'Ghanaian', demonymDe: 'ghanaische',
    authority: 'GRA', authorityFull: 'Ghana Revenue Authority',
    taxType: 'VAT', taxRate: '15 % (Standard) + 2,5 % NHIL + 2,5 % GETFund + 1 % COVID-Abgabe', currency: 'GH₵', currencyCode: 'GHS',
    taxId: 'TIN', taxIdFull: 'Taxpayer Identification Number',
    vatThreshold: 'GH₵200.000 steuerpflichtiger Jahresumsatz',
    filingFrequency: 'monthly, by the last working day of the following month',
    filingFrequencyDe: 'monatlich, bis zum letzten Arbeitstag des Folgemonats',
    recordKeepingYears: '6',
    paymentMethods: 'Paystack, mobile money (MTN MoMo, Vodafone Cash), bank transfer, and debit cards',
    paymentMethodsDe: 'Paystack, Mobile Money (MTN MoMo, Vodafone Cash), Banküberweisung und Debitkarten',
    penalties: 'Late filing: GH₵500 + 3% of tax due per month.',
    penaltiesDe: 'Verspätete Abgabe: GH₵500 + 3 % der fälligen Steuer/Monat. Verspätete Zahlung: 125 % des Bank-of-Ghana-Leitzinses.',
    einvoicingContext: 'Ghana has implemented e-VAT invoicing requirements through the GRA.',
    einvoicingContextDe: 'Ghana hat E-VAT-Rechnungsanforderungen über die GRA eingeführt. Zertifizierte VAT-Rechnungssoftware ist für VAT-registrierte Unternehmen erforderlich.',
    registrationUrl: 'https://gra.gov.gh',
  },
  {
    code: 'ke', name: 'Kenya', nameDe: 'Kenia', demonym: 'Kenyan', demonymDe: 'kenianische',
    authority: 'KRA', authorityFull: 'Kenya Revenue Authority',
    taxType: 'VAT', taxRate: '16 % (Standard), 8 % (Petroleum), 0 % (Exporte)', currency: 'KSh', currencyCode: 'KES',
    taxId: 'KRA PIN', taxIdFull: 'KRA Personal Identification Number',
    vatThreshold: 'KSh5 Mio. steuerpflichtiger Jahresumsatz',
    filingFrequency: 'monthly, by the 20th of the following month via iTax',
    filingFrequencyDe: 'monatlich, bis zum 20. des Folgemonats über iTax',
    recordKeepingYears: '5',
    paymentMethods: 'M-Pesa, Paystack, bank transfer, and debit cards',
    paymentMethodsDe: 'M-Pesa, Paystack, Banküberweisung und Debitkarten',
    penalties: 'Late filing: KSh10,000 or 5% of tax due (whichever is higher).',
    penaltiesDe: 'Verspätete Abgabe: KSh10.000 oder 5 % der fälligen Steuer (höherer Betrag). Verspätete Zahlung: 2 %/Monat.',
    einvoicingContext: 'Kenya has implemented the Tax Invoice Management System (TIMS).',
    einvoicingContextDe: 'Kenia hat das Tax Invoice Management System (TIMS) über die KRA eingeführt, das KRA-zugelassene elektronische Steuerrechnungssysteme vorschreibt.',
    registrationUrl: 'https://www.kra.go.ke',
  },
  {
    code: 'za', name: 'South Africa', nameDe: 'Südafrika', demonym: 'South African', demonymDe: 'südafrikanische',
    authority: 'SARS', authorityFull: 'South African Revenue Service',
    taxType: 'VAT', taxRate: '15 %', currency: 'R', currencyCode: 'ZAR',
    taxId: 'Tax Reference Number', taxIdFull: 'SARS Tax Reference Number',
    vatThreshold: 'R1 Mio. steuerpflichtiger Jahresumsatz (freiwillig ab R50.000)',
    filingFrequency: 'bi-monthly via SARS eFiling',
    filingFrequencyDe: 'zweimonatlich über SARS eFiling',
    recordKeepingYears: '5',
    paymentMethods: 'EFT, credit/debit cards, instant bank transfer, and SnapScan',
    paymentMethodsDe: 'EFT, Kredit-/Debitkarten, Sofortüberweisung und SnapScan',
    penalties: 'Late filing: R250/day increasing to R500/day for repeat offenders.',
    penaltiesDe: 'Verspätete Abgabe: R250/Tag, steigend auf R500/Tag bei Wiederholung. Verspätete Zahlung: 10 % Strafe + Zinsen.',
    einvoicingContext: 'South Africa is preparing for e-invoicing adoption.',
    einvoicingContextDe: 'Südafrika bereitet die Einführung von E-Rechnungen vor. SARS eFiling ist bereits für VAT-Erklärungen erforderlich.',
    registrationUrl: 'https://www.sars.gov.za',
  },
  // ── New European Markets ──
  {
    code: 'ro', name: 'Romania', nameDe: 'Rumänien', demonym: 'Romanian', demonymDe: 'rumänische',
    authority: 'ANAF', authorityFull: 'Agenția Națională de Administrare Fiscală',
    taxType: 'VAT', taxRate: '19 % (Standard), 9 % (ermäßigt), 5 % (stark ermäßigt)', currency: 'RON', currencyCode: 'RON',
    taxId: 'CUI/CIF', taxIdFull: 'Cod Unic de Înregistrare',
    vatThreshold: 'RON 300.000 Jahresumsatz',
    filingFrequency: 'monthly, by the 25th of the following month',
    filingFrequencyDe: 'monatlich, bis zum 25. des Folgemonats',
    recordKeepingYears: '10',
    paymentMethods: 'bank transfer, card payments, and PayU Romania',
    paymentMethodsDe: 'Banküberweisung, Kartenzahlung und PayU Romania',
    penalties: 'Late payment interest: 0.06%/day.',
    penaltiesDe: 'Verzugszinsen: 0,06 %/Tag. Nichtregistrierung: RON 1.000–5.000. Verspätete Abgabe: RON 1.000–5.000 pro Erklärung.',
    einvoicingContext: 'Romania has implemented mandatory e-Factura for all B2B transactions.',
    einvoicingContextDe: 'Rumänien hat die verpflichtende e-Factura für alle B2B-Transaktionen über ANAF eingeführt. Alle Rechnungen müssen elektronisch über das RO e-Factura-System eingereicht werden.',
    registrationUrl: 'https://www.anaf.ro',
  },
  {
    code: 'hu', name: 'Hungary', nameDe: 'Ungarn', demonym: 'Hungarian', demonymDe: 'ungarische',
    authority: 'NAV', authorityFull: 'Nemzeti Adó- és Vámhivatal',
    taxType: 'VAT (ÁFA)', taxRate: '27 % (Standard), 18 % (ermäßigt), 5 % (stark ermäßigt)', currency: 'HUF', currencyCode: 'HUF',
    taxId: 'Adószám', taxIdFull: 'Adószám (Steuernummer)',
    vatThreshold: 'HUF 12 Mio. Jahresumsatz',
    filingFrequency: 'monthly (if turnover >HUF 50M), quarterly, or annually',
    filingFrequencyDe: 'monatlich (bei Umsatz >HUF 50 Mio.), vierteljährlich oder jährlich',
    recordKeepingYears: '8',
    paymentMethods: 'bank transfer, Barion, SimplePay, and card payments',
    paymentMethodsDe: 'Banküberweisung, Barion, SimplePay und Kartenzahlung',
    penalties: 'Up to 50% of tax shortfall. HUF 500,000 for reporting violations.',
    penaltiesDe: 'Bis zu 50 % des Steuerfehlbetrags. HUF 500.000 für Meldeverstöße. Verzugszinsen zum Basiszins der Zentralbank + Zuschlag.',
    einvoicingContext: 'Hungary operates the mandatory Online Számla real-time reporting system.',
    einvoicingContextDe: 'Ungarn betreibt das verpflichtende Online-Számla-Echtzeit-Meldesystem. Jede Rechnung über HUF 100.000 MwSt. muss in Echtzeit an die NAV gemeldet werden.',
    registrationUrl: 'https://nav.gov.hu',
  },
  {
    code: 'rs', name: 'Serbia', nameDe: 'Serbien', demonym: 'Serbian', demonymDe: 'serbische',
    authority: 'SEF', authorityFull: 'Sistem Elektronskih Faktura',
    taxType: 'VAT (PDV)', taxRate: '20 % (Standard), 10 % (ermäßigt)', currency: 'RSD', currencyCode: 'RSD',
    taxId: 'PIB', taxIdFull: 'Poreski Identifikacioni Broj',
    vatThreshold: 'RSD 8 Mio. Jahresumsatz',
    filingFrequency: 'monthly, by the 15th of the following month',
    filingFrequencyDe: 'monatlich, bis zum 15. des Folgemonats',
    recordKeepingYears: '10',
    paymentMethods: 'bank transfer, IPS (Instant Payment Serbia), and card payments',
    paymentMethodsDe: 'Banküberweisung, IPS (Instant Payment Serbia) und Kartenzahlung',
    penalties: 'RSD 100,000–2,000,000 for non-compliance.',
    penaltiesDe: 'RSD 100.000–2.000.000 bei Nichteinhaltung der E-Rechnungspflicht. Bußgelder basierend auf dem Steuerfehlbetrag.',
    einvoicingContext: 'Serbia has implemented mandatory SEF e-invoicing for all B2B/B2G transactions.',
    einvoicingContextDe: 'Serbien hat das verpflichtende SEF-E-Rechnungssystem für alle B2B- und B2G-Transaktionen eingeführt. Alle Unternehmen müssen Rechnungen über die zentrale staatliche Plattform ausstellen und empfangen.',
    registrationUrl: 'https://www.efaktura.gov.rs',
  },
  {
    code: 'pl', name: 'Poland', nameDe: 'Polen', demonym: 'Polish', demonymDe: 'polnische',
    authority: 'KAS', authorityFull: 'Krajowa Administracja Skarbowa',
    taxType: 'VAT', taxRate: '23 % (Standard), 8 % (ermäßigt), 5 % (stark ermäßigt)', currency: 'PLN', currencyCode: 'PLN',
    taxId: 'NIP', taxIdFull: 'Numer Identyfikacji Podatkowej',
    vatThreshold: 'PLN 200.000 Jahresumsatz',
    filingFrequency: 'monthly, by the 25th (JPK_VAT)',
    filingFrequencyDe: 'monatlich, bis zum 25. (JPK_VAT-Zusammenfassung)',
    recordKeepingYears: '5',
    paymentMethods: 'BLIK, bank transfer, card payments, PayU, and Przelewy24',
    paymentMethodsDe: 'BLIK, Banküberweisung, Kartenzahlung, PayU und Przelewy24',
    penalties: 'Up to 30% of VAT discrepancy. Criminal liability for tax fraud.',
    penaltiesDe: 'Bis zu 30 % der MwSt.-Differenz. Strafrechtliche Haftung bei Steuerbetrug. Verzugszinsen zu 200 % des Lombardsatzes.',
    einvoicingContext: 'Poland is implementing KSeF mandatory structured e-invoicing.',
    einvoicingContextDe: 'Polen führt KSeF (Krajowy System e-Faktur) ein — ein verpflichtendes strukturiertes E-Rechnungssystem für alle MwSt.-registrierten Unternehmen im standardisierten XML-Format.',
    registrationUrl: 'https://www.podatki.gov.pl',
  },
  {
    code: 'it', name: 'Italy', nameDe: 'Italien', demonym: 'Italian', demonymDe: 'italienische',
    authority: 'AdE', authorityFull: 'Agenzia delle Entrate',
    taxType: 'IVA', taxRate: '22 % (Standard), 10 % (ermäßigt), 5 %, 4 % (Minimum)', currency: '€', currencyCode: 'EUR',
    taxId: 'Partita IVA', taxIdFull: 'Partita IVA (USt-Nummer)',
    vatThreshold: '€65.000 Jahresumsatz (Regime forfettario)',
    filingFrequency: 'monthly or quarterly; annual declaration',
    filingFrequencyDe: 'monatlich oder vierteljährlich; Jahreserklärung bis 30. April',
    recordKeepingYears: '10',
    paymentMethods: 'bank transfer (bonifico), PagoPA, card payments, and Satispay',
    paymentMethodsDe: 'Banküberweisung (Bonifico), PagoPA, Kartenzahlung und Satispay',
    penalties: '120%–240% of underpaid IVA. €250–€2,000 for missing invoices.',
    penaltiesDe: '120–240 % der nicht gezahlten IVA. €250–€2.000 für fehlende Rechnungen. Verzugszinsen zum gesetzlichen Satz + Zuschlag.',
    einvoicingContext: 'Italy operates mandatory FatturaPA/SDI — all invoices must pass through the government exchange system.',
    einvoicingContextDe: 'Italien betreibt das verpflichtende FatturaPA/SDI-System — alle Rechnungen müssen über das staatliche Austauschsystem laufen. Italien war das erste EU-Land mit verpflichtender B2B-E-Rechnungsstellung.',
    registrationUrl: 'https://www.agenziaentrate.gov.it',
  },
  {
    code: 'bg', name: 'Bulgaria', nameDe: 'Bulgarien', demonym: 'Bulgarian', demonymDe: 'bulgarische',
    authority: 'NRA', authorityFull: 'National Revenue Agency (Национална агенция за приходите)',
    taxType: 'VAT (ДДС)', taxRate: '20 % (Standard), 9 % (ermäßigt für Tourismus/Gastronomie)', currency: 'BGN', currencyCode: 'BGN',
    taxId: 'ЕИК/БУЛСТАТ', taxIdFull: 'ЕИК/БУЛСТАТ (EIK/BULSTAT)',
    vatThreshold: 'BGN 100.000 steuerpflichtiger Jahresumsatz',
    filingFrequency: 'monthly, by the 14th of the following month',
    filingFrequencyDe: 'monatlich, bis zum 14. des Folgemonats',
    recordKeepingYears: '5',
    paymentMethods: 'bank transfer, ePay.bg, and card payments',
    paymentMethodsDe: 'Banküberweisung, ePay.bg und Kartenzahlung',
    penalties: 'BGN 500–10,000 for non-registration. Late payment: 0.03%/day.',
    penaltiesDe: 'BGN 500–10.000 für Nichtregistrierung. Verzugszinsen: 0,03 %/Tag. Strenge 10-stellige fortlaufende Rechnungsnummerierung vorgeschrieben.',
    einvoicingContext: 'Bulgaria follows EN 16931 and requires SAF-T audit file submissions.',
    einvoicingContextDe: 'Bulgarien folgt dem europäischen E-Rechnungsstandard EN 16931 und verlangt SAF-T-Prüfdateien. Die Rechnungsnummerierung muss einem strikten 10-stelligen fortlaufenden Format folgen.',
    registrationUrl: 'https://www.nra.bg',
  },
];

// ── Template 1: Steuerkonforme Rechnung ──
function genTaxCompliantInvoice(c: CountryConfig): BlogPost {
  return {
    slug: `tax-compliant-invoice-${c.code}`,
    title: `Steuerkonforme Rechnung in ${c.nameDe}: ${c.authority}-Anforderungen`,
    excerpt: `Schritt-für-Schritt-Anleitung für ${c.authority}-konforme Rechnungen in ${c.nameDe}. Pflichtangaben, ${c.taxType}-Regeln und Strafen vermeiden.`,
    category: 'Tax and Compliance',
    tags: [c.authority.toLowerCase(), c.name.toLowerCase(), 'steuerkonforme rechnungsstellung', c.taxType.toLowerCase()],
    author: defaultAuthor, date: '2026-02-20', dateModified: '2026-02-21', readTime: '10 Min. Lesezeit',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/tax-compliant-invoice-${c.code}.jpg` : '/images/blog/invoicing-tax-compliance-hero.jpg',
    featuredImageAlt: `Leitfaden für steuerkonforme Rechnungen in ${c.nameDe}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`${c.authority} konforme Rechnung`, `Steuerrechnung ${c.nameDe}`, `${c.taxType} Rechnung ${c.nameDe}`],
    priority: 'P2',
    faq: [
      { question: `Welche Pflichtangaben muss eine Steuerrechnung in ${c.nameDe} enthalten?`, answer: `Eine steuerkonforme Rechnung in ${c.nameDe} muss enthalten: Firmenname und Adresse, ${c.taxId} (${c.taxIdFull}), Kundendaten, eindeutige Rechnungsnummer, Datum, Beschreibung der Waren/Leistungen, Mengen, Einzelpreise, ${c.taxType}-Betrag (${c.taxRate}) und Gesamtbetrag.` },
      { question: `Benötige ich eine ${c.taxId}, um in ${c.nameDe} Rechnungen auszustellen?`, answer: `Ja. Alle Unternehmen in ${c.nameDe} benötigen eine ${c.taxIdFull} (${c.taxId}) für konforme Rechnungen. Registrierung unter ${c.registrationUrl}.` },
      { question: `Wie lange müssen Rechnungsunterlagen in ${c.nameDe} aufbewahrt werden?`, answer: `${c.authority} verlangt eine Aufbewahrung von mindestens ${c.recordKeepingYears} Jahren.` },
    ],
    content: `
      <p>Die Ausstellung steuerkonformer Rechnungen in ${c.nameDe} ist nicht nur gute Praxis — es ist gesetzlich vorgeschrieben. Die <strong>${c.authorityFull} (${c.authority})</strong> legt strenge Regeln fest, welche Angaben jede Rechnung enthalten muss, wie ${c.taxType} berechnet wird und wie lange Unterlagen aufbewahrt werden müssen.</p>

      <h2>Warum Rechnungskonformität in ${c.nameDe} wichtig ist</h2>
      <p>Eine konforme Rechnung schafft einen rechtlichen Nachweis, der Sie und Ihren Kunden schützt. ${c.authority} nutzt Rechnungen zur Überprüfung von Steuererklärungen und zur Identifizierung nicht konformer Unternehmen.</p>
      <ul>
        <li>Abgelehnte Steuerabzüge für Ihre Kunden</li>
        <li>Strafen und Zinsen von ${c.authority}</li>
        <li>Fehlgeschlagene Prüfungen und erhöhte Kontrolle</li>
      </ul>

      <h2>Pflichtangaben auf der Rechnung</h2>
      <ol>
        <li><strong>Firmenname und Adresse</strong> — wie bei ${c.authority} registriert</li>
        <li><strong>${c.taxIdFull} (${c.taxId})</strong></li>
        <li><strong>Kundenname und Adresse</strong> — und ${c.taxId} bei B2B</li>
        <li><strong>Eindeutige Rechnungsnummer</strong> — fortlaufend, ohne Lücken</li>
        <li><strong>Rechnungsdatum</strong></li>
        <li><strong>Beschreibung der Waren/Dienstleistungen</strong></li>
        <li><strong>Menge und Einzelpreis</strong></li>
        <li><strong>Zwischensumme</strong> — vor ${c.taxType}</li>
        <li><strong>${c.taxType}-Betrag</strong> — berechnet mit ${c.taxRate}</li>
        <li><strong>Gesamtbetrag</strong> — inkl. ${c.taxType}</li>
      </ol>

      <h2>${c.taxType}-Registrierungspflicht</h2>
      <p>In ${c.nameDe} müssen Sie sich für ${c.taxType} registrieren, wenn Ihr steuerpflichtiger Umsatz <strong>${c.vatThreshold}</strong> übersteigt. Danach müssen Sie:</p>
      <ul>
        <li>${c.taxType} mit ${c.taxRate} auf alle steuerpflichtigen Lieferungen berechnen</li>
        <li>${c.taxType}-konforme Rechnungen ausstellen</li>
        <li>${c.taxType}-Erklärungen ${c.filingFrequencyDe} einreichen</li>
        <li>Eingezogene ${c.taxType} an ${c.authority} abführen</li>
        <li>Unterlagen mindestens ${c.recordKeepingYears} Jahre aufbewahren</li>
      </ul>

      <h2>Aufbewahrungspflichten</h2>
      <p>${c.authority} verlangt die Aufbewahrung aller Rechnungen, Belege und Finanzunterlagen für mindestens <strong>${c.recordKeepingYears} Jahre</strong>. Digitale Aufzeichnungen werden akzeptiert.</p>

      <h2>E-Rechnungs-Status</h2>
      <p>${c.einvoicingContextDe}</p>

      <h2>Strafen bei Nichtkonformität</h2>
      <p>${c.penaltiesDe}</p>

      <h2>Zahlungsmethoden für ${c.demonymDe} Unternehmen</h2>
      <p>Beliebte Zahlungsmethoden in ${c.nameDe}: ${c.paymentMethodsDe}. Zahlungslinks direkt auf Rechnungen beschleunigen den Zahlungseingang.</p>

      <h2>Wie Invoicemonk hilft</h2>
      <p><a href="/invoicing">Invoicemonk</a> enthält automatisch alle ${c.authority}-Pflichtangaben, berechnet ${c.taxType} korrekt und speichert Unterlagen sicher für ${c.recordKeepingYears} Jahre.</p>
    `,
  };
}

// ── Template 2: VAT-Rechnungsformat ──
function genVatFormat(c: CountryConfig): BlogPost {
  return {
    slug: `vat-invoice-format-${c.code}`,
    title: `${c.taxType}-Rechnungsformat in ${c.nameDe}: Vollständiger Leitfaden für Kleinunternehmen`,
    excerpt: `Das korrekte ${c.taxType}-Rechnungsformat gemäß ${c.authority} in ${c.nameDe}. Pflichtfelder, Berechnungsbeispiele und kostenlose Vorlagen.`,
    category: 'Tax and Compliance',
    tags: [`${c.taxType.toLowerCase()} rechnung`, c.name.toLowerCase(), c.authority.toLowerCase(), 'rechnungsformat'],
    author: defaultAuthor, date: '2026-02-19', dateModified: '2026-02-21', readTime: '9 Min. Lesezeit',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/vat-invoice-format-${c.code}.jpg` : '/images/blog/invoice-essential-elements.jpg',
    featuredImageAlt: `${c.taxType}-Rechnungsformat-Leitfaden für ${c.nameDe}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`${c.taxType} Rechnungsformat ${c.nameDe}`, `${c.authority} Rechnungsvorlage`],
    priority: 'P2',
    faq: [
      { question: `Was ist der aktuelle ${c.taxType}-Satz in ${c.nameDe}?`, answer: `Der aktuelle ${c.taxType}-Satz beträgt ${c.taxRate}. Überprüfen Sie die neuesten Sätze auf ${c.registrationUrl}.` },
      { question: `Müssen alle Rechnungen in ${c.nameDe} ${c.taxType} ausweisen?`, answer: `Nur ${c.taxType}-registrierte Unternehmen müssen ${c.taxType} auf Rechnungen ausweisen. Die Registrierung ist ab ${c.vatThreshold} Pflicht.` },
    ],
    content: `
      <p>Das richtige ${c.taxType}-Rechnungsformat in ${c.nameDe} ist für die Konformität mit der <strong>${c.authorityFull} (${c.authority})</strong> unerlässlich.</p>

      <h2>Was ist eine ${c.taxType}-Rechnung?</h2>
      <p>Eine ${c.taxType}-Rechnung zeigt die berechnete ${c.taxType} und dient als Nachweis für Käufer und Verkäufer.</p>

      <h2>Pflichtfelder einer ${c.taxType}-Rechnung</h2>
      <ul>
        <li>Aufdruck „Steuerrechnung"</li>
        <li>Firmenname, Adresse und ${c.taxId} des Verkäufers</li>
        <li>Name, Adresse und ${c.taxId} des Käufers (B2B)</li>
        <li>Rechnungsnummer (eindeutig und fortlaufend)</li>
        <li>Rechnungsdatum</li>
        <li>Positionsbeschreibungen mit Mengen und Einzelpreisen</li>
        <li>Zwischensumme vor ${c.taxType}</li>
        <li>${c.taxType}-Satz: ${c.taxRate}</li>
        <li>${c.taxType}-Betrag</li>
        <li>Gesamtbetrag inkl. ${c.taxType}</li>
      </ul>

      <h2>${c.taxType}-Berechnungsbeispiel</h2>
      <p>Für eine Dienstleistung im Wert von ${c.currency}10.000 in ${c.nameDe}:</p>
      <ul>
        <li>Zwischensumme: ${c.currency}10.000</li>
        <li>${c.taxType} (${c.taxRate}): berechnet auf die Zwischensumme</li>
        <li>Gesamt: Zwischensumme + ${c.taxType}</li>
      </ul>

      <h2>Häufige Formatfehler</h2>
      <ul>
        <li>Fehlende ${c.taxId} — macht die Rechnung für Vorsteuerabzug ungültig</li>
        <li>Keine Kennzeichnung als „Steuerrechnung"</li>
        <li>Veraltete ${c.taxType}-Sätze</li>
        <li>${c.taxType} ohne klare Aufschlüsselung in Preise eingerechnet</li>
      </ul>

      <h2>Kostenlose Vorlagen</h2>
      <p><a href="/free-invoice-generator">Invoicemonks kostenloser Rechnungsgenerator</a> bietet vorgefertigte Vorlagen mit allen ${c.authority}-Pflichtfeldern.</p>

      <h2>Digital vs. Papier</h2>
      <p>${c.authority} akzeptiert digitale Rechnungen. ${c.einvoicingContextDe}</p>
    `,
  };
}

// ── Template 3: Freelancer-VAT-Registrierung ──
function genFreelancerVat(c: CountryConfig): BlogPost {
  return {
    slug: `freelancer-vat-registration-${c.code}`,
    title: `${c.taxType}-Registrierung für Freelancer in ${c.nameDe}: Wann und wie`,
    excerpt: `Müssen Sie sich als Freelancer in ${c.nameDe} für ${c.taxType} registrieren? Schwellenwerte, Vor-/Nachteile und Schritt-für-Schritt-Anleitung.`,
    category: 'Tax and Compliance',
    tags: ['freelancer', `${c.taxType.toLowerCase()} registrierung`, c.name.toLowerCase(), c.authority.toLowerCase()],
    author: defaultAuthor, date: '2026-02-17', dateModified: '2026-02-21', readTime: '8 Min. Lesezeit',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/freelancer-vat-${c.code}.jpg` : '/images/blog/quarterly-tax-payments.jpg',
    featuredImageAlt: `${c.taxType}-Registrierung für Freelancer in ${c.nameDe}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`Freelancer ${c.taxType} ${c.nameDe}`, `${c.taxType} Registrierung Freiberufler`],
    priority: 'P2',
    faq: [
      { question: `Ab wann muss ich mich als Freelancer in ${c.nameDe} für ${c.taxType} registrieren?`, answer: `Die ${c.taxType}-Registrierung ist ab ${c.vatThreshold} Pflicht. Freiwillige Registrierung ist darunter möglich.` },
      { question: `Welche Pflichten habe ich nach der ${c.taxType}-Registrierung?`, answer: `${c.taxType} mit ${c.taxRate} berechnen, konforme Rechnungen ausstellen, Erklärungen ${c.filingFrequencyDe} einreichen und ${c.taxType} an ${c.authority} abführen.` },
    ],
    content: `
      <p>Als Freelancer in ${c.nameDe} ist das Verständnis Ihrer ${c.taxType}-Pflichten entscheidend. Erfahren Sie, wann und wie Sie sich bei der <strong>${c.authorityFull} (${c.authority})</strong> registrieren.</p>

      <h2>Wann müssen Sie sich registrieren?</h2>
      <p>Die ${c.taxType}-Registrierung ist ab <strong>${c.vatThreshold}</strong> verpflichtend.</p>

      <h2>Vorteile der freiwilligen Registrierung</h2>
      <ul>
        <li><strong>Vorsteuerabzug:</strong> ${c.taxType} auf Geschäftseinkäufe zurückfordern</li>
        <li><strong>Professionalität:</strong> ${c.taxType}-registrierte Unternehmen wirken etablierter</li>
        <li><strong>B2B-Vorteil:</strong> Kunden können Vorsteuer geltend machen</li>
      </ul>

      <h2>Nachteile der frühen Registrierung</h2>
      <ul>
        <li>Verwaltungsaufwand für ${c.taxType}-Erklärungen ${c.filingFrequencyDe}</li>
        <li>Preise steigen effektiv um ${c.taxRate} für nicht registrierte Kunden</li>
        <li>Aufbewahrungspflichten über ${c.recordKeepingYears} Jahre</li>
      </ul>

      <h2>Registrierung durchführen</h2>
      <p>Registrieren Sie sich bei ${c.authority} unter <a href="${c.registrationUrl}" target="_blank" rel="noopener">${c.registrationUrl}</a>.</p>

      <h2>Pflichten nach Registrierung</h2>
      <ul>
        <li>${c.taxType} mit ${c.taxRate} auf alle steuerpflichtigen Leistungen berechnen</li>
        <li><a href="/blog/tax-compliant-invoice-${c.code}">${c.taxType}-konforme Rechnungen</a> ausstellen</li>
        <li>${c.taxType}-Erklärungen ${c.filingFrequencyDe} einreichen</li>
        <li>Unterlagen ${c.recordKeepingYears} Jahre aufbewahren</li>
      </ul>

      <h2>Wie Invoicemonk hilft</h2>
      <p><a href="/freelancers">Invoicemonk für Freelancer</a> berechnet automatisch ${c.taxType}, erstellt konforme Rechnungen und verfolgt Ihren Umsatz.</p>
    `,
  };
}

// ── Template 4: Kunden im Ausland fakturieren ──
function genInvoiceFromAbroad(c: CountryConfig): BlogPost {
  return {
    slug: `invoice-clients-in-${c.code}`,
    title: `${c.demonymDe} Kunden aus dem Ausland fakturieren: Grenzüberschreitender Leitfaden`,
    excerpt: `Vollständiger Leitfaden zur Rechnungsstellung an Kunden in ${c.nameDe} aus dem Ausland. Währung, ${c.taxType}, Zahlungsmethoden und Compliance.`,
    category: 'Tax and Compliance',
    tags: ['grenzüberschreitende rechnungsstellung', c.name.toLowerCase(), 'internationale rechnung', c.currencyCode.toLowerCase()],
    author: defaultAuthor, date: '2026-02-16', dateModified: '2026-02-21', readTime: '9 Min. Lesezeit',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/invoice-abroad-${c.code}.jpg` : '/images/blog/multi-currency-invoicing.jpg',
    featuredImageAlt: `Kunden in ${c.nameDe} aus dem Ausland fakturieren`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: [`${c.demonymDe} Kunden fakturieren`, `grenzüberschreitende Rechnungsstellung ${c.nameDe}`],
    priority: 'P2',
    faq: [
      { question: `Muss ich ${c.taxType} berechnen, wenn ich Kunden in ${c.nameDe} fakturiere?`, answer: `Wenn Sie nicht für ${c.taxType} in ${c.nameDe} registriert sind und keine Betriebsstätte dort haben, berechnen Sie in der Regel keine ${c.taxType}. Ihr Kunde muss ggf. das Reverse-Charge-Verfahren anwenden.` },
      { question: `In welcher Währung sollte ich ${c.demonymDe} Kunden fakturieren?`, answer: `Sie können in ${c.currencyCode} (${c.currency}) oder Ihrer Heimatwährung fakturieren. Invoicemonks Multi-Währungsfunktion verfolgt Wechselkurse automatisch.` },
    ],
    content: `
      <p>Die Rechnungsstellung an Kunden in ${c.nameDe} aus dem Ausland erfordert Kenntnisse lokaler Steuerregeln, Währungsaspekte und Zahlungspräferenzen.</p>

      <h2>Währungsaspekte</h2>
      <ul>
        <li><strong>In ${c.currencyCode} (${c.currency}) fakturieren:</strong> Bequemer für den Kunden, aber Wechselkursrisiko</li>
        <li><strong>In Ihrer Heimatwährung fakturieren:</strong> Einfacher für Ihre Buchhaltung</li>
      </ul>

      <h2>${c.taxType}-Pflichten für ausländische Lieferanten</h2>
      <ul>
        <li>Ohne Betriebsstätte in ${c.nameDe} berechnen Sie i. d. R. keine ${c.taxType}</li>
        <li>Der Kunde muss ggf. das Reverse-Charge-Verfahren anwenden</li>
        <li>Hinweis zur ${c.taxType}-Behandlung auf der Rechnung anbringen</li>
      </ul>

      <h2>Quellensteuer</h2>
      <p>Zahlungen aus ${c.nameDe} können der Quellensteuer unterliegen. Prüfen Sie Doppelbesteuerungsabkommen.</p>

      <h2>Zahlungseingang aus ${c.nameDe}</h2>
      <ul>
        <li><strong>Internationale Banküberweisung</strong></li>
        <li><strong>Wise:</strong> Wettbewerbsfähige Wechselkurse</li>
        <li><strong>PayPal/Payoneer:</strong> Weit verbreitet</li>
      </ul>

      <h2>Pflichtangaben für grenzüberschreitende Rechnungen</h2>
      <ol>
        <li>Vollständige Firmendaten und Steuer-ID</li>
        <li>Kundendaten mit ${c.taxId}</li>
        <li>Klare Währungsangabe (${c.currencyCode})</li>
        <li>Hinweis zur ${c.taxType}-Behandlung</li>
        <li>Internationale Bankdaten (IBAN/SWIFT)</li>
        <li>Zahlungsbedingungen und Fälligkeitsdatum</li>
      </ol>

      <h2>Wie Invoicemonk hilft</h2>
      <p><a href="/invoicing">Invoicemonk</a> unterstützt Multi-Währungsfakturierung und automatische Wechselkursverfolgung.</p>
    `,
  };
}

// ── Template 5: Steuerfehler Freelancer ──
function genTaxMistakes(c: CountryConfig): BlogPost {
  return {
    slug: `freelancer-tax-mistakes-${c.code}`,
    title: `Steuerfehler, die Freelancer in ${c.nameDe} machen (und wie man sie vermeidet)`,
    excerpt: `Die häufigsten Steuerfehler ${c.demonymDe}r Freelancer — von verpassten ${c.taxType}-Fristen bis zu nicht beanspruchten Abzügen.`,
    category: 'Tax and Compliance',
    tags: ['freelancer', 'steuerfehler', c.name.toLowerCase(), c.authority.toLowerCase()],
    author: defaultAuthor, date: '2026-02-15', dateModified: '2026-02-21', readTime: '8 Min. Lesezeit',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/tax-mistakes-${c.code}.jpg` : '/images/blog/tax-deductions.jpg',
    featuredImageAlt: `Häufige Steuerfehler von Freelancern in ${c.nameDe}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`Freelancer Steuerfehler ${c.nameDe}`, `${c.authority} Freelancer Fehler`],
    priority: 'P3',
    faq: [
      { question: `Was ist der größte Steuerfehler von Freelancern in ${c.nameDe}?`, answer: `Kein Geld für ${c.taxType} und Einkommensteuer zurücklegen. Legen Sie mindestens 25–30 % Ihres Einkommens für Steuern beiseite.` },
      { question: `Kann ich Home-Office-Kosten in ${c.nameDe} absetzen?`, answer: `Ja, wenn Sie einen dedizierten Raum ausschließlich geschäftlich nutzen. ${c.authority} erlaubt anteilige Abzüge.` },
    ],
    content: `
      <p>Freelancing in ${c.nameDe} gibt Ihnen Freiheit, aber auch volle Verantwortung für Ihre Steuern. Die <strong>${c.authorityFull} (${c.authority})</strong> erwartet, dass Freelancer ihre eigene ${c.taxType} und Einkommensteuer verwalten.</p>

      <h2>1. Nicht rechtzeitig für ${c.taxType} registrieren</h2>
      <p>Ab ${c.vatThreshold} müssen Sie sich registrieren. Verzögerung bedeutet Nachzahlung plus Strafen.</p>

      <h2>2. Kein Geld für Steuern zurücklegen</h2>
      <p>Überweisen Sie 25–30 % jeder Zahlung sofort auf ein separates Steuerkonto.</p>

      <h2>3. Berechtigte Abzüge verpassen</h2>
      <ul>
        <li>Home-Office-Kosten</li>
        <li>Weiterbildung</li>
        <li>Software-Abonnements</li>
        <li>Geschäftsreisen</li>
        <li>Buchhaltungs- und Rechtskosten</li>
      </ul>

      <h2>4. Privat- und Geschäftsfinanzen vermischen</h2>
      <p>Eröffnen Sie ein separates Geschäftskonto.</p>

      <h2>5. Mangelhafte Aufbewahrung</h2>
      <p>${c.authority} verlangt ${c.recordKeepingYears} Jahre Aufbewahrung. Nutzen Sie <a href="/invoicing">Rechnungssoftware</a> für sichere digitale Speicherung.</p>

      <h2>6. Erklärungen zu spät einreichen</h2>
      <p>${c.taxType}-Erklärungen sind ${c.filingFrequencyDe} fällig. ${c.penaltiesDe}</p>

      <h2>7. Nicht konforme Rechnungen ausstellen</h2>
      <p>Nutzen Sie <a href="/blog/tax-compliant-invoice-${c.code}">konforme Rechnungsvorlagen</a> mit allen ${c.authority}-Pflichtfeldern.</p>

      <h2>Bleiben Sie konform mit Invoicemonk</h2>
      <p><a href="/freelancers">Invoicemonk</a> hilft bei automatischer ${c.taxType}-Berechnung, Ausgabenverfolgung und konformer Rechnungsstellung.</p>
    `,
  };
}

// ── Shared posts ──
const sharedPosts: BlogPost[] = [
  {
    slug: 'revenue-vs-profit-explained',
    title: 'Umsatz vs. Gewinn: Was Kleinunternehmen falsch machen',
    excerpt: 'Verstehen Sie den entscheidenden Unterschied zwischen Umsatz und Gewinn und warum eine Verwechslung Ihr Unternehmen gefährden kann.',
    category: 'Small Business',
    tags: ['Umsatz', 'Gewinn', 'Unternehmensfinanzen', 'Bruttogewinn', 'Nettogewinn'],
    author: defaultAuthor, date: '2026-02-14', dateModified: '2026-02-21', readTime: '7 Min. Lesezeit',
    featuredImage: '/images/blog/revenue-vs-profit.jpg',
    featuredImageAlt: 'Umsatz vs. Gewinn für Kleinunternehmen erklärt',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/accounting',
    semanticKeywords: ['Umsatz vs Gewinn', 'Unternehmensfinanzen', 'Gewinnmarge'],
    priority: 'P2',
    faq: [
      { question: 'Was ist der Unterschied zwischen Umsatz und Gewinn?', answer: 'Umsatz ist das gesamte eingenommene Geld vor Abzug jeglicher Kosten. Gewinn ist das, was nach Abzug aller Ausgaben übrig bleibt.' },
      { question: 'Warum ist Umsatz allein irreführend?', answer: 'Hoher Umsatz bei negativen Margen bedeutet, dass Sie härter arbeiten, um Geld zu verlieren. Ohne Gewinnverfolgung können Sie nicht erkennen, welche Produkte oder Kunden tatsächlich profitabel sind.' },
    ],
    content: `
      <p>Die häufigste finanzielle Fehleinschätzung von Kleinunternehmern: Umsatz mit Gewinn verwechseln. „Wir haben diesen Monat €50.000 gemacht" klingt beeindruckend — aber wie viel davon bleibt tatsächlich übrig?</p>

      <h2>Umsatz: Die Gesamteinnahmen</h2>
      <p>Umsatz ist alles Geld, das in Ihr Unternehmen fließt, bevor Kosten abgezogen werden.</p>

      <h2>Gewinn: Was wirklich zählt</h2>
      <ul>
        <li><strong>Bruttogewinn</strong> = Umsatz − Herstellungskosten</li>
        <li><strong>Betriebsgewinn</strong> = Bruttogewinn − Betriebskosten</li>
        <li><strong>Nettogewinn</strong> = Betriebsgewinn − Steuern − Zinsen</li>
      </ul>

      <h2>Warum die Verwechslung gefährlich ist</h2>
      <ul>
        <li><strong>Unterbewertung:</strong> Hohes Volumen mit negativen Margen</li>
        <li><strong>Übermäßige Ausgaben:</strong> Umsatzwachstum verdeckt steigende Kosten</li>
        <li><strong>Steuerüberraschungen:</strong> Steuern basieren auf Gewinn</li>
      </ul>

      <h2>Beides verfolgen</h2>
      <ol>
        <li>Nutzen Sie <a href="/accounting">Buchhaltungssoftware</a></li>
        <li>Monatliche Überprüfung</li>
        <li>Margen pro Produkt/Dienstleistung kennen</li>
        <li><a href="/expenses">Ausgaben verfolgen</a></li>
      </ol>
    `,
  },
  {
    slug: 'track-business-expenses-guide',
    title: 'Geschäftsausgaben richtig erfassen: Ein vollständiger Leitfaden',
    excerpt: 'Bewährte Methoden zur Ausgabenverfolgung — von der Belegverwaltung bis zur steuerkonformen Kategorisierung.',
    category: 'Expense Management',
    tags: ['Ausgabenverfolgung', 'Geschäftsausgaben', 'Belegverwaltung', 'Steuerabzüge'],
    author: defaultAuthor, date: '2026-02-13', dateModified: '2026-02-21', readTime: '9 Min. Lesezeit',
    featuredImage: '/images/blog/track-business-expenses.jpg',
    featuredImageAlt: 'Geschäftsausgaben richtig erfassen',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['Geschäftsausgaben erfassen', 'Ausgabenkategorien', 'Belegverwaltung'],
    priority: 'P2',
    faq: [
      { question: 'Was ist der beste Weg, Geschäftsausgaben zu erfassen?', answer: 'Nutzen Sie Ausgabenverfolgungssoftware mit Belegfoto-Funktion, automatischer Kategorisierung und Bankabgleich.' },
      { question: 'Welche Ausgabenkategorien sollte ich verwenden?', answer: 'Gängige Kategorien: Bürobedarf, Reisen, Bewirtung, professionelle Dienste, Software, Marketing, Versicherung, Betriebskosten und Weiterbildung.' },
    ],
    content: `
      <p>Ordentliche Ausgabenverfolgung ist das Fundament gesunder Unternehmensfinanzen.</p>

      <h2>Warum Ausgabenverfolgung wichtig ist</h2>
      <ul>
        <li><strong>Steuerabzüge:</strong> Jede nicht erfasste Ausgabe ist ein verpasster Abzug</li>
        <li><strong>Gewinngenauigkeit:</strong> Wahre Gewinne nur mit vollständiger Kostenverfolgung</li>
        <li><strong>Prüfungsbereitschaft:</strong> Steuerbehörden verlangen Belege</li>
        <li><strong>Cashflow-Transparenz</strong></li>
      </ul>

      <h2>Schritt 1: Geschäftlich und Privat trennen</h2>
      <p>Eröffnen Sie ein separates Geschäftskonto.</p>

      <h2>Schritt 2: Erfassungsmethode wählen</h2>
      <ol>
        <li><strong>Tabellenkalkulation:</strong> Kostenlos, aber manuell</li>
        <li><strong>Belegscanner-App:</strong> Belege fotografieren</li>
        <li><strong>Ausgabenverfolgungssoftware:</strong> <a href="/expenses">Spezialtools</a> mit Bankabgleich</li>
        <li><strong>Vollständige Buchhaltungssuite</strong></li>
      </ol>

      <h2>Schritt 3: Kategorien einrichten</h2>
      <p>Orientieren Sie sich an den Abzugskategorien Ihrer Steuerbehörde.</p>

      <h2>Schritt 4: Belege sofort erfassen</h2>
      <p>Erfassen Sie Belege im Moment des Kaufs.</p>

      <h2>Schritt 5: Regelmäßig abgleichen</h2>
      <p>Mindestens wöchentlich Ausgaben überprüfen und abgleichen.</p>

      <h2>Starten Sie mit Invoicemonk</h2>
      <p><a href="/expenses">Invoicemonks Ausgabenverfolgung</a> kombiniert Belegscanner, Auto-Kategorisierung und steuerkonforme Berichte.</p>
    `,
  },
  {
    slug: 'multi-currency-invoicing-explained',
    title: 'Multi-Währungs-Rechnungsstellung erklärt: Leitfaden für internationale Unternehmen',
    excerpt: 'Alles über Rechnungsstellung in mehreren Währungen — Wechselkurse, steuerliche Auswirkungen, Zahlungseinzug und Buchhaltung.',
    category: 'Invoicing and Billing Tips',
    tags: ['Multi-Währung', 'internationale Rechnungsstellung', 'Wechselkurse', 'grenzüberschreitende Zahlungen'],
    author: defaultAuthor, date: '2026-02-12', dateModified: '2026-02-21', readTime: '10 Min. Lesezeit',
    featuredImage: '/images/blog/multi-currency-invoicing.jpg',
    featuredImageAlt: 'Leitfaden zur Multi-Währungs-Rechnungsstellung',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: ['Multi-Währungs-Rechnungsstellung', 'internationale Fakturierung', 'Wechselkurs Rechnung'],
    priority: 'P2',
    faq: [
      { question: 'Soll ich internationale Kunden in ihrer oder meiner Währung fakturieren?', answer: 'Fakturierung in der Kundenwährung reduziert Reibung und beschleunigt Zahlungen. Sie tragen jedoch das Wechselkursrisiko. Invoicemonk sperrt den Kurs bei Rechnungserstellung.' },
      { question: 'Gibt es steuerliche Auswirkungen bei Multi-Währungs-Rechnungsstellung?', answer: 'Ja. Einkünfte müssen in Ihrer Heimatwährung gemeldet werden. Kursgewinne sind steuerpflichtig, Kursverluste ggf. abzugsfähig.' },
    ],
    content: `
      <p>Wenn Sie mit Kunden in verschiedenen Ländern arbeiten, ist Multi-Währungs-Rechnungsstellung unerlässlich.</p>

      <h2>Warum Multi-Währungs-Rechnungsstellung wichtig ist</h2>
      <ul>
        <li><strong>Schnellere Zahlung:</strong> Kunden zahlen schneller in ihrer Währung</li>
        <li><strong>Professionelles Image</strong></li>
        <li><strong>Wettbewerbsvorteil</strong></li>
      </ul>

      <h2>Die richtige Währung wählen</h2>
      <ul>
        <li>Kundenpräferenz</li>
        <li>Vertragsbedingungen</li>
        <li>Wechselkursstabilität</li>
      </ul>

      <h2>Wechselkurse verwalten</h2>
      <ol>
        <li>Kurs bei Rechnungserstellung fixieren</li>
        <li>Kurs auf der Rechnung vermerken</li>
        <li>Gewinne/Verluste bei Zahlungseingang erfassen</li>
      </ol>

      <h2>Steuerliche Auswirkungen</h2>
      <ul>
        <li>Alle Einkünfte in Heimatwährung melden</li>
        <li>Kursgewinne sind steuerpflichtig</li>
        <li>Kursverluste ggf. abzugsfähig</li>
      </ul>

      <h2>Internationale Zahlungen einziehen</h2>
      <ul>
        <li><strong>Wise:</strong> Beste Wechselkurse, niedrigste Gebühren</li>
        <li><strong>PayPal:</strong> Weit akzeptiert, höhere Gebühren</li>
        <li><strong>Stripe:</strong> 135+ Währungen</li>
      </ul>
      <p>Vergleichen Sie mit unserem <a href="/international-payment-fee-calculator">Gebührenrechner</a>.</p>

      <h2>Wie Invoicemonk hilft</h2>
      <p><a href="/use-cases/multi-currency-invoicing">Invoicemonks Multi-Währungs-Rechnungsstellung</a> automatisiert den gesamten Prozess.</p>
    `,
  },
];

// ── Generate & register ──
function generateAll(): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const c of countries) {
    posts.push(genTaxCompliantInvoice(c));
    posts.push(genVatFormat(c));
    posts.push(genFreelancerVat(c));
    posts.push(genInvoiceFromAbroad(c));
    posts.push(genTaxMistakes(c));
  }
  return [...posts, ...sharedPosts];
}

registerBlogPosts('de', generateAll());
