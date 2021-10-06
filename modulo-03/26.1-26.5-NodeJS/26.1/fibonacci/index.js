const readline = require('readline-sync');

function obterFibonacci() {
    let num1 = 0, num2 = 1, proximo;
    console.log('*** Série de Fibonacci *** \n');
    const posicao = readline.questionInt('Digite a quantidade de números a ser exibida: ')

    for(let i = 0; i < posicao; i++) {
        console.log(num1);
        proximo = num1 + num2;
        num1 = num2;
        num2 = proximo;
    }
}

obterFibonacci();