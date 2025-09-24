import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'         // 👈 add
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['api/**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,                                   // 👈 add
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' },            // 👈 ensures correct React version
    },
    rules: {
      // Let JSX references (e.g., <Icon />) count as “used”
      'react/jsx-uses-vars': 'warn',           // 👈 key rule that fixes the Icon warning
      // With React 17+ you don't need React in scope
      'react/react-in-jsx-scope': 'off',

      // Keep your unused-vars policy, but allow:
      // - Uppercase identifiers (e.g., Icon) used for components
      // - Underscore-prefixed vars/args for intentional ignoring
      'no-unused-vars': ['error', {
        varsIgnorePattern: '^[A-Z_]',
        argsIgnorePattern: '^_',
      }],
    },
  },
])
