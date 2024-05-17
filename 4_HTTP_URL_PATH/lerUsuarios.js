import {readFile} from 'node:fs'
// abstração
const lerDadosUsuarios = (callback)=>{
    readFile('usuarios.json','utf8',(err)=>{
        if(err){
            callback(err)
        }
        try{
        const usuarios = JSON.parse(data)
        callback(null, usuarios)
        }catch(err){
        callback(err)
        }
    })
}

export default lerDadosUsuarios;