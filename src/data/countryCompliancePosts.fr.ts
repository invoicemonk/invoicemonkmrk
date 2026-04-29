/**
 * French translations for country-specific compliance posts.
 */
import { registerBlogPosts } from '@/utils/i18nData';
import { defaultAuthor } from './authors';
import type { BlogPost } from './blogPosts';

const countriesWithImages = ['ng', 'us', 'uk', 'ca', 'au', 'gh', 'ke', 'za'];

interface CC {
  code: string; name: string; nameFr: string; demonym: string; demonymFr: string;
  authority: string; authorityFull: string; taxType: string; taxRate: string;
  currency: string; currencyCode: string; taxId: string; taxIdFull: string;
  vatThreshold: string; filingFrequencyFr: string;
  recordKeepingYears: string; paymentMethodsFr: string; penaltiesFr: string;
  einvoicingContextFr: string; registrationUrl: string;
}

const countries: CC[] = [
  { code: 'ng', name: 'Nigeria', nameFr: 'Nigeria', demonym: 'Nigerian', demonymFr: 'nigérian',
    authority: 'FIRS', authorityFull: 'Federal Inland Revenue Service', taxType: 'TVA', taxRate: '7,5 %',
    currency: '₦', currencyCode: 'NGN', taxId: 'TIN', taxIdFull: 'Tax Identification Number',
    vatThreshold: '₦25 M de CA annuel', filingFrequencyFr: 'mensuellement, avant le 21 du mois suivant',
    recordKeepingYears: '6', paymentMethodsFr: 'Paystack, virement bancaire, USSD et cartes de débit',
    penaltiesFr: 'Non-inscription : ₦10 000 le premier mois + ₦5 000/mois ensuite. Retard de déclaration : ₦5 000/mois.',
    einvoicingContextFr: 'Le Nigeria évolue vers l\'administration fiscale numérique via la plateforme FIRS TaxPro-Max.',
    registrationUrl: 'https://firs.gov.ng' },
  { code: 'us', name: 'United States', nameFr: 'États-Unis', demonym: 'American', demonymFr: 'américain',
    authority: 'IRS', authorityFull: 'Internal Revenue Service', taxType: 'Sales Tax', taxRate: 'variable selon l\'État (0 %–10,25 %)',
    currency: '$', currencyCode: 'USD', taxId: 'EIN', taxIdFull: 'Employer Identification Number',
    vatThreshold: 'variable selon l\'État — seuil Economic Nexus ~$100 000', filingFrequencyFr: 'trimestriellement ou annuellement selon l\'État',
    recordKeepingYears: '7', paymentMethodsFr: 'virement ACH, cartes, chèques, PayPal et Stripe',
    penaltiesFr: 'Non-déclaration : 5 % de l\'impôt impayé/mois (max. 25 %). Non-paiement : 0,5 %/mois.',
    einvoicingContextFr: 'Les États-Unis n\'ont pas d\'obligation fédérale de facturation électronique B2B.',
    registrationUrl: 'https://www.irs.gov' },
  { code: 'uk', name: 'United Kingdom', nameFr: 'Royaume-Uni', demonym: 'British', demonymFr: 'britannique',
    authority: 'HMRC', authorityFull: 'HM Revenue & Customs', taxType: 'TVA', taxRate: '20 % (standard), 5 % (réduit), 0 %',
    currency: '£', currencyCode: 'GBP', taxId: 'UTR', taxIdFull: 'Unique Taxpayer Reference',
    vatThreshold: '£90 000 de CA taxable annuel', filingFrequencyFr: 'trimestriellement via Making Tax Digital (MTD)',
    recordKeepingYears: '6', paymentMethodsFr: 'virement (BACS/Faster Payments), cartes, PayPal et GoCardless',
    penaltiesFr: 'Inscription tardive : jusqu\'à 100 % de la TVA due. Déclaration tardive : £200 de surcharge par défaut.',
    einvoicingContextFr: 'Le Royaume-Uni prend en charge la facturation électronique Peppol et a mis en œuvre Making Tax Digital (MTD).',
    registrationUrl: 'https://www.gov.uk/government/organisations/hm-revenue-customs' },
  { code: 'ca', name: 'Canada', nameFr: 'Canada', demonym: 'Canadian', demonymFr: 'canadien',
    authority: 'ARC', authorityFull: 'Agence du revenu du Canada', taxType: 'TPS/TVH', taxRate: '5 % TPS (fédéral) + 0–10 % provincial',
    currency: 'C$', currencyCode: 'CAD', taxId: 'NE', taxIdFull: 'Numéro d\'entreprise',
    vatThreshold: '30 000 C$ sur quatre trimestres consécutifs', filingFrequencyFr: 'trimestriellement ou annuellement selon le revenu',
    recordKeepingYears: '6', paymentMethodsFr: 'virement Interac, cartes, TEF et PayPal',
    penaltiesFr: 'Retard : 1 % du solde + 0,25 %/mois (max. 12 mois). Retard répété : 10 % + 2 %/mois.',
    einvoicingContextFr: 'Le Canada explore l\'adoption de Peppol via l\'initiative Digital Commerce Standards.',
    registrationUrl: 'https://www.canada.ca/fr/agence-revenu.html' },
  { code: 'au', name: 'Australia', nameFr: 'Australie', demonym: 'Australian', demonymFr: 'australien',
    authority: 'ATO', authorityFull: 'Australian Taxation Office', taxType: 'GST', taxRate: '10 %',
    currency: 'A$', currencyCode: 'AUD', taxId: 'ABN', taxIdFull: 'Australian Business Number',
    vatThreshold: '75 000 A$ de CA annuel', filingFrequencyFr: 'trimestriellement via Business Activity Statements (BAS)',
    recordKeepingYears: '5', paymentMethodsFr: 'BPAY, virement, cartes, PayPal et Stripe',
    penaltiesFr: 'BAS en retard : 313 $ par période de 28 jours (max. 5 périodes).',
    einvoicingContextFr: 'L\'Australie est pionnière de la facturation électronique Peppol.',
    registrationUrl: 'https://www.ato.gov.au' },
  { code: 'gh', name: 'Ghana', nameFr: 'Ghana', demonym: 'Ghanaian', demonymFr: 'ghanéen',
    authority: 'GRA', authorityFull: 'Ghana Revenue Authority', taxType: 'TVA', taxRate: '15 % + prélèvements additionnels',
    currency: 'GH₵', currencyCode: 'GHS', taxId: 'TIN', taxIdFull: 'Taxpayer Identification Number',
    vatThreshold: '200 000 GH₵ de CA taxable annuel', filingFrequencyFr: 'mensuellement, avant le dernier jour ouvré du mois suivant',
    recordKeepingYears: '6', paymentMethodsFr: 'Paystack, mobile money (MTN MoMo, Vodafone Cash), virement et cartes',
    penaltiesFr: 'Retard : GH₵500 + 3 % de l\'impôt dû/mois. Paiement tardif : 125 % du taux directeur de la Bank of Ghana.',
    einvoicingContextFr: 'Le Ghana a mis en place des exigences de facturation électronique TVA via la GRA.',
    registrationUrl: 'https://gra.gov.gh' },
  { code: 'ke', name: 'Kenya', nameFr: 'Kenya', demonym: 'Kenyan', demonymFr: 'kényan',
    authority: 'KRA', authorityFull: 'Kenya Revenue Authority', taxType: 'TVA', taxRate: '16 % (standard), 8 %, 0 %',
    currency: 'KSh', currencyCode: 'KES', taxId: 'KRA PIN', taxIdFull: 'KRA Personal Identification Number',
    vatThreshold: '5 M KSh de CA taxable annuel', filingFrequencyFr: 'mensuellement, avant le 20 du mois suivant via iTax',
    recordKeepingYears: '5', paymentMethodsFr: 'M-Pesa, Paystack, virement et cartes',
    penaltiesFr: 'Retard : KSh10 000 ou 5 % de l\'impôt dû (le plus élevé). Paiement tardif : 2 %/mois.',
    einvoicingContextFr: 'Le Kenya a mis en œuvre le Tax Invoice Management System (TIMS) via la KRA.',
    registrationUrl: 'https://www.kra.go.ke' },
  { code: 'za', name: 'South Africa', nameFr: 'Afrique du Sud', demonym: 'South African', demonymFr: 'sud-africain',
    authority: 'SARS', authorityFull: 'South African Revenue Service', taxType: 'TVA', taxRate: '15 %',
    currency: 'R', currencyCode: 'ZAR', taxId: 'Tax Reference Number', taxIdFull: 'SARS Tax Reference Number',
    vatThreshold: 'R1 M de CA taxable annuel', filingFrequencyFr: 'bimestriellement via SARS eFiling',
    recordKeepingYears: '5', paymentMethodsFr: 'EFT, cartes, virement instantané et SnapScan',
    penaltiesFr: 'Retard : R250/jour (R500/jour pour récidive). Paiement tardif : 10 % + intérêts.',
    einvoicingContextFr: 'L\'Afrique du Sud prépare l\'adoption de la facturation électronique.',
    registrationUrl: 'https://www.sars.gov.za' },
  // ── New European Markets ──
  { code: 'ro', name: 'Romania', nameFr: 'Roumanie', demonym: 'Romanian', demonymFr: 'roumain',
    authority: 'ANAF', authorityFull: 'Agenția Națională de Administrare Fiscală', taxType: 'TVA', taxRate: '19 % (standard), 9 %, 5 %',
    currency: 'RON', currencyCode: 'RON', taxId: 'CUI/CIF', taxIdFull: 'Cod Unic de Înregistrare',
    vatThreshold: 'RON 300 000 de CA annuel', filingFrequencyFr: 'mensuellement, avant le 25 du mois suivant',
    recordKeepingYears: '10', paymentMethodsFr: 'virement bancaire, cartes et PayU Romania',
    penaltiesFr: 'Intérêts de retard : 0,06 %/jour. Non-inscription : RON 1 000–5 000.',
    einvoicingContextFr: 'La Roumanie a mis en place la e-Factura obligatoire pour toutes les transactions B2B via ANAF.',
    registrationUrl: 'https://www.anaf.ro' },
  { code: 'hu', name: 'Hungary', nameFr: 'Hongrie', demonym: 'Hungarian', demonymFr: 'hongrois',
    authority: 'NAV', authorityFull: 'Nemzeti Adó- és Vámhivatal', taxType: 'TVA (ÁFA)', taxRate: '27 % (standard), 18 %, 5 %',
    currency: 'HUF', currencyCode: 'HUF', taxId: 'Adószám', taxIdFull: 'Adószám (Numéro fiscal)',
    vatThreshold: 'HUF 12 M de CA annuel', filingFrequencyFr: 'mensuellement (CA >HUF 50 M), trimestriellement ou annuellement',
    recordKeepingYears: '8', paymentMethodsFr: 'virement bancaire, Barion, SimplePay et cartes',
    penaltiesFr: 'Jusqu\'à 50 % du manque à gagner fiscal. HUF 500 000 pour infractions de déclaration.',
    einvoicingContextFr: 'La Hongrie exploite le système obligatoire Online Számla de déclaration en temps réel. Toute facture >HUF 100 000 de TVA doit être signalée à NAV en temps réel.',
    registrationUrl: 'https://nav.gov.hu' },
  { code: 'rs', name: 'Serbia', nameFr: 'Serbie', demonym: 'Serbian', demonymFr: 'serbe',
    authority: 'SEF', authorityFull: 'Sistem Elektronskih Faktura', taxType: 'TVA (PDV)', taxRate: '20 % (standard), 10 %',
    currency: 'RSD', currencyCode: 'RSD', taxId: 'PIB', taxIdFull: 'Poreski Identifikacioni Broj',
    vatThreshold: 'RSD 8 M de CA annuel', filingFrequencyFr: 'mensuellement, avant le 15 du mois suivant',
    recordKeepingYears: '10', paymentMethodsFr: 'virement bancaire, IPS (paiement instantané) et cartes',
    penaltiesFr: 'RSD 100 000–2 000 000 pour non-conformité à la facturation électronique.',
    einvoicingContextFr: 'La Serbie a rendu obligatoire la facturation électronique SEF pour toutes les transactions B2B et B2G.',
    registrationUrl: 'https://www.efaktura.gov.rs' },
  { code: 'pl', name: 'Poland', nameFr: 'Pologne', demonym: 'Polish', demonymFr: 'polonais',
    authority: 'KAS', authorityFull: 'Krajowa Administracja Skarbowa', taxType: 'TVA', taxRate: '23 % (standard), 8 %, 5 %',
    currency: 'PLN', currencyCode: 'PLN', taxId: 'NIP', taxIdFull: 'Numer Identyfikacji Podatkowej',
    vatThreshold: 'PLN 200 000 de CA annuel', filingFrequencyFr: 'mensuellement, avant le 25 (JPK_VAT)',
    recordKeepingYears: '5', paymentMethodsFr: 'BLIK, virement bancaire, cartes, PayU et Przelewy24',
    penaltiesFr: 'Jusqu\'à 30 % de l\'écart de TVA. Responsabilité pénale pour fraude fiscale.',
    einvoicingContextFr: 'La Pologne met en place KSeF — un système obligatoire de facturation électronique structurée au format XML.',
    registrationUrl: 'https://www.podatki.gov.pl' },
  { code: 'it', name: 'Italy', nameFr: 'Italie', demonym: 'Italian', demonymFr: 'italien',
    authority: 'AdE', authorityFull: 'Agenzia delle Entrate', taxType: 'IVA', taxRate: '22 % (standard), 10 %, 5 %, 4 %',
    currency: '€', currencyCode: 'EUR', taxId: 'Partita IVA', taxIdFull: 'Partita IVA (N° TVA)',
    vatThreshold: '65 000 € de CA annuel (regime forfettario)', filingFrequencyFr: 'mensuellement ou trimestriellement ; déclaration annuelle avant le 30 avril',
    recordKeepingYears: '10', paymentMethodsFr: 'virement (bonifico), PagoPA, cartes et Satispay',
    penaltiesFr: '120–240 % de l\'IVA impayée. 250–2 000 € pour factures manquantes.',
    einvoicingContextFr: 'L\'Italie exploite le système obligatoire FatturaPA/SDI — toutes les factures doivent passer par le système d\'échange gouvernemental. Premier pays de l\'UE à imposer la facturation électronique B2B.',
    registrationUrl: 'https://www.agenziaentrate.gov.it' },
  { code: 'bg', name: 'Bulgaria', nameFr: 'Bulgarie', demonym: 'Bulgarian', demonymFr: 'bulgare',
    authority: 'NRA', authorityFull: 'National Revenue Agency', taxType: 'TVA (ДДС)', taxRate: '20 % (standard), 9 %',
    currency: 'BGN', currencyCode: 'BGN', taxId: 'ЕИК/БУЛСТАТ', taxIdFull: 'ЕИК/БУЛСТАТ (EIK/BULSTAT)',
    vatThreshold: 'BGN 100 000 de CA taxable annuel', filingFrequencyFr: 'mensuellement, avant le 14 du mois suivant',
    recordKeepingYears: '5', paymentMethodsFr: 'virement bancaire, ePay.bg et cartes',
    penaltiesFr: 'BGN 500–10 000 pour non-inscription. Intérêts de retard : 0,03 %/jour. Numérotation séquentielle à 10 chiffres obligatoire.',
    einvoicingContextFr: 'La Bulgarie suit la norme EN 16931 et exige des fichiers d\'audit SAF-T. La numérotation des factures doit suivre un format séquentiel strict à 10 chiffres.',
    registrationUrl: 'https://www.nra.bg' },
];

