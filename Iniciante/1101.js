/*Sequência de Números e Soma
Leia um conjunto não determinado de pares de valores M e N (parar quando algum dos valores for menor ou igual a zero). Para cada par lido, mostre a sequência do menor até o maior e a soma dos inteiros consecutivos entre eles (incluindo o N e M).

Entrada
O arquivo de entrada contém um número não determinado de valores M e N. A última linha de entrada vai conter um número nulo ou negativo.

Saída
Para cada dupla de valores, imprima a sequência do menor até o maior e a soma deles, conforme exemplo abaixo.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let valores = []
let aux
let a 
let b 



while(1){
    let k = 0
    let soma = 0
    let seq = []
    valores = lines.shift().split(" ")
    a = Number(valores[0])
    b = Number(valores[1])

    if(a <= 0 || b <= 0){
        break
    }

    if(a > b){
        aux = a
        a = b
        b = aux
    }

    for(let i = a; i <= b; i++){
        seq[k] = i
        soma+=i
        k++
    }

    let minhaString = seq.join(" ")
    console.log(minhaString+` Sum=${soma}`)   
  
    
}