const http = require('node:http')
// const url = require('node:url') n usou
const PORT = 3333

//request -> url  vai analisar url
const server = http.createServer((request, response)=>{
     if(request.url === '/'){
        response.writeHead(200, {'Content-Type': 'Text/plan'})
        response.end('Página Inicial')
    }else if(request.url === '/sobre'){
        response.writeHead(200, {'Content-Type': 'Text/plan'})
        response.end('Página Sobre')
    }else{
        response.writeHead(404, {'Content-Type': 'Text/plan'})
        response.end('Página Não encontrada')
    }
})

server.listen(PORT, ()=>{
    console.log('Servidor on PORT'+PORT)
})
