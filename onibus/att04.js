const data = require('./onibus.json')

function onibus (idOnibus){
    return data.onibus[idOnibus].status
}
console.log(onibus(1))