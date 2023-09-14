const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

dias = lines.shift();
dias = parseInt(dias);

anos = parseInt(dias/365);
mes = parseInt((dias%365)/30);
diasRestantes = parseInt((dias%365)%30);
console.log(`${anos} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${diasRestantes} dia(s)`);