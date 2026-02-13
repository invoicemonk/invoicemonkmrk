#!/usr/bin/env python3
import re
from pathlib import Path

# Find all tsx files
tsx_files = list(Path('src').rglob('*.tsx'))

fixed_count = 0

for tsx_file in tsx_files:
    content = tsx_file.read_text()
    original = content
    
    # Replace to= with href= in Link components
    # Pattern: to={...} or to="..."
    content = re.sub(r'<Link([^>]*)\s+to=', r'<Link\1 href=', content)
    
    if content != original:
        tsx_file.write_text(content)
        fixed_count += 1
        print(f"✓ Fixed: {tsx_file.relative_to('src')}")

print(f"\n✅ Fixed {fixed_count} files!")
