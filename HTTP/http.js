const http =  require('node:http')
console.log(http) //(http.)

 // toda ves que creiamos o serveidor temos dois parametros principais
  // essa função recebe dois parametros, requisição e reposta
const server  = http.createServer((request, response)=>{
    response.write('Olá, meu primeiro servidor HTTP!')
    response.end()
})
// nosso servidor está em uma porta 
server.listen(3333, ()=>{
    console.log('Servidor on PORT: 3333😎')
})
//eu habilito meu servidor em uma porta, e nessa port fica esperando resiquisições 
