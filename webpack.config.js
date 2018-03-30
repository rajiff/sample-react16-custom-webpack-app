const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
  mode: (process.env.NODE_ENV || 'development'),
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: ["babel-loader", "eslint-loader"]
    },
    {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: "style-loader!css-loader"
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'AppTemplate',
      template: './public/index.html',
      favicon: './public/favicon.ico'
      // inject: 'body'
    })
  ],
};