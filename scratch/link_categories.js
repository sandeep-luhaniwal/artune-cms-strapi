const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

const linksToCreate = [
  // Shop the room -> room-ideas (Draft: 1, Pub: 5)
  { blog_id: 12, blog_category_id: 1 },
  { blog_id: 13, blog_category_id: 5 },

  // Gallery wall -> gallery-wall (Draft: 6, Pub: 9)
  { blog_id: 14, blog_category_id: 6 },
  { blog_id: 15, blog_category_id: 9 },

  // Before/after -> room-ideas (Draft: 1, Pub: 5)
  { blog_id: 16, blog_category_id: 1 },
  { blog_id: 17, blog_category_id: 5 },

  // Room by room -> room-ideas (Draft: 1, Pub: 5)
  { blog_id: 18, blog_category_id: 1 },
  { blog_id: 19, blog_category_id: 5 },

  // Size guide -> size-guide-1 (Draft: 7, Pub: 13)
  { blog_id: 20, blog_category_id: 7 },
  { blog_id: 21, blog_category_id: 13 },

  // Color match -> size-guide-1 (Draft: 7, Pub: 13)
  { blog_id: 22, blog_category_id: 7 },
  { blog_id: 23, blog_category_id: 13 },

  // How to hang -> size-guide-1 (Draft: 7, Pub: 13)
  { blog_id: 24, blog_category_id: 7 },
  { blog_id: 25, blog_category_id: 13 },

  // Composition -> size-guide-1 (Draft: 7, Pub: 13)
  { blog_id: 26, blog_category_id: 7 },
  { blog_id: 27, blog_category_id: 13 },

  // Trade -> case-studies (Draft: 14, Pub: 15)
  { blog_id: 28, blog_category_id: 14 },
  { blog_id: 29, blog_category_id: 15 },

  // Bulk -> case-studies (Draft: 14, Pub: 15)
  { blog_id: 30, blog_category_id: 14 },
  { blog_id: 31, blog_category_id: 15 },

  // Interior designers -> case-studies (Draft: 14, Pub: 15)
  { blog_id: 32, blog_category_id: 14 },
  { blog_id: 33, blog_category_id: 15 },

  // Custom -> case-studies (Draft: 14, Pub: 15)
  { blog_id: 34, blog_category_id: 14 },
  { blog_id: 35, blog_category_id: 15 }
];

try {
  db.transaction(() => {
    // Clean up any links for blogs 12-35 first
    db.prepare("DELETE FROM blog_categories_blog_lnk WHERE blog_id >= 12 AND blog_id <= 35").run();
    console.log('Cleared existing category links for blogs 12-35.');

    // Insert all links
    const insertStmt = db.prepare("INSERT INTO blog_categories_blog_lnk (blog_category_id, blog_id, blog_category_ord) VALUES (?, ?, ?)");
    for (const link of linksToCreate) {
      insertStmt.run(link.blog_category_id, link.blog_id, 1);
    }
  })();

  console.log('Successfully linked all 12 blogs to their categories!');

  // Verify
  const count = db.prepare("SELECT COUNT(*) as count FROM blog_categories_blog_lnk WHERE blog_id >= 12 AND blog_id <= 35").get();
  console.log(`Verified: ${count.count} links created in database.`);

} catch (err) {
  console.error('Error during category linking:', err);
} finally {
  db.close();
}
