const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

valor = lines.shift();
valor = parseFloat(valor);

if (valor > 0 && valor < 1000000){
        cem = parseInt(valor/100); //5 * 100
        restoCem = valor%100;
        cinquenta = parseInt(restoCem/50);
        restoCinquenta = restoCem%50;
        vinte = parseInt(restoCinquenta/20);
        restoVinte = restoCinquenta%20;
        dez = parseInt(restoVinte/10);
        restoDez = restoVinte%10;
        cinco = parseInt(restoDez/5);
        restoCinco = restoDez%5;
        dois = parseInt(restoCinco/2);
        restoDois = restoCinco%2;
        um = parseInt(restoDois/1);
        restoUm = restoDois - um;
        centavos50 = parseInt(restoUm/0.5);
        restoCentavos50 = restoUm%0.5;
        centavos25 = parseInt(restoCentavos50/0.25);
        restoCentavos25 = restoCentavos50%0.25;
        centavos10 = parseInt(restoCentavos25/0.10);
        restoCentavos10 = restoCentavos25%0.1;
        centavos5 = parseInt(restoCentavos10/0.05);
        restoCentavos5 = restoCentavos10%0.05;
        centavos1 = parseInt(restoCentavos5/0.01);    
}

console.log("NOTAS:");
console.log(`${cem} nota(s) de R$ 100.00`);
console.log(`${cinquenta} nota(s) de R$ 50.00`);
console.log(`${vinte} nota(s) de R$ 20.00`);
console.log(`${dez} nota(s) de R$ 10.00`);
console.log(`${cinco} nota(s) de R$ 5.00`);
console.log(`${dois} nota(s) de R$ 2.00`);
console.log("MOEDAS:");
console.log(`${um} moeda(s) de R$ 1.00`);
console.log(`${centavos50} moeda(s) de R$ 0.50`);
console.log(`${centavos25} moeda(s) de R$ 0.25`);
console.log(`${centavos10} moeda(s) de R$ 0.10`);
console.log(`${centavos5} moeda(s) de R$ 0.05`);
console.log(`${centavos1} moeda(s) de R$ 0.01`);