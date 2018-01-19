# :house: eslint-config-node

[![npm version](https://badge.fury.io/js/%40jbpionnier%2Feslint-config-node.svg)](https://badge.fury.io/js/%40jbpionnier%2Feslint-config-node)

> An ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs) with optional Flow support

## :package: Usage
1. `npm install --save-dev @jbpionnier/eslint-config-node`
2. create a file named `.eslintrc` in your project:

```js
{
  "extends": "@jbpionnier/eslint-config-node"
  // Your overrides...
}
```

We export three ESLint configurations for your usage.

### :frog: eslint-config-node

Our default export contains all of our ESLint rules, including ECMAScript 6+.

### :ok_woman: eslint-config-node/flow

Lints ECMAScript 6+ with [Flow](https://flowtype.org/) support. Requires `eslint`, `babel-eslint` and [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype)

### :hospital: eslint-config-node/legacy

Lints ES5 and below.

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.


## :lollipop: TSLint

> An TSLint [Shareable Config](https://palantir.github.io/tslint/usage/configuration/)

_WTF ? tslint config in eslint config module ? :persevere:_

1. `npm install --save-dev @jbpionnier/eslint-config-node`
2. create a file named `tslint.json` in your project:

```js
{
  "extends": "@jbpionnier/eslint-config-node/tslint-strict"
  // Your overrides...
}

```

We export two [TSLint](https://palantir.github.io/tslint/) configurations for your usage.

### :v: eslint-config-node/tslint

Lints Typescript

### :guardsman: eslint-config-node/tslint-strict

Lints Typescript with [type check](https://palantir.github.io/tslint/usage/type-checking/)

Use the --type-check flag to make sure your program has no type errors.

```json
{
  "lint": "tslint -p . 'src/**/*.ts'"
}
```

## :memo: License

[MIT](http://opensource.org/licenses/MIT)
