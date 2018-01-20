var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
var path = require("path")

var DIST_DIR = path.resolve(__dirname, "public")
var SRC_DIR = path.resolve(__dirname, "src")

var config = {
	devtool: "inline-cheap-module-source-map",
	entry: {
		vendor: ["react", "react-dom", "redux", "react-redux","react-router"],
		app: SRC_DIR + "/index.js"
	},
	output: {
		path: DIST_DIR + "/build",
		filename: "[name].js",
		publicPath: "/build/"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
				test: /\.(jpe?g|png|gif|svg|eot|svg|ttf|woff|woff2)$/,
				use: "file-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader: "style-loader" },
					{
						loader: "css-loader",
						options: {
							modules: true
						}
					}
				]
			},
			{
				test: /\.json$/,
				use: "json-loader"
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(["build"]),
		new HtmlWebpackPlugin({
			title: "Output Management"
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		})
	]
}

module.exports = config
