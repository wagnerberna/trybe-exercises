//Ex.
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

oddsAndEvens.sort((a, b) => a - b);

console.log(oddsAndEvens);

//atribuindo o vetor em uma nova variável:
const vetor = [13, 3, 4, 10, 7, 2];

const vetorOrdenadoCres = vetor.sort((a, b) => a - b);

console.log(`Novo vetor ordenado crescente é:
${vetorOrdenadoCres}`);

//Vetor decrescente:
const vetorOrdenadoDec = vetor.sort((a, b) => b - a);

console.log(`Novo vetor ordenado decrescente é:
${vetorOrdenadoDec}`);

//Vetor String array:
vetor2 = ['Bolo', 'Arroz', 'Chocolate'];

const vetorOrdenadoString = vetor2.sort();

console.log(`Novo vetor ordenado string é:
${vetorOrdenadoString}`);

//Vetor ord. cresc. atribuindo vetor arrow dentro de uma função:
vetor3 = [0, 2, 10, 8, 6, 4];

function ordenaVetor(vet) {
  vet.sort((a, b) => a - b);
  return vet;
}
const vetorOrd = (ordenaVetor(vetor3));
console.log(`Vetor3 ordenado arrow dentro de uma função
${vetorOrd}`);

//Teste Vetor ord. crescente:

const assert = require('assert');
const expected = [0,2,4,6,8,10];
assert.strictEqual(vetorOrd, expected, 'ordem crescente');
