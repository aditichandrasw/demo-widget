const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Don't forget to install this package

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "demo-widget.bundle.js",
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: 'css-loader' },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
