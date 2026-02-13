#!/usr/bin/env python3
from pathlib import Path
import re

print("=== SCANNING FOR ALL VITE-SPECIFIC PATTERNS ===\n")

vite_patterns = {
    'import.meta.env': [],
    'import.meta.hot': [],
    'import.meta.glob': [],
}

for file_path in list(Path('src').rglob('*.ts')) + list(Path('src').rglob('*.tsx')):
    content = file_path.read_text()
    rel_path = str(file_path.relative_to('src'))
    
    for pattern in vite_patterns.keys():
        if pattern in content:
            vite_patterns[pattern].append(rel_path)

total = sum(len(files) for files in vite_patterns.values())

if total > 0:
    print(f"Found {total} Vite-specific patterns:\n")
    for pattern, files in vite_patterns.items():
        if files:
            print(f"{pattern}: {len(files)} files")
            for f in files:
                print(f"  - {f}")
            print()
else:
    print("✅ No Vite-specific patterns found!")

