/*Quadrante
Escreva um programa para ler as coordenadas (X,Y) de uma quantidade indeterminada de pontos no sistema cartesiano. Para cada ponto escrever o quadrante a que ele pertence. O algoritmo será encerrado quando pelo menos uma de duas coordenadas for NULA (nesta situação sem escrever mensagem alguma).
Entrada
A entrada contém vários casos de teste. Cada caso de teste contém 2 valores inteiros.
Saída
Para cada caso de teste mostre em qual quadrante do sistema cartesiano se encontra a coordenada lida, conforme o exemplo.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let a
let b
let valores = []

while(1){
    
    valores = lines.shift().split(" ")
    a = parseInt(valores[0])
    b = parseInt(valores[1])

    if(a === 0 || b === 0){
        break
    }

    if(a > 0 & b > 0){
        console.log("primeiro")
    }
    else if(a > 0 & b < 0){
        console.log("quarto")
    }  
    else if(a < 0 & b < 0){
        console.log("terceiro")
    }
    else if(a < 0 & b > 0){
        console.log("segundo")
    }    
}