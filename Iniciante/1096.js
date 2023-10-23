/*Você deve fazer um programa que apresente a sequencia conforme o exemplo abaixo.
Entrada
Não há nenhuma entrada neste problema.
Saída
Imprima a sequencia conforme exemplo abaixo	
I=1 J=7
I=1 J=6
I=1 J=5
I=3 J=7
I=3 J=6
I=3 J=5
...
I=9 J=7
I=9 J=6
I=9 J=5 */

console.clear()

for(let i = 1; i <=9; i++){

        if(i%2 === 0){
            continue
        }
        else{
            for(let j = 7; j >= 5; j--){
                console.log(`I=${i} J=${j}`)
            }
         }
}
        
    


