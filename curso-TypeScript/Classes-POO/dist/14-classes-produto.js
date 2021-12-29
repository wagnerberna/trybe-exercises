"use strict";
class Produto {
    constructor(nome, preco, desconto = 0, precoTotal) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
        this.precoTotal = precoTotal;
    }
    resumo() {
        this.precoComDesconto();
        return `${this.nome} custa R$${this.preco} (${this.desconto * 100}% off)
    Valor com desconto: ${this.precoTotal}`;
    }
    precoComDesconto() {
        const valorDesconto = this.preco * this.desconto;
        this.precoTotal = this.preco - valorDesconto;
    }
}
const prod1 = new Produto("Caneta", 2.25);
prod1.desconto = 0.05;
console.log(prod1);
console.log(prod1.resumo());
const prod2 = new Produto("Caderno", 5.0, 0.15);
console.log(prod2);
console.log(prod2.resumo());
