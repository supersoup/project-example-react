/**
 * Created by supersoup on 18/10/2.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode: 'none',
    entry: {
        index: ['./src/index.js', './src/b/b.js']
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        chunkFilename: '[name]_[chunkhash].bundle.js',
        filename: '[name]_[chunkhash].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name]_[hash].[ext]',
                    outputPath: 'image'
                }
            }]
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    "plugins": [
                        // Stage 0
                        "@babel/plugin-proposal-function-bind",
        
                        // Stage 1
                        "@babel/plugin-proposal-export-default-from",
                        "@babel/plugin-proposal-logical-assignment-operators",
                        ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
                        ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
                        ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
                        "@babel/plugin-proposal-do-expressions",
        
                        // Stage 2
                        ["@babel/plugin-proposal-decorators", { "legacy": true }],
                        "@babel/plugin-proposal-function-sent",
                        "@babel/plugin-proposal-export-namespace-from",
                        "@babel/plugin-proposal-numeric-separator",
                        "@babel/plugin-proposal-throw-expressions",
        
                        // Stage 3
                        "@babel/plugin-syntax-dynamic-import",
                        "@babel/plugin-syntax-import-meta",
                        ["@babel/plugin-proposal-class-properties", { "loose": false }],
                        "@babel/plugin-proposal-json-strings"
                    ]
                }
            }]
        }]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.ejs',
            filename: 'index.html',
            inject: 'body',
            chunks: [
                'vendors',
                'index'
            ],
            aaa: 1
        }),
        new webpack.NamedModulesPlugin(),
        new BundleAnalyzerPlugin(),
        new ExtractTextPlugin({
            filename: '[name]_[chunkhash].css',
            allChunks: true
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};