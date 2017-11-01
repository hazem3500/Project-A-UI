var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './');

var config = {
  entry: [APP_DIR + '/main.js',
   'react-hot-loader/patch'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },devServer: {
    inline: true,
    contentBase: './public',
    port: 8100
  },
  devtool: 'source-map',
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        exclude : '/node_modules',
        loaders : 'babel-loader',
        query: {
          plugins: ['react-hot-loader/babel']
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?modules=true&localIdentName=[name]__[local]___[hash:base64:5]'})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
  filename: './style.css',
  allChunks: true
})
  ]
};

module.exports = config;
