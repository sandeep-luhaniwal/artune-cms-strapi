const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function main() {
  console.log('Loading Strapi...');
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  
  try {
    console.log('--- 1. Testing Page SEO -> Central SEO Sync ---');
    // Fetch about-page
    const aboutDoc = await app.documents('api::about-page.about-page').findFirst({
      populate: ['seo']
    });
    console.log('Current About Page SEO:', aboutDoc ? aboutDoc.seo : 'None');
    
    if (!aboutDoc) {
      console.log('About page not found. Creating a dummy one...');
      // If none exists, create one
      // (Since it is singleType, it might not exist yet in fresh setups, but it exists in user's DB)
    }
    
    const testTitle = 'Verify Title ' + Date.now();
    const testDesc = 'Verify Desc ' + Date.now();
    
    console.log(`Updating About Page SEO with title: "${testTitle}", desc: "${testDesc}"...`);
    await app.documents('api::about-page.about-page').update({
      documentId: aboutDoc.documentId,
      data: {
        seo: {
          id: aboutDoc.seo ? aboutDoc.seo.id : undefined,
          metaTitle: testTitle,
          metaDescription: testDesc
        }
      },
      status: 'draft' // test with draft first, or publish
    });
    
    // Now wait 1 second and check seoallpagecreate
    await new Promise(r => setTimeout(r, 1000));
    
    const centralSeo = await app.documents('api::seoallpagecreate.seoallpagecreate').findFirst({
      filters: {
        pageurl: { $endsWith: '/about-us' }
      },
      populate: ['seodetails'],
      status: 'draft'
    });
    
    console.log('Central seoallpagecreate entry found:', centralSeo);
    if (centralSeo) {
      console.log('Central Meta Title:', centralSeo.meta_title);
      const descDetail = centralSeo.seodetails.find(d => d.key === 'meta_description');
      console.log('Central Meta Description Detail:', descDetail ? descDetail.value : 'Not found');
      
      if (centralSeo.meta_title === testTitle && descDetail && descDetail.value === testDesc) {
        console.log('SUCCESS: Page SEO -> Central SEO Sync verified!');
      } else {
        console.log('FAILURE: Central SEO does not match expected values.');
      }
    } else {
      console.log('FAILURE: Central SEO entry not found.');
    }
    
    console.log('\n--- 2. Testing Central SEO -> Page SEO Sync ---');
    const newCentralTitle = 'Central Title ' + Date.now();
    const newCentralDesc = 'Central Desc ' + Date.now();
    
    console.log(`Updating Central SEO with title: "${newCentralTitle}", desc: "${newCentralDesc}"...`);
    await app.documents('api::seoallpagecreate.seoallpagecreate').update({
      documentId: centralSeo.documentId,
      data: {
        meta_title: newCentralTitle,
        seodetails: [
          {
            __component: 'shared.seodetails',
            key: 'meta_description',
            value: newCentralDesc
          }
        ]
      },
      status: 'draft'
    });
    
    // Now wait 1 second and check about-page SEO
    await new Promise(r => setTimeout(r, 1000));
    
    const updatedAboutDoc = await app.documents('api::about-page.about-page').findFirst({
      populate: ['seo'],
      status: 'draft'
    });
    
    console.log('Updated About Page SEO:', updatedAboutDoc ? updatedAboutDoc.seo : 'None');
    if (updatedAboutDoc && updatedAboutDoc.seo) {
      if (updatedAboutDoc.seo.metaTitle === newCentralTitle && updatedAboutDoc.seo.metaDescription === newCentralDesc) {
        console.log('SUCCESS: Central SEO -> Page SEO Sync verified!');
      } else {
        console.log('FAILURE: Page SEO does not match expected values.');
      }
    } else {
      console.log('FAILURE: About page SEO not found.');
    }
    
  } catch (err) {
    console.error('Error during verification:', err);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
