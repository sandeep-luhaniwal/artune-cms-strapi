import type { Schema, Struct } from '@strapi/strapi';

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    description: '';
    displayName: 'Api Token';
    name: 'Api Token';
    pluralName: 'api-tokens';
    singularName: 'api-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    encryptedKey: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    description: '';
    displayName: 'API Token Permission';
    name: 'API Token Permission';
    pluralName: 'api-token-permissions';
    singularName: 'api-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'Permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'> &
      Schema.Attribute.Private;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'Role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'> &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
  };
}

export interface AdminSession extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_sessions';
  info: {
    description: 'Session Manager storage';
    displayName: 'Session';
    name: 'Session';
    pluralName: 'sessions';
    singularName: 'session';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
    i18n: {
      localized: false;
    };
  };
  attributes: {
    absoluteExpiresAt: Schema.Attribute.DateTime & Schema.Attribute.Private;
    childId: Schema.Attribute.String & Schema.Attribute.Private;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    deviceId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    expiresAt: Schema.Attribute.DateTime &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::session'> &
      Schema.Attribute.Private;
    origin: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sessionId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique;
    status: Schema.Attribute.String & Schema.Attribute.Private;
    type: Schema.Attribute.String & Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    userId: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    description: '';
    displayName: 'Transfer Token';
    name: 'Transfer Token';
    pluralName: 'transfer-tokens';
    singularName: 'transfer-token';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    expiresAt: Schema.Attribute.DateTime;
    lastUsedAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    description: '';
    displayName: 'Transfer Token Permission';
    name: 'Transfer Token Permission';
    pluralName: 'transfer-token-permissions';
    singularName: 'transfer-token-permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'User';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'> &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    preferedLanguage: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String;
  };
}

