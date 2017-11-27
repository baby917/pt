var path = require('path');
var webpack = require('webpack');
var htmlPlugin = require('html-webpack-plugin');
var vuxLoader = require('vux-loader');


let webpackConfig = {
  entry: {
    'build':'./src/main.js',
    'vendor':'./src/static/hsh-jsapi-1.0.0.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].js?[hash]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader!postcss-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'jquery':'jquery'
    },
    extensions: ['*', '.js', '.vue', '.json','.less']
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery:'jquery'
    }),
    new htmlPlugin({//打包自动添加html
      filename:'index.html',
      template:'./templateindex.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true,
    host : '0.0.0.0',
    port:'80'
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
};

module.exports = vuxLoader.merge(webpackConfig,{
  plugins:['vux-ui']
});


if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
