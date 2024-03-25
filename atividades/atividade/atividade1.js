
const clubes = []

const inClube = document.getElementById('inClube')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnListar = document.getElementById('btnListar')
const outLista = document.getElementById('outLista')

const adicionarClube = () => {
  const clube = inClube.value
  if(clube === ''){
    alert(`Preencha o campo`)
    inClube.focus() 
    return  
  }
 clubes.push(clube)
 console.log(clubes)
 inClube.value=''
 inClube.focus()
}
btnAdicionar.addEventListener('click', adicionarClube);

const listarClube = () => {
  if(clubes.length === 0){
    alert('Não exixte clubles cadastrados')
    return
  }
  let lista = ''
  clubes.forEach((clubes, index)=>{
    return lista += `${index+1}. ${clubes} \n`
  })
  outLista.textContent = lista
}
btnListar.addEventListener('click', listarClube);

const montarJogos = () =>{
  if(clubes.length % 2 != 0 || clubes.length === 0){
   alert('Impossível fazer a tabulação com essa qt. de elementos');
   return 
  }
  const metadeInicio = clubes.slice(0, clubes.length / 2)// -> metade do arryas adiciona a variavel
  const metadeFim = clubes.slice(clubes.length/2, clubes.length).reverse()
  
  // console.log(clubes)
  // console.log(metadeInicio);
  // console.log(metadeDoFim);
  let lista = ''
  for(let i = 0; i < metadeInicio.length; i++){
    lista += `${i+1}.${metadeInicio[i]} X ${metadeFim[i]} \n`
  }
  outLista.textContent = lista
};
btnAdicionar.addEventListener('click', montarJogos);

