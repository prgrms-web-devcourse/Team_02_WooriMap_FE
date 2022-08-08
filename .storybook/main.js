const path = require('path');

module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async (config) => {
    const alias = {
      components: path.resolve(__dirname, '../components'),
      pages: path.resolve(__dirname, '../pages'),
      public: path.resolve(__dirname, '../public'),
      hooks: path.resolve(__dirname, '../hooks'),
      utils: path.resolve(__dirname, '../utils'),
      apis: path.resolve(__dirname, '../apis'),
      contexts: path.resolve(__dirname, '../contexts'),
    };
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    };
    return config;
  },
};
