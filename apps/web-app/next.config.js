const withTM = require('next-transpile-modules')([
  '@hopem/ui-web',
  '@hopem/api',
]);

module.exports = withTM({
  reactStrictMode: true,
});
