"use strict";
// FN sintaxe
console.log("FN Sintaxe Arrow e This:");
// nomeada
function somarV1(n1, n2) {
    return n1 + n2;
}
// anonima c/ const
const somarV2 = function (n1, n2) {
    return n1 + n2;
};
// Arrow
const somarV3 = (n1, n2) => n1 + n2;
console.log(somarV3(2, 3));
// arrow sem parâmetro
const saudacao = () => console.log("olá");
console.log(saudacao());
// This / bind(passa parametro para o this da fn)
function normalComThis() {
    console.log(this);
}
normalComThis(); //undefined
const chamaNormalComthis = normalComThis.bind({ nome: "Wagner" });
chamaNormalComthis(); //retorna passado no bind
// arrow c/ this(tem retorno diferente nunca varia mesmo usando bind)
const arrowComThis = () => console.log(this);
const chamaArowComThis = arrowComThis.bind({ nome: "Aline" });
chamaArowComThis(); // retorna window
