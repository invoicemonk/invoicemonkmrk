/**
 * Content Generators for Static HTML Prerendering
 * 
 * These functions generate semantic HTML content for each page type
 * to ensure crawlers see actual content even without JavaScript execution.
 */

import { blogPosts } from '../src/data/blogPosts';
import { authors, getAllAuthors } from '../src/data/authors';
import { pillars, getPillarBySlug, getClusterPostsForPillar } from '../src/data/topicalMap';
import { glossaryTerms } from '../src/data/glossaryTerms';
import { homepageFAQs } from '../src/data/homepageFAQs';

// Escape HTML entities
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Strip HTML tags for plain text
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Truncate text to specified length
function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Generate Homepage Content
 */
export function generateHomepageContent(): string {
  const faqSection = homepageFAQs.map(faq => `
    <dt>${escapeHtml(faq.question)}</dt>
    <dd>${escapeHtml(faq.answer)}</dd>
  `).join('');

  return `
    <main>
      <h1>Invoicemonk - Professional Invoicing & Accounting Software</h1>
      <p>Compliance-first invoicing and accounting software for small businesses, freelancers, and consultants. Create professional invoices, track expenses, get paid faster. Free tier available.</p>
      
      <section>
        <h2>Everything You Need to Run Your Business Finances</h2>
        <p>Invoicemonk is an all-in-one business finance platform designed to simplify invoicing, expense tracking, payment collection, and accounting for businesses worldwide. Whether you're a freelancer in Lagos, a consultant in London, or a small business owner in Sydney, our tools help you get paid faster and stay compliant with local tax regulations.</p>
      </section>
      
      <section>
        <h2>Our Products</h2>
        <ul>
          <li><a href="/invoicing">Invoicing Software</a> - Create and send professional invoices in minutes. Track payments, send automatic reminders, and get paid faster.</li>
          <li><a href="/expenses">Expense Tracking</a> - Track business expenses, categorize spending, and stay tax-ready with receipt scanning and automatic categorization.</li>
          <li><a href="/payments">Payment Processing</a> - Accept credit cards, bank transfers, and mobile payments directly from your invoices.</li>
          <li><a href="/accounting">Accounting Software</a> - Simple accounting designed for non-accountants. Track income, expenses, and generate financial reports.</li>
          <li><a href="/estimates">Estimates & Quotes</a> - Create professional estimates and convert them to invoices with one click.</li>
          <li><a href="/receipts">Receipt Management</a> - Capture and organize receipts digitally for easy expense tracking and tax preparation.</li>
        </ul>
      </section>
      
      <section>
        <h2>Built for Your Business Type</h2>
        <ul>
          <li><a href="/freelancers">Freelancers</a> - Invoice clients, track time, and manage your freelance business finances all in one place.</li>
          <li><a href="/consultants">Consultants</a> - Professional invoicing with multi-currency support and detailed reporting for consulting firms.</li>
          <li><a href="/contractors">Contractors</a> - Mobile invoicing, project tracking, and expense management for trade contractors.</li>
          <li><a href="/small-businesses">Small Businesses</a> - Complete invoicing and accounting solution to help your business grow.</li>
        </ul>
      </section>
      
      <section>
        <h2>Why Choose Invoicemonk?</h2>
        <ul>
          <li><strong>Compliance First:</strong> Built to meet tax requirements in Nigeria (FIRS), UK (HMRC), US (IRS), Canada (CRA), and Australia (ATO).</li>
          <li><strong>Get Paid Faster:</strong> Professional invoices with integrated payments help you get paid 14 days faster on average.</li>
          <li><strong>Save Time:</strong> Automate recurring invoices, payment reminders, and expense categorization.</li>
          <li><strong>Free Forever Plan:</strong> Start free with unlimited invoicing and essential features.</li>
          <li><strong>Expert Support:</strong> Get help when you need it from our business finance experts.</li>
        </ul>
      </section>
      
      <section>
        <h2>Frequently Asked Questions</h2>
        <dl>
          ${faqSection}
        </dl>
      </section>
      
      <section>
        <h2>Learn More</h2>
        <p>Visit our <a href="/blog">blog</a> for tips on invoicing, getting paid, and managing your business finances. Explore our comprehensive <a href="/guides">guides</a> or browse our <a href="/glossary">business finance glossary</a>.</p>
      </section>
    </main>
  `;
}

