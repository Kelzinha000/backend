// Pesquisar e filtrado dados de um Array 
const numbers = [1, 2, 3, 4, 5]; 

// Encontrar o primeiro elemento que satisfaz a condição 
const encontrado = numbers.find((num) => num  > 2);
console.log(encontrado);

// Cria um bivo array  com todos elemtos quepassarem no teste
const filter = numbers.filter((num) => num  % 2 === 0);
console.log(filter);

// cria um novo array possui um determinado valor, retorna true ou false 
const includes = numbers.includes(4);
console.log(includes);

// todos os elementos do array passam no teste lógica da função 
const every = numbers.every((num) => num % 2 === 0)
console.log(every)

//verifica se pelos menos um elemento no array satisfaz a condição 
const some = numbers.some((num) => num % 2 === 0)
console.log(some)