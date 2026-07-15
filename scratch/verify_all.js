const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

try {
  const blogs = db.prepare("SELECT id, title, slug, published_at FROM blogs WHERE id >= 12 AND published_at IS NOT NULL ORDER BY id ASC").all();
  
  console.log('--- Seeding Integrity Report ---');
  for (const blog of blogs) {
    // Check Category
    const categoryLink = db.prepare("SELECT * FROM blog_categories_blog_lnk WHERE blog_id = ?").get(blog.id);
    let categoryName = 'None';
    if (categoryLink) {
      const category = db.prepare("SELECT title FROM blog_categories WHERE id = ?").get(categoryLink.blog_category_id);
      if (category) categoryName = category.title;
    }

    // Check Thumbnail
    const mediaLink = db.prepare("SELECT * FROM files_related_mph WHERE related_id = ? AND related_type = 'api::blog.blog' AND field = 'thumbnail'").get(blog.id);
    let thumbnailName = 'None';
    if (mediaLink) {
      const file = db.prepare("SELECT name FROM files WHERE id = ?").get(mediaLink.file_id);
      if (file) thumbnailName = file.name;
    }

    console.log(`Blog: "${blog.title}"`);
    console.log(`  - Slug: ${blog.slug}`);
    console.log(`  - Category: ${categoryName}`);
    console.log(`  - Thumbnail: ${thumbnailName}`);
  }
} catch (err) {
  console.error('Error:', err);
} finally {
  db.close();
}
