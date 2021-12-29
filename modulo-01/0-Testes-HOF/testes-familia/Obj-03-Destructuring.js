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
vetorNum = [5, 7, 11, 2];
//destructuring em array atribuindo uma variável para cada item
vetorString = ['Wagner', 'Aline', 'Tuca', 'Pitty', 'Thor'];
const [el1, el2, el3] = vetorString;
console.log(el1);

console.log(casalFit);
console.log(casalFit[0].esportes[0].nome);

//destructuring separando cada um dos arrays:
const [array0, arra1] = casalFit;
console.log(array0);

//destructuring separando objetos de cada array
const { name: nP0, lastName: lP0, age: aP0, esportes: eP0 } = casalFit[0];
console.log(nP0, lP0, aP0, eP0);
console.log(eP0);

const { nome: e0NomeP0, beneficio: e0BenP0 } = eP0[0];
console.log(e0NomeP0, e0BenP0);

