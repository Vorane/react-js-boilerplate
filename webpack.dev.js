const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin

module.exports = merge(common, {
	devtool: "inline-cheap-module-source-map",
	devServer: {
		contentBase: "./src",
		inline: true,
		historyApiFallback: true
	},
	plugins: [new BundleAnalyzerPlugin()]
})
