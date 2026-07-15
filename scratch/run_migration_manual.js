const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  
  const strapi = app;
  const homePageUid = 'api::home-page.home-page';

  console.log('Fetching existing home page...');
  const existingHomePage = await strapi.documents(homePageUid).findFirst({
    populate: {
      sections: true
    }
  });
  console.log('Existing home page:', existingHomePage);

  console.log('Starting migration steps...');
  const sections = [];

  // Fetch Mainhero
  try {
    const mainhero = await strapi.documents('api::mainhero.mainhero').findFirst({
      populate: {
        heading: { populate: '*' },
        offer: { populate: '*' },
        simpleimage: { populate: '*' },
        newdrop: { populate: '*' }
      }
    });
    console.log('Fetched Mainhero:', !!mainhero);
    if (mainhero) {
      sections.push({
        __component: 'home.mainhero',
        heading: mainhero.heading ? {
          heading: mainhero.heading.heading,
          description: mainhero.heading.description,
          button: mainhero.heading.button,
          button_url: mainhero.heading.button_url,
          bgcolorcode: mainhero.heading.bgcolorcode,
          images_main: mainhero.heading.images_main?.id || mainhero.heading.images_main || null,
          image_right: mainhero.heading.image_right?.id || mainhero.heading.image_right || null,
          image_left: mainhero.heading.image_left?.id || mainhero.heading.image_left || null,
        } : null,
        offer: mainhero.offer ? {
          button: mainhero.offer.button,
          button_url: mainhero.offer.button_url,
          bgcolorcode: mainhero.offer.bgcolorcode,
          codevaluedata: mainhero.offer.codevaluedata ? mainhero.offer.codevaluedata.map((cv) => ({
            code: cv.code,
            code_value: cv.code_value,
            heading: cv.heading,
            headingcode: cv.headingcode,
            headingoff: cv.headingoff,
          })) : []
        } : null,
        simpleimage: mainhero.simpleimage ? {
          heading: mainhero.simpleimage.heading,
          button: mainhero.simpleimage.button,
          button_url: mainhero.simpleimage.button_url,
          image: mainhero.simpleimage.image?.id || mainhero.simpleimage.image || null,
        } : null,
        newdrop: mainhero.newdrop ? {
          badge: mainhero.newdrop.badge,
          badgebgcolor: mainhero.newdrop.badgebgcolor,
          heading: mainhero.newdrop.heading,
          button: mainhero.newdrop.button,
          button_url: mainhero.newdrop.button_url,
          bgimage: mainhero.newdrop.bgimage?.id || mainhero.newdrop.bgimage || null,
        } : null,
      });
    }
  } catch (e) {
    console.error('Error mainhero:', e.message);
  }

  // Fetch Homebanner
  try {
    const homebanner = await strapi.documents('api::homebanner.homebanner').findFirst({
      populate: ['image']
    });
    console.log('Fetched Homebanner:', !!homebanner);
    if (homebanner) {
      sections.push({
        __component: 'home.homebanner',
        bgcolor: homebanner.bgcolor,
        button: homebanner.button,
        button_url: homebanner.button_url,
        heading: homebanner.heading,
        description: homebanner.description,
        code_value: homebanner.code_value,
        timer: homebanner.timer,
        descriptioncolor: homebanner.descriptioncolor,
        headingcolor: homebanner.headingcolor,
        buttonbgcolor: homebanner.buttonbgcolor,
        image: homebanner.image?.id || homebanner.image || null,
      });
    }
  } catch (e) {
    console.error('Error homebanner:', e.message);
  }

  // Fetch Homebgvideo
  try {
    const homebgvideo = await strapi.documents('api::homebgvideo.homebgvideo').findFirst({
      populate: ['bgimg']
    });
    console.log('Fetched Homebgvideo:', !!homebgvideo);
    if (homebgvideo) {
      sections.push({
        __component: 'home.homebgvideo',
        heading: homebgvideo.heading,
        description: homebgvideo.description,
        button: homebgvideo.button,
        button_url: homebgvideo.button_url,
        bgimg: homebgvideo.bgimg?.id || homebgvideo.bgimg || null,
      });
    }
  } catch (e) {
    console.error('Error homebgvideo:', e.message);
  }

  // Fetch Homecollectionbanner
  try {
    const homecollectionbanner = await strapi.documents('api::homecollectionbanner.homecollectionbanner').findFirst();
    console.log('Fetched Homecollectionbanner:', !!homecollectionbanner);
    if (homecollectionbanner) {
      sections.push({
        __component: 'home.homecollectionbanner',
        bgcolor: homecollectionbanner.bgcolor,
        heading: homecollectionbanner.heading,
        headingcolor: homecollectionbanner.headingcolor,
        button: homecollectionbanner.button,
        button_url: homecollectionbanner.button_url,
        button_bg: homecollectionbanner.button_bg,
        buttoncolor: homecollectionbanner.buttoncolor,
        code_value_textcolor: homecollectionbanner.code_value_textcolor,
      });
    }
  } catch (e) {
    console.error('Error homecollectionbanner:', e.message);
  }

  // Fetch Homethreed
  try {
    const homethreed = await strapi.documents('api::homethreed.homethreed').findFirst();
    console.log('Fetched Homethreed:', !!homethreed);
    if (homethreed) {
      sections.push({
        __component: 'home.homethreed',
        heading: homethreed.heading,
        description: homethreed.description,
        button: homethreed.button,
        button_url: homethreed.button_url,
      });
    }
  } catch (e) {
    console.error('Error homethreed:', e.message);
  }

  // Fetch Homewhyartune
  try {
    const homewhyartune = await strapi.documents('api::homewhyartune.homewhyartune').findFirst({
      populate: {
        bgimage: true,
        homewhyartunecard: {
          populate: '*'
        }
      }
    });
    console.log('Fetched Homewhyartune:', !!homewhyartune);
    if (homewhyartune) {
      sections.push({
        __component: 'home.homewhyartune',
        heading: homewhyartune.heading,
        description: homewhyartune.description,
        bgimage: homewhyartune.bgimage?.id || homewhyartune.bgimage || null,
        homewhyartunecard: homewhyartune.homewhyartunecard ? homewhyartune.homewhyartunecard.map((card) => ({
          __component: 'shared.homewhyartunecard',
          title: card.title,
          description: card.description,
          img: card.img?.id || card.img || null,
        })) : []
      });
    }
  } catch (e) {
    console.error('Error homewhyartune:', e.message);
  }

  // Fetch Homeartist
  try {
    const homeartist = await strapi.documents('api::homeartist.homeartist').findFirst({
      populate: ['logo', 'img', 'img_one', 'img_two', 'img_three']
    });
    console.log('Fetched Homeartist:', !!homeartist);
    if (homeartist) {
      sections.push({
        __component: 'home.homeartist',
        heading: homeartist.heading,
        description: homeartist.description,
        button: homeartist.button,
        button_url: homeartist.button_url,
        logo: homeartist.logo?.id || homeartist.logo || null,
        img: homeartist.img?.id || homeartist.img || null,
        img_one: homeartist.img_one?.id || homeartist.img_one || null,
        img_two: homeartist.img_two?.id || homeartist.img_two || null,
        img_three: homeartist.img_three?.id || homeartist.img_three || null,
      });
    }
  } catch (e) {
    console.error('Error homeartist:', e.message);
  }

  // Fetch Commonoffer
  try {
    const commonoffer = await strapi.documents('api::commonoffer.commonoffer').findFirst({
      populate: ['img']
    });
    console.log('Fetched Commonoffer:', !!commonoffer);
    if (commonoffer) {
      sections.push({
        __component: 'home.commonoffer',
        para1: commonoffer.para1,
        para2: commonoffer.para2,
        img: commonoffer.img?.id || commonoffer.img || null,
        heading: commonoffer.heading,
        description: commonoffer.description,
        description_one: commonoffer.description_one,
        description_two: commonoffer.description_two,
      });
    }
  } catch (e) {
    console.error('Error commonoffer:', e.message);
  }

  // Fetch Commonwhychoose
  try {
    const commonwhychoose = await strapi.documents('api::commonwhychoose.commonwhychoose').findFirst({
      populate: {
        commonwhychoosecard: {
          populate: '*'
        }
      }
    });
    console.log('Fetched Commonwhychoose:', !!commonwhychoose);
    if (commonwhychoose) {
      sections.push({
        __component: 'home.commonwhychoose',
        heading: commonwhychoose.heading,
        commonwhychoosecard: commonwhychoose.commonwhychoosecard ? commonwhychoose.commonwhychoosecard.map((card) => ({
          __component: 'shared.commonwhychoosecard',
          title: card.title,
          description: card.description,
          img: card.img?.id || card.img || null,
        })) : []
      });
    }
  } catch (e) {
    console.error('Error commonwhychoose:', e.message);
  }

  // Fetch Detailscard
  try {
    const detailscard = await strapi.documents('api::detailscard.detailscard').findFirst({
      populate: {
        detailscard: {
          populate: '*'
        }
      }
    });
    console.log('Fetched Detailscard:', !!detailscard);
    if (detailscard) {
      sections.push({
        __component: 'home.detailscard',
        detailscard: detailscard.detailscard ? detailscard.detailscard.map((card) => ({
          __component: 'shared.detailscard',
          title: card.title,
          description: card.description,
          img: card.img?.id || card.img || null,
        })) : []
      });
    }
  } catch (e) {
    console.error('Error detailscard:', e.message);
  }

  console.log('Constructed sections count:', sections.length);

  if (sections.length > 0) {
    console.log('Updating Home Page Single Type...');
    try {
      const result = await strapi.documents(homePageUid).update({
        documentId: existingHomePage.documentId,
        data: {
          sections: sections
        },
        status: 'published'
      });
      console.log('Update result:', result);
    } catch(err) {
      console.error('Update failed. Validation details:');
      console.dir(err.details, { depth: null });
      throw err;
    }
  }

  await app.destroy();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
