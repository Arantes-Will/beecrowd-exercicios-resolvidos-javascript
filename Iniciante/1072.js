/*Intervalo 2
Leia um valor inteiro N. Este valor será a quantidade de valores inteiros X que serão lidos em seguida.
Mostre quantos destes valores X estão dentro do intervalo [10,20] e quantos estão fora do intervalo, mostrando essas informações.
Entrada
A primeira linha da entrada contém um valor inteiro N (N < 10000), que indica o número de casos de teste.
Cada caso de teste a seguir é um valor inteiro X (-107 < X < 107). */

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let N = lines.shift()
let inn = 0
let out = 0
let V = lines


for(let i = 0; i < N; i++){
    
    if(V[i] >= 10 && V[i] <= 20){
        inn++
    }
    else{
        out++
    }
}

console.log (`${inn} in`)
console.log (`${out} out`)





