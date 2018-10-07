/**
 * Created by supersoup on 18/10/2.
 */
const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: {
        index: './src/index.js',
        // b: './src/b/b.js'
    },
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: '[name]_[chunkhash].js'
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.ejs',
        filename: 'index.html',
        inject: 'body',
        aaa: 1
    })]
};