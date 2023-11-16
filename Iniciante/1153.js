/*Fatorial Simples
Ler um valor N. Calcular e escrever seu respectivo fatorial.
Fatorial de N = N * (N-1) * (N-2) * (N-3) * ... * 1.
Entrada
A entrada contém um valor inteiro N (0 < N < 13).
Saída
A saída contém um valor inteiro, correspondente ao fatorial de N.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

N = Number(lines.shift())
fat = N
for(let i = 1; i < N; i++){
    fat *= (N-i)
}

console.log(fat)