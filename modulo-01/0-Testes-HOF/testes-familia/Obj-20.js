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

//FLATMAP
const vetorCasal = flatten(casalFit);
console.log(vetorCasal);


//FLAT achata array
// const vetorCasal = casalFamilia.flat();
// console.log(vetorCasal);

//busca combinada esporte
// let resultado;
// const buscaEsporte = casalFit.forEach(vetor => {
//   console.log(vetor);
//   return vetor.esportes.find(({nome}) => nome === 'Pole');

// })
// console.log(buscaEsporte);