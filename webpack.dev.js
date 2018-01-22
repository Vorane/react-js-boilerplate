const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin
var DashboardPlugin = require("webpack-dashboard/plugin")

module.exports = merge(common, {
	devtool: "inline-cheap-module-source-map",
	devServer: {
		contentBase: "./src",
		inline: true,
		historyApiFallback: true
	},
	module: {
		rules: [
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
			}
		]
	},
	plugins: [new BundleAnalyzerPlugin(), new DashboardPlugin()]
})
