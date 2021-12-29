"use strict";
function user(name) {
    const teste = "teste";
    return `Nome: ${name}`;
}
console.log("teste-Basico");
console.log(user("Wagner b"));
// TIPOS:
// any: var coringa
let coringa = "teste var coringa";
console.log(`var coringa: ${coringa}`);
coringa = 29;
console.log(`var coringa: ${coringa}`);
// Union Types: "|"
// tipo number OU string
let nota = 10;
nota = "10";
console.log(`Nota: ${nota}`);
//null: p/ dados opcionais
const alturaOpcional = null;
console.log(`altura igual: ${alturaOpcional} metros`);
// array de strings
console.log("Array:");
const hobbies = ["correr", "ler"];
console.log(hobbies[1]);
// Tuplas: C/ posições de tipos definidos
console.log("Tuplas:");
const endereco = ["Av. Principal", 99, "RS"];
console.log(endereco);
// Enums: enumeração
console.log("Enums:");
var cores;
(function (cores) {
    cores[cores["azul"] = 0] = "azul";
    cores[cores["verde"] = 1] = "verde";
    cores[cores["amarelo"] = 2] = "amarelo";
})(cores || (cores = {}));
console.log(cores);
console.log(cores[1]);
// Enums atribuindo valores
var cores2;
(function (cores2) {
    cores2[cores2["Azul"] = 0] = "Azul";
    cores2[cores2["verde"] = 100] = "verde";
    cores2[cores2["Amarelo"] = 101] = "Amarelo";
    cores2[cores2["vermelho"] = 105] = "vermelho";
})(cores2 || (cores2 = {}));
console.log(cores2);
console.log(cores2[100]);
console.log(cores2.verde);
// objetos
console.log("Objetos:");
const usuario = {
    nome: "Wagner",
    idade: 40,
};
console.log(usuario);
const usuario2 = {
    nome: "Aline",
    idade: 18,
};
console.log(usuario2);
// criar tipo de objeto reutilizável
console.log("Criar tipo de objeto:");
const contato1 = {
    nome: "Wagner",
    tel1: "99887766",
    tel2: null,
};
console.log(contato1);
console.log(contato1.tel2);
const contato2 = {
    nome: "Aline",
    tel1: "99554433",
    tel2: null,
};
console.log(contato2);
console.log(contato2.tel2);
