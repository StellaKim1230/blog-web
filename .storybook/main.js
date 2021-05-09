const path = require('path')

const resolvePath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  stories: ['../src/components/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport/register',
    '@storybook/addon-storysource',
    '@storybook/addon-links/register',
    '@storybook/preset-scss',
  ],

  webpackFinal: async (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@components': path.resolve(__dirname, '../src/components'),
        '@layouts': path.resolve(__dirname, '../src/layouts'),
        '@utils': path.resolve(__dirname, '../src/utils'),
        '@assets': path.resolve(__dirname, '../src/assets'),
        '@contexts': path.resolve(__dirname, '../src/contexts'),
        '@hooks': path.resolve(__dirname, '../src/hooks'),
        '@hocs': path.resolve(__dirname, '../src/hocs'),
        '@services': path.resolve(__dirname, '../src/services'),
        '@interfaces': path.resolve(__dirname, '../src/interfaces'),
        '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
      },
    },
  }),
}
