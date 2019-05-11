const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const htmlWebpackConfig = new htmlWebpackPlugin({
    template: __dirname + '/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
    plugins: [htmlWebpackConfig,
        new CopyPlugin([
            { from: 'data', to: 'data' },
        //    { from: 'src/img', to: 'img' },
            { from: 'src/css', to: 'src/css' },
        ]),

    ],

    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: '/'
        }
    }
};