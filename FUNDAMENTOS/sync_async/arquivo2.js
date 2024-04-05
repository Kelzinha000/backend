
const fs = require('fs') // versão node mais atualizado se usa ('node:fs')

console.log('Start')

fs.writeFile('arquivo2.txt','Olá', ()=>{
    setTimeout(()=>{
        console.log('Arquivo Criado')
    },3000)
})

console.log('End')