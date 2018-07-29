const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: { web: path.resolve(path.join('src', 'js', 'web', 'index.js'))},
  plugins:[
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({title: 'Development', hash: true, template: path.resolve(path.join(__dirname, 'index.html'))}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: 'inline-source-map',
  target: 'web',
  devServer: {
    contentBase: './dist',
    hot: true
  },
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
    filename: 'web.bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}