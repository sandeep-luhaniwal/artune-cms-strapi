import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::footer.footer', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const footer = await strapi.documents('api::footer.footer').findFirst({
      ...query,
      populate: {
        columns: {
          populate: ['links']
        },
        social_links: {
          populate: ['icon']
        },
        bottom_links: true
      }
    });

    return { data: footer };
  }
}));
