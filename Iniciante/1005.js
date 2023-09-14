const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
//para ler linhas com mais de um valor na mesma linha use o comando a seguir
//let [var1, var2, var3, var4] = lines.shift().split(" "); 
//para ler linhas com um unico valor na mesma linha use o comando a seguir
let nota1 = lines.shift();
let nota2 = lines.shift();

nota1 = Number(nota1);
nota2 = Number(nota2);
media = (nota1*3.5 + nota2*7.5)/11;

console.log(`MEDIA = ${media.toFixed(5)}\n`);
