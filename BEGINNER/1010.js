let infoP1, infoP2;
//como são dois indices que agrupam mais de uma informação ['x,y,z' 'x,y,z'] usamos o shit para pegar, e para quebrar esses números para assim separar os itens necessários para a operação
infoP1 = lines.shift().split(" ");
infoP2 = lines.shift().split(" ");

let cP1 = parseInt(infoP1.shift());
let un1 = parseInt(infoP1.shift());
let vP1 = parseFloat(infoP1.shift());
let cP2 = parseInt(infoP2.shift());
let un2 = parseInt(infoP2.shift());
let vP2 = parseFloat(infoP2.shift());

let valueT = un1 * vP1 + un2 * vP2;
valueT = valueT.toFixed(2);

console.log(`VALOR A PAGAR: R$ ${valueT}`);
