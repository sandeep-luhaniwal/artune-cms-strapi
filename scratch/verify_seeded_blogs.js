const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

try {
  // Check blog_categories_blog_lnk for blog IDs from 12 to 36
  const links = db.prepare("SELECT * FROM blog_categories_blog_lnk WHERE blog_id >= 12").all();
  console.log('Category links for new blogs:', links);

  // Let's print out the blogs categories relation columns
  const tableInfo = db.prepare("PRAGMA table_info(blog_categories_blog_lnk)").all();
  console.log('Columns of blog_categories_blog_lnk:', tableInfo);

} catch (err) {
  console.error('Error:', err);
} finally {
  db.close();
}
