//---map retorna um novo array
//--ex1 retorna array com "nome sobrenome"
console.log('exemplo1:');

const persons = [
  { firstName: "Maria", lastName: "Ferreira" },
  { firstName: "João", lastName: "Silva" },
  { firstName: "Antonio", lastName: "Cabral" },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

console.log(fullNames); // [ 'Maria Ferreira', 'João Silva', 'Antonio Cabral' ]

//--ex2 Novo Array transformando em números negativos - Op. Ternário
console.log('exemplo2:');

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map(number => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]

//--ex3 Unir 2 Arrays, pos1 C/ Pos1 - Chave: Valor (produto: Preço)
console.log('exemplo3:');

const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];

const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => {
  return listProducts.map((product, index) => (
    { [product]: listPrices[index] }
  ));
};

const listProducts = updateProducts(products, prices);
console.log(listProducts);

//--ex4 map - forEach
console.log('exemplo4:');

const numeros = [1, 2, 3, 4, 5, 6];
console.log(numeros.map(numero => numero * 2)); // Retorno: [2, 4, 6, 8, 10, 12]

const paresMenoresQueCinco = [];
numeros.forEach(numero => {
  if(numero < 5 && numero % 2 === 0) {
    paresMenoresQueCinco.push(numero);
  }
})
console.log(paresMenoresQueCinco); // Retorno: [2, 4]

