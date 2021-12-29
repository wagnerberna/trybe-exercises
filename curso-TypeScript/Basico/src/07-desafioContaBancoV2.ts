// Desafio
// cria tipo contaCorrente
// depositar chave q recebe uma Fn sem retorno
type ContaCorrente = {
  saldo: number;
  depositar: (valor: number) => void;
};

// atribui a const o tipo criado
const contaCorrente: ContaCorrente = {
  saldo: 2300,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

// cria tipo cliente
type Cliente = {
  nome: string;
  contaCorrente: ContaCorrente;
  contatos: string[];
};

// atribui cliente
const cliente: Cliente = {
  nome: "Aline flores",
  contaCorrente: contaCorrente,
  contatos: ["99887766", "99554433"],
};

console.log("Desafio Conta Bancária V2:");
cliente.contaCorrente.depositar(500);
console.log(cliente);
console.log(cliente.contaCorrente.saldo);
