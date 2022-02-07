const proxy = require('http-proxy-middleware');

const apiPath = '/api';

const apiProxyConfig = {
  target: 'https://dev.adkgroup.io/',
  changeOrigin: true,
  logLevel: 'debug',
};

module.exports = function (app) {
  app.use(proxy(apiPath, apiProxyConfig));
};
