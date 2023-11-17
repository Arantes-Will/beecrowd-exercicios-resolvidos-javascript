/*Seleçao em Vetor I
Faça um programa que leia um vetor A[100]. No final, mostre todas as posições do vetor que armazenam um valor
menor ou igual a 10 e o valor armazenado em cada uma das posições.
Entrada
A entrada contém 100 valores, podendo ser inteiros, reais, positivos ou negativos.
Saída
Para cada valor do vetor menor ou igual a 10, escreva "A[i] = x", onde i é a posição do vetor e x é o valor
armazenado na posição, com uma casa após o ponto decimal.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let A = []

for(let i = 0; i < 100; i++){
    A[i] = Number(lines.shift())
    if(A[i] <= 10){
        console.log(`A[${i}] = ${A[i].toFixed(1)}`)
    }    
}
