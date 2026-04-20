/**
 * Query Intent Classification System
 * Categorizes content by user search intent for better navigation and SEO
 */

export type ContentIntent = 
  | 'informational'    // User wants to learn (what is, how does, why)
  | 'navigational'     // User wants to find a specific page
  | 'transactional'    // User wants to take action (buy, sign up, download)
  | 'commercial'       // User is researching before purchase (best, vs, comparison, review)
  | 'problem-solving'; // User has a specific problem to solve

export type ContentStage = 
  | 'awareness'        // User just discovering they have a need
  | 'consideration'    // User comparing options
  | 'decision'         // User ready to choose
  | 'retention';       // Existing customer seeking help

export type ExperienceLevel =
  | 'beginner'         // First-time users, needs basics explained
  | 'intermediate'     // Has some knowledge, needs deeper info
  | 'advanced';        // Expert user, needs specific details

export interface ContentMetadata {
  intent: ContentIntent;
  stage: ContentStage;
  experienceLevel: ExperienceLevel;
  queryPatterns: string[];     // Example search queries this content answers
  problemsSolved: string[];    // Specific problems this content addresses
  nextSteps?: string[];        // Suggested follow-up content slugs
}

// Intent display configuration
export const intentConfig: Record<ContentIntent, { label: string; color: string; description: string }> = {
  informational: {
    label: 'Learn',
    color: 'bg-blue-500/10 text-blue-600',
    description: 'Educational content to build your knowledge'
  },
  navigational: {
    label: 'Find',
    color: 'bg-gray-500/10 text-gray-600',
    description: 'Quick reference and documentation'
  },
  transactional: {
    label: 'Get Started',
    color: 'bg-green-500/10 text-green-600',
    description: 'Ready-to-use tools and templates'
  },
  commercial: {
    label: 'Compare',
    color: 'bg-purple-500/10 text-purple-600',
    description: 'Comparisons to help you choose'
  },
  'problem-solving': {
    label: 'Solve',
    color: 'bg-orange-500/10 text-orange-600',
    description: 'Solutions to specific challenges'
  }
};

export const stageConfig: Record<ContentStage, { label: string; description: string }> = {
  awareness: {
    label: 'Just Starting',
    description: 'Perfect if you\'re new to this topic'
  },
  consideration: {
    label: 'Exploring Options',
    description: 'Comparing different approaches'
  },
  decision: {
    label: 'Ready to Act',
    description: 'Make an informed choice'
  },
  retention: {
    label: 'Getting Better',
    description: 'Tips for existing users'
  }
};

export const experienceConfig: Record<ExperienceLevel, { label: string; description: string }> = {
  beginner: {
    label: 'Beginner-Friendly',
    description: 'No prior knowledge required'
  },
  intermediate: {
    label: 'Intermediate',
    description: 'Some experience helpful'
  },
  advanced: {
    label: 'Advanced',
    description: 'For experienced professionals'
  }
};

