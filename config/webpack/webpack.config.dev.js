const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const sourcePath = path.join(__dirname, '../../src');

const config = merge(baseConfig, {
  mode: 'development',
  entry: [
    '@babel/polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './index',
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'css-hot-loader',
          ...ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader',
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [
                    require('postcss-import')(),
                    require('postcss-url')(),
                    require('postcss-cssnext')(),
                    require('postcss-reporter')(),
                    require('postcss-nested')(),
                  ],
                },
              },
            ],
          }),
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: sourcePath,
    historyApiFallback: true,
    hot: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
      },
      '/signal': {
        target: 'ws://localhost:4000',
        ws: true,
      },
    },
  },
});

module.exports = config;
