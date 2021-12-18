"use strict";
// Herança "extends" classe Ferrari herda os comportamentos da classe carro
// Protected permite alterar métodos como acelerar
// Ferrari têm todos comportamentos da classe carro
// super() chama construtor da classe pai
// já passa 1º param. marca "Ferrari" como padrão, passa somente os outros
class Ferrari extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super("Ferrari", modelo, velocidadeMaxima);
    }
    acelerar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
console.log("Ferrari Herança Classe Carro:");
const f40 = new Ferrari("F40", 324);
console.log(f40.acelerar());
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40);
