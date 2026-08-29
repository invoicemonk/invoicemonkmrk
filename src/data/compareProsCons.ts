import type { ProsCons } from '@/components/compare/ProsConsSection';

/**
 * Pros / cons + explicit "best for" labels for the bespoke (i18n-driven)
 * /compare/* pages. Pages built on `LLMComparisonPage` pass their own
 * `prosCons` prop instead.
 *
 * Rules for anything added here:
 *  - only publicly verifiable capability and pricing statements
 *  - no invented ratings, review counts or statistics
 *  - every tool gets at least two real cons, Invoicemonk included
 */

type Tool = ProsCons;

const invoicemonk = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'Invoicemonk',
  bestFor,
  price: 'Pro $15/mo',
  recommended: true,
  pros: [
    'Unlimited invoices, clients and currency accounts',
    'Up to 5 team members on the entry plan',
    'Receipt scanning and expense tracking included',
    'E-invoicing mandates live in 17 countries',
  ],
  cons: ['No time tracking', 'No payroll', 'Free plan capped at 3 invoices/month'],
  ...over,
});

const wave = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'Wave',
  bestFor,
  price: 'Free tier',
  pros: ['Free invoicing and accounting', 'Receipt capture included', 'Quick to set up'],
  cons: [
    'Payments and multi-currency limited to the US and Canada',
    'No e-invoicing mandate coverage',
    'Limited support on the free tier',
  ],
  ...over,
});

const quickbooks = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'QuickBooks',
  bestFor,
  price: 'From $19/mo',
  pros: ['Full double-entry accounting', 'Payroll add-on', 'Accountants already know it'],
  cons: ['Per-seat pricing', 'Multi-currency on higher tiers', 'More tool than pure invoicing needs'],
  ...over,
});

const freshbooks = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'FreshBooks',
  bestFor,
  price: 'From $19/mo',
  pros: ['Time tracking on invoices', 'Project workflows', 'Polished mobile apps'],
  cons: ['Billable-client caps on entry plans', 'Per-seat team pricing', 'No mandate compliance'],
  ...over,
});

const zohoBooks = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'Zoho Books',
  bestFor,
  price: 'From $15/mo',
  pros: ['Time tracking included', 'Workflow automation', 'Deep Zoho integrations'],
  cons: ['Customer caps on lower tiers', 'Per-seat pricing', 'Busier interface'],
  ...over,
});

const zohoInvoice = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'Zoho Invoice',
  bestFor,
  price: 'Free',
  pros: ['Genuinely free', 'Multi-currency invoicing', 'Time tracking included'],
  cons: ['Single user only', 'Limited expense workflows', 'Upgrade path locks you into Zoho'],
  ...over,
});

const xero = (bestFor: string, over: Partial<Tool> = {}): Tool => ({
  name: 'Xero',
  bestFor,
  price: 'From $20/mo',
  pros: ['Strong bank reconciliation', 'Payroll in several countries', 'Large advisor network'],
  cons: ['Invoice limits on the entry plan', 'Higher entry price', 'Accounting-first learning curve'],
  ...over,
});

/** Country pages share this shape: Invoicemonk, the local incumbent, and two global tools. */
function countrySet(country: string, opts: {
  mandate?: string;
  local?: Tool;
  waveNote?: string;
}): Tool[] {
  const set: Tool[] = [
    invoicemonk(`Best overall for ${country} businesses invoicing at home and abroad`, {
      pros: [
        'Unlimited invoices, clients and currency accounts',
        `${opts.mandate ? `${opts.mandate} compliance built in` : 'Local tax formats supported'}`,
        'Receipt scanning and expense tracking included',
        'Up to 5 team members on the entry plan',
      ],
    }),
  ];
  if (opts.local) set.push(opts.local);
  set.push(
    zohoBooks(`Best for ${country} teams already using Zoho`),
    wave(opts.waveNote || `Best free option only if you invoice US or Canadian clients`),
  );
  return set;
}

export interface ProsConsBlock {
  title?: string;
  intro?: string;
  tools: Tool[];
}

