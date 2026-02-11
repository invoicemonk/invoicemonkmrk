#!/usr/bin/env python3
"""
Automated Next.js Page Generator for InvoiceMonk Migration
Converts React Router pages to Next.js App Router pages
"""

import os
import re
from pathlib import Path

# Page configurations
PAGES = {
    'Invoicing': {
        'route': '/invoicing',
        'title': 'Invoicing Software - Create Professional Invoices Fast',
        'description': 'Professional invoicing software for small businesses and freelancers. Create, send, and track invoices in minutes.',
        'keywords': ['invoicing software', 'invoice generator', 'online invoicing'],
    },
    'Expenses': {
        'route': '/expenses',
        'title': 'Expense Tracking Software - Manage Business Expenses',
        'description': 'Track business expenses, scan receipts, and stay organized for your business.',
        'keywords': ['expense tracking', 'receipt scanner', 'business expenses'],
    },
    'Payments': {
        'route': '/payments',
        'title': 'Payment Processing - Accept Payments Online',
        'description': 'Accept online payments, send payment links, and get paid faster.',
        'keywords': ['payment processing', 'online payments', 'payment links'],
    },
    'Accounting': {
        'route': '/accounting',
        'title': 'Accounting Software - Simple Business Accounting',
        'description': 'Easy accounting software for small businesses with financial reports.',
        'keywords': ['accounting software', 'small business accounting'],
    },
    'Estimates': {
        'route': '/estimates',
        'title': 'Estimates & Quotes - Create Professional Estimates',
        'description': 'Create professional estimates and quotes. Convert to invoices instantly.',
        'keywords': ['estimate software', 'quote generator'],
    },
    'Receipts': {
        'route': '/receipts',
        'title': 'Receipt Management - Digital Receipt Organization',
        'description': 'Scan, organize, and manage receipts digitally.',
        'keywords': ['receipt management', 'receipt scanner'],
    },
    'Pricing': {
        'route': '/pricing',
        'title': 'Pricing - Affordable Plans for Every Business',
        'description': 'Simple, transparent pricing. Free tier available.',
        'keywords': ['pricing', 'plans', 'subscription'],
    },
    'WhyInvoicemonk': {
        'route': '/why-invoicemonk',
        'title': 'Why InvoiceMonk - Features & Benefits',
        'description': 'Discover why thousands trust InvoiceMonk.',
        'keywords': ['features', 'benefits'],
    },
    'Compliance': {
        'route': '/compliance',
        'title': 'Tax Compliance - Stay Compliant Worldwide',
        'description': 'Built-in tax compliance for multiple countries.',
        'keywords': ['tax compliance', 'regulations'],
    },
    'About': {
        'route': '/about',
        'title': 'About Us - Our Mission and Team',
        'description': 'Learn about InvoiceMonk\'s mission.',
        'keywords': ['about', 'team', 'mission'],
    },
    'Contact': {
        'route': '/contact',
        'title': 'Contact Us - Get in Touch',
        'description': 'Get in touch with our support team.',
        'keywords': ['contact', 'support'],
    },
    'Freelancers': {
        'route': '/freelancers',
        'title': 'Invoicing for Freelancers - Get Paid Faster',
        'description': 'Software built for freelancers.',
        'keywords': ['freelance invoicing'],
    },
    'Consultants': {
        'route': '/consultants',
        'title': 'Invoicing for Consultants - Professional Billing',
        'description': 'Professional invoicing for consultants.',
        'keywords': ['consultant invoicing'],
    },
    'Contractors': {
        'route': '/contractors',
        'title': 'Invoicing for Contractors - Job-Based Billing',
        'description': 'Software for contractors.',
        'keywords': ['contractor invoicing'],
    },
    'SmallBusinesses': {
        'route': '/small-businesses',
        'title': 'Small Business Software - All-in-One Solution',
        'description': 'Complete solution for small businesses.',
        'keywords': ['small business software'],
    },
    'Developer': {
        'route': '/developer',
        'title': 'API & Developer Resources',
        'description': 'API documentation and developer resources.',
        'keywords': ['api', 'developer'],
    },
    'FreeInvoiceGenerator': {
        'route': '/free-invoice-generator',
        'title': 'Free Invoice Generator - Create Invoices Online',
        'description': 'Free online invoice generator.',
        'keywords': ['free invoice generator'],
    },
    'Glossary': {
        'route': '/glossary',
        'title': 'Business & Accounting Glossary',
        'description': 'Glossary of business and accounting terms.',
        'keywords': ['glossary', 'business terms'],
    },
    'Explore': {
        'route': '/explore',
        'title': 'Explore Topics - Business Resources',
        'description': 'Explore guides and resources.',
        'keywords': ['resources', 'guides'],
    },
    'PrivacyPolicy': {
        'route': '/privacy-policy',
        'title': 'Privacy Policy',
        'description': 'Privacy policy and data protection.',
        'keywords': ['privacy'],
    },
    'TermsOfService': {
        'route': '/terms-of-service',
        'title': 'Terms of Service',
        'description': 'Terms of service and user agreement.',
        'keywords': ['terms'],
    },
    'CookiePolicy': {
        'route': '/cookie-policy',
        'title': 'Cookie Policy',
        'description': 'Cookie policy and usage.',
        'keywords': ['cookies'],
    },
}

