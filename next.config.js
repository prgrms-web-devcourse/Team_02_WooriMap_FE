/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  swcMinify: true,
  images: {
    domains: [
      'wooriemap.s3.ap-northeast-2.amazonaws.com',
      'cdn.pixabay.com',
      'res.cloudinary.com',
    ],
  },
  webpack(config) {
    config.resolve = {
      alias: {
        components: path.resolve(__dirname, 'components'),
        pages: path.resolve(__dirname, 'pages'),
        hooks: path.resolve(__dirname, 'hooks'),
        utils: path.resolve(__dirname, 'utils'),
        apis: path.resolve(__dirname, 'apis'),
        hocs: path.resolve(__dirname, 'hocs'),
        core: path.resolve(__dirname, 'core'),
      },
      ...config.resolve,
    };
    return config;
  },
};

module.exports = nextConfig;
