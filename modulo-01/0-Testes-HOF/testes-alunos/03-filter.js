const { estudantes } = require('./data');

//Filtrar alunos por turno.

const alunosTurno = function(turnoBusca, data) {
  return data.filter(({ turno }) => turno === turnoBusca);
}

console.log(alunosTurno('Manhã', estudantes));

// Turnos "Manhã" e "Tarde"