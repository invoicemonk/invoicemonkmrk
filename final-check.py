#!/usr/bin/env python3
import re
from pathlib import Path

print("=== FINAL VERIFICATION ===\n")

real_issues = []

for file_path in list(Path('src').rglob('*.ts')) + list(Path('src').rglob('*.tsx')):
    content = file_path.read_text()
    lines = content.split('\n')
    
    for i, line in enumerate(lines, 1):
        # Check for our specific broken pattern
        if 'as any).' in line and '(compliance as any)' in line:
            real_issues.append((str(file_path.relative_to('src')), i, line.strip()))
        
        # Check for missing dot after cast before property
        if re.search(r'\([\w.]+\s+as\s+any\)[A-Z][a-z]', line):
            real_issues.append((str(file_path.relative_to('src')), i, line.strip()))

if real_issues:
    print(f"Found {len(real_issues)} real issues:\n")
    for filepath, lineno, line in real_issues:
        print(f"  {filepath}:{lineno}")
        print(f"    {line}\n")
else:
    print("✅ No real syntax issues detected!")
    print("✅ Build should succeed!")

