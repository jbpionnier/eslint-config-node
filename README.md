# :house: eslint-config-node

[![npm version](https://badge.fury.io/js/%40jbpionnier%2Feslint-config-node.svg)](https://badge.fury.io/js/%40jbpionnier%2Feslint-config-node)

> A linter Shareable Config for [ESlint](http://eslint.org/docs/developer-guide/shareable-configs) and [TSLint](https://palantir.github.io/tslint/usage/configuration/)


`npm install --save-dev @jbpionnier/eslint-config-node`

## :smiley_cat: ESLint

We export three [ESLint](http://eslint.org/) configurations for your usage.

Create a file named `.eslintrc` in your project:

```js
{
  "extends": "@jbpionnier/eslint-config-node"
  // Your overrides...
}
```

### :frog: eslint-config-node

Our default export contains all of our ESLint rules, including ECMAScript 6+.


### :ok_woman: eslint-config-node/flow (deprecated)

Lints ECMAScript 6+ with [Flow](https://flowtype.org/) support. Requires `babel-eslint` and [`eslint-plugin-flowtype`](https://github.com/gajus/eslint-plugin-flowtype)

### :hospital: eslint-config-node/legacy (deprecated)

Lints ES5 and below.

See [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.


## :lollipop: TSLint

_WTF ? tslint config in eslint config module ? :persevere:_

We export two [TSLint](https://palantir.github.io/tslint/) configurations for your usage.

Create a file named `tslint.json` in your project:

```js
{
  "extends": "@jbpionnier/eslint-config-node/tslint-strict"
  // Your overrides...
}

```

### :guardsman: eslint-config-node/tslint-strict

Lints Typescript with [type check](https://palantir.github.io/tslint/usage/type-checking/)

Use the --type-check flag to make sure your program has no type errors.

```json
{
  "lint": "tslint -p . 'src/**/*.ts'"
}
```

### :v: eslint-config-node/tslint-immutable

Lints Typescript with immutable rules with : 
 - [tslint-immutable](https://github.com/jonaskello/tslint-immutable)
 - [tslint-consistent-codestyle](https://github.com/ajafff/tslint-consistent-codestyle)
 - [SonarTS](https://github.com/SonarSource/SonarTS/)


## :memo: License

[MIT](http://opensource.org/licenses/MIT)
