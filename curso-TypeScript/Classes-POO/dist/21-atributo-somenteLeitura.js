"use strict";
// Atributo somente leitura: atributo só é escrito 1x
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
// erro ao atribuir
const turboHelice = new Aviao("Tu-114", "PT-ABC");
turboHelice.modelo = "zzzz";
turboHelice.prefixo = "yyyy";
console.log(turboHelice);
