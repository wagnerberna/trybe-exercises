//Ojbetos com objetos

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
//Assign (concatenar objetos em um novo vazio -Ficam em 2 arrays separados)
const ConcatenarCasalFamilia = Object.assign({}, { casalFit, familia });
console.log(ConcatenarCasalFamilia);
//console.table(ConcatenarCasalFamilia);

//spread concatenar array/Objeto -Ficam no mesmo array 4 objetos
const concatCasalFamilia = [...casalFit, ...familia];
console.log(concatCasalFamilia);

