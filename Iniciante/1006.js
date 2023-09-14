const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

a = lines.shift();
b = lines.shift();
c = lines.shift();

a = Number(a);
b = Number(b);
c = Number(c);
media = (a*2+b*3+c*5)/10;
console.log(`MEDIA = ${media.toFixed(1)}`);
