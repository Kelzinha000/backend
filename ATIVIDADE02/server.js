import http, { request } from 'node:http'
import fs from 'node:fs'


const PORT = 3333
// titulo, autot. genero, anoPublicacao, [personagens]
const server = http.createServer((request,response)=>{
   const {url, method}= request
    try {
   jsonData = JSON.parse(data)
    } catch (error){
        console.log(error)
    }
    if(url === '/empregados' && method === 'GET'){
    response.writeHead(200,{'Content-Type':'application/json'})
    response.end(JSON.stringify(jsonData))
    }else if(url === '/empregados' && method === 'POST'){
    let body = ''
    request.on('data',(chunk)=>{
    body += chunk.toString()
    })
    request.on('end',()=>{
        const novoEmpregado = JSON.parse(body)
         jsonData.length + 1  
        jsonData.push(novoEmpregado) //Onde //o que vai substituir // caso se de problema
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
    }else if(url.startsWith("/empregados") && method === "PUT"){
    const id = url.split('/')[2]
let body =''
request.on('data', (chunk)=>{
  body+= chunk.toString();
})
request.on('end',()=>{
    const empregadoAutlizado = JSON.parse(body)

    const index = jsonData.findIndex(empregado => empregado.id == id);
    if(index !== -1){
     jsonData[index] = {...jsonData[index],...empregadoAutlizado};
     fs.writeFile("empregado.json", JSON.stringify(jsonData, null, 2),(error)=>{
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
    }else if(url.startsWith("/empregado/") && method === "DELETE"){
    const id = url.split("/")[2]
    const index = jsonData.findIndex((empregado)=>empregado.id == id);
    if(index != -1){
        jsonData.splice(index,1);
        fs.writeFile(
            "empregado.json",
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
                    JSON.stringify({message:"empregado removido com sucesso"}))
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


server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})