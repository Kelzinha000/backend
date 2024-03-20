const clubes = []

const btnAdicionarClube = getElementById('btnAdicionar', adicionarClube)
const btnListar = getElementById('btnListar')
const nomeClube = document.getElementById('inNomeClube')

const adicionarClube = ('click', () => {
  const nomeClube = inNomeClube.value
    if(nomeClube === ''){
        alert('Nome inválido')
        return
    }    
})


// btnAdicionar.addEventListener('click',);
//   if(nomeClube.legth === 0){
//     alert('Não tem clubes cadastrados')
//     nomeClube.focus()
//     return
//   }
