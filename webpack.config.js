var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require("path");

var DIST_DIR = path.resolve(__dirname,"public");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
    entry: SRC_DIR + "/index.js",
    output: {
      path: path.join(DIST_DIR, "build"),
      filename: "main.js",
      publicPath: "/build/"
    },
    resolve: {
      alias: {
        src: SRC_DIR
      }
    },
    devServer: {
      publicPath: "/build/"
    },
    plugins:[
      new ExtractTextPlugin('[name].css'),
      new HtmlWebpackPlugin({
        filename: '../index.html',
        template: 'src/index.html',
      }),
    ],
    module: {
      loaders: [
        {
          test: /\.js?/,
          include: SRC_DIR,
          loader: "babel-loader",
          query: {
            presets: ["react","es2015","stage-2"]
          }
        },
        {
            test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff|woff2)$/,
            loader: "file-loader"
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' }
            )
        }
      ]
    }
};


module.exports = config ;