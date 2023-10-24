/*Senha fixa
Escreva um programa que repita a leitura de uma senha até que ela seja válida. Para cada leitura de senha incorreta informada, escrever a mensagem "Senha Invalida". Quando a senha for informada corretamente deve ser impressa a mensagem "Acesso Permitido" e o algoritmo encerrado. Considere que a senha correta é o valor 2002. 
Entrada
A entrada é composta por vários casos de testes contendo valores inteiros.
Saída
Para cada valor lido mostre a mensagem correspondente à descrição do problema.*/
const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
console.clear()

while(1){
    
    valor = parseInt(lines.shift())
      
    if(valor === 2002){
        console.log("Acesso Permitido")
        break
    }
    else{
        console.log("Senha Invalida")
    }      
}