// Map of blog post slugs to their intent metadata
export const postIntentMetadata: Record<string, ContentMetadata> = {
  // New Month 1 Content (February 2026)
  'how-to-create-first-professional-invoice': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to create an invoice for the first time',
      'first invoice as freelancer',
      'invoice tutorial for beginners',
      'step by step invoice creation',
      'how to make my first invoice',
      'creating an invoice as a new business'
    ],
    problemsSolved: [
      'Don\'t know how to create my first invoice',
      'Starting freelancing and need to bill clients',
      'Nervous about sending first invoice',
      'Never created an invoice before',
      'Need to learn invoicing from scratch'
    ],
    nextSteps: [
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'invoice-numbering-best-practices',
      'how-to-write-invoice-payment-terms'
    ]
  },
  'invoice-mistakes-that-cost-you-money': {
    intent: 'problem-solving',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'common invoice mistakes',
      'invoice errors to avoid',
      'why invoices get rejected',
      'invoice problems',
      'invoicing mistakes small business',
      'why am I not getting paid on time'
    ],
    problemsSolved: [
      'Clients complain about my invoices',
      'Invoices keep getting rejected',
      'Taking too long to get paid',
      'Making costly invoicing errors',
      'Payments are always delayed',
      'Not sure what\'s wrong with my invoices'
    ],
    nextSteps: [
      'complete-guide-to-business-invoicing',
      'ultimate-guide-getting-paid-faster',
      'setting-up-automatic-payment-reminders'
    ]
  },
  
  // Pillar content - typically informational, awareness/consideration stage
  'complete-guide-to-business-invoicing': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to create an invoice',
      'what is invoicing',
      'invoice guide for beginners',
      'business invoicing basics'
    ],
    problemsSolved: [
      'Don\'t know how to invoice clients',
      'Confused about what goes on an invoice',
      'Need to learn invoicing fundamentals'
    ],
    nextSteps: [
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'invoicemonk-template-how-to-create-a-perfect-invoice-template'
    ]
  },
  'ultimate-guide-getting-paid-faster': {
    intent: 'problem-solving',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to get paid faster',
      'clients not paying invoices',
      'reduce late payments',
      'improve cash flow'
    ],
    problemsSolved: [
      'Clients pay late consistently',
      'Cash flow problems from delayed payments',
      'Need strategies to collect payments'
    ],
    nextSteps: [
      'how-to-handle-late-payments-professionally',
      'setting-up-automatic-payment-reminders'
    ]
  },
  
  // How-to content - informational, various stages
  '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'what to include on invoice',
      'invoice requirements',
      'essential invoice elements',
      'invoice checklist'
    ],
    problemsSolved: [
      'Not sure what information to put on invoice',
      'Invoices missing important details',
      'Invoice rejected for missing information'
    ]
  },
  'how-to-write-invoice-payment-terms': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'invoice payment terms examples',
      'how to write payment terms',
      'net 30 meaning',
      'payment terms for invoices'
    ],
    problemsSolved: [
      'Unsure what payment terms to use',
      'Clients confused by payment terms',
      'Need clear payment term language'
    ]
  },
  'invoice-numbering-best-practices': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to number invoices',
      'invoice numbering system',
      'invoice number format',
      'sequential invoice numbers'
    ],
    problemsSolved: [
      'Invoice numbering is disorganized',
      'Need a proper numbering system',
      'Tax authority invoice number requirements'
    ]
  },
  
  // Comparison content - commercial intent
  'cash-vs-accrual-accounting-explained': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'cash vs accrual accounting',
      'which accounting method',
      'cash basis vs accrual basis',
      'accounting method comparison'
    ],
    problemsSolved: [
      'Don\'t know which accounting method to use',
      'Need to choose between cash and accrual',
      'Considering switching accounting methods'
    ]
  },
  'estimate-vs-quote-vs-invoice-difference': {
    intent: 'commercial',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'estimate vs quote difference',
      'quote vs invoice',
      'when to use estimate or quote',
      'proposal vs quote vs estimate'
    ],
    problemsSolved: [
      'Confused about document types',
      'Don\'t know when to send quote vs estimate',
      'Client asked for quote but sent estimate'
    ]
  },
  'proforma-invoice-vs-commercial-invoice': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'proforma vs commercial invoice',
      'what is proforma invoice',
      'when to use proforma invoice',
      'proforma invoice for customs'
    ],
    problemsSolved: [
      'International shipping invoice requirements',
      'Client requesting proforma invoice',
      'Customs documentation needs'
    ]
  },
  
  // Problem-solving content
  'how-to-handle-late-payments-professionally': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'client not paying invoice',
      'how to collect late payment',
      'payment reminder email',
      'dealing with late payers'
    ],
    problemsSolved: [
      'Client invoice is overdue',
      'Need to follow up on payment professionally',
      'Recurring late payment issues with client'
    ]
  },
  'credit-notes-how-and-when-to-use-them': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to issue credit note',
      'when to use credit note',
      'credit note vs refund',
      'correct invoice with credit note'
    ],
    problemsSolved: [
      'Need to correct an invoice error',
      'Client returned goods',
      'Overcharged a client'
    ]
  },
  
  // Tax/Compliance content
  'small-business-tax-deductions-guide': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'small business tax deductions',
      'what can I deduct',
      'business expense deductions',
      'tax write offs for business'
    ],
    problemsSolved: [
      'Paying too much in taxes',
      'Don\'t know what expenses are deductible',
      'Preparing for tax season'
    ]
  },
  'how-to-prepare-business-tax-audit': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'advanced',
    queryPatterns: [
      'tax audit preparation',
      'what to do during audit',
      'audit documentation required',
      'survive tax audit'
    ],
    problemsSolved: [
      'Received audit notice',
      'Need to organize records for audit',
      'Worried about tax authority review'
    ]
  },
  
  // Freelancer content
  'pricing-your-freelance-services': {
    intent: 'problem-solving',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to price freelance work',
      'freelance rate calculator',
      'what to charge as freelancer',
      'freelance pricing strategy'
    ],
    problemsSolved: [
      'Don\'t know what to charge',
      'Undercharging for services',
      'Clients say prices are too high'
    ]
  },
  'freelance-contract-templates': {
    intent: 'transactional',
    stage: 'decision',
    experienceLevel: 'beginner',
    queryPatterns: [
      'freelance contract template',
      'freelance agreement',
      'contract for freelance work',
      'freelancer terms and conditions'
    ],
    problemsSolved: [
      'Need a contract for freelance work',
      'Client requesting service agreement',
      'Protecting myself as freelancer'
    ]
  },
  'top-10-freelance-websites': {
    intent: 'commercial',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'best freelance websites',
      'where to find freelance work',
      'top freelance platforms',
      'freelance job sites'
    ],
    problemsSolved: [
      'Need to find freelance clients',
      'Starting freelance career',
      'Looking for more work'
    ]
  },

  // ============================================
  // EXPENSE MANAGEMENT PILLAR + CLUSTER
  // ============================================
  'complete-guide-expense-management': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'how to manage business expenses',
      'expense tracking guide',
      'small business expense management',
      'organize business expenses',
      'expense management for beginners'
    ],
    problemsSolved: [
      'Don\'t know how to track business expenses',
      'Missing tax deductions from poor record keeping',
      'Receipts are disorganized and getting lost',
      'No system for managing business spending'
    ],
    nextSteps: [
      'expense-tracking-methods-small-business',
      'business-expense-categories-guide',
      'tax-deductible-business-expenses'
    ]
  },
  'expense-tracking-methods-small-business': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'best expense tracking method',
      'expense tracking software',
      'how to track business expenses',
      'expense tracking app small business',
      'compare expense tracking tools'
    ],
    problemsSolved: [
      'Need a better way to track expenses',
      'Spreadsheet expense tracking is too slow',
      'Looking for expense tracking software'
    ],
    nextSteps: [
      'digital-receipt-management-guide',
      'receipt-scanning-apps-comparison',
      'complete-guide-expense-management'
    ]
  },
  'digital-receipt-management-guide': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'digital receipt management',
      'go paperless receipts',
      'how to organize digital receipts',
      'electronic receipt storage',
      'paperless receipt system'
    ],
    problemsSolved: [
      'Paper receipts are fading and getting lost',
      'Need to go paperless with receipt management',
      'Not sure if digital receipts are accepted by tax authorities'
    ],
    nextSteps: [
      'receipt-scanning-apps-comparison',
      'expense-tracking-methods-small-business',
      'tax-deductible-business-expenses'
    ]
  },
  'business-expense-categories-guide': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'how to categorize business expenses',
      'expense categories list',
      'business expense classification',
      'chart of accounts expense categories',
      'expense category examples'
    ],
    problemsSolved: [
      'Don\'t know how to categorize expenses',
      'Expense categories are a mess',
      'Need expense categories for tax filing'
    ],
    nextSteps: [
      'tax-deductible-business-expenses',
      'complete-guide-expense-management',
      'chart-of-accounts-for-small-business'
    ]
  },
  'receipt-scanning-apps-comparison': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'best receipt scanning app',
      'receipt scanner comparison',
      'receipt OCR app review',
      'top receipt scanning apps 2026',
      'receipt scanner for small business'
    ],
    problemsSolved: [
      'Need an app to scan receipts',
      'Looking for the best receipt scanner',
      'Want to compare receipt scanning options'
    ],
    nextSteps: [
      'digital-receipt-management-guide',
      'expense-tracking-methods-small-business'
    ]
  },
  'separate-business-personal-expenses': {
    intent: 'problem-solving',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'separate business personal expenses',
      'business bank account vs personal',
      'mixing business personal finances',
      'should I have a business bank account',
      'commingling business funds'
    ],
    problemsSolved: [
      'Mixing business and personal expenses on one account',
      'Tax problems from commingled funds',
      'Need to set up proper business expense separation'
    ],
    nextSteps: [
      'expense-tracking-methods-small-business',
      'business-expense-categories-guide',
      'complete-guide-expense-management'
    ]
  },
  'tax-deductible-business-expenses': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'tax deductible business expenses',
      'what can I deduct as business expense',
      'business tax deductions list 2026',
      'deductible expenses self employed',
      'tax write offs small business'
    ],
    problemsSolved: [
      'Missing legitimate tax deductions',
      'Not sure which expenses are tax deductible',
      'Want to reduce tax bill legally'
    ],
    nextSteps: [
      'business-expense-categories-guide',
      'small-business-tax-deductions-guide',
      'expense-reports-freelancers'
    ]
  },
  'expense-reports-freelancers': {
    intent: 'informational',
    stage: 'decision',
    experienceLevel: 'beginner',
    queryPatterns: [
      'freelancer expense report',
      'create expense report freelance',
      'expense report template freelancer',
      'how to bill client for expenses',
      'freelance reimbursable expenses'
    ],
    problemsSolved: [
      'Need to create an expense report for a client',
      'Don\'t know how to bill clients for expenses',
      'Need a freelancer expense report template'
    ],
    nextSteps: [
      'complete-guide-expense-management',
      'tax-deductible-business-expenses',
      'expense-tracking-methods-small-business'
    ]
  },

  // ============================================
  // CLIENT MANAGEMENT PILLAR + CLUSTER
  // ============================================
  'client-management-guide-small-business': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'client management guide',
      'manage clients small business',
      'how to manage freelance clients',
      'client relationship management small business',
      'organizing client information'
    ],
    problemsSolved: [
      'No system for managing client relationships',
      'Losing track of client details and projects',
      'Client communication is disorganized',
      'Need a client management process'
    ],
    nextSteps: [
      'client-onboarding-process',
      'client-communication-templates',
      'crm-for-freelancers-small-business'
    ]
  },
  'client-onboarding-process': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'client onboarding process',
      'new client checklist',
      'client welcome process',
      'onboarding new clients freelance',
      'new client setup process'
    ],
    problemsSolved: [
      'Clients confused at project start',
      'No formal onboarding process',
      'Projects start disorganized'
    ],
    nextSteps: [
      'client-communication-templates',
      'freelance-contract-templates',
      'client-management-guide-small-business'
    ]
  },
  'managing-difficult-clients': {
    intent: 'problem-solving',
    stage: 'decision',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'handle difficult clients',
      'client conflict resolution',
      'dealing with scope creep',
      'problem client strategies',
      'when to fire a client'
    ],
    problemsSolved: [
      'Client is constantly changing scope',
      'Client is not responding to messages',
      'Client is being unreasonable about deadlines',
      'Need to know when to end a client relationship'
    ],
    nextSteps: [
      'client-communication-templates',
      'freelance-contract-templates',
      'client-management-guide-small-business'
    ]
  },
  'client-communication-templates': {
    intent: 'transactional',
    stage: 'decision',
    experienceLevel: 'beginner',
    queryPatterns: [
      'client email templates',
      'project update email template',
      'client communication templates freelancer',
      'professional client emails',
      'scope change email template'
    ],
    problemsSolved: [
      'Spending too much time writing client emails',
      'Don\'t know how to word difficult messages',
      'Need professional email templates for clients'
    ],
    nextSteps: [
      'client-onboarding-process',
      'managing-difficult-clients',
      'client-retention-strategies'
    ]
  },
  'client-retention-strategies': {
    intent: 'informational',
    stage: 'retention',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'client retention strategies',
      'keep clients coming back',
      'repeat client strategies',
      'how to retain freelance clients',
      'client loyalty small business'
    ],
    problemsSolved: [
      'Clients don\'t come back for repeat work',
      'Always chasing new clients',
      'Need more recurring revenue from existing clients'
    ],
    nextSteps: [
      'client-communication-templates',
      'crm-for-freelancers-small-business',
      'client-management-guide-small-business'
    ]
  },
  'crm-for-freelancers-small-business': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'freelancer CRM',
      'simple client tracking',
      'CRM for small business',
      'do freelancers need CRM',
      'best CRM for freelancers'
    ],
    problemsSolved: [
      'Need a simple way to track client information',
      'Spreadsheet for clients is getting unwieldy',
      'Looking for a lightweight CRM solution'
    ],
    nextSteps: [
      'client-management-guide-small-business',
      'client-onboarding-process',
      'client-retention-strategies'
    ]
  },

  // ============================================
  // EXISTING PILLAR ADDITIONS
  // ============================================
  'accounting-101-small-business-owners': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'accounting 101 small business',
      'basic accounting for business owners',
      'accounting basics explained',
      'learn business accounting'
    ],
    problemsSolved: [
      'Don\'t understand accounting basics',
      'Need to learn accounting for my business',
      'Accounting terminology is confusing'
    ],
    nextSteps: [
      'bookkeeping-basics-beginners',
      'chart-of-accounts-for-small-business',
      'cash-vs-accrual-accounting-explained'
    ]
  },
  'bookkeeping-basics-beginners': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'bookkeeping basics',
      'beginner bookkeeping guide',
      'how to do bookkeeping small business',
      'bookkeeping for beginners'
    ],
    problemsSolved: [
      'Don\'t know how to keep books',
      'Bookkeeping seems overwhelming',
      'Need to start recording business transactions'
    ],
    nextSteps: [
      'accounting-101-small-business-owners',
      'diy-small-business-accounting',
      'small-business-accounting-guide'
    ]
  },
  'diy-small-business-accounting': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'beginner',
    queryPatterns: [
      'can I do my own business accounting',
      'DIY accounting small business',
      'do your own bookkeeping',
      'accounting yourself vs hiring accountant'
    ],
    problemsSolved: [
      'Not sure if I should hire an accountant',
      'Want to save money on accounting',
      'Need to decide between DIY and professional help'
    ],
    nextSteps: [
      'bookkeeping-basics-beginners',
      'accounting-101-small-business-owners',
      'small-business-accounting-guide'
    ]
  },
  'international-wire-transfer-fees-guide': {
    intent: 'problem-solving',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'reduce wire transfer fees',
      'international wire transfer costs',
      'SWIFT transfer fees',
      'cheapest way to send money internationally'
    ],
    problemsSolved: [
      'Wire transfer fees are too high',
      'Losing money on international payments',
      'Need cheaper international transfer options'
    ],
    nextSteps: [
      'currency-conversion-international-payments',
      'international-payment-fees-explained'
    ]
  },
  'currency-conversion-international-payments': {
    intent: 'informational',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: [
      'currency conversion international transfers',
      'exchange rate markup',
      'mid-market rate explained',
      'how currency conversion works'
    ],
    problemsSolved: [
      'Don\'t understand exchange rate markups',
      'Losing money on currency conversion',
      'Need to understand mid-market rates'
    ],
    nextSteps: [
      'international-wire-transfer-fees-guide',
      'international-payment-fees-explained'
    ]
  },
  'what-is-an-invoice-definition': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: [
      'what is an invoice',
      'invoice definition',
      'invoice meaning',
      'types of invoices',
      'invoice vs bill vs receipt'
    ],
    problemsSolved: [
      'Don\'t know what an invoice is',
      'Confused about different invoice types',
      'Need to understand invoice vs receipt vs bill'
    ],
    nextSteps: [
      'complete-guide-to-business-invoicing',
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'how-to-create-first-professional-invoice'
    ]
  },

  // ============================================
  // NEW EUROPEAN MARKET COMPLIANCE CONTENT
  // ============================================
  // Romania (ANAF / e-Factura)
  'tax-compliant-invoice-ro': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['ANAF compliant invoice', 'tax invoice Romania', 'e-Factura requirements', 'Romania invoice rules'],
    problemsSolved: ['Need to issue ANAF-compliant invoices', 'Unsure about Romanian invoice requirements', 'e-Factura compliance'],
    nextSteps: ['vat-invoice-format-ro', 'freelancer-vat-registration-ro']
  },
  'vat-invoice-format-ro': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['VAT invoice format Romania', 'Romania VAT 19%', 'ANAF invoice template'],
    problemsSolved: ['Need correct VAT format for Romania', 'Romanian invoice template'],
    nextSteps: ['tax-compliant-invoice-ro', 'freelancer-vat-registration-ro']
  },
  'freelancer-vat-registration-ro': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer VAT Romania', 'register VAT ANAF', 'Romania VAT threshold freelancer'],
    problemsSolved: ['Need to register for VAT in Romania', 'Romanian freelancer tax obligations'],
    nextSteps: ['tax-compliant-invoice-ro', 'freelancer-tax-mistakes-ro']
  },
  'invoice-clients-in-ro': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice Romanian clients', 'billing Romania from abroad', 'cross-border invoice Romania'],
    problemsSolved: ['Need to invoice clients in Romania', 'Romanian tax rules for foreign suppliers'],
    nextSteps: ['tax-compliant-invoice-ro', 'multi-currency-invoicing-explained']
  },
  'freelancer-tax-mistakes-ro': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer tax mistakes Romania', 'ANAF penalties freelancer', 'common tax errors Romania'],
    problemsSolved: ['Avoiding tax mistakes as freelancer in Romania', 'ANAF compliance issues'],
    nextSteps: ['freelancer-vat-registration-ro', 'tax-compliant-invoice-ro']
  },
  // Hungary (NAV / Online Számla)
  'tax-compliant-invoice-hu': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['NAV compliant invoice', 'tax invoice Hungary', 'Online Számla requirements', 'Hungary invoice rules'],
    problemsSolved: ['Need NAV-compliant invoices', 'Online Számla reporting requirements'],
    nextSteps: ['vat-invoice-format-hu', 'freelancer-vat-registration-hu']
  },
  'vat-invoice-format-hu': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['ÁFA invoice format Hungary', 'Hungary VAT 27%', 'NAV invoice template'],
    problemsSolved: ['Need correct ÁFA format for Hungary', 'Hungarian invoice template'],
    nextSteps: ['tax-compliant-invoice-hu', 'freelancer-vat-registration-hu']
  },
  'freelancer-vat-registration-hu': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer VAT Hungary', 'register ÁFA NAV', 'Hungary VAT threshold'],
    problemsSolved: ['Need to register for VAT in Hungary', 'Hungarian freelancer tax obligations'],
    nextSteps: ['tax-compliant-invoice-hu', 'freelancer-tax-mistakes-hu']
  },
  'invoice-clients-in-hu': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice Hungarian clients', 'billing Hungary from abroad', 'cross-border invoice Hungary'],
    problemsSolved: ['Need to invoice clients in Hungary', 'Hungarian tax rules for foreign suppliers'],
    nextSteps: ['tax-compliant-invoice-hu', 'multi-currency-invoicing-explained']
  },
  'freelancer-tax-mistakes-hu': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer tax mistakes Hungary', 'NAV penalties', 'common tax errors Hungary'],
    problemsSolved: ['Avoiding tax mistakes in Hungary', 'NAV compliance issues'],
    nextSteps: ['freelancer-vat-registration-hu', 'tax-compliant-invoice-hu']
  },
  // Serbia (SEF)
  'tax-compliant-invoice-rs': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['SEF compliant invoice', 'tax invoice Serbia', 'Serbia e-invoicing requirements'],
    problemsSolved: ['Need SEF-compliant invoices', 'Serbian e-invoicing mandate'],
    nextSteps: ['vat-invoice-format-rs', 'freelancer-vat-registration-rs']
  },
  'vat-invoice-format-rs': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['PDV invoice format Serbia', 'Serbia VAT 20%', 'SEF invoice template'],
    problemsSolved: ['Need correct PDV format for Serbia', 'Serbian invoice template'],
    nextSteps: ['tax-compliant-invoice-rs', 'freelancer-vat-registration-rs']
  },
  'freelancer-vat-registration-rs': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer PDV Serbia', 'register VAT Serbia', 'Serbia VAT threshold'],
    problemsSolved: ['Need to register for PDV in Serbia', 'Serbian freelancer tax obligations'],
    nextSteps: ['tax-compliant-invoice-rs', 'freelancer-tax-mistakes-rs']
  },
  'invoice-clients-in-rs': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice Serbian clients', 'billing Serbia from abroad', 'cross-border invoice Serbia'],
    problemsSolved: ['Need to invoice clients in Serbia', 'Serbian tax rules for foreign suppliers'],
    nextSteps: ['tax-compliant-invoice-rs', 'multi-currency-invoicing-explained']
  },
  'freelancer-tax-mistakes-rs': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer tax mistakes Serbia', 'SEF penalties', 'common tax errors Serbia'],
    problemsSolved: ['Avoiding tax mistakes in Serbia', 'SEF compliance issues'],
    nextSteps: ['freelancer-vat-registration-rs', 'tax-compliant-invoice-rs']
  },
  // Poland (KAS / KSeF)
  'tax-compliant-invoice-pl': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['KAS compliant invoice', 'tax invoice Poland', 'KSeF requirements', 'Poland invoice rules'],
    problemsSolved: ['Need KAS-compliant invoices', 'KSeF structured e-invoicing compliance'],
    nextSteps: ['vat-invoice-format-pl', 'freelancer-vat-registration-pl']
  },
  'vat-invoice-format-pl': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['VAT invoice format Poland', 'Poland VAT 23%', 'KSeF invoice template', 'JPK_VAT format'],
    problemsSolved: ['Need correct VAT format for Poland', 'Polish invoice template'],
    nextSteps: ['tax-compliant-invoice-pl', 'freelancer-vat-registration-pl']
  },
  'freelancer-vat-registration-pl': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer VAT Poland', 'register NIP KAS', 'Poland VAT threshold freelancer'],
    problemsSolved: ['Need to register for VAT in Poland', 'Polish freelancer tax obligations'],
    nextSteps: ['tax-compliant-invoice-pl', 'freelancer-tax-mistakes-pl']
  },
  'invoice-clients-in-pl': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice Polish clients', 'billing Poland from abroad', 'cross-border invoice Poland'],
    problemsSolved: ['Need to invoice clients in Poland', 'Polish tax rules for foreign suppliers'],
    nextSteps: ['tax-compliant-invoice-pl', 'multi-currency-invoicing-explained']
  },
  'freelancer-tax-mistakes-pl': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer tax mistakes Poland', 'KAS penalties', 'common tax errors Poland'],
    problemsSolved: ['Avoiding tax mistakes in Poland', 'KAS compliance issues'],
    nextSteps: ['freelancer-vat-registration-pl', 'tax-compliant-invoice-pl']
  },
  // Italy (AdE / SDI)
  'tax-compliant-invoice-it': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['fattura elettronica compliant', 'tax invoice Italy', 'SDI FatturaPA requirements', 'Italy invoice rules'],
    problemsSolved: ['Need SDI-compliant invoices', 'FatturaPA compliance'],
    nextSteps: ['vat-invoice-format-it', 'freelancer-vat-registration-it']
  },
  'vat-invoice-format-it': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['IVA invoice format Italy', 'Italy VAT 22%', 'fattura elettronica template'],
    problemsSolved: ['Need correct IVA format for Italy', 'Italian invoice template'],
    nextSteps: ['tax-compliant-invoice-it', 'freelancer-vat-registration-it']
  },
  'freelancer-vat-registration-it': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer Partita IVA', 'register VAT Italy', 'Italy forfettario threshold'],
    problemsSolved: ['Need to register Partita IVA', 'Italian freelancer tax obligations'],
    nextSteps: ['tax-compliant-invoice-it', 'freelancer-tax-mistakes-it']
  },
  'invoice-clients-in-it': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice Italian clients', 'billing Italy from abroad', 'cross-border invoice Italy'],
    problemsSolved: ['Need to invoice clients in Italy', 'Italian tax rules for foreign suppliers'],
    nextSteps: ['tax-compliant-invoice-it', 'multi-currency-invoicing-explained']
  },
  'freelancer-tax-mistakes-it': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer tax mistakes Italy', 'Agenzia delle Entrate penalties', 'common tax errors Italy'],
    problemsSolved: ['Avoiding tax mistakes in Italy', 'Italian tax compliance issues'],
    nextSteps: ['freelancer-vat-registration-it', 'tax-compliant-invoice-it']
  },
  // Bulgaria (NRA)
  'tax-compliant-invoice-bg': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['NRA compliant invoice', 'tax invoice Bulgaria', 'Bulgaria invoice requirements', 'SAF-T Bulgaria'],
    problemsSolved: ['Need NRA-compliant invoices', 'Bulgarian invoice numbering rules'],
    nextSteps: ['vat-invoice-format-bg', 'freelancer-vat-registration-bg']
  },
  'vat-invoice-format-bg': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['ДДС invoice format Bulgaria', 'Bulgaria VAT 20%', 'NRA invoice template', 'EN 16931 Bulgaria'],
    problemsSolved: ['Need correct ДДС format for Bulgaria', 'Bulgarian invoice template'],
    nextSteps: ['tax-compliant-invoice-bg', 'freelancer-vat-registration-bg']
  },
  'freelancer-vat-registration-bg': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer VAT Bulgaria', 'register ДДС NRA', 'Bulgaria VAT threshold'],
    problemsSolved: ['Need to register for VAT in Bulgaria', 'Bulgarian freelancer tax obligations'],
    nextSteps: ['tax-compliant-invoice-bg', 'freelancer-tax-mistakes-bg']
  },
  'invoice-clients-in-bg': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice Bulgarian clients', 'billing Bulgaria from abroad', 'cross-border invoice Bulgaria'],
    problemsSolved: ['Need to invoice clients in Bulgaria', 'Bulgarian tax rules for foreign suppliers'],
    nextSteps: ['tax-compliant-invoice-bg', 'multi-currency-invoicing-explained']
  },
  'freelancer-tax-mistakes-bg': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['freelancer tax mistakes Bulgaria', 'NRA penalties', 'common tax errors Bulgaria'],
    problemsSolved: ['Avoiding tax mistakes in Bulgaria', 'NRA compliance issues'],
    nextSteps: ['freelancer-vat-registration-bg', 'tax-compliant-invoice-bg']
  },
  'cash-flow-forecasting-small-businesses': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['cash flow forecasting small business', 'how to forecast cash flow', 'cash flow projection template', 'predict business cash flow'],
    problemsSolved: ['Need to predict cash flow for my small business', 'Want to avoid cash shortfalls', 'Building a cash flow forecast'],
    nextSteps: ['small-business-accounting-basics', 'financial-reports-every-business-needs', 'cash-vs-accrual-accounting-explained']
  },
  'invoicing-software-free-vs-paid': {
    intent: 'commercial', stage: 'consideration', experienceLevel: 'beginner',
    queryPatterns: ['free vs paid invoicing software', 'is free invoicing software good enough', 'best free invoicing tool', 'should I pay for invoicing software'],
    problemsSolved: ['Deciding between free and paid invoicing software', 'Understanding invoicing software features', 'Choosing the right invoicing tool'],
    nextSteps: ['complete-guide-to-business-invoicing']
  },
  'automatic-payment-reminders-getting-paid': {
    intent: 'problem-solving', stage: 'consideration', experienceLevel: 'beginner',
    queryPatterns: ['automatic payment reminders', 'automate invoice reminders', 'stop chasing invoices', 'payment reminder automation'],
    problemsSolved: ['Spending too much time chasing payments', 'Clients paying late consistently', 'Want to automate payment follow-ups'],
    nextSteps: ['setting-up-automatic-payment-reminders', 'payment-reminder-email-templates', 'how-to-handle-late-payments-professionally']
  },
  'small-business-accounting-basics': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['small business accounting basics', 'accounting for beginners business', 'basic bookkeeping small business', 'learn business accounting'],
    problemsSolved: ['New to business accounting', 'Need to understand basic bookkeeping', 'Setting up accounting for my business'],
    nextSteps: ['the-basics-of-small-business-accounting', 'chart-of-accounts-for-small-business', 'cash-vs-accrual-accounting-explained']
  },
  'best-personal-finance-blogs': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['best personal finance blogs', 'finance blogs for entrepreneurs', 'personal finance blogs freelancers', 'money management blogs'],
    problemsSolved: ['Looking for personal finance education', 'Want to learn money management as an entrepreneur', 'Finding good finance content'],
    nextSteps: ['small-business-accounting-basics', 'how-to-create-a-budget-for-your-small-business']
  },

  // ============================================
  // CLUSTER 11: INDIA GST + GLOBAL FUNDAMENTALS
  // ============================================
  'e-invoicing-india-gst-guide': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['GST e-invoicing India', 'e-invoicing India guide', 'India e-invoice mandate', 'GST compliance small business India'],
    problemsSolved: ['Need to understand India GST e-invoicing requirements', 'Unsure about e-invoicing thresholds in India', 'Want to comply with GST e-invoicing mandate'],
    nextSteps: ['india-gst-registration-small-business', 'india-cgst-sgst-igst-explained']
  },
  'india-gst-registration-small-business': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['GST registration India', 'how to register for GST', 'GST registration threshold India', 'small business GST India'],
    problemsSolved: ['Need to register for GST in India', 'Unsure if I need GST registration', 'How to get GSTIN'],
    nextSteps: ['india-cgst-sgst-igst-explained', 'india-hsn-sac-codes-invoice-guide']
  },
  'india-cgst-sgst-igst-explained': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['CGST SGST IGST difference', 'which GST to charge', 'inter-state vs intra-state GST', 'CGST SGST explained'],
    problemsSolved: ['Confused about CGST vs SGST vs IGST', 'Need to know which tax to apply on invoices', 'Inter-state billing GST rules'],
    nextSteps: ['india-hsn-sac-codes-invoice-guide', 'india-input-tax-credit-guide']
  },
  'india-hsn-sac-codes-invoice-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['HSN code on invoice', 'SAC code services India', 'HSN code mandatory', 'how to find HSN code'],
    problemsSolved: ['Need to add HSN/SAC codes to invoices', 'Unsure which HSN code to use', 'Mandatory HSN code thresholds'],
    nextSteps: ['india-gst-return-filing-guide', 'e-invoicing-india-gst-guide']
  },
  'india-gst-return-filing-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['GST return filing guide', 'GSTR-1 GSTR-3B filing', 'how to file GST returns', 'GST return due dates'],
    problemsSolved: ['Need to file GST returns', 'Confused about GSTR forms', 'GST return filing deadlines'],
    nextSteps: ['india-input-tax-credit-guide', 'india-gst-registration-small-business']
  },
  'india-input-tax-credit-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['input tax credit India', 'ITC claim GST', 'how to claim input tax credit', 'GST ITC rules'],
    problemsSolved: ['Need to claim input tax credit', 'ITC eligibility confusion', 'Maximize GST input credits'],
    nextSteps: ['india-gst-return-filing-guide', 'india-cgst-sgst-igst-explained']
  },
  'how-to-write-an-invoice-step-by-step': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['how to write an invoice', 'invoice writing guide', 'create invoice step by step', 'write first invoice'],
    problemsSolved: ['Never written an invoice before', 'Need step-by-step invoice creation help', 'What to include on an invoice'],
    nextSteps: ['5-essential-elements-of-an-invoice-a-guide-for-small-business-owners', 'invoice-numbering-systems-guide']
  },
  'invoice-numbering-systems-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'beginner',
    queryPatterns: ['invoice numbering system', 'how to number invoices', 'invoice number format guide', 'sequential invoice numbering'],
    problemsSolved: ['Need an invoice numbering system', 'Invoice numbers are disorganized', 'Best invoice numbering format'],
    nextSteps: ['invoice-numbering-best-practices', 'how-to-write-an-invoice-step-by-step']
  },
  'invoice-vs-receipt-difference-explained': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['invoice vs receipt', 'difference between invoice and receipt', 'invoice or receipt which to send', 'receipt vs invoice explained'],
    problemsSolved: ['Confused about invoice vs receipt', 'Client asking for receipt instead of invoice', 'When to send receipt vs invoice'],
    nextSteps: ['estimate-vs-quote-vs-invoice-difference', 'how-to-write-an-invoice-step-by-step']
  },
  'payment-terms-guide-net-30-explained': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['payment terms explained', 'net 30 meaning', 'invoice payment terms guide', 'common payment terms'],
    problemsSolved: ['Don\'t understand payment terms', 'What does Net 30 mean', 'Which payment terms to use'],
    nextSteps: ['how-to-write-invoice-payment-terms', 'early-payment-discounts-do-they-work']
  },
  'credit-note-guide-when-how-to-issue': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['what is a credit note', 'how to issue credit note', 'credit note vs refund'],
    problemsSolved: ['Need to correct an invoice', 'How to handle refunds properly', 'Credit note for VAT adjustment'],
    nextSteps: ['how-to-write-an-invoice-step-by-step', 'invoice-numbering-systems-guide']
  },
  'how-to-chase-unpaid-invoices': {
    intent: 'problem-solving', stage: 'retention', experienceLevel: 'beginner',
    queryPatterns: ['how to chase unpaid invoices', 'overdue invoice follow up email', 'payment reminder template'],
    problemsSolved: ['Client hasn\'t paid invoice', 'How to follow up on late payments', 'Overdue invoice collection'],
    nextSteps: ['payment-terms-guide-net-30-explained', 'how-to-write-invoice-payment-terms']
  },
  'how-to-create-proforma-invoice': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['how to create proforma invoice', 'proforma invoice template', 'proforma invoice example'],
    problemsSolved: ['Need to create a proforma invoice', 'Proforma invoice for export', 'Formal quote in invoice format'],
    nextSteps: ['proforma-invoice-vs-commercial-invoice', 'how-to-write-an-invoice-step-by-step']
  },

  // ============================================
  // CLUSTER 10: Nigeria FIRS + Kenya eTIMS
  // ============================================
  'e-invoicing-nigeria-firs-guide': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['nigeria e-invoicing', 'FIRS e-invoice', 'nigeria electronic invoicing guide', 'e-invoicing Nigeria 2026'],
    problemsSolved: ['Need to understand Nigeria e-invoicing requirements', 'FIRS compliance for invoicing', 'How e-invoicing works in Nigeria'],
    nextSteps: ['nigeria-firs-merchant-buyer-solution', 'nigeria-e-invoicing-timeline']
  },
  'nigeria-firs-merchant-buyer-solution': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['FIRS merchant buyer solution', 'Nigeria FIRS invoice validation', 'FIRS e-invoice merchant'],
    problemsSolved: ['How FIRS merchant-buyer solution works', 'Validating invoices through FIRS', 'FIRS compliance integration'],
    nextSteps: ['nigeria-invoice-irn-qr-code', 'nigeria-e-invoicing-small-business']
  },
  'nigeria-e-invoicing-small-business': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Nigeria e-invoicing small business', 'FIRS e-invoice SME', 'small business e-invoicing Nigeria'],
    problemsSolved: ['Small business compliance with FIRS e-invoicing', 'Affordable e-invoicing for Nigerian SMEs'],
    nextSteps: ['e-invoicing-nigeria-firs-guide', 'nigeria-e-invoicing-penalties']
  },
  'nigeria-invoice-irn-qr-code': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['Nigeria invoice IRN', 'FIRS QR code invoice', 'invoice reference number Nigeria'],
    problemsSolved: ['How to generate IRN for Nigeria invoices', 'QR code requirements on Nigerian invoices'],
    nextSteps: ['nigeria-firs-merchant-buyer-solution', 'nigeria-vat-invoice-requirements']
  },
  'nigeria-e-invoicing-penalties': {
    intent: 'problem-solving', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['Nigeria e-invoicing penalties', 'FIRS non-compliance fine', 'penalty for not using e-invoice Nigeria'],
    problemsSolved: ['What are penalties for non-compliance with FIRS e-invoicing', 'Avoiding FIRS fines'],
    nextSteps: ['e-invoicing-nigeria-firs-guide', 'nigeria-e-invoicing-timeline']
  },
  'nigeria-e-invoicing-timeline': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Nigeria e-invoicing timeline', 'FIRS e-invoice rollout dates', 'when is e-invoicing mandatory Nigeria'],
    problemsSolved: ['When does e-invoicing become mandatory in Nigeria', 'FIRS implementation schedule'],
    nextSteps: ['e-invoicing-nigeria-firs-guide', 'nigeria-e-invoicing-small-business']
  },
  'nigeria-peppol-firs': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['Nigeria PEPPOL', 'FIRS PEPPOL integration', 'PEPPOL e-invoicing Nigeria'],
    problemsSolved: ['How PEPPOL works with FIRS', 'Cross-border e-invoicing from Nigeria'],
    nextSteps: ['e-invoicing-nigeria-firs-guide', 'nigeria-firs-merchant-buyer-solution']
  },
  'nigeria-vat-invoice-requirements': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['Nigeria VAT invoice requirements', 'FIRS VAT invoice', 'VAT on invoice Nigeria'],
    problemsSolved: ['What VAT details are required on Nigerian invoices', 'Nigeria VAT compliance for invoices'],
    nextSteps: ['e-invoicing-nigeria-firs-guide', 'nigeria-invoice-irn-qr-code']
  },
  'nigeria-tax-reform-acts-invoicing': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'intermediate',
    queryPatterns: ['Nigeria tax reform invoicing', 'Nigeria tax reform acts 2024', 'how tax reform affects invoicing Nigeria'],
    problemsSolved: ['Impact of Nigeria tax reforms on invoicing', 'New invoicing rules from tax reform'],
    nextSteps: ['e-invoicing-nigeria-firs-guide', 'nigeria-vat-invoice-requirements']
  },
  'e-invoicing-kenya-etims': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Kenya eTIMS', 'KRA e-invoicing', 'Kenya electronic tax invoice', 'eTIMS guide'],
    problemsSolved: ['How Kenya eTIMS works', 'KRA e-invoicing compliance', 'Getting started with eTIMS'],
    nextSteps: ['kenya-etims-small-business-guide', 'kenya-how-to-generate-etims-invoice']
  },
  'kenya-etims-small-business-guide': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['eTIMS small business Kenya', 'KRA e-invoice small business', 'eTIMS for SMEs'],
    problemsSolved: ['Small business eTIMS compliance', 'Affordable eTIMS solutions for SMEs'],
    nextSteps: ['e-invoicing-kenya-etims', 'kenya-how-to-generate-etims-invoice']
  },
  'kenya-how-to-generate-etims-invoice': {
    intent: 'informational', stage: 'decision', experienceLevel: 'beginner',
    queryPatterns: ['how to generate eTIMS invoice', 'create eTIMS invoice step by step', 'eTIMS invoice generation'],
    problemsSolved: ['Step-by-step eTIMS invoice creation', 'How to use eTIMS system'],
    nextSteps: ['e-invoicing-kenya-etims', 'kenya-vat-invoice-requirements']
  },
  'kenya-vat-invoice-requirements': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['Kenya VAT invoice requirements', 'KRA VAT invoice', 'VAT on invoices Kenya'],
    problemsSolved: ['VAT details required on Kenyan invoices', 'KRA VAT compliance'],
    nextSteps: ['e-invoicing-kenya-etims', 'kenya-etims-small-business-guide']
  },

  // ============================================
  // CLUSTER 12: UK HMRC/MTD + Saudi ZATCA + Malaysia MyInvois
  // ============================================
  'e-invoicing-uk-hmrc-mtd-guide': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['UK e-invoicing', 'HMRC MTD', 'Making Tax Digital invoicing', 'UK digital invoicing guide'],
    problemsSolved: ['Understanding UK Making Tax Digital requirements', 'HMRC e-invoicing compliance'],
    nextSteps: ['uk-mtd-vat-software-requirements', 'uk-making-tax-digital-timeline']
  },
  'uk-mtd-vat-software-requirements': {
    intent: 'commercial', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['MTD VAT software', 'HMRC approved software', 'MTD compatible invoicing software'],
    problemsSolved: ['Finding MTD-compatible software', 'HMRC software requirements for VAT'],
    nextSteps: ['e-invoicing-uk-hmrc-mtd-guide', 'uk-invoice-requirements-hmrc-2026']
  },
  'uk-invoice-requirements-hmrc-2026': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['UK invoice requirements 2026', 'HMRC invoice rules', 'what must be on a UK invoice'],
    problemsSolved: ['UK legal invoice requirements', 'HMRC-compliant invoice format'],
    nextSteps: ['e-invoicing-uk-hmrc-mtd-guide', 'uk-vat-flat-rate-scheme-invoicing']
  },
  'uk-vat-flat-rate-scheme-invoicing': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['UK flat rate scheme invoicing', 'FRS VAT invoice', 'flat rate VAT scheme invoice'],
    problemsSolved: ['How to invoice under flat rate VAT scheme', 'FRS invoicing rules'],
    nextSteps: ['e-invoicing-uk-hmrc-mtd-guide', 'uk-invoice-requirements-hmrc-2026']
  },
  'uk-cis-reverse-charge-invoicing': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['UK CIS reverse charge', 'construction reverse charge invoice', 'CIS VAT reverse charge'],
    problemsSolved: ['CIS reverse charge invoicing rules', 'Construction industry VAT invoicing'],
    nextSteps: ['e-invoicing-uk-hmrc-mtd-guide', 'uk-invoice-requirements-hmrc-2026']
  },
  'uk-making-tax-digital-timeline': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Making Tax Digital timeline', 'MTD rollout dates', 'when does MTD start'],
    problemsSolved: ['MTD implementation dates', 'When to comply with Making Tax Digital'],
    nextSteps: ['e-invoicing-uk-hmrc-mtd-guide', 'uk-mtd-vat-software-requirements']
  },
  'e-invoicing-saudi-zatca-fatoorah': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Saudi ZATCA e-invoicing', 'Fatoorah e-invoice', 'Saudi Arabia e-invoicing guide'],
    problemsSolved: ['Understanding Saudi ZATCA e-invoicing requirements', 'Fatoorah compliance'],
    nextSteps: ['saudi-zatca-phase-2-integration', 'saudi-e-invoice-xml-qr-requirements']
  },
  'saudi-zatca-phase-2-integration': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['ZATCA phase 2', 'ZATCA integration API', 'Saudi e-invoice phase 2 integration'],
    problemsSolved: ['ZATCA Phase 2 technical integration', 'API integration with ZATCA'],
    nextSteps: ['e-invoicing-saudi-zatca-fatoorah', 'saudi-e-invoice-xml-qr-requirements']
  },
  'saudi-e-invoice-xml-qr-requirements': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['Saudi e-invoice XML', 'ZATCA QR code requirements', 'Saudi invoice XML format'],
    problemsSolved: ['XML format for Saudi e-invoices', 'QR code requirements for ZATCA compliance'],
    nextSteps: ['e-invoicing-saudi-zatca-fatoorah', 'saudi-vat-invoice-requirements']
  },
  'saudi-vat-invoice-requirements': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['Saudi VAT invoice requirements', 'ZATCA VAT invoice', 'Saudi Arabia VAT on invoice'],
    problemsSolved: ['VAT details required on Saudi invoices', 'ZATCA VAT compliance'],
    nextSteps: ['e-invoicing-saudi-zatca-fatoorah', 'saudi-zatca-penalties-non-compliance']
  },
  'saudi-zatca-penalties-non-compliance': {
    intent: 'problem-solving', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['ZATCA penalties', 'Saudi e-invoicing fines', 'non-compliance ZATCA'],
    problemsSolved: ['Penalties for not complying with ZATCA', 'Avoiding ZATCA fines'],
    nextSteps: ['e-invoicing-saudi-zatca-fatoorah', 'saudi-zatca-phase-2-integration']
  },
  'e-invoicing-malaysia-myinvois-guide': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Malaysia MyInvois', 'LHDN e-invoicing', 'Malaysia e-invoice guide'],
    problemsSolved: ['Understanding Malaysia MyInvois system', 'LHDN e-invoicing compliance'],
    nextSteps: ['malaysia-myinvois-timeline-2024-2026', 'malaysia-e-invoice-technical-requirements']
  },
  'malaysia-myinvois-timeline-2024-2026': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['MyInvois timeline', 'Malaysia e-invoice rollout dates', 'when is e-invoicing mandatory Malaysia'],
    problemsSolved: ['MyInvois implementation dates', 'When to comply with Malaysia e-invoicing'],
    nextSteps: ['e-invoicing-malaysia-myinvois-guide', 'malaysia-small-business-myinvois-compliance']
  },
  'malaysia-e-invoice-technical-requirements': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['MyInvois technical requirements', 'Malaysia e-invoice API', 'LHDN e-invoice integration'],
    problemsSolved: ['Technical specs for MyInvois integration', 'API requirements for Malaysia e-invoicing'],
    nextSteps: ['e-invoicing-malaysia-myinvois-guide', 'malaysia-sst-invoice-requirements']
  },
  'malaysia-sst-invoice-requirements': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['Malaysia SST invoice', 'SST on invoice Malaysia', 'Malaysia service tax invoice'],
    problemsSolved: ['SST details on Malaysian invoices', 'Malaysia service and sales tax invoicing'],
    nextSteps: ['e-invoicing-malaysia-myinvois-guide', 'malaysia-small-business-myinvois-compliance']
  },
  'malaysia-small-business-myinvois-compliance': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['MyInvois small business', 'Malaysia e-invoice SME', 'small business e-invoicing Malaysia'],
    problemsSolved: ['MyInvois compliance for small businesses', 'Affordable e-invoicing for Malaysian SMEs'],
    nextSteps: ['e-invoicing-malaysia-myinvois-guide', 'malaysia-myinvois-timeline-2024-2026']
  },

  // ============================================
  // CLUSTER 14: Germany deep dives
  // ============================================
  'germany-zugferd-e-invoice-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['ZUGFeRD e-invoice', 'Germany ZUGFeRD guide', 'ZUGFeRD format explained'],
    problemsSolved: ['Understanding ZUGFeRD e-invoice format', 'How to create ZUGFeRD invoices'],
    nextSteps: ['germany-xrechnung-guide', 'germany-e-invoice-obligation-2025']
  },
  'germany-xrechnung-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['XRechnung guide', 'Germany XRechnung', 'XRechnung format requirements'],
    problemsSolved: ['How to create XRechnung invoices', 'XRechnung for public sector invoicing'],
    nextSteps: ['germany-zugferd-e-invoice-guide', 'germany-e-invoice-obligation-2025']
  },
  'germany-kleinunternehmer-invoicing': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Kleinunternehmer invoice', 'small business invoicing Germany', 'Kleinunternehmer Rechnung'],
    problemsSolved: ['Invoicing rules for Kleinunternehmer', 'Small business exemption invoicing Germany'],
    nextSteps: ['germany-vat-reverse-charge-invoicing', 'germany-e-invoice-obligation-2025']
  },
  'germany-vat-reverse-charge-invoicing': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['Germany reverse charge invoice', 'Reverse Charge Rechnung', 'B2B reverse charge Germany'],
    problemsSolved: ['How to invoice with reverse charge in Germany', 'B2B cross-border invoicing Germany'],
    nextSteps: ['germany-zugferd-e-invoice-guide', 'germany-kleinunternehmer-invoicing']
  },
  'germany-e-invoice-obligation-2025': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['Germany e-invoice mandate 2025', 'German e-invoicing obligation', 'when is e-invoicing mandatory Germany'],
    problemsSolved: ['Germany e-invoice mandate timeline', 'Preparing for mandatory e-invoicing in Germany'],
    nextSteps: ['germany-zugferd-e-invoice-guide', 'germany-xrechnung-guide']
  },

  // ============================================
  // CLUSTER 15: Industry invoice guides + Italy SDI
  // ============================================
  'invoice-guide-photographers': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['photographer invoice template', 'how to invoice photography', 'photography billing guide'],
    problemsSolved: ['How to create invoices as a photographer', 'Photography invoicing best practices'],
    nextSteps: ['invoice-guide-consultants', 'how-to-write-an-invoice-step-by-step']
  },
  'invoice-guide-graphic-designers': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['graphic designer invoice', 'design invoice template', 'invoicing for designers'],
    problemsSolved: ['How to invoice graphic design work', 'Design project billing'],
    nextSteps: ['invoice-guide-web-developers', 'how-to-write-an-invoice-step-by-step']
  },
  'invoice-guide-web-developers': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['web developer invoice', 'developer invoicing guide', 'freelance developer billing'],
    problemsSolved: ['How to invoice web development projects', 'Developer billing best practices'],
    nextSteps: ['invoice-guide-consultants', 'how-to-write-an-invoice-step-by-step']
  },
  'invoice-guide-consultants': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['consultant invoice template', 'consulting invoice guide', 'how to invoice consulting work'],
    problemsSolved: ['How to create consulting invoices', 'Billing consulting hours'],
    nextSteps: ['invoice-guide-photographers', 'how-to-write-an-invoice-step-by-step']
  },
  'italy-sdi-integration-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['Italy SDI integration', 'Sistema di Interscambio guide', 'Italian e-invoice SDI'],
    problemsSolved: ['How to integrate with Italy SDI system', 'Technical requirements for Italian e-invoicing'],
    nextSteps: ['italy-esterometro-cross-border', 'italy-fattura-elettronica-freelancers']
  },
  'italy-esterometro-cross-border': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['Italy esterometro', 'Italian cross-border invoicing', 'esterometro reporting'],
    problemsSolved: ['Cross-border invoice reporting Italy', 'Esterometro compliance requirements'],
    nextSteps: ['italy-sdi-integration-guide', 'italy-fattura-elettronica-freelancers']
  },
  'italy-fattura-elettronica-freelancers': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['fattura elettronica freelancer', 'Italian e-invoice freelancer', 'electronic invoice Italy freelance'],
    problemsSolved: ['How freelancers comply with Italian e-invoicing', 'Fattura elettronica for self-employed'],
    nextSteps: ['italy-sdi-integration-guide', 'italy-esterometro-cross-border']
  },

  // ============================================
  // CLUSTER 16: Payment disputes + Billing templates + Long-tail evergreen
  // ============================================
  'how-to-handle-invoice-disputes': {
    intent: 'problem-solving', stage: 'retention', experienceLevel: 'intermediate',
    queryPatterns: ['invoice dispute resolution', 'client disputing invoice', 'how to handle invoice disagreement'],
    problemsSolved: ['Client is disputing an invoice', 'Resolving billing disagreements professionally'],
    nextSteps: ['how-to-write-payment-demand-letter', 'dealing-with-non-paying-clients']
  },
  'how-to-write-payment-demand-letter': {
    intent: 'problem-solving', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['payment demand letter template', 'formal payment demand', 'letter demanding payment'],
    problemsSolved: ['Need to write a formal payment demand', 'Escalating unpaid invoice professionally'],
    nextSteps: ['small-claims-court-unpaid-invoices-guide', 'dealing-with-non-paying-clients']
  },
  'late-payment-laws-by-country': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['late payment laws', 'late payment interest by country', 'legal rights unpaid invoice'],
    problemsSolved: ['What are my legal rights for late payments', 'Late payment interest rates by jurisdiction'],
    nextSteps: ['how-to-handle-invoice-disputes', 'how-to-write-payment-demand-letter']
  },
  'dealing-with-non-paying-clients': {
    intent: 'problem-solving', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['client not paying', 'non-paying client options', 'what to do when client won\'t pay'],
    problemsSolved: ['Client refuses to pay invoice', 'Options for collecting unpaid invoices'],
    nextSteps: ['small-claims-court-unpaid-invoices-guide', 'debt-collection-agencies-freelancers-guide']
  },
  'small-claims-court-unpaid-invoices-guide': {
    intent: 'informational', stage: 'decision', experienceLevel: 'advanced',
    queryPatterns: ['small claims court invoice', 'sue for unpaid invoice', 'small claims court freelancer'],
    problemsSolved: ['Taking a client to small claims court', 'Legal action for unpaid invoices'],
    nextSteps: ['dealing-with-non-paying-clients', 'debt-collection-agencies-freelancers-guide']
  },
  'debt-collection-agencies-freelancers-guide': {
    intent: 'informational', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['debt collection freelancer', 'collection agency for unpaid invoice', 'freelancer debt collection'],
    problemsSolved: ['Using debt collection for unpaid freelance invoices', 'When to hire a collection agency'],
    nextSteps: ['dealing-with-non-paying-clients', 'small-claims-court-unpaid-invoices-guide']
  },
  'retainer-invoice-template-guide': {
    intent: 'transactional', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['retainer invoice template', 'how to invoice retainer', 'monthly retainer billing'],
    problemsSolved: ['How to bill retainer clients', 'Creating a retainer invoice'],
    nextSteps: ['recurring-invoice-setup-guide', 'deposit-invoice-template-guide']
  },
  'deposit-invoice-template-guide': {
    intent: 'transactional', stage: 'decision', experienceLevel: 'beginner',
    queryPatterns: ['deposit invoice template', 'how to invoice for deposit', 'upfront payment invoice'],
    problemsSolved: ['How to invoice for a deposit', 'Collecting upfront payments'],
    nextSteps: ['retainer-invoice-template-guide', 'progress-billing-invoice-guide']
  },
  'recurring-invoice-setup-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'beginner',
    queryPatterns: ['recurring invoice setup', 'automatic invoicing', 'set up recurring billing'],
    problemsSolved: ['How to set up recurring invoices', 'Automating monthly billing'],
    nextSteps: ['retainer-invoice-template-guide', 'invoice-automation-small-business-guide']
  },
  'time-and-materials-invoice-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['time and materials invoice', 'T&M billing', 'how to invoice time and materials'],
    problemsSolved: ['How to invoice time and materials projects', 'T&M billing best practices'],
    nextSteps: ['progress-billing-invoice-guide', 'how-to-write-an-invoice-step-by-step']
  },
  'progress-billing-invoice-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['progress billing invoice', 'milestone billing', 'progress payment invoice'],
    problemsSolved: ['How to bill by project milestones', 'Progress billing for large projects'],
    nextSteps: ['time-and-materials-invoice-guide', 'deposit-invoice-template-guide']
  },
  'self-billing-invoice-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['self-billing invoice', 'self-billing arrangement', 'buyer-created invoice'],
    problemsSolved: ['What is a self-billing invoice', 'Setting up self-billing arrangements'],
    nextSteps: ['interim-invoice-guide', 'how-to-write-an-invoice-step-by-step']
  },
  'interim-invoice-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['interim invoice', 'interim billing', 'partial invoice for long project'],
    problemsSolved: ['How to create interim invoices', 'Billing for ongoing projects'],
    nextSteps: ['final-invoice-close-project-guide', 'progress-billing-invoice-guide']
  },
  'final-invoice-close-project-guide': {
    intent: 'informational', stage: 'decision', experienceLevel: 'intermediate',
    queryPatterns: ['final invoice template', 'close project invoice', 'last invoice for project'],
    problemsSolved: ['How to create a final project invoice', 'Closing out a project billing'],
    nextSteps: ['interim-invoice-guide', 'how-to-write-an-invoice-step-by-step']
  },
  'invoice-payment-methods-compared': {
    intent: 'commercial', stage: 'consideration', experienceLevel: 'beginner',
    queryPatterns: ['best payment methods for invoices', 'invoice payment options', 'how to accept invoice payments'],
    problemsSolved: ['Which payment method to offer on invoices', 'Comparing payment options for freelancers'],
    nextSteps: ['how-to-accept-international-payments-freelancer', 'invoice-automation-small-business-guide']
  },
  'how-to-set-freelance-rates': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['how to set freelance rates', 'freelance pricing guide', 'what to charge as freelancer 2026'],
    problemsSolved: ['Don\'t know what to charge', 'Setting competitive freelance rates'],
    nextSteps: ['how-to-price-project-work-fixed-fee', 'invoice-guide-consultants']
  },
  'invoice-email-templates-follow-up': {
    intent: 'transactional', stage: 'retention', experienceLevel: 'beginner',
    queryPatterns: ['invoice email template', 'follow up email unpaid invoice', 'payment reminder email template'],
    problemsSolved: ['Need email templates for sending invoices', 'Follow-up emails for late payments'],
    nextSteps: ['how-to-chase-unpaid-invoices', 'how-to-handle-invoice-disputes']
  },
  'business-expense-tracking-spreadsheet-vs-software': {
    intent: 'commercial', stage: 'consideration', experienceLevel: 'beginner',
    queryPatterns: ['expense tracking spreadsheet vs software', 'expense tracker app vs Excel', 'best way to track expenses'],
    problemsSolved: ['Should I use a spreadsheet or software for expenses', 'Choosing expense tracking method'],
    nextSteps: ['expense-tracking-methods-small-business', 'invoice-automation-small-business-guide']
  },
  'how-to-accept-international-payments-freelancer': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['accept international payments freelancer', 'receive payments from abroad', 'international payment methods freelancer'],
    problemsSolved: ['How to receive payments from international clients', 'Best international payment options'],
    nextSteps: ['invoice-payment-methods-compared', 'multi-currency-accounting-small-business']
  },
  'tax-deductions-freelancers-complete-list': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['freelancer tax deductions', 'tax write-offs freelancers', 'what can freelancers deduct'],
    problemsSolved: ['What expenses can I deduct as a freelancer', 'Maximizing freelance tax deductions'],
    nextSteps: ['year-end-accounting-checklist-small-business', 'business-expense-tracking-spreadsheet-vs-software']
  },
  'invoice-automation-small-business-guide': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'intermediate',
    queryPatterns: ['invoice automation', 'automate invoicing small business', 'automatic invoicing software'],
    problemsSolved: ['How to automate invoicing process', 'Saving time on invoice creation'],
    nextSteps: ['recurring-invoice-setup-guide', 'invoice-payment-methods-compared']
  },
  'year-end-accounting-checklist-small-business': {
    intent: 'problem-solving', stage: 'retention', experienceLevel: 'intermediate',
    queryPatterns: ['year-end accounting checklist', 'end of year bookkeeping', 'small business year-end tasks'],
    problemsSolved: ['Preparing for year-end accounting', 'Year-end financial checklist'],
    nextSteps: ['tax-deductions-freelancers-complete-list', 'business-expense-tracking-spreadsheet-vs-software']
  },
  'how-to-price-project-work-fixed-fee': {
    intent: 'problem-solving', stage: 'awareness', experienceLevel: 'intermediate',
    queryPatterns: ['how to price project work', 'fixed fee pricing', 'project-based pricing guide'],
    problemsSolved: ['How to set fixed prices for projects', 'Project pricing strategy'],
    nextSteps: ['how-to-set-freelance-rates', 'time-and-materials-invoice-guide']
  },
  'sole-trader-vs-limited-company-invoice-differences': {
    intent: 'informational', stage: 'awareness', experienceLevel: 'beginner',
    queryPatterns: ['sole trader vs limited company invoice', 'invoicing as sole trader', 'limited company invoice requirements'],
    problemsSolved: ['Invoice differences between sole trader and limited company', 'Which business structure for invoicing'],
    nextSteps: ['how-to-write-an-invoice-step-by-step', 'invoice-numbering-systems-guide']
  },
  'client-onboarding-checklist-freelancers': {
    intent: 'informational', stage: 'retention', experienceLevel: 'beginner',
    queryPatterns: ['client onboarding checklist', 'freelancer client onboarding', 'new client setup process'],
    problemsSolved: ['How to onboard new freelance clients', 'Client onboarding best practices'],
    nextSteps: ['invoice-guide-consultants', 'how-to-write-an-invoice-step-by-step']
  },
  'multi-currency-accounting-small-business': {
    intent: 'informational', stage: 'consideration', experienceLevel: 'advanced',
    queryPatterns: ['multi-currency accounting', 'foreign currency invoicing', 'multi-currency bookkeeping'],
    problemsSolved: ['How to handle multiple currencies in accounting', 'Multi-currency invoicing challenges'],
    nextSteps: ['how-to-accept-international-payments-freelancer', 'invoice-payment-methods-compared']
  },
  'invoice-international-clients-guide': {
    intent: 'informational',
    stage: 'awareness',
    experienceLevel: 'intermediate',
    queryPatterns: ['how to invoice international clients', 'international invoicing guide', 'invoice clients abroad', 'cross-border invoicing'],
    problemsSolved: ['Don\'t know how to invoice clients in other countries', 'Confused about currency and tax on international invoices', 'Losing money on international payment fees'],
    nextSteps: ['multi-currency-accounting-guide', 'stripe-vs-paypal-vs-wise-freelancers', 'invoice-clients-in-us']
  },
  'freelance-payment-mistakes': {
    intent: 'problem-solving',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: ['freelance payment mistakes', 'freelancer losing money', 'why freelancers don\'t get paid', 'common invoicing mistakes freelancers'],
    problemsSolved: ['Losing money to payment processing fees', 'Clients paying late consistently', 'Undercharging for freelance work', 'No system for invoicing and payments'],
    nextSteps: ['how-to-handle-late-payments-professionally', 'freelancer-rate-calculator', 'why-clients-delay-payments']
  },
  'stripe-vs-paypal-vs-wise-freelancers': {
    intent: 'commercial',
    stage: 'consideration',
    experienceLevel: 'intermediate',
    queryPatterns: ['stripe vs paypal vs wise', 'best payment platform for freelancers', 'stripe vs paypal fees freelancer', 'wise vs paypal for international payments'],
    problemsSolved: ['Don\'t know which payment platform to use', 'Paying too much in payment processing fees', 'Need to compare payment methods for freelance work'],
    nextSteps: ['invoice-international-clients-guide', 'invoice-payment-methods-compared', 'how-to-accept-international-payments-freelancer']
  },
  'why-clients-delay-payments': {
    intent: 'problem-solving',
    stage: 'awareness',
    experienceLevel: 'beginner',
    queryPatterns: ['why clients delay payments', 'why clients pay late', 'how to get clients to pay on time', 'late payment causes and fixes'],
    problemsSolved: ['Clients consistently paying invoices late', 'Don\'t understand why payments are delayed', 'Need strategies to improve on-time payment rate'],
    nextSteps: ['how-to-handle-late-payments-professionally', 'freelance-payment-mistakes', 'payment-reminder-email-templates']
  }
};
export function getPostIntent(slug: string): ContentMetadata | undefined {
  return postIntentMetadata[slug];
}