function genTaxCompliant(c: CC): BlogPost {
  return {
    slug: `tax-compliant-invoice-${c.code}`,
    title: `Facture conforme en ${c.nameFr} : exigences ${c.authority}`,
    excerpt: `Guide étape par étape pour créer des factures conformes ${c.authority} en ${c.nameFr}. Mentions obligatoires, règles ${c.taxType} et sanctions.`,
    category: 'Tax and Compliance', tags: [c.authority.toLowerCase(), c.name.toLowerCase(), 'conformité fiscale', c.taxType.toLowerCase()],
    author: defaultAuthor, date: '2026-02-20', dateModified: '2026-02-21', readTime: '10 min de lecture',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/tax-compliant-invoice-${c.code}.jpg` : '/images/blog/invoicing-tax-compliance-hero.jpg', featuredImageAlt: `Guide facturation conforme ${c.nameFr}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`facture conforme ${c.authority}`, `facture fiscale ${c.nameFr}`], priority: 'P2',
    faq: [
      { question: `Quelles sont les mentions obligatoires sur une facture en ${c.nameFr} ?`, answer: `Nom et adresse, ${c.taxId} (${c.taxIdFull}), coordonnées client, numéro de facture unique, date, description, quantités, prix unitaires, montant ${c.taxType} (${c.taxRate}) et total TTC.` },
      { question: `Combien de temps conserver les factures en ${c.nameFr} ?`, answer: `${c.authority} exige une conservation minimale de ${c.recordKeepingYears} ans.` },
    ],
    content: `
      <p>Émettre des factures conformes en ${c.nameFr} est une obligation légale. La <strong>${c.authorityFull} (${c.authority})</strong> fixe des règles strictes sur les mentions obligatoires et le calcul de la ${c.taxType}.</p>
      <h2>Pourquoi la conformité est importante</h2>
      <ul><li>Déductions fiscales refusées pour vos clients</li><li>Sanctions de ${c.authority}</li><li>Contrôles fiscaux</li></ul>
      <h2>Mentions obligatoires</h2>
      <ol><li>Nom et adresse de l'entreprise</li><li>${c.taxIdFull} (${c.taxId})</li><li>Coordonnées client (et ${c.taxId} en B2B)</li><li>Numéro de facture unique et séquentiel</li><li>Date de facturation</li><li>Description des biens/services</li><li>Quantité et prix unitaire</li><li>Sous-total HT</li><li>Montant ${c.taxType} à ${c.taxRate}</li><li>Total TTC</li></ol>
      <h2>Inscription à la ${c.taxType}</h2>
      <p>Obligatoire à partir de <strong>${c.vatThreshold}</strong>. Obligations : facturer la ${c.taxType}, déclarer ${c.filingFrequencyFr}, reverser à ${c.authority}, conserver ${c.recordKeepingYears} ans.</p>
      <h2>Conservation des documents</h2>
      <p>Minimum <strong>${c.recordKeepingYears} ans</strong>. Les documents numériques sont acceptés.</p>
      <h2>Facturation électronique</h2>
      <p>${c.einvoicingContextFr}</p>
      <h2>Sanctions</h2>
      <p>${c.penaltiesFr}</p>
      <h2>Moyens de paiement</h2>
      <p>Moyens populaires en ${c.nameFr} : ${c.paymentMethodsFr}.</p>
      <h2>Comment Invoicemonk aide</h2>
      <p><a href="/invoicing">Invoicemonk</a> inclut automatiquement toutes les mentions ${c.authority}, calcule la ${c.taxType} et archive vos documents.</p>
    `,
  };
}

