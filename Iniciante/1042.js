/*Sort Simples
Leia 3 valores inteiros e ordene-os em ordem crescente. No final, mostre os valores em ordem crescente, uma linha em branco e em seguida, os valores na sequência como foram lidos.
Entrada
A entrada contem três números inteiros.
Saída
Imprima a saída conforme foi especificado.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [n1,n2,n3] = lines.shift().split(" ");
n1 = parseInt(n1)
n2 = parseInt(n2)
n3 = parseInt(n3)
let maior, menor, inter;

if(n1 >= n2 && n1 >= n3){
    maior = n1
    if(n2 >= n3){
        inter = n2
        menor = n3
    }
    else{
        inter = n3
        menor = n2
    }
}

else if(n2 >= n1 && n2 >= n3){
    maior = n2
    if(n1 >= n3){
        inter = n1
        menor = n3
    }
    else{
        inter = n3
        menor = n1
    }
}

else if(n3 >= n1 && n3 >= n2){
    maior = n3
    if(n2 >= n1){
        inter = n2
        menor = n1
    }
    else{
        inter = n1
        menor = n2
    }
}


console.log(menor)
console.log(inter)
console.log(maior)
console.log("")
console.log(n1)
console.log(n2)
console.log(n3)





