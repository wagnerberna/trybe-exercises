"use strict";
// never sem retorno p/ erros
function falha(msg) {
    throw new Error(msg);
}
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
console.log("tratamento de erro FN never:");
produto.validarProduto();
