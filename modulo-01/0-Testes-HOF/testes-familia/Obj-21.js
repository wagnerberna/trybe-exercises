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

//desestruturando em 2 vetores:
const [vetor01, vetor02] = casalFit;
console.log(vetor01, vetor02);

//desestruturando esportes:
const{esportes: vetor01Esportes} = vetor01;
console.log(vetor01Esportes);

// const buscaEsporte = vetor01Esportes.forEach(el => {
//   return el.find(({nome}) => nome === 'Corrida');
// });

vetor01Esportes.find(el => el.nome === corrida);
console.log(buscaEsportes);
