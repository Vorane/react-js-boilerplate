var webpack = require("webpack")
var ManifestPlugin = require("webpack-manifest-plugin")
var ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const WebpackPwaManifest = require("webpack-pwa-manifest")

var path = require("path")

var DIST_DIR = path.resolve(__dirname, "public")
var SRC_DIR = path.resolve(__dirname, "src")

var config = {
	entry: {
		vendor: [
			"react",
			"react-dom",
			"redux",
			"react-redux",
			"react-router",
			"redux-thunk"
		],
		app: SRC_DIR + "/index.js"
	},
	output: {
		path: DIST_DIR + "/build",
		filename: "[name].js",
		chunkFilename: "[name].js",
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
				test: /\.webmanifest$/,
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
			filename: DIST_DIR + "/index.html",
			template: SRC_DIR + "/index.html",
			title: "React Js Boilerplate",
			inject: true
		}),
		new WebpackPwaManifest({
			name: "react js boilerplate",
			short_name: "rjb",
			lang: "en-us",
			start_url: "/",
			display: "standalone",
			orientation: "portrait",
			background_color: "#fff",
			theme_color: "#f1592a",
			icons: [
				{
					src: SRC_DIR + "/assets/icons/android-chrome-192x192.png",
					sizes: [96, 128, 192]
				},
				{
					src: SRC_DIR + "/assets/icons/android-chrome-512x512.png",
					sizes: [256, 384, 512]
				}
			]
		}),
		new ManifestPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			name: "vendor",
			minChunks: Infinity
		})
	]
}

module.exports = config
