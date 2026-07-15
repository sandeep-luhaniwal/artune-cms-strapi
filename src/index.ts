import type { Core } from '@strapi/strapi';
import fs from 'fs';
import path from 'path';
import os from 'os';
import mime from 'mime-types';

function extractFileIds(upload: any): number[] {
  if (!upload) return [];
  if (Array.isArray(upload)) {
    return upload
      .map(item => {
        if (typeof item === 'object' && item !== null) return item.id;
        return Number(item);
      })
      .filter(id => !isNaN(id));
  }
  if (typeof upload === 'object' && upload !== null) {
    if (upload.id) return [Number(upload.id)];
    return [];
  }
  const num = Number(upload);
  if (!isNaN(num)) return [num];
  return [];
}

async function processBase64Uploads(
  rawData: any,
  targetFolderId: number,
  folderPath: string,
  strapi: any
): Promise<{ fileIds: number[]; fileUrls: Record<string, string> }> {
  const fileIds: number[] = [];
  const fileUrls: Record<string, string> = {};

  let dataObj: Record<string, any> = {};
  if (typeof rawData === 'string') {
    try {
      dataObj = JSON.parse(rawData);
    } catch (e) {
      return { fileIds, fileUrls };
    }
  } else if (rawData && typeof rawData === 'object') {
    dataObj = rawData;
  }

  for (const [key, value] of Object.entries(dataObj)) {
    if (typeof value !== 'string') continue;

    // Check if it is a base64 data URL
    const match = value.match(/^data:(.*?);base64,(.*)$/);
    if (!match) continue;

    const mimeType = match[1];
    const base64Data = match[2];
    const buffer = Buffer.from(base64Data, 'base64');

    const extension = mime.extension(mimeType) || 'bin';
    const baseName = key.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const fileName = `${baseName}_${Date.now()}.${extension}`;
    const tempFilePath = path.join(os.tmpdir(), fileName);

    try {
      fs.writeFileSync(tempFilePath, buffer);

      const fileObj = {
        path: tempFilePath,
        name: fileName,
        type: mimeType,
        size: buffer.length,
      };

      const uploadService = strapi.plugin('upload').service('upload');
      const uploaded = await uploadService.upload({
        data: {
          fileInfo: {
            folder: targetFolderId,
            alternativeText: `${key} attachment`,
            caption: `${key} uploaded via API`,
          }
        },
        files: fileObj,
      });

      // uploaded can be an array or a single object
      const uploadedFiles: any[] = [];
      if (Array.isArray(uploaded)) {
        uploaded.forEach(f => {
          if (f && f.id) {
            fileIds.push(f.id);
            uploadedFiles.push(f);
          }
        });
      } else if (uploaded && uploaded.id) {
        fileIds.push(uploaded.id);
        uploadedFiles.push(uploaded);
      }

      for (const uf of uploadedFiles) {
        try {
          await strapi.query('plugin::upload.file').update({
            where: { id: uf.id },
            data: {
              folder: targetFolderId,
              folderPath: folderPath
            }
          });
        } catch (err: any) {
          strapi.log.error(`[Middleware] Error updating folder path for uploaded file ${uf.id}: ${err.message}`);
        }
        if (uf.url) {
          fileUrls[key] = uf.url;
        }
      }

      strapi.log.info(`[Middleware] Converted base64 key "${key}" to File IDs ${uploadedFiles.map(f => f.id).join(', ')} and saved to folder ${targetFolderId}`);
    } catch (err: any) {
      strapi.log.error(`[Middleware] Error processing base64 for key "${key}": ${err.message}`);
    } finally {
      // Clean up the temp file asynchronously to avoid EBUSY race conditions on Windows
      fs.unlink(tempFilePath, () => {});
    }
  }

  return { fileIds, fileUrls };
}

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    strapi.documents.use(async (context, next) => {
      const { uid, action, params } = context;

      const targetUids = [
        'api::help-contact-submission.help-contact-submission',
        'api::gdpr-sumbmission.gdpr-sumbmission',
        'api::crate-your-design-submission.crate-your-design-submission',
        'api::artist-submission.artist-submission',
        'api::art-scale-quote-submission.art-scale-quote-submission',
        'api::art-scale-consultation-submission.art-scale-consultation-submission',
      ];

      if (targetUids.includes(uid) && (action === 'create' || action === 'update') && params?.data) {
        const data = params.data as any;
        const targetFolderId = data.folderId !== undefined ? Number(data.folderId) : (data.folder !== undefined ? Number(data.folder) : 14);

        // Retrieve formdata/formData (checking both lowercase and capital cases)
        const rawData = data.formdata !== undefined ? data.formdata : data.formData;
        
        if (rawData !== undefined) {
          let dataObj: Record<string, any> = {};

          if (typeof rawData === 'string') {
            try {
              dataObj = JSON.parse(rawData);
            } catch (e: any) {
              strapi.log.error(`[Middleware] Error parsing json formdata: ${e.message}`);
            }
          } else if (rawData && typeof rawData === 'object') {
            dataObj = rawData;
          }

          // Get target folder path
          let folderPath = '/';
          try {
            const folder = await strapi.query('plugin::upload.folder').findOne({
              where: { id: targetFolderId }
            });
            if (folder) {
              folderPath = folder.path;
            }
          } catch (err: any) {
            strapi.log.error(`[Middleware] Error querying folder ${targetFolderId}: ${err.message}`);
          }

          // 1. Process base64 files
          const { fileIds, fileUrls } = await processBase64Uploads(dataObj, targetFolderId, folderPath, strapi);
          if (fileIds.length > 0) {
            const existingUploadIds = extractFileIds(data.upload);
            data.upload = [...existingUploadIds, ...fileIds];
          }

          // 2. Populate allpostapidata components
          const allPostApiData: any[] = [];
          let nameVal = '';
          let emailVal = '';

          if (dataObj && typeof dataObj === 'object') {
            for (const [key, value] of Object.entries(dataObj)) {
              if (['id', 'documentId', 'createdAt', 'updatedAt', 'publishedAt'].includes(key)) {
                continue;
              }

              // If it was a base64 string, we store the uploaded file URL in the component value field
              const valStr = fileUrls[key] !== undefined 
                ? fileUrls[key]
                : (value === null || value === undefined 
                  ? '' 
                  : (typeof value === 'object' ? JSON.stringify(value) : String(value)));

              allPostApiData.push({
                __component: 'input.allpostapidata',
                input: key,
                value: valStr,
              });

              const keyLower = key.toLowerCase().trim();
              if (['name', 'full name', 'fullname', 'first name', 'firstname', 'contact name'].includes(keyLower)) {
                nameVal = valStr;
              }
              if (['email', 'e-mail', 'email address', 'emailaddress'].includes(keyLower)) {
                emailVal = valStr;
              }
            }
          }
          data.allpostapidata = allPostApiData;
          if (nameVal) {
            data.name = nameVal;
          }
          if (emailVal) {
            data.email = emailVal;
          }
          strapi.log.info(`[Middleware] Populated allpostapidata, name: ${nameVal}, email: ${emailVal}`);
        }

        // Handle standard uploaded files in data.upload (if any, move them to the target folder)
        if (data.upload) {
          const fileIds = extractFileIds(data.upload);
          
          // Get target folder path
          let folderPath = '/';
          try {
            const folder = await strapi.query('plugin::upload.folder').findOne({
              where: { id: targetFolderId }
            });
            if (folder) {
              folderPath = folder.path;
            }
          } catch (err: any) {
            strapi.log.error(`[Middleware] Error querying folder ${targetFolderId}: ${err.message}`);
          }

          for (const fileId of fileIds) {
            try {
              await strapi.query('plugin::upload.file').update({
                where: { id: fileId },
                data: { 
                  folder: targetFolderId,
                  folderPath: folderPath
                }
              });
              strapi.log.info(`[Middleware] Moved uploaded file ${fileId} to Media Library folder ${targetFolderId} with path ${folderPath}`);
            } catch (err: any) {
              strapi.log.error(`[Middleware] Error moving file ${fileId} to folder ${targetFolderId}: ${err.message}`);
            }
          }
        }
      }

      return await next();
    });
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   */
  async bootstrap({ strapi }: { strapi: any }) {
    // 1. Grant public permission to api::home-page.home-page.find, api::footer.footer.find, and api::navbar.navbar.find
    try {
      const publicRole = await strapi.query('plugin::users-permissions.role').findOne({
        where: { type: 'public' },
      });

      if (publicRole) {
        const actionUids = ['api::home-page.home-page.find', 'api::footer.footer.find', 'api::navbar.navbar.find'];
        for (const actionUid of actionUids) {
          const permissionExists = await strapi.query('plugin::users-permissions.permission').findOne({
            where: {
              action: actionUid,
              role: publicRole.id,
            },
          });

          if (!permissionExists) {
            await strapi.query('plugin::users-permissions.permission').create({
              data: {
                action: actionUid,
                role: publicRole.id,
              },
            });
            strapi.log.info(`Granted public permission to ${actionUid}`);
          }
        }
      }
    } catch (err: any) {
      strapi.log.error(`Error in bootstrap setting public permissions: ${err.message}`);
    }

    // 2. Migrate existing single-type home data into Page Builder sections if missing
    try {
      const homePageUid = 'api::home-page.home-page';
      
      // Check if the home-page document exists
      const existingHomePage = await strapi.documents(homePageUid).findFirst({
        populate: {
          sections: true
        }
      });

      // If sections dynamiczone is empty or missing, let's fetch old data and migrate!
      if (!existingHomePage || !existingHomePage.sections || existingHomePage.sections.length < 10) {
        strapi.log.info('Migrating existing home section data into the Home Page Builder...');

        const sections: any[] = [];

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
                codevaluedata: mainhero.offer.codevaluedata ? mainhero.offer.codevaluedata.map((cv: any) => ({
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
        } catch (e: any) {
          strapi.log.error('Error migrating mainhero section:', e.message);
        }

        // Fetch Homebanner
        try {
          const homebanner = await strapi.documents('api::homebanner.homebanner').findFirst({
            populate: ['image']
          });
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
        } catch (e: any) {
          strapi.log.error('Error migrating homebanner section:', e.message);
        }

        // Fetch Homebgvideo
        try {
          const homebgvideo = await strapi.documents('api::homebgvideo.homebgvideo').findFirst({
            populate: ['bgimg']
          });
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
        } catch (e: any) {
          strapi.log.error('Error migrating homebgvideo section:', e.message);
        }

        // Fetch Homecollectionbanner
        try {
          const homecollectionbanner = await strapi.documents('api::homecollectionbanner.homecollectionbanner').findFirst();
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
        } catch (e: any) {
          strapi.log.error('Error migrating homecollectionbanner section:', e.message);
        }

        // Fetch Homethreed
        try {
          const homethreed = await strapi.documents('api::homethreed.homethreed').findFirst();
          if (homethreed) {
            sections.push({
              __component: 'home.homethreed',
              heading: homethreed.heading,
              description: homethreed.description,
              button: homethreed.button,
              button_url: homethreed.button_url,
            });
          }
        } catch (e: any) {
          strapi.log.error('Error migrating homethreed section:', e.message);
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
          if (homewhyartune) {
            sections.push({
              __component: 'home.homewhyartune',
              heading: homewhyartune.heading,
              description: homewhyartune.description,
              bgimage: homewhyartune.bgimage?.id || homewhyartune.bgimage || null,
              homewhyartunecard: homewhyartune.homewhyartunecard ? homewhyartune.homewhyartunecard.map((card: any) => ({
                __component: 'shared.homewhyartunecard',
                title: card.title,
                description: card.description,
                img: card.img?.id || card.img || null,
              })) : []
            });
          }
        } catch (e: any) {
          strapi.log.error('Error migrating homewhyartune section:', e.message);
        }

        // Fetch Homeartist
        try {
          const homeartist = await strapi.documents('api::homeartist.homeartist').findFirst({
            populate: ['logo', 'img', 'img_one', 'img_two', 'img_three']
          });
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
        } catch (e: any) {
          strapi.log.error('Error migrating homeartist section:', e.message);
        }

        // Fetch Commonoffer
        try {
          const commonoffer = await strapi.documents('api::commonoffer.commonoffer').findFirst({
            populate: ['img']
          });
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
        } catch (e: any) {
          strapi.log.error('Error migrating commonoffer section:', e.message);
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
          if (commonwhychoose) {
            sections.push({
              __component: 'home.commonwhychoose',
              heading: commonwhychoose.heading,
              commonwhychoosecard: commonwhychoose.commonwhychoosecard ? commonwhychoose.commonwhychoosecard.map((card: any) => ({
                __component: 'shared.commonwhychoosecard',
                title: card.title,
                description: card.description,
                img: card.img?.id || card.img || null,
              })) : []
            });
          }
        } catch (e: any) {
          strapi.log.error('Error migrating commonwhychoose section:', e.message);
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
          if (detailscard) {
            sections.push({
              __component: 'home.detailscard',
              detailscard: detailscard.detailscard ? detailscard.detailscard.map((card: any) => ({
                __component: 'shared.detailscard',
                title: card.title,
                description: card.description,
                img: card.img?.id || card.img || null,
              })) : []
            });
          }
        } catch (e: any) {
          strapi.log.error('Error migrating detailscard section:', e.message);
        }

        const defaultSeo = {
          metaTitle: 'Home',
          metaDescription: 'Welcome to ARTune'
        };

        if (existingHomePage) {
          // Update existing
          await strapi.documents(homePageUid).update({
            documentId: existingHomePage.documentId,
            data: {
              seo: existingHomePage.seo || defaultSeo,
              sections: sections,
            },
            status: 'published',
          });
          strapi.log.info('Updated and published existing Home Page document with migrated sections.');
        } else {
          // Create new
          await strapi.documents(homePageUid).create({
            data: {
              seo: defaultSeo,
              sections: sections,
            },
            status: 'published',
          });
          strapi.log.info('Created and published new Home Page document with migrated sections.');
        }
      }
    } catch (err: any) {
      strapi.log.error(`Error during Home Page data migration: ${err.message}`);
    }

    // 3. Seed Footer content type if missing
    try {
      const footerPageUid = 'api::footer.footer';
      const existingFooter = await strapi.documents(footerPageUid).findFirst();

      if (!existingFooter) {
        strapi.log.info('Seeding default Footer data...');

        await strapi.documents(footerPageUid).create({
          data: {
            logo_text: 'ARTune',
            tagline: 'Flat walls. Bold art.',
            newsletter_placeholder: 'Enter your email address',
            newsletter_button_text: 'Join Now',
            copyright: '© 2026 ARTune. All rights reserved.',
            columns: [
              {
                title: 'Shopping',
                links: [
                  { label: 'Bestsellers', url: '/pictures/bestsellers' },
                  { label: 'New in', url: '/pictures/new-arrivals' },
                  { label: 'Collections', url: '/collections' },
                  { label: 'Style', url: '/style' },
                  { label: 'Promotions', url: '/promotions' }
                ]
              },
              {
                title: 'ARTune',
                links: [
                  { label: 'About us', url: '/about-us' },
                  { label: 'Our Eco Philosophy', url: '/our-eco-philosophy' },
                  { label: 'Materials & sizes', url: '/materials-sizes' },
                  { label: 'Artune Spine easy mount.', url: '/artune-spine' },
                  { label: 'Collaboration with artists', url: '/collaboration' },
                  { label: 'Art Scale', url: '/art-scale' }
                ]
              },
              {
                title: 'Help',
                links: [
                  { label: 'Returns & Warranty', url: '/help/returns-warranty' },
                  { label: 'Delivery & Payments', url: '/help/delivery-payment' },
                  { label: 'Contact', url: '/help/contact' },
                  { label: 'Order Status', url: '/help/order-status' },
                  { label: 'FAQ / Help', url: '/help/faq' }
                ]
              },
              {
                title: 'Politics',
                links: [
                  { label: 'Regulations', url: '/legal/terms' },
                  { label: 'Privacy (GDPR)', url: '/legal/privacy' },
                  { label: 'Cookie settings', url: '/legal/cookies' },
                  { label: 'Availability', url: '/legal' }
                ]
              }
            ],
            social_links: [
              { platform: 'youtube', url: 'https://youtube.com' },
              { platform: 'facebook', url: 'https://facebook.com' },
              { platform: 'instagram', url: 'https://instagram.com' },
              { platform: 'twitter', url: 'https://twitter.com' },
              { platform: 'linkedin', url: 'https://linkedin.com' }
            ],
            bottom_links: [
              { label: 'Delivery', url: '/help/delivery-payment' },
              { label: 'Returns', url: '/help/returns-warranty' },
              { label: 'Contact', url: '/help/contact' }
            ]
          },
          status: 'published'
        });

        strapi.log.info('Successfully seeded default Footer data.');
      }
    } catch (err: any) {
      strapi.log.error(`Error seeding Footer: ${err.message}`);
    }

    // 4. Seed Navbar content type if missing
    try {
      const navbarPageUid = 'api::navbar.navbar';
      const existingNavbar = await strapi.documents(navbarPageUid).findFirst();

      if (!existingNavbar) {
        strapi.log.info('Seeding default Navbar data...');

        await strapi.documents(navbarPageUid).create({
          data: {
            logo_text: 'ARTune',
            menu_items: [
              {
                label: 'Pictures',
                url: '/pictures',
                has_mega_menu: false
              },
              {
                label: 'Collections',
                url: '/collections',
                has_mega_menu: true,
                mega_menu: {
                  columns: [
                    {
                      title: 'Explore',
                      links: [
                        { label: 'Art Classics', url: '/collections/art-classics' },
                        { label: 'AI + Human', url: '/collections/ai-human' },
                        { label: 'Abstract & Geometric', url: '/collections/abstract-geometric' },
                        { label: 'Photography', url: '/collections/photography' },
                        { label: 'Typography', url: '/collections/typography' }
                      ]
                    },
                    {
                      title: 'Artist',
                      links: [
                        { label: 'Our Artists', url: '/artists' },
                        { label: 'Browse by Artists', url: '/collections/browse-by-artists' },
                        { label: 'Meet Artists', url: '/collections/meet-artists' },
                        { label: 'Artist Collabs', url: '/collections/collabs' },
                        { label: 'Join as Artist', url: '/artists/join' }
                      ]
                    },
                    {
                      title: 'Curated',
                      links: [
                        { label: "Editor's Picks", url: '/collections/editors-picks' },
                        { label: 'Color', url: '/collections/color' },
                        { label: 'Stories', url: '/collections/stories' },
                        { label: 'Room', url: '/collections/room' },
                        { label: 'Seasonal', url: '/collections/seasonal' },
                        { label: 'Latest Drops', url: '/collections/latest-drops' }
                      ]
                    }
                  ],
                  bottom_links: [
                    { label: 'Limited Editions', url: '/collections/limited-editions' },
                    { label: 'Trending Collections', url: '/collections/trending-collections' },
                    { label: 'Most Collected', url: '/collections/most-collected' }
                  ],
                  featured_title: 'Modern Zen (6 pcs)',
                  featured_button_label: 'View Set',
                  featured_button_url: '/collections/modern-zen',
                  featured_type: 'image'
                }
              },
              {
                label: 'Inspiration',
                url: '/inspiration',
                has_mega_menu: true,
                mega_menu: {
                  columns: [
                    {
                      title: 'Get Ideas',
                      links: [
                        { label: 'Shop the Room', url: '/inspiration/shop-the-room' },
                        { label: 'Gallery Wall', url: '/inspiration/gallery-wall' },
                        { label: 'Before/After', url: '/inspiration/before-after' },
                        { label: 'Room by Room', url: '/inspiration/room-by-room' }
                      ]
                    },
                    {
                      title: 'Learn How',
                      links: [
                        { label: 'Size Guide', url: '/inspiration/size-guide' },
                        { label: 'Color Match', url: '/inspiration/color-match' },
                        { label: 'How to Hang', url: '/inspiration/how-to-hang' },
                        { label: 'Composition', url: '/inspiration/composition' }
                      ]
                    },
                    {
                      title: 'For Pros',
                      links: [
                        { label: 'Trade', url: '/inspiration/trade' },
                        { label: 'Bulk', url: '/inspiration/bulk' },
                        { label: 'Interior Designers', url: '/inspiration/interior-designers' },
                        { label: 'Custom', url: '/inspiration/custom' }
                      ]
                    }
                  ],
                  bottom_links: [
                    { label: 'Blog', url: '/inspiration' },
                    { label: 'Case Studies', url: '/case-studies' },
                    { label: 'Customer Showcases', url: '/customer-showcases' }
                  ],
                  featured_title: 'Hang in 60 Sec',
                  featured_subtitle: 'Expert tips for hanging the art',
                  featured_type: 'video'
                }
              },
              {
                label: 'Promotions',
                url: '/promotions',
                has_mega_menu: false
              }
            ]
          },
          status: 'published'
        });

        strapi.log.info('Successfully seeded default Navbar data.');
      }
    } catch (err: any) {
      strapi.log.error(`Error seeding Navbar: ${err.message}`);
    }
  },
};
