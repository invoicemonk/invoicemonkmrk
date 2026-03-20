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
    nextSteps: ['best-invoicing-software-freelancers-small-business', 'complete-guide-to-business-invoicing']
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
