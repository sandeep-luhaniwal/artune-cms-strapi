export default {
  routes: [
    {
      method: 'GET',
      path: '/artist-submissions/export',
      handler: 'api::artist-submission.artist-submission.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
