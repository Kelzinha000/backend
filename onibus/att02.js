const data = require('./onibus.json')


function onibusDis (bus){
    return data.onibus[bus].linha
}
console.log(onibusDis(2))