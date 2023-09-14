/*Aumento de Salário
A empresa ABC resolveu conceder um aumento de salários a seus funcionários de acordo com a tabela abaixo:

    Salário	                        Percentual de Reajuste
    0 - 400.00                               15%
    400.01 - 800.00                          12%
    800.01 - 1200.00                         10%
    1200.01 - 2000.00                        7%
    Acima de 2000.00                         4%

Leia o salário do funcionário e calcule e mostre o novo salário, bem como o valor de reajuste ganho e o índice reajustado, em percentual.

Entrada
A entrada contém apenas um valor de ponto flutuante, com duas casas decimais.

Saída
Imprima 3 linhas na saída: o novo salário, o valor ganho de reajuste (ambos devem ser apresentados com 2 casas decimais) e o percentual de reajuste ganho, conforme exemplo abaixo.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let salario = lines.shift();
salario = parseFloat(salario)
let novo_salario;


if(salario >= 0 && salario <= 400){
    novo_salario = salario*1.15
    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(novo_salario-salario).toFixed(2)}`)
    console.log(`Em percentual: 15 %`)

}else if (salario >= 400.01 && salario <= 800.00){
    novo_salario = salario*1.12
    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(novo_salario-salario).toFixed(2)}`)
    console.log(`Em percentual: 12 %`)
}
else if (salario >= 800.01 && salario <= 1200.00){
    novo_salario = salario*1.10
    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(novo_salario-salario).toFixed(2)}`)
    console.log(`Em percentual: 10 %`)
}
else if (salario >= 1200.01 && salario <= 2000.00){
    novo_salario = salario*1.07
    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(novo_salario-salario).toFixed(2)}`)
    console.log(`Em percentual: 7 %`)
}
else if (salario >= 2000.01){
    novo_salario = salario*1.04
    console.log(`Novo salario: ${novo_salario.toFixed(2)}`)
    console.log(`Reajuste ganho: ${(novo_salario-salario).toFixed(2)}`)
    console.log(`Em percentual: 4 %`)
}




