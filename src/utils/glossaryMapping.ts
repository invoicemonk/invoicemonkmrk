/**
 * Maps pillar IDs to relevant glossary term slugs for targeted auto-linking.
 * Used by BlogPost.tsx to link technical terms in article content to the glossary.
 */

const pillarGlossaryMap: Record<string, string[]> = {
  'invoicing-mastery': [
    'invoice', 'credit-note', 'pro-forma-invoice', 'recurring-invoice',
    'invoice-number', 'payment-terms', 'tax-invoice', 'purchase-order'
  ],
  'getting-paid': [
    'accounts-receivable', 'cash-flow', 'net-30', 'due-on-receipt',
    'early-payment-discount', 'payment-terms', 'milestone-payment'
  ],
  'business-finances': [
    'cash-flow', 'chart-of-accounts', 'profit-margin', 'cash-basis-accounting',
    'accrual-accounting', 'accounts-receivable', 'accounts-payable',
    'expense-report', 'expense-category', 'expense-tracking'
  ],
  'tax-compliance': [
    'vat', 'tax-invoice', 'tax-deduction', 'withholding-tax',
    'cash-basis-accounting', 'accrual-accounting'
  ],
  'freelancer-success': [
    'billable-hours', 'scope-creep', 'milestone-payment', 'retainer',
    'scope-of-work', 'estimate', 'quote', 'proposal'
  ],
  'estimates-proposals': [
    'estimate', 'quote', 'proposal', 'scope-of-work', 'retainer',
    'invoice', 'payment-terms'
  ],
  'expense-management': [
    'expense-report', 'receipt-scanning', 'expense-category',
    'reimbursable-expense', 'expense-tracking', 'digital-receipt',
    'tax-deduction', 'chart-of-accounts'
  ],
  'client-management': [
    'client-onboarding', 'client-retention', 'crm', 'client-communication',
    'scope-of-work', 'retainer', 'proposal'
  ]
};

// Fallback terms for posts not in any pillar (standalone/outer posts)
const defaultTerms: string[] = [
  'invoice', 'cash-flow', 'payment-terms', 'tax-deduction',
  'accounts-receivable', 'profit-margin'
];

/**
 * Get relevant glossary term slugs for a post based on its pillar.
 * Returns a curated list to avoid over-linking.
 */
export function getGlossaryTermsForPillar(pillarId?: string): string[] {
  if (pillarId && pillarGlossaryMap[pillarId]) {
    return pillarGlossaryMap[pillarId];
  }
  return defaultTerms;
}
