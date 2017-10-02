const path = require('path')

module.exports = {
    entry: './app/app.module.js',
    output: {
      path: path.resolve("./bin"),
        filename: 'app.bundle.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: /\.html$/, loader: "html-loader" },
        { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader" }
      ]
    },
    devtool: "#inline-source-map"
}
