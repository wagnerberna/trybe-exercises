const casalFit = [
  {
    name: 'Wagner',
    lastName: 'Berna',
    age: 38,
    esportes: [
      {
        nome: 'Corrida',
        beneficio: 'Resistência',
      },
      {
        nome: 'Calistenia',
        beneficio: 'Força',
      },
    ]
  },
  {
    name: 'Aline',
    lastName: 'Flores',
    age: 18,
    esportes: [
      {
        nome: 'Ballet',
        beneficio: 'Flexibilidade',
      },
      {
        nome: 'Pole',
        beneficio: 'consciência corporal',
      },
    ]
  },
]
const familia = [
  {
  name: 'Tânia',
  lastName: 'Berna',
  age: 40,
  },
    {
  name: 'Zeli',
  lastName: 'Flores',
  age: 50,
  }
]

vetorNum = [5, 7, 11, 2];
vetorString = ['Wagner', 'Aline', 'Tuca', 'Pitty', 'Thor'];
console.log(vetorNum);
console.log(vetorString);

// somar todos itens
const somaNum = vetorNum.reduce((acc, valor) => {
  console.log(acc, valor);
  acc += valor;
  return acc;
},0);
console.log(somaNum);

// somar todos itens ímpares
const somaNumImpar = vetorNum.reduce((acc, valor) => {
  if (valor % 2 !== 0) {
    console.log(acc, valor);
    acc += valor;
  }
  return acc;
},0);
console.log(somaNumImpar);

// string c/ espaço nomes
const reduceString = vetorString.reduce((acc, valor) => {
  if (valor.length > 4) {
    console.log(acc, valor);
    acc += (` ${valor}`);
  }
  return acc;
},);
console.log(reduceString);
