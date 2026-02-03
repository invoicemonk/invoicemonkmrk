/**
 * Static HTML Prerendering Script
 * 
 * This script generates static HTML files with proper SEO meta tags for each route.
 * It reads routes from generate-routes.ts and creates HTML files in dist/ during build.
 * 
 * Run after vite build: npx ts-node scripts/prerender-static.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { staticRoutes, getBlogRoutes, getAuthorRoutes } from './generate-routes';
import { blogPosts } from '../src/data/blogPosts';
import { authors } from '../src/data/authors';

const BASE_URL = 'https://invoicemonk.com';
const DIST_DIR = path.join(process.cwd(), 'dist');

interface SEOData {
  title: string;
  description: string;
  canonical: string;
  ogType: 'website' | 'article';
  ogImage?: string;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    author: string;
    section: string;
  };
}

// Static page SEO data
const staticPageSEO: Record<string, Omit<SEOData, 'canonical'>> = {
  '/': {
    title: 'Invoicemonk - Professional Invoicing & Accounting Software',
    description: 'Compliance-first invoicing and accounting software for small businesses, freelancers, and consultants. Create professional invoices, track expenses, get paid faster. Free tier available.',
    ogType: 'website',
  },
  '/invoicing': {
    title: 'Professional Invoicing Software | Create & Send Invoices | Invoicemonk',
    description: 'Create professional, compliant invoices in minutes. Track payments, send automatic reminders, and get paid faster. Free invoicing software for small businesses.',
    ogType: 'website',
  },
  '/expenses': {
    title: 'Expense Tracking Software for Small Businesses | Invoicemonk',
    description: 'Track business expenses, categorize spending, and stay tax-ready with Invoicemonk expense management. Receipt scanning, automatic categorization, tax-deductible tracking.',
    ogType: 'website',
  },
  '/payments': {
    title: 'Accept Online Payments | Payment Processing for Small Business | Invoicemonk',
    description: 'Get paid faster with integrated payment processing. Accept credit cards, bank transfers, and mobile payments directly from your invoices.',
    ogType: 'website',
  },
  '/accounting': {
    title: 'Simple Accounting Software for Small Business | Invoicemonk',
    description: 'Easy accounting software designed for non-accountants. Track income and expenses, generate financial reports, stay tax-ready without the complexity.',
    ogType: 'website',
  },
  '/estimates': {
    title: 'Create Professional Estimates & Quotes | Invoicemonk',
    description: 'Send professional estimates and quotes to win more clients. Convert approved estimates to invoices with one click. Free estimate templates.',
    ogType: 'website',
  },
  '/receipts': {
    title: 'Receipt Management & Scanning | Invoicemonk',
    description: 'Capture and organize receipts digitally. Automatic expense categorization, tax-deductible tracking, and seamless integration with your accounting.',
    ogType: 'website',
  },
  '/pricing': {
    title: 'Pricing Plans | Invoicemonk - Affordable Invoicing Software',
    description: 'Simple, transparent pricing for invoicing and accounting software. Free tier available. Plans starting from $9/month for small businesses and freelancers.',
    ogType: 'website',
  },
  '/why-invoicemonk': {
    title: 'Why Choose Invoicemonk | Features & Benefits',
    description: 'Discover why thousands of businesses choose Invoicemonk. Compliance-first design, powerful features, excellent support, and affordable pricing.',
    ogType: 'website',
  },
  '/compliance': {
    title: 'Tax Compliance & Regulatory Features | Invoicemonk',
    description: 'Stay compliant with tax regulations in your country. Automatic tax calculations, audit-ready reports, and compliance features for FIRS, HMRC, IRS, CRA, and ATO.',
    ogType: 'website',
  },
  '/about': {
    title: 'About Invoicemonk | Our Story & Mission',
    description: 'Learn about Invoicemonk - the invoicing and accounting platform built for businesses worldwide. Our mission is to simplify financial management for everyone.',
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Invoicemonk | Get Support & Help',
    description: 'Get in touch with Invoicemonk. We\'re here to help with invoicing, accounting, and business finance questions. Contact our support team today.',
    ogType: 'website',
  },
  '/blog': {
    title: 'Business & Finance Blog | Invoicing Tips & Guides | Invoicemonk',
    description: 'Expert tips and guides on invoicing, accounting, tax compliance, freelancing, and business growth. Learn from industry professionals.',
    ogType: 'website',
  },
  '/freelancers': {
    title: 'Invoicing Software for Freelancers | Invoicemonk',
    description: 'Professional invoicing designed for freelancers. Get paid faster, track expenses, manage clients, and stay tax-ready. Free tier available.',
    ogType: 'website',
  },
  '/consultants': {
    title: 'Invoicing Software for Consultants | Invoicemonk',
    description: 'Professional invoicing for management consultants and strategy firms. Multi-currency billing, detailed reporting, and enterprise-ready compliance.',
    ogType: 'website',
  },
  '/contractors': {
    title: 'Invoicing Software for Contractors | Invoicemonk',
    description: 'Professional invoicing for electrical, building, and trade contractors. Mobile invoicing, multi-project tracking, and job expense management.',
    ogType: 'website',
  },
  '/small-businesses': {
    title: 'Invoicing Software for Small Businesses | Invoicemonk',
    description: 'Complete invoicing and accounting solution for small businesses. Professional invoices, expense tracking, financial reports, and tax compliance.',
    ogType: 'website',
  },
  '/developer': {
    title: 'Developer API | Invoicemonk',
    description: 'Integrate Invoicemonk into your applications with our developer API. Full documentation and SDKs available for seamless integration.',
    ogType: 'website',
  },
  '/free-invoice-generator': {
    title: 'Free Invoice Generator | Create Professional Invoices | Invoicemonk',
    description: 'Create professional invoices for free. No signup required. Download PDF invoices instantly with our free invoice generator tool.',
    ogType: 'website',
  },
  '/guides': {
    title: 'Business Guides & Resources | Invoicemonk',
    description: 'Comprehensive guides on invoicing, getting paid, accounting, tax compliance, freelancing, and business proposals. Expert knowledge for your business.',
    ogType: 'website',
  },
  '/guides/invoicing': {
    title: 'Complete Invoicing Guide | Master Professional Invoicing | Invoicemonk',
    description: 'Master the art of professional invoicing. Learn invoice creation, payment terms, follow-ups, and best practices for getting paid faster.',
    ogType: 'website',
  },
  '/guides/getting-paid': {
    title: 'Getting Paid Faster Guide | Cash Flow Strategies | Invoicemonk',
    description: 'Proven strategies to accelerate payments and improve cash flow. Payment reminders, terms optimization, and collection best practices.',
    ogType: 'website',
  },
  '/guides/business-finances': {
    title: 'Business Finances Guide | Financial Management | Invoicemonk',
    description: 'Master your business finances. Budgeting, cash flow management, profit margins, and financial reporting for small business success.',
    ogType: 'website',
  },
  '/guides/tax-compliance': {
    title: 'Tax Compliance Guide | Stay Audit-Ready | Invoicemonk',
    description: 'Navigate tax requirements with confidence. Tax deductions, quarterly payments, record keeping, and audit preparation for small businesses.',
    ogType: 'website',
  },
  '/guides/freelancing': {
    title: 'Freelancing Success Guide | Build Your Freelance Business | Invoicemonk',
    description: 'Build a successful freelance business. Client acquisition, pricing strategies, contract essentials, and financial management for freelancers.',
    ogType: 'website',
  },
  '/guides/estimates': {
    title: 'Estimates & Proposals Guide | Win More Clients | Invoicemonk',
    description: 'Create winning estimates and proposals. Pricing strategies, negotiation tips, and best practices for converting prospects to clients.',
    ogType: 'website',
  },
  '/glossary': {
    title: 'Business Finance Glossary | Invoicing & Accounting Terms | Invoicemonk',
    description: 'Comprehensive glossary of invoicing, payments, accounting, tax, and business finance terms. Learn key concepts for small business success.',
    ogType: 'website',
  },
  '/explore': {
    title: 'Explore Topics & Reviews | Invoicemonk',
    description: 'Explore our comprehensive topic guides, read customer reviews, and discover resources to grow your business.',
    ogType: 'website',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | Invoicemonk',
    description: 'Learn how Invoicemonk protects your data and respects your privacy. Our comprehensive privacy policy explains our data practices.',
    ogType: 'website',
  },
  '/terms-of-service': {
    title: 'Terms of Service | Invoicemonk',
    description: 'Read the Invoicemonk terms of service. Understand your rights and responsibilities when using our invoicing platform.',
    ogType: 'website',
  },
  '/cookie-policy': {
    title: 'Cookie Policy | Invoicemonk',
    description: 'Learn how Invoicemonk uses cookies and similar technologies. Manage your cookie preferences and understand your choices.',
    ogType: 'website',
  },
  '/features/client-management': {
    title: 'Client Management Software | Organize Your Clients | Invoicemonk',
    description: 'Manage client information, track payment history, and build better relationships. All your client data in one place.',
    ogType: 'website',
  },
};

// Get SEO data for a blog post
function getBlogPostSEO(slug: string): SEOData | null {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return null;
  
  return {
    title: `${post.title} | Invoicemonk Blog`,
    description: post.excerpt.slice(0, 160),
    canonical: `${BASE_URL}/blog/${slug}`,
    ogType: 'article',
    ogImage: post.featuredImage.startsWith('/') 
      ? `${BASE_URL}${post.featuredImage}` 
      : post.featuredImage,
    article: {
      publishedTime: post.date,
      modifiedTime: post.dateModified,
      author: post.author.name,
      section: post.category,
    },
  };
}

// Get SEO data for an author page
function getAuthorSEO(slug: string): SEOData | null {
  const author = authors[slug];
  if (!author) return null;
  
  return {
    title: `${author.name} - ${author.role} | Invoicemonk`,
    description: author.bio.slice(0, 160),
    canonical: `${BASE_URL}/blog/author/${slug}`,
    ogType: 'website',
    ogImage: author.avatar.startsWith('/') 
      ? `${BASE_URL}${author.avatar}` 
      : author.avatar,
  };
}

// Get SEO data for any route
function getSEOData(route: string): SEOData {
  // Check if it's a blog post
  if (route.startsWith('/blog/') && route !== '/blog') {
    const parts = route.split('/');
    if (parts[2] === 'author' && parts[3]) {
      const authorSEO = getAuthorSEO(parts[3]);
      if (authorSEO) return authorSEO;
    } else if (parts[2]) {
      const blogSEO = getBlogPostSEO(parts[2]);
      if (blogSEO) return blogSEO;
    }
  }
  
  // Check static pages
  const staticSEO = staticPageSEO[route];
  if (staticSEO) {
    return {
      ...staticSEO,
      canonical: `${BASE_URL}${route === '/' ? '' : route}`,
    };
  }
  
  // Default fallback
  return {
    title: 'Invoicemonk - Professional Invoicing & Accounting Software',
    description: 'Compliance-first invoicing and accounting software for small businesses, freelancers, and consultants.',
    canonical: `${BASE_URL}${route}`,
    ogType: 'website',
  };
}

// Generate HTML head with SEO meta tags
function generateHead(seo: SEOData): string {
  const ogImage = seo.ogImage || `${BASE_URL}/og-image.png`;
  
  let head = `
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>${seo.title}</title>
    <meta name="title" content="${seo.title}" />
    <meta name="description" content="${seo.description}" />
    <meta name="author" content="Invoicemonk" />
    
    <!-- Canonical -->
    <link rel="canonical" href="${seo.canonical}" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="${seo.ogType}" />
    <meta property="og:url" content="${seo.canonical}" />
    <meta property="og:title" content="${seo.title}" />
    <meta property="og:description" content="${seo.description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:site_name" content="Invoicemonk" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${seo.canonical}" />
    <meta name="twitter:title" content="${seo.title}" />
    <meta name="twitter:description" content="${seo.description}" />
    <meta name="twitter:image" content="${ogImage}" />`;

  // Add article-specific meta tags
  if (seo.article) {
    head += `
    
    <!-- Article Meta -->
    <meta property="article:published_time" content="${seo.article.publishedTime}" />`;
    
    if (seo.article.modifiedTime) {
      head += `
    <meta property="article:modified_time" content="${seo.article.modifiedTime}" />`;
    }
    
    head += `
    <meta property="article:author" content="${seo.article.author}" />
    <meta property="article:section" content="${seo.article.section}" />`;
  }

  head += `
    
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-47B8C93GP8"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-47B8C93GP8');
    </script>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />`;

  return head;
}

// Read the base HTML template
function getBaseTemplate(): string {
  const indexPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(indexPath)) {
    throw new Error(`Build output not found at ${indexPath}. Run 'npm run build' first.`);
  }
  return fs.readFileSync(indexPath, 'utf-8');
}

// Create HTML file for a route
function createRouteHTML(route: string, template: string): void {
  const seo = getSEOData(route);
  const head = generateHead(seo);
  
  // Replace the head content
  let html = template;
  
  // Replace title
  html = html.replace(
    /<title>.*?<\/title>/,
    `<title>${seo.title}</title>`
  );
  
  // Insert meta tags after the title or charset
  const headEndIndex = html.indexOf('</head>');
  if (headEndIndex !== -1) {
    // Remove existing meta tags we'll replace
    html = html.replace(/<meta\s+name="description"[^>]*>/gi, '');
    html = html.replace(/<link\s+rel="canonical"[^>]*>/gi, '');
    html = html.replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '');
    html = html.replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '');
    html = html.replace(/<meta\s+property="article:[^"]*"[^>]*>/gi, '');
    
    // Insert our generated head content
    const insertPoint = html.indexOf('<meta charset=');
    if (insertPoint !== -1) {
      const endOfCharset = html.indexOf('>', insertPoint) + 1;
      html = html.slice(0, endOfCharset) + head.replace(/<meta charset="UTF-8" \/>/, '') + html.slice(endOfCharset);
    }
  }
  
  // Determine output path
  let outputPath: string;
  if (route === '/') {
    outputPath = path.join(DIST_DIR, 'index.html');
  } else {
    const routePath = route.replace(/^\//, '');
    outputPath = path.join(DIST_DIR, routePath, 'index.html');
  }
  
  // Create directory if needed
  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Write file
  fs.writeFileSync(outputPath, html, 'utf-8');
  console.log(`✓ ${route}`);
}

// Main execution
async function main() {
  console.log('\n📄 Generating static HTML files with SEO meta tags...\n');
  
  // Get base template
  let template: string;
  try {
    template = getBaseTemplate();
  } catch (error) {
    console.error('Error:', (error as Error).message);
    process.exit(1);
  }
  
  // Collect all routes
  const allRoutes = [
    ...staticRoutes,
    ...getBlogRoutes(),
    ...getAuthorRoutes(),
  ];
  
  // Remove duplicates
  const uniqueRoutes = [...new Set(allRoutes)].sort();
  
  console.log(`Found ${uniqueRoutes.length} routes to prerender\n`);
  
  // Generate HTML for each route
  for (const route of uniqueRoutes) {
    try {
      createRouteHTML(route, template);
    } catch (error) {
      console.error(`✗ ${route}: ${(error as Error).message}`);
    }
  }
  
  console.log(`\n✅ Generated ${uniqueRoutes.length} static HTML files\n`);
}

main().catch(console.error);
