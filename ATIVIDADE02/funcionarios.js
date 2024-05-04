import fs from 'node:fs'

const lerDadosFuncionarios = () =>{ // função de callback
    fs.readFile("funcionarios.json","uft8",(err,data)=>{
    if(err){
     callback(err);
    }
    try {
     const funcionarios = JSON.parse(data); 
     callback(null, funcionarios); // suceeso
    } catch (error) {  // se der erro
     callback(error);
    }
    });
  };

  export default lerDadosFuncionarios;