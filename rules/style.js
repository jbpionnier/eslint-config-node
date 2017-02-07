module.exports = {
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'brace-style': [2, '1tbs', { allowSingleLine: true }],
    'camelcase': 0,
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'key-spacing': [2, { beforeColon: false, afterColon: true }],
    'linebreak-style': [2, 'unix'],
    'indent': [2, 2, { SwitchCase: 1 }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-lonely-if': 2,
    'no-mixed-operators': 2,
    'no-multiple-empty-lines': [2, { max: 2 }],
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'func-call-spacing': 2,
    'no-trailing-spaces': 2,
    'max-statements-per-line': [2, { max: 2 }],
    'max-lines': [2, { max: 180, skipBlankLines: true, skipComments: true }],
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, { initialized: 'never' }],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-assignment': [2, 'always'],
    'operator-linebreak': [2, 'after'],
    'quotes': [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'keyword-spacing': 2,
    'semi': [2, 'never'],
    'eol-last': 2,
    'no-whitespace-before-property': 2,
    'quote-props': [2, 'as-needed', { keywords: false, unnecessary: true, numbers: false }]
  }
};
