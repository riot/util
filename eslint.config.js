import { defineConfig, globalIgnores } from 'eslint/config'
import riotEslintConfig from 'eslint-config-riot'

export default defineConfig([
  globalIgnores(['*.cjs']),
  { extends: [riotEslintConfig] },
  {
    rules: {
      'fp/no-mutating-methods': 0,
    },
  },
])
