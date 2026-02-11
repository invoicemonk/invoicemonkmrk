#!/usr/bin/env python3
import re
from pathlib import Path

# Find all Content.tsx files
content_files = Path('/home/claude/invoicemonk-nextjs/src/app').rglob('*Content.tsx')

for file_path in content_files:
    content = file_path.read_text()
    original_content = content
    
    # Remove all @/assets imports
    content = re.sub(r"import .* from '@/assets/[^']+\.(?:jpg|png|svg|webp)';\n?", '', content)
    
    # Find all asset image usages and replace with string paths
    # Pattern: src={variableName} where variableName looks like an image
    assets_in_use = re.findall(r'src=\{([a-zA-Z][a-zA-Z0-9]*)\}', content)
    
    for var_name in assets_in_use:
        # Convert camelCase to kebab-case filename
        filename = re.sub(r'([a-z])([A-Z])', r'\1-\2', var_name).lower()
        
        # Replace the variable usage with direct path
        content = content.replace(
            f'src={{{var_name}}}',
            f'src="/assets/{filename}.jpg"'
        )
    
    # Only write if changed
    if content != original_content:
        file_path.write_text(content)
        print(f"✓ Fixed: {file_path.relative_to('/home/claude/invoicemonk-nextjs')}")

print("\nAll image imports fixed!")
