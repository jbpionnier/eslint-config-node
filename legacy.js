'use strict';

module.exports = {
  extends: [
    './rules/recommended',
    './rules/errors',
    './rules/best-practices',
    './rules/node',
    './rules/style',
    './rules/variables'
  ].map(require.resolve)
};