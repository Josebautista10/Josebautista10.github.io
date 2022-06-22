module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:react/jsx-runtime'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off',
    'arrow-body-style': [
      'error',
      'as-needed',
      { requireReturnForObjectLiteral: true }
    ],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
