var path = require('path')
// var glob = require('glob-all')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
// var PurgecssPlugin = require('purgecss-webpack-plugin')

var env = process.env.MIX_ENV || 'dev'
var isProduction = (env === 'prod')

module.exports = {
  entry: {
    'app': ['./js/app.js']
  },
  output: {
    path: path.resolve(__dirname, '../priv/static/'),
    filename: 'js/[name].js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'static': path.resolve(__dirname, './static'),
      'css': path.resolve(__dirname, './css'),
      'js': path.resolve(__dirname, './js'),
      'vendor': path.resolve(__dirname, './vendor'),
      'jquery': path.resolve(__dirname, 'node_modules/jquery/src/jquery'),
      'vue': 'vue/dist/vue.common.js'
    }
  },
  module: {
    rules: [
    {
      test: /\.vue$/,
      use: {
        loader: 'vue-loader',
        options: {
          loaders: {
            i18n: '@kazupon/vue-i18n-loader'
          }
        }
      }
    },
    {
      test: /\.(sass|scss|css)$/,
      include: /css/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['node_modules'],
              sourceComments: !isProduction
            }
          }
        ]
      })
    },
    {
      test: /\.(js|jsx)$/,
      include: /js/,
      exclude: /node_modules/,
      use: [
        { loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      ]
    }]
  },
  plugins: [
    new CopyWebpackPlugin([{ from: './static' }]),
    new ExtractTextPlugin('css/app.css'),

    // new PurgecssPlugin({
    //   paths: glob.sync([
    //     path.join(__dirname, "../lib/rarecontractor_web/templates/**/*.html.eex")
    //   ]),
    //   extractors: [
    //     {
    //       extractor: class {
    //         static extract(content) {
    //           return content.match(/[A-z0-9-:\/]+/g) || []
    //         }
    //       },
    //       extensions: ["html", "js", "eex", "vue"]
    //     }
    //   ]
    // }),

    // new webpack.ProvidePlugin({
    //   Popper: ['popper.js', 'default']
    // }),

    new webpack.ProvidePlugin({
      Popper: ['popper.js', 'default'],
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),

    new webpack.optimize.CommonsChunkPlugin({
      names: ['shared'],
      filename: 'js/[name].js',
      minChunks: 2
    }),

    new ExtractTextPlugin({
      filename: 'css/[name].css',
      allChunks: true
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: isProduction
    })
  ]
}

// Production only plugins
if (isProduction) {
  module.exports.plugins.push(

    // new webpack.optimize.UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: false,
    //   mangle: true
    // }),

    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),

    new webpack.DefinePlugin({
      'process.env': {
          NODE_ENV: '"prod"'
      }
    })
  )
}
