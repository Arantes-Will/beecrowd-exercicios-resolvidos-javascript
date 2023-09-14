/*Tempo de um evento
Pedrinho está organizando um evento em sua Universidade. O evento deverá ser no mês de Abril, iniciando e terminando dentro do mês. O problema é que Pedrinho quer calcular o tempo que o evento vai durar, uma vez que ele sabe quando inicia e quando termina o evento.
Sabendo que o evento pode durar de poucos segundos a vários dias, você deverá ajudar Pedrinho a calcular a duração deste evento.
Entrada
Como entrada, na primeira linha vai haver a descrição “Dia”, seguido de um espaço e o dia do mês no qual o evento vai começar. Na linha seguinte, será informado o momento no qual o evento vai iniciar, no formato hh : mm : ss. Na terceira e quarta linha de entrada haverá outra informação no mesmo formato das duas primeiras linhas, indicando o término do evento.
Saída
Na saída, deve ser apresentada a duração do evento, no seguinte formato:
W dia(s)
X hora(s)
Y minuto(s)
Z segundo(s)
Obs: Considere que o evento do caso de teste para o problema tem duração mínima de 1 minuto.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let inicioEvento = lines.shift()
let horaInicial = lines.shift()
let terminoEvento = lines.shift()
let horaFinal = lines.shift()

inicioEvento = String(inicioEvento)
horaInicial = String(horaInicial)
terminoEvento = String(terminoEvento)
horaFinal = String(horaFinal)
let resultadoSegundos
let dia,hora,minuto,segundo;


inicioEvento = parseInt(inicioEvento[4]+inicioEvento[5])

let Ihora1 = parseInt(horaInicial[0]+horaInicial[1])
let Ihora2 = parseInt(horaInicial[5]+horaInicial[6])
let Ihora3 = parseInt(horaInicial[10]+horaInicial[11])

terminoEvento = parseInt(terminoEvento[4]+terminoEvento[5])

let Fhora1 = parseInt(horaFinal[0]+horaFinal[1])
let Fhora2 = parseInt(horaFinal[5]+horaFinal[6])
let Fhora3 = parseInt(horaFinal[10]+horaFinal[11])


function segundosConvert(dia,hora1,hora2,hora3){
    let totalSegundos
    
    dia = dia*86400
    hora1 = hora1*3600
    hora2 = hora2*60
    totalSegundos = dia+hora1+hora2+hora3
    return totalSegundos 
}

resultadoSegundos = segundosConvert(terminoEvento,Fhora1,Fhora2,Fhora3) - segundosConvert(inicioEvento,Ihora1,Ihora2,Ihora3)

dia = parseInt(Math.abs(resultadoSegundos/86400))
hora = parseInt(Math.abs((resultadoSegundos%86400)/3600))
minuto = parseInt(Math.abs(((resultadoSegundos%86400)%3600/60)))
segundo = parseInt(Math.abs(((resultadoSegundos%86400)%3600%60)))

console.log(`${dia} dia(s)`)
console.log(`${hora} hora(s)`)
console.log(`${minuto} minuto(s)`)
console.log(`${segundo} segundo(s)`)








