const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let valor = lines.shift();
valor = parseInt(valor);

if (valor > 0 && valor < 1000000){
    cem = parseInt(valor/100);
    cinquenta = parseInt((valor%100)/50);
    vinte = parseInt(((valor%100)%50)/20);
    dez = parseInt((((valor%100)%50)%20)/10);
    cinco = parseInt(((((valor%100)%50)%20)%10)/5);
    dois = parseInt((((((valor%100)%50)%20)%10)%5)/2);
    um = parseInt((((((valor%100)%50)%20)%10)%5)%2);
}

console.log(`${valor}`);
console.log(`${cem} nota(s) de R$ 100,00`);
console.log(`${cinquenta} nota(s) de R$ 50,00`);
console.log(`${vinte} nota(s) de R$ 20,00`);
console.log(`${dez} nota(s) de R$ 10,00`);
console.log(`${cinco} nota(s) de R$ 5,00`);
console.log(`${dois} nota(s) de R$ 2,00`);
console.log(`${um} nota(s) de R$ 1,00`);


