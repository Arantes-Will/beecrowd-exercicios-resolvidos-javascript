/*DDD
Leia um número inteiro que representa um código de DDD para discagem interurbana. Em seguida, informe à qual cidade o DDD pertence, considerando a tabela abaixo:
                                                            DDD          Destination
                                                            61             Brasilia
                                                            71             Salvador
                                                            11             São Paulo
                                                            21             Rio de Janeiro
                                                            32             Juiz de Fora
                                                            19             Campinas
                                                            27             Vitoria
                                                            31             Belo Horizonte
Se a entrada for qualquer outro DDD que não esteja presente na tabela acima, o programa deverá informar:
DDD nao cadastrado
Entrada
A entrada consiste de um único valor inteiro.
Saída
Imprima o nome da cidade correspondente ao DDD existente na entrada. Imprima DDD nao cadastrado caso não existir DDD correspondente ao número digitado.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);
let ddd = lines.shift();
ddd = parseInt(ddd);

switch(ddd){
    case 61:
        console.log("Brasilia")
        break;
    case 71:
        console.log("Salvador")
        break;
    case 11:
        console.log("Sao Paulo")
        break;
    case 21:
        console.log("Rio de Janeiro")
        break;
    case 32:
        console.log("Juiz de Fora")
        break;
    case 19:
        console.log("Campinas")
        break;
    case 27:
        console.log("Vitoria")
        break;
    case 31:
        console.log("Belo Horizonte")
        break;
    default:
        console.log("DDD nao cadastrado")
}
