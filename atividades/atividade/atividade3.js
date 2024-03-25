
const inscritos = []
 
const listar = document.getElementById('listar')
const nome = document.getElementById('nome')
const numeroDeAcertos = document.getElementById('numeroDeAcertos')
const btnAdicionar = document.getElementById('btnAdicionar') 
const adicionar = ()=>{
  const nome = nome.value
  const numeroDeAcertos = Number(numeroDeAcertos.value)
  if(nome === '' || numeroDeAcertos === 0 || isNaN){
    alert('inválido')
    return
  }
  inscritos.push({nome: nome, numeroDeAcertos: numeroDeAcertos});
  console.log(inscritos);
  nome= "";
  numeroDeAcertos = ""; 
}

btnAdicionar.addEventListener('click', adicionar())
  if(inscritos.length===0){
   alert('Não há inscritos')
  }
  let lista = ''
  inscritos.forEach((inscritos) => {
    return (lista += `${inscrito.numeroDeAcerto} --- ${inscritos.numeroDeAcertos} \n`)
  })
  

