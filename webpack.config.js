const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  context: __dirname,
  entry: './index.tsx',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'app.bundle.js'
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      { test: /\.[tj]sx?$/, use: ['babel-loader'] },
      { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.md$/, use: [require.resolve('raw-loader')] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './index.html' }),
  ]
};