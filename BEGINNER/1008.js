let num = parseInt(lines.shift())
let hour = parseInt(lines.shift())
let sal = parseFloat(lines.shift())

let salary = (hour * sal).toFixed(2)

console.log(`NUMBER = ${num},`)
console.log(`SALARY = U$ ${salary}`)