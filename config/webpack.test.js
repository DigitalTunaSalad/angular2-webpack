const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'inline-source-map',

  entry: {
    "polyfills": "./src/polyfills.ts",
    "vendor": "./src/vendor.ts",
    "app": "./src/main.ts"
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ["awesome-typescript-loader", "angular2-template-loader"]
      },
      {
        test: /\.html$/,
        loader: "html-loader"
      },
      {
        test: /\.scss$/,
        loaders: ["raw-loader", "sass-loader"]
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      "./src", // location of your src
      {} // a map of your routes
    ),
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new CopyWebpackPlugin([
      { from: "src/assets", to: "assets" }
    ]),
  ]
};
