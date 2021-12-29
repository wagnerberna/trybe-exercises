const { estudantes } = require('./data');

//primeiro o find localiza a pessoa, depois o some verifica se pessoa tem alguma maior q a média.

const BuscaNome = function (nomeAluno, media, data) {
  const busca = data.find(({ nome }) => nome === nomeAluno);
  // console.log(busca);
  const resultado = busca.materias.some(({ nota }) => nota >= media);

  return resultado;
};
console.log(BuscaNome('Natalia', 80, estudantes));