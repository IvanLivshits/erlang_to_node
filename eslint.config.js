import js from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/**/*', 'node_modules/**/*'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
    },
    linterOptions: {
      noInlineConfig: false,
    },
    rules: {
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
    },
  },
];
