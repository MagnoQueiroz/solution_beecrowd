let num = parseInt(lines.shift());
let hor = parseInt(lines.shift());
let sal = parseFloat(lines.shift());

salary = (hor * sal).toFixed(2);

console.log("NUMBER =", num);
console.log("SALARY = U$", salary);
