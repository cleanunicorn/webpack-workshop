var webpack = require('webpack');

module.exports = {
    entry: './js/main.js',
    output: {
        path: './js/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpeg|jpg|gif|svg)$/i, loaders:
                [
                    'url-loader'
                ]
            },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    }
};
