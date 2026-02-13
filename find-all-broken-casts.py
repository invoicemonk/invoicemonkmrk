#!/usr/bin/env python3
import re
from pathlib import Path

print("=== FINDING ALL BROKEN TYPE CASTS ===\n")

broken_patterns = []

for file_path in list(Path('src').rglob('*.ts')) + list(Path('src').rglob('*.tsx')):
    content = file_path.read_text()
    
    # Pattern 1: (something as any).(something as any)
    matches = re.findall(r'\([^)]+as any\)\.\([^)]+as any\)', content)
    if matches:
        for match in matches:
            broken_patterns.append((str(file_path.relative_to('src')), match))
    
    # Pattern 2: Missing dot after as any cast - like (locale.pricing as any)Content
    matches = re.findall(r'\([^)]+as any\)[A-Z][a-z]+', content)
    if matches:
        for match in matches:
            broken_patterns.append((str(file_path.relative_to('src')), match))

if broken_patterns:
    print(f"Found {len(broken_patterns)} broken patterns:\n")
    for filepath, pattern in broken_patterns:
        print(f"  {filepath}:")
        print(f"    {pattern}\n")
else:
    print("✅ No broken cast patterns found!")

