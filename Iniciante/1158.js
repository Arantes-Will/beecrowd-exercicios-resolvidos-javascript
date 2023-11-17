/*Soma de Ímpares Consecutivos III
Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de Y ímpares consecutivos a partir de X inclusive o próprio X se ele for ímpar. Por exemplo:
para a entrada 4 5, a saída deve ser 45, que é equivalente à: 5 + 7 + 9 + 11 + 13
para a entrada 7 4, a saída deve ser 40, que é equivalente à: 7 + 9 + 11 + 13
Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.
Saída
Imprima a soma dos consecutivos números ímpares a partir do valor X.*/


const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

N = parseInt(lines.shift())
let teste,  soma = 0

for(let i = 0; i < N; i++){
    teste = lines.shift().split(" ")
    let X = Number(teste[0])
    let Y = Number(teste[1])
    
    if(X%2 === 0){
        X = X+1
    }
    
    for(let j = 0; j < Y; j++){
        soma += X+(j*2)
    }
    console.log(soma)
    soma = 0
}




