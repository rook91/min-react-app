const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

module.exports = [{
    entry: './src/react/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/env",
                            "@babel/preset-react"
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/react/index.html'
        }]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    output: {
        path: __dirname + '/distReact',
        publicPath: '/',
        filename: 'bundle.js'
    },
}, {
    entry: './src/preact/index.jsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            [
                                "transform-react-jsx",
                                {
                                    "pragma": "h"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: './src/preact/index.html'
        }]),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
            DEBUG: false
        }),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    output: {
        path: __dirname + '/distPreact',
        publicPath: '/',
        filename: 'bundle.js'
    },
}];
