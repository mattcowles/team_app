const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')

environment.loaders.append('html', {
    test: /\.html$/,
    exclude: /node_modules/,
    loaders: ['html-loader']
});

environment.loaders.append('typescript', typescript)

environment.loaders.append('style', {
    test: /\.(scss|sass|css)$/,
    use: [{
        loader: "to-string-loader"
    }, {
        loader: "css-loader"
    }, {
        loader: "resolve-url-loader"
    }, {
        loader: "sass-loader"
    }]
});

module.exports = environment
