const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: { mac: path.resolve(path.join('src', 'js', 'desktop', 'index.js'))},
  plugins:[
    new CleanWebpackPlugin(['dist-mac']),
  ],
  devtool: 'inline-source-map',
  target: 'electron-main',
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      {test:/\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, query:{ presets: ['es2015', 'react']}}
    ]
  },
  output: {
    filename: 'mac.bundle.js',
    path: path.resolve(__dirname, 'dist-mac')
  }
}