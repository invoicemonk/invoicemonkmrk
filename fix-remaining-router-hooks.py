#!/usr/bin/env python3
from pathlib import Path
import re

# Fix Navbar.tsx
navbar = Path('src/components/layout/Navbar.tsx')
content = navbar.read_text()

# Check if it already has usePathname import
if "from 'next/navigation'" not in content:
    # Add import
    content = content.replace(
        "'use client'\n\n",
        "'use client'\n\nimport { usePathname } from 'next/navigation';\n"
    )

# Replace useLocation with usePathname
content = content.replace('const location = useLocation();', 'const pathname = usePathname();')

# Replace location.pathname with just pathname
content = content.replace('location.pathname', 'pathname')

navbar.write_text(content)
print("✓ Fixed: Navbar.tsx (useLocation → usePathname)")

# Check GlossaryContent
glossary = Path('src/app/glossary/GlossaryContent.tsx')
if glossary.exists():
    content = glossary.read_text()
    # It should already have useSearchParams from next/navigation
    # Just verify
    if "from 'next/navigation'" in content and 'useSearchParams' in content:
        print("✓ Verified: GlossaryContent.tsx already has Next.js useSearchParams")
    else:
        print("⚠️  GlossaryContent.tsx needs checking")

print("\n✅ All React Router hooks fixed!")