/**
 * Generate Product Page Content
 */
export function generateProductPageContent(route: string): string {
  const productContent: Record<string, { title: string; description: string; features: string[]; benefits: string[] }> = {
    '/invoicing': {
      title: 'Professional Invoicing Software',
      description: 'Create professional, compliant invoices in minutes. Track payments, send automatic reminders, and get paid faster with Invoicemonk invoicing software.',
      features: [
        'Professional invoice templates with your branding',
        'Automatic payment reminders and follow-ups',
        'Real-time payment tracking and notifications',
        'Multi-currency support for international clients',
        'Recurring invoices for subscription billing',
        'Tax-compliant invoices for FIRS, HMRC, IRS, CRA, and ATO'
      ],
      benefits: [
        'Get paid 14 days faster on average',
        'Save 5+ hours per week on billing tasks',
        'Look more professional to clients',
        'Stay compliant with tax regulations'
      ]
    },
    '/expenses': {
      title: 'Expense Tracking Software',
      description: 'Track business expenses, categorize spending, and stay tax-ready with Invoicemonk expense management. Snap receipts, auto-categorize, and generate reports.',
      features: [
        'Receipt scanning with OCR technology',
        'Automatic expense categorization',
        'Bank account integration',
        'Tax-deductible expense tracking',
        'Mileage tracking for business travel',
        'Team expense management'
      ],
      benefits: [
        'Never lose a receipt again',
        'Maximize tax deductions',
        'Understand where your money goes',
        'Prepare for taxes year-round'
      ]
    },
    '/payments': {
      title: 'Accept Online Payments',
      description: 'Get paid faster with integrated payment processing. Accept credit cards, bank transfers, and mobile payments directly from your invoices.',
      features: [
        'Accept credit and debit cards',
        'Bank transfer and ACH payments',
        'Mobile payment options',
        'Integrated with your invoices',
        'Automatic payment reconciliation',
        'Multiple currency support'
      ],
      benefits: [
        'Clients can pay with one click',
        'Reduce payment delays',
        'Lower transaction fees',
        'Automatic payment matching'
      ]
    },
    '/accounting': {
      title: 'Simple Accounting Software',
      description: 'Easy accounting software designed for non-accountants. Track income and expenses, generate financial reports, and stay tax-ready without the complexity.',
      features: [
        'Income and expense tracking',
        'Profit and loss reports',
        'Balance sheet generation',
        'Bank reconciliation',
        'Chart of accounts management',
        'Multi-entity support'
      ],
      benefits: [
        'No accounting degree required',
        'Real-time financial insights',
        'Tax-ready financial records',
        'Make better business decisions'
      ]
    },
    '/estimates': {
      title: 'Create Professional Estimates & Quotes',
      description: 'Win more clients with professional estimates and quotes. Convert approved estimates to invoices with one click.',
      features: [
        'Professional estimate templates',
        'One-click conversion to invoice',
        'Client approval tracking',
        'Version history and revisions',
        'Customizable terms and conditions',
        'Multi-currency pricing'
      ],
      benefits: [
        'Win more business with professional proposals',
        'Save time with quick conversions',
        'Track client approvals',
        'Never lose a quote again'
      ]
    },
    '/receipts': {
      title: 'Receipt Management & Scanning',
      description: 'Capture and organize receipts digitally. Automatic expense categorization and seamless integration with your accounting.',
      features: [
        'Mobile receipt capture',
        'OCR text extraction',
        'Automatic categorization',
        'Cloud storage and backup',
        'Search and filter receipts',
        'Export for tax preparation'
      ],
      benefits: [
        'Go paperless with digital receipts',
        'Find any receipt instantly',
        'Streamline tax preparation',
        'Reduce audit stress'
      ]
    }
  };

  const product = productContent[route];
  if (!product) return '';

  const featuresList = product.features.map(f => `<li>${escapeHtml(f)}</li>`).join('');
  const benefitsList = product.benefits.map(b => `<li>${escapeHtml(b)}</li>`).join('');

  return `
    <main>
      <h1>${escapeHtml(product.title)}</h1>
      <p>${escapeHtml(product.description)}</p>
      
      <section>
        <h2>Key Features</h2>
        <ul>${featuresList}</ul>
      </section>
      
      <section>
        <h2>Benefits</h2>
        <ul>${benefitsList}</ul>
      </section>
      
      <section>
        <h2>Get Started Free</h2>
        <p>Start using Invoicemonk today with our free forever plan. No credit card required.</p>
        <p><a href="/pricing">View Pricing</a> | <a href="/guides">Learn More in Our Guides</a></p>
      </section>
    </main>
  `;
}

