#!/usr/bin/env python3
import re
from pathlib import Path

print("Fixing broken type assertions...\n")

for file_path in Path('src').rglob('*.ts*'):
    content = file_path.read_text()
    original = content
    
    # Fix pattern: (locale.pricing as any)Content -> (locale.pricing as any).Content
    content = re.sub(
        r'\(locale\.pricing as any\)([A-Z])',
        r'(locale.pricing as any).\1',
        content
    )
    
    # Fix pattern: (locale.content as any)seo -> (locale.content as any).seo
    content = re.sub(
        r'\(locale\.content as any\)([a-z])',
        r'(locale.content as any).\1',
        content
    )
    
    # Fix pattern: (pricingContent as any)annual -> (pricingContent as any).annual
    content = re.sub(
        r'\(pricingContent as any\)([a-z])',
        r'(pricingContent as any).\1',
        content
    )
    
    # Fix pattern: (compliance as any)authority -> (compliance as any).authority
    content = re.sub(
        r'\(compliance as any\)([a-z])',
        r'(compliance as any).\1',
        content
    )
    
    if content != original:
        file_path.write_text(content)
        print(f"✓ Fixed: {file_path.relative_to('src')}")

print("\n✅ All broken replacements fixed!")
