const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  exportPathMap: () => ({
    '/': { page: '/' },
    '/work/blink': { page: '/work/blink' },
    '/work/compare-my-offers': { page: '/work/compare-my-offers' },
    '/work/du-innovation-map': { page: '/work/du-innovation-map' },
    '/work/duworks': { page: '/work/duworks' },
    '/work/ipsat': { page: '/work/ipsat' }
  }),
  assetPrefix: !debug ? '/' : ''
};
