// Desafo
console.log("Desafio Conta Bancária:");
const contaBancaria = {
  saldo: 2500,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

const correntista = {
  nome: "Wagner Berna",
  contaBancaria: contaBancaria,
  contatos: ["99887766", "99554433"],
};

correntista.contaBancaria.depositar(500);
console.log(correntista);
console.log(correntista.contaBancaria.saldo);
