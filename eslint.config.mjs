import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rrules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true, // Ejemplo de reglas de Prettier
          semi: true,
          tabWidth: 2,
        },
      ],
    },
  },
];
