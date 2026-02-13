#!/usr/bin/env python3
from pathlib import Path
import re

print("Fixing all (compliance as any) patterns...\n")

for file_path in list(Path('src').rglob('*.ts')) + list(Path('src').rglob('*.tsx')):
    content = file_path.read_text()
    original = content
    
    # These are literal strings that got broken - restore them
    content = content.replace('(compliance as any)', 'compliance')
    
    if content != original:
        file_path.write_text(content)
        print(f"✓ Fixed: {file_path.relative_to('src')}")

print("\n✅ All (compliance as any) literal strings fixed!")