/**
 * Generate Audience Page Content
 */
export function generateAudiencePageContent(route: string): string {
  const audienceContent: Record<string, { title: string; description: string; challenges: string[]; solutions: string[] }> = {
    '/freelancers': {
      title: 'Invoicing Software for Freelancers',
      description: 'Professional invoicing designed for freelancers. Get paid faster, track expenses, manage clients, and stay tax-ready. Free tier available.',
      challenges: [
        'Chasing late payments from clients',
        'Managing multiple projects and clients',
        'Tracking time and expenses accurately',
        'Staying organized for tax season',
        'Looking professional on a budget'
      ],
      solutions: [
        'Automatic payment reminders reduce late payments',
        'Client portal keeps all project info organized',
        'Built-in time tracking syncs with invoices',
        'Tax-ready expense tracking and reports',
        'Professional templates make you look established'
      ]
    },
    '/consultants': {
      title: 'Invoicing Software for Consultants',
      description: 'Professional invoicing for management consultants and strategy firms. Multi-currency billing, detailed reporting, and enterprise-ready compliance.',
      challenges: [
        'Complex billing with multiple rate tiers',
        'International clients in different currencies',
        'Detailed time tracking for billing accuracy',
        'Professional image for enterprise clients',
        'Compliance with corporate procurement'
      ],
      solutions: [
        'Flexible pricing with custom rate cards',
        'Multi-currency invoicing with automatic conversion',
        'Integrated time tracking with detailed breakdowns',
        'Enterprise-grade templates and branding',
        'Purchase order and approval workflow support'
      ]
    },
    '/contractors': {
      title: 'Invoicing Software for Contractors',
      description: 'Professional invoicing built for electrical, building, and trade contractors. Mobile invoicing, multi-project tracking, and job expense management.',
      challenges: [
        'Creating invoices on job sites',
        'Tracking materials and labor separately',
        'Managing multiple jobs simultaneously',
        'Documenting work with photos',
        'Getting paid before starting new jobs'
      ],
      solutions: [
        'Mobile-first design works anywhere',
        'Separate line items for materials and labor',
        'Project-based organization and tracking',
        'Photo attachments for documentation',
        'Progress billing and deposit invoicing'
      ]
    },
    '/small-businesses': {
      title: 'Invoicing Software for Small Businesses',
      description: 'Complete invoicing and accounting solution for small businesses. Professional invoices, expense tracking, financial reports, and tax compliance.',
      challenges: [
        'Managing cash flow with limited resources',
        'Keeping up with bookkeeping',
        'Meeting tax compliance requirements',
        'Scaling operations as you grow',
        'Maintaining professional client relationships'
      ],
      solutions: [
        'Real-time cash flow visibility and forecasting',
        'Automated bookkeeping with bank sync',
        'Tax-compliant invoices and reports',
        'Scales from solo to team with no migration',
        'Client portal and professional communications'
      ]
    }
  };

  const audience = audienceContent[route];
  if (!audience) return '';

  const challengesList = audience.challenges.map(c => `<li>${escapeHtml(c)}</li>`).join('');
  const solutionsList = audience.solutions.map(s => `<li>${escapeHtml(s)}</li>`).join('');

  return `
    <main>
      <h1>${escapeHtml(audience.title)}</h1>
      <p>${escapeHtml(audience.description)}</p>
      
      <section>
        <h2>Common Challenges</h2>
        <ul>${challengesList}</ul>
      </section>
      
      <section>
        <h2>How Invoicemonk Helps</h2>
        <ul>${solutionsList}</ul>
      </section>
      
      <section>
        <h2>Get Started Today</h2>
        <p>Join thousands of professionals who trust Invoicemonk for their business finances. Start free with our forever-free plan.</p>
        <p><a href="/pricing">View Pricing</a> | <a href="/blog">Read Success Stories</a></p>
      </section>
    </main>
  `;
}

