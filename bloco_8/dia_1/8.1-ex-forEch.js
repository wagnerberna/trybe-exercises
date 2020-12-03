//HOF
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

//--ex4 map forEach
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

