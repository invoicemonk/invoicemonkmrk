#!/usr/bin/env python3
from pathlib import Path

file_path = Path('src/app/glossary/GlossaryContent.tsx')
content = file_path.read_text()

# Fix the useSearchParams destructuring
content = content.replace(
    'const [searchParams, setSearchParams] = useSearchParams();',
    'const searchParams = useSearchParams();'
)

# Find and remove any setSearchParams usage (if any)
# This would need to be replaced with useRouter().push() instead
if 'setSearchParams' in content:
    print("⚠️  Warning: setSearchParams is still used in the file")
    print("   This needs manual review - Next.js useSearchParams is read-only")

file_path.write_text(content)
print("✓ Fixed useSearchParams usage")
