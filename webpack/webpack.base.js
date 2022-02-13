/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-02-09 21:38:34
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-02-14 00:12:25
 */
const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const variable = require("./webpackUtils/variable")
const resolveConfig = require("./webpackUtils/resolve")
const plugins  = require("./webpackUtils/plugins")
const { SRC_PATH, DIST_PATH, IS_DEV, IS_PRO,getCDNPath } = variable

const config = {
    entry: {
        index: path.join(SRC_PATH, "index.tsx")
    },
    output: {
        path: DIST_PATH,
        filename: IS_DEV ? 'js/[name].bundle.js' : "js/[name].[contenthash:8].bundle.js",
        publicPath: getCDNPath(),
        globalObject: "this",
        chunkFilename: IS_DEV ? "js/[name].chunk.js" : "js/[name].[contenthash:8].chunk.js",
        assetModuleFilename: "assets/[hash][ext][query]",
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.(tsx?|js)$/,
                include: [SRC_PATH],
                use: [
                    {
                        loader: "thread-loader",
                        options: {
                            workers: require("os").cpus().length * 2,
                            parallel: true
                        }
                    },
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                exclude: [/node_modules/, /public/, /(.|_)min.js$/]
            },
            {
                test: /\.css$|\.scss$/i,
                include: [SRC_PATH],
                exclude: /node_modules/,
                use: [
                    IS_DEV ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: false,
                            sourceMap: !IS_PRO
                        }
                    },
                    "postcss-loader",
                    "sass-loader",
                    {
                        loader: "style-resources-loader",
                        options: {
                            patterns: path.resolve(SRC_PATH, "assets", "css", "core.scss")
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
                type: "assets/resource",
                generator: {
                    filename: "assets/images/[hash][ext][query]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "assets/resource",
                generator: {
                    filename: "assets/fonts/[hash][ext][query]"
                }
            }
        ]
    },
    resolve: resolveConfig,
    plugins: plugins.getPlugins()
}

module.exports = config