import type { Schema, Struct } from '@strapi/strapi';

export interface AboutArtune extends Struct.ComponentSchema {
  collectionName: 'components_about_artunes';
  info: {
    displayName: 'Artune';
    icon: 'layer-group';
  };
  attributes: {
    aboutartunecard: Schema.Attribute.Component<'shared.aboutartunecard', true>;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface AboutEveryone extends Struct.ComponentSchema {
  collectionName: 'components_about_everyones';
  info: {
    displayName: 'Everyone';
    icon: 'globe';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
  };
}

export interface AboutHero extends Struct.ComponentSchema {
  collectionName: 'components_about_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutIdea extends Struct.ComponentSchema {
  collectionName: 'components_about_ideas';
  info: {
    displayName: 'Idea';
    icon: 'lightbulb';
  };
  attributes: {
    aboutideacard: Schema.Attribute.Component<'shared.aboutideacard', true>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface AboutOurstory extends Struct.ComponentSchema {
  collectionName: 'components_about_ourstories';
  info: {
    displayName: 'Ourstory';
    icon: 'book-open';
  };
  attributes: {
    aboutourstorycard: Schema.Attribute.Component<
      'shared.aboutourstorycard',
      true
    >;
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_one: Schema.Attribute.String;
    button_one_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    title: Schema.Attribute.Text;
  };
}

export interface AboutReady extends Struct.ComponentSchema {
  collectionName: 'components_about_readies';
  info: {
    displayName: 'Ready';
    icon: 'check';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    heading: Schema.Attribute.Text;
  };
}

export interface AboutStand extends Struct.ComponentSchema {
  collectionName: 'components_about_stands';
  info: {
    displayName: 'Stand';
    icon: 'shield-alt';
  };
  attributes: {
    aboutstandcard: Schema.Attribute.Component<'shared.aboutstandcard', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface AboutWho extends Struct.ComponentSchema {
  collectionName: 'components_about_whos';
  info: {
    displayName: 'Who';
    icon: 'users';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface ArtscaleChangespace extends Struct.ComponentSchema {
  collectionName: 'components_artscale_changespaces';
  info: {
    displayName: 'Change Space';
    icon: 'sync';
  };
  attributes: {
    after_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    befroe_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ArtscaleHero extends Struct.ComponentSchema {
  collectionName: 'components_artscale_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description_one: Schema.Attribute.Text;
    description_two: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface ArtscaleHow extends Struct.ComponentSchema {
  collectionName: 'components_artscale_hows';
  info: {
    displayName: 'How It Works';
    icon: 'info';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    cardhow: Schema.Attribute.DynamicZone<['shared.cardhow']>;
    heading: Schema.Attribute.String;
  };
}

export interface ArtscalePartner extends Struct.ComponentSchema {
  collectionName: 'components_artscale_partners';
  info: {
    displayName: 'Partner';
    icon: 'users';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    download_button: Schema.Attribute.String;
    download_button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface ArtscalePremium extends Struct.ComponentSchema {
  collectionName: 'components_artscale_premiums';
  info: {
    displayName: 'Premium';
    icon: 'star';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para1: Schema.Attribute.Text;
    para1_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para2: Schema.Attribute.Text;
    para2_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para3: Schema.Attribute.Text;
    para3_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para4: Schema.Attribute.Text;
    para4_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para5: Schema.Attribute.Text;
    para5_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para6: Schema.Attribute.Text;
    para6_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ArtscaleSolution extends Struct.ComponentSchema {
  collectionName: 'components_artscale_solutions';
  info: {
    displayName: 'Solution';
    icon: 'lightbulb';
  };
  attributes: {
    cards: Schema.Attribute.DynamicZone<['shared.cards']>;
    heading: Schema.Attribute.String;
  };
}

export interface ArtscaleSpine extends Struct.ComponentSchema {
  collectionName: 'components_artscale_spines';
  info: {
    displayName: 'Spine';
    icon: 'align-justify';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    card: Schema.Attribute.DynamicZone<['shared.title']>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    iconimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ArtscaleStory extends Struct.ComponentSchema {
  collectionName: 'components_artscale_stories';
  info: {
    displayName: 'Story';
    icon: 'book';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    card: Schema.Attribute.DynamicZone<['shared.cardstroy']>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface CollaborateFit extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_fits';
  info: {
    displayName: 'Fit';
    icon: 'handshake';
  };
  attributes: {
    collfitcard: Schema.Attribute.DynamicZone<['shared.collfitcard']>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface CollaborateHero extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface CollaborateReady extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_readies';
  info: {
    displayName: 'Ready';
    icon: 'check';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface CollaborateSlider extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_sliders';
  info: {
    displayName: 'Slider';
    icon: 'images';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    collaborateslidercard: Schema.Attribute.DynamicZone<
      ['shared.collaborateslidercard']
    >;
    heading: Schema.Attribute.String;
  };
}

export interface CollaborateSubmissionreq extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_submissionreqs';
  info: {
    displayName: 'Submission Requirements';
    icon: 'clipboard-list';
  };
  attributes: {
    collsubreq: Schema.Attribute.DynamicZone<['shared.collsubreqcard']>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface CollaborateWelcome extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_welcomes';
  info: {
    displayName: 'Welcome';
    icon: 'smile';
  };
  attributes: {
    card: Schema.Attribute.DynamicZone<['shared.collaboratewelcomecard']>;
    heading: Schema.Attribute.String;
  };
}

export interface CollaborateWhyjoin extends Struct.ComponentSchema {
  collectionName: 'components_collaborate_whyjoins';
  info: {
    displayName: 'Why Join';
    icon: 'question';
  };
  attributes: {
    card: Schema.Attribute.DynamicZone<['shared.collaboratecardjoin']>;
    heading: Schema.Attribute.String;
  };
}

export interface FooterLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterNavigationColumn extends Struct.ComponentSchema {
  collectionName: 'components_footer_navigation_columns';
  info: {
    displayName: 'Navigation Column';
    icon: 'list-ul';
  };
  attributes: {
    links: Schema.Attribute.Component<'footer.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface FooterSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_footer_social_links';
  info: {
    displayName: 'Social Link';
    icon: 'share-alt';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    platform: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HomeCommonoffer extends Struct.ComponentSchema {
  collectionName: 'components_home_commonoffers';
  info: {
    displayName: 'Commonoffer';
    icon: 'gift';
  };
  attributes: {
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.Text;
    description_two: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    para1: Schema.Attribute.String;
    para2: Schema.Attribute.Text;
  };
}

export interface HomeCommonwhychoose extends Struct.ComponentSchema {
  collectionName: 'components_home_commonwhychooses';
  info: {
    displayName: 'Commonwhychoose';
    icon: 'question';
  };
  attributes: {
    commonwhychoosecard: Schema.Attribute.DynamicZone<
      ['shared.commonwhychoosecard']
    >;
    heading: Schema.Attribute.String;
  };
}

export interface HomeDetailscard extends Struct.ComponentSchema {
  collectionName: 'components_home_detailscards';
  info: {
    displayName: 'Detailscard';
    icon: 'credit-card';
  };
  attributes: {
    detailscard: Schema.Attribute.DynamicZone<['shared.detailscard']>;
  };
}

export interface HomeHomeartist extends Struct.ComponentSchema {
  collectionName: 'components_home_homeartists';
  info: {
    displayName: 'Homeartist';
    icon: 'user-astronaut';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_one: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_three: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_two: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeHomebanner extends Struct.ComponentSchema {
  collectionName: 'components_home_homebanners';
  info: {
    displayName: 'Homebanner';
    icon: 'align-justify';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    buttonbgcolor: Schema.Attribute.String;
    code_value: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    descriptioncolor: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingcolor: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    timer: Schema.Attribute.DateTime;
  };
}

export interface HomeHomebgvideo extends Struct.ComponentSchema {
  collectionName: 'components_home_homebgvideos';
  info: {
    displayName: 'Homebgvideo';
    icon: 'video';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomeHomecollectionbanner extends Struct.ComponentSchema {
  collectionName: 'components_home_homecollectionbanners';
  info: {
    displayName: 'Homecollectionbanner';
    icon: 'image';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_bg: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    buttoncolor: Schema.Attribute.String;
    code_value_textcolor: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingcolor: Schema.Attribute.String;
  };
}

export interface HomeHomethreed extends Struct.ComponentSchema {
  collectionName: 'components_home_homethreeds';
  info: {
    displayName: 'Homethreed';
    icon: 'box';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomeHomewhyartune extends Struct.ComponentSchema {
  collectionName: 'components_home_homewhyartunes';
  info: {
    displayName: 'Homewhyartune';
    icon: 'question-circle';
  };
  attributes: {
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    homewhyartunecard: Schema.Attribute.DynamicZone<
      ['shared.homewhyartunecard']
    >;
  };
}

export interface HomeMainhero extends Struct.ComponentSchema {
  collectionName: 'components_home_mainheroes';
  info: {
    displayName: 'Mainhero';
    icon: 'chalkboard-teacher';
  };
  attributes: {
    heading: Schema.Attribute.Component<'shared.mainleftheading', false>;
    newdrop: Schema.Attribute.Component<'shared.newdrop', false>;
    offer: Schema.Attribute.Component<'shared.offerhero', false>;
    simpleimage: Schema.Attribute.Component<'shared.simple-img', false>;
  };
}

export interface InputAllpostapidata extends Struct.ComponentSchema {
  collectionName: 'components_input_allpostapidata';
  info: {
    displayName: 'allpostapidata';
  };
  attributes: {
    input: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface InputJoinasartistdata extends Struct.ComponentSchema {
  collectionName: 'components_input_joinasartistdata';
  info: {
    displayName: 'joinasartistdata';
  };
  attributes: {
    input: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface InputUploadimgpdf extends Struct.ComponentSchema {
  collectionName: 'components_input_uploadimgpdfs';
  info: {
    displayName: 'uploadimgpdf';
  };
  attributes: {
    upload: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface NavbarColumn extends Struct.ComponentSchema {
  collectionName: 'components_navbar_columns';
  info: {
    displayName: 'Column';
    icon: 'list-ul';
  };
  attributes: {
    links: Schema.Attribute.Component<'navbar.link', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarLink extends Struct.ComponentSchema {
  collectionName: 'components_navbar_links';
  info: {
    displayName: 'Link';
    icon: 'link';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavbarMegaMenu extends Struct.ComponentSchema {
  collectionName: 'components_navbar_mega_menus';
  info: {
    displayName: 'Mega Menu';
    icon: 'th-large';
  };
  attributes: {
    bottom_links: Schema.Attribute.Component<'navbar.link', true>;
    columns: Schema.Attribute.Component<'navbar.column', true>;
    featured_button_label: Schema.Attribute.String;
    featured_button_url: Schema.Attribute.String;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    featured_images_grid: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    featured_subtitle: Schema.Attribute.String;
    featured_title: Schema.Attribute.String;
    featured_type: Schema.Attribute.Enumeration<['image', 'video']>;
  };
}

export interface NavbarMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navbar_menu_items';
  info: {
    displayName: 'Menu Item';
    icon: 'bars';
  };
  attributes: {
    has_mega_menu: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    mega_menu: Schema.Attribute.Component<'navbar.mega-menu', false>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface PhilosophyEco extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_ecos';
  info: {
    displayName: 'Eco';
    icon: 'leaf';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface PhilosophyHero extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface PhilosophyJourney extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_journeys';
  info: {
    displayName: 'Journey';
    icon: 'map-marker-alt';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    philosophyjourneycard: Schema.Attribute.DynamicZone<
      ['shared.philosophyjourneycard']
    >;
  };
}

export interface PhilosophyManifesto extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_manifestos';
  info: {
    displayName: 'Manifesto';
    icon: 'bullhorn';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
    text4: Schema.Attribute.Text;
  };
}

export interface PhilosophyMaterial extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_materials';
  info: {
    displayName: 'Material';
    icon: 'box';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    philosophymaterialcard: Schema.Attribute.DynamicZone<
      ['shared.philosophymaterialcard']
    >;
  };
}

export interface PhilosophyOureco extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_ourecos';
  info: {
    displayName: 'Our Eco';
    icon: 'globe-americas';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    philosophyourecocard: Schema.Attribute.DynamicZone<
      ['shared.philosophyourecocard']
    >;
  };
}

export interface PhilosophyValue extends Struct.ComponentSchema {
  collectionName: 'components_philosophy_values';
  info: {
    displayName: 'Value';
    icon: 'hand-holding-usd';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface PromotionsBundlelist extends Struct.ComponentSchema {
  collectionName: 'components_promotions_bundlelists';
  info: {
    displayName: 'Bundle List';
    icon: 'cubes';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    promotionproducts: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotionproduct.promotionproduct'
    >;
    title: Schema.Attribute.String;
  };
}

export interface PromotionsCollection extends Struct.ComponentSchema {
  collectionName: 'components_promotions_collections';
  info: {
    displayName: 'Collection';
    icon: 'images';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    claimed: Schema.Attribute.Integer;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leftItems: Schema.Attribute.Integer;
    timer: Schema.Attribute.DateTime;
    timertitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalItems: Schema.Attribute.Integer;
  };
}

export interface PromotionsDepthsale extends Struct.ComponentSchema {
  collectionName: 'components_promotions_depthsales';
  info: {
    displayName: 'Depth Sale';
    icon: 'percentage';
  };
  attributes: {
    badge: Schema.Attribute.String;
    codevalue: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    productdescription: Schema.Attribute.String;
    productheading: Schema.Attribute.String;
    promotion_assets_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotion-assets-list.promotion-assets-list'
    >;
  };
}

export interface PromotionsFeatureddrop extends Struct.ComponentSchema {
  collectionName: 'components_promotions_featured_drops';
  info: {
    displayName: 'Featured Drop';
    icon: 'bolt';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface PromotionsFlashsale extends Struct.ComponentSchema {
  collectionName: 'components_promotions_flashsales';
  info: {
    displayName: 'Flash Sale';
    icon: 'bolt';
  };
  attributes: {
    allproductoff: Schema.Attribute.String;
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    offertext: Schema.Attribute.String;
    productheading: Schema.Attribute.String;
    promotion_assets_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotion-assets-list.promotion-assets-list'
    >;
    salevalue: Schema.Attribute.String;
    timer: Schema.Attribute.DateTime;
  };
}

export interface PromotionsHero extends Struct.ComponentSchema {
  collectionName: 'components_promotions_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    badge: Schema.Attribute.String;
    badgebgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.String;
    endtime: Schema.Attribute.DateTime;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    slug: Schema.Attribute.String;
    slugmatch: Schema.Attribute.String;
  };
}

export interface PromotionsSeasonalsale extends Struct.ComponentSchema {
  collectionName: 'components_promotions_seasonalsales';
  info: {
    displayName: 'Seasonal Sale';
    icon: 'cloud-sun';
  };
  attributes: {
    badge: Schema.Attribute.String;
    codevalue: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    productdescription: Schema.Attribute.String;
    productheading: Schema.Attribute.String;
    promotion_assets_lists: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotion-assets-list.promotion-assets-list'
    >;
  };
}

export interface PromotionsVip extends Struct.ComponentSchema {
  collectionName: 'components_promotions_vips';
  info: {
    displayName: 'VIP';
    icon: 'star';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutartunecard extends Struct.ComponentSchema {
  collectionName: 'components_shared_aboutartunecards';
  info: {
    displayName: 'aboutartunecard';
  };
  attributes: {
    description: Schema.Attribute.String;
    description1: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutideacard extends Struct.ComponentSchema {
  collectionName: 'components_shared_aboutideacards';
  info: {
    displayName: 'aboutideacard';
  };
  attributes: {
    iconimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutourstorycard extends Struct.ComponentSchema {
  collectionName: 'components_shared_aboutourstorycards';
  info: {
    displayName: 'aboutourstorycard';
  };
  attributes: {
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    text4: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedAboutstandcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_aboutstandcards';
  info: {
    displayName: 'aboutstandcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedAtunewhycard extends Struct.ComponentSchema {
  collectionName: 'components_shared_atunewhycards';
  info: {
    displayName: 'Atunewhycard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedBadgevalue extends Struct.ComponentSchema {
  collectionName: 'components_shared_badgevalues';
  info: {
    displayName: 'badgevalue';
  };
  attributes: {
    badgevalue: Schema.Attribute.String;
  };
}

export interface SharedCardhow extends Struct.ComponentSchema {
  collectionName: 'components_shared_cardhows';
  info: {
    displayName: 'cardhow';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCards extends Struct.ComponentSchema {
  collectionName: 'components_shared_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.Text;
  };
}

export interface SharedCardstroy extends Struct.ComponentSchema {
  collectionName: 'components_shared_cardstroys';
  info: {
    displayName: 'cardstroy';
  };
  attributes: {
    address: Schema.Attribute.Text;
    bage: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    tile: Schema.Attribute.String;
  };
}

export interface SharedCodevalue extends Struct.ComponentSchema {
  collectionName: 'components_shared_codevalues';
  info: {
    displayName: 'codevalue';
  };
  attributes: {
    code: Schema.Attribute.String;
    code_value: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingcode: Schema.Attribute.String;
    headingoff: Schema.Attribute.String;
  };
}

export interface SharedCollaboratecardjoin extends Struct.ComponentSchema {
  collectionName: 'components_shared_collaboratecardjoins';
  info: {
    displayName: 'collaboratecardjoin';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCollaborateslidercard extends Struct.ComponentSchema {
  collectionName: 'components_shared_collaborateslidercards';
  info: {
    displayName: 'collaborateslidercard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCollaboratewelcomecard extends Struct.ComponentSchema {
  collectionName: 'components_shared_collaboratewelcomecards';
  info: {
    displayName: 'collaboratewelcomecard';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCollfitcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_collfitcards';
  info: {
    displayName: 'collfitcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCollsubreqcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_collsubreqcards';
  info: {
    displayName: 'collsubreqcard';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedCommonwhychoosecard extends Struct.ComponentSchema {
  collectionName: 'components_shared_commonwhychoosecards';
  info: {
    displayName: 'commonwhychoosecard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedContent extends Struct.ComponentSchema {
  collectionName: 'components_shared_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subheading: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
  };
}

export interface SharedDetailscard extends Struct.ComponentSchema {
  collectionName: 'components_shared_detailscards';
  info: {
    displayName: 'detailscard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedFlashsaleproduct extends Struct.ComponentSchema {
  collectionName: 'components_shared_flashsaleproducts';
  info: {
    displayName: 'flashsaleproduct';
  };
  attributes: {};
}

export interface SharedFormatcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_formatcards';
  info: {
    displayName: 'formatcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.Text;
    iconimage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SharedGallerybundleslug extends Struct.ComponentSchema {
  collectionName: 'components_shared_gallerybundleslugs';
  info: {
    displayName: 'gallerybundleslug';
  };
  attributes: {
    slug: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedHomewhyartunecard extends Struct.ComponentSchema {
  collectionName: 'components_shared_homewhyartunecards';
  info: {
    displayName: 'homewhyartunecard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedJoinartist extends Struct.ComponentSchema {
  collectionName: 'components_shared_joinartists';
  info: {
    displayName: 'joinartist';
  };
  attributes: {};
}

export interface SharedJoinasartist extends Struct.ComponentSchema {
  collectionName: 'components_shared_joinasartists';
  info: {
    displayName: 'joinasartist';
  };
  attributes: {
    input: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SharedMainheading extends Struct.ComponentSchema {
  collectionName: 'components_shared_mainheadings';
  info: {
    displayName: 'mainheading';
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedMainleftheading extends Struct.ComponentSchema {
  collectionName: 'components_shared_mainleftheadings';
  info: {
    displayName: 'mainleftheading';
  };
  attributes: {
    bgcolorcode: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image_left: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_right: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    images_main: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedNewdrop extends Struct.ComponentSchema {
  collectionName: 'components_shared_newdrops';
  info: {
    displayName: 'newdrop';
  };
  attributes: {
    badge: Schema.Attribute.String;
    badgebgcolor: Schema.Attribute.String;
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface SharedOfferhero extends Struct.ComponentSchema {
  collectionName: 'components_shared_offerheroes';
  info: {
    displayName: 'offerhero';
  };
  attributes: {
    bgcolorcode: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    codevaluedata: Schema.Attribute.Component<'shared.codevalue', true>;
  };
}

export interface SharedPhilosophyjourneycard extends Struct.ComponentSchema {
  collectionName: 'components_shared_philosophyjourneycards';
  info: {
    displayName: 'philosophyjourneycard';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPhilosophymaterialcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_philosophymaterialcards';
  info: {
    displayName: 'philosophymaterialcard';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedPhilosophyourecocard extends Struct.ComponentSchema {
  collectionName: 'components_shared_philosophyourecocards';
  info: {
    displayName: 'philosophyourecocard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedProductaddslug extends Struct.ComponentSchema {
  collectionName: 'components_shared_productaddslugs';
  info: {
    displayName: 'productaddslug';
  };
  attributes: {};
}

export interface SharedPromotionscategorydatalistdyanmic
  extends Struct.ComponentSchema {
  collectionName: 'components_shared_promotionscategorydatalistdyanmics';
  info: {
    displayName: 'Promotionscategorydatalistdyanmic';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSeodetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_seodetails';
  info: {
    displayName: 'seodetails';
  };
  attributes: {
    key: Schema.Attribute.String;
    value: Schema.Attribute.Text;
  };
}

export interface SharedSimpleImg extends Struct.ComponentSchema {
  collectionName: 'components_shared_simple_imgs';
  info: {
    displayName: 'simple_img';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedSizedetailcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizedetailcards';
  info: {
    displayName: 'sizedetailcard';
  };
  attributes: {
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSizefaqcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizefaqcards';
  info: {
    displayName: 'sizefaqcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSizeherocard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizeherocards';
  info: {
    displayName: 'sizeherocard';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    size: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSizepremadecard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizepremadecards';
  info: {
    displayName: 'sizepremadecard';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSizetrustcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizetrustcards';
  info: {
    displayName: 'sizetrustcard';
  };
  attributes: {
    description: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSizetwomaterialcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizetwomaterialcards';
  info: {
    displayName: 'sizetwomaterialcard';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSizeyourformatcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_sizeyourformatcards';
  info: {
    displayName: 'sizeyourformatcard';
  };
  attributes: {
    badge: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSpinenodrillcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_spinenodrillcards';
  info: {
    displayName: 'spinenodrillcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSpineslidercard extends Struct.ComponentSchema {
  collectionName: 'components_shared_spineslidercards';
  info: {
    displayName: 'spineslidercard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSpinestepcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_spinestepcards';
  info: {
    displayName: 'spinestepcard';
  };
  attributes: {
    description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedSpinesystemcard extends Struct.ComponentSchema {
  collectionName: 'components_shared_spinesystemcards';
  info: {
    displayName: 'spinesystemcard';
  };
  attributes: {
    badge: Schema.Attribute.String;
    Size: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedTabel extends Struct.ComponentSchema {
  collectionName: 'components_shared_tabels';
  info: {
    displayName: 'tabel';
  };
  attributes: {
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
  };
}

export interface SharedTile extends Struct.ComponentSchema {
  collectionName: 'components_shared_tiles';
  info: {
    displayName: 'tile';
  };
  attributes: {};
}

export interface SharedTitle extends Struct.ComponentSchema {
  collectionName: 'components_shared_titles';
  info: {
    displayName: 'title';
  };
  attributes: {
    heading: Schema.Attribute.String;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
  };
}

export interface SizeArt extends Struct.ComponentSchema {
  collectionName: 'components_size_arts';
  info: {
    displayName: 'Art';
    icon: 'image';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface SizeComparison extends Struct.ComponentSchema {
  collectionName: 'components_size_comparisons';
  info: {
    displayName: 'Comparison';
    icon: 'balance-scale';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    tabel: Schema.Attribute.DynamicZone<['shared.tabel']>;
  };
}

export interface SizeDetail extends Struct.ComponentSchema {
  collectionName: 'components_size_details';
  info: {
    displayName: 'Detail';
    icon: 'info-circle';
  };
  attributes: {
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.Text;
    description_two: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sizedetailcard: Schema.Attribute.DynamicZone<['shared.sizedetailcard']>;
  };
}

export interface SizeFaq extends Struct.ComponentSchema {
  collectionName: 'components_size_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question-circle';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    sizefaqcard: Schema.Attribute.DynamicZone<['shared.sizefaqcard']>;
  };
}

export interface SizeFormat extends Struct.ComponentSchema {
  collectionName: 'components_size_formats';
  info: {
    displayName: 'Format';
    icon: 'compress';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    formatcard: Schema.Attribute.DynamicZone<['shared.formatcard']>;
    heading: Schema.Attribute.String;
  };
}

export interface SizeGeometry extends Struct.ComponentSchema {
  collectionName: 'components_size_geometries';
  info: {
    displayName: 'Geometry';
    icon: 'shapes';
  };
  attributes: {
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgdes: Schema.Attribute.String;
    imgdetails: Schema.Attribute.String;
    imgtitle: Schema.Attribute.String;
    size: Schema.Attribute.String;
    sizedetails: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface SizeHero extends Struct.ComponentSchema {
  collectionName: 'components_size_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sizeherocard: Schema.Attribute.DynamicZone<['shared.sizeherocard']>;
  };
}

export interface SizePremade extends Struct.ComponentSchema {
  collectionName: 'components_size_premades';
  info: {
    displayName: 'Premade';
    icon: 'box-open';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sizepremadecard: Schema.Attribute.DynamicZone<['shared.sizepremadecard']>;
  };
}

export interface SizeTrust extends Struct.ComponentSchema {
  collectionName: 'components_size_trusts';
  info: {
    displayName: 'Trust';
    icon: 'shield-alt';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sizetrustcard: Schema.Attribute.DynamicZone<['shared.sizetrustcard']>;
  };
}

export interface SizeTwomaterial extends Struct.ComponentSchema {
  collectionName: 'components_size_twomaterials';
  info: {
    displayName: 'Two Material';
    icon: 'layer-group';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sizetwomaterialcard: Schema.Attribute.DynamicZone<
      ['shared.sizetwomaterialcard']
    >;
  };
}

export interface SizeYourformat extends Struct.ComponentSchema {
  collectionName: 'components_size_yourformats';
  info: {
    displayName: 'Your Format';
    icon: 'expand-arrows-alt';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    sizeyourformatcard: Schema.Attribute.DynamicZone<
      ['shared.sizeyourformatcard']
    >;
    title: Schema.Attribute.String;
  };
}

export interface SpineAdvantage extends Struct.ComponentSchema {
  collectionName: 'components_spine_advantages';
  info: {
    displayName: 'Advantage';
    icon: 'award';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SpineGet extends Struct.ComponentSchema {
  collectionName: 'components_spine_gets';
  info: {
    displayName: 'Get';
    icon: 'hand-holding';
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SpineHero extends Struct.ComponentSchema {
  collectionName: 'components_spine_heroes';
  info: {
    displayName: 'Hero';
    icon: 'layout';
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SpineNodrill extends Struct.ComponentSchema {
  collectionName: 'components_spine_nodrills';
  info: {
    displayName: 'No Drill';
    icon: 'ban';
  };
  attributes: {
    button: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    spinenodrillcard: Schema.Attribute.DynamicZone<['shared.spinenodrillcard']>;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SpineOnesystem extends Struct.ComponentSchema {
  collectionName: 'components_spine_onesystems';
  info: {
    displayName: 'One System';
    icon: 'cog';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    spinesystemcard: Schema.Attribute.DynamicZone<['shared.spinesystemcard']>;
    text_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.Text;
  };
}

export interface SpineSlider extends Struct.ComponentSchema {
  collectionName: 'components_spine_sliders';
  info: {
    displayName: 'Slider';
    icon: 'images';
  };
  attributes: {
    heading: Schema.Attribute.String;
    spineslidercard: Schema.Attribute.DynamicZone<['shared.spineslidercard']>;
  };
}

export interface SpineStep extends Struct.ComponentSchema {
  collectionName: 'components_spine_steps';
  info: {
    displayName: 'Step';
    icon: 'list-ol';
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    downlaodspdf_button: Schema.Attribute.Media<'files'>;
    downlaodspdf_button_url: Schema.Attribute.Media<'files' | 'audios'>;
    heading: Schema.Attribute.String;
    spinestepcard: Schema.Attribute.DynamicZone<['shared.spinestepcard']>;
  };
}

export interface SpineThreemin extends Struct.ComponentSchema {
  collectionName: 'components_spine_threemins';
  info: {
    displayName: 'Three Min';
    icon: 'clock';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about.artune': AboutArtune;
      'about.everyone': AboutEveryone;
      'about.hero': AboutHero;
      'about.idea': AboutIdea;
      'about.ourstory': AboutOurstory;
      'about.ready': AboutReady;
      'about.stand': AboutStand;
      'about.who': AboutWho;
      'artscale.changespace': ArtscaleChangespace;
      'artscale.hero': ArtscaleHero;
      'artscale.how': ArtscaleHow;
      'artscale.partner': ArtscalePartner;
      'artscale.premium': ArtscalePremium;
      'artscale.solution': ArtscaleSolution;
      'artscale.spine': ArtscaleSpine;
      'artscale.story': ArtscaleStory;
      'collaborate.fit': CollaborateFit;
      'collaborate.hero': CollaborateHero;
      'collaborate.ready': CollaborateReady;
      'collaborate.slider': CollaborateSlider;
      'collaborate.submissionreq': CollaborateSubmissionreq;
      'collaborate.welcome': CollaborateWelcome;
      'collaborate.whyjoin': CollaborateWhyjoin;
      'footer.link': FooterLink;
      'footer.navigation-column': FooterNavigationColumn;
      'footer.social-link': FooterSocialLink;
      'home.commonoffer': HomeCommonoffer;
      'home.commonwhychoose': HomeCommonwhychoose;
      'home.detailscard': HomeDetailscard;
      'home.homeartist': HomeHomeartist;
      'home.homebanner': HomeHomebanner;
      'home.homebgvideo': HomeHomebgvideo;
      'home.homecollectionbanner': HomeHomecollectionbanner;
      'home.homethreed': HomeHomethreed;
      'home.homewhyartune': HomeHomewhyartune;
      'home.mainhero': HomeMainhero;
      'input.allpostapidata': InputAllpostapidata;
      'input.joinasartistdata': InputJoinasartistdata;
      'input.uploadimgpdf': InputUploadimgpdf;
      'navbar.column': NavbarColumn;
      'navbar.link': NavbarLink;
      'navbar.mega-menu': NavbarMegaMenu;
      'navbar.menu-item': NavbarMenuItem;
      'philosophy.eco': PhilosophyEco;
      'philosophy.hero': PhilosophyHero;
      'philosophy.journey': PhilosophyJourney;
      'philosophy.manifesto': PhilosophyManifesto;
      'philosophy.material': PhilosophyMaterial;
      'philosophy.oureco': PhilosophyOureco;
      'philosophy.value': PhilosophyValue;
      'promotions.bundlelist': PromotionsBundlelist;
      'promotions.collection': PromotionsCollection;
      'promotions.depthsale': PromotionsDepthsale;
      'promotions.featureddrop': PromotionsFeatureddrop;
      'promotions.flashsale': PromotionsFlashsale;
      'promotions.hero': PromotionsHero;
      'promotions.seasonalsale': PromotionsSeasonalsale;
      'promotions.vip': PromotionsVip;
      'shared.aboutartunecard': SharedAboutartunecard;
      'shared.aboutideacard': SharedAboutideacard;
      'shared.aboutourstorycard': SharedAboutourstorycard;
      'shared.aboutstandcard': SharedAboutstandcard;
      'shared.atunewhycard': SharedAtunewhycard;
      'shared.badgevalue': SharedBadgevalue;
      'shared.cardhow': SharedCardhow;
      'shared.cards': SharedCards;
      'shared.cardstroy': SharedCardstroy;
      'shared.codevalue': SharedCodevalue;
      'shared.collaboratecardjoin': SharedCollaboratecardjoin;
      'shared.collaborateslidercard': SharedCollaborateslidercard;
      'shared.collaboratewelcomecard': SharedCollaboratewelcomecard;
      'shared.collfitcard': SharedCollfitcard;
      'shared.collsubreqcard': SharedCollsubreqcard;
      'shared.commonwhychoosecard': SharedCommonwhychoosecard;
      'shared.content': SharedContent;
      'shared.detailscard': SharedDetailscard;
      'shared.flashsaleproduct': SharedFlashsaleproduct;
      'shared.formatcard': SharedFormatcard;
      'shared.gallerybundleslug': SharedGallerybundleslug;
      'shared.homewhyartunecard': SharedHomewhyartunecard;
      'shared.joinartist': SharedJoinartist;
      'shared.joinasartist': SharedJoinasartist;
      'shared.mainheading': SharedMainheading;
      'shared.mainleftheading': SharedMainleftheading;
      'shared.media': SharedMedia;
      'shared.newdrop': SharedNewdrop;
      'shared.offerhero': SharedOfferhero;
      'shared.philosophyjourneycard': SharedPhilosophyjourneycard;
      'shared.philosophymaterialcard': SharedPhilosophymaterialcard;
      'shared.philosophyourecocard': SharedPhilosophyourecocard;
      'shared.productaddslug': SharedProductaddslug;
      'shared.promotionscategorydatalistdyanmic': SharedPromotionscategorydatalistdyanmic;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.seodetails': SharedSeodetails;
      'shared.simple-img': SharedSimpleImg;
      'shared.sizedetailcard': SharedSizedetailcard;
      'shared.sizefaqcard': SharedSizefaqcard;
      'shared.sizeherocard': SharedSizeherocard;
      'shared.sizepremadecard': SharedSizepremadecard;
      'shared.sizetrustcard': SharedSizetrustcard;
      'shared.sizetwomaterialcard': SharedSizetwomaterialcard;
      'shared.sizeyourformatcard': SharedSizeyourformatcard;
      'shared.slider': SharedSlider;
      'shared.spinenodrillcard': SharedSpinenodrillcard;
      'shared.spineslidercard': SharedSpineslidercard;
      'shared.spinestepcard': SharedSpinestepcard;
      'shared.spinesystemcard': SharedSpinesystemcard;
      'shared.tabel': SharedTabel;
      'shared.tile': SharedTile;
      'shared.title': SharedTitle;
      'size.art': SizeArt;
      'size.comparison': SizeComparison;
      'size.detail': SizeDetail;
      'size.faq': SizeFaq;
      'size.format': SizeFormat;
      'size.geometry': SizeGeometry;
      'size.hero': SizeHero;
      'size.premade': SizePremade;
      'size.trust': SizeTrust;
      'size.twomaterial': SizeTwomaterial;
      'size.yourformat': SizeYourformat;
      'spine.advantage': SpineAdvantage;
      'spine.get': SpineGet;
      'spine.hero': SpineHero;
      'spine.nodrill': SpineNodrill;
      'spine.onesystem': SpineOnesystem;
      'spine.slider': SpineSlider;
      'spine.step': SpineStep;
      'spine.threemin': SpineThreemin;
    }
  }
}
