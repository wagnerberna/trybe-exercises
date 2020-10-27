//01.
console.log("Exercício 01 imprimir vetor");
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let count = 0; count < numbers.length; count += 1) {
    console.log(numbers[count]);
}
//02.
console.log("Exercício 02 somar vetor imprimir resultado");
let resultadoSoma = 0;
for (let count = 0; count < numbers.length; count += 1) {
    resultadoSoma += numbers[count];
}
console.log(resultadoSoma);

//03.
console.log("Exercício 03 média dos valores");
    let mediaVetor;
    mediaVetor = resultadoSoma / numbers.length;
    console.log(mediaVetor);
//04.
console.log("Exercício 04 maior ou menor e igual a 20");
if (mediaVetor > 20) {
    console.log("Maior que 20");
} else {
    console.log("menor ou igual a 20");
}
//05.
console.log("Exercício 05 maior valor do vetor");
let maiorNumero = 0;
for (let numAtual = 0; numAtual < numbers.length; numAtual += 1) {
    let numComparar = numbers[numAtual];
    for (let count = 0; count < numbers.length; count += 1) {
        if (numComparar >= numbers[count] && numComparar >= maiorNumero) {
            maiorNumero = numComparar;
        }
    }
}
console.log(maiorNumero);

//06.
console.log("Exercício 06 valores ímpar do vetor");
let numImpar = []
for (let count = 0; count < numbers.length; count +=1) {
    if (numbers[count] % 2 !== 0) {
        numImpar.push(numbers[count]);
    }
}
if (numImpar.length == 0) {
    console.log("Não existem números ímpares nesse vetor");
} else {
console.log(numImpar);
}

//07.
console.log("Exercício 07 menor valor do vetor");
let menorValor = 1000;
for (let numAtual = 0; numAtual < numbers.length; numAtual += 1) {
    let numCompara = numbers[numAtual];
    for(let count = 0; count < numbers.length; count += 1) {
        if (numCompara <= numbers[count] && numCompara <= menorValor) {
            menorValor = numCompara;
        }
    }
}
console.log(menorValor);

//08.
console.log("Exercício 08 criar vetor");
let numeros = [];
for (let count = 1; count <= 25; count+=1) {
    numeros.push(count);
}
console.log(numeros);

//09.
console.log("resultado vetor anterior dividido por 2");
for(let count = 0; count < numeros.length; count += 1) {
    let resultadoDivisao = numeros[count] / 2;
    console.log(resultadoDivisao);
}
