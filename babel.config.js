const babelConfig = {
    plugins: [
        [
            'babel-plugin-styled-components',
            {
                minify: true,
            },
        ],
    ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
}

module.exports = babelConfig
