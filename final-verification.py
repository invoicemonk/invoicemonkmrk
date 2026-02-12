#!/usr/bin/env python3
import re
from pathlib import Path

print("=== FINAL COMPREHENSIVE VERIFICATION ===\n")

errors = []
warnings = []

# Check 1: Export/Import consistency
print("1. Checking exports and imports...")
for page_file in Path('src/app').rglob('page.tsx'):
    content = page_file.read_text()
    
    # Find imports from local Content files
    imports = re.findall(r"import\s*{\s*([^}]+)\s*}\s*from\s*['\"]\.\/([^'\"]+)['\"]", content)
    
    for import_names, import_file in imports:
        import_names = [n.strip() for n in import_names.split(',')]
        content_file = page_file.parent / f"{import_file}.tsx"
        
        if content_file.exists():
            content_text = content_file.read_text()
            for import_name in import_names:
                if f"export function {import_name}" not in content_text and f"export default function {import_name}" not in content_text:
                    errors.append(f"❌ {page_file.relative_to('src/app')}: Imports '{import_name}' but {import_file}.tsx doesn't export it")

# Check 2: Missing imports
print("2. Checking for missing imports...")
for tsx_file in Path('src/app').rglob('*.tsx'):
    content = tsx_file.read_text()
    
    # Check Link usage
    if ('<Link ' in content or '<Link>' in content) and "from 'next/link'" not in content:
        errors.append(f"❌ {tsx_file.name}: Uses <Link> but missing import")
    
    # Check useLocale
    if 'useLocale()' in content and "from '@/hooks/useLocale'" not in content:
        errors.append(f"❌ {tsx_file.name}: Uses useLocale() but missing import")
    
    # Check useSearchParams
    if 'useSearchParams()' in content and "from 'next/navigation'" not in content:
        errors.append(f"❌ {tsx_file.name}: Uses useSearchParams() but missing import")

# Check 3: React Router syntax
print("3. Checking for React Router syntax...")
for tsx_file in Path('src/app').rglob('*.tsx'):
    content = tsx_file.read_text()
    
    if '<Link ' in content and ' to=' in content:
        warnings.append(f"⚠️  {tsx_file.name}: Has <Link to=, should be href=")

# Check 4: Duplicate exports
print("4. Checking for duplicate exports...")
for tsx_file in Path('src/app').rglob('*Content.tsx'):
    content = tsx_file.read_text()
    name = tsx_file.stem
    
    # Count exports of the same name
    exports = re.findall(rf'export (?:function|const) {name}', content)
    if len(exports) > 1:
        errors.append(f"❌ {tsx_file.name}: Duplicate export of {name}")

# Check 5: Index files with default exports
print("5. Checking for problematic index files...")
for idx_file in Path('src/app').rglob('index.ts'):
    content = idx_file.read_text()
    if 'export { default' in content:
        errors.append(f"❌ {idx_file}: Trying to re-export default but components use named exports")

print("\n" + "="*50)
if errors:
    print(f"\n❌ FOUND {len(errors)} ERRORS:\n")
    for error in errors:
        print(error)
else:
    print("\n✅ NO ERRORS FOUND!")

if warnings:
    print(f"\n⚠️  FOUND {len(warnings)} WARNINGS:\n")
    for warning in warnings:
        print(warning)

print("\n" + "="*50)

if not errors and not warnings:
    print("\n🎉 ALL CHECKS PASSED - READY TO BUILD!")
    exit(0)
else:
    exit(1)

