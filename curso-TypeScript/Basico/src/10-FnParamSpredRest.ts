// parametro definindo valor padrão
function contagemRegressiva(inicio = 3): void {
  console.log(inicio);
  while (inicio > 0) {
    inicio--;
    console.log(inicio);
  }
}

console.log("definir param. padrão");
contagemRegressiva();
console.log("-----");
contagemRegressiva(5);

function contagemRegressiva2(inicio = 5, fim: number = inicio - 5): void {
  console.log(inicio);
  while (inicio > fim) {
    inicio--;
    console.log(inicio);
  }
}

console.log("-----");
contagemRegressiva2();

// ...spread: espalhar parâmetros
console.log("...spread operator:");
const numbers = [1, 10, 5];
console.log(Math.max(numbers[0], numbers[1], numbers[2]));
// passar todos itens do array como parâmetro
console.log(Math.max(...numbers));

const turmaA: string[] = ["Bruce", "Clark", "Diana"];
const turmaB: string[] = ["Barry", "Arthur"];
const turmaC: string[] = ["Barry", ...turmaA];
const turmasAB: string[] = [...turmaA, ...turmaB];
const turmaTeste: string[] = [];
turmaTeste.push(...turmaA);

console.log(turmaC);
console.log(turmasAB);
console.log(turmaTeste);

// ...rest: juntar, agrupar parâmetros
console.log("...rest operator:");

function retornaArray(...args: number[]): number[] {
  return args;
}

const numeros = retornaArray(1, 10, 7, 5);
console.log(numeros);

// usando rest na FN p/receber e spread p/ passar parm
const numeros2 = retornaArray(...numbers);
console.log(numeros2);

// spread / rest c/ tuplas
console.log("spread / rest c/ tuplas:");

const tupla: [number, string, boolean] = [1, "abc", false];

function tuplaParam1(a: number, b: string, c: boolean): void {
  console.log(`1) ${a} ${b} ${c}`);
}

tuplaParam1(...tupla);

// Array.isArray verifica se é um array
function tuplaParam2(...params: [number, string, boolean]): void {
  console.log(Array.isArray(params));
  console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}

tuplaParam2(...tupla);

// destructuring (desestruturar array)
console.log("destructuring:");
const caracteristicas = ["motor Zetec 1.8", 2020];

// forma tradicional:
const motorTipo = caracteristicas[0];
const anoFabricacao = caracteristicas[1];

const [motor, ano] = caracteristicas;
console.log(motor, ano);

// atribuindo valor e desestruturando
const [W, A] = [40, 20];
console.log(W, A);

// destructuring (desestruturar objeto)
const item = {
  nome: "SSD 512GB",
  preco: "200",
};

// forma tradicional:
const nomeItem = item.nome;
const precoItem = item.preco;

const { nome, preco } = item;
console.log(nome, preco);

// Alias
const { nome: N, preco: P } = item;
console.log(N, P);

// template string
console.log("template literals");
const userGroup = "Suporte";
const accessLevel = "1";
const boasVindas = `
  Boas Vindas ${userGroup},
  Nível de acesso: ${
    parseInt(accessLevel) >= 2 ? "Não Confidencial" : "Confidencial"
  }
`;
console.log(boasVindas);
