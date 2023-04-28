var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let a, b, c, w_a, w_b, w_c;

a = parseFloat(lines.shift());
b = parseFloat(lines.shift());
c = parseFloat(lines.shift());

w_a = a * 2;
w_b = b * 3;
w_c = c * 5;

let avg = (w_a + w_b + w_c) / 10;

console.log(`MEDIA = ${avg.toFixed(1)}`);
