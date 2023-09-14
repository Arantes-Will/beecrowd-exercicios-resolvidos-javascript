/*Coordenadas de um ponto
Leia 2 valores com uma casa decimal (x e y), que devem representar as coordenadas de um ponto em um plano. A seguir, determine qual o quadrante ao qual pertence o ponto, ou se está sobre um dos eixos cartesianos ou na origem (x = y = 0).
    y
Q2  |   Q1      x
Q3  |   Q4
Se o ponto estiver na origem, escreva a mensagem “Origem”.
Se o ponto estiver sobre um dos eixos escreva “Eixo X” ou “Eixo Y”, conforme for a situação.*/

const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [x, y] = lines.shift().split(" ");
x = parseFloat(x)
y = parseFloat(y)

if(x === 0 && y === 0){
    console.log(`Origem`)
}
else if((x === 0 && y < 0) || (x == 0 && y > 0)){
    console.log("Eixo X")
}
else if((y === 0 && x < 0) || (y === 0 && x > 0)){
    console.log("Eixo Y")
}
else if(y > 0 && x < 0){
    console.log("Q2")
}
else if(y > 0 && x > 0){
    console.log("Q1")
}
else if(y < 0 && x < 0){
    console.log("Q3")
}
else{
    console.log("Q4")
}