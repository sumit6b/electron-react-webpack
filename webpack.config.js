const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: { app: './src/js/index.js', print: './src/js/print.js'},
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Development', hash: true, template: './index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      {test:/\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/, query:{ presets: ['es2015', 'react']}}
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }

}