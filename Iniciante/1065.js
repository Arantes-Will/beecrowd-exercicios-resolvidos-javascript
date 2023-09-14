/*Pares entre Cinco Números
Faça um programa que leia 5 valores inteiros. Conte quantos destes valores digitados são pares e mostre esta informação.
Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.
Saída
Imprima a mensagem conforme o exemplo fornecido, indicando a quantidade de valores pares lidos.*/

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

numero1 = parseInt(numero1)
numero2 = parseInt(numero2)
numero3 = parseInt(numero3)
numero4 = parseInt(numero4)
numero5 = parseInt(numero5)

let numeros = [numero1, numero2, numero3, numero4, numero5]
let n = 0;
let cont = 0

while(n < 5){
   
    if(numeros[n] % 2 === 0){
        cont+=1
    }

    n+=1
}

console.log(`${cont} valores pares`)