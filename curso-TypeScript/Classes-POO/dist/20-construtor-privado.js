"use strict";
// Construtor privado
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
    }
    agora() {
        return new Date();
    }
}
Unico.instance = new Unico();
console.log("construtor-privado");
console.log(Unico.getInstance().agora());
