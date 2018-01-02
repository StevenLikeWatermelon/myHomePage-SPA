const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports ={
	entry: {
		main: './src/main',
		vendors: ['vue', 'vue-router']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: './dist/',
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	module: {
		rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					less: ExtractTextPlugin.extract({
						use:['css-loader?minimize', 'autoprefixer-loader', 'less-loader'],
						fallback: 'vue-style-loader',
						publicPath: ''
					}),

					css: ExtractTextPlugin.extract({
						use:['css-loader', 'autoprefixer-loader'],
						fallback: 'vue-style-loader',
						publicPath: ''
					})
				}
			}
		},{
			test: /\.js$/,
			loader: 'babel-loader',
			exclude: '/node_modules/'
		}, {
			test: /\.css$/,
			use: ExtractTextPlugin.extract({
				use: ['css-loader', 'autoprefixer-loader'],
				fallback: 'vue-style-loader',
				publicPath: ''	
			})
		}, {
			test: /\.less$/,
			use: ExtractTextPlugin.extract({
				use: ['less-loader', 'autoprefixer-loader'],
				fallback: 'vue-style-loader'
			})
		},{
			test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
			loader: 'url-loader?limit=1024'
		}, {
			test: /\.(html|tpl)$/,
			loader: 'html-loader'
		}]
	},
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			'vue': 'vue/dist/vue.esm.js'
		}
	},
	devtool: '#source-map',
	plugins: [
		new ExtractTextPlugin({
			filename: '[name].css',
			allChunks: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendors',
			filename: 'vendors.js'
		}),

		new HtmlWebpackPlugin({
			filename: '../index.html',
            template: './src/template/index.ejs',
            inject: false
		})
	]
}



