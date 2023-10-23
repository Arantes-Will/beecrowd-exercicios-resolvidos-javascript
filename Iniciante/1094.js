/*Experiências
Maria acabou de iniciar seu curso de graduação na faculdade de medicina e precisa de sua ajuda para organizar os experimentos de um laboratório o qual ela é responsável. Ela quer saber no final do ano, quantas cobaias foram utilizadas no laboratório e o percentual de cada tipo de cobaia utilizada.
Este laboratório em especial utiliza três tipos de cobaias: sapos, ratos e coelhos. Para obter estas informações, ela sabe exatamente o número de experimentos que foram realizados, o tipo de cobaia utilizada e a quantidade de cobaias utilizadas em cada experimento.
Entrada
A primeira linha de entrada contém um valor inteiro N que indica os vários casos de teste que vem a seguir. Cada caso de teste contém um inteiro Quantia (1 ≤ Quantia ≤ 15) que representa a quantidade de cobaias utilizadas e um caractere Tipo ('C', 'R' ou 'S'), indicando o tipo de cobaia (R:Rato S:Sapo C:Coelho).
Saída
Apresente o total de cobaias utilizadas, o total de cada tipo de cobaia utilizada e o percentual de cada uma em relação ao total de cobaias utilizadas, sendo que o percentual deve ser apresentado com dois dígitos após o ponto.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);



let N = parseInt(lines.shift())
let coelho = 0
let rato = 0
let sapo = 0

console.clear()

for (let i = 0; i < N; i++){
    let a = lines.shift().split(" ")

    if(a[1] == 'C'){
        coelho = coelho + Number(a[0])
    }
    else if (a[1] == 'R'){
        rato = rato + Number(a[0])
    }
    else if (a[1] == 'S'){
        sapo = sapo + Number(a[0])
    }
}

console.log(`Total: ${coelho + sapo + rato} cobaias`)
console.log(`Total de coelhos: ${coelho}`)
console.log(`Total de ratos: ${rato}`)
console.log(`Total de sapos: ${sapo}`)
console.log(`Percentual de coelhos: ${((coelho/(coelho + sapo + rato))*100).toFixed(2)} %`)
console.log(`Percentual de ratos: ${((rato/(coelho + sapo + rato))*100).toFixed(2)} %`)
console.log(`Percentual de sapos: ${((sapo/(coelho + sapo + rato))*100).toFixed(2)} %`)