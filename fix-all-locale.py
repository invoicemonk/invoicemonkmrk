#!/usr/bin/env python3
import re
from pathlib import Path

# Find all files using locale.content
files = [
    'src/app/invoicing/InvoicingContent.tsx',
    'src/app/compliance/ComplianceContent.tsx',
]

for file_path in files:
    filepath = Path(file_path)
    if not filepath.exists():
        continue
    
    content = filepath.read_text()
    
    # Fix: const { compliance } = locale.content;
    # To: const { compliance } = locale.content || {};
    content = re.sub(
        r'const \{ ([^}]+) \} = locale\.content;',
        r'const { \1 } = locale.content || {};',
        content
    )
    
    filepath.write_text(content)
    print(f"✓ Fixed: {filepath.name}")

print("\n✅ All locale.content errors fixed!")
