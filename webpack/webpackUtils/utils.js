/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-02-09 21:45:11
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-02-11 22:44:40
 */
const fs = require("fs")
const packageConfig = require("../../package.json")

function readFile(curPath) {
    const content = fs.readFileSync(curPath, "utf-8")
    return content
}

function getVersion() {
    return packageConfig.version || "1.0.0"
}

function getTestVersion() {
    return packageConfig.testVersion || "1.0.0"
}

function getEnv() {
    return process.env.NODE_ENV || "dev"
}

module.export = {
    readFile,
    getVersion,
    getTestVersion,
    getEnv
}