/**
 * Generate Blog Post Content
 */
export function generateBlogPostContent(slug: string): string {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return '';

  // Strip HTML from content for the static version, but keep key paragraphs
  const cleanContent = post.content
    .replace(/<h2>/g, '\n<h2>')
    .replace(/<h3>/g, '\n<h3>')
    .replace(/<\/h2>/g, '</h2>\n')
    .replace(/<\/h3>/g, '</h3>\n')
    .replace(/<p>/g, '<p>')
    .replace(/<\/p>/g, '</p>\n')
    .replace(/<ul>/g, '<ul>')
    .replace(/<\/ul>/g, '</ul>\n')
    .replace(/<li>/g, '<li>')
    .replace(/<\/li>/g, '</li>')
    .trim();

  // Generate FAQ section if available
  let faqSection = '';
  if (post.faq && post.faq.length > 0) {
    const faqItems = post.faq.map(faq => `
      <dt>${escapeHtml(faq.question)}</dt>
      <dd>${escapeHtml(faq.answer)}</dd>
    `).join('');
    faqSection = `
      <section>
        <h2>Frequently Asked Questions</h2>
        <dl>${faqItems}</dl>
      </section>
    `;
  }

  // Get related posts from same cluster
  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 5)
    .map(p => `<li><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a></li>`)
    .join('');

  return `
    <article>
      <header>
        <h1>${escapeHtml(post.title)}</h1>
        <p><strong>${escapeHtml(post.excerpt)}</strong></p>
        <p>By <a href="/blog/author/${post.author.slug}">${escapeHtml(post.author.name)}</a> | ${post.date} | ${post.readTime}</p>
        <p>Category: ${escapeHtml(post.category)} | Tags: ${post.tags.map(t => escapeHtml(t)).join(', ')}</p>
      </header>
      
      <div class="article-content">
        ${cleanContent}
      </div>
      
      ${faqSection}
      
      <aside>
        <h2>Related Articles</h2>
        <ul>${relatedPosts}</ul>
      </aside>
      
      <footer>
        <p><a href="/blog">Back to Blog</a> | <a href="/guides">Explore Our Guides</a></p>
      </footer>
    </article>
  `;
}

/**
 * Generate Author Page Content
 */
export function generateAuthorPageContent(slug: string): string {
  const author = authors[slug];
  if (!author) return '';

  const authorPosts = blogPosts
    .filter(p => p.author.slug === slug)
    .slice(0, 10)
    .map(p => `<li><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a> - ${p.date}</li>`)
    .join('');

  const expertiseList = author.expertise.map(e => `<li>${escapeHtml(e)}</li>`).join('');
  const credentialsList = author.credentials.map(c => `<li>${escapeHtml(c)}</li>`).join('');

  return `
    <main>
      <h1>${escapeHtml(author.name)}</h1>
      <p><strong>${escapeHtml(author.role)}</strong></p>
      <p>${escapeHtml(author.bio)}</p>
      
      <section>
        <h2>Credentials</h2>
        <ul>${credentialsList}</ul>
      </section>
      
      <section>
        <h2>Areas of Expertise</h2>
        <ul>${expertiseList}</ul>
      </section>
      
      <section>
        <h2>Articles by ${escapeHtml(author.name)}</h2>
        <ul>${authorPosts}</ul>
      </section>
      
      <p><a href="/blog">Back to Blog</a></p>
    </main>
  `;
}

/**
 * Generate Guide Page Content
 */
