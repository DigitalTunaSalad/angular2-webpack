const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common.js");
const helpers = require("./helpers");
module.exports = webpackMerge(commonConfig, {
  devtool: "source-map",

  output: {
    path: helpers.root("dist"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "[id].[hash].chunk.js"
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        "ENV": JSON.stringify(process.env.ENV)
      }
    }),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false // workaround for ng2
      }
    })
  ]
});
