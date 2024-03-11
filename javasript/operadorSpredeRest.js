
// operador Spred  e Rest => ...
//Spred criar copias desse arryas e juntar

const arrayOriginal = [1, 2, 3, 4];
const arrayFake = [...arrayOriginal]
console.log(arrayFake[3])

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
const juntar = [ ...array1,...array2]
console.log(juntar)

const objOriginal = {nome: 'carlos', idade: 23}
const objFake = {...objOriginal}
console.log(objFake)

const novoObjeto = {...objOriginal, profissao: "Developer"}
console.log(novoObjeto)

//rest 

function soma (...numeros){
return numeros.reduce((total,numero)=>total+numero,0); 
}
console.log(soma(1,2,3,4,5))
console.log(soma(10,20,30))