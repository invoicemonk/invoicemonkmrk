/**
 * Route Generator
 * 
 * This script extracts all routes from the application for sitemap generation.
 * It includes both static routes and dynamic routes (blog posts, author pages, guides).
 */

// Import blog posts data - we use require for build-time compatibility
import { blogPosts } from '../src/data/blogPosts';
import { authors } from '../src/data/authors';

// Static routes from App.tsx
export const staticRoutes: string[] = [
  // Main pages
  '/',
  '/invoicing',
  '/expenses',
  '/payments',
  '/accounting',
  '/estimates',
  '/receipts',
  '/pricing',
  '/why-invoicemonk',
  '/compliance',
  '/about',
  
  // Core pages
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/contact',
  '/blog',
  '/free-invoice-generator',
  
  // Audience pages
  '/freelancers',
  '/consultants',
  '/contractors',
  '/small-businesses',
  '/developer',
  
  // Feature sub-pages
  '/features/client-management',
  
  // Guide pages
  '/guides',
  '/guides/invoicing',
  '/guides/getting-paid',
  '/guides/business-finances',
  '/guides/tax-compliance',
  '/guides/freelancing',
  '/guides/estimates',
  
  // Resources
  '/glossary',
  '/explore',
];

// Generate dynamic blog routes from blog posts data
export function getBlogRoutes(): string[] {
  return blogPosts.map(post => `/blog/${post.slug}`);
}

// Generate author page routes
export function getAuthorRoutes(): string[] {
  return Object.keys(authors).map(slug => `/blog/author/${slug}`);
}

// Get all routes for prerendering
export function getAllRoutes(): string[] {
  const routes = [
    ...staticRoutes,
    ...getBlogRoutes(),
    ...getAuthorRoutes(),
  ];
  
  // Remove duplicates and sort
  return [...new Set(routes)].sort();
}

// Export for use in vite.config.ts
export default getAllRoutes;

// Log route count if run directly
if (typeof require !== 'undefined' && require.main === module) {
  const routes = getAllRoutes();
  console.log(`Total routes for prerendering: ${routes.length}`);
  console.log('\nRoutes:');
  routes.forEach(route => console.log(`  ${route}`));
}
