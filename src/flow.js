import fordFulkerson from "./folk.js"
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


let g2 = [
    [0, 16, 13, 0, 0, 0],//node 0
    [0, 0, 0, 12, 0, 0], //node 1
    [0, 4, 0, 0, 14, 0], //node 2
    [0,0,9,0,0,20], //node 3
    [0,0,0,7,0,4],//node 4
    [0,0,0,0,0,0]//node 5
]

console.log(fordFulkerson(g2,0,5));