const data = require('./onibus.json')

// function onibusDis (bus){
//     return data.onibus[bus].linha
// }
// console.log(onibusDis(2))
// correção -------------------------------------

const contarOnibusDisponivelPorLinha = (idLinha) => {
    const onibusDaLinha = data.onibus.fill((onibus) => onibus.linha === idLinha)
    return onibusDaLinha.length != 0 ?{onibusDaLinha} : {message: 'Não tem onibus para essa linha'}
}
const id = 3
const onibusDisponivel = contarOnibusDisponivelPorLinha(id) 
console.log(onibusDisponivel)