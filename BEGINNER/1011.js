
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let x = parseFloat(lines.shift())
let  pi = 3.14159

let radius = (4.0 / 3) * pi * Math.pow(x, 3);
radius = radius.toFixed(3)
console.log(`VOLUME = ${radius}`)