#!/usr/bin/env python3
import re
from pathlib import Path

# Files with locale.pricing issues
files_to_fix = [
    'src/app/invoicing/InvoicingContent.tsx',
    'src/app/payments/PaymentsContent.tsx',
]

for file_path in files_to_fix:
    filepath = Path(file_path)
    if not filepath.exists():
        continue
    
    content = filepath.read_text()
    
    # Fix: locale.pricing.starter -> (locale.pricing?.starter || 0)
    # Fix: locale.pricing.business -> (locale.pricing?.business || 0)
    
    content = re.sub(
        r'locale\.pricing\.starter',
        '(locale.pricing?.starter || 0)',
        content
    )
    
    content = re.sub(
        r'locale\.pricing\.business',
        '(locale.pricing?.business || 0)',
        content
    )
    
    filepath.write_text(content)
    print(f"✓ Fixed: {filepath.name}")

print("\n✅ Locale type errors fixed!")
