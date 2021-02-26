module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'max-len': ['error', { code: 140 }],
    'react/prop-types': 0, // Allow not using typechecking via proptypes.
    'react/no-did-update-set-state': 0, // Allow using setState in lifecycle methods.
    'linebreak-style': 0, // Disable checking of line-breaks (too bothersome).
    'no-shadow': 0, // Allow shadow-passing of arguments to funcitons. (To allow inline passing setState).
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 0,
  },
};
