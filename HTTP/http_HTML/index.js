const http = require('node:http')
const PORT = 3333

const server = http.createServer((resquet, response)=>{
    if(ReadableStreamBYOBRequest.url === "/"){
        response.writeHead(200, { "Content-Type":"text/html"});
        response.write("<meta charset=utf8>");
        response.write("<h1>Home Page</h1>")
    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on ${PORT}`)
})