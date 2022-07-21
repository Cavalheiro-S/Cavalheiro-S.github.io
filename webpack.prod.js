const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "docs")
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(
            {
                filename: "[name].[contenthash].css"
            }
        )
    ],

})