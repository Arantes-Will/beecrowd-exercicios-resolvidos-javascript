/*Divisores I
Ler um número inteiro N e calcular todos os seus divisores.
Entrada
O arquivo de entrada contém um valor inteiro.
Saída
Escreva todos os divisores positivos de N, um valor por linha.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let N = parseInt(lines.shift())

for(let i = 1; i <= N; i++){
    if(N%i === 0){
        console.log(i)
    }
}