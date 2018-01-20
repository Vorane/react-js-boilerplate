var webpack = require("webpack")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require("path")

var DIST_DIR = path.resolve(__dirname, "public")
var SRC_DIR = path.resolve(__dirname, "src")

var config = {
	entry: SRC_DIR + "/index.js",
	output: {
		path: DIST_DIR + "/build",
		filename: "main.js",
		publicPath: "/build/"
	},
	plugins: [new ExtractTextPlugin("[name].css")],
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
	}
}

module.exports = config
