const { estudantes } = require('./data');

//map para retornar apenas os nomes e idades em um array de 6 posições cada uma um objeto.

const lista = function(data = estudantes) {
  resultado = [];
  const map = data.map(({ nome, idade }) => {
    resultado.push({name: nome, age: idade});
  });
  return resultado;
};

//vetor passado como default value 
console.log(lista());