function genVatFormat(c: CC): BlogPost {
  return {
    slug: `vat-invoice-format-${c.code}`,
    title: `Format de facture ${c.taxType} en ${c.nameFr} : guide complet`,
    excerpt: `Le format correct de facture ${c.taxType} exigé par ${c.authority} en ${c.nameFr}. Champs obligatoires, exemples et modèles gratuits.`,
    category: 'Tax and Compliance', tags: [`facture ${c.taxType.toLowerCase()}`, c.name.toLowerCase(), c.authority.toLowerCase()],
    author: defaultAuthor, date: '2026-02-19', dateModified: '2026-02-21', readTime: '9 min de lecture',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/vat-invoice-format-${c.code}.jpg` : '/images/blog/invoice-essential-elements.jpg', featuredImageAlt: `Format facture ${c.taxType} ${c.nameFr}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`format facture ${c.taxType} ${c.nameFr}`], priority: 'P2',
    faq: [
      { question: `Quel est le taux de ${c.taxType} en ${c.nameFr} ?`, answer: `Le taux actuel est de ${c.taxRate}. Vérifiez sur ${c.registrationUrl}.` },
    ],
    content: `
      <p>Respecter le format de facture ${c.taxType} en ${c.nameFr} est essentiel pour la conformité avec ${c.authority}.</p>
      <h2>Qu'est-ce qu'une facture ${c.taxType} ?</h2>
      <p>Document formel montrant la ${c.taxType} facturée, servant de preuve pour vendeur et acheteur.</p>
      <h2>Champs obligatoires</h2>
      <ul><li>Mention « Facture fiscale »</li><li>Nom, adresse et ${c.taxId} du vendeur</li><li>Nom, adresse et ${c.taxId} de l'acheteur (B2B)</li><li>Numéro et date de facture</li><li>Descriptions détaillées avec quantités et prix</li><li>Sous-total, ${c.taxType} (${c.taxRate}) et total TTC</li></ul>
      <h2>Erreurs courantes</h2>
      <ul><li>${c.taxId} manquant</li><li>Pas de mention « Facture fiscale »</li><li>Taux ${c.taxType} obsolètes</li><li>${c.taxType} intégrée sans ventilation</li></ul>
      <h2>Modèles gratuits</h2>
      <p><a href="/invoicing">Générateur de factures gratuit</a> avec tous les champs ${c.authority}.</p>
    `,
  };
}

