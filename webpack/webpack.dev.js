/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-02-14 00:13:06
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-02-14 00:36:45
 */
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const baseConfig = require("./webpack.base")
const variable = require("./webpackUtils/variable")

const { DIST_PATH } = variable
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin")

const config = {
    mode: "develop",
    cache: { type: "memory" },
    devtool: "eval-cheap-module-source-map",
    stats: "error-only",
    plugins: [new ReactRefreshWebpackPlugin()].filter(Boolean),
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devServer: {
        open: "chrome",
        contentBase: DIST_PATH,
        compress: true,
        publicPath: "/",
        host: "localhost",
        port: 9093,
        hot: true,
        disableHostCheck: true,
        stats: "error-only",
        proxy: {}
    }
}

const mergedConfig = webpackMerge.merge(baseConfig, config)
module.exports = mergedConfig