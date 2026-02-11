#!/usr/bin/env python3
import os
from pathlib import Path

GUIDES = {
    'GuidesIndex': {
        'route': '/guides',
        'title': 'Business Guides - Comprehensive Resources',
        'description': 'Expert guides on invoicing, accounting, and business management.',
    },
    'InvoicingGuide': {
        'route': '/guides/invoicing',
        'title': 'Complete Invoicing Guide - Best Practices',
        'description': 'Everything you need to know about professional invoicing.',
    },
    'GettingPaidGuide': {
        'route': '/guides/getting-paid',
        'title': 'Getting Paid Faster - Payment Collection Guide',
        'description': 'Strategies to get paid faster and improve cash flow.',
    },
    'BusinessFinancesGuide': {
        'route': '/guides/business-finances',
        'title': 'Business Finances Guide - Financial Management',
        'description': 'Master your business finances and accounting.',
    },
    'TaxComplianceGuide': {
        'route': '/guides/tax-compliance',
        'title': 'Tax Compliance Guide - Stay Compliant',
        'description': 'Navigate tax compliance for your business.',
    },
    'FreelancingGuide': {
        'route': '/guides/freelancing',
        'title': 'Freelancing Guide - Build Your Business',
        'description': 'Complete guide to freelancing success.',
    },
    'EstimatesGuide': {
        'route': '/guides/estimates',
        'title': 'Estimates & Proposals Guide',
        'description': 'Create winning estimates and proposals.',
    },
}

source_dir = Path('/home/claude/invoicemonk-nextjs/src/pages-original/guides')
target_dir = Path('/home/claude/invoicemonk-nextjs/src/app/guides')

for component_name, config in GUIDES.items():
    source_file = source_dir / f'{component_name}.tsx'
    
    if not source_file.exists():
        print(f"Warning: {source_file} not found, skipping...")
        continue
    
    route = config['route'].replace('/guides/', '').replace('/guides', '')
    if route:
        page_dir = target_dir / route
    else:
        page_dir = target_dir
    
    page_dir.mkdir(parents=True, exist_ok=True)
    
    page_content = f"""import type {{ Metadata }} from 'next'
import {{ {component_name}Content }} from './{component_name}Content'

export const metadata: Metadata = {{
  title: '{config['title']}',
  description: '{config['description']}',
  alternates: {{
    canonical: 'https://invoicemonk.com{config['route']}',
  }},
  openGraph: {{
    title: '{config['title']} | InvoiceMonk',
    description: '{config['description']}',
    url: 'https://invoicemonk.com{config['route']}',
    type: 'article',
  }},
}}

export default function {component_name}Page() {{
  return <{component_name}Content />
}}
"""
    
    # Read and convert content
    content = source_file.read_text()
    content = content.replace("from 'react-router-dom'", "from 'next/link'")
    content = content.replace('<Link to=', '<Link href=')
    content = content.replace("import { Link }", "import Link")
    content = content.replace(f'export default {component_name}', '')
    content = content.replace(f'const {component_name} = () => {{', f'export function {component_name}Content() {{')
    
    if any(x in content for x in ['useState', 'useEffect', 'motion', 'onClick']):
        content = "'use client'\n\n" + content
    
    (page_dir / 'page.tsx').write_text(page_content)
    (page_dir / f'{component_name}Content.tsx').write_text(content)
    
    print(f"✓ Created {config['route']}")

print("\nGuide pages generated!")
