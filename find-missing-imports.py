#!/usr/bin/env python3
import re
from pathlib import Path

# Find all tsx files
tsx_files = list(Path('src/app').rglob('*.tsx'))

issues = []

for tsx_file in tsx_files:
    content = tsx_file.read_text()
    
    # Check for useLocale usage without import
    if 'useLocale()' in content and "from '@/hooks/useLocale'" not in content:
        issues.append(f"❌ {tsx_file}: Uses useLocale() but missing import")
    
    # Check for useState usage without import
    if 'useState(' in content and "'use client'" in content and "from 'react'" not in content:
        issues.append(f"⚠️  {tsx_file}: Uses useState() but missing React import")
    
    # Check for motion usage without import
    if 'motion.' in content and "from 'framer-motion'" not in content:
        issues.append(f"❌ {tsx_file}: Uses motion but missing framer-motion import")

if issues:
    print("MISSING IMPORTS FOUND:\n")
    for issue in issues:
        print(issue)
    print(f"\n❌ Total: {len(issues)} issues")
else:
    print("✅ No missing imports found!")

