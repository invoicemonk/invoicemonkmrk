#!/usr/bin/env python3
import re
from pathlib import Path

# Files with duplicate exports
files_to_fix = [
    'src/app/guides/GuidesIndexContent.tsx',
    'src/app/guides/business-finances/BusinessFinancesGuideContent.tsx',
    'src/app/guides/estimates/EstimatesGuideContent.tsx',
    'src/app/guides/freelancing/FreelancingGuideContent.tsx',
    'src/app/guides/getting-paid/GettingPaidGuideContent.tsx',
    'src/app/guides/invoicing/InvoicingGuideContent.tsx',
    'src/app/guides/tax-compliance/TaxComplianceGuideContent.tsx',
]

for file_path in files_to_fix:
    filepath = Path(file_path)
    if not filepath.exists():
        print(f"⚠️  {file_path} not found")
        continue
    
    content = filepath.read_text()
    
    # Remove lines like: export const XxxContent = OldName;
    # Pattern: export const GuidesIndexContent = GuidesIndex;
    content = re.sub(
        r'\nexport const \w+Content = \w+;?\s*$',
        '',
        content
    )
    
    filepath.write_text(content)
    print(f"✓ Fixed: {filepath.name}")

print("\n✅ All duplicate exports removed!")
