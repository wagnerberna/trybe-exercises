"use strict";
function user(name) {
    const teste = "teste";
    return `Nome: ${name}`;
}
console.log("teste-Basico");
console.log(user("Wagner b"));
// TIPOS:
// declarar var coringa recebe qualquer valor
// sem especificar o tipo ou atribuir valor inicial ts entende como any
// var tipos: any, number, string, boolean
const coringa = "teste var coringa";
console.log(coringa);
// Union Types: "|" OU
let nota = 10;
nota = "10";
console.log(`Nota: ${nota}`);
// array de strings
console.log("Array:");
const hobbies = ["correr", "ler"];
console.log(hobbies[1]);
// Tuplas: Array com posições definidas
console.log("Tuplas:");
const endereco = ["Av. Principal", 99, "RS"];
console.log(endereco);
// Enums: enumeração ex: dias da semana, gênero, etc...
console.log("Enums:");
var cores;
(function (cores) {
    cores[cores["azul"] = 0] = "azul";
    cores[cores["verde"] = 1] = "verde";
    cores[cores["amarelo"] = 2] = "amarelo";
})(cores || (cores = {}));
console.log(cores);
console.log(cores[1]);
// Enums atribuindo valores, altera o index
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
console.log("Objetos:");
const usuario = {
    nome: "Wagner",
    idade: 40,
};
console.log(usuario);
// ":" atribui o tipo da variável
const usuario2 = {
    nome: "Aline",
    idade: 18,
};
console.log(usuario2);
