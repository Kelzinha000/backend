
// 1° global // contexto lexo
let filme = 'Senhor dos aneis'
{   // 2° / contexto/Função
    let filme2 = 'Star Wars'
    if(true){
        // 3° bloco 
        let filme3 = 'Barbie'
        console.log(filme)
        console.log(filme2)
        // console.log(filme3)
    }
    console.log(filme)
    console.log(filme2)
    console.log(filme3)
}
console.log(filme)
