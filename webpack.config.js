var path = require('path');
module.exports = {
    entry: './main.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundel.js'
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
        }]
    }
}