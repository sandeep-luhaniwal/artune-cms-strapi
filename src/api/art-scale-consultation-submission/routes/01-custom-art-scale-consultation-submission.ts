export default {
  routes: [
    {
      method: 'GET',
      path: '/art-scale-consultation-submissions/export',
      handler: 'api::art-scale-consultation-submission.art-scale-consultation-submission.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