// Filter posts by intent
export function filterPostsByIntent(slugs: string[], intent: ContentIntent): string[] {
  return slugs.filter(slug => {
    const metadata = postIntentMetadata[slug];
    return metadata?.intent === intent;
  });
}

// Filter posts by experience level
export function filterPostsByExperience(slugs: string[], level: ExperienceLevel): string[] {
  return slugs.filter(slug => {
    const metadata = postIntentMetadata[slug];
    return metadata?.experienceLevel === level;
  });
}

// Filter posts by stage
export function filterPostsByStage(slugs: string[], stage: ContentStage): string[] {
  return slugs.filter(slug => {
    const metadata = postIntentMetadata[slug];
    return metadata?.stage === stage;
  });
}

// Get recommended next content based on current post
export function getRecommendedNextContent(currentSlug: string): string[] {
  const metadata = postIntentMetadata[currentSlug];
  return metadata?.nextSteps || [];
}

// Search posts by query pattern match
export function searchByQueryPattern(query: string): string[] {
  const lowerQuery = query.toLowerCase();
  const matches: { slug: string; score: number }[] = [];
  
  Object.entries(postIntentMetadata).forEach(([slug, metadata]) => {
    let score = 0;
    
    // Check query patterns
    metadata.queryPatterns.forEach(pattern => {
      if (pattern.toLowerCase().includes(lowerQuery)) {
        score += 2;
      }
    });
    
    // Check problems solved
    metadata.problemsSolved.forEach(problem => {
      if (problem.toLowerCase().includes(lowerQuery)) {
        score += 1;
      }
    });
    
    if (score > 0) {
      matches.push({ slug, score });
    }
  });
  
  return matches
    .sort((a, b) => b.score - a.score)
    .map(m => m.slug);
}
