//Soma

  function soma1 (num1, num2) {
  return num1 + num2;
} 
//Template Literals
console.log(`Resultado Soma ${soma1(5,10)}`);

//Arrow function / Template Literals / assert

const soma = (num1, num2) => num1 + num2;

console.log(`Resultado Soma ${soma(5,10)}`);

const assert = require('assert');
const expected = soma(5, 10);
assert.strictEqual(expected, 15, 'StrictEqual soma 5 + 10 = 15');
assert.notStrictEqual(expected, 20, 'soma 5 + 10 = 15 e não 20');
assert.ok(expected === 15, 'ok se: soma 5 + 10 = 15');

//2.arrow - separa Palavras !!!!!!!!!!
const separaPalavras = (frase) => frase.split(' ');

console.log(`Separa Palavras ${separaPalavras('a b c')}`);

const assert2 = require('assert');
const expected2 = separaPalavras('a b c');
const result = ['a', 'b','c']; 

//assert2.ok(expected2 === result, 'teste separa palavras a b c');

//3. arrow Conta Palavras
const contaPalavras = (frase) => frase.split(' ').length;

console.log(`Bom Dia Mundo têm ${contaPalavras('Bom Dia Mundo')} palavras`);

const assert3 = require('assert');
const expected3 = contaPalavras('a b c d');
assert3.strictEqual(expected3, 4, 'teste frase de 4 palavras');

