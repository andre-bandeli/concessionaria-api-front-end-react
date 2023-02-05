

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/static',
    createProxyMiddleware({
      target: 'https://webmotors.vercel.app/',
      changeOrigin: true,
      onProxyRes: function(proxyRes, req, res) {
        proxyRes.headers['Cache-Control'] = 'public, max-age=31536000, immutable';
      },
    })
  );
};