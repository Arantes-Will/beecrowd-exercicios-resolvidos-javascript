/*Grenais
A Federação Gaúcha de Futebol contratou você para escrever um programa para fazer uma estatística
do resultado de vários GRENAIS.
Escreva um programa para ler o número de gols marcados pelo Inter e pelo Grêmio em um GRENAL.
Logo após escrever a mensagem "Novo grenal (1-sim 2-nao)" e solicitar uma resposta.
Se a resposta for 1, o algoritmo deve ser executado novamente solicitando o número de gols 
marcados pelos times em uma nova partida, caso contrário deve ser encerrado imprimindo:

- Quantos GRENAIS fizeram parte da estatística.
- O número de vitórias do Inter.
- O número de vitórias do Grêmio.
- O número de Empates.
- Uma mensagem indicando qual o time que venceu o maior número de GRENAIS (ou "Nao houve vencedor", caso termine empatado).
Entrada
O arquivo de entrada contém 2 valores inteiros, correspondentes aos gols marcados pelo Inter e pelo Grêmio respectivamente. Em seguida háverá um inteiro (1 ou 2), correspondente à repetição do programa.
Saída
Após cada leitura dos gols, deve ser impressa a mensagem "Novo grenal (1-sim 2-nao)". Quando o algoritmo for encerrado devem ser mostradas as estatísticas conforme a descrição apresentada acima. Obs: a palavra "Gremio" deve ser impressa sem acento, conforme o exemplo abaixo.*/

const { addAbortListener } = require('events');
const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

console.clear()
let gols;
let inter;
let gremio;
let x = null;
let i= 0;
let g = 0;
let total = 0;
let empate = 0

while(x !== 2){

    gols = lines.shift().split(" ")    
                
    if(gols.length === 2){  
       
        inter = Number(gols[0])
        gremio = Number(gols[1])

        if(inter === gremio){
            empate++
        }
        else if (gremio > inter){
            g++
            total++
        }
        else if(inter > gremio){
            i++
            total++
        } 
    } 

    console.log(`Novo grenal (1-sim 2-nao)`)
    gols = lines.shift()

    if(Number(gols) === 1){
        x = 1
    }
    else{
        x = 2
    }
    
}

console.log(`${total} grenais`)
console.log(`Inter:${i}`)
console.log(`Gremio:${g}`)
console.log(`Empates:${empate}`)
if(i > g){
    console.log(`Inter venceu mais`)
}
else if(g > i){
    console.log(`Gremio venceu mais`)
}
else{
    console.log(`Nao houve vencedor`)
}
    

