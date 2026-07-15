const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

const tables = [
  'mainheroes',
  'homebanners',
  'homethreeds',
  'homecollectionbanners',
  'homewhyartunes',
  'homeartists',
  'homebgvideos'
];

tables.forEach(table => {
  console.log(`\n=== ${table} ===`);
  try {
    const rows = db.prepare(`SELECT id, document_id, published_at, locale FROM ${table}`).all();
    console.log(rows);
  } catch(e) {
    console.error(e.message);
  }
});