export function generateGuidePageContent(slug: string): string {
  // Handle guides index page
  if (slug === 'guides' || slug === '') {
    const guidesList = pillars.map(p => `
      <li>
        <h3><a href="${p.hubPage}">${escapeHtml(p.title)} Guide</a></h3>
        <p>${escapeHtml(p.description)}</p>
      </li>
    `).join('');

    return `
      <main>
        <h1>Business Guides & Resources</h1>
        <p>Comprehensive guides on invoicing, getting paid, accounting, tax compliance, freelancing, and business proposals. Expert knowledge to help you run your business better.</p>
        
        <section>
          <h2>Our Guides</h2>
          <ul>${guidesList}</ul>
        </section>
        
        <p><a href="/blog">Visit Our Blog</a> | <a href="/glossary">Browse Glossary</a></p>
      </main>
    `;
  }

  // Get specific pillar
  const pillar = getPillarBySlug(slug);
  if (!pillar) return '';

  // Get cluster posts
  const clusterPostSlugs = getClusterPostsForPillar(pillar.id);
  const clusterPosts = clusterPostSlugs
    .map(s => blogPosts.find(p => p.slug === s))
    .filter(Boolean)
    .slice(0, 15)
    .map(p => `<li><a href="/blog/${p!.slug}">${escapeHtml(p!.title)}</a></li>`)
    .join('');

  // Key topics
  const keyTopics = pillar.keyTopics.map(t => `
    <li>
      <strong>${escapeHtml(t.title)}</strong>: ${escapeHtml(t.description)}
      ${t.link ? `<a href="${t.link}">Learn more</a>` : ''}
    </li>
  `).join('');

  // FAQ
  const faqItems = pillar.faq.map(f => `
    <dt>${escapeHtml(f.question)}</dt>
    <dd>${escapeHtml(f.answer)}</dd>
  `).join('');

  return `
    <main>
      <h1>${escapeHtml(pillar.title)} Guide</h1>
      <p><strong>${escapeHtml(pillar.description)}</strong></p>
      <p>${escapeHtml(pillar.longDescription)}</p>
      
      <section>
        <h2>Key Topics</h2>
        <ul>${keyTopics}</ul>
      </section>
      
      <section>
        <h2>Articles in This Guide</h2>
        <ul>${clusterPosts}</ul>
        <p><a href="${pillar.blogHubPage}">Read the Complete Guide</a></p>
      </section>
      
      <section>
        <h2>Frequently Asked Questions</h2>
        <dl>${faqItems}</dl>
      </section>
      
      <section>
        <h2>Related Product</h2>
        <p><a href="${pillar.targetProduct}">Explore ${escapeHtml(pillar.title)} Features</a></p>
      </section>
      
      <p><a href="/guides">Back to All Guides</a></p>
    </main>
  `;
}

/**
 * Generate Glossary Page Content
 */
export function generateGlossaryContent(): string {
  const termsByCategory: Record<string, typeof glossaryTerms> = {};
  
  glossaryTerms.forEach(term => {
    if (!termsByCategory[term.category]) {
      termsByCategory[term.category] = [];
    }
    termsByCategory[term.category].push(term);
  });

  const categoryLabels: Record<string, string> = {
    invoicing: 'Invoicing Terms',
    payments: 'Payment Terms',
    accounting: 'Accounting Terms',
    tax: 'Tax Terms',
    freelancing: 'Freelancing Terms',
    business: 'Business Terms'
  };

  let categorySections = '';
  for (const [category, terms] of Object.entries(termsByCategory)) {
    const termItems = terms.map(t => `
      <dt id="${t.slug}"><strong>${escapeHtml(t.term)}</strong></dt>
      <dd>
        <p>${escapeHtml(t.definition)}</p>
        ${t.extendedDescription ? `<p>${escapeHtml(t.extendedDescription)}</p>` : ''}
      </dd>
    `).join('');

    categorySections += `
      <section>
        <h2>${categoryLabels[category] || category}</h2>
        <dl>${termItems}</dl>
      </section>
    `;
  }

  return `
    <main>
      <h1>Business Finance Glossary</h1>
      <p>Comprehensive glossary of invoicing, payments, accounting, tax, and business finance terms. Learn key concepts for small business owners, freelancers, and entrepreneurs.</p>
      
      ${categorySections}
      
      <section>
        <h2>Learn More</h2>
        <p><a href="/guides">Explore Our Guides</a> | <a href="/blog">Read Our Blog</a></p>
      </section>
    </main>
  `;
}

