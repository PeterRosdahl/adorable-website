#!/usr/bin/env python3
"""
Verify Schema.org structured data in built HTML files
"""
import json
import re
from pathlib import Path

def extract_schemas(html_content):
    """Extract all JSON-LD schemas from HTML"""
    pattern = r'<script type="application/ld\+json">(.*?)</script>'
    matches = re.findall(pattern, html_content, re.DOTALL)
    schemas = []
    for match in matches:
        try:
            schema = json.loads(match)
            schemas.append(schema)
        except json.JSONDecodeError as e:
            print(f"  ⚠️  JSON parsing error: {e}")
    return schemas

def validate_article_schema(schema):
    """Validate Article schema has required fields"""
    required = ['@context', '@type', 'headline', 'image', 'author', 'publisher', 'datePublished']
    missing = []
    
    for field in required:
        if field not in schema:
            missing.append(field)
    
    # Check publisher has logo
    if 'publisher' in schema and isinstance(schema['publisher'], dict):
        if 'logo' not in schema['publisher']:
            missing.append('publisher.logo')
    
    return missing

def validate_organization_schema(schema):
    """Validate ProfessionalService/Organization schema"""
    required = ['@context', '@type', 'name', 'url']
    recommended = ['logo', 'image']
    
    missing = []
    warnings = []
    
    for field in required:
        if field not in schema:
            missing.append(field)
    
    for field in recommended:
        if field not in schema:
            warnings.append(field)
    
    return missing, warnings

# Check built HTML files
dist_path = Path('dist')
article_count = 0
errors_found = 0

print("🔍 Verifying Schema.org structured data...\n")

# Check article pages
for article_dir in (dist_path / 'artiklar').glob('*/'):
    index_file = article_dir / 'index.html'
    if index_file.exists():
        article_count += 1
        with open(index_file, 'r', encoding='utf-8') as f:
            html = f.read()
        
        schemas = extract_schemas(html)
        article_schema = None
        
        for schema in schemas:
            if schema.get('@type') == 'Article':
                article_schema = schema
                break
        
        if article_schema:
            missing = validate_article_schema(article_schema)
            if missing:
                print(f"❌ {article_dir.name}:")
                print(f"   Missing: {', '.join(missing)}")
                errors_found += 1
            else:
                print(f"✅ {article_dir.name}")
        else:
            print(f"⚠️  {article_dir.name}: No Article schema found")
            errors_found += 1

print(f"\n📊 Summary:")
print(f"   Articles checked: {article_count}")
print(f"   Errors found: {errors_found}")

if errors_found == 0:
    print("\n✅ All schemas are valid!")
else:
    print(f"\n⚠️  Found {errors_found} issue(s)")

# Check main page
print("\n🔍 Checking main page schema...")
main_index = dist_path / 'index.html'
if main_index.exists():
    with open(main_index, 'r', encoding='utf-8') as f:
        html = f.read()
    
    schemas = extract_schemas(html)
    for schema in schemas:
        if schema.get('@type') == 'ProfessionalService':
            missing, warnings = validate_organization_schema(schema)
            if missing:
                print(f"❌ ProfessionalService schema missing: {', '.join(missing)}")
            else:
                print(f"✅ ProfessionalService schema valid")
            if warnings:
                print(f"   ℹ️  Recommended fields: {', '.join(warnings)}")
