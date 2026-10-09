import js from '@eslint/js'
import vue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vue.configs['flat/recommended'],
  prettier,
  { ignores: ['dist/**'] },
  { files: ['**/*.vue'], languageOptions: { parser: vueParser, parserOptions: { parser: tseslint.parser } } },
  {
    files: ['**/*.{ts,vue}'],
    rules: { 'vue/multi-word-component-names': 'off', '@typescript-eslint/no-explicit-any': 'error' },
  },
)
