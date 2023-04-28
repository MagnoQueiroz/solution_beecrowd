let name = lines.shift();

let sal = parseFloat(lines.shift());

let bonus = parseFloat(lines.shift());

let salaryT = sal + bonus * (15 / 100); /// se vc quiser vc pode colocar 0.15 que é a divisão de 15...


console.log(`TOTAL = R$ ${salaryT.toFixed(2)}`);
