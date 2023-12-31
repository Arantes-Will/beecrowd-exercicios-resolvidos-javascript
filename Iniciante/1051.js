/*Imposto de Renda
Em um país imaginário denominado Lisarb, todos os habitantes ficam felizes em pagar seus impostos, pois sabem que nele não existem políticos corruptos e os recursos arrecadados são utilizados em benefício da população, sem qualquer desvio. A moeda deste país é o Rombus, cujo símbolo é o R$.
Leia um valor com duas casas decimais, equivalente ao salário de uma pessoa de Lisarb. Em seguida, calcule e mostre o valor que esta pessoa deve pagar de Imposto de Renda, segundo a tabela abaixo.
                                            RENDA                           IMPOSTO DE RENDA
                                            0 a 2000                            Isento
                                            2000.01 até 3000                      8%    
                                            3000.01 até 4500                      18%
                                            acima de 4500                         28%
Lembre que, se o salário for R$ 3002.00, a taxa que incide é de 8% apenas sobre R$ 1000.00, pois a faixa de salário que fica de R$ 0.00 até R$ 2000.00 é isenta de Imposto de Renda. No exemplo fornecido (abaixo), a taxa é de 8% sobre R$ 1000.00 + 18% sobre R$ 2.00, o que resulta em R$ 80.36 no total. O valor deve ser impresso com duas casas decimais.
Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.
Saída
Imprima o texto "R$" seguido de um espaço e do valor total devido de Imposto de Renda, com duas casas após o ponto. Se o valor de entrada for menor ou igual a 2000, deverá ser impressa a mensagem "Isento".*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let salario = lines.shift();
salario = parseFloat(salario);

if (salario > 0 && salario <= 2000.00){
    console.log("Isento")
}
else if(salario > 2000.00 && salario <= 3000.00){
    salario = salario*0.08
    console.log(`R$ ${salario.toFixed(2)}`)
}
else if(salario > 3000.01 && salario <= 4500.00){
    imposto = (salario - 3000)*0.18
    console.log(`R$ ${(80+imposto).toFixed(2)}`)   

}
else if (salario > 4500.00){
   isento = salario - 2000
   imposto2 = (salario - 4500)*0.28
   console.log(`R$ ${(80+imposto2).toFixed(2)}`)
   
}


