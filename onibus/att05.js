const data = require('./onibus.json')

function onibusInf (idOnibus){
    return data.onibus[idOnibus]
}
console.log(onibusInf(1))