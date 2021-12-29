const { estudantes } = require('./data');

//primeiro o find localiza a pessoa, depois o every verifica se pessoa tem TODAS NOTAS maior q a média.
//retorna reprovado ou aprovado.

const BuscaNome = function (nomeAluno, media, data) {
  const resultado = data.find(({ nome }) => nome === nomeAluno)
  .materias.every(({ nota }) => nota >= media);
  return aprovado = resultado === true ? 'Aprovado' : 'Reprovado'; 
};

console.log(BuscaNome('Natalia', 70, estudantes));