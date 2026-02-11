#!/usr/bin/env node

/**
 * Automated React Router to Next.js Page Converter
 * 
 * This script converts React Router pages to Next.js App Router pages
 */

const fs = require('fs');
const path = require('path');

// Page metadata configuration
const pageMetadata = {
  '/invoicing': {
    title: 'Invoicing Software - Create Professional Invoices Fast',
    description: 'Professional invoicing software for small businesses and freelancers. Create, send, and track invoices in minutes.',
    keywords: ['invoicing software', 'invoice generator', 'online invoicing'],
  },
  '/expenses': {
    title: 'Expense Tracking Software - Manage Business Expenses',
    description: 'Track business expenses, scan receipts, and stay organized. Simplify expense management for your business.',
    keywords: ['expense tracking', 'receipt scanner', 'business expenses'],
  },
  '/payments': {
    title: 'Payment Processing - Accept Payments Online',
    description: 'Accept online payments, send payment links, and get paid faster. Integrated payment processing for invoices.',
    keywords: ['payment processing', 'online payments', 'payment links'],
  },
  '/accounting': {
    title: 'Accounting Software - Simple Business Accounting',
    description: 'Easy accounting software for small businesses. Track income, expenses, and generate financial reports.',
    keywords: ['accounting software', 'small business accounting', 'financial reports'],
  },
  '/estimates': {
    title: 'Estimates & Quotes Software - Create Professional Estimates',
    description: 'Create professional estimates and quotes. Convert approved estimates to invoices instantly.',
    keywords: ['estimate software', 'quote generator', 'proposal software'],
  },
  '/receipts': {
    title: 'Receipt Management - Digital Receipt Organization',
    description: 'Scan, organize, and manage receipts digitally. Never lose a receipt again.',
    keywords: ['receipt management', 'receipt scanner', 'digital receipts'],
  },
  '/pricing': {
    title: 'Pricing - Affordable Plans for Every Business',
    description: 'Simple, transparent pricing. Free tier available. Plans for freelancers and small businesses.',
    keywords: ['pricing', 'plans', 'subscription'],
  },
  '/why-invoicemonk': {
    title: 'Why InvoiceMonk - Features & Benefits',
    description: 'Discover why thousands of businesses trust InvoiceMonk for invoicing and accounting.',
    keywords: ['features', 'benefits', 'why invoicemonk'],
  },
  '/compliance': {
    title: 'Tax Compliance - Stay Compliant Worldwide',
    description: 'Built-in tax compliance for multiple countries. Never worry about tax regulations again.',
    keywords: ['tax compliance', 'regulations', 'tax software'],
  },
  '/about': {
    title: 'About Us - Our Mission and Team',
    description: 'Learn about InvoiceMonk's mission to simplify business finances for everyone.',
    keywords: ['about', 'team', 'mission'],
  },
  '/contact': {
    title: 'Contact Us - Get in Touch',
    description: 'Have questions? Get in touch with our support team.',
    keywords: ['contact', 'support', 'help'],
  },
  '/freelancers': {
    title: 'Invoicing for Freelancers - Get Paid Faster',
    description: 'Invoicing and accounting software built for freelancers. Simple, affordable, professional.',
    keywords: ['freelance invoicing', 'freelancer tools', 'freelance accounting'],
  },
  '/consultants': {
    title: 'Invoicing for Consultants - Professional Billing',
    description: 'Professional invoicing and time tracking for consultants. Manage clients and get paid.',
    keywords: ['consultant invoicing', 'consulting billing', 'time tracking'],
  },
  '/contractors': {
    title: 'Invoicing for Contractors - Job-Based Billing',
    description: 'Invoicing software for contractors. Track jobs, materials, and get paid on time.',
    keywords: ['contractor invoicing', 'construction billing', 'job costing'],
  },
  '/small-businesses': {
    title: 'Small Business Accounting Software - All-in-One Solution',
    description: 'Complete accounting solution for small businesses. Invoicing, expenses, and financial reports.',
    keywords: ['small business software', 'business accounting', 'invoicing'],
  },
  '/developer': {
    title: 'API & Developer Resources',
    description: 'InvoiceMonk API documentation and developer resources. Build custom integrations.',
    keywords: ['api', 'developer', 'integration', 'documentation'],
  },
  '/free-invoice-generator': {
    title: 'Free Invoice Generator - Create Invoices Online',
    description: 'Free online invoice generator. Create professional invoices instantly, no signup required.',
    keywords: ['free invoice generator', 'invoice template', 'online invoice'],
  },
  '/glossary': {
    title: 'Business & Accounting Glossary',
    description: 'Comprehensive glossary of business, accounting, and invoicing terms.',
    keywords: ['glossary', 'business terms', 'accounting definitions'],
  },
  '/explore': {
    title: 'Explore Topics - Business Resources',
    description: 'Explore guides, articles, and resources for running your business.',
    keywords: ['resources', 'guides', 'business topics'],
  },
  '/privacy-policy': {
    title: 'Privacy Policy',
    description: 'InvoiceMonk privacy policy and data protection information.',
    keywords: ['privacy', 'data protection', 'privacy policy'],
  },
  '/terms-of-service': {
    title: 'Terms of Service',
    description: 'InvoiceMonk terms of service and user agreement.',
    keywords: ['terms', 'terms of service', 'user agreement'],
  },
  '/cookie-policy': {
    title: 'Cookie Policy',
    description: 'InvoiceMonk cookie policy and usage information.',
    keywords: ['cookies', 'cookie policy', 'privacy'],
  },
};

