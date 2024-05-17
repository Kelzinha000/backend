// não armazeno imagens em bancos de dados, não temos controle e dimensão de disco para armazenar as imagens 
// trabalhando com imagens
// caminho de onde a imagem a está na aplicação - PATH
//1° - colocar a imagem em uma pasta na raiz do projeto - Não paga
//2° - Contra serviços (API's) para adicionar imagem - Custo alto 
import {createServer, request} from 'node:http';
import { writeFile, readFile, rename } from 'node:fs';
import path, {dirname} from 'node:path';
import {fileURLToPath} from  'node:url';

import formidable, {errors as formidableErrors} from 'formidable'; // receber arquivos e armazenar no projeto
import { v4 as uuidv4 } from 'uuid';


import lerDadosUsuarios from './lerUsuarios.js'; // ATENÇÃO => .js

const PORT = 3333
const caminho = path.join(__dirname)
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const server = createServer(async(request, response)=>{
    const {method, url}= request
    
if(method === 'GET' && url === "/usuarios"){
    lerDadosUsuarios((err, usuarios)=>{
        if(err){
            response.writeHead(500,{"Content-Type":"application/json"})
            response.end(JSON.stringify({message:"Não posssível ler o aquivo"}))
        }
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify(usuarios))
    });
}else if(method === 'POST' && url === "/usuarios"){
    let body = ''
    request.on('data', (chunk)=>{
        body += chunk;
    })
    request.on('end', ()=>{
        const novoUsuario = JSON.parse(body)
        // validações do ados vindo do body 
        lerDadosUsuarios((err,usuarios)=>{
            if(err){
                response.writeHead(500,{"Content-Type":"application/json"})
                response.end(JSON.stringify({message:"Não posssível ler o aquivo"})
                );
                return;
            }
            
            novoUsuario.id = uuidv4()
            const verificaSeEmailExiste = usuarios.find((usuario)=> usuario.email === novoUsuario.email
            ); 
            if(verificaSeEmailExiste){
                response.writeHead(400,{"Content-Type":"application/json"})
                response.end(JSON.stringify({message:"Email já está em uso"}))
            }
            usuarios.push(novoUsuario)
            writeFile('ususarios.json', JSON.stringify(usuarios, null, 2), (err)=>{
            if(err){
                response.writeHead({"Content-Type":"application/json"})
                response.end(JSON.stringify(novoUsuario)
                );
                return;
            }
            });
        });
    });
}else if(method === 'POST' && url === "/perfil"){
    const form = formidable({});
    let fields;
    let files;
    try {
        [fields, files] = await form.parse(request);
    } catch (err) {
        // example to check for a very specific error
        if (err.code === formidableErrors.maxFieldsExceeded) {

        }
        console.error(err);
        response.writeHead(err.httpCode || 400, { 'Content-Type': 'text/plain' });
        response.end(String(err));
        return;
    }
     console.log("fields", fields)
     if(!nome || !bio || !imagemDePerfil){
        response.writeHead(400,{"Content-Type":"application/json"})
        response.end(
            JSON.stringify({
                error: ""
            })
        )
     }
 
}else{
    response.writeHead(404, {'Content-Type':'application/json'})
    response.end(JSON.stringify({message: 'Página não encontrada'}))
}

})

server.listen(PORT, ()=>{
    console.log(`Servidor on PORT:${PORT}`)
})