const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const helpers = require("./helpers");
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.ENV === "development"
});

module.exports = {
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
                include: helpers.root("src", "app"),
                loaders: ["raw-loader", "sass-loader"]
            },
            {
                test: /\.scss$/,
                exclude: helpers.root("src", "app"),
                include: helpers.root("src", "theming"),
                loaders: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin( /angular(\\|\/)core(\\|\/)/, "./src"),
        new webpack.optimize.CommonsChunkPlugin({
            name: ["app", "vendor", "polyfills"]
        }),

        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new CopyWebpackPlugin([
            { from: "src/assets", to: "assets" }
        ]),
        extractSass
    ]
};
