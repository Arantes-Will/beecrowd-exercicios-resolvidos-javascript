const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [a, b, c] = lines.shift().split(" ");

a = Number(a);
b = Number(b);
c = Number(c);

delta = b*b - 4*a*c;


if (delta < 0 || a == 0 ){
    console.log("Impossivel calcular");
}
else{

r1 = (-b + Math.sqrt(delta))/(2*a);
r2 = (-b - Math.sqrt(delta))/(2*a);

console.log(`R1 = ${r1.toFixed(5)}`);
console.log(`R2 = ${r2.toFixed(5)}`);

}