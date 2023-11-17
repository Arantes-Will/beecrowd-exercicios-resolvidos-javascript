/*Preenchimento de Vetor I
Leia um valor e faça um programa que coloque o valor lido na primeira posição de um vetor N[10].
Em cada posição subsequente, coloque o dobro do valor da posição anterior.
Por exemplo, se o valor lido for 1, os valores do vetor devem ser 1,2,4,8 e assim sucessivamente.
Mostre o vetor em seguida.
Entrada
A entrada contém um valor inteiro (V<=50).
Saída
Para cada posição do vetor, escreva "N[i] = X", onde i é a posição do vetor e X é o valor armazenado
na posição i. O primeiro número do vetor N (N[0]) irá receber o valor de V.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let N = []
for(let i = 0; i < 10; i++){
    if(i === 0){
        N[i] = Number(lines.shift())
    }
    else{
        N[i] = N[i-1]*2
    }
    console.log(`N[${i}] = ${N[i]}`)
}