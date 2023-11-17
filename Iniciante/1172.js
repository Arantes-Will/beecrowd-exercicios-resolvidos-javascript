/*Substituição em Vetor I
Faça um programa que leia um vetor X[10]. Substitua a seguir,
todos os valores nulos e negativos do vetor X por 1. Em seguida mostre o vetor X.
Entrada
A entrada contém 10 valores inteiros, podendo ser positivos ou negativos.
Saída
Para cada posição do vetor, escreva "X[i] = x", onde i é a posição do vetor e x é o valor armazenado
naquela posição.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let X = []
for(let i = 0; i < 10; i++){
    X[i] = Number(lines.shift())
    if(X[i] <= 0){
        X[i] = 1
    }
    console.log(`X[${i}] = ${X[i]}`)
}