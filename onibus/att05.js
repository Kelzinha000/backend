const data = require('./onibus.json')

// function onibusInf (idOnibus){
//     return data.onibus[idOnibus]
// }
// console.log(onibusInf(1))

const infoOnibus = (idOnibus) =>{
const encontrarOnibus = data.onibus.filter((onibus)=> onibus.id === idOnibus)
return encontrarOnibus != 0 ? {encontrarOnibus}:{mesage:'Não existe esse onibus na base de dados'}
}
const onibusID = 'A100'
const onibusInfo = infoOnibus(onibusID)
console.log(onibusInfo)
