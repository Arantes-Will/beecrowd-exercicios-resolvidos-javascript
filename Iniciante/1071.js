/*Soma de Impares Consecutivos I
Leia 2 valores inteiros X e Y. A seguir, calcule e mostre a soma dos números impares entre eles.
Entrada
O arquivo de entrada contém dois valores inteiros.
Saída
O programa deve imprimir um valor inteiro.
Este valor é a soma dos valores ímpares que estão entre os valores fornecidos na entrada que deverá caber em um inteiro.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let x = lines.shift();
let y = lines.shift();

x = parseInt(x)
y = parseInt(y)
let aux
let soma = 0
let k = 0

if(y < x){
    aux = y
    y = x
    x = aux
}

k = x+1

while(k < y){
    if(k%2 !== 0){
        soma = soma + k
    }
    k++
}

console.log(`${soma}`)