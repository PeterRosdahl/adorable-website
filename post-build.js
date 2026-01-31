// Post-build script to create sitemap.xml symlink
import { copyFileSync } from 'fs';

try {
  copyFileSync('dist/sitemap-index.xml', 'dist/sitemap.xml');
  console.log('✓ Created sitemap.xml copy');
} catch (err) {
  console.error('Error creating sitemap.xml:', err);
}
