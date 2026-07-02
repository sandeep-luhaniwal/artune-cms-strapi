export default {
  routes: [
    {
      method: 'GET',
      path: '/crate-your-design-submissions/export',
      handler: 'api::crate-your-design-submission.crate-your-design-submission.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
