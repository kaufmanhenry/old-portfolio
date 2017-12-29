const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/blink': { page: '/blink' },
      '/ipsat': { page: '/ipsat' }
    }
  },
  assetPrefix: !debug ? '/' : ''
};
