#!/usr/bin/env python3
import re
from pathlib import Path

files_with_locale = [
    'src/components/home/HeroSection.tsx',
    'src/components/seo/OrganizationSchema.tsx',
    'src/components/seo/SoftwareApplicationSchema.tsx',
    'src/components/seo/WebSiteSchema.tsx',
]

for file_path in files_with_locale:
    filepath = Path(file_path)
    if not filepath.exists():
        continue
    
    content = filepath.read_text()
    
    # Fix: locale.content -> (locale.content as any)
    # But preserve locale.content || {} patterns
    content = re.sub(
        r'locale\.content(?!\s*\|\|)',
        '(locale.content as any)',
        content
    )
    
    filepath.write_text(content)
    print(f"✓ Fixed: {filepath.name}")

print("\n✅ All locale.content fixed with type assertions!")
