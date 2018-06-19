const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  // 打包的入口文件
  entry: './src/main.js',

  // 配置打包结果，path定义输出文件夹，filename定义打包结果文件的名称
  output: {
    path: './dist',
    filename: 'bundle.js'
  },

  // 设置服务器端口号
  devServer: {
    inline: true,
    port: 8080,
    host: '0.0.0.0',
    disableHostCheck: true
  },

  // 配置模块的处理逻辑，用loaders定义加载器
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
