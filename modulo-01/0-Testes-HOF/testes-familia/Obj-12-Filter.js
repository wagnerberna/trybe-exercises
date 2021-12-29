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

// filter array num
const filterVetorNum = vetorNum.filter(num => num > 10);
console.log(filterVetorNum);

// filter array string q começam com W
const filterVetorString = vetorString.filter(el => el.startsWith('T'));
console.log(filterVetorString);

//filter com Objetos
console.log(casalFit);
//retorna objeto 
const filterObjNome = casalFit.filter((obj) => obj.name === 'Wagner');
console.log(filterObjNome);

//idade
const filterObjIdade = casalFit.filter((obj) => obj.age > 15);
console.log(filterObjIdade);

//esporte não deu certo

const filterObjEsporte = casalFit.esportes.filter((obj) => obj.nome === 'Pole');
console.log(filterObjEsporte);
