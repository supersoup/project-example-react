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
    devtool: 'cheap-module-eval-source-map',
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
                        'env',
                        'react',
                        'stage-0'
                    ],
                }
            }]
        }]
    },
    plugins: [
        new ManifestPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
            'process.env.DEBUG': JSON.stringify(process.env.DEBUG)
        })
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