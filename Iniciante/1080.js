/*Maior e Posição
Leia 100 valores inteiros. Apresente então o maior valor lido e a posição dentre os 100 valores lidos.
Entrada
O arquivo de entrada contém 100 números inteiros, positivos e distintos.
Saída
Apresente o maior valor lido e a posição de entrada, conforme exemplo abaixo.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let vetor = []
let maior = 0
let posicao

for(var i = 0; i < 100; i++){
   vetor[i] = parseInt(lines.shift())

   if(maior < vetor[i]){
        maior = vetor[i]
   }
   
}

for(var i = 0; i < 100; i++){
    if(maior === vetor[i]){
        posicao = i+1
        
    }
}

console.log(maior)
console.log(posicao)



    
    