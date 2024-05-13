import http, { createServer } from 'node:http'
import fs from 'node:fs'
import './usuarios.js'

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
    
}if(method === 'POST' && url.startsWith('/usuarios')){
    let body = ''
    response.on('data',(chunk)=>{
        body += chunk
    })
    response.on('end', ()=>{
        const novoUsuario = JSON.parse(body)
        novoUsuario.id = usuarios.length +1 
        usuarios.push(novoUsuario)

        fs.writeFile('usuarios.json', JSON.stringify(usuarios,null , 2), (err)=>{
            if(err){
                response.writeHead(500,{'Content-Type':'application/json'})
                response.end(JSON({message:'Erro interno no servidor'}))
                return
            }
            response.writeHead(201,{"Content-Type":"application/json"})
            response.end(JSON.stringify(novoUsuario))
        })
    })
    response.end()
}if(method === 'POST' && url.startsWith('/perfil/imagem')){
    
}if(method === 'PUT' && url.startsWith('/perfil')){
    let body = ''
    request.on("end", ()=>{
        fs.writeFile("usuarios.json", JSON.stringify(perfil, null, 2),(err)=>{
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