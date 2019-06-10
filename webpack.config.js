const path = require('path')


module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    modules: [
      'node_modules', path.resolve(__dirname, 'loader')
    ]
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.png$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 200 * 1024
          }
        }

      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      }
    ]
  }
} 