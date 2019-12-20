const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src',
  output: {
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: require('./babelrc.json'), // eslint-disable-line global-require
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: './public/index.ejs'
  })]
};
