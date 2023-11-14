/*Tipo de Combustível
Um Posto de combustíveis deseja determinar qual de seus produtos tem a preferência de seus clientes.
Escreva um algoritmo para ler o tipo de combustível abastecido
(codificado da seguinte forma: 1.Álcool 2.Gasolina 3.Diesel 4.Fim). Caso o usuário informe um código
inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código (até que seja válido).
O programa será encerrado quando o código informado for o número 4.
Entrada
A entrada contém apenas valores inteiros e positivos.
Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que abasteceram cada tipo
de combustível, conforme exemplo.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()
let opcao = null;
let alcool = 0
let gasolina = 0
let diesel = 0


while(opcao !== 4){
    
    opcao = parseInt(lines.shift())
    
    if(opcao > 0 & opcao === 1){
        alcool++
    }
    else if (opcao > 0 & opcao === 2)
    {
        gasolina++
    }
    else if(opcao > 0 & opcao === 3){
        diesel++
    }
    else if(opcao > 0 & opcao === 4){
        continue
    }
    else{
        opcao = 0
    }    
}

console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)
