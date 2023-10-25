/*Várias Notas Com Validação
Escreva um programa para ler as notas da primeira e a segunda avaliação de um aluno. Calcule e imprima a média semestral. O programa só deverá aceitar notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

No final deve ser impressa a mensagem “novo calculo (1-sim 2-nao)”, solicitando ao usuário que informe um código (1 ou 2) indicando se ele deseja ou não executar o algoritmo novamente, (aceitar apenas os código 1 ou 2). Se for informado o código 1 deve ser repetida a execução de todo o programa para permitir um novo cálculo, caso contrário o programa deve ser encerrado.

Entrada
O arquivo de entrada contém vários valores reais, positivos ou negativos. Quando forem lidas duas notas válidas, deve ser lido um valor inteiro X . O programa deve parar quando o valor lido para este X for igual a 2.

Saída
Se uma nota inválida for lida, deve ser impressa a mensagem “nota invalida”. Quando duas notas válidas forem lidas, deve ser impressa a mensagem “media = ” seguido do valor do cálculo.

Antes da leitura de X deve ser impressa a mensagem "novo calculo (1-sim 2-nao)" e esta mensagem deve ser apresentada novamente se o valor da entrada padrão para X for menor do que 1 ou maior do que 2, conforme o exemplo abaixo.

A média deve ser impressa com dois dígitos após o ponto decimal.*/

let cont = 0;
let soma = 0;
while (cont < 2){
    valor = Number(lines.shift())
    if (valor >= 0 & valor <= 10){
        soma+=valor
        cont ++
    }
    else{
        console.log("nota invalida")
    } 
}

console.log(`media = ${(soma/cont).toFixed(2)}`)

switch (expressao) {
    case 1:
      // Código a ser executado se a expressão for igual a valor1
      break;
    case 2:
      // Código a ser executado se a expressão for igual a valor2
      break;
    // Outros casos
    default:
      // Código a ser executado se a expressão não corresponder a nenhum dos casos
  }