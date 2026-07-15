import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::navbar.navbar', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const navbar = await strapi.documents('api::navbar.navbar').findFirst({
      ...query,
      populate: {
        menu_items: {
          populate: {
            mega_menu: {
              populate: {
                columns: {
                  populate: ['links']
                },
                bottom_links: true,
                featured_image: true,
                featured_images_grid: true
              }
            }
          }
        }
      }
    });

    return { data: navbar };
  }
}));
