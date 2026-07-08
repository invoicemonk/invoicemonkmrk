/**
 * Lead magnets (content upgrades) keyed by pillar and country.
 *
 * Files live under /public/downloads/ and are already deployed.
 * The soft CTA everywhere is "download the free checklist" — that's the
 * primary email-capture step. The hard CTA (create account) always sits
 * alongside as a secondary action for readers who are already convinced.
 */

export interface LeadMagnet {
  id: string;
  title: string;              // short label used on buttons/cards
  headline: string;           // punchy card headline
  description: string;        // 1–2 sentence pitch
  file: string;               // absolute URL path under /downloads/
  bullets: string[];          // 3 concrete things inside the PDF
}

export const magnets: Record<string, LeadMagnet> = {
  'international-invoicing-checklist': {
    id: 'international-invoicing-checklist',
    title: 'International Invoicing Compliance Checklist',
    headline: 'Free: International Invoicing Compliance Checklist',
    description:
      'A 1-page PDF that walks you through every mandatory field, tax ID, and archive rule for cross-border invoices — country by country.',
    file: '/downloads/international-invoicing-checklist.pdf',
    bullets: [
      'Every required field per country (VAT, IRN, CFDI, CSID…)',
      'Where to send / clear the invoice (SDI, ZATCA, DIAN, KSeF…)',
      'Retention periods and audit-proofing rules',
    ],
  },
  'get-paid-playbook': {
    id: 'get-paid-playbook',
    title: 'Get-Paid Playbook',
    headline: 'Free: Get-Paid Playbook',
    description:
      'The 12-page playbook that top freelancers and agencies use to shorten invoice-to-cash by 40%.',
    file: '/downloads/get-paid-playbook.pdf',
    bullets: [
      'The exact reminder sequence that recovers 92% of overdue invoices',
      'Payment terms and deposit clauses that actually work',
      'A word-for-word script for chasing late payers',
    ],
  },
  'invoice-template-pack': {
    id: 'invoice-template-pack',
    title: 'Invoice Template Pack',
    headline: 'Free: Invoice Template Pack',
    description:
      'Compliance-checked invoice templates for freelancers, agencies, and small businesses across 20+ countries.',
    file: '/downloads/invoice-template-pack.pdf',
    bullets: [
      'Templates pre-formatted for 20+ tax jurisdictions',
      'Mandatory fields and numbering rules baked in',
      'Editable copy you can drop into any tool',
    ],
  },
  'freelancer-payment-checklist': {
    id: 'freelancer-payment-checklist',
    title: 'Freelancer Payment Checklist',
    headline: 'Free: Freelancer Payment Checklist',
    description:
      'The 8-step checklist every freelancer should run before sending an invoice to avoid getting ghosted.',
    file: '/downloads/freelancer-payment-checklist.pdf',
    bullets: [
      'What to lock in before the project starts',
      'The 5 line items that always get invoices paid faster',
      'How to structure milestones so you never chase',
    ],
  },
};

const pillarToMagnet: Record<string, string> = {
  'tax-compliance': 'international-invoicing-checklist',
  'e-invoicing': 'international-invoicing-checklist',
  'getting-paid': 'get-paid-playbook',
  'invoicing-mastery': 'invoice-template-pack',
  invoicing: 'invoice-template-pack',
  freelancing: 'freelancer-payment-checklist',
  'business-finances': 'get-paid-playbook',
  'client-management': 'get-paid-playbook',
  estimates: 'invoice-template-pack',
  expenses: 'get-paid-playbook',
  receipts: 'invoice-template-pack',
};

export function getMagnetForPillar(pillarId?: string): LeadMagnet {
  const id = (pillarId && pillarToMagnet[pillarId]) || 'international-invoicing-checklist';
  return magnets[id];
}

/** Country-targeted posts always get the international compliance checklist. */
export function getMagnetForPost(pillarId?: string, targetCountry?: string): LeadMagnet {
  if (targetCountry) return magnets['international-invoicing-checklist'];
  return getMagnetForPillar(pillarId);
}
