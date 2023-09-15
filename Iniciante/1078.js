/*Tabuada
Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N
Entrada
A entrada contém um valor inteiro N (2 < N < 1000).
Saída
Imprima a tabuada de N, conforme o exemplo fornecido.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let n = lines.shift();
n = parseInt(n)

if(2 < n && n < 1000){
    for(i = 1; i <= 10; i++){
    
        console.log(`${i} x ${n} = ${i*n}`)
        
    }
}