/**
 * Generate Static Page Content (About, Contact, Pricing, etc.)
 */
export function generateStaticPageContent(route: string): string {
  const staticContent: Record<string, { title: string; content: string }> = {
    '/about': {
      title: 'About Invoicemonk',
      content: `
        <p>Invoicemonk is an all-in-one business finance platform that helps small businesses, freelancers, and consultants manage their invoicing, expenses, payments, and accounting with ease.</p>
        
        <h2>Our Mission</h2>
        <p>We believe every business deserves professional financial tools without the complexity or high costs. Our mission is to simplify business finance management so you can focus on what you do best.</p>
        
        <h2>Our Story</h2>
        <p>Invoicemonk was founded by entrepreneurs who experienced firsthand the challenges of managing business finances. We built the platform we wished we had—simple, powerful, and compliant with tax regulations worldwide.</p>
        
        <h2>Why Compliance First</h2>
        <p>We understand that businesses operate in different regulatory environments. That's why we've built Invoicemonk to be compliant with tax authorities in Nigeria (FIRS), the UK (HMRC), the US (IRS), Canada (CRA), and Australia (ATO).</p>
        
        <h2>Our Values</h2>
        <ul>
          <li><strong>Simplicity:</strong> Complex problems, simple solutions</li>
          <li><strong>Reliability:</strong> Your finances are too important for downtime</li>
          <li><strong>Transparency:</strong> Clear pricing, no hidden fees</li>
          <li><strong>Support:</strong> Real humans helping real businesses</li>
        </ul>
        
        <p><a href="/contact">Contact Us</a> | <a href="/pricing">View Pricing</a></p>
      `
    },
    '/contact': {
      title: 'Contact Invoicemonk',
      content: `
        <p>We're here to help with your invoicing, accounting, and business finance questions. Get in touch with our team.</p>
        
        <h2>Get Support</h2>
        <p>For product support and questions, reach out to our team. We typically respond within 24 hours on business days.</p>
        
        <h2>Business Inquiries</h2>
        <p>For partnership opportunities, press inquiries, or enterprise sales, contact our business team.</p>
        
        <h2>Self-Service Resources</h2>
        <ul>
          <li><a href="/guides">Guides & Tutorials</a></li>
          <li><a href="/blog">Blog & Articles</a></li>
          <li><a href="/glossary">Business Finance Glossary</a></li>
        </ul>
        
        <p><a href="/">Back to Home</a></p>
      `
    },
    '/pricing': {
      title: 'Invoicemonk Pricing',
      content: `
        <p>Simple, transparent pricing for invoicing and accounting software. Start free, upgrade as you grow.</p>
        
        <h2>Free Forever Plan</h2>
        <p>Get started with unlimited invoicing and essential features at no cost. No credit card required.</p>
        <ul>
          <li>Unlimited invoices</li>
          <li>Client management</li>
          <li>Basic expense tracking</li>
          <li>Payment reminders</li>
        </ul>
        
        <h2>Professional Plans</h2>
        <p>Upgrade for advanced features like payment processing, detailed reporting, and priority support.</p>
        
        <h2>Enterprise</h2>
        <p>Custom solutions for larger businesses with multi-entity support, API access, and dedicated account management.</p>
        
        <p><a href="/contact">Contact Sales</a> | <a href="/why-invoicemonk">Why Invoicemonk?</a></p>
      `
    },
    '/why-invoicemonk': {
      title: 'Why Choose Invoicemonk',
      content: `
        <p>Discover why thousands of businesses choose Invoicemonk for their invoicing and accounting needs.</p>
        
        <h2>Compliance Built In</h2>
        <p>Our platform is designed to meet tax requirements in Nigeria, UK, US, Canada, and Australia. Stay audit-ready without the extra work.</p>
        
        <h2>Get Paid Faster</h2>
        <p>Professional invoices, integrated payments, and automatic reminders help you get paid 14 days faster on average.</p>
        
        <h2>Save Time</h2>
        <p>Automate recurring invoices, expense categorization, and payment reconciliation. Spend less time on admin, more time on growth.</p>
        
        <h2>Trusted by Businesses Worldwide</h2>
        <p>From freelancers to growing companies, businesses trust Invoicemonk for reliable, professional financial management.</p>
        
        <p><a href="/pricing">View Pricing</a> | <a href="/">Get Started Free</a></p>
      `
    },
    '/compliance': {
      title: 'Tax Compliance & Regulatory Features',
      content: `
        <p>Stay compliant with tax regulations in your country. Invoicemonk supports tax authorities worldwide.</p>
        
        <h2>Supported Tax Authorities</h2>
        <ul>
          <li><strong>Nigeria (FIRS):</strong> NRS-compliant invoicing with proper VAT handling</li>
          <li><strong>UK (HMRC):</strong> Making Tax Digital (MTD) compliant</li>
          <li><strong>US (IRS):</strong> Proper tax reporting and documentation</li>
          <li><strong>Canada (CRA):</strong> GST/HST compliant invoicing</li>
          <li><strong>Australia (ATO):</strong> GST-ready invoicing and reporting</li>
        </ul>
        
        <h2>Audit-Ready Records</h2>
        <p>Maintain organized, searchable records that satisfy tax authority requirements. Generate reports for tax filing and audits.</p>
        
        <p><a href="/guides/tax-compliance">Tax Compliance Guide</a> | <a href="/pricing">View Pricing</a></p>
      `
    },
    '/blog': {
      title: 'Business & Finance Blog',
      content: `
        <p>Expert tips and guides on invoicing, accounting, tax compliance, freelancing, and business growth. Learn from industry professionals.</p>
        
        <h2>Popular Topics</h2>
        <ul>
          <li><a href="/blog/complete-guide-to-business-invoicing">Complete Guide to Business Invoicing</a></li>
          <li><a href="/blog/ultimate-guide-getting-paid-faster">Getting Paid Faster</a></li>
          <li><a href="/blog/small-business-accounting-guide">Small Business Accounting</a></li>
          <li><a href="/blog/freelancer-business-guide">Freelancer Success Guide</a></li>
        </ul>
        
        <p><a href="/guides">Explore Our Guides</a> | <a href="/glossary">Browse Glossary</a></p>
      `
    },
    '/explore': {
      title: 'Explore Topics & Reviews',
      content: `
        <p>Explore our comprehensive topic guides, read customer reviews, and discover resources to grow your business.</p>
        
        <h2>Topic Areas</h2>
        <ul>
          <li><a href="/guides/invoicing">Invoicing Mastery</a></li>
          <li><a href="/guides/getting-paid">Getting Paid Faster</a></li>
          <li><a href="/guides/business-finances">Business Finances</a></li>
          <li><a href="/guides/tax-compliance">Tax Compliance</a></li>
          <li><a href="/guides/freelancing">Freelancer Success</a></li>
          <li><a href="/guides/estimates">Estimates & Proposals</a></li>
        </ul>
        
        <p><a href="/blog">Read Our Blog</a> | <a href="/glossary">Browse Glossary</a></p>
      `
    },
    '/developer': {
      title: 'Developer API',
      content: `
        <p>Integrate Invoicemonk into your applications with our developer API. Full documentation and SDKs available.</p>
        
        <h2>API Features</h2>
        <ul>
          <li>RESTful API architecture</li>
          <li>Comprehensive documentation</li>
          <li>SDKs for popular languages</li>
          <li>Webhook integrations</li>
          <li>Sandbox environment for testing</li>
        </ul>
        
        <p><a href="/contact">Contact Developer Support</a></p>
      `
    },
    '/free-invoice-generator': {
      title: 'Free Invoice Generator',
      content: `
        <p>Create professional invoices for free. No signup required. Download PDF invoices instantly.</p>
        
        <h2>Features</h2>
        <ul>
          <li>Professional invoice templates</li>
          <li>Add your logo and branding</li>
          <li>Multiple currency support</li>
          <li>Tax calculation included</li>
          <li>Download as PDF</li>
          <li>No account required</li>
        </ul>
        
        <p>For more features, <a href="/pricing">create a free Invoicemonk account</a>.</p>
      `
    },
    '/features/client-management': {
      title: 'Client Management Software',
      content: `
        <p>Manage client information, track payment history, and build better relationships with Invoicemonk client management.</p>
        
        <h2>Features</h2>
        <ul>
          <li>Centralized client database</li>
          <li>Payment history tracking</li>
          <li>Contact management</li>
          <li>Invoice history by client</li>
          <li>Client communication log</li>
          <li>Custom fields and notes</li>
        </ul>
        
        <p><a href="/invoicing">Explore Invoicing</a> | <a href="/pricing">View Pricing</a></p>
      `
    }
  };

  const page = staticContent[route];
  if (!page) return '';

  return `
    <main>
      <h1>${escapeHtml(page.title)}</h1>
      ${page.content}
    </main>
  `;
}

