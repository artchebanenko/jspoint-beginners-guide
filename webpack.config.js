const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // webpack optimization mode
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  // entry files
  entry: ['./src/index.js'],
  // output files and chunks
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  // module/loaders configuration
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  // webpack plugins
  plugins: [
    // prepare HTML file with assets
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
  // resolve files configuration
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // development server configuration
  devServer: {
    port: 9000,
  },
}
