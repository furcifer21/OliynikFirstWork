const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
	mode: 'development',
   entry: {app: ['./src/js/script.js', './src/scss/style.scss']},
   output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'public'),
	},
   module: {
      rules: [{
         test:/\.(s*)css$/,
			include: path.resolve(__dirname, 'src/scss'),
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),

   ]
};