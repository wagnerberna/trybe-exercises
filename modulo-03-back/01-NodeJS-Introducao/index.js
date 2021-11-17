const isOddOrEven = require("isoddmaster");
const readline = require("readline-sync");

const num = 4;

function verificarParImpar(num) {
  console.log(`veridica se o número: ${num} é par ou impar.
  Resultado: ${isOddOrEven(num)}`);
  return isOddOrEven(num);
}

// verificarParImpar(num);

function verificarParImpar2() {
  const a = readline.questionInt('Digite o número a ser testado: ');
  console.log(`Resultado: ${isOddOrEven(a)}`);
  const res = isOddOrEven(a);
  return res;
}

// verificarParImpar2()

function chamaAsDuasFuncoes() {
  const resultadoFn1 = verificarParImpar(num);
  const resultadoFn2 = verificarParImpar2();
  console.log(`Resultado FN1 = ${resultadoFn1}`)
  console.log(`Resultado FN2 = ${resultadoFn2}`)
}

chamaAsDuasFuncoes();
