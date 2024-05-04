import fs from 'node:fs'
import { callbackify } from 'node:util'

const cadastrarFuncionario =()=>{
    
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
                response.end(JSON({message:'Erro interno no Servidor'}))
                return
            }
            try{
            const funcionarios = JSON.parse(data); 
            callback(null, funcionarios);
            }catch(err){
            callback(error)
            }
        }
    })
}

export default cadastrarFuncionario;