export const compareProsCons: Record<string, ProsConsBlock> = {
  /* ---------------- Head-to-head ---------------- */
  'invoicemonk-vs-freshbooks': {
    title: 'Invoicemonk vs FreshBooks: pros and cons',
    tools: [
      invoicemonk('Best for cross-border invoicing without client caps'),
      freshbooks('Best for hourly billing against projects'),
    ],
  },
  'invoicemonk-vs-wave': {
    title: 'Invoicemonk vs Wave: pros and cons',
    tools: [
      invoicemonk('Best for businesses invoicing outside the US and Canada'),
      wave('Best free option for US and Canadian microbusinesses'),
    ],
  },
  'invoicemonk-vs-zoho-invoice': {
    title: 'Invoicemonk vs Zoho Invoice: pros and cons',
    tools: [
      invoicemonk('Best for small teams that also need receipts and compliance'),
      zohoInvoice('Best free option for a single-user invoice sender'),
    ],
  },
  'invoicemonk-vs-quickbooks': {
    title: 'Invoicemonk vs QuickBooks: pros and cons',
    tools: [
      invoicemonk('Best for invoicing-first businesses that want one flat price'),
      quickbooks('Best when you need full accounting and payroll'),
    ],
  },
  'invoicemonk-vs-dext': {
    title: 'Invoicemonk vs Dext: pros and cons',
    tools: [
      invoicemonk('Best for businesses that want invoicing and receipts in one account'),
      {
        name: 'Dext',
        bestFor: 'Best for bookkeepers processing high receipt volume for many clients',
        price: 'From $24/mo',
        pros: ['High-accuracy receipt and bill OCR', 'Bulk supplier fetch', 'Deep accounting-suite integrations'],
        cons: ['No invoicing', 'Priced per client set, so costly for one business', 'Needs an accounting tool alongside it'],
      },
    ],
  },
  'invoicemonk-vs-atoinvoice': {
    title: 'Invoicemonk vs Atoinvoice: pros and cons',
    tools: [
      invoicemonk('Best for growing businesses that need compliance breadth'),
      {
        name: 'Atoinvoice',
        bestFor: 'Best for simple one-off invoice creation',
        price: 'Free / low cost',
        pros: ['Very simple to use', 'Quick invoice creation', 'Low or no cost'],
        cons: ['Limited automation', 'No mandate e-invoicing coverage', 'Thin expense and reporting features'],
      },
    ],
  },
  'invoicemonk-vs-stripe': {
    title: 'Invoicemonk vs Stripe: pros and cons',
    tools: [
      invoicemonk('Best for businesses that need invoices, receipts and compliance'),
      {
        name: 'Stripe',
        bestFor: 'Best for online products with recurring card subscriptions',
        price: 'Per-transaction fees',
        pros: ['Best-in-class card acceptance', 'Powerful subscription and API tooling', 'No monthly minimum to start'],
        cons: ['Not an invoicing or bookkeeping system', 'Per-transaction cost scales with revenue', 'No receipt or expense management'],
      },
    ],
  },
  'invoicemonk-vs-stripe-invoicing': {
    title: 'Invoicemonk vs Stripe Invoicing: pros and cons',
    tools: [
      invoicemonk('Best for flat-price invoicing with expenses and compliance included'),
      {
        name: 'Stripe Invoicing',
        bestFor: 'Best for teams already billing through Stripe',
        price: 'Percentage of invoice value',
        pros: ['Native to Stripe payments', 'Strong hosted invoice pages', 'Good developer API'],
        cons: ['Cost rises with invoice value', 'No expense or receipt management', 'Limited mandate e-invoicing coverage'],
      },
    ],
  },
  'invoicemonk-estimates-vs-quickbooks': {
    title: 'Estimates: Invoicemonk vs QuickBooks pros and cons',
    tools: [
      invoicemonk('Best for fast, flexible estimates that convert straight to invoices', {
        pros: [
          'Unlimited estimates on every paid plan',
          'One-click conversion to invoice keeping agreed pricing',
          'Deposit and milestone invoicing from an approved estimate',
          'Multi-currency estimates included',
        ],
      }),
      quickbooks('Best when estimates must sit inside your accounting ledger'),
    ],
  },
  'invoicemonk-vs-shoeboxed': {
    title: 'Invoicemonk vs Shoeboxed: pros and cons',
    tools: [
      invoicemonk('Best for mobile-first receipt capture plus invoicing'),
      {
        name: 'Shoeboxed',
        bestFor: 'Best for digitising a physical backlog of paper receipts',
        price: 'From $23/mo',
        pros: ['Mail-in scanning service', 'Human-verified data entry', 'Useful for archive clean-up'],
        cons: ['No invoicing', 'Mail-in turnaround is slow', 'Higher monthly cost for ongoing use'],
      },
    ],
  },
  'invoicemonk-vs-wave-receipts': {
    title: 'Invoicemonk vs Wave Receipts: pros and cons',
    tools: [
      invoicemonk('Best replacement for the discontinued Wave Receipts app'),
      {
        name: 'Wave (receipts in-app)',
        bestFor: 'Best for existing US and Canadian Wave accounting users',
        price: 'Free tier',
        pros: ['Receipt capture inside Wave accounting', 'Free to use', 'Ties straight to Wave bookkeeping'],
        cons: ['Standalone Receipts app was discontinued in 2024', 'US and Canada focus', 'No mandate e-invoicing coverage'],
      },
    ],
  },

  /* ---------------- Roundups ---------------- */
  'best-invoicing-software': {
    tools: [
      invoicemonk('Best overall for small businesses that invoice internationally'),
      quickbooks('Best when you need full accounting'),
      freshbooks('Best for hourly service businesses'),
      wave('Best free option for US-only invoicing'),
    ],
  },
  'best-free-invoicing-software': {
    tools: [
      wave('Best genuinely free option for US and Canadian businesses'),
      zohoInvoice('Best free option for a single user outside the US'),
      invoicemonk('Best free plan to grow out of — 3 invoices/month, then $15/mo', {
        price: 'Free / $15/mo',
        pros: [
          'Free plan keeps saved clients and payment tracking',
          'Upgrade without migrating data',
          'Multi-currency and compliance available on the paid plan',
        ],
        cons: ['Free plan capped at 3 invoices/month', 'Automation is paid-plan only', 'No time tracking'],
      }),
      {
        name: 'Free invoice generators',
        bestFor: 'Best for a single ad-hoc invoice with no follow-up',
        price: 'Free',
        pros: ['No signup', 'Instant PDF'],
        cons: ['No saved clients or history', 'No payment tracking or reminders', 'Not valid in mandate countries'],
      },
    ],
  },
  'best-invoicing-software-freelancers': {
    tools: [
      invoicemonk('Best overall for freelancers with overseas clients'),
      freshbooks('Best for freelancers billing hourly'),
      zohoInvoice('Best free option for solo freelancers'),
      wave('Best free option for US-only freelancers'),
    ],
  },

  /* ---------------- Wave alternatives ---------------- */
  'wave-alternatives': {
    tools: [
      invoicemonk('Best Wave alternative for businesses invoicing outside the US and Canada'),
      zohoBooks('Best Wave alternative for Zoho users'),
      freshbooks('Best Wave alternative for hourly billing'),
      quickbooks('Best Wave alternative when you need full accounting'),
    ],
  },
  'wave-alternative-nigeria': {
    tools: [
      invoicemonk('Best Wave alternative for Nigerian businesses', {
        pros: [
          'FIRS e-invoicing and Nigerian VAT handled',
          'Invoice in NGN and in client currencies',
          'Unlimited invoices and clients',
          'Receipt scanning included',
        ],
      }),
      zohoBooks('Best for Nigerian teams already inside Zoho'),
      quickbooks('Best if your accountant requires QuickBooks'),
      wave('Not usable for Nigerian payment collection', {
        bestFor: 'Only suitable if all your clients pay from the US or Canada',
      }),
    ],
  },
  'wave-alternative-uk': {
    tools: [
      invoicemonk('Best Wave alternative for UK freelancers and small businesses', {
        pros: [
          'HMRC-ready VAT invoicing',
          'Invoice in GBP and client currencies',
          'Unlimited invoices and clients',
          'Receipt scanning included',
        ],
      }),
      xero('Best for UK businesses that need payroll and reconciliation'),
      freshbooks('Best for UK consultants billing hourly'),
      wave('Only suitable if you invoice US or Canadian clients'),
    ],
  },
  'wave-alternative-australia': {
    tools: [
      invoicemonk('Best Wave alternative for Australian small businesses', {
        pros: [
          'ATO-compliant GST invoicing with ABN fields',
          'Invoice in AUD and client currencies',
          'Unlimited invoices and clients',
          'Receipt scanning included',
        ],
      }),
      xero('Best for Australian businesses that need payroll and STP'),
      zohoBooks('Best for Australian teams inside Zoho'),
      wave('Only suitable if you invoice US or Canadian clients'),
    ],
  },
  'wave-alternative-south-africa': {
    tools: [
      invoicemonk('Best Wave alternative for South African small businesses', {
        pros: [
          'SARS-ready VAT invoicing',
          'Invoice in ZAR and client currencies',
          'Unlimited invoices and clients',
          'Receipt scanning included',
        ],
      }),
      {
        name: 'Sage Business Cloud',
        bestFor: 'Best for South African businesses needing local payroll',
        price: 'From R200/mo',
        pros: ['Strong local accounting and payroll', 'Wide local accountant support', 'SARS-aligned reporting'],
        cons: ['Costlier than invoicing-only tools', 'Heavier setup', 'Invoicing UX is dated'],
      },
      zohoBooks('Best for South African teams inside Zoho'),
      wave('Only suitable if you invoice US or Canadian clients'),
    ],
  },

  /* ---------------- Country roundups ---------------- */
  'best-invoicing-software-usa': {
    tools: [
      invoicemonk('Best overall for US businesses with overseas clients'),
      quickbooks('Best for US businesses needing full accounting and payroll'),
      freshbooks('Best for US service businesses billing hourly'),
      wave('Best free option for US-only invoicing'),
    ],
  },
  'best-invoicing-software-uk': {
    tools: countrySet('UK', { mandate: 'HMRC VAT invoicing', local: xero('Best for UK businesses needing payroll and MTD-ready books') }),
  },
  'best-invoicing-software-canada': {
    tools: countrySet('Canadian', {
      mandate: 'GST/HST invoicing',
      local: quickbooks('Best for Canadian businesses needing full accounting'),
      waveNote: 'Best free option for Canadian domestic invoicing',
    }),
  },
  'best-invoicing-software-australia': {
    tools: countrySet('Australian', { mandate: 'ATO GST invoicing with ABN fields', local: xero('Best for Australian businesses needing payroll and STP') }),
  },
  'best-invoicing-software-france': {
    tools: countrySet('French', {
      mandate: 'Factur-X e-invoicing and TVA',
      local: {
        name: 'Pennylane',
        bestFor: 'Best for French businesses working closely with an expert-comptable',
        price: 'Quote-based',
        pros: ['Built for French accounting practice', 'Factur-X ready', 'Strong accountant collaboration'],
        cons: ['Accountant-led pricing', 'Overkill for solo invoicing', 'French market only'],
      },
    }),
  },
  'best-invoicing-software-italy': {
    tools: countrySet('Italian', {
      mandate: 'FatturaPA XML and SdI transmission',
      local: {
        name: 'Fatture in Cloud',
        bestFor: 'Best for Italian businesses that only need SdI invoicing',
        price: 'From €4/mo',
        pros: ['Native SdI transmission', 'Italian-language support', 'Low entry price'],
        cons: ['Italy-only', 'Limited multi-currency', 'Thin cross-border features'],
      },
    }),
  },
  'best-invoicing-software-india': {
    tools: countrySet('Indian', {
      mandate: 'GST e-invoicing with IRN and QR code',
      local: {
        name: 'Zoho Books (India)',
        bestFor: 'Best for Indian businesses wanting GST filing in the same tool',
        price: 'From ₹749/mo',
        pros: ['GST returns and e-way bills', 'IRN generation', 'Strong local support'],
        cons: ['Per-seat pricing', 'Customer caps on low tiers', 'Complex interface'],
      },
    }),
  },
  'best-invoicing-software-nigeria': {
    tools: countrySet('Nigerian', { mandate: 'FIRS e-invoicing and Nigerian VAT', local: quickbooks('Best if your accountant requires QuickBooks') }),
  },
  'best-invoicing-software-kenya': {
    tools: countrySet('Kenyan', { mandate: 'KRA eTIMS invoicing', local: quickbooks('Best if your accountant requires QuickBooks') }),
  },
  'best-invoicing-software-ghana': {
    tools: countrySet('Ghanaian', { mandate: 'GRA e-VAT invoicing', local: quickbooks('Best if your accountant requires QuickBooks') }),
  },
  'best-invoicing-software-south-africa': {
    tools: countrySet('South African', {
      mandate: 'SARS VAT invoicing',
      local: {
        name: 'Sage Business Cloud',
        bestFor: 'Best for South African businesses needing local payroll',
        price: 'From R200/mo',
        pros: ['Strong local accounting and payroll', 'Wide accountant support', 'SARS-aligned reporting'],
        cons: ['Costlier than invoicing-only tools', 'Heavier setup', 'Dated invoicing UX'],
      },
    }),
  },
  'best-invoicing-software-saudi-arabia': {
    tools: countrySet('Saudi', {
      mandate: 'ZATCA Phase 2 e-invoicing with QR and CSID',
      local: {
        name: 'Qoyod',
        bestFor: 'Best for Saudi businesses wanting Arabic-first local accounting',
        price: 'From SAR 99/mo',
        pros: ['Arabic interface', 'ZATCA integration', 'Local support'],
        cons: ['Saudi market only', 'Limited cross-border invoicing', 'Fewer integrations'],
      },
    }),
  },
  'best-invoicing-software-malaysia': {
    tools: countrySet('Malaysian', {
      mandate: 'MyInvois e-invoicing and SST',
      local: {
        name: 'Bukku',
        bestFor: 'Best for Malaysian businesses wanting local accounting and MyInvois',
        price: 'From RM 45/mo',
        pros: ['Malaysian tax handling', 'MyInvois submission', 'Local support'],
        cons: ['Malaysia only', 'Limited multi-currency depth', 'Fewer integrations'],
      },
    }),
  },
};

export function getProsCons(slug: string): ProsConsBlock | undefined {
  return compareProsCons[slug];
}
