export default {
  routes: [
    {
      method: 'GET',
      path: '/gdpr-sumbmissions/export',
      handler: 'api::gdpr-sumbmission.gdpr-sumbmission.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
