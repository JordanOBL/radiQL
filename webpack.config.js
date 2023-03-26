/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const config = {
  entry: './client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  devServer: {
    hot: true,
    static: {
      publicPath: '/',
      directory: path.join(__dirname, 'dist'),
    },
    proxy: {
      '/submitURI':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/saveURI':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/register':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/login':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/uris':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/getUsername':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/logout':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/defaultbp':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
      '/apollobp':
                process.env.NODE_ENV === 'production'
                  ? 'https://radiql.herokuapp.com'
                  : 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.ts(x)?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: './favicon.ico',
      template: './client/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};

module.exports = config;
