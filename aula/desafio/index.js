const crianca = []

const idade = document.getElementById('inIdade')
const nome= document.getElementById('inNome')

const btnAdicionar = document.getElementById('click', adicionar) 
const btntListar = document.getElementById('btnListar')
const btntFiltrar = document.getElementById('btnFiltrar')

const adicionar = () => {
    const inNome = inIdade.value
    const nome = Number(inNome.value)
     if(Idade === '' || nome <= 0 || isNaN(Idade)){
        alert('Informe os dados corretamente')
        inIdade.focus()
        return
     }
    carros.push({nome: nome, idade:idade});
    console.log(crianca);
    inNome = "";
    inIdade = ""; 
}
btnAdicionar.addEventListener('click', adicionar){
  if(idade.legth === 0){
    alert('Não ')
    inNome.focus()
    return
  }
}