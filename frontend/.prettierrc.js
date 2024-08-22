const { plugin } = require('typescript-eslint');

module.exports = {
  semi: true,
  trailingComma: 'all',
  singleQuote: true,
  useTabs: false,
  endOfLine: 'crlf',
  plugin: ['prettier-plugin-organize-imports'],
};
