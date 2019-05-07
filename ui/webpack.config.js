const htmlWebpackPlugin = require('html-webpack-plugin');
const htmlWebpackConfig = new htmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'indexASd.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: [ 'es2015', 'react' ]
                }
            }
        ]
    },
    plugins: [ htmlWebpackConfig ],
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: '/'
        }
    }
};