#!/usr/bin/env python3
import re
from pathlib import Path

file_path = Path('src/app/glossary/GlossaryContent.tsx')
content = file_path.read_text()

# Add useRouter import
content = content.replace(
    "import { useSearchParams } from 'next/navigation';",
    "import { useSearchParams, useRouter } from 'next/navigation';"
)

# Add router initialization after searchParams
content = content.replace(
    'const searchParams = useSearchParams();',
    'const searchParams = useSearchParams();\n  const router = useRouter();'
)

# Replace setSearchParams with router.push
# Pattern 1: setSearchParams({ category });
content = re.sub(
    r'setSearchParams\(\{\s*category\s*\}\);',
    "router.push(`/glossary?category=${category}`);",
    content
)

# Pattern 2: setSearchParams({});
content = content.replace(
    'setSearchParams({});',
    "router.push('/glossary');"
)

# Pattern 3: setSearchParams(newParams);
# This is more complex - need to convert object to query string
content = re.sub(
    r'setSearchParams\(newParams\);',
    'router.push(`/glossary?${new URLSearchParams(newParams).toString()}`);',
    content
)

file_path.write_text(content)
print("✓ Fixed all setSearchParams to use router.push()")
