/* global __dirname require module */
const path = require('path');
const webpack = require('webpack');

const config = {
  entry: './src/browser.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'script.js',
    libraryTarget: 'var',
    library: 'ProblemSolver',
  },
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'},
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      TARGET: JSON.stringify('web'),
    }),
  ],
};

module.exports = config;
