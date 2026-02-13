#!/usr/bin/env python3
from pathlib import Path
import re

print("=== ABSOLUTE FINAL COMPREHENSIVE SCAN ===\n")

all_issues = {}

for file_path in list(Path('src').rglob('*.ts')) + list(Path('src').rglob('*.tsx')):
    content = file_path.read_text()
    rel_path = str(file_path.relative_to('src'))
    
    # 1. Vite patterns
    if 'import.meta' in content:
        all_issues.setdefault('import.meta', []).append(rel_path)
    
    # 2. React Router
    if "from 'react-router-dom'" in content:
        all_issues.setdefault('react-router-dom', []).append(rel_path)
    
    # 3. React Helmet
    if "from 'react-helmet" in content:
        all_issues.setdefault('react-helmet', []).append(rel_path)
    
    # 4. Link with to=
    if re.search(r'<Link[^>]+\s+to=', content):
        all_issues.setdefault('Link to=', []).append(rel_path)
    
    # 5. navigate() without router
    if re.search(r'\bnavigate\(', content) and 'router.push' not in content and 'useRouter' not in content:
        all_issues.setdefault('navigate() call', []).append(rel_path)
    
    # 6. useNavigate without Next.js
    if 'useNavigate()' in content and "from 'next/navigation'" not in content:
        all_issues.setdefault('useNavigate', []).append(rel_path)
    
    # 7. useLocation without Next.js
    if 'useLocation()' in content and "from 'next/navigation'" not in content:
        all_issues.setdefault('useLocation', []).append(rel_path)
    
    # 8. Broken type casts
    if re.search(r'\([^)]+as any\)[A-Z]\w+', content):
        all_issues.setdefault('Missing dot after cast', []).append(rel_path)
    
    # 9. (compliance as any) in strings
    if '(compliance as any)' in content:
        all_issues.setdefault('Broken compliance string', []).append(rel_path)

total = sum(len(files) for files in all_issues.values())

if total > 0:
    print(f"❌ FOUND {total} ISSUES:\n")
    for issue_type, files in sorted(all_issues.items()):
        print(f"{issue_type}: {len(files)} files")
        for f in files[:5]:  # Show first 5
            print(f"  - {f}")
        if len(files) > 5:
            print(f"  ... and {len(files) - 5} more")
        print()
else:
    print("✅ NO ISSUES FOUND - BUILD SHOULD SUCCEED!")

