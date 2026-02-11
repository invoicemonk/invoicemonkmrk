import { LocaleConfig, SupportedCountry } from './types';

export const defaultCountry: SupportedCountry = 'NG';

export const supportedCountries: SupportedCountry[] = ['NG', 'US', 'GB', 'CA', 'AU'];

export const locales: Record<SupportedCountry, LocaleConfig> = {
  NG: {
    country: 'Nigeria',
    countryCode: 'NG',
    flag: '🇳🇬',
    currency: {
      code: 'NGN',
      symbol: '₦',
      position: 'before',
      decimals: 2,
      separator: ',',
    },
    pricing: {
      starter: 5000,
      professional: 15000,
      business: 30000,
      annualMultiplier: 10, // Pay for 10 months
    },
    pricingContent: {
      starterAvailable: true,
    },
    content: {
      paymentGateway: 'Paystack',
      seo: {
        siteTitle: 'Invoicemonk Nigeria | FIRS-Compliant Invoicing & Accounting Software',
        siteDescription: 'Professional invoicing software built for Nigerian businesses. FIRS-compliant, Paystack integration, and designed for freelancers and SMEs.',
        complianceKeyword: 'FIRS-Compliant',
        targetAudience: 'Nigerian',
        region: 'Nigeria',
      },
      compliance: {
        authority: 'FIRS',
        message: 'Built for FIRS compliance with proper tax documentation and audit trails',
      },
    },
  },
  US: {
    country: 'United States',
    countryCode: 'US',
    flag: '🇺🇸',
    currency: {
      code: 'USD',
      symbol: '$',
      position: 'before',
      decimals: 2,
      separator: ',',
    },
    pricing: {
      professional: 20,
      business: 40,
      annualMultiplier: 0.8, // 20% discount
    },
    pricingContent: {
      starterAvailable: false,
    },
    content: {
      paymentGateway: 'Stripe',
      seo: {
        siteTitle: 'Invoicemonk US | IRS-Ready Invoicing & Accounting Software',
        siteDescription: 'Professional invoicing software for US businesses. IRS-ready tax compliance, Stripe integration, and built for freelancers and SMEs.',
        complianceKeyword: 'IRS-Ready',
        targetAudience: 'US',
        region: 'United States',
      },
      compliance: {
        authority: 'IRS',
        message: 'IRS-ready with proper tax documentation and compliance features',
      },
    },
  },
  GB: {
    country: 'United Kingdom',
    countryCode: 'GB',
    flag: '🇬🇧',
    currency: {
      code: 'GBP',
      symbol: '£',
      position: 'before',
      decimals: 2,
      separator: ',',
    },
    pricing: {
      professional: 15,
      business: 30,
      annualMultiplier: 0.8, // 20% discount
    },
    pricingContent: {
      starterAvailable: false,
    },
    content: {
      paymentGateway: 'Stripe',
      seo: {
        siteTitle: 'Invoicemonk UK | HMRC-Compliant Invoicing & Accounting Software',
        siteDescription: 'Professional invoicing software for UK businesses. HMRC-compliant, MTD ready, Stripe integration, and built for freelancers and SMEs.',
        complianceKeyword: 'HMRC-Compliant',
        targetAudience: 'UK',
        region: 'United Kingdom',
      },
      compliance: {
        authority: 'HMRC',
        message: 'HMRC-compliant with Making Tax Digital (MTD) support and proper VAT handling',
      },
    },
  },
  CA: {
    country: 'Canada',
    countryCode: 'CA',
    flag: '🇨🇦',
    currency: {
      code: 'CAD',
      symbol: '$',
      position: 'before',
      decimals: 2,
      separator: ',',
    },
    pricing: {
      professional: 25,
      business: 50,
      annualMultiplier: 0.8, // 20% discount
    },
    pricingContent: {
      starterAvailable: false,
    },
    content: {
      paymentGateway: 'Stripe',
      seo: {
        siteTitle: 'Invoicemonk Canada | CRA-Compliant Invoicing & Accounting Software',
        siteDescription: 'Professional invoicing software for Canadian businesses. CRA-compliant, GST/HST ready, Stripe integration, and built for freelancers and SMEs.',
        complianceKeyword: 'CRA-Compliant',
        targetAudience: 'Canadian',
        region: 'Canada',
      },
      compliance: {
        authority: 'CRA',
        message: 'CRA-compliant with proper GST/HST/PST handling and tax documentation',
      },
    },
  },
  AU: {
    country: 'Australia',
    countryCode: 'AU',
    flag: '🇦🇺',
    currency: {
      code: 'AUD',
      symbol: '$',
      position: 'before',
      decimals: 2,
      separator: ',',
    },
    pricing: {
      professional: 30,
      business: 60,
      annualMultiplier: 0.8, // 20% discount
    },
    pricingContent: {
      starterAvailable: false,
    },
    content: {
      paymentGateway: 'Stripe',
      seo: {
        siteTitle: 'Invoicemonk Australia | ATO-Compliant Invoicing & Accounting Software',
        siteDescription: 'Professional invoicing software for Australian businesses. ATO-compliant, GST ready, Stripe integration, and built for freelancers and SMEs.',
        complianceKeyword: 'ATO-Compliant',
        targetAudience: 'Australian',
        region: 'Australia',
      },
      compliance: {
        authority: 'ATO',
        message: 'ATO-compliant with proper GST handling and tax documentation',
      },
    },
  },
};

export function getLocale(countryCode: SupportedCountry): LocaleConfig {
  return locales[countryCode] || locales[defaultCountry];
}

export function formatCurrency(amount: number, locale: LocaleConfig): string {
  const { currency } = locale;
  const formatted = amount.toLocaleString('en-US', {
    minimumFractionDigits: currency.decimals,
    maximumFractionDigits: currency.decimals,
  });
  
  if (currency.position === 'before') {
    return `${currency.symbol}${formatted}`;
  }
  return `${formatted}${currency.symbol}`;
}

export function formatPrice(amount: number, locale: LocaleConfig, period?: string): string {
  const formatted = formatCurrency(amount, locale);
  return period ? `${formatted}${period}` : formatted;
}
