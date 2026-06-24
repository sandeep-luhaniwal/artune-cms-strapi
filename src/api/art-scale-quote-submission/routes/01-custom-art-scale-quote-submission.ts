export default {
  routes: [
    {
      method: 'GET',
      path: '/art-scale-quote-submissions/export',
      handler: 'api::art-scale-quote-submission.art-scale-quote-submission.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
