#!/usr/bin/env python3
import re
from pathlib import Path

print("=== COMPREHENSIVE SYNTAX CHECK ===\n")

issues = []

for file_path in list(Path('src').rglob('*.ts')) + list(Path('src').rglob('*.tsx')):
    content = file_path.read_text()
    rel_path = str(file_path.relative_to('src'))
    
    # Check 1: Double dots (..property)
    if '..' in content and 'parent' not in content:  # Ignore comments about parent
        matches = re.findall(r'\.\.[a-zA-Z]', content)
        if matches:
            issues.append((rel_path, 'Double dots', matches[0]))
    
    # Check 2: Missing dot after type cast
    matches = re.findall(r'\([\w\s.]+as any\)[A-Z]\w+', content)
    if matches:
        for match in matches:
            issues.append((rel_path, 'Missing dot after cast', match))
    
    # Check 3: )( without operator between
    matches = re.findall(r'\)\(', content)
    # Filter out function calls like map(() => ())
    for match_context in re.finditer(r'.{10}\)\(.{10}', content):
        context = match_context.group()
        if '=>' not in context and 'function' not in context:
            issues.append((rel_path, 'Suspicious )( pattern', context))

if issues:
    print(f"Found {len(issues)} potential syntax issues:\n")
    for filepath, issue_type, pattern in issues[:20]:  # Show first 20
        print(f"  {filepath}")
        print(f"    {issue_type}: {pattern}\n")
    if len(issues) > 20:
        print(f"  ... and {len(issues) - 20} more\n")
else:
    print("✅ No obvious syntax issues found!")

