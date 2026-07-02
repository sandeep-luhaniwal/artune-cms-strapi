import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@strapi/design-system';
import type { StrapiApp } from '@strapi/strapi/admin';

const COLLECTION_MAPPING = {
  'api::artist-submission.artist-submission': {
    endpoint: '/api/artist-submissions/export',
  },
  'api::art-scale-consultation-submission.art-scale-consultation-submission': {
    endpoint: '/api/art-scale-consultation-submissions/export',
  },
  'api::art-scale-quote-submission.art-scale-quote-submission': {
    endpoint: '/api/art-scale-quote-submissions/export',
  },
  'api::gdpr-sumbmission.gdpr-sumbmission': {
    endpoint: '/api/gdpr-sumbmissions/export',
  },
  'api::help-contact-submission.help-contact-submission': {
    endpoint: '/api/help-contact-submissions/export',
  },
  'api::crate-your-design-submission.crate-your-design-submission': {
    endpoint: '/api/crate-your-design-submissions/export',
  },
  'api::downloadfullguidpdfclient.downloadfullguidpdfclient': {
    endpoint: '/api/downloadfullguidpdfclients/export',
  },
};

const ExportExcelButton = () => {
  const { pathname } = useLocation();

  // Find matching collection in pathname
  const matchedKey = Object.keys(COLLECTION_MAPPING).find((key) => pathname.includes(key));

  if (!matchedKey) {
    return null;
  }

  const config = COLLECTION_MAPPING[matchedKey as keyof typeof COLLECTION_MAPPING];

  const handleExport = () => {
    // Determine the backend base URL (usually relative to the admin origin)
    const backendUrl = (window as any).strapi?.backendURL || window.location.origin;
    window.open(`${backendUrl}${config.endpoint}`, '_blank');
  };

  return (
    <Button onClick={handleExport} variant="secondary">
      Export Excel
    </Button>
  );
};

export default {
  config: {
    locales: [],
  },
  bootstrap(app: StrapiApp) {
    app.getPlugin('content-manager').injectComponent('listView', 'actions', {
      name: 'export-submissions-button',
      Component: ExportExcelButton,
    });
  },
};
