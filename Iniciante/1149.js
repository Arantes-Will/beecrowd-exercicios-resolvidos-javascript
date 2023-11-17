/*Somando Inteiros Consecutivos
Faça um algoritmo para ler um valor A e um valor N.
Imprimir a soma de A + i para cada i com os valores (0 <= i <= N-1).
Enquanto N for negativo ou ZERO, um novo N(apenas N) deve ser lido.
Entrada
A entrada contém somente valores inteiros, podendo ser positivos ou negativos.
Todos os valores estão na mesma linha.
Saída
A saída contém apenas um valor inteiro.*/
const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

valores = lines.shift().split(" ")
soma = 0
let positivos = []
let x = 0

for(let i = 0; i < valores.length; i++){
    let v = parseInt(valores[i])
    if(v <= 0){
        continue
    }
    else{       
        positivos[x] = v
        x++        
    }
}

let A = positivos[0]
let N = positivos [1]

for(let j = 0; j <= N-1; j++){
    soma += A+j
}

console.log(soma)