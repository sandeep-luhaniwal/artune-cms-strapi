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
  console.log(`\n=== ALL COLUMNS OF ${table} ===`);
  try {
    const row = db.prepare(`SELECT * FROM ${table} LIMIT 1`).get();
    console.log(row);
  } catch(e) {
    console.error(e.message);
  }
});
