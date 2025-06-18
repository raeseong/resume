import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: require('eslint-plugin-prettier'),
      'react-hooks': require('eslint-plugin-react-hooks'),
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2019,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: {
        // cy: true,
        // Cypress: true,
      },
    },
    linterOptions: {
      env: {
        browser: true,
        jest: true,
        node: true,
      },
    },
    rules: {
      'no-underscore-dangle': 0,
      '@typescript-eslint/no-namespace': 0,
      '@typescript-eslint/explicit-function-return-type': 0,
      '@typescript-eslint/no-use-before-define': 0,
      'import/prefer-default-export': 0,
      'import/extensions': 0,
      'react/react-in-jsx-scope': 0,
      quotes: [
        2,
        'single',
        { avoidEscape: true },
      ],
      'react/jsx-filename-extension': [
        1,
        { extensions: ['.js', '.jsx', '.tsx'] },
      ],
    },
  },
];
