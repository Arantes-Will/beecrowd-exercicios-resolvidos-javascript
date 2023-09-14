/*Lanche
Com base na tabela abaixo, escreva um programa que leia o código de um item e a quantidade deste item. A seguir, calcule e mostre o valor da conta a pagar.

CODIGO          ESPECIFICAÇÃO           PREÇO
1               Cachorro Quente         R$4.00
2               X-Salada                R$4.50
3               X-Bacon                 R$5.00
4               Torrada Simples         R$2.00
5               Refrigerante            R$1.50

Entrada
O arquivo de entrada contém dois valores inteiros correspondentes ao código e à quantidade de um item conforme tabela acima.

Saída
O arquivo de saída deve conter a mensagem "Total: R$ " seguido pelo valor a ser pago, com 2 casas após o ponto decimal.*/

const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [codigo, quantidade] = lines.shift().split(" ");

codigo = parseInt(codigo);
quantidade = parseInt(quantidade);

if(codigo == 1){
    console.log(`Total: R$ ${(quantidade*4).toFixed(2)}`)
}
else if(codigo == 2){
    console.log(`Total: R$ ${(quantidade*4.5).toFixed(2)}`)
}
else if (codigo == 3){
    console.log(`Total: R$ ${(quantidade*5).toFixed(2)}`)
}
else if(codigo == 4){
    console.log(`Total: R$ ${(quantidade*2).toFixed(2)}`)
}
else if(codigo == 5){
    console.log(`Total: R$ ${(quantidade*1.5).toFixed(2)}`)
}




