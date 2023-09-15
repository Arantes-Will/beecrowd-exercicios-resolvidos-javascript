/*Resto
Leia um valor inteiro N. Apresente todos os números entre 1 e 10000 que divididos por N dão resto igual a 2.
Entrada
A entrada contém um valor inteiro N (N < 10000).
Saída
Imprima todos valores que quando divididos por N dão resto = 2, um por linha.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let n = lines.shift();
n = parseInt(n)

for(i = 1; i < 10000; i++){
    if(i%n === 2){
        console.log(`${i}`)
    }
}
