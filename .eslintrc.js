module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'eslint-config-prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'class-methods-use-this': 'off',
    camelcase: 'off',
    'object-curly-newline': ['error', { consistent: true }],
    'import/no-extraneous-dependencies': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
