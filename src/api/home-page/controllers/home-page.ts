import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::home-page.home-page', ({ strapi }) => ({
  async find(ctx) {
    const { query } = ctx;

    const homepage = await strapi.documents('api::home-page.home-page').findFirst({
      ...query,
      populate: {
        seo: true,
        sections: {
          on: {
            'home.mainhero': {
              populate: {
                heading: { populate: '*' },
                offer: { populate: '*' },
                simpleimage: { populate: '*' },
                newdrop: { populate: '*' },
              }
            },
            'home.homebanner': {
              populate: '*'
            },
            'home.homebgvideo': {
              populate: '*'
            },
            'home.homecollectionbanner': {
              populate: '*'
            },
            'home.homethreed': {
              populate: '*'
            },
            'home.homewhyartune': {
              populate: {
                bgimage: true,
                homewhyartunecard: {
                  populate: '*'
                }
              }
            },
            'home.homeartist': {
              populate: '*'
            },
            'home.commonoffer': {
              populate: '*'
            },
            'home.commonwhychoose': {
              populate: {
                commonwhychoosecard: {
                  populate: '*'
                }
              }
            },
            'home.detailscard': {
              populate: {
                detailscard: {
                  populate: '*'
                }
              }
            }
          }
        }
      }
    });

    return { data: homepage };
  }
}));
