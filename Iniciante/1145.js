/*Sequencia Lógica
Escreva um programa que leia dois valores X e Y. 
A seguir, mostre uma sequência de 1 até Y, passando para a próxima linha a cada X números.
Entrada
O arquivo de entrada contém dois valores inteiros, (1 < X < 20) e (X < Y < 100000).
Saída
Cada sequência deve ser impressa em uma linha apenas, com 1 espaço em branco entre cada número,
conforme exemplo abaixo. Não deve haver espaço em branco após o último valor da linha.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()
N = lines.shift().split(" ")
iteracao = Number(N[0])
seq = Number(N[1])
cont = 0

for(j = 1; j <= seq; j+=iteracao){
  for(i = j; i <= iteracao; i++){
    console.log(i)
  }
}

