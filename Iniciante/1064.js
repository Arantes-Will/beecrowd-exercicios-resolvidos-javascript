/*Positivos e Média
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram positivos. Na próxima linha, deve-se mostrar a média de todos os valores positivos digitados, com um dígito após o ponto decimal.
Entrada
A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante. Pelo menos um destes números será positivo.
Saída
O primeiro valor de saída é a quantidade de valores positivos. A próxima linha deve mostrar a média dos valores positivos digitados.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let numero1 = lines.shift();
let numero2 = lines.shift();
let numero3 = lines.shift();
let numero4 = lines.shift();
let numero5 = lines.shift();
let numero6 = lines.shift();

numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)
numero3 = parseFloat(numero3)
numero4 = parseFloat(numero4)
numero5 = parseFloat(numero5)
numero6 = parseFloat(numero6)
let numeros = [numero1, numero2, numero3, numero4, numero5, numero6]
let positivos = 0;
let cont = 0

for (let i = 0 ; i < 6 ; i++){
    
    if(numeros[i] > 0){
        cont++
        positivos = positivos + numeros[i]
    }
    
}

console.log(`${cont} valores positivos`)
console.log(`${(positivos/cont).toFixed(1)}`)