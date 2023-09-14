/*Tempo de jogo com minutos
Leia a hora inicial, minuto inicial, hora final e minuto final de um jogo. A seguir calcule a duração do jogo.
Obs: O jogo tem duração mínima de um (1) minuto e duração máxima de 24 horas.
Entrada
Quatro números inteiros representando a hora de início e fim do jogo.
Saída
Mostre a seguinte mensagem: “O JOGO DUROU XXX HORA(S) E YYY MINUTO(S)” .*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [hI,mI,hF,mF] = lines.shift().split(" ");
hI = parseInt(hI);
mI = parseInt(mI);
hF = parseInt(hF);
mF = parseInt(mF);
let horas
let minutos

if (hI < hF){
    horas = hF-hI
}
else{
    horas = 24-hI+hF
}

if(mF >= mI){
    minutos = mF-mI
}
else{
    minutos = 60-(mI-mF)
    horas = horas - 1
}

if(horas == 24 && minutos > 0){
    horas = 0
}

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`)