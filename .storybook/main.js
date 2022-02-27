const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const storybookConfig = {
    framework: '@storybook/react',
    typescript: { reactDocgen: false },
    core: {
        builder: 'webpack5',
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    stories: [
        '../src/**/*.stories.mdx',
        '../src/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.plugins = [new TsconfigPathsPlugin()]

        return config
    },
}

module.exports = storybookConfig
