import fs from 'node:fs'
const lerDadosReceitas = (callback)=>{
    fs.readFile('receitas.json','utf8',(err,data)=>{
      if(err) {
          callback(err)
      }
      try{ // trativas 
          const receitas = JSON.parse(data) ;// para não repetir várias
          callback(null, receitas);
      }catch( error){
        callback(error);
      }
    })
  }

  export default lerDadosReceitas;

  // essa função ler os dados, essa função sempre vai ser um array de objetos