const colors = require('colors')
const inquirer = require('inquirer')

inquirer
     .prompt([
        {
            name: 'p1',
            message: 'Qual a primeira nota?'
        },
        {
            name: 'p2',
            message: 'Qual a segunda nota?'
        }
     ])
     .then((answers)=>{
        console.log(answers);
        const media = ((Number(answers.p1) + Number(answers.p2))/2).toFixed(2)

        if(media>=6){
            console.log(`Aluno aprovado com média ${media}` .bgGreen)
        }else{
            console.log(`Aluno Reprovado com média ${media}`.rainbow)
        }
     })
     .catch(err=>console.log.error(err));