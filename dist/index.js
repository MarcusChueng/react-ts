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
    var rootElement = document.getElementById("root");
    console.log("运行");
    var App = function () {
        return (React.createElement("div", { className: "hello" }, "Hello"));
    };
    render(React.createElement(App, null), rootElement);
}
catch (e) {
    console.log("e", e);
}
//# sourceMappingURL=index.js.map