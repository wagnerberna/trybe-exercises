const { estudantes } = require('./data');

//verifica se ALGUM aluno é maior q x anos.

const verificaIdade = function(idadeMin, data) {
  return data.some(({ idade }) => idade > idadeMin);
}

console.log(verificaIdade(18, estudantes))

//todos menores de 17
