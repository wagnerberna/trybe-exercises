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
    
