const fs = require('node:fs');
const http = require('node:http');


const PORT = 3333; 

const usuarios = []

const sever = http.createServer((request,response)=>{
const {method, url} = request 
const infoUrl = ('/usuario').parse(request.url, true)
const name = infoUrl.query.name
if(!name){
    fs.readFile('index.html',(err,data)=>{
     response.writeHead(200, {'Content-Type':'text/html'})
     response.write(data)
     return response.end()
    })
   }else{
       const nameNewLine = name + ',\r\n'
   // writeFile = s´escreve 
   //appendFile = Escreve e junta
     fs.appendFile('arquivo.txt', nameNewLine, (err)=>{
     response.writeHead(302, {
     Location: '/'
     })
     return response.end()
     })
   }
  
    if(url=== '/usuarios' && method === "GET"){
    response.setHeader('Content-Type','application/json')
    response.end(JSON.stringify(usuarios));
    
    }else if(url === '/usuarios' && method === "POST"){
     let body = '';
     request.on('data', (chunk)=>{
     body += chunk.toString()
     })
     request.on('end', ()=>{
        const novoUsuario = JSON.parse(body)
        novoUsuario.id = usuarios.length + 1
        usuarios.push(novoUsuario)
        response.writeHead(201, {'Content-Type':'application/json'})
        response.end(JSON.stringify(novoUsuario))
        
      

     })
    }
})
sever.listen(PORT,()=>{
    console.log(`Servidor on PORT ${PORT}`)
})

