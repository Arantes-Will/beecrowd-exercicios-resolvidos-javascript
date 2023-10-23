/*Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada
Não há nenhuma entrada neste problema.
Saída
Imprima a sequencia conforme exemplo abaixo		
	
I=0 J=1
I=0 J=2
I=0 J=3
I=0.2 J=1.2
I=0.2 J=2.2
I=0.2 J=3.2
.....
I=2 J=?
I=2 J=?
I=2 J=? */

console.clear()

let i = 0

for(let i = 0; i <= 20; i+=2){
    let frac = i/10.0
    for(let j = 1; j <=3; j++){
        console.log(`I=${frac} J=${j+frac}`)
    }
}
