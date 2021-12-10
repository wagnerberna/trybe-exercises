"use strict";
console.log("FNs:");
// fn S/ Retorno "void"
function mensagem() {
    console.log("Olá Mundo");
}
mensagem();
// fn recebe 2 num eretorna um "number"
function soma(numA, numB) {
    console.log("soma A + B");
    return numA + numB;
}
console.log(soma(3, 2));
// fn recebe 2 num retorna um "boolean"
function compara(numA, numB) {
    console.log("compara A = B");
    if (numA === numB)
        return true;
    return false;
}
console.log(compara(3, 3));
// fn tipo funcao recebe uma funcao retorna number
let calculo;
calculo = soma;
console.log(calculo(5, 2));
