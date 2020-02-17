# @yoyoys/eslint-config-vue-typescript-prettier-airbnb

## installation
1. `vue create your-app`
  * make sure that you have selected eslint and typescript.
2. `npm i -D @yoyoys/eslint-config-vue-typescript-prettier-airbnb`

## example config file
.eslintrc.js
```js
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  extends: [
    '@yoyoys/vue-typescript-prettier-airbnb',
  ],
};
```

tsconfig.json
```json
{
  ...
  "include": [
    "./*.js",
    "./.*.js",
    ....
  ]
}
```

