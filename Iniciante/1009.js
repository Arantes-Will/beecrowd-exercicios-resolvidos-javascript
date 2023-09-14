const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

nome = lines.shift();
salarioFixo = lines.shift();
totalVendas = lines.shift();

nome = (nome);
salarioFixo = Number(salarioFixo);
totalVendas = Number(totalVendas);
salarioFinal =  totalVendas*0.15+salarioFixo;
console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);
