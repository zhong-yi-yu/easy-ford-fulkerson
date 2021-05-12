# Easy Ford Fulkerson

A simple script for computing max flow problem via the Ford Fulkerson Algorithm.

The source code for this script is inside "src/folk.js"

## Example

```javascript
let g2 = [
    [0, 16, 13, 0, 0, 0],//node 0
    [0, 0, 0, 12, 0, 0], //node 1
    [0, 4, 0, 0, 14, 0], //node 2
    [0,0,9,0,0,20], //node 3
    [0,0,0,7,0,4],//node 4
    [0,0,0,0,0,0]//node 5
]

let output = fordFulkerson(g2,0,5); //The output will be the maximum flow for the network.
```