console.log(process.argv) // pergar o argumento argumento digitado no terminal 

const args = process.argv.slice(2)

console.log(args)

const nome = args[0].split('=')[0] // 'nome=Carlos'
console.log(nome)

const idade = args[1].split('=')[1] // 'nome=Carlos'
console.log(idade)

console.log(`O nome ${nome} e idade ${idade} anos`)