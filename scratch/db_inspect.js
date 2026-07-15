const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

try {
  console.log('--- promotions_pages ---');
  console.log(db.prepare("SELECT * FROM promotions_pages").all());
  console.log('--- promotions_pages_cmps ---');
  console.log(db.prepare("SELECT * FROM promotions_pages_cmps").all());
} catch (e) {
  console.error(e.message);
}
