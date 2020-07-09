const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanHtmlPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixcss = require('autoprefixer');
const cssnanoFrompostcss = require('cssnano');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
    entry: ["@babel/polyfill", path.resolve(__dirname, "./index.js")],
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',
        filename: "js/[name].[hash:8].bundle.js",
        chunkFilename: "[name].[hash:8].chunk.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                // autoprefixcss({
                                //     browsers: [
                                //         'last 5 Chrome versions',
                                //         'last 5 Firefox versions',
                                //         'Safari >= 6',
                                //         'ie> 8'
                                //     ]
                                // }),
                                cssnanoFrompostcss()
                            ]
                        }
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|woff|woff2|tff|eot)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images',
                        publicPath: 'images'
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html")
        }),
        new CleanHtmlPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{
            from: __dirname + '/assets',
            to: __dirname + '/dist/assets',
            ignore: ['.*']
        }])
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        }
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        compress: false,
        host: "0.0.0.0",
        hot: true,
        historyApiFallback: true,
        port: 8080,
        proxy: {
            "/api": {
                target: "http://192.168.111.210:8080",
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
}
module.exports = config;