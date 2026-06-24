export default {
  routes: [
    {
      method: 'GET',
      path: '/help-contact-submissions/export',
      handler: 'api::help-contact-submission.help-contact-submission.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
