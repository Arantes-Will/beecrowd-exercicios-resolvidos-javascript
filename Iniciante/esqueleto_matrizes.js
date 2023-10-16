//importo o modulo fs (filesystem) para trabalhar com arquivos e diretorios
const fileSystem = require('fs')

//importo o modulo path para trabalhar com o endereço de arquivos e diretorios
const endereco = require('path');

//descubro o endereço de onde meu script js esta salvo
//ex: c:\documentos\javascript
const enderecoDesteScriptJS = endereco.dirname(process.argv[1]);

//realiza a leitura das linhas no arquivo dev\stdin que foi criado
const conteudoArquivo = fileSystem.readFileSync(enderecoDesteScriptJS + '\\dev\\stdin', 'utf8');

//define qual é a quebra de linha utilizada no seu sistema operacional
//se você estiver utilizando linux coloque \n se for windows coloque \r\n
const quebraLinhaWindows = '\r\n'

let lines = conteudoArquivo.split(quebraLinhaWindows);

///////////////////////COLAR NO BEECROWD O CODIGO DESTE PONTO EM DIANTE///////////////////
console.clear()

let produtos = []
let qtdEstoque = []
let valorUnitario = []
for(let i = 0; i < lines.length; i++){
    let novoVetor = lines[i].split(" ")
    produtos[i] = novoVetor[0]
    qtdEstoque[i] = novoVetor[1]
    valorUnitario[i] = novoVetor[2]
}

console.log(produtos)
console.log(qtdEstoque)
console.log(valorUnitario)

/* for(let i = 0; i < lines.length; i++){
    let novoVetor = lines[i].split(" ")
    dados[i] = novoVetor
}

console.log(dados)
*/

