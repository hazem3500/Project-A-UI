var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public');
var APP_DIR = path.resolve(__dirname, './');

var config = {
  entry: [APP_DIR + '/main.js',
   'react-hot-loader/patch',
   'webpack/hot/only-dev-server'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },devServer: {
    inline: true,
    contentBase: './public',
    port: 8100
  },
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
        loader: "style-loader!css-loader"
      }
    ]
  }
};

module.exports = config;
