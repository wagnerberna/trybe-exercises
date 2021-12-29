"use strict";
// Desafio
const contaBancaria = {
    saldo: 2500,
    depositar(valor) {
        this.saldo += valor;
    },
};
const correntista = {
    nome: "Wagner Berna",
    contaBancaria: contaBancaria,
    contatos: ["99887766", "99554433"],
};
console.log("Desafio Conta Bancária:");
correntista.contaBancaria.depositar(500);
console.log(correntista);
console.log(correntista.contaBancaria.saldo);
