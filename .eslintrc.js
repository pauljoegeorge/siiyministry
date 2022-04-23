module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  settings: {
    react: {
      version: '17.0.0'
    }
  },
  extends: ['plugin:react/recommended', 'standard', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'space-before-function-paren': ['error', 'never'],
    semi: 0,
    indent: ['error', 2],
    'comma-dangle': 'off'
  }
}
