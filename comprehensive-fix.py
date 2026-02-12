#!/usr/bin/env python3
import re
from pathlib import Path

print("=== COMPREHENSIVE FIX FOR ALL ISSUES ===\n")

# Issue 1: Remove index.ts files that export default when components use named exports
print("1. Removing conflicting index files...")
index_files = list(Path('src/app/guides').rglob('index.ts'))
for idx_file in index_files:
    idx_file.unlink()
    print(f"   ✓ Removed: {idx_file}")

# Issue 2: Find all files with missing imports
print("\n2. Checking for missing imports...")
tsx_files = list(Path('src/app').rglob('*.tsx'))

for tsx_file in tsx_files:
    content = tsx_file.read_text()
    modified = False
    
    # Check for Link usage without import
    if ('<Link ' in content or '<Link>' in content) and "import Link from 'next/link'" not in content and "from 'next/link'" not in content:
        # Add Link import
        content = re.sub(
            r"('use client'\n\n)",
            r"\1import Link from 'next/link';\n",
            content
        )
        modified = True
        print(f"   ✓ Added Link import: {tsx_file.name}")
    
    # Check for useLocale usage without import
    if 'useLocale()' in content and "from '@/hooks/useLocale'" not in content:
        # Add useLocale import after other imports
        lines = content.split('\n')
        for i, line in enumerate(lines):
            if line.startswith('import ') and 'from' in line:
                # Insert after last import
                continue
        content = re.sub(
            r"(import .* from ['\"][^'\"]+['\"];)",
            r"\1\nimport { useLocale } from '@/hooks/useLocale';",
            content,
            count=1
        )
        modified = True
        print(f"   ✓ Added useLocale import: {tsx_file.name}")
    
    # Fix React Router Link props: to= -> href=
    if ' to=' in content and '<Link' in content:
        content = re.sub(r'<Link([^>]*)\s+to=', r'<Link\1 href=', content)
        modified = True
        print(f"   ✓ Fixed Link to= props: {tsx_file.name}")
    
    if modified:
        tsx_file.write_text(content)

# Issue 3: Fix any remaining export issues
print("\n3. Checking export consistency...")
for tsx_file in Path('src/app').rglob('*Content.tsx'):
    content = tsx_file.read_text()
    expected_name = tsx_file.stem
    
    # Remove any trailing export const lines
    if re.search(rf'export const {expected_name} = \w+;', content):
        content = re.sub(rf'\nexport const {expected_name} = \w+;\s*$', '', content)
        tsx_file.write_text(content)
        print(f"   ✓ Removed duplicate export: {tsx_file.name}")

print("\n✅ COMPREHENSIVE FIX COMPLETE!")
