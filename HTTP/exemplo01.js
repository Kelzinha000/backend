// const {create} = require('node:domain')
const http = require('node:http')
const PORT = 3333 || 4444

const server = http.createServer((resquest, response)=>{
       response.writeHead(200, {'content-Type':'text/plan'})
       response.write('Olá, Mundo!')
       response.end()
})
server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})