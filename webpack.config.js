
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtracPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode:"production",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean:true
  },
  resolve:{
    extensions: ['.js','.jsx'],
    alias:{
      '@components':path.resolve(__dirname, 'src/components/'),
      '@stylkes': path.resolve(__dirname,'src/styles'),
    }
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader:'html-loader'
          }
        ]
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filenanme: '/index.html'
    }),
    new MiniCssExtracPlugin({
      filename: '[name].css'
    })
  ],
  optimization: {
    minimize: true
  }  
  
}