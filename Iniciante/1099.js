/*Leia um valor inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste de dois inteiros X e Y. Você deve apresentar a soma de todos os ímpares existentes entre X e Y.
Entrada
A primeira linha de entrada é um inteiro N que é a quantidade de casos de teste que vem a seguir. Cada caso de teste consiste em uma linha contendo dois inteiros X e Y.
Saída
Imprima a soma de todos valores ímpares entre X e Y.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()

let N = parseInt(lines.shift())

function calculo(a,b){
    let aux;
    let calc = 0

    if(a < b){

        for (let i = a+1; i < b; i++){
            if(i%2 != 0){
                calc = calc + i
            }
        }
        return calc
    }
    else{
        aux = b
        b = a
        a = aux

        for (let i = a+1; i < b; i++){
            if(i%2 != 0){
                calc = calc + i
            }
        }  
        return calc
    }
    
}


for(let i = 0; i < N; i++){
    let valores = lines.shift().split(" ")
    console.log(calculo(parseInt(valores[0]),parseInt(valores[1])))    

}