const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '/bundle'),
    filename: 'index_bundle.js'
  },
  devServer: {
    port: 3000,
    hot: true,
    open: true 
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
         test: /\.scss$/,
         exclude: /node_modules/,
         use: ['style-loader', 'css-loader', {
           loader: 'sass-loader',
           options: {
             implementation: require('sass'), 
           },
         }],
       }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
};
