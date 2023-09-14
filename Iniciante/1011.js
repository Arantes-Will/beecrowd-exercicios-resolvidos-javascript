const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

raio = lines.shift();

raio = Number(raio);
const PI = 3.14159
esfera = (4/3.0)*PI*raio*raio*raio;
console.log(`VOLUME = ${esfera.toFixed(3)}`);