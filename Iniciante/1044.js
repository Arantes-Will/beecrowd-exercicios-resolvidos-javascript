/*Multiplos
Leia 2 valores inteiros (A e B). Após, o programa deve mostrar uma mensagem "Sao Multiplos" ou "Nao sao Multiplos", indicando se os valores lidos são múltiplos entre si.
Entrada
A entrada contém valores inteiros.
Saída
A saída deve conter uma das mensagens conforme descrito acima.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [a,b] = lines.shift().split(" ");
a = parseInt(a)
b = parseInt(b)
let maior;

    if (a < b){
        maior = b
        b = a
        a = maior
    }

if(a%b == 0){
    console.log("Sao Multiplos")
}
else{
    console.log("Nao sao Multiplos")
}


    
    
