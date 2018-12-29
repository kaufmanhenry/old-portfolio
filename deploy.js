const ghPages = require('gh-pages');

ghPages.publish('out', { dotfiles: true }, () => {});