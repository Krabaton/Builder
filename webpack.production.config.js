const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    app: path.resolve(__dirname, 'source/js/app.js'),
    admin: path.resolve(__dirname, 'source/js/admin.js')
  },
  output: {
    path: path.resolve(__dirname, 'build/assets/js'),
    publicPath: '/build/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: '#eval-source-map'
};
