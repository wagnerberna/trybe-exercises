const { estudantes } = require('./data');

//verifica se TODOS aluno é maior q x anos.

const verificaIdade = function(idadeMin, data) {
  return data.every(({ idade }) => idade > idadeMin);
}

console.log(verificaIdade(10, estudantes));
