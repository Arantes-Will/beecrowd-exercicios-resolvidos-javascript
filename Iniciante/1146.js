/*Sequências Crescentes
Este programa deve ler uma variável inteira X inúmeras vezes (deve parar quando o valor no arquivo de
entrada for igual a zero). Para cada valor lido imprima a sequência de 1 até X, com um espaço entre
cada número e seu sucessor.

Obs: cuide para não deixar espaço em branco após o último valor apresentado na linha ou você 
receberá Presentation Error.
Entrada
O arquivo de entrada contém vários números inteiros. O último número no arquivo de entrada é 0.
Saída
Para cada número N do arquivo de entrada deve ser impressa uma linha de 1 até N,
conforme o exemplo abaixo. Não deve haver espaço em branco após o último valor da linha.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

let X = parseInt(lines.shift()) 

while(X !== 0){
  
    for(let i = 1; i <= X; i++){
        process.stdout.write(i.toString())
        if(i%X === 0){
        process.stdout.write("\n");
        }
        else{
        process.stdout.write(" ");
    }
    } 
    
    X = parseInt(lines.shift())
}