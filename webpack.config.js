const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');



const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

module.exports = {
	mode,
	target,
	devtool,
	devServer: {
		port: 3000,
		open: true,
		hot: true,
	},
	entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
	output: {
		path: path.resolve(__dirname, 'public'),
		clean: true,
		filename: 'js/index.[contenthash].js',
		assetModuleFilename: 'img/[name][ext]',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src', 'index.html')
		}),
		new MiniCssExtractPlugin({
			filename: 'css/style.[contenthash].css',
		}),
		new SpriteLoaderPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.(c|sa|sc)ss$/i,
				use: [
					devMode ? "style-loader" : MiniCssExtractPlugin.loader,
				  	"css-loader",
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							}
						}
					},
					"sass-loader",
				],
			},
			{
				test: /\.woff2?$/i,
				type: 'asset/resource',
				generator: {
				  filename: 'fonts/[name][ext]',
				},
		   },
			 {
				test: /\.(jpe?g|png|gif|svg)$/i,
				use: [
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
							  progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
							  enabled: false,
							},
							pngquant: {
							  quality: [0.65, 0.90],
							  speed: 4
							},
							gifsicle: {
							  interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
							  quality: 75
							}
						}
					}
				],
				type: 'asset/resource',
			},
			// {
			// 	test: /\.svg$/,
			// 	loader: 'svg-sprite-loader',
		   // },
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
				  loader: 'babel-loader',
				  options: {
					 presets: ['@babel/preset-env']
				  }
				}
			},
		],
	},
}