const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/blink': { page: '/blink' },
    '/ipsat': { page: '/ipsat' }
  }),
  assetPrefix: !debug ? '/' : ''
};
