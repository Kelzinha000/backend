import http from 'node:http'
import fs from 'node:fs'
import {URLSearchParams} from 'node:url'  // importando somente um objeto

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
            response.end(JSON.stringify({message:`total de funionarios: ${totalFuncionario}`}))
            } 
        })
    }else if(method === 'GET' && url.startsWith( '/empregados/porHabilidade/')){
    const cargo = url.split("/")[3];
    fs.readFile("funcionarios.json","utf8",(err, data)=>{
        if(err){
            response.writeHead(500, {"Content-Type":"application/json"})
            response.end(JSON.stringify({message: "Errro ao ler arquivo"}))
        }
        const jsonData = JSON.parse(data)
        const funcionariosPorHabilidade = jsonData.filter(
            (funcionario)=> funcionario.habilidade.includes(habilidade)

        )
        if(funcionariosPorHabilidade.length === 0){
            response.writeHead(404,{"Content-Type":"application/json"})
            response.end(JSON.stringify(funcionarioPorCargo))
        }
    })
    
    }else if(method === 'GET' && url.startsWith('/empregados/porCargo/')){
       fs.readFile('funcionarios.json','utf8',(err, data)=>{
        if(err){
            response.writeHead(500,{"Content-Type":"application/json"});
            response.end(JSON.stringify({message:"Erro ao ler arquivo "}))
       
       }
        const jsonData =  JSON.parse(data)

        const funcionarioPorCargo = jsonData.filter(
            (funcionario) => funcionario.cargo === cargo
        )

       }
    }else if(method === 'GET' && url === '/empregados/porFaixaSalarial' ){
        const urlParams = new URLSearchParams(url.split('?')[1])
        const minSalario = urlParams.get("minSalario")
        const maxSalario = urlParams.get("maxSalario")
        console.log(minSalario, maxSalario)
        if(err){
            response.writeHead(500,{"Content-Type":"application/json"});
            response.end(JSON.stringify({message:"Erro ao ler arquivo "}))
       
       }
        const jsonData =  JSON.parse(data)
       
       const funcionarioPorFaixaSalarial = jsonData.filter(
        (funcionario)=>
        funcionario.salario >= minSalario && 
        funcionario.salario <= maxSalario
       );
       if(funcionarioPorFaixaSalarial.length === 0){
        response.writeHead(404, {"Content-Type":"application/json"})
        response.end(
            JSON.stringify({
                message:"Não existe funcionario com essa Faixa Salarial"
            })

        )
        return;
       }
       response.writeHead(200,{"Content-Type":"application/json"})
       response.end(JSON.stringify({message: "ok"}))



        console.log("GET /empregados/porFaixaSalarial")
        response.end();
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
        response.end(JSON.stringify(jsonData))
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
      const id = parseInt(url.split('/')[2])

      let body = ''
      request.on('data', (chunk)=>{
        body += chunk
      })
      request.on('end',()=>{
        fs.writeFile("funcinarios.json", JSON.stringify(novoFuncionario, null, 2), (err) =>{
     
            if(err) {
                response.writeHead(500, {'Content-Type':'application/json'})
                response,end(JSON({message:'Erro interno no Servidor'}))
                return
            }

            const jsonData = JSON.parse(data)
            const indexFuncionario = jsonData.findIndex((funcionario)=> funcionario.id === id)

            if(indexFuncionario === -1){
                response.writeHead(404, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({message:'Funcionario não encontrado!'}))
            }
            const funcionaioAtualizado = JSON.parse(body)
            funcionarioAtualizado.id = id
            
            jsonData[indexFuncionario]= funcionaioAtualizado

            fs.writeFile('funcionarios.json', JSON.stringify(jsonData, null, 2), ()=>{
                if(err){
                    response.writeHead(500, {'Content-Type':'application/json'})
                    response,end(JSON({message:'Erro ao salvar os dados no Banco de dados'}))
                    return
                }
                response.writeHead(200,{'Content-Type':'application/json'})
                response.end(JSON
                    .stringify(funcionaioAtualizado))
            })
        })
        
      })
    }else if(method === 'DELETE' && url.startsWith('/empregados/')){
        const id = url.split('/')[2]
        fs.readFile("funcionarios.json", "uft8", (err,data)=>{
            if(err){
                response.writeHead(404, {'Content-Type':'application/json'})
                response,end(JSON({message:'funcionario não encontrado'}))
                return
            }

            
            if(indexFuncionario === -1){
                response.writeHead(404, {'Content-Type': 'application/json'})
                response.end(JSON.stringify({message:'Funcionario não encontrado!'}))
            }
        })
    }else{
        response.write(404, {'Content-Type':'application'});
        response.end(JSON.stringify({message: "Não encontrado"}))
    }
   })


server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})