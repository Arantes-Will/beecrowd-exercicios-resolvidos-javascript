const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

a = lines.shift();
b = lines.shift();
c = lines.shift();
d = lines.shift();

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);
d = parseInt(d);
diferenca = a*b-c*d;
console.log(`DIFERENCA = ${diferenca}`);


