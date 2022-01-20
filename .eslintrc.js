module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  plugins: ['gridsome'],
  env: {
    node: true,
  },
  extends: [
    'plugin:gridsome/recommended',
    'plugin:vue/essential',
    'plugin:prettier/recommended',
    '@vue/prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  overrides: [],
}
