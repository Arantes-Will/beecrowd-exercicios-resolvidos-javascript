/*Troca em Vetor I
Faça um programa que leia um vetor N[20].
Troque a seguir, o primeiro elemento com o último, o segundo elemento com o penúltimo, etc.,
até trocar o 10º com o 11º. Mostre o vetor modificado.
Entrada
A entrada contém 20 valores inteiros, positivos ou negativos.
Saída
Para cada posição do vetor N, escreva "N[i] = Y", onde i é a posição do vetor e Y é o valor 
armazenado naquela posição.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let N = []

for(let i = 0; i < 4; i++){
    N[i] = Number(lines.shift())
    console.log(`N[${i}] = ${N[i]}`)
}