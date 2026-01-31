#!/usr/bin/env python3
import os
import re
from pathlib import Path

# Default publication date
DEFAULT_DATE = "2025-01-20"

def fix_article_schema(file_path):
    """Add datePublished to ArticleSchema if missing"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if datePublished already exists
    if 'datePublished=' in content:
        return False
    
    # Pattern to find ArticleSchema component
    # Match the closing /> and add datePublished before it
    pattern = r'(<ArticleSchema\s+[^>]*?url="[^"]*")(\s*/?>)'
    
    def replacer(match):
        return match.group(1) + f'\n    datePublished="{DEFAULT_DATE}"' + '\n  />'
    
    new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)
    
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    
    return False

# Process all article files
articles_dir = Path('src/pages/artiklar')
fixed_count = 0

for astro_file in articles_dir.glob('*.astro'):
    if fix_article_schema(astro_file):
        print(f"✓ Fixed: {astro_file.name}")
        fixed_count += 1
    else:
        print(f"  Skipped: {astro_file.name}")

print(f"\nDone! Fixed {fixed_count} article(s).")
