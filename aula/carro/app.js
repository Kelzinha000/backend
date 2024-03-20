const carro = []

const preco = document.getElementById('inPreco')
const modelo = document.getElementById('inModelo')

const outLista = document.getElementById('outLista')

const btnAdicionar = document.getElementById('click', adicionarCarro) 
const btntListar = document.getElementById('btnListar')
const btntFiltrar = document.getElementById('btnFiltrar')

const adicionarCarro = () => {
    const modelo = inModelo.value
    const preco = Number(inPreco.value)
     if(modelo === '' || preco <= 0 || isNaN(preco)){
        alert('Informe os dados corretamente')
        inModelo.focus()
        return
     }
    carros.push({modelo: modelo, preco: preco});
    console.log(carros);
    inModelo = "";
    inPreco = ""; 
}
btnAdicionar.addEventListener('click', adicionarCarro);
  if(carros.legth === 0){
    alert('Não tem carros cadastrados')
    inModelo.focus()
    return
  }
  let lista = ''
  carros.forEach((carro) => {
    return (lista += `S{carro.modelo} --- ${carro.preco} \n`)
  })
 const filtrarPreco = () => {
    // filter, forEach 
    const maximo = Number(prompt('Qual o valor máximo que o cliente deseja pagar'))

    if(maximo === 0 || isNaN(maximo)){
        alert('Por favor, Preencha os dados corretamentre ')
        return 
    }
    const carrosFiltrados = carros.filter((carro) =>{
        return carro.preco <= maximo;
    });
 };

 btntFiltrar.addEventListener('click', filtrarPreco)




