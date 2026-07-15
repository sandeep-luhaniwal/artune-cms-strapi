const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name LIKE '%seo%'").all();
console.log('SEO-related tables:', tables.map(t => t.name));

for (const table of tables.map(t => t.name)) {
  try {
    const rows = db.prepare(`SELECT * FROM "${table}" LIMIT 10`).all();
    console.log(`\nTable: ${table} (${rows.length} rows)`);
    console.log(rows);
  } catch (err) {
    console.error(`Error reading ${table}:`, err.message);
  }
}

db.close();
