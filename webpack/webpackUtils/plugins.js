/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-02-12 22:37:55
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-02-12 23:32:50
 */

const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const variable = require("./variable")
const DotenvPlugin = require("dotenv-webpack")
const path = require("path")

const { PUBLIC_PATH, SRC_PATH, DIST_PATH, ENV_CONFIG_PATH, IS_DEV, IS_PRO } = variable

function getHTMLPlugins() {
    const indexHtmlPlugin = new HtmlWebpackPlugin({
        template: path.join(PUBLIC_PATH, "index.html"),
        filename: "index.html",
        inject: true,
        title: "",
        minify: {
            removeComments: true,
            collapseWhitespace: true,
            minifyCSS: true,
            minifyJS: true
        }
    })
    return [indexHtmlPlugin]
}

function getPlugins() {
    const miniCssPlugin = new MiniCssExtractPlugin({
        filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash:8].css',
        chunkFilename: IS_DEV ? 'css/[name].chunk.css' : 'css/[name].contenthash:8].css',
        ignoreOrder: true
    })

    const dotenvPlugin = new DotenvPlugin({
        path: ENV_CONFIG_PATH
    })

    return [
        ...getHTMLPlugins(), 
        dotenvPlugin,
        miniCssPlugin
    ]
}

module.exports = {
    getPlugins
}