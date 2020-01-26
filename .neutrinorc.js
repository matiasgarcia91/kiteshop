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
          'object-curly-newline': { multiline: true },
          'react/prop-types': 0,
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
