const { estudantes } = require('./data');

// retorna a média das idades / pega 1 elem. como acc
// reduce soma idades 
// idade inicial de 0 passada como 1 elem da soma

const mediaIdades = function(data) {
  const somaIdades = data.reduce((acc, valor) => {
    return acc += valor.idade
  },0);
  return (`
  Soma das idades: ${somaIdades} 
  Total de alunos: ${data.length}
  Média de idades dos Alunos: ${(somaIdades / data.length)}`);
}

console.log(mediaIdades(estudantes));