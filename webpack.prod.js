const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const UglifyJSPlugin = require("uglifyjs-webpack-plugin")
const BabiliPlugin = require("babili-webpack-plugin")

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true
		}),
		new BabiliPlugin(),
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
		})
	]
})