function genFreelancerVat(c: CC): BlogPost {
  return {
    slug: `freelancer-vat-registration-${c.code}`,
    title: `Inscription ${c.taxType} pour freelances en ${c.nameFr} : quand et comment`,
    excerpt: `Devez-vous vous inscrire à la ${c.taxType} en ${c.nameFr} ? Seuils, avantages/inconvénients et guide étape par étape.`,
    category: 'Tax and Compliance', tags: ['freelance', `inscription ${c.taxType.toLowerCase()}`, c.name.toLowerCase()],
    author: defaultAuthor, date: '2026-02-17', dateModified: '2026-02-21', readTime: '8 min de lecture',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/freelancer-vat-${c.code}.jpg` : '/images/blog/quarterly-tax-payments.jpg', featuredImageAlt: `Inscription ${c.taxType} freelance ${c.nameFr}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`freelance ${c.taxType} ${c.nameFr}`], priority: 'P2',
    content: `
      <p>En tant que freelance en ${c.nameFr}, comprendre vos obligations ${c.taxType} est crucial.</p>
      <h2>Quand s'inscrire ?</h2>
      <p>Obligatoire à partir de <strong>${c.vatThreshold}</strong>.</p>
      <h2>Avantages de l'inscription volontaire</h2>
      <ul><li>Récupérer la ${c.taxType} sur les achats professionnels</li><li>Crédibilité professionnelle</li><li>Avantage B2B</li></ul>
      <h2>Inconvénients</h2>
      <ul><li>Charge administrative des déclarations ${c.filingFrequencyFr}</li><li>Prix augmentés de ${c.taxRate} pour clients non inscrits</li></ul>
      <h2>Comment s'inscrire</h2>
      <p>Via <a href="${c.registrationUrl}" target="_blank" rel="noopener">${c.authority}</a>.</p>
      <h2>Obligations après inscription</h2>
      <ul><li>Facturer la ${c.taxType} à ${c.taxRate}</li><li>Émettre des <a href="/blog/tax-compliant-invoice-${c.code}">factures conformes</a></li><li>Déclarer ${c.filingFrequencyFr}</li><li>Conserver les documents ${c.recordKeepingYears} ans</li></ul>
      <h2>Comment Invoicemonk aide</h2>
      <p><a href="/freelancers">Invoicemonk pour freelances</a> calcule automatiquement la ${c.taxType} et génère des factures conformes.</p>
    `,
  };
}

