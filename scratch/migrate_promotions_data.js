const Database = require('better-sqlite3');
const db = new Database('.tmp/data.db');

db.transaction(() => {
  console.log('Starting migration transaction...');

  // 1. MIGRATE BUNDLE LIST
  console.log('Migrating bundle list data...');
  
  // Find draft bundle (usually ID 1)
  const oldDraftBundle = db.prepare("SELECT * FROM promotionbundlelists WHERE published_at IS NULL LIMIT 1").get();
  // Find published bundle (usually ID 4)
  const oldPubBundle = db.prepare("SELECT * FROM promotionbundlelists WHERE published_at IS NOT NULL LIMIT 1").get();

  if (oldDraftBundle && oldPubBundle) {
    // Insert into components_promotions_bundlelists (draft)
    const insBundle = db.prepare(`
      INSERT INTO components_promotions_bundlelists (title, description, button, button_url)
      VALUES (?, ?, ?, ?)
    `);
    
    const draftRes = insBundle.run(oldDraftBundle.title, oldDraftBundle.description, oldDraftBundle.button, oldDraftBundle.button_url);
    const draftBundleId = draftRes.lastInsertRowid;
    
    const pubRes = insBundle.run(oldPubBundle.title, oldPubBundle.description, oldPubBundle.button, oldPubBundle.button_url);
    const pubBundleId = pubRes.lastInsertRowid;

    console.log(`Created component bundle lists: Draft ID = ${draftBundleId}, Published ID = ${pubBundleId}`);

    // Link in promotions_pages_cmps (order = 6)
    const insCmp = db.prepare(`
      INSERT INTO promotions_pages_cmps (entity_id, cmp_id, component_type, field, [order])
      VALUES (?, ?, ?, ?, ?)
    `);
    insCmp.run(2, draftBundleId, 'promotions.bundlelist', 'sections', 6);
    insCmp.run(3, pubBundleId, 'promotions.bundlelist', 'sections', 6);

    // Link products
    const insProductLnk = db.prepare(`
      INSERT INTO components_promotions_bundlelists_promotionproducts_lnk (bundlelist_id, promotionproduct_id, promotionproduct_ord)
      VALUES (?, ?, ?)
    `);

    const oldDraftProductLinks = db.prepare("SELECT * FROM promotionbundlelists_promotionproducts_lnk WHERE promotionbundlelist_id = ?").all(oldDraftBundle.id);
    oldDraftProductLinks.forEach(link => {
      insProductLnk.run(draftBundleId, link.promotionproduct_id, link.promotionproduct_ord);
    });

    const oldPubProductLinks = db.prepare("SELECT * FROM promotionbundlelists_promotionproducts_lnk WHERE promotionbundlelist_id = ?").all(oldPubBundle.id);
    oldPubProductLinks.forEach(link => {
      insProductLnk.run(pubBundleId, link.promotionproduct_id, link.promotionproduct_ord);
    });

    console.log(`Migrated product links to new components.`);
  } else {
    console.log('Warning: old bundle lists not found!');
  }

  // 2. MIGRATE COLLECTION
  console.log('Migrating collection data...');
  
  // Find draft collection
  const oldDraftColl = db.prepare("SELECT * FROM promotioncollections WHERE published_at IS NULL LIMIT 1").get();
  // Find published collection
  const oldPubColl = db.prepare("SELECT * FROM promotioncollections WHERE published_at IS NOT NULL LIMIT 1").get();

  if (oldDraftColl && oldPubColl) {
    const insColl = db.prepare(`
      INSERT INTO components_promotions_collections (title, description, badge, button, button_url, timertitle, timer, claimed, total_items, left_items)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const draftRes = insColl.run(
      oldDraftColl.title, 
      oldDraftColl.description, 
      oldDraftColl.badge, 
      oldDraftColl.button, 
      oldDraftColl.button_url, 
      oldDraftColl.timertitle, 
      oldDraftColl.timer, 
      oldDraftColl.claimed, 
      oldDraftColl.total_items, 
      oldDraftColl.left_items
    );
    const draftCollId = draftRes.lastInsertRowid;

    const pubRes = insColl.run(
      oldPubColl.title, 
      oldPubColl.description, 
      oldPubColl.badge, 
      oldPubColl.button, 
      oldPubColl.button_url, 
      oldPubColl.timertitle, 
      oldPubColl.timer, 
      oldPubColl.claimed, 
      oldPubColl.total_items, 
      oldPubColl.left_items
    );
    const pubCollId = pubRes.lastInsertRowid;

    console.log(`Created component collections: Draft ID = ${draftCollId}, Published ID = ${pubCollId}`);

    // Link in promotions_pages_cmps (order = 7)
    const insCmp = db.prepare(`
      INSERT INTO promotions_pages_cmps (entity_id, cmp_id, component_type, field, [order])
      VALUES (?, ?, ?, ?, ?)
    `);
    insCmp.run(2, draftCollId, 'promotions.collection', 'sections', 7);
    insCmp.run(3, pubCollId, 'promotions.collection', 'sections', 7);

    // Link image from files_related_mph
    const insMedia = db.prepare(`
      INSERT INTO files_related_mph (file_id, related_id, related_type, field, [order])
      VALUES (?, ?, ?, ?, ?)
    `);

    // Old draft image
    const oldDraftImg = db.prepare("SELECT * FROM files_related_mph WHERE related_type = 'api::promotioncollection.promotioncollection' AND related_id = ?").get(oldDraftColl.id);
    if (oldDraftImg) {
      insMedia.run(oldDraftImg.file_id, draftCollId, 'promotions.collection', 'image', 1);
    }

    // Old published image
    const oldPubImg = db.prepare("SELECT * FROM files_related_mph WHERE related_type = 'api::promotioncollection.promotioncollection' AND related_id = ?").get(oldPubColl.id);
    if (oldPubImg) {
      insMedia.run(oldPubImg.file_id, pubCollId, 'promotions.collection', 'image', 1);
    }

    console.log('Migrated collection images successfully.');
  } else {
    console.log('Warning: old collections not found!');
  }

  // 3. MIGRATE FEATURED DROP
  console.log('Migrating featured drop data...');
  
  // Find draft sub-category
  const oldDraftFD = db.prepare("SELECT * FROM promotions_sub_categories WHERE published_at IS NULL LIMIT 1").get();
  // Find published sub-category
  const oldPubFD = db.prepare("SELECT * FROM promotions_sub_categories WHERE published_at IS NOT NULL LIMIT 1").get();

  if (oldDraftFD && oldPubFD) {
    const insFD = db.prepare(`
      INSERT INTO components_promotions_featured_drops (title)
      VALUES (?)
    `);

    const draftRes = insFD.run(oldDraftFD.title);
    const draftFdId = draftRes.lastInsertRowid;

    const pubRes = insFD.run(oldPubFD.title);
    const pubFdId = pubRes.lastInsertRowid;

    console.log(`Created component featured drops: Draft ID = ${draftFdId}, Published ID = ${pubFdId}`);

    // Link in promotions_pages_cmps (order = 8)
    const insCmp = db.prepare(`
      INSERT INTO promotions_pages_cmps (entity_id, cmp_id, component_type, field, [order])
      VALUES (?, ?, ?, ?, ?)
    `);
    insCmp.run(2, draftFdId, 'promotions.featureddrop', 'sections', 8);
    insCmp.run(3, pubFdId, 'promotions.featureddrop', 'sections', 8);

    console.log('Migrated featured drops successfully.');
  } else {
    console.log('Warning: old sub-categories (featured drop) not found!');
  }

  console.log('All migrations completed successfully.');
})();
