
const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})

readline.question('Digite seu nome ', (nome)=>{
    console.log(`O nome bisonho é: ${nome}`)
    readline.close()
})