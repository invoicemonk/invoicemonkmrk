#!/usr/bin/env python3
import re
from pathlib import Path

print("Scanning for potentially unsafe property access...\n")

issues = []

for tsx_file in Path('src/app').rglob('*.tsx'):
    content = tsx_file.read_text()
    
    # Find patterns like: someObject.property where someObject comes from destructuring
    # Pattern: const { something } = locale
    locale_destructures = re.findall(r'const \{ ([^}]+) \} = locale', content)
    
    for destructured in locale_destructures:
        # Split by comma to get individual properties
        props = [p.strip() for p in destructured.split(',')]
        
        for prop in props:
            # Check if this prop is used with property access without optional chaining
            # Pattern: propName.something
            prop_name = prop.split(':')[0].strip()  # Handle renaming
            
            # Look for usage without optional chaining
            unsafe_access = re.findall(rf'{prop_name}\.[a-zA-Z_][a-zA-Z0-9_]*', content)
            
            if unsafe_access:
                # Check if it has optional chaining already
                safe_access = re.findall(rf'{prop_name}\?\.', content)
                
                if len(unsafe_access) > len(safe_access):
                    issues.append((tsx_file.name, prop_name, unsafe_access[0]))

if issues:
    print("⚠️  Found potentially unsafe property access:\n")
    for filename, prop, access in issues:
        print(f"   {filename}: {access}")
    print(f"\n⚠️  Total: {len(issues)} potential issues")
    print("\nNote: These might be safe if the properties are guaranteed to exist.")
else:
    print("✅ No obvious unsafe property access found")

