const data = require('./onibus.json')


function horarios (idLinhas, horario){
    return data.linhas[idLinhas].horarios[horario]
}
console.log(horarios(1))