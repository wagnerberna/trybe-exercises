const { estudantes } = require('./data');

//retorna o aluno mais velho / pega 1 elem. como acc

const alunoMaisVelho = function(data) {
  return data.reduce((acc, valor) => {
    if (acc.idade > valor.idade) return acc; // se if true não passa p/ prox. linha
    return valor; //Se o IF for falso retorna o valor e não o acc
  });
}

console.log(alunoMaisVelho(estudantes));
