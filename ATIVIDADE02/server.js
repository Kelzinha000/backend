import http from 'node:http'
import fs from 'node:fs'

const PORT = 3333

const server = http.createServer((request,response)=>{
   const { method, url}= request
   

    if(method === 'GET' && url === '/empregados/count'){
        fs.readFile('funcionarios.json','utf8', (err)=>{
            if(err){
                response.writeHead(500, {'Content-Type':'application/json'})
                response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
            const jsonData = JSON.parse(data)
            const totalFuncionario = json.length 

            response.writeHead(200,{'Content-Type':'application/json'})
            response.end(JSONS.stringify({message:`total de funionarios: ${totalFuncionario}`}))
            } 
        })
    }else if(method === 'GET' && url.startsWith( '/empregados/porHabilidade/')){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSONS.stringify(jsonData))
    }else if(method === 'GET' && url.startsWith('/empregados/porCargo/')){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSONS.stringify(jsonData))
    }else if(method === 'GET' && url === '/empregados/porFaixaSalarial' ){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSONS.stringify(jsonData))
    }else if(method === 'GET' && url.startsWith('/empregados/')){
        const id = parseInt(url.split('/')[2])
        //localhost:empregados/3
       fs.readFile('funcionarios.json', 'utf8', (err)=>{
        if(err){
            response.writeHead(500, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message: 'Erro ao ler o arquivo'}))
        }
        const jsonData = JSON.parse(data)

        const indexFuncionario = jsonData.findIndex((funcionario)=>funcionario.id === id)

        if(indexFuncionario === -1){
            response.writeHead(404, {'Content-Type':'application/json'})
            response.end(JSON.stringify({message: 'Funcionário não encontrado'}))
        }
       })
        
        response.end()        
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSONS.stringify(jsonData))
    }else if(method === 'POST' && url === '/empregados/'){
       let body = ''
       response.on('data', (chunk) =>{
        body += chunk
       })
       response.on('end', ()=>{
        const novoFuncionario = JSON.parse(body)
        novoFuncionario.id= jsonData.length + 1
        jsonData.push(novoFuncionario)
        
        fs.writeFile("funcinarios.json", JSON.stringify(novoFuncionario, null, 2), (err) =>{})
        if(err){
            if(err) {
                response.writeHead(500, {'Content-Type':'application/json'})
                response,end(JSON({message:'Erro interno no Servidor'}))
                return
            }
        }
        })
    }else if(method === 'PUT' && url.startsWith('/empregados/')){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSONS.stringify(jsonData))
    }else if(method === 'DELETE' && url.startsWith('/empregados/')){
        
    }else{
        response.write(404, {'Content-Type':'application'});
        response.end(JSON.stringify({message: "Não encontrado"}))
    }
   })


server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})