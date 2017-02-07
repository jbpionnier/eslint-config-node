'use strict';

module.exports = {
  extends: [
    './legacy',
    './rules/es6'
  ].map(require.resolve),
  rules: {
    // Complexity
    'max-depth': [2, 1],
    'max-params': [2, 3],
    'max-nested-callbacks': [1, 1],
    'max-statements': [1, 10],
    'complexity': [1, 6]
  }
};
