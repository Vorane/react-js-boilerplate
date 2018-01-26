const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin
var DashboardPlugin = require("webpack-dashboard/plugin")
var BrowserSyncPlugin = require("browser-sync-webpack-plugin")

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
	plugins: [
		new BundleAnalyzerPlugin(),
		new DashboardPlugin(),
		new BrowserSyncPlugin(
			{
				// browse to http://localhost:3000/ during development,
				// ./public directory is being served
				host: "localhost",
				port: 3000,
				server: { baseDir: ["public"] }
			},
			{
				// prevent BrowserSync from reloading the page
				// and let Webpack Dev Server take care of this
				reload: false
			}
		)
	]
})
