/*Fibonacci Fácil
A seguinte sequência de números 0 1 1 2 3 5 8 13 21... é conhecida como série de Fibonacci.
Nessa sequência, cada número, depois dos 2 primeiros, é igual à soma dos 2 anteriores.
Escreva um algoritmo que leia um inteiro N (N < 46) e mostre os N primeiros números dessa série.
Entrada
O arquivo de entrada contém um valor inteiro N (0 < N < 46).
Saída
Os valores devem ser mostrados na mesma linha, separados por um espaço em branco. 
Não deve haver espaço após o último valor.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let n = Number(lines.shift())

let a = 0, b = 1, c, v = [], fib, cont = 0

if(n == 1){
   console.log("0 1")
}
else{

v[0] = 0
v[1] = 1

for(let i = 2; i < n; i++){
   c = a + b
   a = b
   b = c
   v[i] = b
}
}

console.log(v.join(" "))