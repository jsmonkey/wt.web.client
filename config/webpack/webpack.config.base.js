const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const sourcePath = path.join(__dirname, '../../src');
const buildPath = path.join(__dirname, '../../dist');
const modulesPath = path.join(__dirname, '../../node_modules');

const config = {

  context: sourcePath,

  output: {
    filename: '[name].js',
    path: buildPath,
    publicPath: '/',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      modulesPath,
      sourcePath,
    ],
  },

  module: {
    rules: [
      // {
      //     enforce: 'pre',
      //     test: /\.jsx?$/,
      //     exclude: /node_modules/,
      //     loader: 'eslint-loader',
      // },
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader',
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      __DEV__: process.env.NODE_ENV === 'development',
      __PROD__: process.env.NODE_ENV === 'production',
      __API__: JSON.stringify(process.env.ENDPOINT || '/api'),
      __SIGNAL__: JSON.stringify(process.env.SIGNAL || '/signal'),
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: false,
      allChunks: true,
    }),
  ],
};

module.exports = config;
