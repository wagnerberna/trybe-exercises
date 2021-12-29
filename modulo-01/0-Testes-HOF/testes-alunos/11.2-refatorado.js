const { estudantes } = require('./data');

//primeiro o find localiza a pessoa, depois o some verifica se pessoa tem alguma maior q a média.

const BuscaNome = function (nomeAluno, media, data) {
  return data.find(({ nome }) => nome === nomeAluno)
  .materias.some(({ nota }) => nota >= media);
};

console.log(BuscaNome('Natalia', 80, estudantes));