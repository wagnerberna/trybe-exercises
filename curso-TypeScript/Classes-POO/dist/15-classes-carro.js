"use strict";
// Modificadores de Acesso: Public / Private
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novaVelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novaVelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
console.log("Classe Carro:");
const carro1 = new Carro("Ferrari", "C300", 250);
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.acelerar());
console.log(carro1.frear());
console.log(carro1.acelerar());
Array(50)
    .fill(0)
    .forEach(() => console.log(carro1.acelerar()));
console.log(carro1.acelerar());
console.log(carro1);
Array(60)
    .fill(0)
    .forEach(() => console.log(carro1.frear()));
console.log(carro1.frear());
