/*Escreva um programa que leia um valor inteiro N.
N * 2 linhas de saída serão apresentadas na execução do programa, seguindo a lógica do exemplo abaixo.
Para valores com mais de 6 dígitos, todos os dígitos devem ser apresentados.
Entrada
O arquivo de entrada contém um número inteiro positivo N (1 < N < 1000).
Saída
Imprima a saída conforme o exemplo fornecido.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()

N = lines.shift()

for(i = 1; i <= N; i++){
    console.log(`${i} ${i*i} ${i*i*i}`)
    console.log(`${i} ${(i*i+1)} ${(i*i*i)+1}`)
}