function genInvoiceAbroad(c: CC): BlogPost {
  return {
    slug: `invoice-clients-in-${c.code}`,
    title: `Facturer des clients ${c.demonymFr}s depuis l'étranger : guide transfrontalier`,
    excerpt: `Guide complet pour facturer des clients en ${c.nameFr} depuis l'étranger. Devises, ${c.taxType}, paiements et conformité.`,
    category: 'Tax and Compliance', tags: ['facturation transfrontalière', c.name.toLowerCase(), 'facture internationale'],
    author: defaultAuthor, date: '2026-02-16', dateModified: '2026-02-21', readTime: '9 min de lecture',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/invoice-abroad-${c.code}.jpg` : '/images/blog/multi-currency-invoicing.jpg', featuredImageAlt: `Facturer clients ${c.demonymFr}s depuis l'étranger`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: [`facturer clients ${c.demonymFr}s`, `facturation transfrontalière ${c.nameFr}`], priority: 'P2',
    content: `
      <p>Facturer des clients en ${c.nameFr} depuis l'étranger nécessite de comprendre les règles fiscales locales et les préférences de paiement.</p>
      <h2>Considérations de devise</h2>
      <ul><li>Facturer en ${c.currencyCode} (${c.currency}) : plus pratique pour le client</li><li>Facturer dans votre devise : plus simple pour votre comptabilité</li></ul>
      <h2>Obligations ${c.taxType}</h2>
      <ul><li>Sans établissement en ${c.nameFr}, vous ne facturez généralement pas la ${c.taxType}</li><li>Votre client peut devoir appliquer l'autoliquidation</li></ul>
      <h2>Retenue à la source</h2>
      <p>Vérifiez les conventions de double imposition.</p>
      <h2>Recevoir des paiements</h2>
      <ul><li>Virement international</li><li>Wise : taux compétitifs</li><li>PayPal/Payoneer</li></ul>
      <h2>Mentions obligatoires</h2>
      <ol><li>Vos coordonnées complètes</li><li>Coordonnées client avec ${c.taxId}</li><li>Devise clairement indiquée (${c.currencyCode})</li><li>Note sur le traitement ${c.taxType}</li><li>Coordonnées bancaires internationales</li></ol>
      <h2>Comment Invoicemonk aide</h2>
      <p><a href="/invoicing">Invoicemonk</a> gère la facturation multi-devises et le suivi automatique des taux de change.</p>
    `,
  };
}

