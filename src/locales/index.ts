import { LocaleConfig } from './types';

export * from './types';

/**
 * Single-locale module.
 *
 * The project intentionally ships ONE English locale. Per-country English
 * variants (en-NG, en-GB, en-AU, ...) and other languages (de/fr/pt/es)
 * were removed because a previous attempt to expose them as separate
 * locales caused serious SEO damage — Google now indexes only `/en/`.
 *
 * Do NOT reintroduce additional `LocaleConfig` entries here, hreflang
 * tags in `SEOHead`, or per-country URL prefixes. See mem://constraints/single-locale.
 */

const enDefault: LocaleConfig = {
  code: 'en',
  country: 'Global',
  countryCode: 'US',
  flag: '🌍',
  currency: {
    code: 'USD',
    symbol: '$',
    position: 'before',
  },
  content: {
    hero: {
      badge: 'GLOBAL E-INVOICING PLATFORM',
      headline: 'The global e-invoicing platform for small business.',
      headlineAccent: 'Mandate-compliant in 16 jurisdictions.',
      subheadline:
        'Invoicemonk issues structured, mandate-compliant e-invoices across ZATCA, MyInvois, GST IRN, Peppol, FIRS, MTD, eTIMS and more — with the local artefact (CSID, IRN, UUID, QR, fiscal signature) the tax authority requires.',
      cta: 'Get started',
      secondaryCta: 'See the 16 live mandates →',
      trustBadge: 'Used by businesses invoicing across 30+ countries',
    },
    compliance: {
      authority: 'Tax authority',
      message: 'Tax-ready invoices with all required documentation',
    },
    socialProof: 'Join growing businesses around the world',
    paymentGateway: 'Stripe',
    seo: {
      siteTitle: 'Invoicemonk — Professional Invoicing Software for Small Business',
      siteDescription:
        'Invoicing and accounting software for small businesses and freelancers worldwide. Mandate-compliant e-invoicing with Stripe payments. Pro from $15/month.',
      complianceKeyword: 'Tax-ready',
      targetAudience: 'small business',
      region: 'Global',
    },
    testimonials: [
      {
        quote:
          "I used to worry every time a client asked for an invoice. Now I know it's already correct — the tax fields, the formatting, the reference numbers. Invoicemonk handles it all.",
        highlight: "I know it's already correct",
        name: 'Adaeze Okafor',
        title: 'Founder',
        company: 'BrightPath Consulting',
        location: 'Lagos, Nigeria',
      },
      {
        quote:
          "I invoice clients in Germany and the UK — Invoicemonk handles the different tax requirements automatically. I don't even have to think about it.",
        highlight: 'handles the different tax requirements automatically',
        name: 'Sophie Andersen',
        title: 'Freelance Strategist',
        company: 'Andersen Advisory',
        location: 'Copenhagen, Denmark',
      },
      {
        quote:
          'My accountant was impressed — every record was already organised and compliant when tax season came. It saved us hours of preparation.',
        highlight: 'saved us hours of preparation',
        name: 'Arjun Mehta',
        title: 'CEO',
        company: 'Meridian Digital Agency',
        location: 'Dubai, UAE',
      },
    ],
    faqs: [
      {
        question: 'Does Invoicemonk support e-invoicing?',
        answer:
          'Yes. Invoicemonk is mandate-compliant across 16 jurisdictions including ZATCA, MyInvois, GST IRN, Peppol, FIRS, MTD, and eTIMS — issuing the local artefact (CSID, IRN, UUID, QR, fiscal signature) the tax authority requires.',
      },
      {
        question: 'What payment methods are supported?',
        answer:
          'Invoicemonk integrates with Stripe for global payments. Your clients can pay via credit/debit card and local methods directly from the invoice.',
      },
      {
        question: 'How much does Invoicemonk cost?',
        answer:
          'Pro starts at $15/month and SME at $49/month. Biz pricing is custom. You can cancel anytime, and annual billing saves about 17%.',
      },
      {
        question: 'Does Invoicemonk handle sales tax / VAT / GST?',
        answer:
          'Yes. Invoicemonk supports configurable tax rates per jurisdiction. Tax amounts are clearly itemized on each invoice for transparent reporting.',
      },
    ],
    blog: {
      ctaHeadline: 'Ready to streamline your invoicing?',
      ctaSubtext: 'Join thousands of businesses using Invoicemonk to manage their finances.',
      ctaButtonText: 'Get started',
    },
    socialProofHeadline: 'Loved by small businesses worldwide',
  },
  pricing: {
    professional: 15,
    sme: 49,
    business: 0,
    annualMultiplier: 10,
  },
  pricingContent: {
    annualSavingsText: 'Save ~17%',
  },
  urlPrefix: 'en',
  dateFormat: 'YYYY-MM-DD',
  taxLabels: { primary: 'Tax' },
};

// Single supported country/language. Kept as one-entry maps so legacy
// imports keep compiling without re-advertising multi-country support.
export const defaultCountry: 'US' = 'US';
export const defaultLanguage: 'en' = 'en';

export const supportedCountries: ['US'] = ['US'];
export const supportedLanguages: ['en'] = ['en'];

export const locales: Record<'US', LocaleConfig> = { US: enDefault };

export const countryToLanguage: Record<'US', 'en'> = { US: 'en' };
export const languageToI18nCode: Record<'en', string> = { en: 'en' };

export const urlPrefixToCountry: Record<string, 'US'> = { en: 'US' };
export const countryToUrlPrefix: Record<'US', string> = { US: 'en' };

export function getLocale(_countryCode?: 'US'): LocaleConfig {
  return enDefault;
}

export function formatCurrency(amount: number, locale: LocaleConfig = enDefault): string {
  const { symbol, position } = locale.currency;
  const formattedAmount = amount.toLocaleString();
  return position === 'before'
    ? `${symbol}${formattedAmount}`
    : `${formattedAmount}${symbol}`;
}

export function formatPrice(
  amount: number,
  locale: LocaleConfig = enDefault,
  period: string = '/mo',
): string {
  return `${formatCurrency(amount, locale)}${period}`;
}
