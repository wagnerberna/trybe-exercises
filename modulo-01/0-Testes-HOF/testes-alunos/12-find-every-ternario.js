const { estudantes } = require('./data');

//primeiro o find localiza a pessoa, depois o every verifica se pessoa tem TODAS NOTAS maior q a média.
//retorna reprovado ou aprovado.

const BuscaNome = function (nomeAluno, media, data) {
  const busca = data.find(({ nome }) => nome === nomeAluno);
  // console.log(busca);
  const resultado = busca.materias.every(({ nota }) => nota >= media);
  //ternário:
  const aprovado = resultado === true ? 'Aprovado' : 'Reprovado'; 
  return aprovado;
};

console.log(BuscaNome('Natalia', 70, estudantes));