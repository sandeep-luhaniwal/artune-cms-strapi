const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

const tables = [
  'commonoffers',
  'commonwhychooses',
  'detailscards'
];

tables.forEach(table => {
  console.log(`\n=== Rows of ${table} ===`);
  try {
    const rows = db.prepare(`SELECT * FROM ${table}`).all();
    console.log(rows);
  } catch(e) {
    console.error(e.message);
  }
});
