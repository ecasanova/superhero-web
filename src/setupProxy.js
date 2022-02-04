const proxy = require('http-proxy-middleware');

const apiPath = '/api';

const apiProxyConfig = {
  target:
    process.env.SUPERHERO_API_URL +
    '/' +
    process.env.SUPERHERO_ACCESS_TOKEN +
    '/',
  changeOrigin: true,
  logLevel: 'debug',
};

module.exports = function (app) {
  app.use(proxy(apiPath, apiProxyConfig));
};
