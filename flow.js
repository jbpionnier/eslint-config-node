'use strict';

module.exports = {
  extends: require.resolve('./base'),
  parser: 'babel-eslint',
  plugins: ['flowtype'],
  settings: {
    flowtype: {
      onlyFilesWithFlowAnnotation: true
    }
  },
  rules: {
    'flowtype/boolean-style': 1,
    'flowtype/define-flow-type': 1,
    'flowtype/delimiter-dangle': [1, 'never'],
    'flowtype/use-flow-type': 1,
    'flowtype/require-parameter-type': 1,
    'flowtype/require-return-type': [1, 'always', { annotateUndefined: 'never' }],
    'flowtype/space-before-type-colon': [1, 'never'],
    'flowtype/space-after-type-colon': [1, 'always'],
    'flowtype/space-before-generic-bracket': [2, 'never'],
    'flowtype/require-valid-file-annotation': [2, 'always'],
    'flowtype/semi': [2, 'never'],
    'flowtype/generic-spacing': [2, 'never'],
    'flowtype/union-intersection-spacing': [2, 'always'],
    'flowtype/valid-syntax': 1
  }
};