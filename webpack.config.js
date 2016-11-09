var webpack = require('webpack');
var path = require('path');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8961',
        "./es6/main.js", hotMiddlewareScript
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',
    module: {
        loaders: [{
            test: path.join(__dirname, 'es6'),
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
}