/*
 * @Description: 
 * @version: 
 * @Author: MarcusCheung
 * @Date: 2022-02-08 23:44:06
 * @LastEditors: MarcusCheung
 * @LastEditTime: 2022-02-08 23:51:28
 */
import React from "react";
import { render } from "react-dom";

try {
    const rootElement = document.getElementById("root");
    console.log("运行");
    const App = () => {
        return(
            <div className="hello">Hello</div>
        )
    }
    render(<App></App>, rootElement)
} catch (e) {
    console.log("e", e)
}