module.exports = {
  root: true,
  env: {
    node: true,
  },
  // extends: ['@yoyoys/vue-typescript-prettier-airbnb'],
  extends: ['plugin:vue/essential', '@vue/prettier', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'import/prefer-default-export': 'off',
    'prettier/prettier': [
      'warn',
      {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
    // provide by prettier
    'semi': 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'class-methods-use-this': 'off',
    'indent': 0,
    'space-before-blocks': 0,
    // https://github.com/typescript-eslint/typescript-eslint/issues/524
    // no effect for vue right now
    '@typescript-eslint/explicit-member-accessibility': 'error',
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
