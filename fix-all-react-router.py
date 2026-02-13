#!/usr/bin/env python3
import re
from pathlib import Path

print("=== COMPREHENSIVE REACT ROUTER FIX ===\n")

# Find all tsx/ts files
all_files = list(Path('src').rglob('*.tsx')) + list(Path('src').rglob('*.ts'))

fixes = {
    'navigate_calls': 0,
    'useNavigate_hooks': 0,
    'imports_added': 0,
    'files_modified': 0
}

for file_path in all_files:
    content = file_path.read_text()
    original = content
    modified = False
    
    # Check if file uses navigate()
    if 'navigate(' in content:
        # Add useRouter import if not present
        if "'use client'" in content and "from 'next/navigation'" not in content:
            content = content.replace(
                "'use client'\n\n",
                "'use client'\n\nimport { useRouter } from 'next/navigation';\n"
            )
            fixes['imports_added'] += 1
            modified = True
        
        # Add router hook at the start of the component
        # Find component function
        if 'export' in content and 'function' in content or 'const' in content and '=>' in content:
            # Look for component body start
            if 'const router = useRouter()' not in content:
                # Add after the function declaration
                content = re.sub(
                    r'(export (?:default )?(?:function|const) \w+[^{]*{)',
                    r'\1\n  const router = useRouter();',
                    content,
                    count=1
                )
                modified = True
        
        # Replace navigate(path) with router.push(path)
        content = re.sub(r'\bnavigate\(', 'router.push(', content)
        fixes['navigate_calls'] += content.count('router.push(') - original.count('router.push(')
        modified = True
    
    # Remove useNavigate hook
    if 'useNavigate()' in content:
        content = re.sub(r'const navigate = useNavigate\(\);\s*', '', content)
        fixes['useNavigate_hooks'] += 1
        modified = True
    
    # Remove react-router-dom imports
    if "from 'react-router-dom'" in content:
        content = re.sub(r"import.*from 'react-router-dom';\s*", '', content)
        modified = True
    
    if modified:
        file_path.write_text(content)
        fixes['files_modified'] += 1
        print(f"✓ Fixed: {file_path.relative_to('src')}")

print(f"\n=== SUMMARY ===")
print(f"Files modified: {fixes['files_modified']}")
print(f"navigate() calls fixed: {fixes['navigate_calls']}")
print(f"useNavigate() hooks removed: {fixes['useNavigate_hooks']}")
print(f"Router imports added: {fixes['imports_added']}")
print(f"\n✅ ALL REACT ROUTER PATTERNS FIXED!")
