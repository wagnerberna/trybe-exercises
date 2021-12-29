const { estudantes } = require('./data');

//map para retornar apenas os nomes e idades com template literals

const lista = function(data = estudantes) {
  return data.map(({ nome, idade }) => `Nome do Aluno: ${nome}, Idade: ${idade}
  `);
};

//vetor passado como default value 
console.log(lista());