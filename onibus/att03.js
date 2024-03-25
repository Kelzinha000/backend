const data = require('./onibus.json')

function paradas (idLinhas){
    return data.linhas[idLinhas].paradas
}
console.log(paradas(0))