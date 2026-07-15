const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

try {
  console.log(`\n=== home_pages ===`);
  const rows = db.prepare(`SELECT * FROM home_pages`).all();
  console.log(rows);
} catch(e) {
  console.error(e.message);
}
