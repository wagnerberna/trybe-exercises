function user(name: string) {
  const teste = "teste";
  return `Nome: ${name}`;
}
console.log("teste-Basico");
console.log(user("Wagner b"));

// TIPOS:
// any: var coringa
let coringa: any = "teste var coringa";
console.log(`var coringa: ${coringa}`);
coringa = 29;
console.log(`var coringa: ${coringa}`);

// Union Types: "|"
// tipo number OU string
let nota: number | string = 10;
nota = "10";
console.log(`Nota: ${nota}`);

//null: p/ dados opcionais
const alturaOpcional: null | number = null;
console.log(`altura igual: ${alturaOpcional} metros`);

// array de strings
console.log("Array:");

const hobbies: string[] = ["correr", "ler"];
console.log(hobbies[1]);

// Tuplas: C/ posições de tipos definidos
console.log("Tuplas:");

const endereco: [string, number, string] = ["Av. Principal", 99, "RS"];
console.log(endereco);

// Enums: enumeração
console.log("Enums:");

enum cores {
  azul,
  verde,
  amarelo,
}
console.log(cores);
console.log(cores[1]);
// Enums atribuindo valores
enum cores2 {
  Azul,
  verde = 100,
  Amarelo,
  vermelho = 105,
}
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

const usuario2: { nome: string; idade: number } = {
  nome: "Aline",
  idade: 18,
};
console.log(usuario2);

// criar tipo de objeto reutilizável
console.log("Criar tipo de objeto:");

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

const contato2: Contato = {
  nome: "Aline",
  tel1: "99554433",
  tel2: null,
};
console.log(contato2);
console.log(contato2.tel2);
