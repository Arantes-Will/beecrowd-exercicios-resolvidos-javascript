/*Idades
Faça um algoritmo para ler um número indeterminado de dados, contendo cada um, a idade de um indivíduo.
O último dado, que não entrará nos cálculos, contém o valor de idade negativa.
Calcular e imprimir a idade média deste grupo de indivíduos.
Entrada
A entrada contém um número indeterminado de inteiros. 
A entrada será encerrada quando um valor negativo for lido.
Saída
A saída contém um valor correspondente à média de idade dos indivíduos.
A média deve ser impressa com dois dígitos após o ponto decimal.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let soma = 0,cont = 0

function media(valor,qtd){
    return (valor/qtd).toFixed(2)
}

while(Number(lines.shift() > 0)){
    soma += Number(lines.shift())
    cont++
}
console.log(soma)
console.log(cont)
media(soma,cont)