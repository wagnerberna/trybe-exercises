//---reduce
// //--ex1 reduce
console.log('exemplo1:');
const numbers = [32, 15, 3, 2, -5, 56, 10];

const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
console.log(sumNumbers); // 113

//--ex1-2 - extendido:
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

//--ex2 reduce
console.log('exemplo2:');
const collection = [1, 2, 3, 4, 5];

const getSum2 = (accumulator, number) => {
  console.log(`var acumulador: ${accumulator}`); // 1 3 6 10
  return accumulator + number;
};

const sumNumbers2 = collection.reduce(getSum2);
console.log(`exemplo2: ${sumNumbers}`); // 15

//--ex3.1 reduce
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 32 47 50 52 47 103
//   return result + number;
// };

// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

//--ex3.2 reduce C/Parâmetro add 0
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 0); // Parâmetro adicionado ao reduce: o "0"
// console.log(sumNumbers); // 113

//--ex3.3 reduce C/Parâmetro add 10
// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const getSum = (result, number) => {
//   console.log(result); // 0 32 47 50 52 47 103
//   return result + number;
//   };
// const sumNumbers = numbers.reduce(getSum, 100); // Parâmetro inicial reduce: "10"
// console.log(sumNumbers); // 113

//--EX4 Reduce retorna o maior número com ternário
// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

//--ex5.1 reduce e filter função que some todos os números pares do array: 
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (currentValue, number) => currentValue + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152

// //--ex5.2 reduce e filter função que some todos os números pares do array: 
// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPair = (currentValue, number) => (
//   (number % 2 === 0) ? currentValue + number : currentValue;
// );

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152

