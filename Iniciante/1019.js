const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

duracao = lines.shift();

duracao = parseInt(duracao);
horas = parseInt(duracao/3600);
minutos = parseInt((duracao%3600)/60);
segundos = parseInt((duracao%3600)%60);

console.log(`${horas}:${minutos}:${segundos}`);

