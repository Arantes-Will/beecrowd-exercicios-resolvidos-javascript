/*Médias Ponderadas
Leia 1 valor inteiro N, que representa o número de casos de teste que vem a seguir. Cada caso de teste consiste de 
3 valores reais, cada um deles com uma casa decimal. Apresente a média ponderada para cada um destes 
de 3 valores,
sendo que o primeiro valor tem peso 2, o segundo valor tem peso 3 e o terceiro valor tem peso 5.
Entrada
O arquivo de entrada contém um valor inteiro N na primeira linha. Cada N linha 
a seguir contém um caso de teste com três valores com uma casa decimal cada valor.
Saída
Para cada caso de teste, imprima a média ponderada dos 3 valores, conforme exemplo abaixo.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let N = parseInt(lines.shift())

for(let i = 0 ; i < N; i++){
    let[a,b,c] = lines.shift().split(" ").map(parseFloat)
    let media = ((a*2+b*3+c*5)/10).toFixed(1)
    console.log(media)
}