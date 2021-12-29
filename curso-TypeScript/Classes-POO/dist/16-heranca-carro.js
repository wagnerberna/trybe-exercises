"use strict";
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
