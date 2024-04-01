module.exports = {
    soma(a,b){
         console.log(`${a+b}`)
    },
    aoQuadrado(a){
        console.log(`${a*a}`)
    },
    divisao(a,b){
        if(b<=0){
            console.log(`Erro ${b}`)
            return
        }
        console.log(`${a/b}`)
    }, 
    subtracao(a,b){
        console.log(`${a-b}`)
    },
    mult(a,b){
        console.log(`${a*b}`)
    }
}