/**
 * Generate Legal Page Content
 */
export function generateLegalPageContent(route: string): string {
  const legalContent: Record<string, { title: string; summary: string }> = {
    '/privacy-policy': {
      title: 'Privacy Policy',
      summary: 'Learn how Invoicemonk protects your data and respects your privacy. We are committed to keeping your information secure and being transparent about our data practices. This policy explains what data we collect, how we use it, and your rights regarding your personal information.'
    },
    '/terms-of-service': {
      title: 'Terms of Service',
      summary: 'Read the Invoicemonk terms of service. These terms govern your use of our platform, including account creation, acceptable use, billing, and limitations of liability. By using Invoicemonk, you agree to these terms.'
    },
    '/cookie-policy': {
      title: 'Cookie Policy',
      summary: 'Learn how Invoicemonk uses cookies and similar technologies. We use cookies to improve your experience, remember your preferences, and analyze how our platform is used. You can manage your cookie preferences at any time.'
    }
  };

  const page = legalContent[route];
  if (!page) return '';

  return `
    <main>
      <h1>${escapeHtml(page.title)}</h1>
      <p>${escapeHtml(page.summary)}</p>
      <p>Please enable JavaScript to view the full ${page.title.toLowerCase()}.</p>
      <p><a href="/">Back to Home</a> | <a href="/contact">Contact Us</a></p>
    </main>
  `;
}

