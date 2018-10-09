/**
 * Created by supersoup on 18/10/2.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
        new BundleAnalyzerPlugin()
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