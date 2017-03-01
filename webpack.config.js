/* global __dirname require module */
const path = require('path');

const config = {
  entry: './src/browser.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'script.js',
    libraryTarget: 'umd',
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
};

module.exports = config;
