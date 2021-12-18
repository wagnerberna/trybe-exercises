"use strict";
// Modificadores de Acesso: Public / Private
// Atributo privado não pode ser definido
//  só pode ser alterado pela própria classe carro internamente
class Carro {
    // no construtor ficam os param. q a classe vai receber
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    // validação da velocidade se é positiva e menor q máxima:
    // true seta velocidadeAtual
    // false else: velocidadeAtual receber op. ternário
    // se delta maior q 0 "positivo" sinal q ultrapassou a velocidade máxima,
    // logo recebe velocidadeMaxima, senão recebe 0 pq delta é "negativo" e ultrapssou
    // 0km hora
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
const carro1 = new carro("Ferr");
