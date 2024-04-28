'use strict';

/**@type {import('eslint-define-config').ESLintConfig} */
module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  parserOptions: {
    warnOnUnsupportedTypeScriptVersion: true,
    sourceType: 'module',
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    'import/parsers': {
      [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx'],
    },
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        minimumDescriptionLength: 4,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': 'error',
    '@typescript-eslint/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: false,
      },
    ],
    '@typescript-eslint/class-literal-property-style': ['error', 'getters'],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    '@typescript-eslint/consistent-generic-constructors': [
      'error',
      'constructor',
    ],
    '@typescript-eslint/consistent-indexed-object-style': 'error',
    '@typescript-eslint/consistent-type-exports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/default-param-last': 'error',
    '@typescript-eslint/dot-notation': 'error',
    '@typescript-eslint/func-call-spacing': ['error', 'never'],
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        multiline: {
          delimiter: 'semi',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-base-to-string': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-dupe-class-members': 'error',
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        allowSingleExtends: true,
      },
    ],
    '@typescript-eslint/no-extra-non-null-assertion': 'error',
    '@typescript-eslint/no-extra-semi': 'error',
    '@typescript-eslint/no-extraneous-class': [
      'error',
      {
        allowConstructorOnly: false,
        allowEmpty: false,
        allowStaticOnly: false,
        allowWithDecorator: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': [
      'error',
      {
        ignoreVoid: true,
        ignoreIIFE: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-loop-func': 'error',
    '@typescript-eslint/no-loss-of-precision': 'error',
    '@typescript-eslint/no-meaningless-void-operator': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-misused-promises': [
      'error',
      {
        checksConditionals: true,
        checksVoidReturn: false,
      },
    ],
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-restricted-imports': 'error',
    '@typescript-eslint/no-this-alias': [
      'error',
      {
        allowDestructuring: true,
        allowedNames: ['self', '_this'],
      },
    ],
    '@typescript-eslint/no-throw-literal': [
      'error',
      {
        allowThrowingUnknown: true,
        allowThrowingAny: false,
      },
    ],
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-unnecessary-type-arguments': 'error',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/no-unnecessary-type-constraint': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-declaration-merging': 'error',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/non-nullable-type-assertion-style': 'error',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: 'multiline-block-like',
        next: '*',
      },
    ],
    '@typescript-eslint/parameter-properties': [
      'error',
      {
        prefer: 'parameter-property',
      },
    ],
    '@typescript-eslint/prefer-as-const': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-includes': 'error',
    '@typescript-eslint/prefer-literal-enum-member': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/prefer-reduce-type-parameter': 'error',
    '@typescript-eslint/prefer-regexp-exec': 'error',
    '@typescript-eslint/prefer-return-this-type': 'error',
    '@typescript-eslint/prefer-string-starts-ends-with': 'error',
    '@typescript-eslint/prefer-ts-expect-error': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/require-array-sort-compare': [
      'error',
      {
        ignoreStringArrays: true,
      },
    ],
    '@typescript-eslint/restrict-plus-operands': [
      'error',
      {
        skipCompoundAssignments: true,
      },
    ],
    '@typescript-eslint/restrict-template-expressions': [
      'error',
      {
        allowNumber: true,
      },
    ],
    '@typescript-eslint/return-await': 'error',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/space-before-blocks': ['error', 'always'],
    '@typescript-eslint/space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/space-infix-ops': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error',
    '@typescript-eslint/triple-slash-reference': [
      'error',
      {
        path: 'never',
        types: 'never',
        lib: 'never',
      },
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': [
      'error',
      {
        ignoreDifferentlyNamedParameters: true,
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['**/*.test-d.ts'],
      rules: {
        '@typescript-eslint/no-confusing-void-expression': 'off', // Conflicts with `expectError` assertion.
      },
    },
    {
      files: ['**/*.test.tsx', '**/*.test.ts'],
      extends: ['plugin:testing-library/react'],
    },
  ],
};
