const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, '..', '.tmp', 'data.db');
const db = new Database(dbPath, { readonly: true });

function showData(table) {
  try {
    const rows = db.prepare(`SELECT * FROM ${table}`).all();
    console.log(`\n--- TABLE: ${table} (${rows.length} rows) ---`);
    if (rows.length > 0) {
      console.log(JSON.stringify(rows[0], null, 2));
    }
  } catch (err) {
    console.error(`Error table ${table}:`, err.message);
  }
}

const componentTables = [
  'components_about_heroes',
  'components_about_whos',
  'components_about_artunes',
  'components_about_ourstories',
  'components_about_stands',
  'components_about_everyones',
  'components_about_ideas',
  'components_about_readies'
];

const mainTables = [
  'aboutheroes',
  'aboutwhos',
  'aboutartunes',
  'aboutourstories',
  'aboutstands',
  'abouteveryones',
  'aboutideas',
  'aboutreadies'
];

console.log("=== COMPARING DYNAMIC ZONE COMPONENT TABLES WITH INDIVIDUAL API TABLES ===");
for (let i = 0; i < componentTables.length; i++) {
  showData(componentTables[i]);
  showData(mainTables[i]);
}
