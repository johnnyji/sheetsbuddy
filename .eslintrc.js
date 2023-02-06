module.exports = {
  extends: ['prettier', 'prettier/react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  globals: {
    chrome: true,
  },
  plugins: ['prettier', 'react-hooks', 'eslint-plugin-import'],
  rules: {
    'no-class-assign': 0,
    'import/default': 'error',
    'import/named': 'error',
    'import/no-unresolved': ['error', { caseSensitive: true }],
    'import/no-self-import': 'error',
    'no-console': 'error',
    'no-only-tests/no-only-tests': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: false,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false,
        variables: true,
      },
    ],
    'no-warning-comments': [
      'error',
      {
        terms: ['fixme'],
      },
    ],
    'require-await': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    'import/ignore': ['node_modules', 'generated.ts', '@env'],
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
};
