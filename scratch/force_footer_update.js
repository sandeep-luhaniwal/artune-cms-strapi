const { createStrapi, compileStrapi } = require('@strapi/strapi');

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();
  
  const strapi = app;
  const footerPageUid = 'api::footer.footer';

  console.log('Fetching existing footer...');
  const existingFooter = await strapi.documents(footerPageUid).findFirst();
  console.log('Existing footer:', !!existingFooter);

  if (existingFooter) {
    console.log('Overwriting existing footer with exact requested links and platforms...');
    const result = await strapi.documents(footerPageUid).update({
      documentId: existingFooter.documentId,
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
    console.log('Update result successful!');
  } else {
    console.log('No footer found to update. Bootstrap seeding should run on next start.');
  }

  await app.destroy();
  process.exit(0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
