/**
 * Topical Map Configuration - Koray Tuğberk Gübür's Semantic SEO Framework
 * 
 * Source Context: Help small businesses, freelancers, and entrepreneurs manage 
 * invoicing, payments, and accounting with compliance-first software that works globally.
 * 
 * Central Entity: Invoicing Software
 * Central Search Intent: Users want to get paid faster, stay compliant, and save time on bookkeeping.
 */

export type ClusterType = 'pillar' | 'cluster' | 'supporting' | 'outer';
export type ContentPriority = 'P1' | 'P2' | 'P3';

export interface Pillar {
  id: string;
  title: string;
  slug: string;
  description: string;
  targetProduct: string;
  hubPage: string;
  icon: string;
  color: string;
}

export interface TopicalCluster {
  pillarId: string;
  postSlugs: string[];
}

// Pillar definitions aligned with product offerings
export const pillars: Pillar[] = [
  {
    id: 'invoicing-mastery',
    title: 'Invoicing Mastery',
    slug: 'invoicing',
    description: 'Master the art of professional invoicing to get paid faster and look more professional.',
    targetProduct: '/invoicing',
    hubPage: '/blog/complete-guide-to-business-invoicing',
    icon: 'FileText',
    color: 'hsl(var(--primary))'
  },
  {
    id: 'getting-paid',
    title: 'Getting Paid Faster',
    slug: 'payments',
    description: 'Strategies and tools to accelerate your payment collection and improve cash flow.',
    targetProduct: '/payments',
    hubPage: '/blog/ultimate-guide-getting-paid-faster',
    icon: 'Wallet',
    color: 'hsl(142, 76%, 36%)'
  },
  {
    id: 'business-finances',
    title: 'Business Finances',
    slug: 'accounting',
    description: 'Essential accounting and expense management knowledge for small business success.',
    targetProduct: '/accounting',
    hubPage: '/blog/small-business-accounting-guide',
    icon: 'Calculator',
    color: 'hsl(221, 83%, 53%)'
  },
  {
    id: 'tax-compliance',
    title: 'Tax & Compliance',
    slug: 'compliance',
    description: 'Stay audit-ready and compliant with tax regulations across different regions.',
    targetProduct: '/compliance',
    hubPage: '/blog/small-business-tax-compliance-guide',
    icon: 'Shield',
    color: 'hsl(271, 91%, 65%)'
  },
  {
    id: 'freelancer-success',
    title: 'Freelancer Success',
    slug: 'freelancing',
    description: 'Build a thriving freelance business with practical guidance and tools.',
    targetProduct: '/freelancers',
    hubPage: '/blog/freelancer-business-guide',
    icon: 'User',
    color: 'hsl(25, 95%, 53%)'
  },
  {
    id: 'estimates-proposals',
    title: 'Estimates & Proposals',
    slug: 'estimates',
    description: 'Win more clients with compelling proposals and accurate estimates.',
    targetProduct: '/estimates',
    hubPage: '/blog/winning-proposals-estimates-guide',
    icon: 'ClipboardList',
    color: 'hsl(340, 82%, 52%)'
  }
];

// Map existing posts to their pillars
export const pillarClusters: TopicalCluster[] = [
  {
    pillarId: 'invoicing-mastery',
    postSlugs: [
      'invoicemonk-template-how-to-create-a-perfect-invoice-template',
      '5-essential-elements-of-an-invoice-a-guide-for-small-business-owners',
      'the-importance-of-invoicing-timely-and-how-to-do-it-efficiently'
    ]
  },
  {
    pillarId: 'getting-paid',
    postSlugs: []
  },
  {
    pillarId: 'business-finances',
    postSlugs: [
      'the-basics-of-small-business-accounting',
      'how-to-create-a-budget-for-your-small-business'
    ]
  },
  {
    pillarId: 'tax-compliance',
    postSlugs: []
  },
  {
    pillarId: 'freelancer-success',
    postSlugs: [
      'top-10-freelance-websites',
      'how-to-become-a-good-graphic-designer'
    ]
  },
  {
    pillarId: 'estimates-proposals',
    postSlugs: []
  }
];

// Outer section posts (authority building, not tied to specific pillars)
export const outerPosts: string[] = [
  'invoicemonk-free-online-invoice-and-accounting-platform',
  'small-business-marketing-101-a-guide-to-growth',
  'top-10-lucrative-business-ideas-with-small-capital',
  'impact-of-fintech-on-business-growth',
  'savings-and-investment-on-alat-how-it-works',
  'the-10-best-personal-finance-blogs'
];

// Product-aligned category mapping
export const categoryMapping: Record<string, string> = {
  'Small Business': 'Business Finance',
  'Invoicing and Billing Tips': 'Invoicing',
  'Freelancing': 'Freelancer',
  'Finance': 'Getting Paid'
};

// New semantic categories aligned with pillars
export const semanticCategories = [
  { id: 'invoicing', label: 'Invoicing', pillarId: 'invoicing-mastery' },
  { id: 'getting-paid', label: 'Getting Paid', pillarId: 'getting-paid' },
  { id: 'business-finance', label: 'Business Finance', pillarId: 'business-finances' },
  { id: 'tax-compliance', label: 'Tax & Compliance', pillarId: 'tax-compliance' },
  { id: 'freelancer', label: 'Freelancer', pillarId: 'freelancer-success' },
  { id: 'estimates', label: 'Estimates & Proposals', pillarId: 'estimates-proposals' }
];

// Helper functions
export function getPillarById(pillarId: string): Pillar | undefined {
  return pillars.find(p => p.id === pillarId);
}

export function getPillarForPost(postSlug: string): Pillar | undefined {
  const cluster = pillarClusters.find(c => c.postSlugs.includes(postSlug));
  return cluster ? getPillarById(cluster.pillarId) : undefined;
}

export function getClusterPostsForPillar(pillarId: string): string[] {
  const cluster = pillarClusters.find(c => c.pillarId === pillarId);
  return cluster?.postSlugs || [];
}

export function isOuterPost(postSlug: string): boolean {
  return outerPosts.includes(postSlug);
}

export function getClusterType(postSlug: string, isPillarContent?: boolean): ClusterType {
  if (isPillarContent) return 'pillar';
  if (isOuterPost(postSlug)) return 'outer';
  const pillar = getPillarForPost(postSlug);
  return pillar ? 'cluster' : 'outer';
}

export function getSemanticCategory(oldCategory: string): string {
  return categoryMapping[oldCategory] || oldCategory;
}
