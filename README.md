# @yoyoys/eslint-config-vue-typescript-prettier-airbnb
This preset is for `@vue/cli` 4.2.2 or above, other version is untested.

## installation
1. `vue create your-app`
  * make sure that you have selected typescript.
2. Install following dependency:
```json
  "@vue/cli-plugin-eslint": "^4.2.2",
  "eslint": "^6.8.0",
  "eslint-plugin-vue": "^6.2.0",
  "typescript": "^3.7.5"
```
3. `npm i -D @yoyoys/eslint-config-vue-typescript-prettier-airbnb`

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

