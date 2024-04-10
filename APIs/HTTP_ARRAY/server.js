import http, { request } from 'node:http'

const PORT = 3333 

const users = []
const server = http.createServer((request, response)=>{
    const {method, url} = request
    if(url === '/users' && method === "GET"){//Buscar todos os usuários
      response.setHeader('Content-Type', 'application/json')  // devolve a resposta quando pedido a resquisição
      response.end(JSON.stringify(users)) /// vai converter todas as informações em json
    }else if(false){//Buscar um único usuário
     
    }else if(url === '/users' && method === "POST"){ //cadastrar um usuário
    let body = ''
    request.on('data', (chunk)=>{ // isso é um evento, ela vai pegar os pedaços
        // body += 'id:User, email:email' // o node reconhece como pedaçp = chunk   node puro
        body += chunk.toString()
    })
    request.on('end', ()=>{  
    const novoUsuario = JSON.parse(body)// vai passar a ser JSON
    novoUsuario.id = '1'
    users.push(novoUsuario)
    response.writeHead(201, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(novoUsuario))
    })
    }else if(true){ //atualizarar um usuário
        
    }else if(true){ //Deletar um usuáior
        
    }else if(true){ //recurso não encontrado

    }
})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT: ${PORT}`)
})