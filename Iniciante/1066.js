/*Pares,Ímpares,Positivos e Negativos
Leia 5 valores Inteiros. A seguir mostre quantos valores digitados foram pares, quantos valores digitados foram ímpares, quantos valores digitados foram positivos e quantos valores digitados foram negativos.
Entrada
O arquivo de entrada contém 5 valores inteiros quaisquer.
Saída
Imprima a mensagem conforme o exemplo fornecido, uma mensagem por linha, não esquecendo o final de linha após cada uma.*/

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
let par = 0
let impar = 0
let positivo = 0
let negativo = 0

while(n < 5){
   
    if(numeros[n] % 2 === 0){
        par += 1
    }
    else{
        impar += 1
    }

    if(numeros[n] > 0){
        positivo += 1
    }
    else if(numeros[n] < 0){
        negativo += 1
    }

    n+=1
}

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)

 
 
