const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [codigoPeca1, qtdPeca1, valorPeca1] = lines.shift().split(" ");
let [codigoPeca2, qtdPeca2, valorPeca2] = lines.shift().split(" ");

codigoPeca1 = parseInt(codigoPeca1);
qtdPeca1 = parseInt(qtdPeca1);
valorPeca1 = parseFloat(valorPeca1);
codigoPeca2 = parseInt(codigoPeca2);
qtdPeca2 = parseInt(qtdPeca2);
valorPeca2 = parseFloat(valorPeca2);

console.log(`VALOR A PAGAR: R$ ${(valorPeca1*qtdPeca1 + valorPeca2*qtdPeca2).toFixed(2)}`);





