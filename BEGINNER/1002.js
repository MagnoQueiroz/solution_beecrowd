var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var pi = 3.14159;
var raio = parseFloat(input);

let area = pi * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);
