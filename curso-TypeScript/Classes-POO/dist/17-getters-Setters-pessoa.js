"use strict";
// Getters e Setters: acessa como atributo público
// pode ser usado o get e set em um objeto sem ser classe
// usado para fazer algum tipo de validação, ou processamento do atributo
// get: buscar valor / set: setar valor
// "_" simboliza q é um atributo privado
// Privado: não acessa direto, somente via metodo interno da classe
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
console.log("Getters e Setters:");
const pessoa1 = new Pessoa();
pessoa1.idade = 10;
console.log(pessoa1);
pessoa1.idade = -5;
console.log(pessoa1.idade);
