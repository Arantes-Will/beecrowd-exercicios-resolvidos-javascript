/*Multiplos de 13
Escreva um algoritmo que leia 2 valores inteiros X e Y calcule a soma dos números que não 
são múltiplos de 13 entre X e Y, incluindo ambos.
Entrada
O arquivo de entrada contém 2 valores inteiros quaisquer, não necessariamente em ordem crescente.
Saída
Imprima a soma de todos os valores não divisíveis por 13 entre os dois valores lidos na entrada,
inclusive ambos se for o caso.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()

let x = parseInt(lines.shift())
let y = parseInt(lines.shift())
let aux
let soma = 0

if(y < x){
    aux = x
    x = y
    y = aux
}

for(let i = x; i <= y; i++){
    if(i % 13 !== 0){
        soma+=i
    }
}

console.log(soma)