export interface ApiAboutartuneAboutartune extends Struct.SingleTypeSchema {
  collectionName: 'aboutartunes';
  info: {
    displayName: 'Aboutartune';
    pluralName: 'aboutartunes';
    singularName: 'aboutartune';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutartunecard: Schema.Attribute.DynamicZone<['shared.aboutartunecard']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aboutartune.aboutartune'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAbouteveryoneAbouteveryone extends Struct.SingleTypeSchema {
  collectionName: 'abouteveryones';
  info: {
    displayName: 'Abouteveryone';
    pluralName: 'abouteveryones';
    singularName: 'abouteveryone';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::abouteveryone.abouteveryone'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutheroAbouthero extends Struct.SingleTypeSchema {
  collectionName: 'aboutheroes';
  info: {
    displayName: 'Abouthero';
    pluralName: 'aboutheroes';
    singularName: 'abouthero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::abouthero.abouthero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutideaAboutidea extends Struct.SingleTypeSchema {
  collectionName: 'aboutideas';
  info: {
    displayName: 'Aboutidea';
    pluralName: 'aboutideas';
    singularName: 'aboutidea';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutideacard: Schema.Attribute.DynamicZone<['shared.aboutideacard']>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aboutidea.aboutidea'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutourstoryAboutourstory extends Struct.SingleTypeSchema {
  collectionName: 'aboutourstories';
  info: {
    displayName: 'Aboutourstory';
    pluralName: 'aboutourstories';
    singularName: 'aboutourstory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutourstorycard: Schema.Attribute.DynamicZone<
      ['shared.aboutourstorycard']
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
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aboutourstory.aboutourstory'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutreadyAboutready extends Struct.SingleTypeSchema {
  collectionName: 'aboutreadies';
  info: {
    displayName: 'Aboutready';
    pluralName: 'aboutreadies';
    singularName: 'aboutready';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aboutready.aboutready'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutstandAboutstand extends Struct.SingleTypeSchema {
  collectionName: 'aboutstands';
  info: {
    displayName: 'Aboutstand';
    pluralName: 'aboutstands';
    singularName: 'aboutstand';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    aboutstandcard: Schema.Attribute.DynamicZone<['shared.aboutstandcard']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aboutstand.aboutstand'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiAboutwhoAboutwho extends Struct.SingleTypeSchema {
  collectionName: 'aboutwhos';
  info: {
    displayName: 'Aboutwho';
    pluralName: 'aboutwhos';
    singularName: 'aboutwho';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::aboutwho.aboutwho'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalechangespaceArtscalechangespace
  extends Struct.SingleTypeSchema {
  collectionName: 'artscalechangespaces';
  info: {
    displayName: 'Artscalechangespace';
    pluralName: 'artscalechangespaces';
    singularName: 'artscalechangespace';
  };
  options: {
    draftAndPublish: true;
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
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalechangespace.artscalechangespace'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscaleheroArtscalehero extends Struct.SingleTypeSchema {
  collectionName: 'artscaleheroes';
  info: {
    displayName: 'Artscalehero';
    pluralName: 'artscaleheroes';
    singularName: 'artscalehero';
  };
  options: {
    draftAndPublish: true;
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
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description_one: Schema.Attribute.Text;
    description_two: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalehero.artscalehero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalehowArtscalehow extends Struct.SingleTypeSchema {
  collectionName: 'artscalehows';
  info: {
    displayName: 'Artscalehow';
    pluralName: 'artscalehows';
    singularName: 'artscalehow';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    cardhow: Schema.Attribute.DynamicZone<['shared.cardhow']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalehow.artscalehow'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalepartnerArtscalepartner
  extends Struct.SingleTypeSchema {
  collectionName: 'artscalepartners';
  info: {
    displayName: 'Artscalepartner';
    pluralName: 'artscalepartners';
    singularName: 'artscalepartner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    download_button: Schema.Attribute.String;
    download_button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalepartner.artscalepartner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalepremiumArtscalepremium
  extends Struct.SingleTypeSchema {
  collectionName: 'artscalepremiums';
  info: {
    displayName: 'Artscalepremium';
    pluralName: 'artscalepremiums';
    singularName: 'artscalepremium';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalepremium.artscalepremium'
    > &
      Schema.Attribute.Private;
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
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalesoutionArtscalesoution
  extends Struct.SingleTypeSchema {
  collectionName: 'artscalesoutions';
  info: {
    displayName: 'Artscalesoution';
    pluralName: 'artscalesoutions';
    singularName: 'artscalesoution';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    cards: Schema.Attribute.DynamicZone<['shared.cards']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalesoution.artscalesoution'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalespineArtscalespine extends Struct.SingleTypeSchema {
  collectionName: 'artscalespines';
  info: {
    displayName: 'Artscalespine';
    pluralName: 'artscalespines';
    singularName: 'artscalespine';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    card: Schema.Attribute.DynamicZone<['shared.title']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    iconimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalespine.artscalespine'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiArtscalestoryArtscalestory extends Struct.SingleTypeSchema {
  collectionName: 'artscalestories';
  info: {
    displayName: 'Artscalestory';
    pluralName: 'artscalestories';
    singularName: 'artscalestory';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    card: Schema.Attribute.DynamicZone<['shared.cardstroy']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::artscalestory.artscalestory'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogCategoryBlogCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'blog_categories';
  info: {
    displayName: 'BlogCategory';
    pluralName: 'blog-categories';
    singularName: 'blog-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    blog: Schema.Attribute.Relation<'manyToOne', 'api::blog.blog'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-category.blog-category'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiBlogBlog extends Struct.CollectionTypeSchema {
  collectionName: 'blogs';
  info: {
    displayName: 'blog';
    pluralName: 'blogs';
    singularName: 'blog';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.String;
    blogcategories: Schema.Attribute.Relation<
      'oneToMany',
      'api::blog-category.blog-category'
    >;
    content: Schema.Attribute.DynamicZone<['shared.content']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::blog.blog'> &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    publishedDate: Schema.Attribute.Date;
    read_time: Schema.Attribute.String;
    seoDescription: Schema.Attribute.Text;
    seoTitle: Schema.Attribute.String;
    slug: Schema.Attribute.UID<'title'>;
    thumbnail: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaborateReadyCollaborateReady
  extends Struct.SingleTypeSchema {
  collectionName: 'collaborate_readies';
  info: {
    displayName: 'CollaborateReady';
    pluralName: 'collaborate-readies';
    singularName: 'collaborate-ready';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaborate-ready.collaborate-ready'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaboratefitCollaboratefit
  extends Struct.SingleTypeSchema {
  collectionName: 'collaboratefits';
  info: {
    displayName: 'Collaboratefit';
    pluralName: 'collaboratefits';
    singularName: 'collaboratefit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collfitcard: Schema.Attribute.DynamicZone<['shared.collfitcard']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaboratefit.collaboratefit'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaborateheroCollaboratehero
  extends Struct.SingleTypeSchema {
  collectionName: 'collaborateheroes';
  info: {
    displayName: 'Collaboratehero';
    pluralName: 'collaborateheroes';
    singularName: 'collaboratehero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaboratehero.collaboratehero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaboratesliderCollaborateslider
  extends Struct.SingleTypeSchema {
  collectionName: 'collaboratesliders';
  info: {
    displayName: 'Collaborateslider';
    pluralName: 'collaboratesliders';
    singularName: 'collaborateslider';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    collaborateslidercard: Schema.Attribute.DynamicZone<
      ['shared.collaborateslidercard']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaborateslider.collaborateslider'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaboratesubmissionreqCollaboratesubmissionreq
  extends Struct.SingleTypeSchema {
  collectionName: 'collaboratesubmissionreqs';
  info: {
    displayName: 'Collaboratesubmissionreq';
    pluralName: 'collaboratesubmissionreqs';
    singularName: 'collaboratesubmissionreq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    collsubreq: Schema.Attribute.DynamicZone<['shared.collsubreqcard']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaboratesubmissionreq.collaboratesubmissionreq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaboratewhyjoinCollaboratewhyjoin
  extends Struct.SingleTypeSchema {
  collectionName: 'collaboratewhyjoins';
  info: {
    displayName: 'Collaboratewhyjoin';
    pluralName: 'collaboratewhyjoins';
    singularName: 'collaboratewhyjoin';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card: Schema.Attribute.DynamicZone<['shared.collaboratecardjoin']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaboratewhyjoin.collaboratewhyjoin'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollaboratwelcomeCollaboratwelcome
  extends Struct.SingleTypeSchema {
  collectionName: 'collaboratwelcomes';
  info: {
    displayName: 'Collaboratwelcome';
    pluralName: 'collaboratwelcomes';
    singularName: 'collaboratwelcome';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    card: Schema.Attribute.DynamicZone<['shared.collaboratewelcomecard']>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collaboratwelcome.collaboratwelcome'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCollectionBannerCollectionBanner
  extends Struct.CollectionTypeSchema {
  collectionName: 'collection_banners';
  info: {
    displayName: 'collectionBanner';
    pluralName: 'collection-banners';
    singularName: 'collection-banner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.String;
    badgebgcolor: Schema.Attribute.String;
    bgcolor: Schema.Attribute.String;
    bgimage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    buttonbgcolor: Schema.Attribute.String;
    buttontextcolor: Schema.Attribute.String;
    code_value: Schema.Attribute.String;
    code_value_bgcolor: Schema.Attribute.String;
    code_value_textcolor: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    end_code_textcolor: Schema.Attribute.String;
    end_text: Schema.Attribute.String;
    first_code_textcolor: Schema.Attribute.String;
    handle: Schema.Attribute.UID;
    heading: Schema.Attribute.String;
    headingcolor: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::collection-banner.collection-banner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    start_text: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommonofferCommonoffer extends Struct.SingleTypeSchema {
  collectionName: 'commonoffers';
  info: {
    displayName: 'commonoffer';
    pluralName: 'commonoffers';
    singularName: 'commonoffer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.Text;
    description_two: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::commonoffer.commonoffer'
    > &
      Schema.Attribute.Private;
    para1: Schema.Attribute.String;
    para2: Schema.Attribute.Text;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiCommonwhychooseCommonwhychoose
  extends Struct.SingleTypeSchema {
  collectionName: 'commonwhychooses';
  info: {
    displayName: 'commonwhychoose';
    pluralName: 'commonwhychooses';
    singularName: 'commonwhychoose';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    commonwhychoosecard: Schema.Attribute.DynamicZone<
      ['shared.commonwhychoosecard']
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::commonwhychoose.commonwhychoose'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiDetailscardDetailscard extends Struct.SingleTypeSchema {
  collectionName: 'detailscards';
  info: {
    displayName: 'detailscard';
    pluralName: 'detailscards';
    singularName: 'detailscard';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    detailscard: Schema.Attribute.DynamicZone<['shared.detailscard']>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::detailscard.detailscard'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomeartistHomeartist extends Struct.SingleTypeSchema {
  collectionName: 'homeartists';
  info: {
    displayName: 'homeartist';
    pluralName: 'homeartists';
    singularName: 'homeartist';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_one: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_three: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    img_two: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homeartist.homeartist'
    > &
      Schema.Attribute.Private;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomebannerHomebanner extends Struct.SingleTypeSchema {
  collectionName: 'homebanners';
  info: {
    displayName: 'homebanner';
    pluralName: 'homebanners';
    singularName: 'homebanner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    buttonbgcolor: Schema.Attribute.String;
    code_value: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    descriptioncolor: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    headingcolor: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homebanner.homebanner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    timer: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomebgvideoHomebgvideo extends Struct.SingleTypeSchema {
  collectionName: 'homebgvideos';
  info: {
    displayName: 'homebgvideo';
    pluralName: 'homebgvideos';
    singularName: 'homebgvideo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homebgvideo.homebgvideo'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomecollectionbannerHomecollectionbanner
  extends Struct.SingleTypeSchema {
  collectionName: 'homecollectionbanners';
  info: {
    displayName: 'homecollectionbanner';
    pluralName: 'homecollectionbanners';
    singularName: 'homecollectionbanner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_bg: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    buttoncolor: Schema.Attribute.String;
    code_value_textcolor: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    headingcolor: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homecollectionbanner.homecollectionbanner'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomethreedHomethreed extends Struct.SingleTypeSchema {
  collectionName: 'homethreeds';
  info: {
    displayName: 'homethreed';
    pluralName: 'homethreeds';
    singularName: 'homethreed';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homethreed.homethreed'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiHomewhyartuneHomewhyartune extends Struct.SingleTypeSchema {
  collectionName: 'homewhyartunes';
  info: {
    displayName: 'homewhyartune';
    pluralName: 'homewhyartunes';
    singularName: 'homewhyartune';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    homewhyartunecard: Schema.Attribute.DynamicZone<
      ['shared.homewhyartunecard']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homewhyartune.homewhyartune'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiMainheroMainhero extends Struct.SingleTypeSchema {
  collectionName: 'mainheroes';
  info: {
    displayName: 'Mainhero';
    pluralName: 'mainheroes';
    singularName: 'mainhero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.Component<'shared.mainleftheading', false>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::mainhero.mainhero'
    > &
      Schema.Attribute.Private;
    newdrop: Schema.Attribute.Component<'shared.newdrop', false>;
    offer: Schema.Attribute.Component<'shared.offerhero', false>;
    publishedAt: Schema.Attribute.DateTime;
    simpleimage: Schema.Attribute.Component<'shared.simple-img', false>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophyecoPhilosophyeco extends Struct.SingleTypeSchema {
  collectionName: 'philosophyecos';
  info: {
    displayName: 'Philosophyeco';
    pluralName: 'philosophyecos';
    singularName: 'philosophyeco';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophyeco.philosophyeco'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophyheroPhilosophyhero
  extends Struct.SingleTypeSchema {
  collectionName: 'philosophyheroes';
  info: {
    displayName: 'Philosophyhero';
    pluralName: 'philosophyheroes';
    singularName: 'philosophyhero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophyhero.philosophyhero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophyjourneyPhilosophyjourney
  extends Struct.SingleTypeSchema {
  collectionName: 'philosophyjourneys';
  info: {
    displayName: 'Philosophyjourney';
    pluralName: 'philosophyjourneys';
    singularName: 'philosophyjourney';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophyjourney.philosophyjourney'
    > &
      Schema.Attribute.Private;
    philosophyjourneycard: Schema.Attribute.DynamicZone<
      ['shared.philosophyjourneycard']
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophymanifestoPhilosophymanifesto
  extends Struct.SingleTypeSchema {
  collectionName: 'philosophymanifestos';
  info: {
    displayName: 'Philosophymanifesto';
    pluralName: 'philosophymanifestos';
    singularName: 'philosophymanifesto';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophymanifesto.philosophymanifesto'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text1: Schema.Attribute.Text;
    text2: Schema.Attribute.Text;
    text3: Schema.Attribute.Text;
    text4: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophymaterialPhilosophymaterial
  extends Struct.SingleTypeSchema {
  collectionName: 'philosophymaterials';
  info: {
    displayName: 'Philosophymaterial';
    pluralName: 'philosophymaterials';
    singularName: 'philosophymaterial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophymaterial.philosophymaterial'
    > &
      Schema.Attribute.Private;
    philosophymaterialcard: Schema.Attribute.DynamicZone<
      ['shared.philosophymaterialcard']
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophyourecoPhilosophyoureco
  extends Struct.SingleTypeSchema {
  collectionName: 'philosophyourecos';
  info: {
    displayName: 'Philosophyoureco';
    pluralName: 'philosophyourecos';
    singularName: 'philosophyoureco';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophyoureco.philosophyoureco'
    > &
      Schema.Attribute.Private;
    philosophyourecocard: Schema.Attribute.DynamicZone<
      ['shared.philosophyourecocard']
    >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPhilosophyvaluePhilosophyvalue
  extends Struct.SingleTypeSchema {
  collectionName: 'philosophyvalues';
  info: {
    displayName: 'Philosophyvalue';
    pluralName: 'philosophyvalues';
    singularName: 'philosophyvalue';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::philosophyvalue.philosophyvalue'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionAssetsCategoryPromotionAssetsCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'promotion_assets_categories';
  info: {
    displayName: 'PromotionAssetsCategory';
    pluralName: 'promotion-assets-categories';
    singularName: 'promotion-assets-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotion-assets-category.promotion-assets-category'
    > &
      Schema.Attribute.Private;
    promotion_assets_list: Schema.Attribute.Relation<
      'manyToOne',
      'api::promotion-assets-list.promotion-assets-list'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionAssetsListPromotionAssetsList
  extends Struct.CollectionTypeSchema {
  collectionName: 'promotion_assets_lists';
  info: {
    displayName: 'PromotionAssetsList';
    pluralName: 'promotion-assets-lists';
    singularName: 'promotion-assets-list';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotion-assets-list.promotion-assets-list'
    > &
      Schema.Attribute.Private;
    price: Schema.Attribute.Integer;
    promotion_assets_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotion-assets-category.promotion-assets-category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    saleprice: Schema.Attribute.Integer;
    slug: Schema.Attribute.UID<'title'>;
    slugvalue: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionbundlelistPromotionbundlelist
  extends Struct.SingleTypeSchema {
  collectionName: 'promotionbundlelists';
  info: {
    displayName: 'Promotionbundlelist';
    pluralName: 'promotionbundlelists';
    singularName: 'promotionbundlelist';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotionbundlelist.promotionbundlelist'
    > &
      Schema.Attribute.Private;
    promotionproducts: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotionproduct.promotionproduct'
    >;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotioncollectionPromotioncollection
  extends Struct.SingleTypeSchema {
  collectionName: 'promotioncollections';
  info: {
    displayName: 'Promotioncollection';
    pluralName: 'promotioncollections';
    singularName: 'promotioncollection';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    claimed: Schema.Attribute.Integer;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    leftItems: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotioncollection.promotioncollection'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    timer: Schema.Attribute.DateTime;
    timertitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    totalItems: Schema.Attribute.Integer;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionproductPromotionproduct
  extends Struct.CollectionTypeSchema {
  collectionName: 'promotionproducts';
  info: {
    displayName: 'Promotionproduct';
    pluralName: 'promotionproducts';
    singularName: 'promotionproduct';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Blocks;
    gallerybundleslug: Schema.Attribute.DynamicZone<
      ['shared.gallerybundleslug']
    >;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotionproduct.promotionproduct'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionsCategoryPromotionsCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'promotions_categories';
  info: {
    displayName: 'PromotionsCategory';
    pluralName: 'promotions-categories';
    singularName: 'promotions-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotions-category.promotions-category'
    > &
      Schema.Attribute.Private;
    promotions_sub_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::promotions-sub-category.promotions-sub-category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionsHeroPromotionsHero
  extends Struct.SingleTypeSchema {
  collectionName: 'promotions_heroes';
  info: {
    displayName: 'PromotionsHero';
    pluralName: 'promotions-heroes';
    singularName: 'promotions-hero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.String;
    badgebgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    endtime: Schema.Attribute.DateTime;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotions-hero.promotions-hero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'heading'>;
    slugmatch: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionsSubCategoryPromotionsSubCategory
  extends Struct.CollectionTypeSchema {
  collectionName: 'promotions_sub_categories';
  info: {
    displayName: 'PromotionsSubCategory';
    pluralName: 'promotions-sub-categories';
    singularName: 'promotions-sub-category';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotions-sub-category.promotions-sub-category'
    > &
      Schema.Attribute.Private;
    promotions_category: Schema.Attribute.Relation<
      'oneToOne',
      'api::promotions-category.promotions-category'
    >;
    promotionscategorydatalist: Schema.Attribute.Relation<
      'manyToOne',
      'api::promotionscategorydatalist.promotionscategorydatalist'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiPromotionscategorydatalistPromotionscategorydatalist
  extends Struct.CollectionTypeSchema {
  collectionName: 'promotionscategorydatalists';
  info: {
    displayName: 'Promotionscategorydatalist';
    pluralName: 'promotionscategorydatalists';
    singularName: 'promotionscategorydatalist';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.String;
    badge_bgcolor: Schema.Attribute.String;
    badge_one: Schema.Attribute.String;
    badge_one_bgcolor: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotionscategorydatalist.promotionscategorydatalist'
    > &
      Schema.Attribute.Private;
    price: Schema.Attribute.Integer;
    promotions_sub_categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::promotions-sub-category.promotions-sub-category'
    >;
    publishedAt: Schema.Attribute.DateTime;
    slug: Schema.Attribute.UID<'title'>;
    slugvlalue: Schema.Attribute.String;
    stock: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizeartSizeart extends Struct.SingleTypeSchema {
  collectionName: 'sizearts';
  info: {
    displayName: 'Sizeart';
    pluralName: 'sizearts';
    singularName: 'sizeart';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    heading: Schema.Attribute.Text;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizeart.sizeart'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    title: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizecomparisonSizecomparison
  extends Struct.SingleTypeSchema {
  collectionName: 'sizecomparisons';
  info: {
    displayName: 'Sizecomparison';
    pluralName: 'sizecomparisons';
    singularName: 'sizecomparison';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizecomparison.sizecomparison'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    tabel: Schema.Attribute.DynamicZone<['shared.tabel']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizedetailSizedetail extends Struct.SingleTypeSchema {
  collectionName: 'sizedetails';
  info: {
    displayName: 'Sizedetail';
    pluralName: 'sizedetails';
    singularName: 'sizedetail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.Text;
    description_two: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizedetail.sizedetail'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizedetailcard: Schema.Attribute.DynamicZone<['shared.sizedetailcard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizefaqSizefaq extends Struct.SingleTypeSchema {
  collectionName: 'sizefaqs';
  info: {
    displayName: 'Sizefaq';
    pluralName: 'sizefaqs';
    singularName: 'sizefaq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizefaq.sizefaq'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizefaqcard: Schema.Attribute.DynamicZone<['shared.sizefaqcard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizeformatSizeformat extends Struct.SingleTypeSchema {
  collectionName: 'sizeformats';
  info: {
    displayName: 'Sizeformat';
    pluralName: 'sizeformats';
    singularName: 'sizeformat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    formatcard: Schema.Attribute.DynamicZone<['shared.formatcard']>;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizeformat.sizeformat'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizegeometrySizegeometry extends Struct.SingleTypeSchema {
  collectionName: 'sizegeometries';
  info: {
    displayName: 'Sizegeometry';
    pluralName: 'sizegeometries';
    singularName: 'sizegeometry';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    description_one: Schema.Attribute.String;
    description1: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imgdes: Schema.Attribute.String;
    imgdetails: Schema.Attribute.String;
    imgtitle: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizegeometry.sizegeometry'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    size: Schema.Attribute.String;
    sizedetails: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    value: Schema.Attribute.String;
  };
}

export interface ApiSizeheroSizehero extends Struct.SingleTypeSchema {
  collectionName: 'sizeheroes';
  info: {
    displayName: 'Sizehero';
    pluralName: 'sizeheroes';
    singularName: 'sizehero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizehero.sizehero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizeherocard: Schema.Attribute.DynamicZone<['shared.sizeherocard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizepremadeSizepremade extends Struct.SingleTypeSchema {
  collectionName: 'sizepremades';
  info: {
    displayName: 'Sizepremade';
    pluralName: 'sizepremades';
    singularName: 'sizepremade';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizepremade.sizepremade'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizepremadecard: Schema.Attribute.DynamicZone<['shared.sizepremadecard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizetrustSizetrust extends Struct.SingleTypeSchema {
  collectionName: 'sizetrusts';
  info: {
    displayName: 'Sizetrust';
    pluralName: 'sizetrusts';
    singularName: 'sizetrust';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizetrust.sizetrust'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizetrustcard: Schema.Attribute.DynamicZone<['shared.sizetrustcard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizetwomaterialSizetwomaterial
  extends Struct.SingleTypeSchema {
  collectionName: 'sizetwomaterials';
  info: {
    displayName: 'Sizetwomaterial';
    pluralName: 'sizetwomaterials';
    singularName: 'sizetwomaterial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizetwomaterial.sizetwomaterial'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizetwomaterialcard: Schema.Attribute.DynamicZone<
      ['shared.sizetwomaterialcard']
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSizeyourformatSizeyourformat
  extends Struct.SingleTypeSchema {
  collectionName: 'sizeyourformats';
  info: {
    displayName: 'Sizeyourformat';
    pluralName: 'sizeyourformats';
    singularName: 'sizeyourformat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sizeyourformat.sizeyourformat'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    sizeyourformatcard: Schema.Attribute.DynamicZone<
      ['shared.sizeyourformatcard']
    >;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpineadvantageSpineadvantage
  extends Struct.SingleTypeSchema {
  collectionName: 'spineadvantages';
  info: {
    displayName: 'Spineadvantage';
    pluralName: 'spineadvantages';
    singularName: 'spineadvantage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spineadvantage.spineadvantage'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    title: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpinegetSpineget extends Struct.SingleTypeSchema {
  collectionName: 'spinegets';
  info: {
    displayName: 'Spineget';
    pluralName: 'spinegets';
    singularName: 'spineget';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spineget.spineget'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpineheroSpinehero extends Struct.SingleTypeSchema {
  collectionName: 'spineheroes';
  info: {
    displayName: 'Spinehero';
    pluralName: 'spineheroes';
    singularName: 'spinehero';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bgimg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    button_one: Schema.Attribute.String;
    button_one_url: Schema.Attribute.String;
    button_two: Schema.Attribute.String;
    button_two_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spinehero.spinehero'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpinenodrillSpinenodrill extends Struct.SingleTypeSchema {
  collectionName: 'spinenodrills';
  info: {
    displayName: 'Spinenodrill';
    pluralName: 'spinenodrills';
    singularName: 'spinenodrill';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    button: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spinenodrill.spinenodrill'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    spinenodrillcard: Schema.Attribute.DynamicZone<['shared.spinenodrillcard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ApiSpineonesystemSpineonesystem
  extends Struct.SingleTypeSchema {
  collectionName: 'spineonesystems';
  info: {
    displayName: 'Spineonesystem';
    pluralName: 'spineonesystems';
    singularName: 'spineonesystem';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spineonesystem.spineonesystem'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    spinesystemcard: Schema.Attribute.DynamicZone<['shared.spinesystemcard']>;
    text_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text1: Schema.Attribute.Text;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpinesliderSpineslider extends Struct.SingleTypeSchema {
  collectionName: 'spinesliders';
  info: {
    displayName: 'Spineslider';
    pluralName: 'spinesliders';
    singularName: 'spineslider';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spineslider.spineslider'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    spineslidercard: Schema.Attribute.DynamicZone<['shared.spineslidercard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpinestepSpinestep extends Struct.SingleTypeSchema {
  collectionName: 'spinesteps';
  info: {
    displayName: 'Spinestep';
    pluralName: 'spinesteps';
    singularName: 'spinestep';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    badge: Schema.Attribute.String;
    button: Schema.Attribute.String;
    button_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    button_url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    download_button: Schema.Attribute.String;
    download_button_url: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spinestep.spinestep'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    spinestepcard: Schema.Attribute.DynamicZone<['shared.spinestepcard']>;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface ApiSpinethreeminSpinethreemin extends Struct.SingleTypeSchema {
  collectionName: 'spinethreemins';
  info: {
    displayName: 'Spinethreemin';
    pluralName: 'spinethreemins';
    singularName: 'spinethreemin';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::spinethreemin.spinethreemin'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    text1: Schema.Attribute.String;
    text2: Schema.Attribute.String;
    text3: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    video: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    displayName: 'Release';
    pluralName: 'releases';
    singularName: 'release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    publishedAt: Schema.Attribute.DateTime;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    timezone: Schema.Attribute.String;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    displayName: 'Release Action';
    pluralName: 'release-actions';
    singularName: 'release-action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    entryDocumentId: Schema.Attribute.String;
    isEntryValid: Schema.Attribute.Boolean;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    collectionName: 'locales';
    description: '';
    displayName: 'Locale';
    pluralName: 'locales';
    singularName: 'locale';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          max: 50;
          min: 1;
        },
        number
      >;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    description: '';
    displayName: 'Workflow';
    name: 'Workflow';
    pluralName: 'workflows';
    singularName: 'workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    stageRequiredToPublish: Schema.Attribute.Relation<
      'oneToOne',
      'plugin::review-workflows.workflow-stage'
    >;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    description: '';
    displayName: 'Stages';
    name: 'Workflow Stage';
    pluralName: 'workflow-stages';
    singularName: 'workflow-stage';
  };
  options: {
    draftAndPublish: false;
    version: '1.1.0';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    description: '';
    displayName: 'File';
    pluralName: 'files';
    singularName: 'file';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    alternativeText: Schema.Attribute.Text;
    caption: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    ext: Schema.Attribute.String;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    height: Schema.Attribute.Integer;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    > &
      Schema.Attribute.Private;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.Text;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    publishedAt: Schema.Attribute.DateTime;
    related: Schema.Attribute.Relation<'morphToMany'>;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    displayName: 'Folder';
    pluralName: 'folders';
    singularName: 'folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    publishedAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    description: '';
    displayName: 'Permission';
    name: 'permission';
    pluralName: 'permissions';
    singularName: 'permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    > &
      Schema.Attribute.Private;
    publishedAt: Schema.Attribute.DateTime;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    description: '';
    displayName: 'Role';
    name: 'role';
    pluralName: 'roles';
    singularName: 'role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    description: Schema.Attribute.String;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    > &
      Schema.Attribute.Private;
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    publishedAt: Schema.Attribute.DateTime;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    description: '';
    displayName: 'User';
    name: 'user';
    pluralName: 'users';
    singularName: 'user';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    createdAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    locale: Schema.Attribute.String & Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    > &
      Schema.Attribute.Private;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    publishedAt: Schema.Attribute.DateTime;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    updatedAt: Schema.Attribute.DateTime;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::permission': AdminPermission;
      'admin::role': AdminRole;
      'admin::session': AdminSession;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'admin::user': AdminUser;
      'api::aboutartune.aboutartune': ApiAboutartuneAboutartune;
      'api::abouteveryone.abouteveryone': ApiAbouteveryoneAbouteveryone;
      'api::abouthero.abouthero': ApiAboutheroAbouthero;
      'api::aboutidea.aboutidea': ApiAboutideaAboutidea;
      'api::aboutourstory.aboutourstory': ApiAboutourstoryAboutourstory;
      'api::aboutready.aboutready': ApiAboutreadyAboutready;
      'api::aboutstand.aboutstand': ApiAboutstandAboutstand;
      'api::aboutwho.aboutwho': ApiAboutwhoAboutwho;
      'api::artscalechangespace.artscalechangespace': ApiArtscalechangespaceArtscalechangespace;
      'api::artscalehero.artscalehero': ApiArtscaleheroArtscalehero;
      'api::artscalehow.artscalehow': ApiArtscalehowArtscalehow;
      'api::artscalepartner.artscalepartner': ApiArtscalepartnerArtscalepartner;
      'api::artscalepremium.artscalepremium': ApiArtscalepremiumArtscalepremium;
      'api::artscalesoution.artscalesoution': ApiArtscalesoutionArtscalesoution;
      'api::artscalespine.artscalespine': ApiArtscalespineArtscalespine;
      'api::artscalestory.artscalestory': ApiArtscalestoryArtscalestory;
      'api::blog-category.blog-category': ApiBlogCategoryBlogCategory;
      'api::blog.blog': ApiBlogBlog;
      'api::collaborate-ready.collaborate-ready': ApiCollaborateReadyCollaborateReady;
      'api::collaboratefit.collaboratefit': ApiCollaboratefitCollaboratefit;
      'api::collaboratehero.collaboratehero': ApiCollaborateheroCollaboratehero;
      'api::collaborateslider.collaborateslider': ApiCollaboratesliderCollaborateslider;
      'api::collaboratesubmissionreq.collaboratesubmissionreq': ApiCollaboratesubmissionreqCollaboratesubmissionreq;
      'api::collaboratewhyjoin.collaboratewhyjoin': ApiCollaboratewhyjoinCollaboratewhyjoin;
      'api::collaboratwelcome.collaboratwelcome': ApiCollaboratwelcomeCollaboratwelcome;
      'api::collection-banner.collection-banner': ApiCollectionBannerCollectionBanner;
      'api::commonoffer.commonoffer': ApiCommonofferCommonoffer;
      'api::commonwhychoose.commonwhychoose': ApiCommonwhychooseCommonwhychoose;
      'api::detailscard.detailscard': ApiDetailscardDetailscard;
      'api::homeartist.homeartist': ApiHomeartistHomeartist;
      'api::homebanner.homebanner': ApiHomebannerHomebanner;
      'api::homebgvideo.homebgvideo': ApiHomebgvideoHomebgvideo;
      'api::homecollectionbanner.homecollectionbanner': ApiHomecollectionbannerHomecollectionbanner;
      'api::homethreed.homethreed': ApiHomethreedHomethreed;
      'api::homewhyartune.homewhyartune': ApiHomewhyartuneHomewhyartune;
      'api::mainhero.mainhero': ApiMainheroMainhero;
      'api::philosophyeco.philosophyeco': ApiPhilosophyecoPhilosophyeco;
      'api::philosophyhero.philosophyhero': ApiPhilosophyheroPhilosophyhero;
      'api::philosophyjourney.philosophyjourney': ApiPhilosophyjourneyPhilosophyjourney;
      'api::philosophymanifesto.philosophymanifesto': ApiPhilosophymanifestoPhilosophymanifesto;
      'api::philosophymaterial.philosophymaterial': ApiPhilosophymaterialPhilosophymaterial;
      'api::philosophyoureco.philosophyoureco': ApiPhilosophyourecoPhilosophyoureco;
      'api::philosophyvalue.philosophyvalue': ApiPhilosophyvaluePhilosophyvalue;
      'api::promotion-assets-category.promotion-assets-category': ApiPromotionAssetsCategoryPromotionAssetsCategory;
      'api::promotion-assets-list.promotion-assets-list': ApiPromotionAssetsListPromotionAssetsList;
      'api::promotionbundlelist.promotionbundlelist': ApiPromotionbundlelistPromotionbundlelist;
      'api::promotioncollection.promotioncollection': ApiPromotioncollectionPromotioncollection;
      'api::promotionproduct.promotionproduct': ApiPromotionproductPromotionproduct;
      'api::promotions-category.promotions-category': ApiPromotionsCategoryPromotionsCategory;
      'api::promotions-hero.promotions-hero': ApiPromotionsHeroPromotionsHero;
      'api::promotions-sub-category.promotions-sub-category': ApiPromotionsSubCategoryPromotionsSubCategory;
      'api::promotionscategorydatalist.promotionscategorydatalist': ApiPromotionscategorydatalistPromotionscategorydatalist;
      'api::sizeart.sizeart': ApiSizeartSizeart;
      'api::sizecomparison.sizecomparison': ApiSizecomparisonSizecomparison;
      'api::sizedetail.sizedetail': ApiSizedetailSizedetail;
      'api::sizefaq.sizefaq': ApiSizefaqSizefaq;
      'api::sizeformat.sizeformat': ApiSizeformatSizeformat;
      'api::sizegeometry.sizegeometry': ApiSizegeometrySizegeometry;
      'api::sizehero.sizehero': ApiSizeheroSizehero;
      'api::sizepremade.sizepremade': ApiSizepremadeSizepremade;
      'api::sizetrust.sizetrust': ApiSizetrustSizetrust;
      'api::sizetwomaterial.sizetwomaterial': ApiSizetwomaterialSizetwomaterial;
      'api::sizeyourformat.sizeyourformat': ApiSizeyourformatSizeyourformat;
      'api::spineadvantage.spineadvantage': ApiSpineadvantageSpineadvantage;
      'api::spineget.spineget': ApiSpinegetSpineget;
      'api::spinehero.spinehero': ApiSpineheroSpinehero;
      'api::spinenodrill.spinenodrill': ApiSpinenodrillSpinenodrill;
      'api::spineonesystem.spineonesystem': ApiSpineonesystemSpineonesystem;
      'api::spineslider.spineslider': ApiSpinesliderSpineslider;
      'api::spinestep.spinestep': ApiSpinestepSpinestep;
      'api::spinethreemin.spinethreemin': ApiSpinethreeminSpinethreemin;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
    }
  }
}
