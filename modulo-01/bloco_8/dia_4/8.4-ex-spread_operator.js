//---spred (...array) - unifica, manipula arrays em um Novo
//--ex1 
console.log('exemplo1:');
const numbers = [1, 2, 3];
const letters = ['a', 'b', 'c']

const newArray = [...numbers, 4, 5, 6];
const newArray2 = [...newArray, ...letters, 100, 1000];
console.log(`array original de números: ${numbers}`);
console.log(`array original de letras: ${letters}`);
console.log(`Novo array com mais números: ${newArray}`);
console.log(`Novo array letras e números: ${newArray2}`);

//--ex2 Objetos
console.log('exemplo2:');
const people = {
  id: 101,
  name: 'Alysson',
  age: 25,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: "Developer",
};

const customer = {...people, ...about};
console.log(customer);
