const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanHtmlPlugin = require('clean-webpack-plugin');
const autoprefixcss = require('autoprefixer');
const cssnanoFrompostcss = require('cssnano');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: ["@babel/polyfill", path.resolve(__dirname, "./index.js")],
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: './',
        filename: "js/[name].[hash:8].bundle.js",
        chunkFilename: "[name].[hash:8].chunk.js"
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                    },
                    // {
                    //     loader: 'style-loader'
                    // },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(html)$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
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
                        outputPath: 'assets/images',
                        publicPath: '/dist/assets/images'
                    }
                }
            }
        ]
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //       }
    //   },
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                styles: {
                    name: 'less',
                    test: /\.less$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./index.html")
        }),
        new CleanHtmlPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name].common.css'
        }),
    ]
}
module.exports = config;