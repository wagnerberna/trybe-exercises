"use strict";
// Desafo
console.log("Desafio Conta Bancária V2:");
// define var como do tipo Conta...
const contaCorrente = {
    saldo: 2300,
    depositar(valor) {
        this.saldo += valor;
    },
};
const cliente = {
    nome: "Aline flores",
    contaCorrente: contaCorrente,
    contatos: ["99887766", "99554433"],
};
cliente.contaCorrente.depositar(500);
console.log(cliente);
console.log(cliente.contaCorrente.saldo);