/**
 * Main content generator - routes to appropriate generator based on path
 */
export function generateContentForRoute(route: string): string {
  // Homepage
  if (route === '/') {
    return generateHomepageContent();
  }

  // Blog posts
  if (route.startsWith('/blog/author/')) {
    const slug = route.replace('/blog/author/', '');
    return generateAuthorPageContent(slug);
  }

  if (route.startsWith('/blog/') && route !== '/blog') {
    const slug = route.replace('/blog/', '');
    return generateBlogPostContent(slug);
  }

  // Guides
  if (route.startsWith('/guides/') && route !== '/guides') {
    const slug = route.replace('/guides/', '');
    return generateGuidePageContent(slug);
  }

  if (route === '/guides') {
    return generateGuidePageContent('');
  }

  // Glossary
  if (route === '/glossary') {
    return generateGlossaryContent();
  }

  // Product pages
  if (['/invoicing', '/expenses', '/payments', '/accounting', '/estimates', '/receipts'].includes(route)) {
    return generateProductPageContent(route);
  }

  // Audience pages
  if (['/freelancers', '/consultants', '/contractors', '/small-businesses'].includes(route)) {
    return generateAudiencePageContent(route);
  }

  // Legal pages
  if (['/privacy-policy', '/terms-of-service', '/cookie-policy'].includes(route)) {
    return generateLegalPageContent(route);
  }

  // Static pages (about, contact, pricing, etc.)
  const staticRoutes = ['/about', '/contact', '/pricing', '/why-invoicemonk', '/compliance', '/blog', '/explore', '/developer', '/free-invoice-generator', '/features/client-management'];
  if (staticRoutes.includes(route)) {
    return generateStaticPageContent(route);
  }

  // Fallback - return empty string for unknown routes
  return '';
}