function genTaxMistakes(c: CC): BlogPost {
  return {
    slug: `freelancer-tax-mistakes-${c.code}`,
    title: `Erreurs fiscales des freelances en ${c.nameFr} (et comment les éviter)`,
    excerpt: `Les erreurs fiscales les plus courantes des freelances ${c.demonymFr}s — des échéances ${c.taxType} manquées aux déductions non réclamées.`,
    category: 'Tax and Compliance', tags: ['freelance', 'erreurs fiscales', c.name.toLowerCase()],
    author: defaultAuthor, date: '2026-02-15', dateModified: '2026-02-21', readTime: '8 min de lecture',
    featuredImage: countriesWithImages.includes(c.code) ? `/images/blog/tax-mistakes-${c.code}.jpg` : '/images/blog/tax-deductions.jpg', featuredImageAlt: `Erreurs fiscales freelances ${c.nameFr}`,
    pillarContent: false, clusterType: 'cluster', targetProduct: '/compliance',
    semanticKeywords: [`erreurs fiscales freelance ${c.nameFr}`], priority: 'P3',
    content: `
      <p>Le freelancing en ${c.nameFr} vous donne la liberté mais aussi la pleine responsabilité de vos impôts.</p>
      <h2>1. Ne pas s'inscrire à la ${c.taxType} à temps</h2>
      <p>Obligatoire à partir de ${c.vatThreshold}.</p>
      <h2>2. Ne pas mettre d'argent de côté pour les impôts</h2>
      <p>Réservez 25–30 % de chaque paiement.</p>
      <h2>3. Manquer des déductions légitimes</h2>
      <ul><li>Bureau à domicile</li><li>Formation professionnelle</li><li>Logiciels</li><li>Déplacements professionnels</li></ul>
      <h2>4. Mélanger finances personnelles et professionnelles</h2>
      <p>Ouvrez un compte bancaire professionnel dédié.</p>
      <h2>5. Mauvaise tenue des registres</h2>
      <p>${c.authority} exige ${c.recordKeepingYears} ans de conservation.</p>
      <h2>6. Déclarations en retard</h2>
      <p>Déclarations ${c.taxType} dues ${c.filingFrequencyFr}. ${c.penaltiesFr}</p>
      <h2>7. Factures non conformes</h2>
      <p>Utilisez des <a href="/blog/tax-compliant-invoice-${c.code}">modèles conformes</a>.</p>
      <h2>Restez conforme avec Invoicemonk</h2>
      <p><a href="/freelancers">Invoicemonk</a> automatise le calcul ${c.taxType}, le suivi des dépenses et la facturation conforme.</p>
    `,
  };
}

