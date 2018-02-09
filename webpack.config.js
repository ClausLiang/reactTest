var webpack = require('webpack')
var path = require('path')

module.exports = {
    context: __dirname + '/src',
    entry: "./js/index.js",
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015'],
                plugins: ['react-html-attrs']
            }
        },{ // css的loader，也是css的模块化配置方法
        //     test: /\.css$/,
        //     loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
        // },{ // 使用ant-design 的配置文件
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }],
    },
    output: {
        path: __dirname,
        filename: "bundle.js"
    }
}