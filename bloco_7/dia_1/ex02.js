const { count } = require("console")
// retorna o fatorial de um número Na matemática, o fatorial de um número não negativo N, com a notação N!, é o produto de todos os inteiros menores ou iguais a N. Exemplo: 4! = 4 3 2 * 1 = 24.
const numFatorar = 4;

const fatorial = (num) => {
  let resultado = 1;
  for(let count = 2; count <= num; count += 1) {
    resultado *= count;
  }
  return resultado;
}

console.log(`o fatorial de ${numFatorar} é: ${fatorial(numFatorar)}`);

//Crie uma função que receba uma frase e retorne qual a maior palavra.

const fraseRecebida = ('Mais um Belo Dia de Sol no Paraíso bem vindos ao meu mundo');

const maiorPalavra = (frase) => {
  const vetorFrase = frase.split(' ');
  let resultado = '0';
  for(palavra of vetorFrase) {
    if (palavra.length > resultado.length) {
      resultado = palavra;
    }
  }
  return resultado;
}
console.log(maiorPalavra(fraseRecebida));