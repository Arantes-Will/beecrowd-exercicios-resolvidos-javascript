/*Tipos de Triângulos
Leia 3 valores de ponto flutuante A, B e C e ordene-os em ordem decrescente, de modo que o lado A representa o maior dos 3 lados. A seguir, determine o tipo de triângulo que estes três lados formam, com base nos seguintes casos, sempre escrevendo uma mensagem adequada:
se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO
se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
Entrada
A entrada contem três valores de ponto flutuante de dupla precisão A (0 < A) , B (0 < B) e C (0 < C).
Saída
Imprima todas as classificações do triângulo especificado na entrada.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [a,b,c] = lines.shift().split(" ");
a = Number(a)
b = Number(b)
c = Number(c)
let aux;

maior = a;

if(b > maior){
    maior = b
    aux = a
    b = aux
}

if (c > maior){
    aux = maior
    maior = c
    c = aux
}

if (maior != a){
    a = maior
}

a2 = Math.pow(a,2)
b2 = Math.pow(b,2)
c2 = Math.pow(c,2)

if (a >= (b+c)){
    console.log("NAO FORMA TRIANGULO")
}
else if(a2 == b2+c2){
    console.log("TRIANGULO RETANGULO")
}
else if(a2 > b2+c2){
    console.log("TRIANGULO OBTUSANGULO")
}
else if(a2 < b2+c2){
    console.log("TRIANGULO ACUTANGULO")
}

if(a == b && a == c && b == c){
    console.log("TRIANGULO EQUILATERO")
}
else if(a == b || a == c || b == c){
    console.log("TRIANGULO ISOSCELES")
}

