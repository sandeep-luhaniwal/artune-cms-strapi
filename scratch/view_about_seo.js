const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath);

const row = db.prepare("SELECT * FROM seoallpagecreates WHERE id = 7").get();
console.log('seoallpagecreates row 7:', row);

// Let's find related component entries in seoallpagecreates_cmps
const cmps = db.prepare("SELECT * FROM seoallpagecreates_cmps WHERE entity_id = 7").all();
console.log('Components for entity_id 7:', cmps);

for (const cmp of cmps) {
  const details = db.prepare(`SELECT * FROM components_shared_seodetails WHERE id = ${cmp.cmp_id}`).get();
  console.log(`Details for component id ${cmp.cmp_id}:`, details);
}

db.close();
