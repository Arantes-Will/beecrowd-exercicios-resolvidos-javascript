const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

numero = lines.shift();
horas = lines.shift();
horasRecebe = lines.shift();

numero = parseInt(numero);
horas = parseInt(horas);
horasRecebe = Number(horasRecebe);
salario = horas*horasRecebe;
console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
