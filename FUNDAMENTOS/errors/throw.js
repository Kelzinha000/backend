// Bloco de código para tratar instruções async
// try{
//     // instrução de demora para acontecer
// } catch(error){
//   console.log(error)
// }

const b = '10'

if(!Number.isInteger(b)){
    console.log('O valor de B não for um valor inteiro')
    return // com o return ele vai parar a execuçaõ
    throw new Error('O valor de B não for um valor inteiro')
}
console.log('resto dos códigos')