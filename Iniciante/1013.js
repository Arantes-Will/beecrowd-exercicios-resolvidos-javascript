const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [a, b, c] = lines.shift().split(" ");
a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
maiorab = (a + b + Math.abs(a-b))/2;
maiorabc = (maiorab+c+Math.abs(maiorab-c))/2;
console.log(`${maiorabc} eh o maior`);
