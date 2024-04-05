// Sincrona - statica

const fs = require('fs') // versão node mais atualizado se usa ('node:fs')

console.log('Start')

fs.writeFileSync('arquivo1.txt','Olá')

console.log('End')