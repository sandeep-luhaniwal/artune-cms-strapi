import type { Schema, Struct } from '@strapi/strapi';

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

export interface SharedCollaboratecardjoin extends Struct.ComponentSchema {
  collectionName: 'components_shared_collaboratecardjoins';
  info: {
    displayName: 'collaboratecardjoin';
  };
  attributes: {
    button: Schema.Attribute.String;
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

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.aboutartunecard': SharedAboutartunecard;
      'shared.aboutideacard': SharedAboutideacard;
      'shared.aboutourstorycard': SharedAboutourstorycard;
      'shared.aboutstandcard': SharedAboutstandcard;
      'shared.cardhow': SharedCardhow;
      'shared.cards': SharedCards;
      'shared.cardstroy': SharedCardstroy;
      'shared.collaboratecardjoin': SharedCollaboratecardjoin;
      'shared.collaborateslidercard': SharedCollaborateslidercard;
      'shared.collaboratewelcomecard': SharedCollaboratewelcomecard;
      'shared.collfitcard': SharedCollfitcard;
      'shared.collsubreqcard': SharedCollsubreqcard;
      'shared.media': SharedMedia;
      'shared.philosophyjourneycard': SharedPhilosophyjourneycard;
      'shared.philosophymaterialcard': SharedPhilosophymaterialcard;
      'shared.philosophyourecocard': SharedPhilosophyourecocard;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
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
      'shared.tile': SharedTile;
      'shared.title': SharedTitle;
    }
  }
}
