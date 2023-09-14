const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

distanciaTotal = lines.shift();
combustivelTotal = lines.shift();

distanciaTotal = parseInt(distanciaTotal);
combustivelTotal = parseFloat(combustivelTotal);

console.log(`${(distanciaTotal/combustivelTotal).toFixed(3)} km/l`);