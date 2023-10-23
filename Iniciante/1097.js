/*Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada
Não há nenhuma entrada neste problema.
Saída
Imprima a sequencia conforme exemplo abaixo		
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=9
I=3 J=8
I=3 J=7
...
I=9 J=15
I=9 J=14
I=9 J=13 */

console.clear()

let i = 1

for(let j = 7; j <=15; j+=2){
   for(let k = j; k >= j-2; k--)
    console.log(`I=${i} J=${k}`)
    i+=2
}
