const erros = []; 
const numerosSorteado = Math.floor(Math.random()*100)+1;
console.log(numerosSorteado)
const tentativas = 6
const btnApostar = document.getElementById('btnApostar')
const btnJogar = document.getElementById('btnJogar')

const apostarNumero = () => {
   const inNumero = document.getElementById('inNumero')
   let numero = Number(inNumero.value)
   
   if(numero <= 0 || isNaN(numero)){
    alert('Número inválido')
    inNumero.focus()
    return
   }
   const outErros = document.getElementById('outErros')
   const outChances = document.getElementById('outChances')
   const outDica = document.getElementById('outDica')


   // logica da aplicação 
   if(numero == numerosSorteado){
    alert('Você acertou!')
    btnApostar.disabled = true 
    outDica.textContent = `Parabéns! Número Sorteado ${numerosSorteado}`
   }else{
    if(erros.indexOf(numero) >= 0){
    alert(`Você ja apostou o ${numero}... Tente outro`)
    }else{
        erros.push(numero)
        let numErros = erros.length
        let numChances =  tentativas - numErros 

        outErros.textContent = `${numErros}(${erros.join(',')})`
        outChances.textContent = numChances
    if(numChances == 0){
     btnApostar.disabled = true 
     outDica.textContent = `Fim de jogo! Número sorteado ${numeroSorteado}` 
   }else{
    let dica = numero < numerosSorteado ? "Maior" : "Menor"
    outDica.textContent = `Dica: Tente um numero ${dica} que ${numerosSorteado}`
   }
    
    }
   }
   inNumero.value =''
   inNumero.facus()
   
}
btnApostar.addEventListener('click', apostarNumero)
btnApostar.addEventListener('click',()=>{
    window.location.reload()
})
