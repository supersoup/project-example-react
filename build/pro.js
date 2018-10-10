/**
 * Created by supersoup on 18/10/2.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

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
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            })
        }]
    },
    plugins: [
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
            // test (chunks) {
            //     console.log(chunks);
            //     return true;
            // },
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