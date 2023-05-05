var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let [p1, p2] = lines[0].split(" ");
let [p3, p4] = lines[1].split(" ");

let l1 = Math.pow(p3 - p1, 2);
let l2 = Math.pow(p2 - p4, 2);

let distancia = Math.sqrt(l1 + l2);

console.log(distancia.toFixed(4));
