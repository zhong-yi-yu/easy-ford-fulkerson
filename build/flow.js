"use strict";
exports.__esModule = true;
var folk_js_1 = require("./folk.js");
// let graph = [
//     [0, 16, 13, 0, 0, 0],
//     [0, 0, 10, 12, 0, 0],
//     [0, 4, 0, 0, 14, 0],
//     [0, 0, 9, 0, 0, 20],
//     [0, 0, 0, 7, 0, 4],
//     [0, 0, 0, 0, 0, 0]
// ];
// console.log(+
//     fordFulkerson(graph, 0, 5));
var g2 = [
    [0, 16, 13, 0, 0, 0],
    [0, 0, 0, 12, 0, 0],
    [0, 4, 0, 0, 14, 0],
    [0, 0, 9, 0, 0, 20],
    [0, 0, 0, 7, 0, 4],
    [0, 0, 0, 0, 0, 0] //node 5
];
console.log(folk_js_1["default"](graph, 0, 5));
