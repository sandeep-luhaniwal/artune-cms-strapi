export default {
  routes: [
    {
      method: 'GET',
      path: '/downloadfullguidpdfclients/export',
      handler: 'api::downloadfullguidpdfclient.downloadfullguidpdfclient.exportSubmissions',
      config: {
        auth: false,
      },
    },
  ],
};
