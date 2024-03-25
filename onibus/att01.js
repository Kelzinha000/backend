const data = require('./onibus.json')


function horarios (idLinhas){
    return data.linhas[idLinhas].horarios
}
console.log(horarios(1))