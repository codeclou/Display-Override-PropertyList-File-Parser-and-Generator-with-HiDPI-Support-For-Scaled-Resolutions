const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const nestedCss = require('postcss-nested');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */

const { NODE_ENV } = process.env;

module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: NODE_ENV === 'production' ? 'cheap-module-source-map' : 'eval',

  // Set entry point to ./src/main and include necessary files for hot load
  entry: ['./src/main.js'],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: path.join(__dirname, '/'),
    filename: 'bundle.js',
  },

  // Necessary plugins for hot load
  plugins: [
    NODE_ENV === 'production' ? () => {} : new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('bundle.css', { allChunks: true }),
    new webpack.DefinePlugin({
      'process.env': {
        /* special env for react prod build =>  http://dev.topheman.com/make-your-react-production-minified-version-with-webpack/ */
        NODE_ENV: JSON.stringify(NODE_ENV),
      },
    }),
    NODE_ENV === 'production' ? new webpack.optimize.UglifyJsPlugin({ minimize: true }) : () => {},
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader'] },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
      /* { test: /\.ts$/, loader: 'ts-loader' },*/
      { test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192' }, /* inline base64 URLs for <=8k images, direct URLs for the rest */
    ],
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['', '.js', '.ts', '.jsx', '.css'],
  },

  // Additional plugins for CSS post processing using postcss-loader
  postcss: [
    autoprefixer, // Automatically include vendor prefixes
    nestedCss, // Enable nested rules, like in Sass
  ],
};
