const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const BabiliPlugin = require("babili-webpack-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = merge(common, {
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader?sourceMap,module"
				})
			}
		]
	},
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new ExtractTextPlugin({
			filename: "[name].css"
		}),
		new BabiliPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	]
})
