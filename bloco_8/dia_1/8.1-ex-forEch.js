//---forEach
//--ex1 forEach Array verificação se é par.
console.log('exemplo1:');

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (element) => {
  if (element % 2 === 0) {
  console.log(`Números Pares:
  ${element}`);
  }
};

numbers.forEach(isEven);

//--ex2 forEach Array multiplicação por 2
console.log('exemplo2:');
//const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multipliesFor2 = (element) => {
  console.log(`${element} * 2: ${element * 2}`);
};

numbers.forEach(multipliesFor2);

//--ex3 ForEach - Objetos Mostra cada elemento do array:
console.log('exemplo3:');

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

//--ex4
console.log('exemplo4:');

const names = ["Bianca", "Camila", "Fernando", "Ana Roberta"];

const convertToUpperCase = (name, index) => {
  names[index] = name.toUpperCase();
}

names.forEach(convertToUpperCase);
console.log(names); // [ 'BIANCA', 'CAMILA', 'FERNANDO', 'ANA ROBERTA' ]

