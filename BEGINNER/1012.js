var input = require("fs").readFileSync("./stdin", "utf8");
var lines = input.split(" ");

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

let pi = 3.14159;

let triangulo = (A * C) / 2.0;
let circulo = pi * Math.pow(C, 2);
let trapezio = ((A + B) * C) / 2.0;
let quadrado = Math.pow(B, 2);
let retangulo = A * B;

console.log(`TRIANGULO: ${triangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`);
console.log(`QUADRADO: ${quadrado.toFixed(3)}`);
console.log(`RETANGULO: ${retangulo.toFixed(3)}`);
