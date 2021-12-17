function user(name: string) {
  const teste = "teste";
  return `Nome: ${name}`;
}
console.log("teste-Basico");
console.log(user("Wagner b"));

// TIPOS:
// declarar var coringa recebe qualquer valor
// sem especificar o tipo ou atribuir valor inicial ts entende como any
// var tipos: any, number, string, boolean
const coringa: any = "teste var coringa";
console.log(coringa);

// Union Types: "|"
// Se puder receber 2 tipos
// tipo number ou string
let nota: number | string = 10;
nota = "10";
console.log(`Nota: ${nota}`);

// Type não permite atribuir valor null só se for definido
// usado para dados opcionais
const alturaOpcional: null | number = null;
console.log(`altura igual: ${alturaOpcional} metros`);

// array de strings
console.log("Array:");
const hobbies: string[] = ["correr", "ler"];
console.log(hobbies[1]);

// Tuplas: Array com posições definidas
console.log("Tuplas:");
const endereco: [string, number, string] = ["Av. Principal", 99, "RS"];
console.log(endereco);

// Enums: enumeração ex: dias da semana, gênero, etc...
console.log("Enums:");
enum cores {
  azul,
  verde,
  amarelo,
}
console.log(cores);
console.log(cores[1]);
// Enums atribuindo valores, altera o index
enum cores2 {
  Azul,
  verde = 100,
  Amarelo,
  vermelho = 105,
}
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
const usuario2: { nome: string; idade: number } = {
  nome: "Aline",
  idade: 18,
};
console.log(usuario2);

console.log("valores nulos");
// Definir um tipo para ser reutilizado
type Contato = {
  nome: string;
  tel1: string;
  tel2: string | null;
};

const contato1: Contato = {
  nome: "Wagner",
  tel1: "99887766",
  tel2: null,
};
console.log(contato1);
console.log(contato1.tel2);