const sharedPosts: BlogPost[] = [
  {
    slug: 'revenue-vs-profit-explained',
    title: 'Chiffre d\'affaires vs bénéfice : ce que les petites entreprises confondent',
    excerpt: 'Comprenez la différence cruciale entre chiffre d\'affaires et bénéfice, et pourquoi les confondre peut couler votre entreprise.',
    category: 'Small Business', tags: ['chiffre d\'affaires', 'bénéfice', 'finances PME'],
    author: defaultAuthor, date: '2026-02-14', dateModified: '2026-02-21', readTime: '7 min de lecture',
    featuredImage: '/images/blog/revenue-vs-profit.jpg', featuredImageAlt: 'CA vs bénéfice pour petites entreprises',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/accounting',
    semanticKeywords: ['CA vs bénéfice', 'marge bénéficiaire'], priority: 'P2',
    content: `
      <p>L'erreur financière la plus courante : confondre chiffre d'affaires et bénéfice.</p>
      <h2>Chiffre d'affaires</h2><p>Tout l'argent entrant avant déduction des coûts.</p>
      <h2>Bénéfice</h2>
      <ul><li><strong>Marge brute</strong> = CA − Coût des ventes</li><li><strong>Résultat d'exploitation</strong> = Marge brute − Charges</li><li><strong>Bénéfice net</strong> = Résultat − Impôts − Intérêts</li></ul>
      <h2>Pourquoi c'est dangereux</h2>
      <ul><li>Sous-tarification avec marges négatives</li><li>Surprises fiscales</li></ul>
      <h2>Comment suivre les deux</h2>
      <ol><li><a href="/accounting">Logiciel comptable</a></li><li>Revue mensuelle</li><li>Connaître vos marges</li><li><a href="/expenses">Suivi des dépenses</a></li></ol>
    `,
  },
  {
    slug: 'track-business-expenses-guide',
    title: 'Comment suivre vos dépenses professionnelles : guide complet',
    excerpt: 'Méthodes éprouvées pour le suivi des dépenses — de la gestion des reçus à la catégorisation fiscale.',
    category: 'Expense Management', tags: ['suivi dépenses', 'dépenses professionnelles', 'gestion reçus'],
    author: defaultAuthor, date: '2026-02-13', dateModified: '2026-02-21', readTime: '9 min de lecture',
    featuredImage: '/images/blog/track-business-expenses.jpg', featuredImageAlt: 'Suivre les dépenses professionnelles',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/expenses',
    semanticKeywords: ['suivre dépenses entreprise', 'catégories dépenses'], priority: 'P2',
    content: `
      <p>Un suivi rigoureux des dépenses est le fondement de finances saines.</p>
      <h2>Pourquoi c'est important</h2>
      <ul><li>Déductions fiscales maximisées</li><li>Précision des bénéfices</li><li>Préparation aux contrôles</li></ul>
      <h2>Étape 1 : Séparer pro et perso</h2><p>Ouvrez un compte bancaire professionnel dédié.</p>
      <h2>Étape 2 : Choisir votre méthode</h2>
      <ol><li>Tableur</li><li>App de scan de reçus</li><li><a href="/expenses">Logiciel de suivi</a></li></ol>
      <h2>Étape 3 : Catégoriser</h2><p>Alignez vos catégories sur celles de l'administration fiscale.</p>
      <h2>Étape 4 : Capturer immédiatement</h2><p>Photographiez les reçus au moment de l'achat.</p>
      <h2>Commencez avec Invoicemonk</h2>
      <p><a href="/expenses">Le suivi des dépenses Invoicemonk</a> combine scanner, auto-catégorisation et rapports fiscaux.</p>
    `,
  },
  {
    slug: 'multi-currency-invoicing-explained',
    title: 'Facturation multi-devises expliquée : guide pour entreprises internationales',
    excerpt: 'Tout sur la facturation en plusieurs devises — taux de change, implications fiscales, encaissement et comptabilité.',
    category: 'Invoicing and Billing Tips', tags: ['multi-devises', 'facturation internationale', 'taux de change'],
    author: defaultAuthor, date: '2026-02-12', dateModified: '2026-02-21', readTime: '10 min de lecture',
    featuredImage: '/images/blog/multi-currency-invoicing.jpg', featuredImageAlt: 'Guide facturation multi-devises',
    pillarContent: false, clusterType: 'cluster', targetProduct: '/payments',
    semanticKeywords: ['facturation multi-devises', 'facture devise étrangère'], priority: 'P2',
    content: `
      <p>Si vous travaillez avec des clients dans différents pays, la facturation multi-devises est incontournable.</p>
      <h2>Pourquoi c'est important</h2>
      <ul><li>Paiements plus rapides</li><li>Image professionnelle</li><li>Avantage concurrentiel</li></ul>
      <h2>Gérer les taux de change</h2>
      <ol><li>Fixer le taux à la création</li><li>Noter le taux sur la facture</li><li>Enregistrer gains/pertes au paiement</li></ol>
      <h2>Implications fiscales</h2>
      <ul><li>Déclarer en devise locale</li><li>Gains de change imposables</li><li>Pertes potentiellement déductibles</li></ul>
      <h2>Encaisser les paiements internationaux</h2>
      <ul><li>Wise : meilleurs taux</li><li>PayPal : largement accepté</li><li>Stripe : 135+ devises</li></ul>
      <h2>Comment Invoicemonk aide</h2>
      <p><a href="/use-cases/multi-currency-invoicing">Facturation multi-devises Invoicemonk</a> automatise tout le processus.</p>
    `,
  },
];

function generateAll(): BlogPost[] {
  const posts: BlogPost[] = [];
  for (const c of countries) {
    posts.push(genTaxCompliant(c));
    posts.push(genVatFormat(c));
    posts.push(genFreelancerVat(c));
    posts.push(genInvoiceAbroad(c));
    posts.push(genTaxMistakes(c));
  }
  return [...posts, ...sharedPosts];
}

registerBlogPosts('fr', generateAll());
