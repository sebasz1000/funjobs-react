import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        React: 'writable', // <-- ¡Esta línea es la clave! Define React como global válido
      },
      parserOptions: {
        ecmaFeatures: { jsx: true }
      },
    },
    rules: {
      // Tus reglas personalizadas van aquí si las necesitas
    }
  },
])
