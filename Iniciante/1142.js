/*PUM
Escreva um programa que leia um valor inteiro N. 
Este N é a quantidade de linhas de saída que serão apresentadas na execução do programa.
Entrada
O arquivo de entrada contém um número inteiro positivo N.
Saída
Imprima a saída conforme o exemplo fornecido.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()

N = parseInt(lines.shift())
k = []
let j;

    
    for(j = 1; j < N*4; j+=4){
        k[j] =  j   
        console.log(`${k[j]} ${k[j]+1} ${k[j]+2} PUM`)
    }
    
        
