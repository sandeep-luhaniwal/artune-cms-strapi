const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  
  const docService = app.documents('api::homebanner.homebanner');
  console.log('Methods on document service:', Object.keys(Object.getPrototypeOf(docService)));
  
  const first = await docService.findFirst();
  console.log('findFirst result:', first);
  
  await app.destroy();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
