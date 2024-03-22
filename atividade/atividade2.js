// const vetor1 = []
// const vetor2 = []

// vetor1 = (prompt("Digite números"));
// vetor2 =(prompt("Digite números")) 

// if(vetor1[i] === vetor2[i]){
    
// }

// const juntar = [ ...vetor1,...vetor2]
const numeros = []

const inNumero = document.getElementById('inNumero')

const btnAdiciocnar = document.getElementById('btnAdicionar')
const btnVerificarOrdem = document.getElementById('btnVerificarOrdem')

const outNumeros = document.getElementById('outNumeros')

const adicionarNumero = () => {
    btnAdiciocnar.addEventListener('click',adicionarNumero);

    const numero = Number(inNumero.value)
    if(numero === 0 || isNaN(numero){
        alert('Numero inválido')
        return
    }
    const numeroIgual = numeros.includes(numero)
    if(!numeroIgual){
        numeros.push(numero)
    }else{
        alert('numero repetido')
        inNumero.value
    }numeros.push(numero)
    
    outNumeros.textContent =` ${numeros.join(',')}`
}
btnAdiocnar.addEventListener("click", adiconarNumero)

const verificar= () => {
    btnAdiciocnar.addEventListener('click',adicionarNumero);
    const btnVerificarOrdem = () => {
        if(numeros.length === 0){
            alert('Não existe elementos no array de numeros')
            return
        }
        const vericarA
    }