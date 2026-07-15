const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  
  const docService = app.documents('api::seoallpagecreate.seoallpagecreate');
  const results = await docService.findMany({
    populate: '*'
  });
  console.log('seoallpagecreate entries:', JSON.stringify(results, null, 2));
  
  await app.destroy();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
