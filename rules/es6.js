module.exports = {
  env: {
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    'arrow-parens': 2,
    'arrow-spacing': [2, { before: true, after: true }],
    'no-confusing-arrow': 2,
    'no-duplicate-imports': 2,
    'no-var': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'object-shorthand': 2,
    'prefer-const': 2,
    'prefer-spread': 2,
    'prefer-rest-params': 2,
    'prefer-template': 2,
    'template-curly-spacing': [2, 'never'],
    'rest-spread-spacing': 2
  }
};
