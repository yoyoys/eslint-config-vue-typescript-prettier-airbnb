module.exports = {
  root: true,
  env: {
    node: true,
  },
  // extends: ['@yoyoys/vue-typescript-prettier-airbnb'],
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': 'error',
    'no-debugger': 'error',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
