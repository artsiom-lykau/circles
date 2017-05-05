/**
 * Created by lykovartem on 05.05.2017.
 */

let webpack = require('webpack');
let path = require('path');

module.exports = {
    context: __dirname,
    entry: {
        app: './js/app.js'
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: ['babel-loader']
            }
        ]
    }
};
