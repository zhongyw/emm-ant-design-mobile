var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true,
		contentBase: "./",
		host: '0.0.0.0',
		port: 8085
	},
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/dist/",
		filename: "bundle.js"
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:8085'})
	]
}