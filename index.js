module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/airbnb',
    '@vue/typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
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
    // this rule is not ideal for vue functional programming
    'class-methods-use-this': 'off',

    // provide by prettier
    'semi': 'off',
    'arrow-parens': 'off',
    'object-curly-spacing': 'off',
    'object-curly-newline': 'off',
    'comma-dangle': 'off',
    'implicit-arrow-linebreak': 'off',
    'indent': 'off',
    'space-before-blocks': 'off',
    'switch-colon-spacing': 'off',
    'block-spacing': 'off',
    'comma-spacing': 'off',
    'space-infix-ops': 'off',
    'brace-style': 'off',
    'no-void': 'off',

    // additional config
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/array-type': ['error', { default: 'array' }],
    '@typescript-eslint/no-extra-non-null-assertion': ['error'],
    '@typescript-eslint/no-extraneous-class': ['error', { allowWithDecorator: true }],
    '@typescript-eslint/promise-function-async': ['error'],
    '@typescript-eslint/require-array-sort-compare': ['warn'],
    '@typescript-eslint/restrict-plus-operands': ['error'],
    '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
    '@typescript-eslint/switch-exhaustiveness-check': ['warn'],
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    '@typescript-eslint/no-unnecessary-condition': ['error', { ignoreRhs: true, allowConstantLoopConditions: true }],
    '@typescript-eslint/class-name-casing': ['error'],


    // not ideal for prototype
    '@typescript-eslint/no-explicit-any': ['off'],
    'max-classes-per-file': 'off',


    // not ideal for vue file
    // '@typescript-eslint/explicit-member-accessibility': ['warn', { accessibility: 'explicit' }],
  },
};
