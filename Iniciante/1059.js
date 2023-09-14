/*Números Pares
Faça um programa que mostre os números pares entre 1 e 100, inclusive.
Entrada
Neste problema extremamente simples de repetição não há entrada.
Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let numeros = lines.shift();
numeros = parseInt(numeros)
numeros = 1;

while(numeros <= 100){
    if(numeros%2 == 0){
        console.log(`${numeros}`)
    }
    
    numeros+=1
}