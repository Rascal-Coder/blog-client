'use strict';

/**@type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
  },
  reportUnusedDisableDirectives: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        require.resolve('./eslint-config-base.cjs'),
        require.resolve('./eslint-config-ts.cjs'),
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
      ],
      rules: {
        // use @emotion/react css props
        'react/no-unknown-property': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
  ignorePatterns: ['*.[m|c]js', '*.json', 'vite-env.d.ts', 'vite.config.ts'],
};
