#!/usr/bin/env python3
import re
from pathlib import Path

files = [
    'src/app/invoicing/InvoicingContent.tsx',
    'src/app/compliance/ComplianceContent.tsx',
]

for file_path in files:
    filepath = Path(file_path)
    if not filepath.exists():
        continue
    
    content = filepath.read_text()
    
    # Fix compliance.authority -> compliance?.authority
    content = re.sub(r'compliance\.([a-zA-Z_][a-zA-Z0-9_]*)', r'compliance?.\1', content)
    
    filepath.write_text(content)
    print(f"✓ Fixed: {filepath.name}")

print("\n✅ Compliance property access fixed!")
