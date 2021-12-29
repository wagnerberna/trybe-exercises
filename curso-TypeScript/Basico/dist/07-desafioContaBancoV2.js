"use strict";
// atribui a const o tipo criado
const contaCorrente = {
    saldo: 2300,
    depositar(valor) {
        this.saldo += valor;
    },
};
// atribui cliente
const cliente = {
    nome: "Aline flores",
    contaCorrente: contaCorrente,
    contatos: ["99887766", "99554433"],
};
console.log("Desafio Conta Bancária V2:");
cliente.contaCorrente.depositar(500);
console.log(cliente);
console.log(cliente.contaCorrente.saldo);
