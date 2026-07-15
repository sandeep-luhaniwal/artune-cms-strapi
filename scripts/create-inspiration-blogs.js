'use strict';

const { createStrapi, compileStrapi } = require('@strapi/strapi');

const BLOGS_DATA = [
  {
    title: "Shop the Room: Create Your Perfect Living Space",
    slug: "shop-the-room",
    badge: "Inspiration",
    read_time: "6 min",
    publishedDate: "2026-07-15",
    seoTitle: "Shop the Room: Curated Wall Art Inspiration | ARTune",
    seoDescription: "Explore curated room designs and learn how to choose art that complements your furniture, lighting, and layout.",
    categorySlug: "room-ideas",
    categoryDocumentId: "i8xa6du1bpqlwkdk8rgxvzxb",
    thumbnail: 69, // we-stan-1.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Designing a room from scratch can be overwhelming. From choosing furniture to picking color palettes, every detail matters. But nothing brings a room together like the perfect piece of wall art. Our 'Shop the Room' guides are designed to help you visualize artwork in real-life settings and easily recreate those looks in your own home." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Visualizing Art in Context",
        image: [56], // we-stan-3.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "One of the biggest challenges in home decor is scale. A painting that looks perfect in a gallery might look lost on a high-ceilinged living room wall, or overwhelm a cozy bedroom. By shopping curated rooms, you can see how different formats (such as square, landscape, or vertical canvases) sit alongside standard furniture pieces like sofas, sideboards, and beds." }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Whether you lean toward a minimal Scandinavian aesthetic, a rich textured modern look, or vibrant abstract expressions, matching the art to the room's energy is key. Look for common color accents between the canvas and your cushions, rugs, or decorative items to achieve a designer finish." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "How to Build a Gallery Wall That Feels Intentional",
    slug: "gallery-wall",
    badge: "Styling",
    read_time: "8 min",
    publishedDate: "2026-07-15",
    seoTitle: "How to Design & Hang a Gallery Wall | ARTune Guides",
    seoDescription: "Learn the secrets of layout, spacing, and styling to design a stunning gallery wall that tells your story.",
    categorySlug: "gallery-wall",
    categoryDocumentId: "gjsv00n0mwaq45kn2jpg6dbz",
    thumbnail: 26, // stroy-6.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "A gallery wall is a beautiful way to fill a blank canvas in your home and showcase your personality. However, without a clear plan, a gallery wall can quickly feel cluttered or disorganized. The secret lies in intention—planning your theme, choosing cohesive frames, and arranging the prints before driving a single nail into the wall." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Planning Your Layout First",
        image: [25], // stroy-3.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Before you start hanging, lay all your artwork on the floor in front of the wall. Play with different configurations. A helpful rule of thumb is to start with the largest piece as the focal point, slightly off-center, and build outward with smaller pieces. Keep the spacing between frames consistent—usually between 2 to 3 inches." }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Mix different mediums to add texture: combine black-and-white photography with colorful abstracts, typography, and line art. Cohesive framing (such as all black wood or all clean white borders) will tie the disparate styles together seamlessly, creating a unified gallery feel." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Art Transformation: Before & After Design Inspiration",
    slug: "before-after",
    badge: "Makeover",
    read_time: "5 min",
    publishedDate: "2026-07-15",
    seoTitle: "Wall Art Before and After Transformations | ARTune",
    seoDescription: "See how bare walls are transformed into breathtaking focal points with the right choice of art size and framing.",
    categorySlug: "room-ideas",
    categoryDocumentId: "i8xa6du1bpqlwkdk8rgxvzxb",
    thumbnail: 27, // change-space-after-1.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "We often underestimate the impact of empty space. While minimalism is elegant, a completely blank wall can make a home feel cold and unfinished. Through these real-life before-and-after transformations, see how adding a single large statement painting or a set of matched canvases can completely redefine the atmosphere, warmth, and acoustics of a room." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Redefining the Focal Point",
        image: [30], // change-space-befroe-1.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "In our before photos, the room feels fragmented—the eye wanders from the furniture to the floor without finding a center. In the after photos, the artwork commands attention, anchoring the furniture below it and drawing the entire design together. The right painting acts as a visual bridge between your furniture and your ceiling." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Room by Room: Choosing the Right Artwork for Each Space",
    slug: "room-by-room",
    badge: "Guide",
    read_time: "7 min",
    publishedDate: "2026-07-15",
    seoTitle: "Room by Room Art Selection Guide | ARTune",
    seoDescription: "A comprehensive guide on selecting the appropriate art style, mood, and size for your living room, bedroom, and hallway.",
    categorySlug: "room-ideas",
    categoryDocumentId: "i8xa6du1bpqlwkdk8rgxvzxb",
    thumbnail: 70, // we-stan-4.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Every room in your home serves a different purpose, and therefore, demands a different vibe. The art that energizes you in the living room might keep you awake in the bedroom. Understanding the mood of each space is the first step to successful art curation." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Tailoring the Mood to the Space",
        image: [43], // we-stan-5.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "For the living room, go bold. This is a social hub where conversations happen. Oversized abstracts or high-contrast prints make great statements here. In the bedroom, choose soothing imagery—soft landscapes, neutral tones, or minimal line art that induces calm and relaxation." }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Kitchens and dining areas are perfect for playful typography or geometric prints that reflect creativity and energy. Hallways, on the other hand, act as transitions: a series of smaller, themed prints can create a narrative journey through your home." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "The Ultimate Wall Art Size & Format Guide",
    slug: "size-guide",
    badge: "Guide",
    read_time: "5 min",
    publishedDate: "2026-07-15",
    seoTitle: "Wall Art Size and Format Guide | ARTune",
    seoDescription: "Never guess sizes again. Learn how to measure your wall and choose the perfect canvas size for vertical, horizontal, or square formats.",
    categorySlug: "size-guide-1",
    categoryDocumentId: "zv5u5ifuax8ab8vaypvshbst",
    thumbnail: 96, // our-materials-1.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "One of the most common mistakes people make when buying art online is choosing the wrong size. A piece that is too small looks like an afterthought, while a piece that is too large makes the room feel cramped. This size guide will walk you through standard formats and help you choose the right fit." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "The 3/5ths Rule of Thumb",
        image: [75], // 📐.png
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "A simple designer secret is the 3/5ths rule. When hanging art above a piece of furniture (like a sofa, bed, or console table), the total width of the artwork (or set of artworks) should cover approximately 60% to 75% (roughly 3/5ths) of the furniture's width. This ensures perfect visual balance." }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "For empty walls without furniture, aim to fill about 50% of the active wall space. If you have a tall, narrow wall, choose a vertical portrait format. If you have a wide, open wall, a horizontal landscape or a set of three vertical frames (triptych) works best." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Mastering Color Harmony: Matching Art to Your Décor",
    slug: "color-match",
    badge: "Design",
    read_time: "6 min",
    publishedDate: "2026-07-15",
    seoTitle: "How to Match Wall Art Colors to Your Room Décor | ARTune",
    seoDescription: "Discover how to analyze your room's color palette and select artwork that contrasts or complements your existing tones.",
    categorySlug: "size-guide-1",
    categoryDocumentId: "zv5u5ifuax8ab8vaypvshbst",
    thumbnail: 106, // hero-5.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "You don't need an interior design degree to match art to your room. It all comes down to color harmony. Art can either complement your room by blending with its current colors, or it can stand out by introducing a bold accent color that breaks up monotony." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Complementary vs. Contrasting Palettes",
        image: [39], // 🎨.png
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "If your room is neutral—filled with whites, grays, and wood textures—you have a blank canvas. You can add a splash of deep blue, warm terracotta, or mustard yellow to create energy. Alternatively, if your room already has a strong accent color, choose artwork that contains hints of that color along with neutrals to tie the space together." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "How to Hang Wall Art Correctly: Heights, Layouts & Tips",
    slug: "how-to-hang",
    badge: "Tips",
    read_time: "5 min",
    publishedDate: "2026-07-15",
    seoTitle: "How to Hang Wall Art: Heights & Layout Guide | ARTune",
    seoDescription: "Get the exact height guidelines, drill-free solutions, and alignment tricks for hanging art like a professional curator.",
    categorySlug: "size-guide-1",
    categoryDocumentId: "zv5u5ifuax8ab8vaypvshbst",
    thumbnail: 21, // artune-spine.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Hanging wall art is the final touch of any home design, yet it can be incredibly frustrating. Measuring, leveling, and drilling holes can lead to mistakes. We'll show you how to hang art at the correct gallery height and share modern solutions like the ARTune Spine system for drill-free mounting." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "The 57-Inch Standard Height",
        image: [36], // 🛠️.png
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Art galleries hang their artwork so that the center of the painting is exactly 57 to 60 inches from the floor. This represents the average human eye level. When hanging art above a sofa or console, leave about 6 to 8 inches of breathing room between the bottom of the frame and the top of the furniture." }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "text", text: "If you live in a rental or want to avoid damaging your drywall, look for specialized hanging systems like adhesive alignment spines. They allow you to mount, level, and switch out your artwork without leaving a scratch." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Understanding Composition & Visual Balance in Interiors",
    slug: "composition",
    badge: "Theory",
    read_time: "6 min",
    publishedDate: "2026-07-15",
    seoTitle: "Art Composition and Visual Balance in Interiors | ARTune",
    seoDescription: "Learn how the placement, format, and orientation of wall art affect the scale and feel of your entire room.",
    categorySlug: "size-guide-1",
    categoryDocumentId: "zv5u5ifuax8ab8vaypvshbst",
    thumbnail: 28, // premium-art.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Visual balance is the secret behind rooms that feel professional. Our brains are naturally attracted to order and proportion. By understanding composition—how shapes, weights, and lines align in a room—you can use wall art to make a small room feel larger or a low-ceilinged room feel grand." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Vertical vs. Horizontal Lines",
        image: [108], // graph.svg
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Vertical paintings emphasize height, making them perfect for rooms with low ceilings because they draw the eye upward. Horizontal paintings emphasize width, making them ideal for narrow spaces or wide walls to create a feeling of expanse. Symmetrical groupings of frames add a formal, classic feel, while asymmetrical layouts introduce modern, casual energy." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Join Our Exclusive Art Trade Program for Professionals",
    slug: "trade",
    badge: "Business",
    read_time: "5 min",
    publishedDate: "2026-07-15",
    seoTitle: "ARTune Trade Program for Interior Designers & Architects",
    seoDescription: "Partner with ARTune to get trade pricing, customized sizes, and dedicated consulting for your design firm.",
    categorySlug: "case-studies",
    categoryDocumentId: "braemgpfbu78f86n53prfeu1",
    thumbnail: 83, // our-materials-2.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "If you are an interior designer, architect, home stager, or design professional, wall art is critical to finalizing your client projects. ARTune's Trade Program is built to simplify art sourcing, offer exclusive pricing, and provide custom formats that fit your exact specifications." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Designed for Design Professionals",
        image: [71], // who-we-are.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Members of our Trade Program get direct access to commercial-grade materials, custom sizing, and a dedicated art consultant. Whether you need a single massive custom canvas or unified artwork for a whole residential build, we ensure high quality, fast lead times, and trade-exclusive discounts." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Bulk Art Solutions for Hospitality, Corporate & Commercial Projects",
    slug: "bulk",
    badge: "Business",
    read_time: "6 min",
    publishedDate: "2026-07-15",
    seoTitle: "Bulk & Commercial Art Solutions | ARTune Business",
    seoDescription: "Scale your design projects with bulk pricing, custom frames, and fast shipping for hotels, offices, and commercial real estate.",
    categorySlug: "case-studies",
    categoryDocumentId: "braemgpfbu78f86n53prfeu1",
    thumbnail: 137, // rebel-three.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Commercial spaces require art that is beautiful, durable, and cost-effective at scale. From office hallways to hotel bedrooms, custom artwork transforms blank corporate settings into welcoming, inspiring atmospheres that represent your brand." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Sourcing Art at Scale",
        image: [136], // rebel-one.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "ARTune provides seamless corporate and bulk fulfillment. We handle large volumes with consistency in frame quality, canvas printing, and shipping logistics. Our team can color-match artwork to corporate identity guidelines and supply durable, easy-to-clean framing solutions designed for high-traffic environments." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "Collaborating with Interior Designers: Custom Art Curation",
    slug: "interior-designers",
    badge: "Collab",
    read_time: "5 min",
    publishedDate: "2026-07-15",
    seoTitle: "Interior Designer Collaboration & Case Studies | ARTune",
    seoDescription: "See how professional designers use ARTune to create unified, premium aesthetic environments for high-end residential projects.",
    categorySlug: "case-studies",
    categoryDocumentId: "braemgpfbu78f86n53prfeu1",
    thumbnail: 71, // who-we-are.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "A successful design project is all about collaboration. We partner closely with interior designers to curate collections that integrate with their vision. In this case study, we showcase how custom framed prints were selected to elevate a luxury penthouse project." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "A Case Study in Harmony",
        image: [72], // about-slider-2.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "For a recent coastal penthouse project, the designer wanted a sense of calm sophistication. We provided a series of textured abstract prints with customized floating frames. The final selection mirrored the neutral color palette of the room, adding rich texture without overwhelming the breathtaking ocean views." }
            ]
          }
        ]
      }
    ]
  },
  {
    title: "How to Order Custom Artwork & Personalized Sizes",
    slug: "custom",
    badge: "Service",
    read_time: "4 min",
    publishedDate: "2026-07-15",
    seoTitle: "Order Custom Sizes and Artwork Layouts | ARTune Services",
    seoDescription: "Can't find the size you need? Learn about our custom framing, dimensions, and canvas options tailored to your specific walls.",
    categorySlug: "case-studies",
    categoryDocumentId: "braemgpfbu78f86n53prfeu1",
    thumbnail: 96, // our-materials-1.webp
    description: [
      {
        type: "paragraph",
        children: [
          { type: "text", text: "Standard sizes don't fit every home. If you have an awkwardly sized wall or want a huge, oversized focal piece that isn't listed on our website, we can help. Our team can build custom frames and print bespoke sizes to fit your home's exact dimensions." }
        ]
      }
    ],
    content: [
      {
        __component: "shared.content",
        subheading: "Bespoke Framing and Sizing Options",
        image: [83], // our-materials-2.webp
        text: [
          {
            type: "paragraph",
            children: [
              { type: "text", text: "Ordering a custom piece is easy. Simply contact our support team with your wall measurements and the design you would like. We will provide a digital layout mockup showing how the artwork will sit on your wall, helping you select the perfect custom dimension down to the inch." }
            ]
          }
        ]
      }
    ]
  }
];

