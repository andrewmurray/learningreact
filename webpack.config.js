const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development'
})

const cleanWebpackOutput = new CleanWebpackPlugin('public/')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        include: path.resolve(__dirname, 'js'),
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        include: path.resolve(__dirname, 'styles'),
        test: /\.scss$/,
        use: extractSass.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      { test: /\.woff$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff2' },
      { test: /\.ttf$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.eot$/, loader: 'file-loader' },
      { test: /\.svg$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },
  plugins: [
    cleanWebpackOutput,
    extractSass
  ]
}
