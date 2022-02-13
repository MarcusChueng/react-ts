/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-02-14 00:38:59
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-02-14 00:43:27
 */
const webpackMerge = require("webpack-merge")
const baseConfig = require("./webpack.base")

const config = {
    mode: "production",
    cache: {
        type: "filesystem",
        buildDependencies: {
            config: [__filename]
        }
    },
    output: {
        pathinfo: false,
    },
    optimization: {
        minimize: true,
        moduleIds: "deterministic",
        splitChunks: {
            chunks: "all",
            automaticNameDelimiter: "-",
            cacheGroups: {
                vendor: {
                    name: "vendors"
                }
            }
        }
    }
}