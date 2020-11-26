//Soma
/*
  function soma (num1, num2) {
  return num1 + num2;
} 
//Template Literals
console.log(`Resultado Soma ${soma(5,10)}`);
*/
//Arrow function / Template Literals / assert

const soma = (num1, num2) => num1 + num2;

console.log(`Resultado Soma ${soma(5,10)}`);

const assert = require('assert');
const expected = soma(5, 10);
assert.strictEqual(expected, 15, 'StrictEqual soma 5 + 10 = 15');
assert.notStrictEqual(expected, 20, 'soma 5 + 10 = 15 e não 20');
assert.ok(expected === 15, 'ok se: soma 5 + 10 = 15');

//2.arrow - conta palavras
const separaPalavras = (frase) => frase.split(' ');
const contaPalavras = (frase) => frase.split(' ').length;

console.log(`Separa Palavras ${separaPalavras('Bom Dia Mundo')}`);
console.log(`Bom Dia Mundo têm ${contaPalavras('Bom Dia Mundo')} palavras`);









