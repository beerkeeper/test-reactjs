const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

var config = {
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}

module.exports = config;
