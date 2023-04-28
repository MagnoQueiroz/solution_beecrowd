var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());

let weight_a = a * 3.5;
let weight_b = b * 7.5;

let avg = (weight_a + weight_b) / 11;

console.log(`MEDIA = ${avg.toFixed(5)}`);
