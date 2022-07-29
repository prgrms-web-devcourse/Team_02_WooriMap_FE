/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  swcMinify: true,
  webpack(config) {
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      alias: {
        '@components': path.resolve(__dirname, 'components'),
        '@pages': path.resolve(__dirname, 'pages'),
        '@hooks': path.resolve(__dirname, 'hooks'),
        '@utils': path.resolve(__dirname, 'utils'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
