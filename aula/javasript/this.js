const pessoa = {
    saudacao: 'Olá, seus monstros!',
    falar(){ // this faz referencia ao texto lexo do objeto( ele retoma )
        console.log(this.saudacao)
    }
}
pessoa.falar() // não chamando a função ta atribuindo a função 
const falar =  pessoa.falar
falar() // da error - undefine

//function bind
const pessoaFala = pessoa.falar.bind(pessoa)
pessoaFala()

function Pessoa(){
    this.idade = 0 
//     setInterval(function(){ // ele não sabe onde procurar 
//         console.log(this.idade++)
//     } /*.bind(this)*/, 1000)
//
const self = this 
setInterval(function(){
    self.idade++
    console.log(self.idade)
},1000)
 }
new Pessoa

function Pesssoa2(){
    this.idade = 0
    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    })
}
new Pessoa2
