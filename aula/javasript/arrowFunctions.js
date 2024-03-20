// Arrow Function

// uma variavel que recebe uma função, cicle area mnão é o nome da função 
let clicleArea = function(r){
    let PI = Math.PI;
    let area = PI * r * r ;
    return area.toFixed(2);
};
console.log(clicleArea(6));

//nn tem nome ----------------------------------
let clicleArea2 = (r) => {
    let PI = Math.PI;
    let area = PI * r * r;
    return area.toFixed(2);
};
console.log(clicleArea2(6)+5);

// função reduzida-----------------------------
let clicleArea3 = (r) => (Math.PI * r * r).toFixed(2)
console.log(clicleArea3(2)+4);
