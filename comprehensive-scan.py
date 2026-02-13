#!/usr/bin/env python3
import re
from pathlib import Path
from collections import defaultdict

print("=== COMPREHENSIVE BUILD ERROR SCAN ===\n")

issues = defaultdict(list)

# Scan all TypeScript files
for tsx_file in Path('src').rglob('*.tsx'):
    content = tsx_file.read_text()
    rel_path = str(tsx_file.relative_to('src'))
    
    # 1. React Router imports/usage
    if "from 'react-router-dom'" in content:
        issues['react-router-dom'].append(rel_path)
    
    if 'useNavigate()' in content and "from 'next/navigation'" not in content:
        issues['useNavigate'].append(rel_path)
    
    if 'useLocation()' in content and "from 'next/navigation'" not in content:
        issues['useLocation'].append(rel_path)
    
    # 2. React Helmet
    if "from 'react-helmet" in content:
        issues['react-helmet'].append(rel_path)
    
    # 3. Link with to= instead of href=
    if re.search(r'<Link[^>]+\s+to=', content):
        issues['link-to-prop'].append(rel_path)
    
    # 4. navigate() calls without router
    if re.search(r'\bnavigate\(', content) and 'router.push' not in content and 'useRouter' not in content:
        issues['navigate-call'].append(rel_path)
    
    # 5. import.meta.env
    if 'import.meta.env' in content:
        issues['import-meta-env'].append(rel_path)
    
    # 6. Unsafe property access on locale
    if re.search(r'locale\.(content|pricing)\.', content) and 'as any' not in content:
        issues['unsafe-locale'].append(rel_path)
    
    # 7. Missing exports
    if 'Content.tsx' in rel_path:
        name = tsx_file.stem
        if f'export function {name}' not in content and f'export default' not in content:
            issues['missing-export'].append(rel_path)

# Print results
total = 0
for category, files in sorted(issues.items()):
    if files:
        print(f"\n{category.upper()} ({len(files)} files):")
        for f in files[:10]:  # Show first 10
            print(f"  - {f}")
        if len(files) > 10:
            print(f"  ... and {len(files) - 10} more")
        total += len(files)

if total == 0:
    print("\n✅ NO OBVIOUS ISSUES FOUND!")
else:
    print(f"\n⚠️  TOTAL: {total} issues across {len(issues)} categories")

