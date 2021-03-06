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
    'import/extensions': ['error', 'never'],
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 0,
    'class-methods-use-this': ['off'],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-else-return': 'off',
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'func-names': 'off',
    'no-unused-vars': 'off',
    'object-curly-newline': 'off',
    'max-classes-per-file': 'off',
    'arrow-parens': 'off',
  }
}
