"use strict";
// static: atributos e métodos estatáticos
class Matematica {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
console.log("Atributos e Métodos Estatáticos:");
// Não precisa instanciar para acessar
console.log(Matematica.areaCirc(4));
// não acessa por instância
// const m1 = new Matematica();
// m1.PI = 4.2;
// console.log(m1.areaCirc(4));
