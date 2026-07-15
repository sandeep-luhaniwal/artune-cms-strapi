import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::size-page.size-page', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const sizepage = await strapi.documents('api::size-page.size-page').findFirst({
      ...query,
      populate: {
        seo: true,
        sections: {
          on: {
            'size.hero': { populate: '*' },
            'size.art': { populate: '*' },
            'size.geometry': { populate: '*' },
            'size.premade': {
              populate: {
                sizepremadecard: { populate: '*' }
              }
            },
            'size.yourformat': {
              populate: {
                sizeyourformatcard: { populate: '*' }
              }
            },
            'size.twomaterial': {
              populate: {
                sizetwomaterialcard: { populate: '*' }
              }
            },
            'size.detail': {
              populate: {
                sizedetailcard: { populate: '*' }
              }
            },
            'size.comparison': { populate: '*' },
            'size.trust': {
              populate: {
                sizetrustcard: { populate: '*' }
              }
            },
            'size.faq': {
              populate: {
                sizefaqcard: { populate: '*' }
              }
            },
            'size.format': {
              populate: {
                formatcard: {
                  populate: '*'
                }
              }
            }
          }
        }
      }
    });

    return { data: sizepage };
  }
}));
