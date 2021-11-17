const readline = require('readline-sync');

function obterFatorial() {
    let fatorial = readline.questionInt('Calcular fatorial de: ');
    let resultado = fatorial;

    for(let i = fatorial-1; i > 1; i--){
        resultado = resultado * i;
    }

    console.log(`O fatorial de ${fatorial} é ${resultado}.`)
}

obterFatorial();