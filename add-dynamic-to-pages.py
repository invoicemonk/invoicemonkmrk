#!/usr/bin/env python3
from pathlib import Path

# Find all page.tsx files
page_files = list(Path('src/app').rglob('page.tsx'))

for page_file in page_files:
    content = page_file.read_text()
    
    # Skip if already has dynamic export
    if "export const dynamic" in content:
        continue
    
    # Add dynamic export at the top after imports
    lines = content.split('\n')
    
    # Find where to insert (after last import)
    insert_index = 0
    for i, line in enumerate(lines):
        if line.startswith('import ') or line.startswith('export {'):
            insert_index = i + 1
        elif line.strip() == '' and insert_index > 0:
            insert_index = i + 1
            break
    
    # Insert the dynamic export
    lines.insert(insert_index, "\nexport const dynamic = 'force-dynamic';")
    
    page_file.write_text('\n'.join(lines))
    print(f"✓ Added dynamic export to: {page_file.relative_to('src/app')}")

print(f"\n✅ Updated {len(page_files)} page files")
