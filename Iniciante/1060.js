/*Números Positivos
Faça um programa que leia 6 valores. Estes valores serão somente negativos ou positivos (desconsidere os valores nulos). A seguir, mostre a quantidade de valores positivos digitados.
Entrada
Seis valores, negativos e/ou positivos.
Saída
Imprima uma mensagem dizendo quantos valores positivos foram lidos.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let numero1 = lines.shift();
let numero2 = lines.shift();
let numero3 = lines.shift();
let numero4 = lines.shift();
let numero5 = lines.shift();
let numero6 = lines.shift();

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
numero3 = parseInt(numero3)
numero4 = parseInt(numero4)
numero5 = parseInt(numero5)
numero6 = parseInt(numero6)
let numeros = [numero1, numero2, numero3, numero4, numero5, numero6]
let n = 0;
let cont = 0

while(n < 6){
   
    if(numeros[n] > 0){
        cont+=1
    }

    n+=1
}

console.log(`${cont} valores positivos`)
