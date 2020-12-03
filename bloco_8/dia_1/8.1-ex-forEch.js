//HOF
//---ex1 forEach Array verificação se é par.
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (element) => {
  if (element % 2 === 0) {
  console.log(`Números Pares:
  ${element}`);
  }
};

numbers.forEach(isEven);

//---ex2 forEach Array multiplicação por 2
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//--ex3 ForEach - Objetos Mostra cada elemento do array:
const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

