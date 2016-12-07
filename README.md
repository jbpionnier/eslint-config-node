# eslint-config-node

[![npm version](https://badge.fury.io/js/%40jbpionnier%2Feslint-config-node.svg)](https://badge.fury.io/js/%40jbpionnier%2Feslint-config-node)

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) with optional Flow support

## Usage
1. `npm install --save-dev @jbpionnier/eslint-config-node`
2. create a file named `.eslintrc` in your project:

```js
{
  "extends": "@jbpionnier/eslint-config-node"
  // Your overrides...
}
```

We export three ESLint configurations for your usage.

### eslint-config-node

Our default export contains all of our ESLint rules, including ECMAScript 6+.

### eslint-config-node/flow

Lints ECMAScript 6+ with [Flow](https://flowtype.org/) support. Requires `eslint`, `babel-eslint` and [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype)

### eslint-config-node/legacy

Lints ES5 and below.

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.


## License

[MIT](http://opensource.org/licenses/MIT)
