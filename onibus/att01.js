const data = require('./onibus.json')

const horarioPorLinha = (idLinha) => {
    const linha = data.linhas.find((linha)=> linha.id == idLinha);
     console.log(linha)

    if(linha) {
        const horarios = linha.horarios.map((horario) => {
            return `Saída: ${horarios.saida}, Chegada: ${horario.chegada}`;
        });
        return horarios.join('\n')
    }else{
        return {message: "Não foi encontrada uma linha"};
    }
};

const id = 1
const horariosLinhas = horarioPorLinha(id)
console.log(horariosLinhas)
