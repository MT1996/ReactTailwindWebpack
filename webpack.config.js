const HtmlWebPackPlugin = require("html-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const tailwindcss = require('tailwindcss');
const webpack = require("webpack");
const path = require("path");

module.exports = {
    mode: devMode ? "development" : "production",
    devtool: "source-map",
    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/[name].bundle.css"
        }),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: "./js/[name].bundle.js"
    },
    entry: {
        app: [
            "./src/main.tsx",
            "./src/main.scss"
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        hot: true,
        open: true,
        port: 9000,
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function() {
                                return [
                                    require("precss"),
                                    tailwindcss('./tailwind.config.js'),
                                    require("autoprefixer"),
                                    require("cssnano")
                                ]
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};