async function main() {
  const appContext = await compileStrapi();
  const app = await createStrapi(appContext).load();

  app.log.level = 'info';

  try {
    app.log.info('Starting to seed Inspiration blogs...');

    for (const blog of BLOGS_DATA) {
      // 1. Delete existing blog with same slug to avoid duplicate entries
      const existing = await strapi.documents('api::blog.blog').findMany({
        filters: { slug: blog.slug },
        status: 'all' // check both drafts and published
      });

      for (const entry of existing) {
        app.log.info(`Deleting existing blog with slug: ${blog.slug} (documentId: ${entry.documentId})`);
        await strapi.documents('api::blog.blog').delete({
          documentId: entry.documentId
        });
      }

      // 2. Create the new blog entry (both draft and published versions)
      app.log.info(`Creating blog: "${blog.title}" with slug: ${blog.slug}`);
      await strapi.documents('api::blog.blog').create({
        data: {
          title: blog.title,
          slug: blog.slug,
          badge: blog.badge,
          read_time: blog.read_time,
          publishedDate: blog.publishedDate,
          seoTitle: blog.seoTitle,
          seoDescription: blog.seoDescription,
          thumbnail: blog.thumbnail,
          blogcategories: [blog.categoryDocumentId],
          description: blog.description,
          content: blog.content
        },
        status: 'published' // This automatically publishes the document in Strapi 5
      });
    }

    app.log.info('All 12 Inspiration blogs successfully created and published!');
  } catch (error) {
    app.log.error('Could not seed inspiration blogs data');
    app.log.error(error);
  } finally {
    await app.destroy();
    process.exit(0);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
