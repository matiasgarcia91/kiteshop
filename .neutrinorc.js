const airbnb = require('@neutrinojs/airbnb');
const react = require('@neutrinojs/react');
const jest = require('@neutrinojs/jest');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnb({
      eslint: {
        rules: {
          'object-curly-newline': 0,
          'react/prop-types': 0,
          'arrow-parens': 0,
          'react/no-array-index-key': 0,
          'react/jsx-filename-extension': 0,
        },
      },
    }),
    react({
      html: {
        title: 'kiteshop',
      },
    }),
    jest(),
  ],
};
