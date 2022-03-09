const fs = require('fs')
const path = require('path')
const { merge } = require('webpack-merge')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

const getPackageDir = (filepath) => {
    let currDir = path.dirname(require.resolve(filepath))

    while (true) {
        if (fs.existsSync(path.join(currDir, 'package.json'))) {
            return currDir
        }

        const { dir, root } = path.parse(currDir)

        if (dir === root) {
            throw new Error(
                `Could not find package.json in the parent directories starting from ${filepath}.`
            )
        }

        currDir = dir
    }
}

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
    webpackFinal: async (config) => {
        const newConfig = {
            ...config,
            resolve: {
                ...config.resolve,
                plugins: [new TsconfigPathsPlugin()],
            },
        }

        return merge(newConfig, {
            resolve: {
                alias: {
                    '@emotion/core': getPackageDir('@emotion/react'),
                    '@emotion/styled': getPackageDir('@emotion/styled'),
                    'emotion-theming': getPackageDir('@emotion/react'),
                },
            },
        })
    },
}

module.exports = storybookConfig
