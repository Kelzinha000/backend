import http, { createServer } from 'node:http'
import fs from 'node:fs'
import formidable from 'formidable';


const lerDadosUsuarios = (callback) =>{ 
    fs.readFile("usuarios.json","uft8",(err,data)=>{
    if(err){
     callback(err);
    }
    try {
     const usuarios= JSON.parse(data); 
     callback(null, usuarios); 
    } catch (error) {  
     callback(error);
    }
    });
  };

  export default lerDadosUsuarios;

const PORT = 3333

let usuarios = []

const server = createServer((request, response)=>{
const {method, url} = request


if(method === 'GET' && url.startsWith('/perfil/')){
    const perfilId = url.split('/')[2]
    const perfilFind = perfis.find((perfil)=>{
    return perfil.id == perfilId 
    })
}if(method === 'GET' && url.startsWith('/usuarios')){
response.writeHead(200,{"Content-Type":"application/json"})
response.end(JSON.stringify(usuarios))
}if(method === 'POST' && url.startsWith('/login')){
    
}else if(method === 'POST' && url === '/usuarios'){
    let body = ''
    request.on('data', (chunk)=>{
         body += chunk
    })
    request.on('end',()=>{
        if(!body){
            response.writeHead(400, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message:'Corpo da solicitação vazio'}))
        }

        
        const novoUsuario = JSON.parse(body)
        lerDadosUsuarios((err,usuarios)=>{

            if(err){
            response.writeHead(500, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message : 'Erro ao cadastrar a usuario'}))
            return
            }
            novoUsuario.id = usuarios.length + 1
            usuarios.push(novoUsuario)
                                                                  
            fs.writeFile('usuarios.json', JSON.stringify(usuarios, null, 2),(err)=>{
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response.end(JSON.stringify({message :'Erro ao cadastrar a usuario no arquirvo'}))
                    return
                }
                response.writeHead(201, {'Content-Type':'application/json'})
                response.end(JSON.stringify(novoUsuario))
            })

        })
        response.end()
    })
    }
if(method === 'POST' && url.startsWith('/perfil/imagem')){
    if(request === '/perfil/imagem/')
}if(method === 'PUT' && url.startsWith('/perfil')){
    let body = ''
    request.on('data',(chunk)=>{
        body += chunk.toString()
    })

    request.on("end", ()=>{
        fs.writeFile("usuarios.json", JSON.stringify(usuarios, null, 2),(err)=>{
            if(err){
                response.writeHead(500,{'Content-Type':'application/json'})
                response.end(JSON({message:'Erro interno no servidor'}))
                return
            }
        })
    })
}
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT ${PORT}`)
})