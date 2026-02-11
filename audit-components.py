#!/usr/bin/env python3
import os
from pathlib import Path

components_dir = Path('/home/claude/invoicemonk-nextjs/src/components')
client_indicators = [
    'useState', 'useEffect', 'useCallback', 'useMemo', 'useRef', 'useContext',
    'onClick', 'onChange', 'onSubmit', 'onBlur', 'onFocus', 'onMouseEnter',
    'motion.', 'AnimatePresence', 'framer-motion',
]

fixed = 0
already_client = 0
server_only = 0

for tsx_file in components_dir.rglob('*.tsx'):
    content = tsx_file.read_text()
    
    # Skip if already has 'use client'
    if content.strip().startswith("'use client'") or content.strip().startswith('"use client"'):
        already_client += 1
        continue
    
    # Check if needs client directive
    needs_client = any(indicator in content for indicator in client_indicators)
    
    if needs_client:
        new_content = "'use client'\n\n" + content
        tsx_file.write_text(new_content)
        fixed += 1
        print(f"✓ Fixed: {tsx_file.relative_to(components_dir)}")
    else:
        server_only += 1

print(f"\nSummary:")
print(f"  Fixed: {fixed}")
print(f"  Already client: {already_client}")
print(f"  Server-only: {server_only}")
