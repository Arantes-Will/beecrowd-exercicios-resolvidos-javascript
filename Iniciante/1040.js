/*Média
Leia quatro números (N1, N2, N3, N4), cada um deles com uma casa decimal, correspondente às quatro notas de um aluno. Calcule a média com pesos 2, 3, 4 e 1, respectivamente, para cada uma destas notas e mostre esta média acompanhada pela mensagem "Media: ". Se esta média for maior ou igual a 7.0, imprima a mensagem "Aluno aprovado.". Se a média calculada for inferior a 5.0, imprima a mensagem "Aluno reprovado.". Se a média calculada for um valor entre 5.0 e 6.9, inclusive estas, o programa deve imprimir a mensagem "Aluno em exame.".

No caso do aluno estar em exame, leia um valor correspondente à nota do exame obtida pelo aluno. Imprima então a mensagem "Nota do exame: " acompanhada pela nota digitada. Recalcule a média (some a pontuação do exame com a média anteriormente calculada e divida por 2). e imprima a mensagem "Aluno aprovado." (caso a média final seja 5.0 ou mais ) ou "Aluno reprovado.", (caso a média tenha ficado 4.9 ou menos). Para estes dois casos (aprovado ou reprovado após ter pego exame) apresente na última linha uma mensagem "Media final: " seguido da média final para esse aluno.*/

const fileSystem = require('fs')
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let [n1,n2,n3,n4] = lines.shift().split(" ");
let n5 = lines.shift();

n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
n5 = parseFloat(n5);

media = (n1*2+n2*3+n3*4+n4*1)/10;
console.log(`Media: ${media.toFixed(1)}`)

if(media >= 7.0){
    console.log(`Aluno aprovado.`)
}
else if(media < 5.0){
    console.log(`Aluno reprovado.`)
}
else if(media >= 5.0 && media <= 6.9){
    console.log("Aluno em exame.")
    media2 = (n5 + media)/2
    console.log(`Nota do exame: ${n5.toFixed(1)}`)
    console.log(`Aluno aprovado.`)
    console.log(`Media final: ${media2.toFixed(1)}`)
}









