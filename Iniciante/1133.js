/* Resto da Divisão
Escreva um programa que leia 2 valores X e Y e que imprima todos os valores entre eles
cujo resto da divisão dele por 5 for igual a 2 ou igual a 3.
Entrada
O arquivo de entrada contém 2 valores positivos inteiros quaisquer, não necessariamente
em ordem crescente.
Saída
Imprima todos os valores conforme exemplo abaixo, sempre em ordem crescente. */

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let x = parseInt(lines.shift())
let y = parseInt(lines.shift())
let aux
let soma = 0

if(y < x){
    aux = x
    x = y
    y = aux
}

for(let i = x+1; i < y; i++){
    if(i % 5 === 2 || i % 5 === 3){
        console.log(i)
    }
}
