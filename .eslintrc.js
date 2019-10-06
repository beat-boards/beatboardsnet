module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    '@nuxtjs/eslint-config-typescript',
    // 'prettier/vue',
    // 'prettier',
    'plugin:nuxt/recommended',
  ],
  plugins: [
    // 'prettier',
    'vue'
  ],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off',
    'space-before-function-paren': 'off',
    // 'prettier/prettier': ['error', { 
    //   'parser': 'vue',
    //   'endOfLine': 'auto'
    // }]
    'semi': 'error'
  }
};
