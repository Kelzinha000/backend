import http from 'node:http'
import fs from 'node:fs'
import { URLSearchParams } from 'node:url'

const PORT = 3333
let  receitas= []

const server = http.createServer((request, response)=>{
    const {method, url} = request

    if(method === "GET" &&  url.startsWith('/receitas')){
      response.writeHead(200, {'Content-Type':'application/json'})
      response.end(JSON.stringify(receitas))
      return
    }else if(method === "GET" && url.startsWith( '/receitasId')){
        const receitaId = url.split('/')[2]
        const receitaFind = receitas.find((receita)=>{
        return receita.id == receitaId
    })
    }else if(method === "GET" && url( '/categorias')){

    }else if(method === "GET" && url.startsWith(( '/busca'))){
        //localhost:3333/busca/
     const urlParam = new URLSearchParams(url.split("?")[1])
     console.log(urlParam.get('termo'))

    }else if(method === "GET" && url.startsWith(( '/ingredientes'))){
     
    }else if(method === "POST" && url.startsWith( '/receitas')){
     let body =''
     response.on('data', (chunk) =>{
        body += chunk.toString()
     })
     response.on('end',()=>{
        const novaReceita = JSON.parse(body)
        novaReceita.id = receitas.length + 1
        receitas.push(novaReceita)
     })
     
     fs.writeFile("receitas.json", JSON.stringify(receitas, null, 2),(err)=>{
            if(err) {
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message:'Erro interno no Servidor'}))
                return

         }
         response.writeHead(201,{"Content-Type":"application/json"});
         response.end(JSON.stringify(novaReceita))
     })
    }else if(method === "PUT" && url.startsWith('/receitas/')){
     const receitass = url.split('/')[2]
      
     let body = ''
     request.on('data', (chunk)=>{
     body += chunk
     })
     request.on("end", ()=>{
        fs.writeFile("receitas.json", JSON.stringify(novaReceita, null, 2), (err)=>{
            if(err) {
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON({message:'Erro interno no Servidor'}))
                return
            }
        } )
     })

    }else if(method === "DELETE" && url('/receitas/')){
        const receitaId = url.split('/')[2]
      
        if(err){
            response.writeHead(404, {'Content-Type':'application/json'})
            response.end(JSON({message:'receita não encontrado'}))
            return
        }

        
        if(receitaId === -1){
            response.writeHead(404, {'Content-Type': 'application/json'})
            response.end(JSON.stringify({message:'receita não encontrado!'}))
        }
    
}else{
    response.write(404, {'Content-Type':'application;json'});
    response.end(JSON.stringify({message: "Não encontrado"}))
}
    }
)
server.listen(PORT, ()=>{
 console.log(`Servidor on PORT ${PORT}`)
})