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
const casalFamilia = [...casalFit, ...familia];
console.log(casalFamilia);

//retornar o mais novo
const idadeNovo = casalFamilia.reduce((acc, valor) => {
  if (valor.age < acc.age) {
    acc = valor;
  }
  return acc;
})
console.log(idadeNovo);

// retornar todos com menos de 45.
const idadeMenos45 = casalFamilia.reduce((acc, valor) => {
  if (valor.age < 20) {
    //console.log(acc, valor);
    acc.push(acc);
  }
  return acc;
},[]);

console.log(idadeMenos45);

