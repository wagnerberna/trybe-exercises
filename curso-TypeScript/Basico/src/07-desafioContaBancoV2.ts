// Desafo
console.log("Desafio Conta Bancária V2:");

// depositar chave q recebe uma Fn sem retorno
type ContaCorrente = {
  saldo: number;
  depositar: (valor: number) => void;
};

// define var como do tipo Conta...
const contaCorrente: ContaCorrente = {
  saldo: 2300,
  depositar(valor: number) {
    this.saldo += valor;
  },
};

type Cliente = {
  nome: string;
  contaCorrente: ContaCorrente;
  contatos: string[];
};

const cliente: Cliente = {
  nome: "Aline flores",
  contaCorrente: contaCorrente,
  contatos: ["99887766", "99554433"],
};

cliente.contaCorrente.depositar(500);
console.log(cliente);
console.log(cliente.contaCorrente.saldo);
