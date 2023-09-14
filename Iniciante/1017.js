const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let tempo = lines.shift();
let velocidadeMedia = lines.shift();

tempo = parseInt(tempo);
velocidadeMedia = parseInt(velocidadeMedia);
let distancia = (velocidadeMedia*tempo)/12;
console.log(`${distancia.toFixed(3)}`);

