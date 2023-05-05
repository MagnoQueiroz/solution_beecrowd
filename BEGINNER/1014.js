var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let x = parseFloat(lines.shift());
let y = parseFloat(lines.shift());

let total = x/y
console.log(`${total.toFixed(3)} km/l`);