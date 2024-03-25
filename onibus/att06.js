const data = require('./onibus.json')

function onibusInf (idOnibus){
    return data.onibus[idOnibus].motorista
}
console.log(onibusInf(0))