const data = require('./onibus.json')

// function onibus (idOnibus){
//     return data.onibus[idOnibus].status
// }
// console.log(onibus(1))

const onibusPorStatus = (status) =>{
    const onibus = data.onibus.filter((onibus)=> onibus.status)
    return onibus.length != 0 ? {onibus}:{message: 'Onibus não encontrado'}
}

const statusOnibus = 'em operação'
const situcaoOnibus = onibusPorStatus(statusOnibus)