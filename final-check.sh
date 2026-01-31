#!/bin/bash
echo "🔍 Final Schema.org Validation Check"
echo "====================================="
echo ""

# Check if build exists
if [ ! -d "dist" ]; then
  echo "❌ No build found. Run 'npm run build' first."
  exit 1
fi

echo "✅ Build directory exists"

# Check images
if [ -f "public/og-image.jpg" ] && [ -f "public/adorable-logo.png" ]; then
  echo "✅ Required images exist"
else
  echo "❌ Missing required images"
  exit 1
fi

# Run Python verification
python3 verify-schemas.py

echo ""
echo "🎯 Next Steps:"
echo "1. Deploy to production (npm run deploy or netlify deploy --prod)"
echo "2. Test live site with Google Rich Results Test:"
echo "   https://search.google.com/test/rich-results"
echo "3. Replace placeholder images with proper branded assets"
echo "4. Monitor Search Console for Schema.org issues"
echo ""
echo "📝 See SCHEMA_FIXES.md for detailed documentation"
