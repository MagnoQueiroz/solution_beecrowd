var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

console.log(lines);
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());
let c = parseInt(lines.shift());
//let maiorAB = (a + b + Math.abs(a - b)) / 2;
//let maiorX = ((maiorAB + c) + Math.abs(c - maiorAB)) / 2;
let maior = Math.max(a, b, c);
console.log(`${maior} eh o maior`);
