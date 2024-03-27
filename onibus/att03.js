const data = require('./onibus.json')

// function paradas (idLinhas){
//     return data.linhas[idLinhas].paradas
// }
// console.log(paradas(0))

const listarParadasPorLinhas = (idLinha) => {
    const linha = data.linhas.find((linha)=> linha.id === idLinha)
    console.log(linha)
    if(linha){
        const paradasOrdenadas = linha.paradas.sort((a,b)=> a.oredem - b.ordem)
        return {paradasOrdenadas}
    }else{
      return {message: 'Paradas não encontradas para linha solicitada'}
    }
}

const id = 1
const paradasPorLinha = listarParadasPorLinhas(id)
console.log(paradasPorLinha)