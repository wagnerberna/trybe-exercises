const readline = require('readline-sync');

function calcularBhaskara() {
    const a = readline.questionInt('Digite o valor de A: ');
    const b = readline.questionInt('Digite o valor de B: ');
    const c = readline.questionInt('Digite o valor de C: ');

    console.log(`\nCoeficientes: A: ${a}, B: ${b}, C: ${c}\n`);

    const delta = calcularDelta(a, b, c);

    if(delta < 0) {
        console.log(`Valor de delta é negativo: ${delta}\n`);
        return;
    }

    console.log(`O valor de delta é ${delta}\n`);

    const resultado = calcularX(a, b, delta);

    console.log(`Resultado: \n\tx1 = ${resultado.x1}, \n\tx2 = ${resultado.x2}`);
}

calcularBhaskara();

function calcularDelta(a, b, c) {
    return Math.pow(b, 2) - (4 * a * c);
}

function calcularX(a, b, delta) {
    const x1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(2);
    const x2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(2);
    return { x1, x2 };
}