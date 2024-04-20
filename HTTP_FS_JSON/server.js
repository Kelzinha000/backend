import http, { request } from 'node:http'
import fs from 'node:fs'
import { v4 as uuidv4 } from 'uuid' ;

const PORT = 3333
// titulo, autot. genero, anoPublicacao, [personagens]
const server = http.createServer((request,response)=>{
   const {url, method}= request
   
    // antes de qualquer requisição ele vai readFile vai pegar as informações e colocar um objeto
   fs.readFile('./livros.json','utf8', (err, data)=>{
    if(err){
        response.writeHead(500, {"Content-Type":"application/json"});
        response.end(JSON.stringify({message:'Erro interno do servidor'}))
        return
    }

    let jsonData = []
    try {
   jsonData = JSON.parse(data)
    } catch (error){
        console.log(error)
    }
    if(url === '/livros' && method === 'GET'){
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify(jsonData))
    }else if(url === '/livros' && method === 'POST'){
    let body = ''
    request.on('data',(chunk)=>{
    body += chunk.toString()
    })
    request.on('end',()=>{
        const novoLivro = JSON.parse(body)
         novoLivro.id = uuidv4() //jsonData.length + 1  
        jsonData.push(novoLivro) //Onde //o que vai substituir // caso se de problema
        fs.writeFile(
            "livros.json",
            JSON.stringify(jsonData, null, 2), 
        (error)=>{
            if(error){
                response.writeHead(500,{'Content-Type':'application/json'})
                response.end(
                    JSON.stringify({message: "Erro interno do servidor"})
                );
                return
            }
            response.writeHead(201,{'Content-Type': 'application'})
            response.end(JSON.stringify({novoLivro}))
        })
    })
    }else if(url.startsWith("/livros") && method === "PUT"){
    const id = url.split('/')[2]
let body =''
request.on('data', (chunk)=>{
  body+= chunk.toString();
})
request.on('end',()=>{
    const livroAutlizado = JSON.parse(body)

    const index = jsonData.findIndex(livro => livro.id == id);
    if(index !== -1){
     jsonData[index] = {...jsonData[index],...livroAutlizado};
     fs.writeFile("livros.json", JSON.stringify(jsonData, null, 2),(error)=>{
        if(error){
            response.writeHead(500,{'Content-Type':'application/json'})
            response.end(
                JSON.stringify({message: "Erro interno do servidor"})
            );
            return;
        }
        response.writeHead(200,{"Content-Type":"application"});
        response.end(JSON.stringify(jsonData[index]))
     })
    }
});

    console.log(id)
    response.end()
    }else if(url.startsWith("/livros/") && method === "DELETE"){
    const id = url.split("/")[2]
    const index = jsonData.findIndex((livro)=>livro.id == id);
    if(index != -1){
        jsonData.splice(index,1);
        fs.writeFile(
            "livros.json",
            JSON.stringify(jsonData, null, 2),
            (error) =>{
                if(error){
                    response.writeHead(500,{'Content-Type':'application/json'})
                    response.end(
                        JSON.stringify({message: "Erro interno do servidor"})
                    );
                    return
                }
                response.writeHead(200, {'Content-Type':'application/json'})
                response.end(
                    JSON.stringify({message:"livro removido com sucesso"}))
            }
            )
    }else{
        response.writeHead(404,{'Content-Type':'application.js'})
        response.end(JSON.stringify({message:"Página não encontrada"}))
    }

    }else{
        response.writeHead(404,{'Content-Type':'application.js'})
        response.end(JSON.stringify({message:"Página não encontrada"}))
    }
   })
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}😎`)
})