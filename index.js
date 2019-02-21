module.exports = {
  extends: [
    require.resolve('eslint-config-airbnb-base')
  ],
  rules: {
    // add your custom rules here
    'no-param-reassign': ['error', {
      props: false,
    }],
    semi: ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', {
      'devDependencies': true,
      optionalDependencies: ['test/unit/index.js'],
    }],
    'indent': 'off',
    'vue/script-indent': ['error', 2, {
      'baseIndent': 1,
      'switchCase': 1
    }],
    'import/extensions': ['error', 'never'],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'class-methods-use-this': ['off'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
  }
}