function convertPageToNextJS(sourcePath, targetPath, route) {
  const content = fs.readFileSync(sourcePath, 'utf8');
  const meta = pageMetadata[route] || {
    title: 'InvoiceMonk',
    description: 'InvoiceMonk - Professional Invoicing & Accounting',
    keywords: [],
  };

  // Check if page uses client-side features
  const needsClient = content.includes('useState') || 
                       content.includes('useEffect') || 
                       content.includes('onClick') ||
                       content.includes('onChange') ||
                       content.includes('motion.') ||
                       content.includes('framer-motion');

  const componentName = path.basename(sourcePath, '.tsx');
  const routeName = route.replace('/', '') || 'home';

  // Create page.tsx (server component with metadata)
  const pageTsx = `import type { Metadata } from 'next'
${needsClient ? `import { ${componentName}Content } from './${componentName}Content'` : ''}

export const metadata: Metadata = {
  title: '${meta.title}',
  description: '${meta.description}',${meta.keywords.length > 0 ? `
  keywords: ${JSON.stringify(meta.keywords)},` : ''}
  alternates: {
    canonical: 'https://invoicemonk.com${route}',
  },
  openGraph: {
    title: '${meta.title} | InvoiceMonk',
    description: '${meta.description}',
    url: 'https://invoicemonk.com${route}',
    type: 'website',
  },
}

export default function ${componentName}Page() {
  return <${componentName}Content />
}
`;

  // Create content component (client if needed)
  let contentFile = content
    .replace(/from 'react-router-dom'/g, "from 'next/link'")
    .replace(/<Link to=/g, '<Link href=')
    .replace(/import { Link }/g, "import Link")
    .replace(/export default \w+;?/, '')
    .replace(/const \w+ = \(\) => {/, `export function ${componentName}Content() {`)
    .replace(/const \w+ = \(\) => \(/, `export function ${componentName}Content() {\n  return (`);

  if (needsClient) {
    contentFile = `'use client'\n\n` + contentFile;
  }

  return { pageTsx, contentFile, needsClient };
}

console.log('Page converter created. Use with Node.js to convert pages.');
module.exports = { convertPageToNextJS, pageMetadata };
