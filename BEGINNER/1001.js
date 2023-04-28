// módulos -> pastas/diretórios
//serve para fazer requisição do modulo(fileSystem/fs) para que possamos ler o arquivo de texto stdin onde estão os valores para soma 
var input = require("fs").readFileSync("/dev/stdin", "utf8"); //nome do arquivo e o tipo de encoder que no caso é o utf-8 e toda essa requisição e retorno leitura(conteúdo) fica armazenada na variável.
// split método que será a string em grupo de sub string transformando ela em um vetor, serve para separa e pegar algo especifico
var lines = input.split("\n"); // quebra esses valores a partir da quebra, ou seja tem um valor e apos ele a linha quebra? ja inicia outro índice.

//shit remove o primeiro item do vetor e adiciona na variável desejada
let a = parseInt(lines.shift());
let b = parseInt(lines.shift());

const x = a + b;

console.log(`X = ${x}`);

//se vc quiser se desafiar vc pode fazer da seguinte forma 

/**
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");


 * ok temos alguns pontos a serem analisados aqui, quando usamos vetores em sua declaração acabamos por desestrutura-lá, assim ao invés de uma variável ter todos os indices armazenados, cada variável(que também é um índice) será relacionado com um item(índice) do vetor.

* map serve para mapear todos os item do vetor, parseInt para transforma-los em Inteiros 

let [z,y] = (line).map(item => parseInt(item));

const q = z + y;

console.log(`X = ${q}`);

 */