def needs_client_directive(content):
    """Check if component needs 'use client' directive"""
    client_indicators = [
        'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef',
        'onClick', 'onChange', 'onSubmit', 'onBlur', 'onFocus',
        'motion.', 'framer-motion', 'useLocale', 'useParams'
    ]
    return any(indicator in content for indicator in client_indicators)

def convert_imports(content):
    """Convert React Router imports to Next.js"""
    # Link component
    content = re.sub(
        r"import \{ Link \} from ['\"]react-router-dom['\"]",
        "import Link from 'next/link'",
        content
    )
    # useParams, useNavigate, etc.
    content = re.sub(
        r"import \{[^}]*\} from ['\"]react-router-dom['\"]",
        "// Router hooks removed - use Next.js params instead",
        content
    )
    return content

def convert_links(content):
    """Convert Link 'to' props to 'href'"""
    content = re.sub(r'<Link to=', '<Link href=', content)
    return content

def create_page_file(component_name, config):
    """Generate page.tsx file"""
    route = config['route']
    keywords = ', '.join([f"'{k}'" for k in config['keywords']])
    
    return f"""import type {{ Metadata }} from 'next'
import {{ {component_name}Content }} from './{component_name}Content'

export const metadata: Metadata = {{
  title: '{config['title']}',
  description: '{config['description']}',
  keywords: [{keywords}],
  alternates: {{
    canonical: 'https://invoicemonk.com{route}',
  }},
  openGraph: {{
    title: '{config['title']} | InvoiceMonk',
    description: '{config['description']}',
    url: 'https://invoicemonk.com{route}',
    type: 'website',
  }},
}}

export default function {component_name}Page() {{
  return <{component_name}Content />
}}
"""

def process_page(source_file, component_name, config):
    """Process a single page file"""
    print(f"Processing {component_name}...")
    
    with open(source_file, 'r') as f:
        content = f.read()
    
    # Convert imports
    content = convert_imports(content)
    content = convert_links(content)
    
    # Remove default export
    content = re.sub(r'export default \w+;?\s*$', '', content)
    
    # Convert component declaration to named export
    content = re.sub(
        rf'const {component_name} = \(\) => {{',
        f'export function {component_name}Content() {{',
        content
    )
    content = re.sub(
        rf'const {component_name} = \(\) => \(',
        f'export function {component_name}Content() {{\n  return (',
        content
    )
    
    # Add 'use client' if needed
    if needs_client_directive(content):
        content = "'use client'\n\n" + content
    
    # Create page.tsx
    page_content = create_page_file(component_name, config)
    
    return page_content, content

def main():
    """Main conversion function"""
    source_dir = Path('/home/claude/invoicemonk-nextjs/src/pages-original')
    target_dir = Path('/home/claude/invoicemonk-nextjs/src/app')
    
    for component_name, config in PAGES.items():
        source_file = source_dir / f'{component_name}.tsx'
        
        if not source_file.exists():
            print(f"Warning: {source_file} not found, skipping...")
            continue
        
        # Create target directory
        route = config['route'].strip('/')
        page_dir = target_dir / route
        page_dir.mkdir(parents=True, exist_ok=True)
        
        try:
            # Process the page
            page_content, content_component = process_page(
                source_file, component_name, config
            )
            
            # Write files
            (page_dir / 'page.tsx').write_text(page_content)
            (page_dir / f'{component_name}Content.tsx').write_text(content_component)
            
            print(f"✓ Created {route}")
        except Exception as e:
            print(f"✗ Error processing {component_name}: {e}")
    
    print("\nDone! All pages converted.")

if __name__ == '__main__':
    main()
