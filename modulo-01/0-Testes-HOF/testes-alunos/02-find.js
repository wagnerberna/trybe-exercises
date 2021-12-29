const { estudantes } = require('./data');

//Buscar aluno por nome: (retorno aluno e materias)

const BuscaNome = function (nomeAluno, data) {
  let resultado = {};
  // console.log(nomeAluno);
  resultado = data.find(({ nome }) => nome === nomeAluno);
  // console.log(resultado);
  console.log(!resultado);
  // negação do resultado se for vazio (false), vai retornar true e entra na condição.
  if (!resultado) return 'Nome não encontrado';
  return resultado;
};
console.log(BuscaNome('Natalia', estudantes));