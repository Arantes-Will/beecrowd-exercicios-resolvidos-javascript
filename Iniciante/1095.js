/*Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada
Não há nenhuma entrada neste problema.
Saída
Imprima a sequencia conforme exemplo abaixo	
I=1 J=60
I=4 J=55
I=7 J=50
...
I=? J=0 */

console.clear()

let i = 1

for (let j = 60; j >= 0; j = j-5){
    console.log(`I=${i} J=${j}`)
    i = i + 3
}
