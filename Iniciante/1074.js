/*Par ou Impar
Leia um valor inteiro N. Este valor será a quantidade de valores que serão lidos em seguida. Para cada valor lido, mostre uma mensagem em inglês dizendo se este valor lido é par (EVEN), ímpar (ODD), positivo (POSITIVE) ou negativo (NEGATIVE). No caso do valor ser igual a zero (0), embora a descrição correta seja (EVEN NULL), pois por definição zero é par, seu programa deverá imprimir apenas NULL.
Entrada
A primeira linha da entrada contém um valor inteiro N(N < 10000) que indica o número de casos de teste. Cada caso de teste a seguir é um valor inteiro X (-107 < X <107).
Saída
Para cada caso, imprima uma mensagem correspondente, de acordo com o exemplo abaixo. Todas as letras deverão ser maiúsculas e sempre deverá haver um espaço entre duas palavras impressas na mesma linha.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let N = lines.shift();
let n2 = lines.shift();
let n3 = lines.shift();
let n4 = lines.shift();
let n5 = lines.shift();

N = parseInt(N)
n2 = parseInt(n2)
n3 = parseInt(n3)
n4 = parseInt(n4)
n5 = parseInt(n5)
let numeros = [n2, n3, n4, n5]

for(let i = 0; i < N; i++){
    
    
        if (numeros[i] === 0){
            console.log("NULL")
        }
        else if (numeros[i] < 0 && numeros[i]%2 === 0){
            console.log("EVEN NEGATIVE")
        }
        else if (numeros[i] > 0 && numeros[i]%2 === 0){
            console.log("EVEN POSITIVE")
        }
        else if (numeros[i] < 0 && numeros[i]%2 !== 0){
            console.log("ODD NEGATIVE")
        }
        else if (numeros[i] > 0 && numeros[i]%2 !==0){
            console.log("ODD POSITIVE")
        }       
}

