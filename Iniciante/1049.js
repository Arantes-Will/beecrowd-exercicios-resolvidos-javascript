/*Animal
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.*/

const fileSystem = require('fs');
const endereco = require('path');
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');
const quebraLinhaWindows = '\r\n'
let lines = conteudoArquivo.split(quebraLinhaWindows);

let palavra1 = lines.shift();
let palavra2 = lines.shift();
let palavra3 = lines.shift();
let palavras = palavra1+palavra2+palavra3

if (palavras == "vertebradoavecarnivoro"){
    console.log("aguia")
}
else if (palavras == "vertebradoaveonivoro"){
    console.log("pomba")
}
else if(palavras == "vertebradomamiferoonivoro"){
    console.log("homem")
}
else if (palavras == "vertebradomamiferoherbivoro"){
    console.log("vaca")
}
else if (palavras == "invertebradoinsetohematofago"){
    console.log("pulga")
}
else if(palavras == "invertebradoinsetoherbivoro"){
    console.log("lagarta")
}
else if(palavras == "invertebradoanelideohematofago"){
    console.log("sanguessuga")
}
else if(palavras == "invertebradoanelideoonivoro"){
    console.log("minhoca")
}
