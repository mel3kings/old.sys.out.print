module.exports = {
    entry: [
        './src/index.js'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    resolve: {
        extensions: ['.html', '.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        disableHostCheck: true,
        proxy: {
            "/get/*":{
                target: {
                    host: "node",
                    protocol: 'http:',
                    port: 3000
                },
                changeOrigin: true,
                secure: false
            },
        },
    }
};
