#!/usr/bin/env python3
import re
from pathlib import Path

# Find all Content.tsx files
content_files = list(Path('src/app').rglob('*Content.tsx'))

print(f"Found {len(content_files)} Content.tsx files\n")

for content_file in content_files:
    content = content_file.read_text()
    
    # Expected export name from filename
    expected_name = content_file.stem  # e.g., "ExploreContent"
    
    # Check if it exports the expected name
    has_correct_export = f"export function {expected_name}" in content
    
    if has_correct_export:
        print(f"✅ {content_file.name} - Already correct")
        continue
    
    # Find what function it has
    # Pattern 1: function XyzContent()
    match1 = re.search(r'^function\s+(\w+)\s*\(', content, re.MULTILINE)
    # Pattern 2: export default function Xyz()
    match2 = re.search(r'^export\s+default\s+function\s+(\w+)\s*\(', content, re.MULTILINE)
    # Pattern 3: export function Xyz()
    match3 = re.search(r'^export\s+function\s+(\w+)\s*\(', content, re.MULTILINE)
    
    if match1:
        old_name = match1.group(1)
        print(f"🔧 {content_file.name} - Fixing: function {old_name}() → export function {expected_name}()")
        
        # Replace: function OldName() → export function ExpectedName()
        content = re.sub(
            rf'^function\s+{old_name}\s*\(',
            f'export function {expected_name}(',
            content,
            flags=re.MULTILINE
        )
        
        content_file.write_text(content)
        
    elif match2:
        old_name = match2.group(1)
        print(f"🔧 {content_file.name} - Fixing: export default function {old_name}() → export function {expected_name}()")
        
        # Replace: export default function OldName() → export function ExpectedName()
        content = re.sub(
            rf'^export\s+default\s+function\s+{old_name}\s*\(',
            f'export function {expected_name}(',
            content,
            flags=re.MULTILINE
        )
        
        content_file.write_text(content)
        
    elif match3:
        old_name = match3.group(1)
        if old_name != expected_name:
            print(f"🔧 {content_file.name} - Fixing: export function {old_name}() → export function {expected_name}()")
            
            content = re.sub(
                rf'^export\s+function\s+{old_name}\s*\(',
                f'export function {expected_name}(',
                content,
                flags=re.MULTILINE
            )
            
            content_file.write_text(content)
    else:
        print(f"⚠️  {content_file.name} - Could not find function declaration")

print("\n✅ All Content.tsx files processed!")
