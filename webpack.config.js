const path = require("path");
const webpack = require("webpack");

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/env",
            {
              plugins: [
                '@babel/plugin-proposal-class-properties'
              ]
            }
          ],
        }

      },
      {
        test: /\.(scss|css)$/,
        loaders: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|mp4|ogg|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './img/'
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './fonts/'
            }
          }
        ]
      },
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve("./dist/assets"),
    publicPath: "/assets/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./src/",
    port: 3000,
    publicPath: "/assets/",
    historyApiFallback: true,
    hotOnly: true
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: path.resolve('src/assets'), to: path.resolve('dist/assets') },
      { from: path.resolve('src/index.html'), to: path.resolve('dist/index.html') },
      { from: path.resolve('src/form-process.php'), to: path.resolve('dist/form-process.php') },
      { from: path.resolve('src/index.php'), to: path.resolve('dist/index.php') },
      { from: path.resolve('src/data/seo.json'), to: path.resolve('dist/seo.json') },
    ])
  ]
};
