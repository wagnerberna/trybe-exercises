// never sem retorno não termina da forma esperada
//  diferente do void usado p/ erros
console.log("Tratamento de erro:");
function falha(msg: string): never {
  throw new Error(msg);
}

// trim() retira espaços vazios
// se não tem nome ou nome é vazio
const produto = {
  nome: "Boneco",
  preco: 50,
  validarProduto() {
    if (!this.nome || this.nome.trim().length == 0) {
      falha("precisa ter um nome");
    }
    if (this.preco <= 0) {
      falha("Preço inválido!");
    }
  },
};

produto.validarProduto();
